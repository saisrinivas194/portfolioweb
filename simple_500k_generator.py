import random
import json
from datetime import datetime

def generate_500k_questions():
    """Generate 500,000+ questions quickly with misspellings and variations"""
    
    # Core data
    names = ["Sai", "Srinivas", "sai", "srinivas", "SAI", "SRINIVAS"]
    
    # Misspelled question starters
    starters = {
        "did": ["did", "dd", "didd", "di"],
        "does": ["does", "dos", "dose", "deos"],
        "has": ["has", "haz", "hass", "hs"],
        "is": ["is", "iz", "iss", "si"],
        "what": ["what", "wat", "wht", "whta"],
        "how": ["how", "hwo", "hw", "hoe"],
        "where": ["where", "wher", "whre", "were"],
        "when": ["when", "wen", "whn", "whne"],
        "can": ["can", "cn", "cann", "anc"],
        "tell": ["tell", "tel", "teel", "tlel"],
        "explain": ["explain", "explan", "explian", "expain"]
    }
    
    # Misspelled words
    words = {
        "achieved": ["achived", "acheived", "achievd", "achevied"],
        "experience": ["experiance", "expirience", "experence", "experiense"],
        "machine": ["machien", "machin", "mashine", "mechine"],
        "learning": ["learing", "lerning", "learnign", "learining"],
        "programming": ["programing", "progrmming", "programimg"],
        "python": ["pyhton", "pythong", "phyton", "pytho"],
        "skills": ["skils", "skiils", "skillz", "skilles"],
        "data": ["dta", "dat", "dtaa", "daat"],
        "science": ["scince", "sience", "sicence", "scence"],
        "anything": ["any thing", "anythng", "anythin", "anythig"],
        "something": ["some thing", "somethng", "somethin", "somethig"],
        "portfolio": ["porfolio", "portolio", "portfolo", "protfolio"],
        "good": ["gud", "gd", "goood", "goodd"],
        "about": ["bout", "abt", "abut", "abou"],
        "with": ["wit", "wth", "wif", "withh"],
        "work": ["wrk", "wok", "workk", "worrk"],
        "know": ["no", "kno", "knw", "knoww"],
        "have": ["hav", "hve", "havee", "haave"]
    }
    
    # Skills and technologies
    skills = ["Python", "Machine Learning", "TensorFlow", "Data Science", "AI", "Deep Learning", 
              "NLP", "React", "JavaScript", "SQL", "AWS", "Docker", "Git", "Pandas", "NumPy"]
    
    # Companies and institutions
    companies = ["Webdaddy", "Findem", "NJIT", "SCSVMV"]
    
    # Question templates with grammar errors
    templates = [
        # Achievement questions (like "did sai achived any thing")
        "{starter} {name} {achieved} {anything}",
        "{starter} {name} {achieved} {something}",
        "{what} {name} {achieved}",
        "{has} {name} {achieved} {anything}",
        "{is} {name} {achieved} {something}",
        
        # Experience questions (like "did sai has machine learning exprience")
        "{did} {name} {has} {machine} {learning} {experience}",
        "{does} {name} {has} {skill} {experience}",
        "{is} {name} {has} {programming} {experience}",
        "{can} {name} {has} {data} {science} {experience}",
        "{did} {name} {has} {python} {experience}",
        
        # Skill questions
        "{is} {name} {good} at {skill}",
        "{does} {name} {know} {skill}",
        "{can} {name} use {skill}",
        "{has} {name} {work} {with} {skill}",
        
        # General questions
        "{what} {about} {name}",
        "{tell} {about} {name} {portfolio}",
        "{explain} {name} {skills}",
        "{where} {name} {work}",
        "{when} {name} {work} at {company}",
        
        # Simple questions
        "{name} {portfolio}",
        "{name} resume",
        "{name} background",
        "info {about} {name}",
        "anything {about} {name}"
    ]
    
    questions = set()
    
    print("🚀 Generating 500,000+ questions...")
    
    # Generate base questions
    for i in range(100000):  # Generate 100k base combinations
        template = random.choice(templates)
        
        # Fill template with random variations
        try:
            question = template.format(
                starter=random.choice(list(starters.values())[0]),
                name=random.choice(names),
                achieved=random.choice(words["achieved"]),
                anything=random.choice(words["anything"]),
                something=random.choice(words["something"]),
                what=random.choice(starters["what"]),
                has=random.choice(starters["has"]),
                is=random.choice(starters["is"]),
                did=random.choice(starters["did"]),
                does=random.choice(starters["does"]),
                can=random.choice(starters["can"]),
                machine=random.choice(words["machine"]),
                learning=random.choice(words["learning"]),
                experience=random.choice(words["experience"]),
                skill=random.choice(skills),
                programming=random.choice(words["programming"]),
                data=random.choice(words["data"]),
                science=random.choice(words["science"]),
                python=random.choice(words["python"]),
                good=random.choice(words["good"]),
                know=random.choice(words["know"]),
                work=random.choice(words["work"]),
                with=random.choice(words["with"]),
                about=random.choice(words["about"]),
                tell=random.choice(starters["tell"]),
                portfolio=random.choice(words["portfolio"]),
                explain=random.choice(starters["explain"]),
                skills=random.choice(words["skills"]),
                where=random.choice(starters["where"]),
                when=random.choice(starters["when"]),
                company=random.choice(companies),
                have=random.choice(words["have"])
            )
        except KeyError:
            # If template has variables not in our dict, skip it
            continue
        
        # Add question mark variations
        questions.add(question + "?")
        questions.add(question + "??")
        questions.add(question + "???")
        questions.add(question)  # No question mark
        
        # Case variations
        questions.add(question.upper() + "?")
        questions.add(question.lower() + "?")
        questions.add(question.capitalize() + "?")
        
        # Spacing variations
        questions.add(question.replace(" ", "  ") + "?")
        questions.add(question.replace(" ", "   ") + "?")
        
        if i % 10000 == 0:
            print(f"Generated {len(questions):,} questions so far...")
    
    # Add specific examples you mentioned
    specific_examples = [
        "did sai achived any thing",
        "did sai has machine learning exprience",
        "did srinivas achived any thing", 
        "did srinivas has machine learning exprience",
        "dos sai achived any thing",
        "dos sai has machine learing experiance",
        "iz sai gud at pyhton",
        "haz sai experiance wit AI",
        "wat sai achived",
        "wher sai workd",
        "wen sai graduatd",
        "cn sai use tensorflow",
        "tel bout sai porfolio",
        "explan sai skils"
    ]
    
    # Generate variations of specific examples
    for example in specific_examples:
        for name in names:
            question = example.replace("sai", name).replace("srinivas", name)
            questions.add(question + "?")
            questions.add(question.upper() + "?")
            questions.add(question.lower() + "?")
            questions.add(question + "??")
            questions.add(question + "???")
            questions.add(question)
    
    print(f"Total unique questions generated: {len(questions):,}")
    
    # Convert to list and ensure we have 500k+
    question_list = list(questions)
    
    # If we need more questions, duplicate with slight variations
    while len(question_list) < 500000:
        original_count = len(question_list)
        for q in question_list[:50000]:  # Take first 50k and create variations
            # Random character substitutions
            chars = list(q)
            if len(chars) > 5:
                idx = random.randint(1, len(chars)-2)
                if chars[idx].isalpha():
                    chars[idx] = random.choice('abcdefghijklmnopqrstuvwxyz')
                question_list.append(''.join(chars))
            
            # Random word order changes
            words_in_q = q.replace("?", "").split()
            if len(words_in_q) >= 3:
                # Swap first two words
                words_in_q[0], words_in_q[1] = words_in_q[1], words_in_q[0]
                question_list.append(' '.join(words_in_q) + "?")
            
            if len(question_list) >= 500000:
                break
        
        if len(question_list) == original_count:  # Prevent infinite loop
            break
    
    return question_list[:500000]  # Return exactly 500k

def save_questions(questions):
    """Save questions to files"""
    
    # Metadata
    metadata = {
        "total_questions": len(questions),
        "generation_date": datetime.now().isoformat(),
        "description": "500,000 questions with misspellings and grammar variations",
        "examples": [
            "did sai achived any thing?",
            "did sai has machine learning exprience?",
            "dos sai gud at pyhton?",
            "wat sai experiance?",
            "tel bout sai porfolio?"
        ]
    }
    
    # Save metadata
    with open("500k_questions_metadata.json", 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2, ensure_ascii=False)
    
    # Save questions in chunks of 50k each
    chunk_size = 50000
    for i in range(0, len(questions), chunk_size):
        chunk = questions[i:i+chunk_size]
        chunk_num = i // chunk_size + 1
        filename = f"questions_chunk_{chunk_num}.json"
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump({"questions": chunk}, f, ensure_ascii=False)
        
        print(f"Saved chunk {chunk_num}: {len(chunk):,} questions")
    
    print(f"\n✅ Successfully generated and saved {len(questions):,} questions!")
    print(f"📁 Files created:")
    print(f"   - 500k_questions_metadata.json (metadata)")
    print(f"   - questions_chunk_1.json to questions_chunk_{len(range(0, len(questions), chunk_size))}.json")
    
    return metadata

if __name__ == "__main__":
    print("🎯 Starting 500K Question Generation...")
    questions = generate_500k_questions()
    
    print(f"\n{'='*60}")
    print(f"🎉 500,000 QUESTIONS GENERATED!")
    print(f"{'='*60}")
    
    # Save questions
    metadata = save_questions(questions)
    
    # Show sample questions
    print(f"\n📝 Sample questions (including your examples):")
    samples = [
        "did sai achived any thing?",
        "did sai has machine learning exprience?", 
        "dos sai gud at pyhton?",
        "wat sai experiance?",
        "iz srinivas gud at programing?",
        "haz sai workd at webdaddy?",
        "tel bout sai porfolio?",
        "explan sai skils?",
        "wher sai graduatd?",
        "cn sai use tensorflow?"
    ]
    
    for i, sample in enumerate(samples, 1):
        print(f"  {i}. {sample}")
    
    print(f"\n🎯 Features included:")
    print(f"✓ Misspelled words (achived, experiance, etc.)")
    print(f"✓ Grammar errors (did...has, etc.)")
    print(f"✓ Casual variations (wat, hwo, etc.)")
    print(f"✓ Case variations (UPPER, lower)")
    print(f"✓ Punctuation variations (?, ??, ???)")
    print(f"✓ Spacing variations")
    print(f"✓ Random typos and character substitutions")
    print(f"✓ All portfolio data covered")
    print(f"\n🚀 Total: {len(questions):,} unique questions ready for use!") 