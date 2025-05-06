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
    { text: "Hi! I'm Dhasya, Sai's AI portfolio assistant. Ask me anything about Sai's background, skills, projects, and more. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Log ambiguous question to backend
  const logAmbiguousQuestion = (question: string) => {
    fetch('/api/log-question', {
      method: 'POST',
      body: JSON.stringify({ question, timestamp: Date.now() }),
      headers: { 'Content-Type': 'application/json' }
    });
  };

  // Log feedback to backend
  const logFeedback = (question: string, answer: string, feedback: string) => {
    fetch('/api/log-feedback', {
      method: 'POST',
      body: JSON.stringify({ question, answer, feedback, timestamp: Date.now() }),
      headers: { 'Content-Type': 'application/json' }
    });
  };

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
    
    // Function to check if query matches category keywords
    const matchesCategory = (category: { keywords: string[] }): boolean => {
      return category.keywords.some(keyword => {
        return lowerQuery.includes(keyword) || 
               lowerQuery.match(new RegExp(`\\b${keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i'));
      });
    };

    // Is Sai still studying?
    if (lowerQuery.match(/(is|does|has|was).*sai.*(still|currently).*study|student|studying|in school|in college|in university/)) {
      return "Yes, Sai is currently a graduate student at NJIT, pursuing a Master's in Data Science and graduating in May 2025.";
    }
    if (lowerQuery.match(/(is|does|has|was).*sai.*(graduated|finished|completed).*study|degree|college|university/)) {
      return "Sai will graduate in May 2025 from NJIT with a Master's in Data Science. He has already completed his Bachelor's in Computer Science from SCSVMV University.";
    }

    // Where is Sai from/location
    if (lowerQuery.match(/where.*sai.*(from|based|live|location|reside|hometown|city|country)/)) {
      return "Sai is originally from India and is currently based in Newark, New Jersey, USA, while pursuing his graduate studies at NJIT.";
    }

    // Sai's strengths
    if (lowerQuery.match(/(what|which|tell).*sai.*(strength|strong|best|good at|excel|expertise)/)) {
      return "Sai's strengths include data science, AI/ML, web development, problem-solving, and quickly adapting to new technologies. He is also known for his leadership and teamwork skills.";
    }

    // Sai's weaknesses
    if (lowerQuery.match(/(what|which|tell).*sai.*(weakness|improve|not good|challenge|area of growth)/)) {
      return "Sai is always striving to improve his public speaking and presentation skills, and he welcomes opportunities to grow in these areas.";
    }

    // Leadership/teamwork
    if (lowerQuery.match(/(is|does|can|has|how).*sai.*(leader|leadership|team|teamwork|collaborate|work with others|manage|mentor)/)) {
      return "Sai has demonstrated strong leadership and teamwork abilities, leading project teams and collaborating effectively with diverse groups to achieve shared goals.";
    }

    // Availability for work/collaboration
    if (lowerQuery.match(/(is|does|can|would|will).*sai.*(available|open|interested|looking).*work|collaborate|project|opportunity/)) {
      return "Sai is open to new opportunities and collaborations, especially in data science, AI, and web development. Feel free to reach out if you have a project or role in mind!";
    }

    // Motivation/goals
    if (lowerQuery.match(/(what|why|how|tell).*sai.*(motivat|goal|aspirat|drive|ambition|future)/)) {
      return "Sai is motivated by a passion for solving real-world problems with technology. His goal is to make a positive impact through innovative AI and data-driven solutions.";
    }

    // Certifications/awards
    if (lowerQuery.match(/(does|has|what|which|any).*sai.*(certificat|award|recognition|accomplishment|achievement)/)) {
      return "Sai has earned several academic awards and certifications in data science, AI, and web development, recognizing his technical excellence and commitment to learning.";
    }

    // Preferred technologies/tools
    if (lowerQuery.match(/(what|which|does|is|are).*sai.*(prefer|favorite|best|top|use|tool|technology|framework|stack|platform)/)) {
      return "Sai enjoys working with Python, React, TensorFlow, and modern web technologies. He is always exploring new tools to stay at the forefront of tech innovation.";
    }

    // Hobbies/interests
    if (lowerQuery.match(/(what|which|does|is|are).*sai.*(hobby|interest|do for fun|outside work|free time|passion)/)) {
      return "Outside of work, Sai enjoys reading about new tech trends, participating in hackathons, and exploring data-driven side projects. He also likes traveling and playing chess.";
    }

    // Does Sai have experience with a field?
    if (lowerQuery.match(/(does|has|is|did).*sai.*(experience|worked|work|background|skilled|expertise|knowledge|familiar|know|proficient).*in|with|on/)
      || lowerQuery.match(/what.*skill.*(related|about|in|with|on|for).*/)) {
      // Try to extract the field
      const fieldMatch = lowerQuery.match(/in ([a-zA-Z ]+)/) || lowerQuery.match(/with ([a-zA-Z ]+)/) || lowerQuery.match(/on ([a-zA-Z ]+)/) || lowerQuery.match(/related to ([a-zA-Z ]+)/) || lowerQuery.match(/about ([a-zA-Z ]+)/) || lowerQuery.match(/for ([a-zA-Z ]+)/);
      const field = fieldMatch ? fieldMatch[1].trim() : '';
      if (field) {
        // Check if field matches skills or experience
        if (profileInfo.skills.keywords.some(k => field.includes(k)) || profileInfo.experience.keywords.some(k => field.includes(k))) {
          // Give a targeted, personalized answer for the field
          if (field.includes('python')) {
            return "Sai is highly proficient in Python, using it for data science, machine learning, and automation. He has built projects with Pandas, NumPy, scikit-learn, TensorFlow, and more.";
          }
          if (field.includes('react')) {
            return "Sai is skilled in React, building modern, responsive web applications and integrating APIs for dynamic user experiences.";
          }
          if (field.includes('data analytics')) {
            return "Sai has strong skills in data analytics, including data cleaning, visualization, and statistical analysis using tools like Tableau, Excel, and Python libraries.";
          }
          if (field.includes('ai') || field.includes('ml') || field.includes('machine learning')) {
            return "Sai has hands-on experience in AI and machine learning, working with deep learning, NLP, and computer vision using TensorFlow and PyTorch.";
          }
          // Generic for other matched fields
          return `Yes, Sai has strong experience in ${field}. He has applied his skills in this area through hands-on projects and professional roles.`;
        } else {
          return `Sai is always eager to learn and adapt to new fields. If you have a specific area in mind, let me know and I can provide more details!`;
        }
      }
      // If the question is too vague or just a keyword, ask for more clarity
      return "Can you give me more clarity on what you want to know about Sai?";
    }

    // If the question is a single keyword or too vague, ask for more clarity
    if (query.trim().split(/\s+/).length <= 2) {
      return "Can you give me more clarity on what you want to know about Sai?";
    }

    // Unusual or unrelated questions
    if (!lowerQuery.includes('sai') && !matchesCategory(profileInfo.skills) && !matchesCategory(profileInfo.education) && !matchesCategory(profileInfo.experience) && !matchesCategory(profileInfo.projects) && !matchesCategory(profileInfo.contact) && !matchesCategory(profileInfo.personal)) {
      return "I'm here to answer questions about Sai. For other topics, please refer to trusted sources like Wikipedia, Google, or relevant official websites.";
    }

    // Vulgar or inappropriate questions (check last)
    if (lowerQuery.match(/(fuck|shit|bitch|asshole|idiot|dumb|stupid|sex|sexual|nude|naked|porn|suck|hate|kill|die|racist|abuse|offend|offensive|insult|harass|harassment|violence|violent|threat|threaten|bully|bullying|discriminate|discrimination)/)) {
      return "I'm here to provide helpful and respectful information about Sai. Please keep questions appropriate.";
    }

    // Is Sai a perfect fit for this job/role?
    if (lowerQuery.match(/(is|does|would|can).*sai.*(fit|perfect|good|right|suitable|match).*job|role|position|opening/)) {
      return "Sai is a highly adaptable and skilled professional with a proven track record in data science, AI, and web development. He is a quick learner, a strong team player, and is passionate about delivering results—making him an excellent fit for a wide range of roles, including the one you have in mind.";
    }

    // Direct graduation date question
    if (lowerQuery.match(/(when|what\s*date|which year).*graduat/i)) {
      return "Sai is graduating in May 2025 from NJIT with a Master's in Data Science.";
    }

    // Simple greetings
    if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening))[\s!.?]*$/i.test(query)) {
      return "Hello! I'm Dhasya, your portfolio assistant. I can provide accurate information about Sai's education, skills, experience, and projects. What would you like to know?";
    }

    // Handle conversation starters
    if (/^(how are you|how(')?s it going|how do you do|nice to meet you)[\s!.?]*$/i.test(query)) {
      return "I'm Dhasya, here to help you learn about Sai's background and experience. What specific information are you looking for?";
    }

    // Handle thank you messages
    if (/^(thanks|thank you|thx|ty|thanks a lot|appreciate it|thank you so much)[\s!.?]*$/i.test(query)) {
      return "You're welcome! Let me know if you need any other information about Sai. Dhasya is always here to help!";
    }

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

    // Personalized answers for each category
    if (matchesCategory(profileInfo.skills)) {
      return "Sai is highly skilled in Python, React, AI/ML, data analytics, and web development. He has hands-on experience with modern tools and frameworks, and excels at building data-driven and AI-powered solutions.";
    }
    if (matchesCategory(profileInfo.education)) {
      return "Sai holds a Master's in Data Science from NJIT (graduating May 2025) and a Bachelor's in Computer Science from SCSVMV University, with top grades and a strong foundation in AI, web development, and analytics.";
    }
    if (matchesCategory(profileInfo.experience)) {
      return "Sai has hands-on experience in research and development roles, working with companies like Webdaddy and Findem. He has built AI-powered tools, optimized ML models, and managed large-scale data projects.";
    }
    if (matchesCategory(profileInfo.projects)) {
      return "Sai has led impactful projects such as Real Traffic Analysis, Loan Wise, and an AI-powered real estate website. His work focuses on using AI and data science to solve real-world problems and improve user experiences.";
    }
    if (matchesCategory(profileInfo.contact)) {
      return "You can reach Sai at pedhapollasaisrinivas@gmail.com, or connect on LinkedIn, GitHub, or Twitter. He's based in Newark, New Jersey, USA.";
    }
    if (matchesCategory(profileInfo.personal)) {
      return "Sai is a passionate data science graduate student, specializing in AI-powered web development and analytics. He's known for his problem-solving skills, leadership, and drive to create innovative solutions.";
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

    // If the question is ambiguous or doesn't match a known category, ask for clarity
    if (query.trim().length > 0) {
      logAmbiguousQuestion(query);
      return "Can you give me more clarity on what you want to know about Sai?";
    }

    // Handle general queries
    if (processedQuery.includes('help') || 
        processedQuery.includes('what can you') || 
        processedQuery.match(/^(what|how|who|tell me)/i)) {
      return "Dhasya can provide accurate information about:\n\n" +
             "• Sai's educational background (NJIT and SCSVMV)\n" +
             "• Technical skills and expertise\n" +
             "• Work experience and internships\n" +
             "• Recent projects and achievements\n" +
             "• Contact information\n\n" +
             "What would you like to know about?";
    }

    // Default response for unclear queries
    return "I'm Dhasya, Sai's portfolio assistant. I can provide accurate information about Sai's education, skills, work experience, or projects. Could you please specify what you'd like to know?";

    // Placeholder: In the future, add logic here to log ambiguous questions for self-learning and improvement.
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
              <span>Dhasya, your portfolio assistant</span>
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
                  {/* Feedback buttons for the latest bot answer only */}
                  {message.isBot && index === messages.length - 1 && !isTyping && !feedbackGiven && (
                    <div className="flex gap-2 mt-2">
                      <button
                        className="text-green-600 hover:text-green-800 text-lg"
                        aria-label="Helpful"
                        onClick={() => {
                          logFeedback(
                            messages[messages.length - 2]?.text || '',
                            message.text,
                            'helpful'
                          );
                          setFeedbackGiven(true);
                        }}
                      >
                        👍
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 text-lg"
                        aria-label="Not helpful"
                        onClick={() => {
                          logFeedback(
                            messages[messages.length - 2]?.text || '',
                            message.text,
                            'not helpful'
                          );
                          setFeedbackGiven(true);
                        }}
                      >
                        👎
                      </button>
                    </div>
                  )}
                  {/* Thank you message after feedback */}
                  {message.isBot && index === messages.length - 1 && feedbackGiven && (
                    <div className="text-xs text-gray-500 mt-2">Thank you for your feedback!</div>
                  )}
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
                onChange={(e) => {
                  setInput(e.target.value);
                  setFeedbackGiven(false);
                }}
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