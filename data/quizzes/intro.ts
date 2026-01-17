
import { Question } from '../../types.ts';

export const introQuiz: Question[] = [
  { 
    id: 'int-1', 
    type: 'mcq', 
    question: "What is the primary job of a determiner?", 
    options: ["To describe a noun's color", "To introduce and specify a noun", "To replace a noun entirely", "To show action"], 
    correctAnswer: "To introduce and specify a noun", 
    explanation: "Determiners 'introduce' nouns and clarify which specific thing we are talking about." 
  },
  { 
    id: 'int-2', 
    type: 'mcq', 
    question: "Identify the determiner in this sentence: 'That lion is sleeping.'", 
    options: ["Lion", "Is", "That", "Sleeping"], 
    correctAnswer: "That", 
    explanation: "'That' is a demonstrative determiner pointing to a specific lion." 
  },
  { 
    id: 'int-3', 
    type: 'mcq', 
    question: "Which of these is NOT a determiner?", 
    options: ["The", "Quickly", "Many", "Whose"], 
    correctAnswer: "Quickly", 
    explanation: "'Quickly' is an adverb. 'The', 'Many', and 'Whose' are all types of determiners." 
  },
  { 
    id: 'int-4', 
    type: 'correction', 
    question: "Fix this sentence: 'I like the my new car.'", 
    correctAnswer: "I like my new car", 
    explanation: "The 'One Slot' Rule says you can't stack determiners like 'the' and 'my' together." 
  },
  { 
    id: 'int-5', 
    type: 'mcq', 
    question: "In the phrase 'Three juicy mangoes', which word is the determiner?", 
    options: ["Three", "Juicy", "Mangoes"], 
    correctAnswer: "Three", 
    explanation: "'Three' is a cardinal determiner telling us the quantity. 'Juicy' is an adjective." 
  },
  { 
    id: 'int-6', 
    type: 'fill-in-the-blank', 
    question: "Determiners usually come ___ (before/after) the noun.", 
    correctAnswer: "before", 
    explanation: "Determiners introduce the noun, so they sit in front of it." 
  },
  { 
    id: 'int-7', 
    type: 'mcq', 
    question: "Which sentence follows the 'One Slot' rule correctly?", 
    options: ["This some book is good.", "My those friends are here.", "Those friends are here."], 
    correctAnswer: "Those friends are here.", 
    explanation: "You should only use one main determiner (like 'those') for the noun 'friends'." 
  },
  { 
    id: 'int-8', 
    type: 'mcq', 
    question: "Can an adjective come between a determiner and a noun?", 
    options: ["Yes (e.g., The big lion)", "No (e.g., The lion big)"], 
    correctAnswer: "Yes (e.g., The big lion)", 
    explanation: "Adjectives often sit between the determiner and the noun to describe it further." 
  },
  { 
    id: 'int-9', 
    type: 'fill-in-the-blank', 
    question: "Identify the determiner: 'Several cubs were playing.'", 
    correctAnswer: "several", 
    explanation: "'Several' is a quantifier determiner." 
  },
  { 
    id: 'int-10', 
    type: 'mcq', 
    question: "What happens if you remove a determiner from a singular countable noun? (e.g., 'I saw dog.')", 
    options: ["The sentence is still perfect.", "The sentence sounds incomplete or incorrect.", "The noun becomes plural."], 
    correctAnswer: "The sentence sounds incomplete or incorrect.", 
    explanation: "Singular countable nouns almost always need a determiner to be grammatically correct." 
  }
];
