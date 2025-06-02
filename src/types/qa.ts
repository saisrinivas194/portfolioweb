export interface Question {
  base_question: string;
  variations: string[];
  answer: string;
}

export interface Category {
  name: string;
  questions: Question[];
}

export interface QADataset {
  categories: {
    [key: string]: Category;
  };
} 