'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { QADataset, Category } from '../types/qa';
import qaData from '../data/qa_dataset.json';
import { FaRobot, FaUser, FaPaperPlane, FaRegLightbulb, FaCopy, FaMicrophone, FaHistory, FaThumbsUp, FaThumbsDown, FaTimes } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

// TypeScript declarations for the Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  liked?: boolean;
  disliked?: boolean;
  id: string;
  followUpQuestions?: string[];
  category?: string;
}

interface CategoryData {
  name: string;
  questions: {
    base_question: string;
    variations: string[];
    answer: string;
  }[];
}

interface SuggestedQuestion {
  text: string;
  category: string;
}

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionErrorEvent {
  error: string;
}

interface ConversationContext {
  lastCategory?: string;
  lastTopic?: string;
  followUps: string[];
}

const Dashya: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [context, setContext] = useState<ConversationContext>({ followUps: [] });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const skillCategories = {
    programming: {
      title: "Programming & Data Science",
      skills: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "SQL", "Jupyter"]
    },
    ai_ml: {
      title: "AI & Machine Learning",
      skills: ["Deep Learning", "NLP", "Computer Vision", "Time Series Forecasting", "Prompt Engineering"]
    },
    data_analytics: {
      title: "Data Analytics",
      skills: ["Tableau", "Statistical Analysis", "Data Visualization", "Data Preprocessing"]
    },
    web_dev: {
      title: "Web Development",
      skills: ["ReactJS", "Next.js", "HTML", "CSS", "API Integration"]
    },
    tools: {
      title: "Tools & Platforms",
      skills: ["Git", "AWS", "Docker", "Jupyter Notebooks", "VS Code"]
    }
  };

  // Initial greeting
  useEffect(() => {
    const greeting = {
      text: "Hi! I'm Dashya, Sai's AI assistant. I can help you learn about Sai's education, experience, skills, projects, and more! Feel free to ask me anything or try one of the suggested questions below.",
      isUser: false,
      timestamp: new Date(),
      id: 'greeting'
    };
    setMessages([greeting]);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Voice recognition setup
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        handleSend(transcript);
      };
      
      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      return () => {
        recognition.abort();
      };
    }
  }, []);

  const startListening = () => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      setIsListening(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.start();
    }
  };

  // Helper function to get category-specific follow-up questions
  const getCategoryFollowUps = (category: string): string[] => {
    const commonFollowUps = {
      'personal_information': [
        "Where are you currently located?",
        "When will you graduate?",
        "Are you eligible for OPT?"
      ],
      'education': [
        "What was your GPA in undergrad?",
        "What key subjects did you study at NJIT?",
        "Tell me about your academic achievements"
      ],
      'professional_experience': [
        "What was your role at Webdaddy?",
        "What did you achieve at Findem?",
        "Tell me about your automation work"
      ],
      'skills': [
        "What programming languages do you know?",
        "Tell me about your AI/ML experience",
        "What data visualization tools do you use?"
      ],
      'projects': [
        "Tell me about the Real Traffic Analysis project",
        "What was your contribution to Loan Wise?",
        "Explain the AI real estate website project"
      ],
      'certifications': [
        "What certifications do you have?",
        "Tell me about your ExcelR certification",
        "What did you learn in your certifications?"
      ],
      'contact_information': [
        "What's your email?",
        "Where can I find your GitHub?",
        "How can I connect with you on LinkedIn?"
      ],
      'technical_stack': [
        "What technologies does your portfolio use?",
        "Tell me about your experience with React",
        "What frameworks are you familiar with?"
      ]
    };

    return commonFollowUps[category as keyof typeof commonFollowUps] || [];
  };

  const findBestMatch = (question: string): { answer: string; category?: string; topic?: string } => {
    try {
      const normalizedQuestion = question.toLowerCase();
      
      // First, try exact matches from QA dataset
      const typedQAData = qaData as QADataset;
      for (const [categoryName, category] of Object.entries<Category>(typedQAData.categories)) {
        for (const qa of category.questions) {
          // Check base question
          if (normalizedQuestion.includes(qa.base_question.toLowerCase())) {
            return {
              answer: qa.answer,
              category: categoryName,
              topic: qa.base_question
            };
          }

          // Check variations
          for (const variation of qa.variations) {
            if (normalizedQuestion.includes(variation.toLowerCase())) {
              return {
                answer: qa.answer,
                category: categoryName,
                topic: qa.base_question
              };
            }
          }
        }
      }

      // If no exact match, try skill-specific questions
      if (normalizedQuestion.includes('skill') || normalizedQuestion.includes('know') || normalizedQuestion.includes('experience with')) {
        for (const [key, category] of Object.entries(skillCategories)) {
          const categoryMentioned = normalizedQuestion.includes(key.toLowerCase()) || 
                                  normalizedQuestion.includes(category.title.toLowerCase());
          
          if (categoryMentioned) {
            const answer = `In ${category.title}, Sai is proficient in: ${category.skills.join(', ')}. Would you like to know more about any specific skill?`;
            return { 
              answer,
              category: 'skills',
              topic: category.title
            };
          }

          const mentionedSkills = category.skills.filter(skill => 
            normalizedQuestion.includes(skill.toLowerCase())
          );

          if (mentionedSkills.length > 0) {
            const answer = `Yes, Sai is experienced with ${mentionedSkills.join(', ')}. These skills fall under ${category.title}. Would you like to know about specific projects where these skills were used?`;
            return { 
              answer,
              category: 'skills',
              topic: mentionedSkills[0]
            };
          }
        }

        const answer = `Sai has expertise in several areas:\n\n${Object.values(skillCategories)
          .map(category => `${category.title}:\n- ${category.skills.join('\n- ')}`)
          .join('\n\n')}\n\nWhich area would you like to know more about?`;
        return { 
          answer,
          category: 'skills'
        };
      }

      // If still no match, try fuzzy matching
      let bestMatch = {
        score: 0,
        answer: "I apologize, but I don't have specific information about that. Could you please ask something about Sai's education, experience, skills, projects, or contact information?",
        category: undefined as string | undefined,
        topic: undefined as string | undefined
      };

      const stopWords = ['what', 'where', 'when', 'how', 'who', 'which', 'tell', 'me', 'about', 'can', 'you', 'please'];
      const questionWords = normalizedQuestion.split(/\s+/);
      const filteredWords = questionWords.filter(word => !stopWords.includes(word));

      for (const [categoryName, category] of Object.entries<Category>(typedQAData.categories)) {
        for (const qa of category.questions) {
          let score = 0;
          const allQuestionWords = [
            ...qa.base_question.toLowerCase().split(/\s+/),
            ...qa.variations.flatMap((v: string) => v.toLowerCase().split(/\s+/))
          ];

          const uniqueKeywords = Array.from(new Set(allQuestionWords)).filter(word => !stopWords.includes(word));
          const matchingWords = filteredWords.filter(word => uniqueKeywords.includes(word));
          
          score = matchingWords.length / Math.max(filteredWords.length, uniqueKeywords.length);

          if (score > bestMatch.score) {
            bestMatch = {
              score,
              answer: qa.answer,
              category: categoryName,
              topic: qa.base_question
            };
          }
        }
      }

      // If we have a good match, return it with follow-up suggestions
      if (bestMatch.score > 0.3) {
        return bestMatch;
      }

      // If no good match, return a helpful message
      return {
        answer: "I'm not quite sure about that. Here are some things you can ask me about:\n\n" +
                "• Personal Information (location, graduation, OPT status)\n" +
                "• Education (NJIT, SCSVMV University, courses)\n" +
                "• Professional Experience (Webdaddy, Findem)\n" +
                "• Skills (programming, AI/ML, data science)\n" +
                "• Projects (Traffic Analysis, Loan Wise, AI real estate)\n" +
                "• Certifications (ExcelR, Data Science)\n" +
                "• Contact Information (email, GitHub, LinkedIn)\n\n" +
                "What would you like to know about?"
      };
    } catch (err) {
      console.error('Error in findBestMatch:', err);
      return {
        answer: "I apologize, but I encountered an error. Please try asking your question differently."
      };
    }
  };

  const handleSend = async (text: string = inputText) => {
    if (!text.trim()) return;

    try {
      setError(null);
      const userMessage: Message = {
        text: text,
        isUser: true,
        timestamp: new Date(),
        id: `user-${Date.now()}`
      };
      setMessages(prev => [...prev, userMessage]);
      setInputText('');
      setIsTyping(true);

      const delay = Math.random() * 1000 + 1000;
      setTimeout(() => {
        const { answer, category, topic } = findBestMatch(text);
        
        // Get category-specific follow-up questions
        const followUps = category ? getCategoryFollowUps(category) : [];
        
        // Update conversation context
        if (category) {
          setContext(prev => ({
            lastCategory: category,
            lastTopic: topic || prev.lastTopic,
            followUps
          }));
        }

        const botMessage: Message = {
          text: answer,
          isUser: false,
          timestamp: new Date(),
          id: `bot-${Date.now()}`,
          category,
          followUpQuestions: followUps
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, delay);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.');
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputText(question);
    handleSend(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleReaction = (messageId: string, reaction: 'like' | 'dislike') => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        if (reaction === 'like') {
          return {
            ...msg,
            liked: !msg.liked,
            disliked: false
          };
        } else {
          return {
            ...msg,
            liked: false,
            disliked: !msg.disliked
          };
        }
      }
      return msg;
    }));
  };

  const clearHistory = () => {
    const greeting = messages[0];
    setMessages([greeting]);
  };

  // Minimize the number of suggested questions and make them more concise
  const suggestedQuestions: SuggestedQuestion[] = [
    { text: "Tell me about Sai", category: "personal" },
    { text: "Education background?", category: "education" },
    { text: "Technical skills?", category: "skills" },
    { text: "Recent projects?", category: "projects" }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[600px] flex flex-col">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center text-white gap-2">
              <FaRobot className="text-2xl" />
              <div>
                <h2 className="text-xl font-bold">Dashya - AI Assistant</h2>
                <p className="text-sm opacity-80">Ask me anything about Sai!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                title="Chat History"
              >
                <FaHistory />
              </button>
              {showHistory && (
                <button
                  onClick={clearHistory}
                  className="text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                >
                  Clear History
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/20 rounded-full"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && <FaRobot className="mt-2 text-[#3f2b96] text-xl flex-shrink-0" />}
                <div className="group relative">
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <ReactMarkdown
                      components={{
                        p: ({node, ...props}) => <p className="text-sm whitespace-pre-wrap" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc ml-4 mt-2" {...props} />,
                        li: ({node, ...props}) => <li className="text-sm text-gray-700" {...props} />
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>

                    {/* Follow-up questions */}
                    {!message.isUser && message.followUpQuestions && message.followUpQuestions.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs font-medium text-gray-600 mb-2">You might also want to know:</p>
                        <div className="flex flex-wrap gap-2">
                          {message.followUpQuestions.map((question, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSend(question)}
                              className="text-xs px-2 py-1 rounded-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 transition-colors"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>

                    {/* Message actions */}
                    {!message.isUser && (
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-200">
                        <button
                          onClick={() => handleReaction(message.id, 'like')}
                          className={`p-1.5 rounded-full transition-colors ${
                            message.liked 
                              ? 'bg-green-100 text-green-500' 
                              : 'hover:bg-gray-200 text-gray-500'
                          }`}
                          title="Helpful"
                        >
                          <FaThumbsUp className="text-sm" />
                        </button>
                        <button
                          onClick={() => handleReaction(message.id, 'dislike')}
                          className={`p-1.5 rounded-full transition-colors ${
                            message.disliked 
                              ? 'bg-red-100 text-red-500' 
                              : 'hover:bg-gray-200 text-gray-500'
                          }`}
                          title="Not helpful"
                        >
                          <FaThumbsDown className="text-sm" />
                        </button>
                        <button
                          onClick={() => handleCopyMessage(message.text)}
                          className="p-1.5 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                          title="Copy message"
                        >
                          <FaCopy className="text-sm" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {message.isUser && <FaUser className="mt-2 text-[#3f2b96] text-xl flex-shrink-0" />}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-2">
                <FaRobot className="mt-2 text-[#3f2b96] text-xl" />
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Minimized suggested questions */}
          <div className="border-t border-gray-100 px-4 py-2">
            <div className="flex items-center gap-2">
              <FaRegLightbulb className="text-[#3f2b96] text-sm" />
              <div className="flex gap-1 overflow-x-auto no-scrollbar">
                {suggestedQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(q.text)}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors whitespace-nowrap"
                  >
                    {q.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input area */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Sai..."
                className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3f2b96] focus:border-transparent"
                rows={1}
              />
              <button
                onClick={startListening}
                className={`p-2 rounded-lg transition-colors ${
                  isListening 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                title="Voice input"
              >
                <FaMicrophone />
              </button>
              <button
                onClick={() => handleSend()}
                className="px-4 py-2 bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>Send</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          aria-label="Open chat assistant"
        >
          <FaRobot size={24} />
        </button>
      )}
    </div>
  );
};

export default Dashya; 