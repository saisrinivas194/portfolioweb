'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner, FaUser, FaExternalLinkAlt, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

interface Message {
  text: string;
  isBot: boolean;
  links?: Array<{
    text: string;
    url: string;
    type: 'external' | 'email' | 'phone' | 'github' | 'linkedin' | 'twitter' | 'resume';
  }>;
}

const ProfileChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hi! I'm Dashya, your AI assistant for Sai Srinivas Pedhapolla's portfolio. What's your name?", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const [hasAskedName, setHasAskedName] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetChat = () => {
    setUserName('');
    setHasAskedName(false);
    setMessages([
      { 
        text: "Hi! I'm Dashya, your AI assistant for Sai Srinivas Pedhapolla's portfolio. What's your name?", 
        isBot: true 
      }
    ]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show popup after 3 seconds if chat is closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [isOpen]);

  // Ensure initial state is correct when component mounts
  useEffect(() => {
    if (messages.length === 0 || !messages[0].text.includes("What's your name")) {
      setMessages([
        { 
          text: "Hi! I'm Dashya, your AI assistant for Sai Srinivas Pedhapolla's portfolio. What's your name?", 
          isBot: true 
        }
      ]);
      setHasAskedName(false);
      setUserName('');
    }
  }, []);

  // Helper function to analyze job descriptions
  const analyzeJobDescription = (jobDescription: string): string => {
    const lowerJD = jobDescription.toLowerCase();
    
    // Sai's skills and experience
    const saiSkills = {
      programming: ['python', 'javascript', 'typescript', 'sql', 'r'],
      frameworks: ['react', 'next.js', 'django', 'fastapi', 'tensorflow', 'pytorch', 'pandas', 'numpy', 'scikit-learn'],
      databases: ['mysql', 'postgresql', 't-sql'],
      cloud: ['aws', 'google cloud', 'gcp', 'ec2', 's3'],
      tools: ['tableau', 'power bi', 'plotly', 'matplotlib', 'seaborn', 'git', 'github', 'jira', 'trello'],
      methodologies: ['agile', 'scrum', 'etl', 'machine learning', 'data science', 'web scraping', 'api integration']
    };
    
    const saiExperience = {
      education: 'Master of Science in Data Science from NJIT (May 2025)',
      workExperience: '2+ years professional experience',
      companies: ['Webdaddy', 'Findem Inc.'],
      achievements: ['30% increase in feature development speed', '40% boost in lead generation', '25% improvement in ML accuracy', '20 hours saved weekly through automation']
    };
    
    // Analyze matches
    let skillMatches = 0;
    let totalSkills = 0;
    let matchedSkills: string[] = [];
    let missingSkills: string[] = [];
    
    // Check for technical skills
    Object.values(saiSkills).flat().forEach(skill => {
      if (lowerJD.includes(skill)) {
        skillMatches++;
        matchedSkills.push(skill);
      }
    });
    
    // Check for experience level
    const experienceLevel = lowerJD.includes('senior') ? 'senior' : 
                           lowerJD.includes('junior') ? 'junior' : 
                           lowerJD.includes('entry') ? 'entry' : 'mid-level';
    
    // Check for education requirements
    const educationMatch = lowerJD.includes('master') || lowerJD.includes('degree') || lowerJD.includes('bachelor');
    
    // Calculate fit score (out of 5)
    let fitScore = 0;
    if (skillMatches >= 5) fitScore += 2;
    else if (skillMatches >= 3) fitScore += 1.5;
    else if (skillMatches >= 1) fitScore += 1;
    
    if (experienceLevel === 'mid-level' || experienceLevel === 'senior') fitScore += 1;
    if (educationMatch) fitScore += 1;
    if (lowerJD.includes('data') || lowerJD.includes('python') || lowerJD.includes('react')) fitScore += 1;
    
    fitScore = Math.min(fitScore, 5);
    
    // Generate analysis
    let analysis = `**Job Description Analysis for Sai Srinivas Pedhapolla**\n\n`;
    analysis += `**Overall Fit Score: ${fitScore}/5**\n\n`;
    
    analysis += `**Skills Match:**\n`;
    analysis += `• Matched Skills: ${matchedSkills.join(', ')}\n`;
    analysis += `• Total Skill Matches: ${skillMatches}\n\n`;
    
    analysis += `**Experience Level:** ${experienceLevel}\n`;
    analysis += `**Education Match:** ${educationMatch ? 'Yes' : 'No'}\n\n`;
    
    analysis += `**Sai's Strengths for this Role:**\n`;
    if (lowerJD.includes('python')) analysis += `• Strong Python expertise with Django, FastAPI\n`;
    if (lowerJD.includes('react')) analysis += `• Extensive React and Next.js experience\n`;
    if (lowerJD.includes('data')) analysis += `• Master's in Data Science with ML/AI experience\n`;
    if (lowerJD.includes('sql')) analysis += `• Advanced SQL skills and database management\n`;
    if (lowerJD.includes('cloud')) analysis += `• AWS and GCP cloud platform experience\n`;
    if (lowerJD.includes('tableau') || lowerJD.includes('power bi')) analysis += `• Business intelligence and visualization expertise\n`;
    
    analysis += `\n**Recommendation:** `;
    if (fitScore >= 4) {
      analysis += `Excellent match! Sai is highly qualified for this position.`;
    } else if (fitScore >= 3) {
      analysis += `Good match! Sai has strong qualifications with some areas to highlight.`;
    } else if (fitScore >= 2) {
      analysis += `Moderate match. Consider applying if interested, but may need to address skill gaps.`;
    } else {
      analysis += `Limited match. May not be the best fit unless there's strong interest in the role.`;
    }
    
    return analysis;
  };

  const generateResponse = (query: string, userName: string = ''): { text: string; links?: Array<{ text: string; url: string; type: string }> } => {
    const lowerQuery = query.toLowerCase();
    
    // Helper function to check for variations and typos
    const hasKeyword = (keywords: string[]) => {
      return keywords.some(keyword => lowerQuery.includes(keyword));
    };
    
    // Greetings and polite responses (only for pure greetings, not questions)
    if (hasKeyword(['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'howdy']) && 
        !hasKeyword(['work', 'experience', 'job', 'career', 'education', 'skills', 'projects', 'what', 'tell', 'about', 'his', 'he', 'sai'])) {
      const greeting = userName ? `Hello ${userName}!` : "Hello!";
      return {
        text: greeting + " I'm Dashya, and it's a pleasure to meet you. I'm here to provide information about Sai Srinivas Pedhapolla's professional background. I can share details about his work experience, education, technical skills, projects, certifications, and achievements. How may I assist you today?"
      };
    }
    
    // Handle rude or negative comments politely
    if (hasKeyword(['stupid', 'dumb', 'bad', 'terrible', 'awful', 'hate', 'boring', 'useless', 'waste', 'sucks'])) {
      return {
        text: "I appreciate your feedback. I'm designed to provide information about Sai Srinivas Pedhapolla's professional background. Perhaps I can assist you with specific details about his work experience, technical skills, or projects? I'm here to help share relevant information that might be valuable to you."
      };
    }
    
    // Handle unrelated questions politely
    if (hasKeyword(['weather', 'food', 'movie', 'music', 'sports', 'politics', 'news', 'joke', 'funny', 'game', 'shopping', 'travel', 'love', 'dating', 'relationship', 'family', 'personal', 'private'])) {
      return {
        text: "I'm specifically designed to provide information about Sai Srinivas Pedhapolla's professional background. I can share details about his work experience, education, technical skills, projects, certifications, and achievements. Is there anything about his career or professional work that I can help you with?"
      };
    }
    
    // Handle questions about other people
    if (hasKeyword(['john', 'mary', 'mike', 'sarah', 'david', 'lisa', 'tom', 'jane', 'bob', 'alice', 'someone else', 'other person', 'different person', 'google', 'gogole', 'googel', 'microsoft', 'amazon', 'apple', 'facebook', 'meta', 'netflix', 'uber', 'tesla', 'spacex', 'company', 'companies', 'do you know about', 'tell me about'])) {
      return {
        text: "I'm specifically designed to provide information about Sai Srinivas Pedhapolla's professional background. I can share details about his work experience, education, technical skills, projects, and professional achievements. Is there anything about Sai's background that I can help you with?"
      };
    }
    
    // Handle technical questions about the chatbot itself
    if (hasKeyword(['who are you', 'what are you', 'what are you built with', 'how are you built', 'how do you work', 'are you ai', 'are you real', 'bot', 'robot', 'artificial', 'machine', 'technology', 'framework', 'programming', 'code', 'built with', 'made with', 'dashya'])) {
      return {
        text: "I'm Dashya, an AI assistant built with React and TypeScript, designed to provide information about Sai Srinivas Pedhapolla's professional background. I utilize natural language processing to understand inquiries and deliver relevant details about his work experience, education, technical skills, projects, certifications, and achievements. I'm integrated into his portfolio website to facilitate professional inquiries. How may I assist you with information about Sai?"
      };
    }
    
    // Handle compliments gracefully
    if (hasKeyword(['thank', 'thanks', 'appreciate', 'helpful', 'great', 'awesome', 'amazing', 'wonderful', 'excellent', 'good job'])) {
      return {
        text: "You're very welcome! I'm Dashya, and I'm pleased to have been able to assist you with information about Sai. Please feel free to ask if you need any additional details about his professional background, work experience, technical skills, or projects."
      };
    }
    
    // Handle goodbye
    if (hasKeyword(['bye', 'goodbye', 'see you', 'farewell', 'later', 'take care', 'have a good day', 'have a nice day'])) {
      return {
        text: "Goodbye! It was a pleasure speaking with you. I'm Dashya, and please don't hesitate to return if you need any additional information about Sai's professional background. Have a wonderful day!"
      };
    }
    
    // Phone number specific questions (check this BEFORE general contact)
    if (hasKeyword(['number', 'phone number', 'phone', 'contact number', 'mobile number', 'cell number', 'call', 'phone contact', 'what is his number', 'his number', 'number please', 'contact nu,ber', 'contact numbr', 'contact numbe', 'nu,ber', 'numbr', 'numbe'])) {
      return {
        text: "Sai's contact number is +1 (201) 705-9891. You can reach him directly for professional inquiries, job opportunities, or collaboration. He is available for phone calls during business hours.",
        links: [
          { text: "+1 (201) 705-9891", url: "tel:+12017059891", type: "phone" }
        ]
      };
    }

    // Email specific questions (check this BEFORE general contact)
    if (hasKeyword(['email link', 'email address', 'mail link', 'contact email', 'email contact', 'send email', 'emial', 'emial address', 'emial link', 'mail address', 'mail contact', 'email', 'mail', 'email please', 'mail please', 'what is his email', 'his email', 'email address please'])) {
      return {
        text: "Sai's professional email address is pedhapollasaisrinivas@gmail.com. You can contact him directly for professional inquiries, job opportunities, or collaboration. He responds promptly to business-related emails.",
        links: [
          { text: "pedhapollasaisrinivas@gmail.com", url: "mailto:pedhapollasaisrinivas@gmail.com", type: "email" }
        ]
      };
    }

    // Contact Information (general - check this AFTER specific requests)
    if (hasKeyword(['contact', 'email', 'phone', 'reach', 'call', 'mail', 'number']) && 
        !hasKeyword(['number', 'phone number', 'phone', 'contact number', 'mobile number', 'cell number', 'call', 'phone contact', 'what is his number', 'his number', 'number please', 'contact nu,ber', 'contact numbr', 'contact numbe', 'nu,ber', 'numbr', 'numbe', 'email', 'mail', 'email please', 'mail please', 'what is his email', 'his email', 'email address please'])) {
      return {
        text: "You can reach Sai through multiple channels. His professional email is pedhapollasaisrinivas@gmail.com and his contact number is +1 (201) 705-9891. He maintains an active LinkedIn presence with over 500 professional connections, and his GitHub profile showcases 19+ repositories. He's also available on Twitter/X for professional updates and networking.",
        links: [
          { text: "pedhapollasaisrinivas@gmail.com", url: "mailto:pedhapollasaisrinivas@gmail.com", type: "email" },
          { text: "+1 (201) 705-9891", url: "tel:+12017059891", type: "phone" },
          { text: "LinkedIn Profile", url: "https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/", type: "linkedin" },
          { text: "GitHub Profile", url: "https://github.com/saisrinivas194", type: "github" },
          { text: "Twitter/X", url: "https://x.com/SaiSrinivas194", type: "twitter" }
        ]
      };
    }

    // Resume Download
    if (hasKeyword(['resume', 'cv', 'download', 'resum', 'curriculum', 'vitae'])) {
      return {
        text: "Certainly! Sai's comprehensive resume is available for download through Google Drive. The document contains detailed information about his professional background, work experience, and technical expertise. Please use the link below to access his CV.",
        links: [
          { text: "Download Resume", url: "https://drive.google.com/file/d/1UuACNItERO543n_9ZdK-C-sM8Z2Z_sQ9/view?usp=drive_link", type: "resume" }
        ]
      };
    }

    // Education
    if (hasKeyword(['education', 'degree', 'university', 'gpa', 'school', 'college', 'studied', 'graduate', 'masters', 'bachelor'])) {
      return {
        text: "Sai possesses a strong educational foundation. He completed his Master of Science in Data Science at NJIT (New Jersey Institute of Technology) in May 2025, achieving a 3.35 GPA with specialized focus on machine learning, deep learning, and artificial intelligence. Previously, he earned his Bachelor of Technology in Computer Science and Engineering from SCSVMV University in India with an exceptional 9.43 GPA out of 10. This combination provides him with both comprehensive theoretical knowledge and practical expertise in data science and computer science."
      };
    }

    // Company-specific role questions
    if (hasKeyword(['role in findem', 'role at findem', 'findem role', 'what did he do at findem', 'findem job', 'findem position', 'findem work', 'findem responsibilities'])) {
      return {
        text: "At Findem Inc. (May 2022 - December 2023), Sai worked as an R&D Data Analyst. In this role, he built real-time dashboards with Tableau and Dash that enabled managers to make decisions 25% faster. He created automation pipelines that saved over 20 hours of manual work weekly and utilized Python (Django, FastAPI) to develop backend systems. He also integrated APIs and cloud platforms (AWS, GCP) for comprehensive dataset processing and analysis."
      };
    }

    if (hasKeyword(['role in webdaddy', 'role at webdaddy', 'webdaddy role', 'what did he do at webdaddy', 'webdaddy job', 'webdaddy position', 'webdaddy work', 'webdaddy responsibilities'])) {
      return {
        text: "At Webdaddy (August 2024 - February 2025), Sai served as a Python Developer and R&D Specialist. In this role, he cleaned and validated over 1 million records, improving machine learning accuracy by 25%. He developed automated ETL pipelines using SQL and Python, reducing errors and conserving 30% of resources. Additionally, he designed KPI dashboards in Tableau and Power BI for business teams, significantly reducing reporting time."
      };
    }

    // F1 OPT EAD Status (check this BEFORE work experience)
    if (hasKeyword(['f1', 'opt', 'ead', 'work authorization', 'visa status', 'immigration status', 'work permit', 'authorization', 'usa', 'united states', 'work in usa', 'work in us', 'authorized to work'])) {
      return {
        text: "Sai holds F1 OPT EAD (Optional Practical Training Employment Authorization Document) status. His work authorization commences on August 16, 2025, providing legal authorization to work in the United States for up to 12 months, with potential for STEM extension. This status makes him eligible for employment with any US company without requiring visa sponsorship during the OPT period."
      };
    }

    // Work Experience (but not work authorization)
    if (hasKeyword(['experience', 'job', 'webdaddy', 'findem', 'career', 'employment', 'worked', 'working', 'expereince', 'experince', 'expirience', 'companies', 'employer']) && 
        !hasKeyword(['authorization', 'visa', 'opt', 'ead', 'f1', 'permit', 'status', 'usa', 'united states', 'work in usa', 'work in us', 'authorized to work'])) {
      return {
        text: "Sai has **2+ years** of professional experience across multiple organizations. At Webdaddy (August 2024 - February 2025), he served as a Python Developer and R&D Specialist, where he cleaned and validated over 1 million records, improving machine learning accuracy by 25%. He developed automated ETL pipelines using SQL and Python, reducing errors and conserving 30% of resources. Additionally, he designed KPI dashboards in Tableau and Power BI for business teams, significantly reducing reporting time.\n\nPreviously at Findem Inc. (May 2022 - December 2023), he worked as an R&D Data Analyst, building real-time dashboards with Tableau and Dash that enabled managers to make decisions 25% faster. He created automation pipelines that saved over 20 hours of manual work weekly and utilized Python (Django, FastAPI) to develop backend systems. He also integrated APIs and cloud platforms (AWS, GCP) for comprehensive dataset processing and analysis."
      };
    }

    // Skills
    if (hasKeyword(['skills', 'programming', 'languages', 'technologies', 'tech', 'coding', 'code', 'program', 'skill', 'expertise', 'knows', 'can do'])) {
      return {
        text: "Sai has **2+ years** of comprehensive technical expertise across multiple domains. He specializes in Python development with frameworks including FastAPI and Django, complemented by proficiency in React and Next.js for frontend development. His data science capabilities encompass advanced tools such as Pandas, NumPy, TensorFlow, and PyTorch for machine learning applications.\n\nIn data visualization, he utilizes Tableau and Power BI to create interactive dashboards and reports. He possesses strong cloud platform experience with AWS and Google Cloud, along with expertise in big data technologies including Hadoop and Spark. Additionally, he has experience with web scraping, API integration, and AI/LLM technologies, positioning him as a versatile full-stack developer with robust data science capabilities."
      };
    }

    // LinkedIn specific questions
    if (hasKeyword(['linkedin link', 'linkedin url', 'linkedin profile', 'link for linkedin', 'linkedin link please', 'linkedin website', 'linkedin account', 'linkdin', 'linkdln', 'linkedn', 'linkdin link', 'linkdin profile', 'linkdin url'])) {
      return {
        text: "Sai maintains an active LinkedIn presence with over 500 professional connections. His profile showcases his professional experience, recommendations from supervisors, and certifications. You can connect with him for professional networking and career opportunities.",
        links: [
          { text: "LinkedIn Profile", url: "https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/", type: "linkedin" }
        ]
      };
    }

    // Resume specific questions
    if (hasKeyword(['resume link', 'resume url', 'cv link', 'cv url', 'link for resume', 'resume link please', 'download resume', 'resume download', 'resum', 'resum link', 'resum url', 'cv download', 'cv link please'])) {
      return {
        text: "Sai's comprehensive resume is available for download through Google Drive. The document contains detailed information about his professional background, work experience, and technical expertise. You can access his CV using the link below.",
        links: [
          { text: "Download Resume", url: "https://drive.google.com/file/d/1UuACNItERO543n_9ZdK-C-sM8Z2Z_sQ9/view?usp=drive_link", type: "resume" }
        ]
      };
    }


    // GitHub specific questions
    if (hasKeyword(['github link', 'github url', 'github profile', 'github repository', 'github repos', 'link for github', 'github link please', 'github website', 'github account', 'gitub', 'githb', 'gitub link', 'githb link', 'gitub profile', 'githb profile'])) {
      return {
        text: "Sai's GitHub profile contains 19+ repositories showcasing his technical projects and code contributions. You can explore his portfolio of data science projects, web applications, and machine learning implementations. His GitHub profile is regularly updated with new projects and code samples.",
        links: [
          { text: "View GitHub Profile", url: "https://github.com/saisrinivas194", type: "github" }
        ]
      };
    }

    // Projects
    if (hasKeyword(['projects', 'portfolio', 'github', 'project', 'built', 'created', 'developed'])) {
      return {
        text: "Sai has developed several innovative projects that showcase his technical capabilities. His Recipe Health Dashboard analyzes over 50,000 recipes using predictive models to recommend healthier alternatives, incorporating sentiment analysis on 100,000+ reviews to improve recipe rating prediction accuracy by 15%. He also created a Stock Forecasting Model utilizing LSTM-based time-series forecasting that achieved 87% accuracy in stock trend prediction, featuring an automated API-based ETL pipeline that reduced data preparation effort by 80%.\n\nAdditionally, he built an SME Loan Comparison Platform using Next.js, Django, and PostgreSQL that enables small businesses to compare loans in real-time through various lender APIs. The platform incorporates security-enhanced authentication, comprehensive dashboards, and automated pipelines for scalable loan data aggregation. His complete portfolio is available for review on GitHub.",
        links: [
          { text: "View GitHub Profile", url: "https://github.com/saisrinivas194", type: "github" }
        ]
      };
    }

    // Certifications
    if (hasKeyword(['certification', 'certificate', 'hackerrank', 'excelr', 'cert', 'certificat', 'certifiction'])) {
      return {
        text: "Sai has earned several valuable professional certifications that validate his technical expertise. He holds Python Basic and SQL Intermediate certifications from HackerRank, both obtained in 2024. Additionally, he completed a comprehensive Data Science certification from ExcelR in April 2024. These certifications demonstrate his commitment to continuous learning and professional development. The credentials are verified and can be accessed through the links provided below.",
        links: [
          { text: "Python Certificate", url: "https://www.hackerrank.com/certificates/cfa21a08e874", type: "external" },
          { text: "SQL Certificate", url: "https://www.hackerrank.com/certificates/7f36216e8829", type: "external" },
          { text: "Data Science Certificate", url: "https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/details/certifications/", type: "linkedin" }
        ]
      };
    }

    // Recommendations
    if (hasKeyword(['recommendation', 'testimonial', 'reference', 'manager', 'boss', 'colleague', 'recommend', 'testimonial', 'reccomendation', 'recomendation', 'recomendations', 'reccomendations', 'testimonials', 'references', 'manager feedback', 'boss feedback', 'supervisor feedback'])) {
      return {
        text: "Sai has received exceptional professional recommendations from his supervisors and colleagues. His director at Webdaddy, Hari Kumar Somakantan, highlighted Sai's data science expertise in developing and optimizing predictive models, noting his ability to blend analytical thinking with creative strategies, which made a remarkable impact on their projects.\n\nYash Malviya from Findem emphasized Sai's excellent technical skills and genuine interest in their work, identifying him as a valuable team member. Rajita Rao from Duke University commended Sai's authentic passion for his work and his curiosity about understanding the industry. All recommendations are available for review on his LinkedIn profile.",
        links: [
          { text: "View All Recommendations", url: "https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/details/recommendations/?detailScreenTabIndex=0", type: "linkedin" }
        ]
      };
    }

    // Achievements
    if (hasKeyword(['achievement', 'accomplishment', 'result', 'metric', 'success', 'win', 'achieve', 'acomplishment'])) {
      return {
        text: "Sai has delivered exceptional measurable results across various projects. At Webdaddy, he increased feature development speed by 30%, boosted lead generation by 40% through automation, and improved decision-making speed by 25% with real-time dashboards. He also reduced development time by 50% using AI-assisted programming and increased local traffic by 150% through Google Maps integration.\n\nFrom a technical perspective, he has processed over 1 million data records for machine learning training, analyzed 10,000+ HTTP requests, and achieved 95% uptime reliability for web applications. These accomplishments demonstrate his ability to deliver tangible business value and technical excellence."
      };
    }

    // Job search and availability
    if (hasKeyword(['job search', 'looking for job', 'available', 'hiring', 'employment', 'opportunity', 'position', 'role', 'recruiter', 'interview', 'apply', 'open to work', 'seeking', 'job hunt', 'career opportunity', 'f1', 'opt', 'ead', 'work authorization', 'visa status'])) {
      return {
        text: "Yes, Sai is actively seeking new professional opportunities. He recently completed his Master of Science in Data Science from NJIT in May 2025 and is currently pursuing roles in data science, full-stack development, or AI/ML positions. He holds F1 OPT EAD authorization commencing August 16, 2025, and is available for opportunities throughout the United States. He is prepared to leverage his expertise in Python, React, data analysis, and machine learning to contribute to organizational success. Please feel free to contact him directly or review his resume for additional details.",
        links: [
          { text: "Contact Sai", url: "mailto:pedhapollasaisrinivas@gmail.com", type: "email" },
          { text: "Download Resume", url: "https://drive.google.com/file/d/1UuACNItERO543n_9ZdK-C-sM8Z2Z_sQ9/view?usp=drive_link", type: "resume" },
          { text: "LinkedIn Profile", url: "https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/", type: "linkedin" }
        ]
      };
    }

    // Location
    if (hasKeyword(['location', 'where', 'address', 'based', 'live', 'located', 'place'])) {
      return {
        text: "Sai is currently based in Newark, New Jersey, USA. He completed his Master of Science in Data Science at NJIT (New Jersey Institute of Technology) in May 2025, establishing his presence in Newark. He is available for opportunities throughout the United States and is strategically positioned for roles in the New York/New Jersey metropolitan area."
      };
    }


    // Auto-detect job descriptions and analyze them (MUST BE FIRST)
    if (query.length > 200 && (
      lowerQuery.includes('requirements') || 
      lowerQuery.includes('responsibilities') || 
      lowerQuery.includes('qualifications') || 
      lowerQuery.includes('experience required') || 
      lowerQuery.includes('skills required') || 
      lowerQuery.includes('job description') ||
      lowerQuery.includes('position:') ||
      lowerQuery.includes('role:') ||
      lowerQuery.includes('we are looking for') ||
      lowerQuery.includes('candidate should have') ||
      lowerQuery.includes('must have') ||
      lowerQuery.includes('preferred qualifications') ||
      lowerQuery.includes('job title:') ||
      lowerQuery.includes('location:') ||
      lowerQuery.includes('reporting to') ||
      lowerQuery.includes('ideal candidate') ||
      lowerQuery.includes('bachelor\'s degree') ||
      lowerQuery.includes('proficiency in') ||
      lowerQuery.includes('familiarity with') ||
      lowerQuery.includes('strong analytical') ||
      lowerQuery.includes('excellent organizational') ||
      lowerQuery.includes('comprehensive benefits') ||
      lowerQuery.includes('equal employment') ||
      lowerQuery.includes('send us a note') ||
      lowerQuery.includes('hiring@') ||
      lowerQuery.includes('apply and join')
    )) {
      return {
        text: analyzeJobDescription(query)
      };
    }

    // Job Description Analysis
    if (hasKeyword(['job description', 'jd', 'job posting', 'job requirements', 'job spec', 'job specification', 'analyze this job', 'fit for this job', 'suitable for this role', 'match for this position', 'evaluate this job', 'job analysis', 'role analysis', 'position analysis', 'job fit', 'role fit', 'position fit'])) {
      return {
        text: "I'd be happy to analyze a job description for you! Please paste the job description or job posting, and I'll evaluate how well Sai's skills and experience match the requirements. I'll provide a detailed analysis covering:\n\n• Required skills vs. Sai's expertise\n• Experience level comparison\n• Education requirements match\n• Technical qualifications alignment\n• Overall fit assessment (out of 5)\n• Strengths and potential gaps\n• Recommendations for application\n\nPlease share the job description and I'll give you a comprehensive analysis!"
      };
    }

    // Role-specific eligibility questions (MUST BE FIRST)
    if (hasKeyword(['eligible for', 'suitable for', 'qualified for', 'good for', 'fit for', 'can he be', 'can he work as', 'is he good for', 'frontend developer', 'front end developer', 'front-end developer', 'frontend', 'front end', 'front-end', 'backend developer', 'back end developer', 'back-end developer', 'backend', 'back end', 'back-end', 'full stack developer', 'fullstack developer', 'full-stack developer', 'full stack', 'fullstack', 'full-stack', 'data scientist', 'data analyst', 'data anlyst', 'data anlyst valso', 'data anlyst also', 'data anlyst', 'data anlyst', 'machine learning engineer', 'ml engineer', 'ai engineer', 'ai developer', 'python developer', 'react developer', 'javascript developer', 'web developer', 'software engineer', 'software developer', 'devops engineer', 'cloud engineer', 'ai engineer', 'ai developer', 'devops', 'cloud', 'ml', 'machine learning', 'ai', 'analyst', 'scientist', 'developer', 'engineer'])) {
      // Determine the specific role being asked about
      let roleResponse = "";
      
      if (hasKeyword(['frontend developer', 'front end developer', 'front-end developer', 'frontend', 'front end', 'front-end', 'react developer', 'javascript developer', 'react', 'nextjs', 'next.js', 'ui', 'ux', 'interface', 'web design'])) {
        roleResponse = "Frontend Developer\n\nSai has 2+ years of frontend development experience! His expertise includes:\n\n• Frameworks: React.js, Next.js with JavaScript/TypeScript\n• Projects: Built Loan Wise (loanwise.sg), AI-Powered Real Estate Website (jcrbuilders.in), Recipe Health Dashboard\n• UI/UX: Interactive dashboards, reduced form abandonment by 20%, improved user engagement by 25%\n• Data Visualization: Tableau, Power BI, Plotly Dash integration\n• Modern Development: Component-based architecture, responsive design, SEO optimization\n• Tools: Git, modern development workflows, AI-assisted programming (50% faster development)\n\nHis combination of frontend skills with data visualization expertise makes him valuable for data-driven applications.";
      } else if (hasKeyword(['backend developer', 'back end developer', 'back-end developer', 'backend', 'back end', 'back-end', 'python developer', 'django', 'fastapi', 'api', 'server', 'database'])) {
        roleResponse = "Backend Developer\n\nSai has 2+ years of backend development experience! His expertise includes:\n\n• Frameworks: Python (Django, FastAPI), API development\n• Databases: SQL (MySQL, PostgreSQL, T-SQL), database management\n• Data Processing: ETL pipelines, data processing, scalable systems\n• Cloud Platforms: AWS, GCP for backend deployment\n• Performance: Built systems handling large datasets (1M+ records)\n• Integration: API integration, cloud services\n• Automation: Built 2 automation pipelines, automated 20+ hours of manual work weekly\n• Lead Generation: Increased lead gen by 40% through backend optimizations\n\nHis experience at Webdaddy and Findem includes building robust backend systems with measurable performance improvements.";
      } else if (hasKeyword(['full stack developer', 'fullstack developer', 'full-stack developer', 'full stack', 'fullstack', 'full-stack', 'web developer', 'software engineer', 'software developer'])) {
        roleResponse = "Full-Stack Developer\n\nSai has 2+ years of full-stack development experience! He combines comprehensive frontend and backend skills:\n\n• Frontend: React.js, Next.js, JavaScript/TypeScript\n• Backend: Python (Django, FastAPI), SQL databases\n• Full-Stack Projects: Loan Wise (loanwise.sg), AI-Powered Real Estate Website (jcrbuilders.in), Recipe Health Dashboard\n• Cloud Integration: AWS, GCP deployment and services\n• Data Integration: ETL pipelines, API development\n• Modern Development: Git, Agile methodologies, scalable architecture\n• Performance: 30% feature velocity gain, 40% lead generation increase, 25% faster decision-making\n• AI Integration: Built AI applications end-to-end, integrated LLMs with cloud providers\n\nHis experience spans the entire development stack with proven ability to deliver end-to-end solutions.";
      } else if (hasKeyword(['data analyst', 'data anlyst', 'data anlyst valso', 'data anlyst also', 'data anlyst', 'analyst', 'data analysis', 'business analyst', 'tableau', 'power bi', 'visualization'])) {
        roleResponse = "Data Analyst\n\nSai has 2+ years of data analysis experience! His expertise includes:\n\n• Programming: Python (Pandas, NumPy, scikit-learn), SQL (MySQL, PostgreSQL, T-SQL)\n• Data Processing: Processed over 1M+ data records, improved ML accuracy by 25%\n• Visualization: Tableau, Power BI, Plotly Dash, Matplotlib, Seaborn\n• Statistical Analysis: EDA, data cleaning, data wrangling, predictive analytics\n• Business Impact: Built real-time KPI dashboards, automated ETL pipelines saving 30% resources\n• Tools: Jupyter, Google Colab, Git, Agile methodologies\n• Projects: Recipe Health Dashboard (1,000+ recipes), Traffic Analysis (10K+ requests), Netflix Data Analysis\n• Performance: 25% faster decision-making, 30% resource reduction, 20% project turnaround improvement\n\nHis experience at Findem Inc. and Webdaddy demonstrates practical data analysis skills with measurable business results.";
      } else if (hasKeyword(['data scientist', 'machine learning engineer', 'ml engineer', 'ai engineer', 'ai developer', 'ml', 'machine learning', 'ai', 'scientist', 'tensorflow', 'pytorch', 'deep learning', 'neural networks', 'predictive modeling'])) {
        roleResponse = "Data Scientist / ML Engineer\n\nSai has 2+ years of data science and ML engineering experience! His expertise includes:\n\n• ML Frameworks: TensorFlow, PyTorch, scikit-learn, Keras\n• Data Processing: Processed 1M+ data records for ML training\n• Model Development: Built predictive models achieving 87% accuracy (Stock Market Forecasting)\n• Specializations: Sentiment analysis, time-series forecasting, deep learning\n• Programming: Python, R, SQL with strong statistical background\n• Cloud Platforms: AWS, GCP for ML model deployment\n• Business Applications: Real-world ML implementations at Webdaddy and Findem\n• AI Integration: Integrated LLMs with cloud providers, reduced development lifecycle by 15%\n• Performance: 25% improvement in classification accuracy, 30% feature velocity gain\n\nHis proven track record includes improving classification accuracy by 25% and building end-to-end ML solutions.";
      } else if (hasKeyword(['devops engineer', 'cloud engineer', 'devops', 'cloud', 'aws', 'gcp', 'infrastructure', 'deployment', 'automation'])) {
        roleResponse = "DevOps/Cloud Engineer\n\nSai has 2+ years of DevOps and cloud engineering experience! His expertise includes:\n\n• Cloud Platforms: AWS (EC2, S3), Google Cloud Platform\n• Automation: ETL pipelines, CI/CD processes, 2 automation pipelines built\n• Infrastructure: Cloud deployment and management\n• Performance: Reduced development lifecycle by 15%, automated 20+ hours of manual work weekly\n• Tools: Git, version control, Agile methodologies (Jira, Trello)\n• Scalability: Built systems handling large-scale data processing (1M+ records)\n• Integration: API integration, cloud services, LLM integration with cloud providers\n• Monitoring: Real-time traffic analysis (10K+ requests), 95% uptime reliability\n\nHis experience includes cloud integration and automation that delivered measurable performance improvements.";
      } else {
        // Handle roles that don't match Sai's background
        const unsuitableRoles = ['product manager', 'sales', 'marketing', 'hr', 'finance', 'accounting', 'legal', 'designer', 'ui designer', 'ux designer', 'graphic designer', 'content writer', 'copywriter', 'social media', 'customer service', 'support', 'operations', 'business analyst', 'consultant', 'project manager', 'scrum master', 'qa tester', 'manual tester', 'security engineer', 'network engineer', 'system administrator', 'database administrator', 'mobile developer', 'ios developer', 'android developer', 'game developer', 'blockchain developer', 'crypto', 'trading', 'investment', 'banking', 'insurance', 'healthcare', 'medical', 'pharmaceutical', 'education', 'teaching', 'research', 'academic', 'nonprofit', 'ngo', 'government', 'public sector', 'mechanical engineer', 'civil engineer', 'electrical engineer', 'chemical engineer', 'aerospace engineer', 'biomedical engineer', 'industrial engineer', 'environmental engineer', 'petroleum engineer', 'nuclear engineer', 'materials engineer', 'architect', 'construction', 'manufacturing', 'production', 'quality engineer', 'process engineer', 'maintenance', 'repair', 'technician', 'mechanic'];
        
        const isUnsuitableRole = unsuitableRoles.some(role => lowerQuery.includes(role));
        
        if (isUnsuitableRole) {
          // Determine why the role doesn't fit
          let whyNotFit = "";
          if (lowerQuery.includes('product manager') || lowerQuery.includes('project manager')) {
            whyNotFit = "Sai's background is in technical development and data science, not product/project management. He focuses on building solutions rather than managing teams or product strategy.";
          } else if (lowerQuery.includes('sales') || lowerQuery.includes('marketing')) {
            whyNotFit = "Sai's expertise is in technical implementation and data analysis, not sales or marketing. He builds the products that sales teams sell.";
          } else if (lowerQuery.includes('designer') || lowerQuery.includes('ui') || lowerQuery.includes('ux')) {
            whyNotFit = "While Sai has frontend development skills, his focus is on technical implementation rather than design. He builds interfaces but doesn't specialize in visual design.";
          } else if (lowerQuery.includes('mobile') || lowerQuery.includes('ios') || lowerQuery.includes('android')) {
            whyNotFit = "Sai's experience is in web development (React, Next.js) and data science, not mobile app development. He hasn't worked with iOS or Android platforms.";
          } else if (lowerQuery.includes('security') || lowerQuery.includes('network')) {
            whyNotFit = "Sai's background is in application development and data science, not cybersecurity or network engineering. He focuses on building applications rather than securing infrastructure.";
          } else if (lowerQuery.includes('qa') || lowerQuery.includes('tester')) {
            whyNotFit = "Sai is a developer who builds applications, not a QA tester. His role is creating solutions rather than testing them.";
          } else if (lowerQuery.includes('business analyst')) {
            whyNotFit = "While Sai has data analysis skills, he's more of a technical data analyst who builds systems and models, not a business analyst who focuses on business processes and requirements.";
          } else if (lowerQuery.includes('mechanical') || lowerQuery.includes('civil') || lowerQuery.includes('electrical') || lowerQuery.includes('chemical') || lowerQuery.includes('aerospace') || lowerQuery.includes('biomedical') || lowerQuery.includes('industrial') || lowerQuery.includes('environmental') || lowerQuery.includes('petroleum') || lowerQuery.includes('nuclear') || lowerQuery.includes('materials')) {
            whyNotFit = "Sai's background is in computer science and data science, not traditional engineering fields like mechanical, civil, electrical, or chemical engineering. He specializes in software development, data analysis, and machine learning rather than physical systems or manufacturing.";
          } else if (lowerQuery.includes('architect') || lowerQuery.includes('construction') || lowerQuery.includes('manufacturing') || lowerQuery.includes('production')) {
            whyNotFit = "Sai's expertise is in software architecture and data systems, not physical architecture, construction, or manufacturing. He builds digital solutions and analyzes data rather than designing buildings or managing production processes.";
          } else {
            whyNotFit = "Sai's background is in technical development and data science, not this particular domain. His expertise lies in building applications, analyzing data, and implementing technical solutions.";
          }
          
          return {
            text: whyNotFit + "\n\nHowever, Sai is highly qualified for these technical positions:\n\nData & Analytics (2+ years):\n• Data Analyst - Python, SQL, Tableau, Power BI\n• Data Scientist - TensorFlow, PyTorch, ML models\n• ML Engineer - AI/ML implementation, model deployment\n\nDevelopment (2+ years):\n• Frontend Developer - React, Next.js, JavaScript/TypeScript\n• Backend Developer - Python, Django, FastAPI, SQL\n• Full-Stack Developer - Complete web applications\n• Python Developer - Django, FastAPI, data processing\n• React Developer - Modern frontend development\n• Software Engineer - End-to-end development\n\nCloud & DevOps (2+ years):\n• DevOps Engineer - AWS, GCP, CI/CD, automation\n• Cloud Engineer - Cloud platforms, infrastructure\n\nKey Strengths: Master's in Data Science, 1M+ records processed, 30% performance improvements, real-time dashboards, ETL pipelines, proven business impact."
          };
        }
        
        return {
          text: "I can provide specific information about roles that match Sai's background. Please ask about: Data Analyst, Data Scientist, ML Engineer, Frontend Developer, Backend Developer, Full-Stack Developer, or DevOps/Cloud Engineer roles."
        };
      }
      
      return {
        text: roleResponse
      };
    }

    // Any role-related questions based on skills (EXCLUDE job descriptions)
    if (hasKeyword(['role', 'position', 'job', 'career', 'work as', 'developer', 'engineer', 'specialist', 'consultant', 'architect', 'manager', 'lead', 'senior', 'junior', 'entry', 'mid', 'experienced', 'expert', 'professional', 'analyst', 'scientist', 'researcher', 'programmer', 'coder', 'technician', 'administrator', 'coordinator', 'director', 'executive', 'officer', 'representative', 'associate', 'assistant', 'intern', 'trainee', 'apprentice']) && 
        !hasKeyword(['requirements', 'responsibilities', 'qualifications', 'job title:', 'location:', 'reporting to', 'ideal candidate', 'bachelor\'s degree', 'proficiency in', 'familiarity with', 'comprehensive benefits', 'equal employment', 'send us a note', 'hiring@', 'apply and join'])) {
      return {
        text: "I can provide specific information about roles that match Sai's background. Please ask about: Data Analyst, Data Scientist, ML Engineer, Frontend Developer, Backend Developer, Full-Stack Developer, or DevOps/Cloud Engineer roles."
      };
    }

    // Comprehensive role list
    if (hasKeyword(['all roles', 'what roles', 'which roles', 'roles he can work', 'roles he fits', 'all positions', 'what positions', 'job roles', 'career options', 'role options'])) {
      return {
        text: "Roles Sai Fits (with 2+ years experience):\n\nData & Analytics:\n• Data Analyst - Python, SQL, Tableau, Power BI\n• Data Scientist - TensorFlow, PyTorch, ML models\n• ML Engineer - AI/ML implementation, model deployment\n\nDevelopment:\n• Frontend Developer - React, Next.js, JavaScript/TypeScript\n• Backend Developer - Python, Django, FastAPI, SQL\n• Full-Stack Developer - Complete web applications\n• Python Developer - Django, FastAPI, data processing\n• React Developer - Modern frontend development\n• Software Engineer - End-to-end development\n\nCloud & DevOps:\n• DevOps Engineer - AWS, GCP, CI/CD, automation\n• Cloud Engineer - Cloud platforms, infrastructure\n\nKey Strengths: Master's in Data Science, 1M+ records processed, 30% performance improvements, real-time dashboards, ETL pipelines, business impact."
      };
    }
    if (hasKeyword(['years of experience', 'how many years', 'experience years', 'years experience', 'how long', 'experience level', 'seniority', 'junior', 'senior', 'mid level', 'entry level'])) {
      return {
        text: "Sai has 2+ years of professional experience in data science and software development! His experience includes:\n\n• Webdaddy (Aug 2024 - Feb 2025): Python Developer & R&D Specialist\n• Findem Inc. (May 2022 - Dec 2023): R&D Data Science Analyst\n• Master's Degree: Data Science from NJIT (completed May 2025)\n• Bachelor's Degree: Computer Science Engineering (June 2023)\n\nHis experience spans full-stack development, data analysis, machine learning, and cloud platforms with measurable business impact including 30% performance improvements and processing 1M+ data records."
      };
    }
    if (hasKeyword(['what is he doing', 'what is he doing right now', 'what is he doing now', 'what does he do', 'what is he up to', 'current status', 'current situation', 'right now', 'currently', 'now', 'present']) && 
        !hasKeyword(['google', 'gogole', 'googel', 'microsoft', 'amazon', 'apple', 'facebook', 'meta', 'netflix', 'uber', 'tesla', 'spacex', 'company', 'companies', 'john', 'mary', 'mike', 'sarah', 'david', 'lisa', 'tom', 'jane', 'bob', 'alice', 'do you know about', 'tell me about'])) {
      return {
        text: "Currently, Sai is actively seeking new professional opportunities. He recently completed his Master of Science in Data Science from NJIT in May 2025 and is now pursuing roles in data science, full-stack development, or AI/ML positions. He holds F1 OPT EAD authorization commencing August 16, 2025, enabling him to work in the United States. He is currently based in Newark, New Jersey, and is open to opportunities that align with his expertise in Python, React, data analysis, and machine learning."
      };
    }

    // General help
    if (hasKeyword(['help', 'what can you', 'what can you tell me', 'what do you know'])) {
      return {
        text: "I can provide comprehensive information about Sai Srinivas Pedhapolla's professional background. You may inquire about his contact information, educational background, work experience, technical skills, projects, professional certifications, recommendations from supervisors, achievements and results, or his F1 OPT EAD work authorization status. I can also assist with downloading his resume or connecting with him through social media platforms. Please let me know how I can help you learn about his professional qualifications."
      };
    }

    // Default response - more helpful and humanized
    return {
      text: "I apologize, but I'm not certain I understand your question. I'm designed to provide information about Sai Srinivas Pedhapolla's professional background. You may ask about his work experience, education, technical skills, projects, certifications, or achievements. For example, you could inquire 'What companies has he worked for?' or 'Tell me about his technical skills.' How may I assist you with information about Sai's professional qualifications?"
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input.trim();
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      let response;
      
      // Handle name collection
      if (!hasAskedName) {
        const name = userInput;
        if (name.length > 0) {
          setUserName(name);
          setHasAskedName(true);
          response = {
            text: "Nice to meet you, " + name + "! I'm Dashya, your AI assistant for Sai Srinivas Pedhapolla's portfolio. I can answer questions about his education, experience, skills, projects, certifications, and more. What would you like to know about Sai?",
          };
        } else {
          response = {
            text: "Please tell me your name so I can address you properly!",
          };
        }
      } else {
        // Generate response with user's name
        response = generateResponse(userInput, userName);
      }
      
      const botResponse = {
        text: response.text,
        isBot: true,
        links: response.links as Message['links']
      } as Message;
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'email': return <FaEnvelope />;
      case 'phone': return <FaPhone />;
      case 'github': return <FaGithub />;
      case 'linkedin': return <FaLinkedin />;
      case 'twitter': return <FaTwitter />;
      case 'resume': return <FaDownload />;
      default: return <FaExternalLinkAlt />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <img src="/ai-chatbot-avatar.svg" alt="Dashya AI" className="w-10 h-10" />
        </motion.button>
      )}

      {/* Popup Notification */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-40"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src="/ai-chatbot-avatar.svg" alt="Dashya AI" className="w-full h-full" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Dashya</h4>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close popup"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Hi there! 👋 I'm Dashya, your AI assistant. I can help you learn about Sai's professional background, skills, and experience. Ask me anything!
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setShowPopup(false);
                    }}
                    className="flex-1 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white text-xs py-2 px-3 rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    Start Chat
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="px-3 py-2 text-gray-500 text-xs hover:text-gray-700 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
            {/* Arrow pointing to chat button */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="w-[420px] h-[700px] bg-white rounded-2xl shadow-2xl border-2 border-gray-300 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/ai-chatbot-avatar.svg" alt="Dashya AI" className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-bold text-base">Dashya</h3>
                  <p className="text-xs opacity-90">AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  resetChat();
                }}
                className="p-1.5 hover:bg-white/20 rounded-full transition-colors duration-200"
                aria-label="Close chat"
                title="Close chat"
              >
                <FaTimes className="text-white text-sm" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white min-h-0">
              {messages.map((message, index) => (
                <div key={index} className={"flex " + (message.isBot ? 'justify-start' : 'justify-end')}>
                  <div className={"max-w-[80%] " + (message.isBot ? 'bg-gray-100 text-gray-900 border border-gray-300' : 'bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white') + " p-3 rounded-lg shadow-sm"}>
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {message.text}
                    </div>
                    
                    {/* Links */}
                    {message.links && message.links.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target={link.type === 'email' || link.type === 'phone' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className={"inline-flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-colors duration-200 " + (message.isBot ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : 'bg-white/20 text-white hover:bg-white/30')}
                          >
                            {getLinkIcon(link.type)}
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg shadow-sm border border-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="text-xs text-gray-600">Typing...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-gray-100 border-t border-gray-300 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={hasAskedName ? "Ask about Sai's background..." : "What's your name?"}
                  className="flex-1 p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/30 focus:border-[#06b6d4] text-sm bg-white"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-3 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white rounded-lg hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                  title="Send message"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileChatBot;
