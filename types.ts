
export type DeterminerTypeId = 
  | 'intro'
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
  infographic?: string; 
}

export interface DeterminerModule {
  id: DeterminerTypeId;
  name: string;
  icon: string;
  color: string;
  learnSlides: LearnSlide[];
  quiz: Question[];
}

export interface ModuleData extends DeterminerModule {
  infographic: any;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  mascotIntro: string;
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
