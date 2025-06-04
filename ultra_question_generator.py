import random
import json
import itertools
from datetime import datetime

class UltraQuestionGenerator:
    def __init__(self):
        self.portfolio_data = {
            "personal": {
                "names": ["Sai", "Srinivas", "Sai Srinivas", "sai", "srinivas", "SAI", "SRINIVAS"],
                "current_status": "Graduate student in Data Science (May 2025)",
                "location": "Newark, NJ, USA",
                "phone": "+1 (201) 705-9891",
                "email": "pedhapollasaisrinivas@gmail.com"
            },
            "education": [
                {
                    "institution": "New Jersey Institute of Technology (NJIT)",
                    "variations": ["NJIT", "njit", "New Jersey Institute", "New Jersey Tech", "NJ Institute"],
                    "degree": "Masters of Science (Data Science)",
                    "courses": ["Machine Learning", "Deep Learning", "Big Data Analytics", 
                              "Data Visualization", "Statistical Analysis", "AI & Prompt Engineering", "Frontend using AI"]
                },
                {
                    "institution": "SCSVMV University",
                    "variations": ["SCSVMV", "scsvmv", "SCSVMV Uni", "SCSVMV University"],
                    "degree": "B.E., Computer Science and Engineering",
                    "courses": ["Data Structures & Algorithms", "Object-Oriented Programming", 
                              "Database Management Systems", "Computer Networks", "Operating Systems", 
                              "Software Engineering", "Web Technologies", "Python Programming"]
                }
            ],
            "experience": [
                {"company": "Webdaddy", "variations": ["webdaddy", "WEBDADDY", "Web daddy", "web daddy"]},
                {"company": "Findem, Inc.", "variations": ["Findem", "findem", "FINDEM", "Findem Inc"]}
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
        
        # Massive misspelling dictionary
        self.misspellings = {
            "achieved": ["achived", "acheived", "achievd", "achevied", "acheeved", "achived", "acheved"],
            "experience": ["experiance", "expirience", "experence", "experiense", "experince", "expereince"],
            "machine": ["machien", "machin", "mashine", "mechine", "machne", "machinee"],
            "learning": ["learing", "lerning", "learnign", "learining", "lernig", "learng"],
            "programming": ["programing", "progrmming", "programimg", "programmng", "programmin", "progaming"],
            "education": ["edcuation", "educaton", "eductaion", "educaiton", "educaton", "educashun"],
            "university": ["univercity", "universty", "univeristy", "unversity", "univrsity", "universiti"],
            "technology": ["tecnology", "techonology", "tecnologie", "techology", "tecnolgy", "technolgy"],
            "development": ["developement", "devlopment", "developmnt", "develoment", "developmnet", "develpment"],
            "project": ["porject", "proect", "projct", "projet", "projecct", "projject"],
            "python": ["pyhton", "pythong", "phyton", "pytho", "pyton", "pythoon"],
            "skills": ["skils", "skiils", "skillz", "skilles", "skils", "skilss"],
            "data": ["dta", "dat", "dtaa", "daat", "dataa", "daata"],
            "science": ["scince", "sience", "sicence", "scence", "sciense", "scienec"],
            "analysis": ["anaylsis", "anlaysis", "analsis", "analyis", "analisys", "analysiss"],
            "knowledge": ["knowlege", "knowledg", "knowedge", "kowledge", "knowlegde", "knowledeg"],
            "portfolio": ["porfolio", "portolio", "portfolo", "protfolio", "portfollio", "portflio"],
            "certificate": ["certficate", "certifigate", "certificat", "certicate", "certificatte", "certifcate"],
            "professional": ["proffesional", "profesional", "professionl", "proffessional", "profesional", "professionall"],
            "artificial": ["artifical", "artficial", "artificail", "artifcial", "artificiall", "artifiical"],
            "intelligence": ["inteligence", "intellegence", "inteligense", "intelligense", "intellgence", "inteligance"],
            "algorithm": ["algoritm", "algorythm", "algorithem", "algorith", "algorithim", "algorithmm"],
            "database": ["databse", "datbase", "databas", "databaes", "databasse", "databaze"],
            "software": ["sofware", "softwar", "softwere", "softwaer", "softwarre", "softwear"],
            "computer": ["compter", "computr", "computor", "compuer", "computerr", "computeer"],
            "network": ["netwrk", "netowrk", "netwrok", "netowork", "networkk", "networrk"],
            "system": ["systm", "sytem", "systme", "sysetm", "systemm", "systeem"],
            "design": ["desing", "desgn", "desgin", "designn", "dezign", "deesign"],
            "research": ["reserch", "researh", "resarch", "reseach", "researchh", "researrch"],
            "optimization": ["optimizaton", "optimiztion", "optimizaion", "optimizatioon", "optimizashun", "optimizatoin"],
            "visualization": ["visualizaton", "visualiztion", "visualizaion", "visualizatioon", "visualizashun", "visualizatoin"],
            "classification": ["clasification", "classifcation", "classificaton", "classifiaction", "classificashun", "classifiation"],
            "regression": ["regresion", "regresson", "regresion", "regressionn", "regresssion", "regresion"],
            "deployment": ["deploment", "deployement", "deploymnt", "deploymentt", "deploymenet", "deploymeent"],
            "framework": ["framwork", "framewrk", "frameowrk", "frameworkk", "frameworrk", "frameework"],
            "application": ["aplicaton", "applicaton", "applicaion", "applicationn", "applicashun", "applicatoin"],
            "implementation": ["implementaton", "implementtion", "implementaion", "implementatioon", "implementashun", "implementatoin"]
        }
        
        # Grammar error patterns
        self.grammar_errors = {
            "subject_verb": [
                ("does", "do"), ("has", "have"), ("is", "are"), ("was", "were"),
                ("did", "does"), ("can", "could"), ("will", "would"), ("should", "shall")
            ],
            "tense_errors": [
                ("worked", "working"), ("used", "using"), ("built", "building"),
                ("created", "creating"), ("developed", "developing"), ("achieved", "achieving")
            ],
            "article_errors": [
                ("a", "an"), ("an", "a"), ("the", ""), ("", "the")
            ]
        }
        
        # Question starters with extensive variations
        self.question_starters = {
            "what": ["what", "wat", "wht", "whta", "waht", "wath", "whaat", "whatt", "wot", "whot"],
            "how": ["how", "hwo", "hw", "hoe", "hoow", "haw", "huw", "howw", "hou", "hov"],
            "where": ["where", "wher", "whre", "were", "wheer", "wher", "whare", "wheere", "wherre", "weare"],
            "when": ["when", "wen", "whn", "whne", "wehn", "whan", "wheen", "whenn", "ween", "wehen"],
            "why": ["why", "wy", "whi", "wyh", "whyy", "whai", "whhy", "whye", "wye", "whiy"],
            "who": ["who", "wo", "woh", "whoo", "hw", "whho", "whoe", "whou", "whow", "whuo"],
            "which": ["which", "wich", "whch", "whcih", "whihc", "whitch", "whichh", "wich", "whiich", "whicch"],
            "did": ["did", "dd", "didd", "di", "ddi", "deid", "diid", "didd", "deed", "dyd"],
            "does": ["does", "dos", "dose", "deos", "doess", "doas", "doees", "doess", "dows", "doze"],
            "is": ["is", "iz", "iss", "si", "iis", "iss", "ees", "ise", "iss", "iiz"],
            "has": ["has", "haz", "hass", "hs", "ahd", "haas", "hass", "hes", "haz", "hhas"],
            "can": ["can", "cn", "cann", "anc", "acn", "caan", "cann", "ken", "kan", "ccan"],
            "tell": ["tell", "tel", "teel", "tlel", "teell", "tall", "tell", "telle", "tel", "ttell"],
            "explain": ["explain", "explan", "explian", "expain", "expalin", "explaine", "explainn", "explian", "explane", "explaine"]
        }
        
        # Casual variations
        self.casual_words = {
            "about": ["bout", "abt", "abut", "abou", "aboutt", "aboot", "abowt"],
            "what": ["wat", "wot", "whut", "wut", "whaat", "whatt", "wht"],
            "your": ["ur", "you", "yor", "yur", "youre", "yoour", "yourr"],
            "you": ["u", "yu", "yoo", "youu", "yuu", "yo"],
            "and": ["nd", "an", "andd", "aand", "ann", "&"],
            "the": ["da", "de", "teh", "thee", "thhe", "tha"],
            "with": ["wit", "wth", "wif", "withh", "wiith", "witt"],
            "have": ["hav", "hve", "havee", "haave", "havv", "haf"],
            "know": ["no", "kno", "knw", "knoww", "kknow", "knoo"],
            "good": ["gud", "gd", "goood", "goodd", "goog", "guud"],
            "work": ["wrk", "wok", "workk", "worrk", "woork", "wurk"],
            "time": ["tym", "tme", "timee", "tiime", "timm", "tiem"],
            "some": ["sum", "som", "somee", "soome", "somm", "sume"],
            "like": ["lyk", "lik", "likee", "liike", "likk", "lyke"],
            "make": ["mak", "mke", "makee", "maake", "makk", "maek"],
            "take": ["tak", "tke", "takee", "taake", "takk", "taek"],
            "give": ["giv", "gve", "givee", "giive", "givv", "gief"],
            "come": ["cum", "com", "comee", "coome", "comm", "cume"],
            "think": ["thnk", "thik", "thinkk", "thiink", "thinnk", "thinck"],
            "want": ["wnt", "wan", "wantt", "waant", "wannt", "waent"]
        }

    def apply_misspellings(self, text, probability=0.4):
        """Apply misspellings to text with given probability"""
        words = text.split()
        result = []
        
        for word in words:
            clean_word = word.lower().strip('?.,!;:')
            if clean_word in self.misspellings and random.random() < probability:
                misspelled = random.choice(self.misspellings[clean_word])
                # Preserve case
                if word[0].isupper():
                    misspelled = misspelled.capitalize()
                result.append(misspelled)
            elif clean_word in self.casual_words and random.random() < probability:
                casual = random.choice(self.casual_words[clean_word])
                if word[0].isupper():
                    casual = casual.capitalize()
                result.append(casual)
            else:
                result.append(word)
        
        return ' '.join(result)

    def apply_grammar_errors(self, text):
        """Apply grammar errors to text"""
        for error_type, replacements in self.grammar_errors.items():
            for original, replacement in replacements:
                if random.random() < 0.3:
                    text = text.replace(original, replacement)
        return text

    def generate_massive_combinations(self):
        """Generate massive combinations of questions"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        # Base question templates
        templates = [
            "{starter} {name} {action} {object}",
            "{starter} {name} {verb} {skill}",
            "{starter} {name} {preposition} {institution}",
            "{starter} {name} {adjective}",
            "{name} {verb} {object}",
            "{action} {name} {verb}",
            "{name} {skill} {adjective}",
            "{verb} {name} {action} {object}",
            "{name} {preposition} {institution} {verb}",
            "{starter} {adjective} {name} {verb} {skill}"
        ]
        
        # Word lists
        actions = ["achieved", "accomplished", "completed", "built", "created", "developed", "worked", "studied", "learned", "improved"]
        verbs = ["is", "has", "did", "does", "can", "will", "was", "were", "have", "had"]
        objects = ["projects", "skills", "experience", "knowledge", "portfolio", "work", "achievements", "goals", "success", "results"]
        prepositions = ["at", "in", "with", "for", "on", "from", "to", "by", "about", "through"]
        adjectives = ["good", "experienced", "skilled", "expert", "professional", "talented", "successful", "knowledgeable", "capable", "qualified"]
        
        # Generate combinations
        for name in names:
            for template in templates:
                for starter_type, starters in self.question_starters.items():
                    for starter in starters:
                        for action in actions:
                            for verb in verbs:
                                for obj in objects:
                                    for prep in prepositions:
                                        for adj in adjectives:
                                            try:
                                                question = template.format(
                                                    starter=starter, name=name, action=action,
                                                    verb=verb, object=obj, preposition=prep,
                                                    adjective=adj, skill=random.choice(sum(self.portfolio_data["skills"].values(), []))
                                                )
                                                
                                                # Add base question
                                                questions.add(question + "?")
                                                
                                                # Add misspelled version
                                                questions.add(self.apply_misspellings(question) + "?")
                                                
                                                # Add grammar error version
                                                questions.add(self.apply_grammar_errors(question) + "?")
                                                
                                                # Add combined errors
                                                combined = self.apply_grammar_errors(self.apply_misspellings(question))
                                                questions.add(combined + "?")
                                                
                                                # Case variations
                                                questions.add(question.upper() + "?")
                                                questions.add(question.lower() + "?")
                                                
                                                # Punctuation variations
                                                questions.add(question + "??")
                                                questions.add(question + "???")
                                                questions.add(question)  # No question mark
                                                
                                                # Spacing variations
                                                questions.add(question.replace(" ", "  ") + "?")
                                                questions.add(question.replace(" ", " ") + "?")
                                                
                                            except (KeyError, IndexError):
                                                continue
        
        return list(questions)

    def generate_skill_combinations(self):
        """Generate questions for every skill combination"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        all_skills = []
        for category, skills in self.portfolio_data["skills"].items():
            all_skills.extend(skills)
        
        skill_templates = [
            "{starter} {name} {verb} {skill}",
            "{starter} {name} {adjective} at {skill}",
            "{starter} {name} {action} with {skill}",
            "{name} {skill} {adjective}",
            "{verb} {name} {action} {skill}",
            "{name} {preposition} {skill} {verb}",
            "{starter} {skill} {name} {verb}",
            "{adjective} {name} {skill} {action}",
            "{name} {verb} {skill} {adverb}",
            "{starter} {name} {skill} {object}"
        ]
        
        verbs = ["know", "use", "learn", "master", "understand", "apply", "implement", "work", "study", "practice"]
        adjectives = ["good", "expert", "skilled", "experienced", "proficient", "advanced", "beginner", "intermediate", "professional", "talented"]
        actions = ["working", "coding", "programming", "developing", "building", "creating", "using", "learning", "studying", "practicing"]
        prepositions = ["with", "in", "for", "on", "at", "through", "by", "using", "via", "about"]
        adverbs = ["well", "professionally", "effectively", "efficiently", "successfully", "expertly", "skillfully", "competently", "thoroughly", "extensively"]
        objects = ["projects", "applications", "systems", "tools", "frameworks", "libraries", "platforms", "solutions", "programs", "software"]
        
        for name in names:
            for skill in all_skills:
                for template in skill_templates:
                    for starter_type, starters in self.question_starters.items():
                        for starter in starters[:3]:  # Limit to avoid explosion
                            for verb in verbs[:5]:
                                for adj in adjectives[:5]:
                                    for action in actions[:5]:
                                        for prep in prepositions[:3]:
                                            for adverb in adverbs[:3]:
                                                for obj in objects[:3]:
                                                    try:
                                                        question = template.format(
                                                            starter=starter, name=name, skill=skill,
                                                            verb=verb, adjective=adj, action=action,
                                                            preposition=prep, adverb=adverb, object=obj
                                                        )
                                                        
                                                        # Add variations
                                                        questions.add(question + "?")
                                                        questions.add(self.apply_misspellings(question) + "?")
                                                        questions.add(self.apply_grammar_errors(question) + "?")
                                                        questions.add(question.lower() + "?")
                                                        questions.add(question.upper() + "?")
                                                        
                                                    except (KeyError, IndexError):
                                                        continue
        
        return list(questions)

    def generate_education_combinations(self):
        """Generate education-related question combinations"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        for edu in self.portfolio_data["education"]:
            institutions = [edu["institution"]] + edu["variations"]
            courses = edu["courses"]
            
            edu_templates = [
                "{starter} {name} {verb} at {institution}",
                "{starter} {name} {action} {course}",
                "{name} {institution} {adjective}",
                "{verb} {name} {action} at {institution}",
                "{starter} {course} {name} {verb}",
                "{name} {preposition} {institution} {verb} {course}",
                "{adjective} {name} {institution} {action}",
                "{starter} {name} {institution} {course} {verb}",
                "{name} {verb} {course} at {institution}",
                "{institution} {name} {adjective} {course}"
            ]
            
            verbs = ["studied", "learned", "graduated", "attended", "completed", "finished", "enrolled", "joined", "started", "pursued"]
            actions = ["studying", "learning", "taking", "completing", "pursuing", "attending", "enrolling", "finishing", "mastering", "understanding"]
            adjectives = ["good", "excellent", "outstanding", "successful", "dedicated", "hardworking", "talented", "smart", "brilliant", "capable"]
            prepositions = ["at", "in", "from", "with", "during", "through", "via", "under", "within", "throughout"]
            
            for name in names:
                for institution in institutions:
                    for course in courses:
                        for template in edu_templates:
                            for starter_type, starters in self.question_starters.items():
                                for starter in starters[:3]:
                                    for verb in verbs[:5]:
                                        for action in actions[:5]:
                                            for adj in adjectives[:3]:
                                                for prep in prepositions[:3]:
                                                    try:
                                                        question = template.format(
                                                            starter=starter, name=name, institution=institution,
                                                            course=course, verb=verb, action=action,
                                                            adjective=adj, preposition=prep
                                                        )
                                                        
                                                        # Add variations
                                                        questions.add(question + "?")
                                                        questions.add(self.apply_misspellings(question) + "?")
                                                        questions.add(self.apply_grammar_errors(question) + "?")
                                                        questions.add(question.lower() + "?")
                                                        questions.add(question.upper() + "?")
                                                        
                                                    except (KeyError, IndexError):
                                                        continue
        
        return list(questions)

    def generate_experience_combinations(self):
        """Generate work experience question combinations"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        
        for exp in self.portfolio_data["experience"]:
            companies = [exp["company"]] + exp["variations"]
            
            exp_templates = [
                "{starter} {name} {verb} at {company}",
                "{starter} {name} {action} {company}",
                "{name} {company} {adjective}",
                "{verb} {name} {action} at {company}",
                "{starter} {company} {name} {verb}",
                "{name} {preposition} {company} {verb}",
                "{adjective} {name} {company} {action}",
                "{starter} {name} {company} {object} {verb}",
                "{name} {verb} {object} at {company}",
                "{company} {name} {adjective} {action}"
            ]
            
            verbs = ["worked", "joined", "started", "completed", "achieved", "contributed", "developed", "built", "created", "improved"]
            actions = ["working", "contributing", "developing", "building", "creating", "improving", "achieving", "completing", "leading", "managing"]
            adjectives = ["successful", "productive", "effective", "efficient", "dedicated", "hardworking", "talented", "skilled", "experienced", "professional"]
            prepositions = ["at", "with", "for", "in", "during", "through", "under", "within", "throughout", "via"]
            objects = ["projects", "tasks", "goals", "objectives", "results", "achievements", "solutions", "systems", "applications", "tools"]
            
            for name in names:
                for company in companies:
                    for template in exp_templates:
                        for starter_type, starters in self.question_starters.items():
                            for starter in starters[:3]:
                                for verb in verbs[:5]:
                                    for action in actions[:5]:
                                        for adj in adjectives[:3]:
                                            for prep in prepositions[:3]:
                                                for obj in objects[:3]:
                                                    try:
                                                        question = template.format(
                                                            starter=starter, name=name, company=company,
                                                            verb=verb, action=action, adjective=adj,
                                                            preposition=prep, object=obj
                                                        )
                                                        
                                                        # Add variations
                                                        questions.add(question + "?")
                                                        questions.add(self.apply_misspellings(question) + "?")
                                                        questions.add(self.apply_grammar_errors(question) + "?")
                                                        questions.add(question.lower() + "?")
                                                        questions.add(question.upper() + "?")
                                                        
                                                    except (KeyError, IndexError):
                                                        continue
            
        return list(questions)

    def generate_project_combinations(self):
        """Generate project-related question combinations"""
        questions = set()
        names = self.portfolio_data["personal"]["names"]
        projects = self.portfolio_data["projects"]
        
        project_templates = [
            "{starter} {name} {verb} {project}",
            "{starter} {name} {action} on {project}",
            "{name} {project} {adjective}",
            "{verb} {name} {action} {project}",
            "{starter} {project} {name} {verb}",
            "{name} {preposition} {project} {verb}",
            "{adjective} {name} {project} {action}",
            "{starter} {name} {project} {object} {verb}",
            "{name} {verb} {object} in {project}",
            "{project} {name} {adjective} {action}"
        ]
        
        verbs = ["built", "created", "developed", "designed", "implemented", "completed", "worked", "made", "programmed", "coded"]
        actions = ["building", "creating", "developing", "designing", "implementing", "working", "making", "programming", "coding", "testing"]
        adjectives = ["successful", "innovative", "creative", "effective", "efficient", "advanced", "complex", "simple", "useful", "practical"]
        prepositions = ["on", "for", "with", "in", "during", "through", "using", "via", "within", "throughout"]
        objects = ["features", "components", "modules", "functions", "interfaces", "systems", "tools", "applications", "solutions", "algorithms"]
        
        for name in names:
            for project in projects:
                for template in project_templates:
                    for starter_type, starters in self.question_starters.items():
                        for starter in starters[:3]:
                            for verb in verbs[:5]:
                                for action in actions[:5]:
                                    for adj in adjectives[:3]:
                                        for prep in prepositions[:3]:
                                            for obj in objects[:3]:
                                                try:
                                                    question = template.format(
                                                        starter=starter, name=name, project=project,
                                                        verb=verb, action=action, adjective=adj,
                                                        preposition=prep, object=obj
                                                    )
                                                    
                                                    # Add variations
                                                    questions.add(question + "?")
                                                    questions.add(self.apply_misspellings(question) + "?")
                                                    questions.add(self.apply_grammar_errors(question) + "?")
                                                    questions.add(question.lower() + "?")
                                                    questions.add(question.upper() + "?")
                                                    
                                                except (KeyError, IndexError):
                                                    continue
        
        return list(questions)

    def generate_ultra_questions(self):
        """Generate ultra-massive question bank"""
        all_questions = set()
        
        print("Generating massive combinations...")
        all_questions.update(self.generate_massive_combinations())
        print(f"Current total: {len(all_questions):,}")
        
        print("Generating skill combinations...")
        all_questions.update(self.generate_skill_combinations())
        print(f"Current total: {len(all_questions):,}")
        
        print("Generating education combinations...")
        all_questions.update(self.generate_education_combinations())
        print(f"Current total: {len(all_questions):,}")
        
        print("Generating experience combinations...")
        all_questions.update(self.generate_experience_combinations())
        print(f"Current total: {len(all_questions):,}")
        
        print("Generating project combinations...")
        all_questions.update(self.generate_project_combinations())
        print(f"Current total: {len(all_questions):,}")
        
        return list(all_questions)

    def save_ultra_questions(self, questions, filename="ultra_question_bank.json"):
        """Save the ultra question bank"""
        question_data = {
            "metadata": {
                "total_questions": len(questions),
                "generation_date": datetime.now().isoformat(),
                "target": "500,000+ questions with extensive variations"
            },
            "sample_questions": questions[:200],
            "total_count": len(questions)
        }
        
        # Save metadata and samples
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(question_data, f, indent=2, ensure_ascii=False)
        
        # Save full questions in chunks to manage file size
        chunk_size = 100000
        for i in range(0, len(questions), chunk_size):
            chunk = questions[i:i+chunk_size]
            chunk_filename = f"ultra_questions_chunk_{i//chunk_size + 1}.json"
            with open(chunk_filename, 'w', encoding='utf-8') as f:
                json.dump({"questions": chunk}, f, indent=2, ensure_ascii=False)
        
        print(f"\nUltra question bank saved!")
        print(f"Metadata: {filename}")
        print(f"Questions saved in chunks of {chunk_size:,}")
        print(f"Total questions generated: {len(questions):,}")
        
        return question_data

# Usage
if __name__ == "__main__":
    generator = UltraQuestionGenerator()
    questions = generator.generate_ultra_questions()
    
    print(f"\n{'='*60}")
    print(f"ULTRA QUESTION BANK GENERATED")
    print(f"{'='*60}")
    
    # Save the ultra question bank
    question_data = generator.save_ultra_questions(questions)
    
    # Display samples
    print(f"\nSample questions:")
    for i, q in enumerate(questions[:30], 1):
        print(f"  {i}. {q}")
    
    print(f"\n... and {len(questions) - 30:,} more questions!")
    print(f"\nIncludes:")
    print(f"- Extensive misspellings and typos")
    print(f"- Grammar variations and errors")
    print(f"- Case and punctuation variations")
    print(f"- Massive word combinations")
    print(f"- All possible question permutations") 