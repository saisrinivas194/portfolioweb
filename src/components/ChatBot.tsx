'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner, FaUser } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

interface Message {
  text: string;
  isBot: boolean;
}

interface ProfileInfo {
  education: {
    details: string[];
    keywords: string[];
  };
  skills: {
    details: string[];
    keywords: string[];
  };
  experience: {
    details: string[];
    keywords: string[];
  };
  contact: {
    details: string[];
    keywords: string[];
  };
  projects: {
    details: string[];
    keywords: string[];
  };
  personal: {
    details: string[];
    keywords: string[];
  };
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Sai's AI assistant. I can help you learn more about Sai's background, skills, projects, and more. What would you like to know?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const profileInfo: ProfileInfo = {
    education: {
      keywords: ['education', 'study', 'school', 'college', 'university', 'degree', 'qualification', 'academic',
        'graduate', 'masters', 'phd', 'major', 'course', 'gpa', 'grades', 'njit', 'scsvmv'],
      details: [
        "Here's my educational background:",
        
        "• New Jersey Institute of Technology (NJIT)",
        "- Masters of Science in Data Science (2024-2025)",
        "- GPA: 3.313/4 CGPA",
        "- Location: Newark, NJ, USA",
        "- Key courses: Machine Learning & Deep Learning, AI & Prompt Engineering, Web Development & Full Stack, Data Visualization & Analytics, Big Data Processing & Python, Data Science & Statistical Analysis",
        
        "• SCSVMV University",
        "- B.E. in Computer Science and Engineering (2019-2023)",
        "- CGPA: 9.43/10",
        "- Location: Kanchipuram, TN, India",
        "- Key courses: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Software Engineering, Web Technologies, Python Programming, Java Development"
      ]
    },
    skills: {
      keywords: ['skills', 'technology', 'tech', 'stack', 'programming', 'languages', 'tools', 'framework',
        'software', 'proficient', 'expertise', 'knowledge', 'python', 'react', 'ai', 'ml'],
      details: [
        "Here are my technical skills:",
        
        "• Programming & Data Science",
        "- Python, Pandas, NumPy, scikit-learn, TensorFlow, PyTorch, SQL, Jupyter Notebooks, Google Colab",
        
        "• AI & Machine Learning",
        "- Deep Learning, Natural Language Processing (NLP), Computer Vision",
        "- AI Prompt Engineering, Statistical Analysis",
        "- Dataset Curation, Labelling Tools, Quality Control",
        "- AI-Assisted Development (ChatGPT)",
        
        "• Data Analytics & Visualization",
        "- Tableau, Excel, Data Analytics, Data Visualization",
        "- Exploratory Data Analysis, Statistical Analysis",
        "- Data Preprocessing, Data Cleaning",
        
        "• Web Development",
        "- ReactJS, HTML, CSS, API Integration",
        "- Git, Version Control",
        "- Web Development, Frontend Development",
        
        "• Cloud & Tools",
        "- AWS (Basic), Cloud Computing",
        "- Development Tools, Project Management",
        "- Collaboration Tools, Documentation"
      ]
    },
    experience: {
      keywords: ['experience', 'work', 'job', 'career', 'position', 'role', 'company', 'employment',
        'intern', 'internship', 'professional', 'webdaddy', 'findem'],
      details: [
        "Here's my professional experience:",
        
        "• Webdaddy - Research & Development Intern (Aug 2024 - Feb 2025)",
        "- Location: Singapore (Remote, Freelance)",
        "- Developed AI-powered data annotation tools in Python, improving labelling efficiency by 35%",
        "- Built and optimized ML models for text classification using TensorFlow and NLP techniques",
        "- Automated data collection and preprocessing pipelines, reducing manual effort by 40%",
        "- Conducted exploratory data analysis (EDA) to identify trends and improve model accuracy",
        
        "• Findem, Inc. - Research & Development (Jul 2023 - Dec 2023)",
        "- Location: Bengaluru, India",
        "- Managed large-scale data annotation projects for training ML models with 98% accuracy",
        "- Developed Python scripts to clean, analyze, and visualize complex datasets",
        "- Optimized an email classification ML model, improving prediction accuracy by 25%",
        "- Created internal tools for automated data validation and quality assurance"
      ]
    },
    projects: {
      keywords: ['project', 'portfolio', 'build', 'create', 'develop', 'made', 'worked on', 'github',
        'repository', 'app', 'application'],
      details: [
        "Here are my notable projects:",
        
        "• Real Traffic Analysis (Http/Https) (Oct 2024 - Dec 2024)",
        "- Monitored 10,000+ daily web requests across servers to identify traffic patterns using Python",
        "- Analysed http/https protocols to optimize performance, reducing latency by 15%",
        "- Detected and resolved security vulnerabilities in 5+ critical endpoints",
        "- Built diagnostic dashboards to visualize traffic bottlenecks in real-time",
        "- GitHub: https://github.com/saisrinivas194/Traffic-analysis-tool-",
        
        "• Loan Wise (Webdaddy) (Aug 2024 - Oct 2024)",
        "- Spearheaded R&D for loan application workflows, cutting processing time by 30%",
        "- Designed AI-driven content strategies that improved user engagement by 25%",
        "- Developed Tableau dashboards to track approval rates and risk factors",
        "- Proposed UX improvements that reduced form abandonment by 20%",
        "- Live site: https://loanwise.sg",
        
        "• AI-Powered Real Estate Website (JCR Builders) (Nov 2024 - Jan 2025)",
        "- Built a responsive website using Next.js and AI-generated code",
        "- Leveraged ChatGPT to debug 40+ issues and optimize React components",
        "- Implemented dynamic property listings with 95% uptime reliability",
        "- Reduced development time by 50% through AI-assisted programming",
        "- Integrated Google Maps API, boosting local traffic by 150%",
        "- Live site: https://www.jcrbuilders.in"
      ]
    },
    contact: {
      keywords: ['contact', 'email', 'reach', 'connect', 'social', 'linkedin', 'github', 'phone',
        'message', 'get in touch'],
      details: [
        "Here's how you can reach me:",
        
        "• Email: pedhapollasaisrinivas@gmail.com",
        "• GitHub: github.com/saisrinivas194",
        "• LinkedIn: linkedin.com/in/sai-srinivas-pedhapolla-345959256",
        "• Twitter: x.com/SaiSrinivas194",
        "• Location: Newark, New Jersey, United States"
      ]
    },
    personal: {
      keywords: ['about', 'background', 'who', 'tell me about', 'introduce', 'personal'],
      details: [
        "Let me introduce myself:",
        
        "I'm a Data Science graduate student (graduating May 2025) specializing in AI-powered web development, data analysis, and R&D. I'm skilled in Python, ReactJS, SEO optimization, and machine learning, with hands-on experience building data-driven solutions. I have a proven ability to lead teams, optimize workflows, and implement AI tools to solve complex problems. I'm OPT eligible.",
        
        "Core Focus Areas:",
        "• AI-powered web development",
        "• Data Science and Analysis",
        "• Machine Learning Applications",
        "• Full-stack Development"
      ]
    }
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Simple greetings
    if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening))[\s!.?]*$/i.test(query)) {
      return "Hello! I can provide accurate information about Sai's education, skills, experience, and projects. What would you like to know?";
    }

    // Handle conversation starters
    if (/^(how are you|how(')?s it going|how do you do|nice to meet you)[\s!.?]*$/i.test(query)) {
      return "I'm here to help you learn about Sai's background and experience. What specific information are you looking for?";
    }

    // Handle thank you messages
    if (/^(thanks|thank you|thx|ty|thanks a lot|appreciate it|thank you so much)[\s!.?]*$/i.test(query)) {
      return "You're welcome! Let me know if you need any other information about Sai's background or experience.";
    }

    // Function to check if query matches category keywords
    const matchesCategory = (category: { keywords: string[] }): boolean => {
      return category.keywords.some(keyword => {
        return lowerQuery.includes(keyword) || 
               lowerQuery.match(new RegExp(`\\b${keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i'));
      });
    };

    // Process natural language patterns
    let processedQuery = lowerQuery;
    if (lowerQuery.match(/^(can|could) you (tell|let) me/i) ||
        lowerQuery.match(/^i(')?d like to (know|learn|hear)/i) ||
        lowerQuery.match(/^what (can|do) you (know|tell me) about/i)) {
      processedQuery = lowerQuery
        .replace(/^(can|could) you (tell|let) me/i, '')
        .replace(/^i(')?d like to (know|learn|hear)/i, '')
        .replace(/^what (can|do) you (know|tell me) about/i, '');
    }

    // Check for multiple categories
    const matchedCategories: string[] = [];
    Object.entries(profileInfo).forEach(([category, info]) => {
      if (matchesCategory(info)) {
        matchedCategories.push(category);
      }
    });

    if (matchedCategories.length > 1) {
      let response = "I found information about multiple topics:\n\n";
      matchedCategories.forEach(category => {
        response += profileInfo[category as keyof ProfileInfo].details.join('\n') + '\n\n';
      });
      return response.trim();
    }

    // Handle single category matches
    for (const [category, info] of Object.entries(profileInfo)) {
      if (matchesCategory(info)) {
        return info.details.join('\n');
      }
    }

    // Handle general queries
    if (processedQuery.includes('help') || 
        processedQuery.includes('what can you') || 
        processedQuery.match(/^(what|how|who|tell me)/i)) {
      return "I can provide accurate information about:\n\n" +
             "• Sai's educational background (NJIT and SCSVMV)\n" +
             "• Technical skills and expertise\n" +
             "• Work experience and internships\n" +
             "• Recent projects and achievements\n" +
             "• Contact information\n\n" +
             "What would you like to know about?";
    }

    // Default response for unclear queries
    return "I can provide accurate information about Sai's education, skills, work experience, or projects. Could you please specify what you'd like to know?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = { text: generateResponse(input), isBot: true };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center text-white">
              <FaRobot className="mr-2" />
              <span>Chat Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <IoMdClose size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start mb-4 ${
                  message.isBot ? '' : 'flex-row-reverse'
                }`}
              >
                <div
                  className={`flex items-center ${
                    message.isBot ? 'mr-2' : 'ml-2'
                  }`}
                >
                  {message.isBot ? (
                    <FaRobot className="text-blue-500" />
                  ) : (
                    <FaUser className="text-purple-500" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 max-w-[70%] ${
                    message.isBot
                      ? 'bg-gray-100'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center mb-4">
                <FaRobot className="text-blue-500 mr-2" />
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="typing-animation">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                aria-label="Chat message"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 rounded-r-lg hover:opacity-90 transition-opacity"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          aria-label="Open chat assistant"
        >
          <FaRobot size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatBot; 