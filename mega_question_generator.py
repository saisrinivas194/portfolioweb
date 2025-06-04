import random
import json
import itertools
from datetime import datetime

class MegaQuestionGenerator:
    def __init__(self):
        self.portfolio_data = {
            "personal": {
                "name": "Sai Srinivas",
                "names": ["Sai", "Srinivas", "Sai Srinivas"],
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
                    "short_name": "NJIT",
                    "degree": "Masters of Science (Data Science)",
                    "duration": "January 2024 - May 2025",
                    "location": "Newark, NJ, USA",
                    "gpa": "3.381/4",
                    "courses": ["Machine Learning", "Deep Learning", "Big Data Analytics", 
                              "Data Visualization", "Statistical Analysis", "AI & Prompt Engineering", "Frontend using AI"]
                },
                {
                    "institution": "SCSVMV University",
                    "short_name": "SCSVMV",
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
                "programming": ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "Scala", "SQL"],
                "ai_ml": ["Deep Learning", "NLP", "Computer Vision", "Time Series Forecasting", "Machine Learning"],
                "data_analytics": ["Tableau", "Excel", "Statistical Analysis", "Data Science"],
                "web_dev": ["ReactJS", "HTML", "CSS", "JavaScript"],
                "tools": ["Git", "AWS", "Docker"]
            },
            "projects": ["Recipe Health Dashboard", "Real Traffic Analysis", "Loan Wise", "AI-Powered Real Estate Website"]
        }
        
        # Misspelling variations
        self.common_misspellings = {
            "achieved": ["achived", "acheived", "achievd", "achevied"],
            "experience": ["experiance", "expirience", "experence", "experiense"],
            "machine": ["machien", "machin", "mashine", "mechine"],
            "learning": ["learing", "lerning", "learnign", "learining"],
            "programming": ["programing", "progrmming", "programimg", "programmng"],
            "education": ["edcuation", "educaton", "eductaion", "educaiton"],
            "university": ["univercity", "universty", "univeristy", "unversity"],
            "technology": ["tecnology", "techonology", "tecnologie", "techology"],
            "development": ["developement", "devlopment", "developmnt", "develoment"],
            "project": ["porject", "proect", "projct", "projet"],
            "python": ["pyhton", "pythong", "phyton", "pytho"],
            "skills": ["skils", "skiils", "skillz", "skilles"],
            "data": ["dta", "dat", "dtaa", "daat"],
            "science": ["scince", "sience", "sicence", "scence"],
            "analysis": ["anaylsis", "anlaysis", "analsis", "analyis"],
            "knowledge": ["knowlege", "knowledg", "knowedge", "kowledge"],
            "portfolio": ["porfolio", "portolio", "portfolo", "protfolio"],
            "certificate": ["certficate", "certifigate", "certificat", "certicate"],
            "professional": ["proffesional", "profesional", "professionl", "proffessional"]
        }
        
        # Grammar variations (incorrect grammar patterns)
        self.grammar_patterns = {
            "did_has": ["did {name} has", "does {name} have", "do {name} has", "did {name} have"],
            "is_are": ["is {name}", "are {name}", "was {name}", "were {name}"],
            "do_does": ["do {name}", "does {name}", "did {name}", "will {name}"],
            "tense_mix": ["did {name} achieved", "has {name} achieve", "is {name} achieved", "are {name} working"]
        }
        
        # Question starters with variations
        self.question_starters = {
            "what": ["what", "wat", "wht", "whta", "waht"],
            "how": ["how", "hwo", "hw", "hoe", "hoow"],
            "where": ["where", "wher", "whre", "were", "wheer"],
            "when": ["when", "wen", "whn", "whne", "wehn"],
            "why": ["why", "wy", "whi", "wyh", "whyy"],
            "who": ["who", "wo", "woh", "whoo", "hw"],
            "which": ["which", "wich", "whch", "whcih", "whihc"],
            "did": ["did", "dd", "didd", "di", "ddi"],
            "does": ["does", "dos", "dose", "deos", "doess"],
            "is": ["is", "iz", "iss", "si", "iis"],
            "has": ["has", "haz", "hass", "hs", "ahd"],
            "can": ["can", "cn", "cann", "anc", "acn"],
            "tell": ["tell", "tel", "teel", "tlel", "teell"],
            "explain": ["explain", "explan", "explian", "expain", "expalin"]
        }
        
        # Action words with misspellings
        self.action_words = {
            "achieved": self.common_misspellings["achieved"],
            "accomplished": ["acomplished", "accomplised", "acomplishe", "accomplihsed"],
            "completed": ["complted", "compelted", "compleed", "compleated"],
            "developed": ["developd", "develped", "dveloped", "developeed"],
            "built": ["bult", "bulit", "biult", "buillt"],
            "created": ["crated", "creeted", "creted", "createed"],
            "improved": ["improvd", "imporved", "improoved", "improveed"],
            "optimized": ["optimised", "optimzed", "optmized", "optimizeed"],
            "worked": ["workd", "worke", "workeed", "wokred"],
            "learned": ["learnd", "leared", "learneed", "lerned"],
            "studied": ["studyed", "studid", "studed", "studieed"]
        }

    def add_misspellings(self, text):
        """Add random misspellings to text"""
        words = text.split()
        result = []
        
        for word in words:
            word_lower = word.lower().strip('?.,!;:')
            if word_lower in self.common_misspellings and random.random() < 0.3:
                misspelled = random.choice(self.common_misspellings[word_lower])
                # Preserve original case
                if word[0].isupper():
                    misspelled = misspelled.capitalize()
                result.append(misspelled)
            else:
                result.append(word)
        
        return ' '.join(result)

    def create_grammar_variations(self, base_question, name="Sai"):
        """Create grammatically incorrect variations"""
        variations = []
        
        # Pattern: "Did [name] has [skill]?"
        if "experience" in base_question.lower():
            variations.extend([
                f"did {name} has {base_question.split()[-1]}?",
                f"does {name} have {base_question.split()[-1]}?",
                f"do {name} has {base_question.split()[-1]}?",
                f"is {name} have {base_question.split()[-1]}?"
            ])
        
        # Pattern: "Is [name] achieved anything?"
        if "achieve" in base_question.lower():
            variations.extend([
                f"is {name} achieved anything?",
                f"are {name} achieved something?",
                f"did {name} achieved anything?",
                f"has {name} achieve anything?"
            ])
        
        return variations

    def generate_achievement_questions(self):
        """Generate questions about achievements with variations and misspellings"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        # Achievement templates
        achievement_templates = [
            "did {name} achieved anything",
            "what {name} achieved",
            "has {name} accomplished something", 
            "what are {name} achievements",
            "did {name} won any awards",
            "what {name} accomplished in career",
            "is {name} successful",
            "what {name} done in life",
            "did {name} completed any projects",
            "what {name} built",
            "has {name} created anything",
            "what {name} developed",
            "did {name} improved anything",
            "what skills {name} have",
            "is {name} good at programming"
        ]
        
        for name in names:
            for template in achievement_templates:
                # Base question
                base_q = template.format(name=name)
                questions.add(base_q + "?")
                
                # Add misspellings
                questions.add(self.add_misspellings(base_q) + "?")
                
                # Grammar variations
                questions.update(self.create_grammar_variations(base_q, name))
                
                # Question starter variations
                for starter_type, starters in self.question_starters.items():
                    if starter_type in base_q.lower():
                        for starter in starters:
                            modified = base_q.replace(starter_type, starter)
                            questions.add(modified + "?")
                            questions.add(self.add_misspellings(modified) + "?")
        
        return list(questions)

    def generate_experience_questions(self):
        """Generate ML experience questions with variations"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        experience_templates = [
            "did {name} has machine learning experience",
            "does {name} know machine learning", 
            "is {name} experienced in ML",
            "what {name} experience in AI",
            "did {name} worked with python",
            "has {name} used tensorflow",
            "does {name} have data science experience",
            "is {name} good at programming",
            "what programming languages {name} know",
            "did {name} worked at companies",
            "where {name} worked",
            "what technologies {name} used",
            "how long {name} working in tech",
            "is {name} experienced developer"
        ]
        
        for name in names:
            for template in experience_templates:
                base_q = template.format(name=name)
                questions.add(base_q + "?")
                questions.add(self.add_misspellings(base_q) + "?")
                
                # Create grammar errors
                grammar_errors = [
                    base_q.replace("does", "do"),
                    base_q.replace("has", "have"),
                    base_q.replace("is", "are"),
                    base_q.replace("did", "does"),
                    base_q.replace("worked", "working"),
                    base_q.replace("used", "using")
                ]
                
                for error in grammar_errors:
                    questions.add(error + "?")
                    questions.add(self.add_misspellings(error) + "?")
        
        return list(questions)

    def generate_random_questions(self):
        """Generate random variations and combinations"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        # Random question patterns
        random_patterns = [
            "{starter} about {name}",
            "{starter} {name} portfolio",
            "{starter} {name} background", 
            "{starter} {name} skills",
            "{starter} {name} projects",
            "{starter} {name} education",
            "{starter} {name} work",
            "{starter} {name} experience",
            "about {name}",
            "info on {name}",
            "details about {name}",
            "{name} resume",
            "{name} cv",
            "{name} profile",
            "who is {name}",
            "what about {name}",
            "anything about {name}"
        ]
        
        # Generate combinations
        for name in names:
            for pattern in random_patterns:
                for starter_type, starters in self.question_starters.items():
                    for starter in starters:
                        if "{starter}" in pattern:
                            q = pattern.format(starter=starter, name=name)
                        else:
                            q = starter + " " + pattern.format(name=name)
                        
                        questions.add(q + "?")
                        questions.add(self.add_misspellings(q) + "?")
                        
                        # Add casual variations
                        casual_variations = [
                            q.replace("?", ""),
                            q.lower(),
                            q.upper(),
                            q.replace(" ", "  "),  # Double spaces
                            q.replace("about", "bout"),
                            q.replace("what", "wat"),
                            q.replace("where", "wher")
                        ]
                        
                        questions.update([v + "?" for v in casual_variations])
        
        return list(questions)

    def generate_skill_questions(self):
        """Generate questions about specific skills"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        for category, skills in self.portfolio_data["skills"].items():
            for skill in skills:
                for name in names:
                    skill_questions = [
                        f"does {name} know {skill}",
                        f"is {name} good at {skill}",
                        f"did {name} used {skill}",
                        f"has {name} experience with {skill}",
                        f"what {name} experience in {skill}",
                        f"how long {name} using {skill}",
                        f"is {name} expert in {skill}",
                        f"did {name} worked with {skill}",
                        f"can {name} use {skill}",
                        f"what about {name} {skill} skills"
                    ]
                    
                    for q in skill_questions:
                        questions.add(q + "?")
                        questions.add(self.add_misspellings(q) + "?")
                        
                        # Grammar errors
                        errors = [
                            q.replace("does", "do"),
                            q.replace("is", "are"),
                            q.replace("has", "have"),
                            q.replace("did", "does")
                        ]
                        
                        for error in errors:
                            questions.add(error + "?")
                            questions.add(self.add_misspellings(error) + "?")
        
        return list(questions)

    def generate_project_questions(self):
        """Generate questions about projects"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        for project in self.portfolio_data["projects"]:
            for name in names:
                project_questions = [
                    f"did {name} worked on {project}",
                    f"what is {project} by {name}",
                    f"tell about {name} {project}",
                    f"has {name} built {project}",
                    f"is {name} created {project}",
                    f"what about {name} {project} project",
                    f"did {name} completed {project}",
                    f"how {name} made {project}",
                    f"when {name} built {project}",
                    f"why {name} created {project}"
                ]
                
                for q in project_questions:
                    questions.add(q + "?")
                    questions.add(self.add_misspellings(q) + "?")
        
        return list(questions)

    def generate_education_questions(self):
        """Generate education-related questions"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        for edu in self.portfolio_data["education"]:
            institution = edu["institution"]
            short_name = edu["short_name"]
            
            for name in names:
                for inst in [institution, short_name]:
                    edu_questions = [
                        f"did {name} studied at {inst}",
                        f"is {name} from {inst}",
                        f"what {name} studied at {inst}",
                        f"when {name} graduated from {inst}",
                        f"has {name} degree from {inst}",
                        f"is {name} student at {inst}",
                        f"did {name} completed {inst}",
                        f"what {name} gpa at {inst}",
                        f"how long {name} studied at {inst}",
                        f"what {name} learned at {inst}"
                    ]
                    
                    for q in edu_questions:
                        questions.add(q + "?")
                        questions.add(self.add_misspellings(q) + "?")
        
        return list(questions)

    def generate_company_questions(self):
        """Generate work experience questions"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        for exp in self.portfolio_data["experience"]:
            company = exp["company"]
            
            for name in names:
                company_questions = [
                    f"did {name} worked at {company}",
                    f"is {name} employee at {company}",
                    f"what {name} did at {company}",
                    f"when {name} joined {company}",
                    f"has {name} experience at {company}",
                    f"how long {name} worked at {company}",
                    f"what {name} role at {company}",
                    f"is {name} working at {company}",
                    f"did {name} completed internship at {company}",
                    f"what {name} achieved at {company}"
                ]
                
                for q in company_questions:
                    questions.add(q + "?")
                    questions.add(self.add_misspellings(q) + "?")
        
        return list(questions)

    def generate_casual_questions(self):
        """Generate very casual/informal questions"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        casual_templates = [
            "yo {name}",
            "hey {name}",
            "sup {name}",
            "hi {name}",
            "about {name}",
            "{name} info",
            "{name} details",
            "who {name}",
            "{name}?",
            "what up {name}",
            "tell bout {name}",
            "info bout {name}",
            "{name} background",
            "anything bout {name}",
            "wat bout {name}",
            "whos {name}",
            "y {name}",
            "abt {name}",
            "{name} stuffs",
            "{name} things"
        ]
        
        for name in names:
            for template in casual_templates:
                questions.add(template.format(name=name) + "?")
        
        return list(questions)

    def generate_all_mega_questions(self):
        """Generate massive question bank"""
        all_questions = set()
        
        print("Generating achievement questions...")
        all_questions.update(self.generate_achievement_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating experience questions...")
        all_questions.update(self.generate_experience_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating random questions...")
        all_questions.update(self.generate_random_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating skill questions...")
        all_questions.update(self.generate_skill_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating project questions...")
        all_questions.update(self.generate_project_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating education questions...")
        all_questions.update(self.generate_education_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating company questions...")
        all_questions.update(self.generate_company_questions())
        print(f"Current total: {len(all_questions)}")
        
        print("Generating casual questions...")
        all_questions.update(self.generate_casual_questions())
        print(f"Current total: {len(all_questions)}")
        
        # Generate more combinations and permutations
        print("Generating additional combinations...")
        additional_questions = self.generate_additional_combinations(list(all_questions))
        all_questions.update(additional_questions)
        print(f"Final total: {len(all_questions)}")
        
        return list(all_questions)

    def generate_additional_combinations(self, existing_questions):
        """Generate additional question combinations to reach 500k+"""
        additional = set()
        
        # Take existing questions and create more variations
        for question in existing_questions[:10000]:  # Limit to avoid memory issues
            # Case variations
            additional.add(question.upper())
            additional.add(question.lower())
            additional.add(question.capitalize())
            
            # Punctuation variations
            additional.add(question.replace("?", ""))
            additional.add(question.replace("?", "??"))
            additional.add(question.replace("?", "???"))
            
            # Spacing variations
            additional.add(question.replace(" ", "  "))
            additional.add(question.replace(" ", " "))
            
            # Word order variations (simple)
            words = question.replace("?", "").split()
            if len(words) >= 3:
                # Swap first two words
                swapped = [words[1], words[0]] + words[2:]
                additional.add(" ".join(swapped) + "?")
        
        return additional

    def save_mega_questions(self, questions, filename="mega_question_bank.json"):
        """Save the mega question bank"""
        question_data = {
            "metadata": {
                "total_questions": len(questions),
                "generation_date": datetime.now().isoformat(),
                "target": "500,000+ questions with misspellings and grammar variations"
            },
            "sample_questions": questions[:100],  # First 100 as samples
            "total_count": len(questions)
        }
        
        # Save full questions to separate file for size management
        with open("full_" + filename, 'w', encoding='utf-8') as f:
            json.dump({"all_questions": questions}, f, indent=2, ensure_ascii=False)
        
        # Save metadata and samples
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(question_data, f, indent=2, ensure_ascii=False)
        
        print(f"\nMega question bank saved!")
        print(f"Metadata and samples: {filename}")
        print(f"Full questions: full_{filename}")
        print(f"Total questions generated: {len(questions):,}")
        
        return question_data

# Usage
if __name__ == "__main__":
    generator = MegaQuestionGenerator()
    questions = generator.generate_all_mega_questions()
    
    print(f"\n{'='*60}")
    print(f"MEGA QUESTION BANK GENERATED")
    print(f"{'='*60}")
    
    # Save the mega question bank
    question_data = generator.save_mega_questions(questions)
    
    # Display samples
    print(f"\nSample questions:")
    for i, q in enumerate(questions[:20], 1):
        print(f"  {i}. {q}")
    
    print(f"\n... and {len(questions) - 20:,} more questions!")
    print(f"\nIncludes:")
    print(f"- Misspelled words and typos")
    print(f"- Grammar variations and errors") 
    print(f"- Casual and informal questions")
    print(f"- Achievement-focused questions")
    print(f"- Experience and skill questions")
    print(f"- Random combinations and variations") 