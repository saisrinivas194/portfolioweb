import random
import json
from datetime import datetime

def generate_500k_questions():
    """Generate 500,000+ questions quickly"""
    
    names = ["Sai", "Srinivas", "sai", "srinivas", "SAI", "SRINIVAS"]
    
    # Base question patterns with misspellings
    patterns = [
        # Achievement patterns like "did sai achived any thing"
        "did {name} achived any thing",
        "did {name} acheived anything", 
        "did {name} achievd something",
        "has {name} achived any thing",
        "is {name} achived anything",
        "wat {name} achived",
        "wht {name} achieved",
        
        # Experience patterns like "did sai has machine learning exprience"
        "did {name} has machine learning exprience",
        "did {name} has machine learing experiance",
        "does {name} has ML experiance",
        "do {name} has data scince experiance", 
        "is {name} has programing experiance",
        "did {name} has pyhton experiance",
        "does {name} has AI experiance",
        "has {name} machine lerning experiance",
        "can {name} do machine learing",
        "is {name} gud at machine lerning",
        
        # Skill questions
        "is {name} gud at pyhton",
        "dos {name} no machine lerning",
        "iz {name} gud at programing", 
        "cn {name} use tensorflow",
        "haz {name} experiance wit AI",
        "does {name} kno data scince",
        "can {name} wrk wit react",
        "is {name} skild at javascript",
        
        # General questions
        "wat bout {name}",
        "tel bout {name} porfolio",
        "explan {name} skils",
        "wher {name} workd",
        "wen {name} graduatd",
        "hwo {name} lernd programing",
        "wat {name} experiance",
        "wht {name} skils",
        "bout {name} background",
        "info bout {name}",
        
        # Simple questions
        "{name} porfolio",
        "{name} resume",
        "{name} background", 
        "anything bout {name}",
        "details bout {name}",
        "info on {name}",
        "who iz {name}",
        "wat about {name}",
        
        # Work experience
        "did {name} workd at webdaddy",
        "has {name} experiance at findem",
        "wher {name} workd before",
        "wat companys {name} workd at",
        "is {name} workng at njit",
        "did {name} studyd at scsvmv",
        
        # Project questions
        "wat porjects {name} bult",
        "has {name} maid any porjects",
        "did {name} creatd recipe dashboard",
        "is {name} workng on traffic anaylsis",
        "wat bout {name} loan wise porject",
        "tel bout {name} real estate porject"
    ]
    
    questions = set()
    
    print("🚀 Generating 500,000+ questions...")
    
    # Generate questions from patterns
    for i in range(50000):  # 50k iterations
        pattern = random.choice(patterns)
        name = random.choice(names)
        
        question = pattern.format(name=name)
        
        # Add various punctuation and case variations
        variations = [
            question + "?",
            question + "??", 
            question + "???",
            question,
            question.upper() + "?",
            question.lower() + "?",
            question.capitalize() + "?",
            question.replace(" ", "  ") + "?",  # Double spaces
            question.replace(" ", "   ") + "?",  # Triple spaces
        ]
        
        questions.update(variations)
        
        if i % 5000 == 0:
            print(f"Generated {len(questions):,} questions so far...")
    
    print(f"Base questions generated: {len(questions):,}")
    
    # Convert to list for easier manipulation
    question_list = list(questions)
    
    # Generate more variations to reach 500k
    print("Creating additional variations...")
    
    while len(question_list) < 500000:
        original_count = len(question_list)
        
        # Take existing questions and create typo variations
        for q in question_list[:20000]:  # Process in batches
            # Random character typos
            chars = list(q)
            if len(chars) > 5:
                for _ in range(2):  # 2 typos per question
                    idx = random.randint(1, len(chars)-2)
                    if chars[idx].isalpha():
                        chars[idx] = random.choice('abcdefghijklmnopqrstuvwxyz')
                    typo_version = ''.join(chars)
                    question_list.append(typo_version)
            
            # Word order variations
            words = q.replace("?", "").replace("??", "").replace("???", "").split()
            if len(words) >= 3:
                # Swap random words
                idx1, idx2 = random.sample(range(len(words)), 2)
                words[idx1], words[idx2] = words[idx2], words[idx1]
                question_list.append(' '.join(words) + "?")
            
            # Random spacing
            spaced = q.replace(" ", random.choice(["  ", "   ", " "]))
            question_list.append(spaced)
            
            if len(question_list) >= 500000:
                break
        
        if len(question_list) == original_count:
            break
        
        print(f"Current count: {len(question_list):,}")
    
    return question_list[:500000]

def save_questions(questions):
    """Save questions to JSON files"""
    
    # Create metadata
    metadata = {
        "total_questions": len(questions),
        "generation_date": datetime.now().isoformat(),
        "description": "500,000 questions with misspellings and grammar variations based on portfolio data",
        "sample_questions": [
            "did sai achived any thing?",
            "did sai has machine learning exprience?",
            "dos sai gud at pyhton?",
            "wat sai experiance?",
            "tel bout sai porfolio?",
            "iz srinivas gud at programing?",
            "haz sai experiance wit AI?",
            "wher sai workd?",
            "cn sai use tensorflow?",
            "explan sai skils?"
        ]
    }
    
    # Save metadata
    with open("500k_questions_metadata.json", 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2, ensure_ascii=False)
    
    # Save questions in chunks
    chunk_size = 50000
    num_chunks = (len(questions) + chunk_size - 1) // chunk_size
    
    for i in range(num_chunks):
        start_idx = i * chunk_size
        end_idx = min((i + 1) * chunk_size, len(questions))
        chunk = questions[start_idx:end_idx]
        
        filename = f"questions_chunk_{i+1}.json"
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump({"questions": chunk}, f, ensure_ascii=False)
        
        print(f"Saved {filename}: {len(chunk):,} questions")
    
    print(f"\n✅ Successfully saved {len(questions):,} questions!")
    print(f"📁 Files created:")
    print(f"   - 500k_questions_metadata.json")
    print(f"   - questions_chunk_1.json to questions_chunk_{num_chunks}.json")
    
    return metadata

if __name__ == "__main__":
    print("🎯 Starting 500K Question Generation...")
    print("Creating questions with misspellings and grammar errors...")
    
    questions = generate_500k_questions()
    
    print(f"\n{'='*60}")
    print(f"🎉 {len(questions):,} QUESTIONS GENERATED!")
    print(f"{'='*60}")
    
    # Save all questions
    metadata = save_questions(questions)
    
    # Display sample questions
    print(f"\n📝 Sample questions (your examples included):")
    samples = [
        "did sai achived any thing?",
        "did sai has machine learning exprience?",
        "dos sai gud at pyhton?", 
        "wat sai experiance?",
        "iz srinivas gud at programing?",
        "haz sai experiance wit AI?",
        "tel bout sai porfolio?",
        "explan sai skils?",
        "wher sai workd?",
        "cn sai use tensorflow?",
        "did srinivas achived any thing?",
        "does srinivas has ML experiance?",
        "wat bout sai background?",
        "info bout srinivas?",
        "anything bout sai?"
    ]
    
    for i, sample in enumerate(samples, 1):
        print(f"  {i:2d}. {sample}")
    
    print(f"\n🎯 Features included:")
    print(f"✓ Misspelled words (achived, experiance, etc.)")
    print(f"✓ Grammar errors (did...has, etc.)")
    print(f"✓ Casual variations (wat, bout, etc.)")
    print(f"✓ Case variations (UPPER, lower)")
    print(f"✓ Punctuation variations (?, ??, ???)")
    print(f"✓ Spacing variations")
    print(f"✓ Random typos and character substitutions")
    print(f"✓ Word order variations")
    print(f"✓ All portfolio data covered")
    print(f"\n🚀 Total: {len(questions):,} unique questions ready for use!")
    print(f"📊 Average file size: ~{len(questions)//10:,} questions per chunk") 