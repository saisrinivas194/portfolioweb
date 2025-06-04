import random
import json

class QuestionBankGenerator:
    def __init__(self):
        self.personal_data = {
            "name": "Sai Srinivas",
            "current_status": "Graduate student in Data Science (May 2025)",
            "location": "Newark, NJ, USA",
            "phone": "+1 (201) 705-9891",
            "email": "pedhapollasaisrinivas@gmail.com",
            "github": "github.com/saisrinivas194",
            "linkedin": "linkedin.com/in/sai-srinivas-pedhapolla-345959256",
            "twitter": "x.com/SaiSrinivas194"
        }
        
        self.education = [
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
        ]
        
        self.experience = [
            {
                "company": "Webdaddy",
                "role": "Research & Development",
                "duration": "August 2024 - February 2025",
                "location": "Freelance",
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
                "achievements": [
                    "Managed large-scale data annotation projects for training ML models with 98% accuracy",
                    "Developed Python scripts to clean, analyze, and visualize complex datasets",
                    "Optimized an email classification ML model, improving prediction accuracy by 25%",
                    "Created internal tools for automated data validation and quality assurance"
                ]
            }
        ]
        
        self.skills = {
            "programming": ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "Scala", "SQL"],
            "ai_ml": ["Deep Learning", "NLP", "Computer Vision", "Time Series Forecasting", "Semi-Supervised Learning"],
            "data_analytics": ["Tableau", "Excel", "Statistical Analysis", "Causal Inference", "Data Preprocessing"],
            "web_dev": ["ReactJS", "HTML", "CSS", "API Integration", "Git", "ChatGPT", "SEO Optimization"],
            "big_data": ["Hadoop", "Spark", "AWS", "Cloud Computing"]
        }
        
        self.projects = [
            {
                "name": "Recipe Health Dashboard",
                "duration": "Jan 2024 - Present",
                "description": "Interactive dashboard using Plotly Dash for analyzing 1,000+ recipes",
                "technologies": ["Python", "Plotly Dash", "Flask", "Heroku"],
                "achievements": ["Analyzed nutrient distribution", "Explored calorie-health relationships"]
            },
            {
                "name": "Real Traffic Analysis",
                "duration": "Oct 2024 - Dec 2024",
                "description": "Real-time traffic monitoring and HTTP/HTTPS analysis on 10K+ requests",
                "technologies": ["Python", "HTTP/HTTPS protocols", "Dashboard development"],
                "achievements": ["Reduced latency by 15%", "Detected 5+ security vulnerabilities"]
            },
            {
                "name": "Loan Wise",
                "duration": "Aug 2024 - Oct 2024",
                "description": "Automated loan workflows using AI and recommendation systems",
                "technologies": ["AI", "Tableau", "UX Design"],
                "achievements": ["Improved user engagement by 25%", "Reduced form abandonment by 20%"]
            },
            {
                "name": "AI-Powered Real Estate Website",
                "duration": "Nov 2024 - Jan 2025",
                "description": "Dynamic ReactJS site enhanced by ChatGPT code generation",
                "technologies": ["ReactJS", "ChatGPT", "SEO", "Google Maps API"],
                "achievements": ["95% uptime reliability", "Boosted local traffic by 150%"]
            }
        ]

    def generate_personal_questions(self):
        questions = []
        
        # Basic personal questions
        basic_templates = [
            "What is your full name?",
            "Where are you currently located?",
            "What's your contact information?",
            "How can someone reach you?",
            "What's your current academic status?",
            "When will you graduate?",
            "Are you eligible for OPT?",
            "What's your professional background?",
            "Tell me about yourself",
            "What's your LinkedIn profile?"
        ]
        
        # Variations for each template
        variations = [
            "Can you tell me", "What is", "Please share", "I'd like to know", 
            "Could you provide", "What's", "Tell me about", "Explain"
        ]
        
        for template in basic_templates:
            for variation in variations:
                questions.append(f"{variation} {template.lower()}")
        
        return questions

    def generate_education_questions(self):
        questions = []
        
        for edu in self.education:
            # Institution-specific questions
            institution_questions = [
                f"What did you study at {edu['institution']}?",
                f"When did you attend {edu['institution']}?",
                f"What was your GPA at {edu['institution']}?",
                f"Tell me about your experience at {edu['institution']}",
                f"What degree did you pursue at {edu['institution']}?",
                f"What courses did you take at {edu['institution']}?",
                f"How long did you study at {edu['institution']}?",
                f"Where is {edu['institution']} located?",
                f"What was your major at {edu['institution']}?",
                f"Describe your academic performance at {edu['institution']}"
            ]
            questions.extend(institution_questions)
            
            # Course-specific questions
            for course in edu['courses']:
                course_questions = [
                    f"What did you learn in {course}?",
                    f"Tell me about your {course} course",
                    f"How did {course} help in your career?",
                    f"What projects did you do in {course}?",
                    f"What was challenging about {course}?",
                    f"How does {course} relate to your current work?",
                    f"What skills did you gain from {course}?",
                    f"Describe your experience with {course}",
                    f"What was your favorite aspect of {course}?",
                    f"How has {course} prepared you for industry?"
                ]
                questions.extend(course_questions)
        
        return questions

    def generate_experience_questions(self):
        questions = []
        
        for exp in self.experience:
            # Company-specific questions
            company_questions = [
                f"What did you do at {exp['company']}?",
                f"Tell me about your role at {exp['company']}",
                f"What was your position at {exp['company']}?",
                f"How long did you work at {exp['company']}?",
                f"What were your responsibilities at {exp['company']}?",
                f"Describe your experience at {exp['company']}",
                f"What did you achieve at {exp['company']}?",
                f"What technologies did you use at {exp['company']}?",
                f"What challenges did you face at {exp['company']}?",
                f"How did you contribute to {exp['company']}?"
            ]
            questions.extend(company_questions)
            
            # Achievement-specific questions
            for achievement in exp['achievements']:
                achievement_questions = [
                    f"Tell me about: {achievement}",
                    f"How did you accomplish: {achievement}",
                    f"What was the impact of: {achievement}",
                    f"Explain the process behind: {achievement}",
                    f"What challenges did you overcome for: {achievement}",
                    f"What technologies were used for: {achievement}",
                    f"How did you measure: {achievement}",
                    f"What was the business value of: {achievement}",
                    f"How long did it take to achieve: {achievement}",
                    f"What was your approach for: {achievement}"
                ]
                questions.extend(achievement_questions)
        
        return questions

    def generate_skills_questions(self):
        questions = []
        
        for category, skills_list in self.skills.items():
            # Category questions
            category_questions = [
                f"What are your {category.replace('_', ' ')} skills?",
                f"Tell me about your expertise in {category.replace('_', ' ')}",
                f"How proficient are you in {category.replace('_', ' ')}?",
                f"What's your experience with {category.replace('_', ' ')}?",
                f"Rate your {category.replace('_', ' ')} skills",
                f"Which {category.replace('_', ' ')} tools do you use?",
                f"How did you learn {category.replace('_', ' ')}?",
                f"What projects have you used {category.replace('_', ' ')} for?",
                f"What's your favorite {category.replace('_', ' ')} tool?",
                f"How do you stay updated with {category.replace('_', ' ')}?"
            ]
            questions.extend(category_questions)
            
            # Individual skill questions
            for skill in skills_list:
                skill_questions = [
                    f"What's your experience with {skill}?",
                    f"How long have you been using {skill}?",
                    f"What projects have you used {skill} for?",
                    f"Rate your proficiency in {skill}",
                    f"What do you like about {skill}?",
                    f"What challenges have you faced with {skill}?",
                    f"How did you learn {skill}?",
                    f"What's your favorite feature of {skill}?",
                    f"How does {skill} compare to alternatives?",
                    f"What would you build with {skill}?"
                ]
                questions.extend(skill_questions)
        
        return questions

    def generate_project_questions(self):
        questions = []
        
        for project in self.projects:
            # Project overview questions
            project_questions = [
                f"Tell me about the {project['name']} project",
                f"What was the goal of {project['name']}?",
                f"How long did {project['name']} take to complete?",
                f"What technologies did you use for {project['name']}?",
                f"What was challenging about {project['name']}?",
                f"What did you learn from {project['name']}?",
                f"How did you approach {project['name']}?",
                f"What was the impact of {project['name']}?",
                f"Who was the target audience for {project['name']}?",
                f"What would you do differently in {project['name']}?"
            ]
            questions.extend(project_questions)
            
            # Technology-specific questions for each project
            for tech in project['technologies']:
                tech_project_questions = [
                    f"How did you use {tech} in {project['name']}?",
                    f"Why did you choose {tech} for {project['name']}?",
                    f"What challenges did you face with {tech} in {project['name']}?",
                    f"How did {tech} contribute to {project['name']}'s success?",
                    f"What alternatives to {tech} did you consider for {project['name']}?"
                ]
                questions.extend(tech_project_questions)
            
            # Achievement-specific questions
            for achievement in project['achievements']:
                achievement_questions = [
                    f"How did you achieve '{achievement}' in {project['name']}?",
                    f"What was the process behind '{achievement}'?",
                    f"What metrics support '{achievement}'?",
                    f"What challenges did you overcome to achieve '{achievement}'?",
                    f"How did you measure '{achievement}'?"
                ]
                questions.extend(achievement_questions)
        
        return questions

    def generate_technical_deep_dive_questions(self):
        questions = [
            # Machine Learning Questions
            "Explain the difference between supervised and unsupervised learning",
            "What is overfitting and how do you prevent it?",
            "Describe the bias-variance tradeoff",
            "What are the assumptions of linear regression?",
            "How do you handle missing data in datasets?",
            "Explain cross-validation and its types",
            "What is feature engineering and why is it important?",
            "Describe different types of neural network architectures",
            "What is transfer learning and when would you use it?",
            "Explain the concept of regularization in machine learning",
            
            # Deep Learning Questions
            "What is backpropagation and how does it work?",
            "Explain the vanishing gradient problem",
            "What are the differences between CNN and RNN?",
            "Describe attention mechanisms in neural networks",
            "What is batch normalization and why is it useful?",
            "Explain dropout and its purpose",
            "What are GANs and how do they work?",
            "Describe different activation functions",
            "What is the transformer architecture?",
            "Explain the concept of embedding layers",
            
            # NLP Questions
            "What is tokenization in NLP?",
            "Explain TF-IDF and its applications",
            "What are word embeddings?",
            "Describe the BERT model architecture",
            "What is named entity recognition?",
            "Explain sentiment analysis techniques",
            "What is text classification?",
            "Describe sequence-to-sequence models",
            "What is topic modeling?",
            "Explain the concept of language models",
            
            # Data Science Questions
            "How do you handle imbalanced datasets?",
            "What is A/B testing and how do you design one?",
            "Explain statistical significance and p-values",
            "What is correlation vs causation?",
            "Describe different sampling techniques",
            "What is data preprocessing?",
            "Explain exploratory data analysis",
            "What are outliers and how do you handle them?",
            "Describe different data visualization techniques",
            "What is feature selection and its methods?",
            
            # Programming Questions
            "Explain object-oriented programming concepts",
            "What are Python decorators?",
            "Describe Git workflow and version control",
            "What is API design and RESTful services?",
            "Explain database normalization",
            "What are SQL joins and their types?",
            "Describe web development frameworks",
            "What is cloud computing and its benefits?",
            "Explain containerization with Docker",
            "What is CI/CD pipeline?"
        ]
        
        # Generate variations for each technical question
        technical_variations = []
        question_starters = [
            "Can you explain", "What is your understanding of", "Describe", 
            "How would you implement", "What's the difference between", 
            "When would you use", "What are the advantages of", "How do you handle"
        ]
        
        for question in questions:
            for starter in question_starters:
                technical_variations.append(f"{starter} {question.lower()}?")
        
        return questions + technical_variations

    def generate_behavioral_questions(self):
        return [
            "Tell me about a challenging project you worked on",
            "How do you handle tight deadlines?",
            "Describe a time when you had to learn a new technology quickly",
            "How do you approach problem-solving?",
            "Tell me about a time you failed and what you learned",
            "How do you stay updated with latest technologies?",
            "Describe your ideal work environment",
            "How do you handle constructive criticism?",
            "Tell me about a time you worked in a team",
            "What motivates you in your work?",
            "How do you prioritize multiple tasks?",
            "Describe a time you had to explain technical concepts to non-technical people",
            "What's your approach to debugging code?",
            "How do you ensure code quality?",
            "Tell me about a time you improved a process",
            "How do you handle ambiguous requirements?",
            "Describe your leadership style",
            "What's your approach to continuous learning?",
            "How do you handle stress and pressure?",
            "Tell me about a time you mentored someone"
        ]

    def generate_scenario_based_questions(self):
        return [
            "How would you design a recommendation system for an e-commerce platform?",
            "Explain how you would build a real-time fraud detection system",
            "How would you approach building a chatbot for customer service?",
            "Design a system to predict customer churn",
            "How would you build a sentiment analysis system for social media?",
            "Explain your approach to building a search engine",
            "How would you design a data pipeline for real-time analytics?",
            "Build a system to optimize supply chain logistics",
            "How would you create a personalized news recommendation system?",
            "Design a system for anomaly detection in network traffic",
            "How would you build a predictive maintenance system?",
            "Explain your approach to building a voice recognition system",
            "How would you design a system for automated document classification?",
            "Build a system to predict stock market trends",
            "How would you create a medical diagnosis support system?",
            "Design a system for real-time language translation",
            "How would you build a content moderation system?",
            "Explain your approach to building a traffic optimization system",
            "How would you design a system for predictive hiring?",
            "Build a system to optimize energy consumption in smart buildings"
        ]

    def generate_industry_questions(self):
        return [
            "What are the current trends in AI and machine learning?",
            "How is AI transforming different industries?",
            "What are the ethical considerations in AI development?",
            "How do you see the future of data science?",
            "What are the challenges in implementing AI in enterprises?",
            "How is automation affecting job markets?",
            "What role does data privacy play in AI development?",
            "How are cloud platforms changing data science workflows?",
            "What are the latest developments in natural language processing?",
            "How is computer vision being applied in real-world scenarios?",
            "What are the challenges in deploying ML models to production?",
            "How is edge computing affecting AI applications?",
            "What are the benefits and risks of generative AI?",
            "How is AI being used in healthcare and medicine?",
            "What are the environmental impacts of AI and big data?",
            "How is AI changing the finance and banking industry?",
            "What role does AI play in cybersecurity?",
            "How are regulatory frameworks adapting to AI development?",
            "What are the challenges in AI model interpretability?",
            "How is AI being integrated into mobile applications?"
        ]

    def generate_all_questions(self):
        all_questions = []
        
        print("Generating personal questions...")
        all_questions.extend(self.generate_personal_questions())
        
        print("Generating education questions...")
        all_questions.extend(self.generate_education_questions())
        
        print("Generating experience questions...")
        all_questions.extend(self.generate_experience_questions())
        
        print("Generating skills questions...")
        all_questions.extend(self.generate_skills_questions())
        
        print("Generating project questions...")
        all_questions.extend(self.generate_project_questions())
        
        print("Generating technical questions...")
        all_questions.extend(self.generate_technical_deep_dive_questions())
        
        print("Generating behavioral questions...")
        all_questions.extend(self.generate_behavioral_questions())
        
        print("Generating scenario questions...")
        all_questions.extend(self.generate_scenario_based_questions())
        
        print("Generating industry questions...")
        all_questions.extend(self.generate_industry_questions())
        
        # Remove duplicates and return
        unique_questions = list(set(all_questions))
        return unique_questions

    def save_questions_to_file(self, questions, filename="question_bank.json"):
        question_data = {
            "total_questions": len(questions),
            "categories": {
                "personal": [q for q in questions if any(word in q.lower() for word in ['name', 'contact', 'location', 'yourself'])],
                "education": [q for q in questions if any(word in q.lower() for word in ['university', 'degree', 'study', 'course', 'gpa'])],
                "experience": [q for q in questions if any(word in q.lower() for word in ['webdaddy', 'findem', 'work', 'role', 'company'])],
                "technical": [q for q in questions if any(word in q.lower() for word in ['machine learning', 'python', 'algorithm', 'model'])],
                "projects": [q for q in questions if any(word in q.lower() for word in ['project', 'build', 'develop', 'create'])],
                "behavioral": [q for q in questions if any(word in q.lower() for word in ['tell me about', 'describe', 'how do you handle'])],
                "industry": [q for q in questions if any(word in q.lower() for word in ['trend', 'future', 'industry', 'challenge'])]
            },
            "all_questions": questions
        }
        
        with open(filename, 'w') as f:
            json.dump(question_data, f, indent=2)
        
        print(f"Questions saved to {filename}")
        return question_data

# Usage
if __name__ == "__main__":
    generator = QuestionBankGenerator()
    questions = generator.generate_all_questions()
    
    print(f"Generated {len(questions)} unique questions")
    
    # Save to file
    question_data = generator.save_questions_to_file(questions)
    
    # Print sample questions from each category
    for category, category_questions in question_data["categories"].items():
        print(f"\n{category.upper()} QUESTIONS ({len(category_questions)} total):")
        for i, q in enumerate(category_questions[:5]):  # Show first 5 from each category
            print(f"{i+1}. {q}")
        if len(category_questions) > 5:
            print(f"... and {len(category_questions) - 5} more") 