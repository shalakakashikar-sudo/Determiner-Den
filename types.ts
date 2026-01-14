export type DeterminerTypeId = 
  | 'articles' 
  | 'demonstratives' 
  | 'possessives' 
  | 'quantifiers' 
  | 'distributives' 
  | 'interrogatives' 
  | 'cardinals' 
  | 'ordinals';

export interface Question {
  id: string;
  type: 'mcq' | 'fill-in-the-blank' | 'correction';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LearnSlide {
  title: string;
  content: string;
  examples: { text: string; isCorrect: boolean }[];
  didYouKnow?: string;
  infographic?: string; // Placeholder for SVG or Icon name
}

export interface DeterminerModule {
  id: DeterminerTypeId;
  name: string;
  icon: string;
  color: string;
  learnSlides: LearnSlide[];
  quiz: Question[];
}

export type MascotMood = 
  | 'idle' 
  | 'happy' 
  | 'thinking' 
  | 'oops' 
  | 'tickled' 
  | 'roar' 
  | 'sad' 
  | 'surprised' 
  | 'grin';

export interface MascotMessage {
  text: string;
  mood: MascotMood;
}