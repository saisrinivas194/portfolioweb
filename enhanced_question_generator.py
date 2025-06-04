import random
import json
import itertools
from datetime import datetime

class EnhancedQuestionBankGenerator:
    def __init__(self):
        self.portfolio_data = {
            "personal": {
                "name": "Sai Srinivas",
                "current_status": "Graduate student in Data Science (May 2025)",
                "location": "Newark, NJ, USA",
                "phone": "+1 (201) 705-9891",
                "email": "pedhapollasaisrinivas@gmail.com",
                "social_media": {
                    "github": "github.com/saisrinivas194",
                    "linkedin": "linkedin.com/in/sai-srinivas-pedhapolla-345959256",
                    "twitter": "x.com/SaiSrinivas194"
                }
            },
            "education": [
                {
                    "institution": "New Jersey Institute of Technology (NJIT)",
                    "degree": "Masters of Science (Data Science)",
                    "duration": "January 2024 - May 2025",
                    "location": "Newark, NJ, USA",
                    "gpa": "3.381/4",
                    "courses": ["Machine Learning", "Deep Learning", "Big Data Analytics", 
                              "Data Visualization", "Statistical Analysis", "AI & Prompt Engineering", "Frontend using AI"]
                },
                {
                    "institution": "SCSVMV University",
                    "degree": "B.E., Computer Science and Engineering",
                    "duration": "June 2019 - June 2023",
                    "location": "Kanchipuram, TN, India",
                    "gpa": "9.43/10",
                    "courses": ["Data Structures & Algorithms", "Object-Oriented Programming", 
                              "Database Management Systems", "Computer Networks", "Operating Systems", 
                              "Software Engineering", "Web Technologies", "Python Programming"]
                }
            ],
            "experience": [
                {
                    "company": "Webdaddy",
                    "role": "Research & Development",
                    "duration": "August 2024 - February 2025",
                    "location": "Freelance",
                    "type": "Remote",
                    "achievements": [
                        "Developed AI-powered data annotation tools in Python, improving labelling efficiency by 35%",
                        "Built and optimized ML models for text classification using TensorFlow and NLP techniques",
                        "Automated data collection and preprocessing pipelines, reducing manual effort by 40%",
                        "Conducted exploratory data analysis (EDA) to identify trends and improve model accuracy"
                    ]
                },
                {
                    "company": "Findem, Inc.",
                    "role": "Research & Development",
                    "duration": "July 2023 - December 2023",
                    "location": "Bengaluru, India",
                    "type": "Onsite",
                    "achievements": [
                        "Managed large-scale data annotation projects for training ML models with 98% accuracy",
                        "Developed Python scripts to clean, analyze, and visualize complex datasets",
                        "Optimized an email classification ML model, improving prediction accuracy by 25%",
                        "Created internal tools for automated data validation and quality assurance"
                    ]
                }
            ],
            "skills": {
                "programming": ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "Scala", "SQL", "Jupyter", "Google Colab"],
                "ai_ml": ["Deep Learning", "NLP", "Computer Vision", "Time Series Forecasting", "Semi-Supervised Learning", "Explainable AI", "Recommender Systems", "Prompt Engineering", "Data Labeling Tools"],
                "data_analytics": ["Tableau", "Excel", "Statistical Analysis", "Causal Inference", "Dataset Curation", "Quality Control", "Data Preprocessing", "Data Cleaning"],
                "web_dev": ["ReactJS", "HTML", "CSS", "API Integration", "Git", "Version Control", "ChatGPT", "SEO Optimization"],
                "big_data": ["Hadoop", "Spark", "AWS", "Cloud Computing", "Project Management"]
            },
            "projects": [
                {
                    "name": "Recipe Health Dashboard",
                    "duration": "Jan 2024 - Present",
                    "description": "Interactive dashboard using Plotly Dash for analyzing 1,000+ recipes",
                    "technologies": ["Python", "Plotly Dash", "Flask", "Heroku", "Render", "PythonAnywhere", "Gunicorn"],
                    "achievements": ["Analyzed nutrient distribution", "Explored calorie-health relationships", "Integrated deployment options", "Used Dv_Final.csv as data source"]
                },
                {
                    "name": "Real Traffic Analysis",
                    "duration": "Oct 2024 - Dec 2024",
                    "description": "Real-time traffic monitoring and HTTP/HTTPS analysis on 10K+ requests",
                    "technologies": ["Python", "HTTP/HTTPS protocols", "Dashboard development", "Network Analysis"],
                    "achievements": ["Reduced latency by 15%", "Detected 5+ security vulnerabilities", "Built performance dashboards", "Analyzed 10K+ requests"]
                },
                {
                    "name": "Loan Wise",
                    "duration": "Aug 2024 - Oct 2024",
                    "description": "Automated loan workflows using AI and recommendation systems",
                    "technologies": ["AI", "Tableau", "UX Design", "Recommendation Systems"],
                    "achievements": ["Improved user engagement by 25%", "Reduced form abandonment by 20%", "Cut processing time by 30%", "Built Tableau dashboards"]
                },
                {
                    "name": "AI-Powered Real Estate Website",
                    "duration": "Nov 2024 - Jan 2025",
                    "description": "Dynamic ReactJS site enhanced by ChatGPT code generation",
                    "technologies": ["ReactJS", "ChatGPT", "SEO", "Google Maps API", "Next.js"],
                    "achievements": ["95% uptime reliability", "Boosted local traffic by 150%", "Reduced development time by 50%", "Debugged 40+ issues"]
                },
                {
                    "name": "Stock Market Forecasting",
                    "duration": "Sep 2023 - Nov 2023",
                    "description": "Predictive dashboard using real-time APIs and ML models",
                    "technologies": ["Python", "ML Models", "APIs", "Time Series", "Visualization"],
                    "achievements": ["Deployed predictive dashboard", "Implemented time series forecasting", "Created interactive visualizations", "Integrated multiple data sources"]
                },
                {
                    "name": "Netflix Data Analysis",
                    "duration": "Aug 2023 - Sep 2023",
                    "description": "Analyzed Netflix content library to identify viewing patterns",
                    "technologies": ["Python", "Data Analysis", "Visualization", "Pandas", "Matplotlib"],
                    "achievements": ["Analyzed content library", "Identified viewing patterns", "Created genre visualizations", "Developed audience insights"]
                },
                {
                    "name": "Customer Personality Insights",
                    "duration": "Jul 2023 - Aug 2023",
                    "description": "Clustered customer personas using unsupervised ML",
                    "technologies": ["Python", "Unsupervised ML", "Clustering", "Segmentation", "Visualization"],
                    "achievements": ["Clustered customer personas", "Applied segmentation techniques", "Developed marketing insights", "Created behavior dashboards"]
                }
            ],
            "certifications": [
                {
                    "title": "Data Science Course",
                    "issuer": "ExcelR",
                    "date": "07/2024 - 09/2024",
                    "description": "Comprehensive Data Science course covering statistical analysis, machine learning, data visualization, and practical applications using Python and related tools."
                }
            ],
            "recommendations": [
                {
                    "name": "Hari Kumar Somakantan",
                    "title": "Director of Business Development at Webdaddy",
                    "relationship": "Direct Manager @Webdaddy",
                    "date": "April 10, 2025"
                },
                {
                    "name": "Yash Malviya",
                    "title": "Product Enablement & Data Analyst at Findem",
                    "relationship": "Direct Manager",
                    "date": "April 23, 2024"
                }
            ]
        }
        
        # Question templates and variations
        self.question_templates = {
            "what": ["What is", "What are", "What was", "What were", "What would", "What will", "What can", "What could", "What should", "What might"],
            "how": ["How do", "How did", "How would", "How will", "How can", "How could", "How should", "How might"],
            "tell": ["Tell me about", "Describe", "Explain", "Share details about", "Discuss", "Elaborate on"],
            "when": ["When did", "When would", "When will", "When can", "When should", "When might"],
            "where": ["Where did", "Where would", "Where will", "Where can", "Where should", "Where is"],
            "why": ["Why did", "Why would", "Why will", "Why can", "Why should", "Why is"],
            "which": ["Which", "Which one", "Which ones", "Which type", "Which kind"],
            "who": ["Who is", "Who was", "Who would", "Who will", "Who can", "Who should"]
        }
        
        self.question_modifiers = [
            "specifically", "exactly", "precisely", "in detail", "thoroughly", "comprehensively",
            "briefly", "quickly", "clearly", "simply", "effectively", "efficiently"
        ]
        
        self.context_variations = [
            "in your experience", "in your opinion", "from your perspective", "based on your work",
            "according to your knowledge", "in your field", "in your industry", "in your projects"
        ]

    def generate_comprehensive_personal_questions(self):
        questions = set()
        
        # Basic personal information questions
        personal_topics = [
            ("full name", ["full name", "name", "what you're called"]),
            ("location", ["current location", "where you live", "where you're based", "location"]),
            ("contact", ["contact information", "how to reach you", "contact details", "ways to contact you"]),
            ("status", ["current status", "academic status", "student status", "current situation"]),
            ("graduation", ["graduation date", "when you graduate", "completion date", "when you finish"]),
            ("background", ["professional background", "academic background", "career background", "experience"]),
            ("social media", ["LinkedIn profile", "GitHub profile", "Twitter handle", "social media"]),
            ("OPT", ["OPT eligibility", "work authorization", "visa status", "employment eligibility"])
        ]
        
        for topic, variations in personal_topics:
            for template_type, templates in self.question_templates.items():
                for template in templates:
                    for variation in variations:
                        questions.add(f"{template} your {variation}?")
                        questions.add(f"{template} {variation}?")
                        for modifier in self.question_modifiers[:3]:  # Limit to avoid explosion
                            questions.add(f"{template} your {variation} {modifier}?")
        
        return list(questions)

    def generate_comprehensive_education_questions(self):
        questions = set()
        
        for edu in self.portfolio_data["education"]:
            institution = edu["institution"]
            degree = edu["degree"]
            courses = edu["courses"]
            
            # Institution-specific questions
            institution_topics = [
                f"experience at {institution}",
                f"time at {institution}",
                f"studies at {institution}",
                f"education at {institution}",
                f"degree from {institution}",
                f"courses at {institution}",
                f"GPA at {institution}",
                f"performance at {institution}"
            ]
            
            for topic in institution_topics:
                for template_type, templates in self.question_templates.items():
                    for template in templates[:3]:  # Limit templates
                        questions.add(f"{template} {topic}?")
                        for context in self.context_variations[:2]:
                            questions.add(f"{template} {topic} {context}?")
            
            # Course-specific questions
            for course in courses:
                course_topics = [
                    f"your {course} course",
                    f"learning {course}",
                    f"studying {course}",
                    f"your experience with {course}",
                    f"projects in {course}",
                    f"skills from {course}",
                    f"knowledge of {course}",
                    f"application of {course}"
                ]
                
                for topic in course_topics:
                    for template_type, templates in self.question_templates.items():
                        for template in templates[:2]:
                            questions.add(f"{template} {topic}?")
        
        return list(questions)

    def generate_comprehensive_experience_questions(self):
        questions = set()
        
        for exp in self.portfolio_data["experience"]:
            company = exp["company"]
            role = exp["role"]
            achievements = exp["achievements"]
            
            # Company and role questions
            work_topics = [
                f"your role at {company}",
                f"your work at {company}",
                f"your experience at {company}",
                f"your position at {company}",
                f"your responsibilities at {company}",
                f"your contributions to {company}",
                f"your achievements at {company}",
                f"your time at {company}",
                f"working as {role}",
                f"your {role} position",
                f"being a {role}"
            ]
            
            for topic in work_topics:
                for template_type, templates in self.question_templates.items():
                    for template in templates[:3]:
                        questions.add(f"{template} {topic}?")
                        for modifier in self.question_modifiers[:2]:
                            questions.add(f"{template} {topic} {modifier}?")
            
            # Achievement-specific questions
            for achievement in achievements:
                achievement_topics = [
                    f"accomplishing: {achievement}",
                    f"achieving: {achievement}",
                    f"implementing: {achievement}",
                    f"the process of: {achievement}",
                    f"the impact of: {achievement}",
                    f"the challenges in: {achievement}",
                    f"the results of: {achievement}",
                    f"the methodology for: {achievement}"
                ]
                
                for topic in achievement_topics:
                    for template in ["Tell me about", "Explain", "Describe", "How did you approach"]:
                        questions.add(f"{template} {topic}?")
        
        return list(questions)

    def generate_comprehensive_skills_questions(self):
        questions = set()
        
        # Category-level questions
        for category, skills_list in self.portfolio_data["skills"].items():
            category_name = category.replace('_', ' ')
            
            category_topics = [
                f"your {category_name} skills",
                f"your expertise in {category_name}",
                f"your experience with {category_name}",
                f"your proficiency in {category_name}",
                f"your knowledge of {category_name}",
                f"working with {category_name}",
                f"learning {category_name}",
                f"applying {category_name}"
            ]
            
            for topic in category_topics:
                for template_type, templates in self.question_templates.items():
                    for template in templates[:3]:
                        questions.add(f"{template} {topic}?")
            
            # Individual skill questions
            for skill in skills_list:
                skill_topics = [
                    f"your experience with {skill}",
                    f"using {skill}",
                    f"working with {skill}",
                    f"learning {skill}",
                    f"your proficiency in {skill}",
                    f"projects using {skill}",
                    f"applications of {skill}",
                    f"challenges with {skill}",
                    f"benefits of {skill}",
                    f"alternatives to {skill}"
                ]
                
                for topic in skill_topics:
                    for template_type, templates in self.question_templates.items():
                        for template in templates[:2]:
                            questions.add(f"{template} {topic}?")
        
        return list(questions)

    def generate_comprehensive_project_questions(self):
        questions = set()
        
        for project in self.portfolio_data["projects"]:
            project_name = project["name"]
            technologies = project["technologies"]
            achievements = project["achievements"]
            
            # Project overview questions
            project_topics = [
                f"the {project_name} project",
                f"working on {project_name}",
                f"building {project_name}",
                f"developing {project_name}",
                f"your {project_name} project",
                f"the goal of {project_name}",
                f"the purpose of {project_name}",
                f"the impact of {project_name}",
                f"the challenges in {project_name}",
                f"the success of {project_name}"
            ]
            
            for topic in project_topics:
                for template_type, templates in self.question_templates.items():
                    for template in templates[:3]:
                        questions.add(f"{template} {topic}?")
            
            # Technology-specific questions
            for tech in technologies:
                tech_topics = [
                    f"using {tech} in {project_name}",
                    f"implementing {tech} for {project_name}",
                    f"choosing {tech} for {project_name}",
                    f"the role of {tech} in {project_name}",
                    f"challenges with {tech} in {project_name}",
                    f"benefits of {tech} for {project_name}"
                ]
                
                for topic in tech_topics:
                    for template in ["How did you approach", "What was your experience with", "Tell me about", "Explain"]:
                        questions.add(f"{template} {topic}?")
            
            # Achievement-specific questions
            for achievement in achievements:
                achievement_topics = [
                    f"achieving '{achievement}' in {project_name}",
                    f"the process behind '{achievement}'",
                    f"measuring '{achievement}'",
                    f"the impact of '{achievement}'",
                    f"challenges in '{achievement}'"
                ]
                
                for topic in achievement_topics:
                    for template in ["How did you approach", "What was involved in", "Tell me about", "Explain"]:
                        questions.add(f"{template} {topic}?")
        
        return list(questions)

    def generate_technical_deep_dive_questions(self):
        questions = set()
        
        # Core technical concepts
        ml_concepts = [
            "supervised learning", "unsupervised learning", "reinforcement learning",
            "overfitting", "underfitting", "bias-variance tradeoff", "cross-validation",
            "feature engineering", "feature selection", "dimensionality reduction",
            "regularization", "gradient descent", "backpropagation", "neural networks",
            "deep learning", "convolutional neural networks", "recurrent neural networks",
            "transformers", "attention mechanisms", "transfer learning", "ensemble methods"
        ]
        
        nlp_concepts = [
            "tokenization", "stemming", "lemmatization", "part-of-speech tagging",
            "named entity recognition", "sentiment analysis", "text classification",
            "language models", "word embeddings", "TF-IDF", "BERT", "GPT",
            "sequence-to-sequence models", "machine translation", "topic modeling"
        ]
        
        data_science_concepts = [
            "exploratory data analysis", "data preprocessing", "data cleaning",
            "missing data handling", "outlier detection", "statistical significance",
            "hypothesis testing", "A/B testing", "correlation", "causation",
            "time series analysis", "forecasting", "clustering", "classification",
            "regression", "recommendation systems", "anomaly detection"
        ]
        
        programming_concepts = [
            "object-oriented programming", "functional programming", "data structures",
            "algorithms", "complexity analysis", "database design", "SQL optimization",
            "API design", "microservices", "cloud computing", "containerization",
            "version control", "CI/CD", "testing", "debugging", "code review"
        ]
        
        all_concepts = ml_concepts + nlp_concepts + data_science_concepts + programming_concepts
        
        for concept in all_concepts:
            concept_questions = [
                f"What is {concept}?",
                f"How does {concept} work?",
                f"When would you use {concept}?",
                f"What are the benefits of {concept}?",
                f"What are the challenges with {concept}?",
                f"How do you implement {concept}?",
                f"What are the applications of {concept}?",
                f"How do you evaluate {concept}?",
                f"What are alternatives to {concept}?",
                f"How has {concept} evolved?"
            ]
            
            for question in concept_questions:
                questions.add(question)
                # Add variations
                for modifier in self.question_modifiers[:2]:
                    questions.add(f"{question[:-1]} {modifier}?")
                for context in self.context_variations[:2]:
                    questions.add(f"{question[:-1]} {context}?")
        
        return list(questions)

    def generate_scenario_and_system_design_questions(self):
        questions = set()
        
        # System design scenarios
        systems = [
            "recommendation system", "fraud detection system", "chatbot", "search engine",
            "data pipeline", "real-time analytics system", "machine learning platform",
            "content delivery network", "social media platform", "e-commerce platform",
            "video streaming service", "messaging system", "payment system",
            "inventory management system", "customer relationship management system"
        ]
        
        domains = [
            "e-commerce", "healthcare", "finance", "education", "entertainment",
            "social media", "travel", "food delivery", "ride sharing", "logistics",
            "manufacturing", "retail", "insurance", "telecommunications", "gaming"
        ]
        
        # Generate combinations
        for system in systems:
            for domain in domains:
                scenario_questions = [
                    f"How would you design a {system} for {domain}?",
                    f"What would be your approach to building a {system} in {domain}?",
                    f"How would you scale a {system} for {domain}?",
                    f"What challenges would you face building a {system} for {domain}?",
                    f"How would you ensure reliability in a {system} for {domain}?",
                    f"What technologies would you use for a {system} in {domain}?"
                ]
                
                for question in scenario_questions:
                    questions.add(question)
        
        return list(questions)

    def generate_behavioral_and_situational_questions(self):
        questions = set()
        
        behavioral_topics = [
            "challenging project", "tight deadline", "learning new technology", "failure",
            "team conflict", "leadership opportunity", "technical decision", "process improvement",
            "mentoring", "presenting to stakeholders", "handling criticism", "prioritizing tasks",
            "working under pressure", "debugging complex issue", "code review",
            "architectural decision", "performance optimization", "security concern"
        ]
        
        situations = [
            "Tell me about a time when you",
            "Describe a situation where you",
            "Give me an example of when you",
            "Can you share an experience where you",
            "What would you do if you",
            "How would you handle a situation where you",
            "Explain how you would approach",
            "What's your strategy for dealing with"
        ]
        
        for situation in situations:
            for topic in behavioral_topics:
                behavioral_questions = [
                    f"{situation} faced a {topic}",
                    f"{situation} had to deal with a {topic}",
                    f"{situation} encountered a {topic}",
                    f"{situation} needed to handle a {topic}",
                    f"{situation} were confronted with a {topic}"
                ]
                
                for question in behavioral_questions:
                    questions.add(f"{question}?")
        
        return list(questions)

    def generate_industry_and_trend_questions(self):
        questions = set()
        
        industry_topics = [
            "artificial intelligence trends", "machine learning developments", "data science evolution",
            "technology disruption", "digital transformation", "automation impact",
            "ethical AI", "data privacy", "algorithmic bias", "explainable AI",
            "edge computing", "quantum computing", "cloud adoption", "open source",
            "startup ecosystem", "tech industry changes", "future of work",
            "skills gap", "continuous learning", "innovation cycles"
        ]
        
        question_formats = [
            "What's your opinion on", "How do you see", "What are your thoughts about",
            "How is", "What impact does", "What role does", "How will",
            "What challenges does", "What opportunities does", "How should companies approach"
        ]
        
        for format_q in question_formats:
            for topic in industry_topics:
                questions.add(f"{format_q} {topic}?")
                questions.add(f"{format_q} the future of {topic}?")
                questions.add(f"{format_q} current {topic}?")
                questions.add(f"{format_q} emerging {topic}?")
        
        return list(questions)

    def generate_certification_and_learning_questions(self):
        questions = set()
        
        for cert in self.portfolio_data["certifications"]:
            cert_topics = [
                f"your {cert['title']} certification",
                f"learning from {cert['issuer']}",
                f"your experience with {cert['title']}",
                f"skills gained from {cert['title']}",
                f"value of {cert['title']}",
                f"choosing {cert['title']}",
                f"completing {cert['title']}"
            ]
            
            for topic in cert_topics:
                for template_type, templates in self.question_templates.items():
                    for template in templates[:3]:
                        questions.add(f"{template} {topic}?")
        
        # General learning questions
        learning_topics = [
            "continuous learning", "staying updated", "learning new technologies",
            "professional development", "skill building", "knowledge sharing",
            "online courses", "technical books", "conferences", "workshops",
            "networking", "mentorship", "career growth", "goal setting"
        ]
        
        for topic in learning_topics:
            learning_questions = [
                f"How do you approach {topic}?",
                f"What's your strategy for {topic}?",
                f"Tell me about your experience with {topic}",
                f"How important is {topic} to you?",
                f"What resources do you use for {topic}?",
                f"How do you measure success in {topic}?"
            ]
            
            for question in learning_questions:
                questions.add(question)
        
        return list(questions)

    def generate_all_questions(self):
        """Generate comprehensive question bank"""
        all_questions = set()
        
        print("Generating comprehensive personal questions...")
        all_questions.update(self.generate_comprehensive_personal_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating comprehensive education questions...")
        all_questions.update(self.generate_comprehensive_education_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating comprehensive experience questions...")
        all_questions.update(self.generate_comprehensive_experience_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating comprehensive skills questions...")
        all_questions.update(self.generate_comprehensive_skills_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating comprehensive project questions...")
        all_questions.update(self.generate_comprehensive_project_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating technical deep-dive questions...")
        all_questions.update(self.generate_technical_deep_dive_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating scenario and system design questions...")
        all_questions.update(self.generate_scenario_and_system_design_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating behavioral and situational questions...")
        all_questions.update(self.generate_behavioral_and_situational_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating industry and trend questions...")
        all_questions.update(self.generate_industry_and_trend_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating certification and learning questions...")
        all_questions.update(self.generate_certification_and_learning_questions())
        print(f"Final total: {len(all_questions)}")
        
        return list(all_questions)

    def categorize_questions(self, questions):
        """Categorize questions by type and topic"""
        categories = {
            "personal": [],
            "education": [],
            "experience": [],
            "skills": [],
            "projects": [],
            "technical": [],
            "behavioral": [],
            "scenario": [],
            "industry": [],
            "learning": [],
            "general": []
        }
        
        for question in questions:
            q_lower = question.lower()
            categorized = False
            
            # Personal
            if any(word in q_lower for word in ['name', 'contact', 'location', 'yourself', 'personal', 'background']):
                categories["personal"].append(question)
                categorized = True
            
            # Education
            elif any(word in q_lower for word in ['university', 'degree', 'study', 'course', 'gpa', 'academic', 'education', 'njit', 'scsvmv']):
                categories["education"].append(question)
                categorized = True
            
            # Experience
            elif any(word in q_lower for word in ['webdaddy', 'findem', 'work', 'role', 'company', 'job', 'position', 'experience']):
                categories["experience"].append(question)
                categorized = True
            
            # Skills
            elif any(word in q_lower for word in ['python', 'tensorflow', 'skill', 'proficiency', 'expertise', 'programming', 'technology']):
                categories["skills"].append(question)
                categorized = True
            
            # Projects
            elif any(word in q_lower for word in ['project', 'build', 'develop', 'create', 'recipe', 'traffic', 'loan', 'real estate', 'netflix', 'stock']):
                categories["projects"].append(question)
                categorized = True
            
            # Technical
            elif any(word in q_lower for word in ['algorithm', 'model', 'machine learning', 'deep learning', 'neural network', 'data science', 'implement']):
                categories["technical"].append(question)
                categorized = True
            
            # Behavioral
            elif any(phrase in q_lower for phrase in ['tell me about a time', 'describe a situation', 'how do you handle', 'what would you do']):
                categories["behavioral"].append(question)
                categorized = True
            
            # Scenario
            elif any(word in q_lower for word in ['design', 'system', 'how would you build', 'approach to building', 'scale']):
                categories["scenario"].append(question)
                categorized = True
            
            # Industry
            elif any(word in q_lower for word in ['trend', 'future', 'industry', 'opinion', 'impact', 'evolution']):
                categories["industry"].append(question)
                categorized = True
            
            # Learning
            elif any(word in q_lower for word in ['learning', 'certification', 'course', 'training', 'development']):
                categories["learning"].append(question)
                categorized = True
            
            # General
            else:
                categories["general"].append(question)
        
        return categories

    def save_comprehensive_questions(self, questions, filename="comprehensive_question_bank.json"):
        """Save questions with comprehensive categorization and metadata"""
        categories = self.categorize_questions(questions)
        
        question_data = {
            "metadata": {
                "total_questions": len(questions),
                "generation_date": datetime.now().isoformat(),
                "categories_count": {cat: len(q_list) for cat, q_list in categories.items()}
            },
            "categories": categories,
            "all_questions": questions,
            "sample_questions_by_category": {
                cat: q_list[:10] for cat, q_list in categories.items() if q_list
            }
        }
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(question_data, f, indent=2, ensure_ascii=False)
        
        print(f"\nQuestions saved to {filename}")
        print(f"Total questions generated: {len(questions)}")
        print("\nCategory breakdown:")
        for category, count in question_data["metadata"]["categories_count"].items():
            print(f"  {category.capitalize()}: {count} questions")
        
        return question_data

# Usage
if __name__ == "__main__":
    generator = EnhancedQuestionBankGenerator()
    questions = generator.generate_all_questions()
    
    print(f"\n{'='*50}")
    print(f"COMPREHENSIVE QUESTION BANK GENERATED")
    print(f"{'='*50}")
    
    # Save comprehensive question bank
    question_data = generator.save_comprehensive_questions(questions)
    
    # Display sample questions from each category
    print(f"\n{'='*50}")
    print(f"SAMPLE QUESTIONS BY CATEGORY")
    print(f"{'='*50}")
    
    for category, sample_questions in question_data["sample_questions_by_category"].items():
        if sample_questions:
            print(f"\n{category.upper()} ({len(question_data['categories'][category])} total):")
            for i, question in enumerate(sample_questions, 1):
                print(f"  {i}. {question}")
            if len(question_data['categories'][category]) > 10:
                remaining = len(question_data['categories'][category]) - 10
                print(f"  ... and {remaining} more questions") 