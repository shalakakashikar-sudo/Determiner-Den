import { ModuleData } from '../../types.ts';
import { cardinalsQuiz } from '../quizzes/cardinals.ts';

export const cardinalsModule: ModuleData = {
  id: 'cardinals',
  name: 'Cardinals (Numbers)',
  icon: 'fa-list-ol',
  color: 'bg-indigo-500',
  difficulty: 'Beginner',
  description: 'Master the art of counting: One, Two, Zero, and Decimals.',
  mascotIntro: "One lion, two eyes, four paws! In the jungle, accurate counting keeps you safe.",
  
  infographic: {
    title: "Counting Den",
    color: "bg-indigo-500",
    rules: [
      "**FUNCTION**: They answer the question 'How many?'.",
      "**ONE**: The only number that takes a Singular noun.",
      "**PLURAL**: All other numbers (2, 10, Zero, 1.5) take Plural nouns.",
      "**PRECISION**: Cardinals are exact, unlike words like 'Some' or 'Many'."
    ],
    examples: [
      { label: "Singular", text: "I have **one** sister." },
      { label: "Plural", text: "I have **two** sisters." },
      { label: "Zero", text: "There are **zero** clouds today." }
    ],
    mistakes: [
      { bad: "I have two cat.", good: "I have two cats.", reason: "Numbers greater than one need plural nouns." },
      { bad: "One people.", good: "One person.", reason: "'One' must match with a singular noun." },
      { bad: "The number is three.", good: "Three apples.", reason: "In the first sentence, 'three' is a noun, not a determiner!" }
    ]
  },

  learnSlides: [
    {
      title: 'What is a Cardinal?',
      content: "Cardinal numbers are the words we use to count things exactly (One, Two, Three, Ten, One Hundred).\n\nWhen you put a number *before* a noun, it acts as a **Determiner** because it tells us exactly how many nouns we are talking about.",
      examples: [
        { text: "I see three birds. (Determiner - modifies birds)", isCorrect: true },
        { text: "I see birds. (Vague - how many?)", isCorrect: true }
      ],
      didYouKnow: "The word 'Cardinal' comes from a Latin word meaning 'Important'. These are the most important numbers!"
    },
    {
      title: 'The Singular Rule',
      content: "Grammar math is easy! There is only one rule for singular nouns:\n\n- **One** = Singular Noun\n- **Everything else** = Plural Noun\n\nYou must say 'One boy', but 'Two boys'.",
      examples: [
        { text: "I have one idea.", isCorrect: true },
        { text: "I have five ideas.", isCorrect: true },
        { text: "I have one ideas.", isCorrect: false }
      ]
    },
    {
      title: 'The "Zero" Surprise',
      content: "What do we do with **Zero**? It means 'nothing', so is it singular or plural?\n\n**Rule:** Zero usually takes a **Plural** noun.\n\nIt sounds strange, but we say 'Zero degrees' or 'Zero points'.",
      examples: [
        { text: "There are zero monsters under my bed.", isCorrect: true },
        { text: "There is zero monster.", isCorrect: false }
      ],
      didYouKnow: "We often use the word 'No' instead of 'Zero'. 'I have no ideas' is more common than 'I have zero ideas'."
    },
    {
      title: 'Tricky Case: Decimals',
      content: "What about numbers like 0.5 or 1.5? They aren't quite two, but they aren't one either.\n\n**Rule:** In English, anything that is not exactly '1' is treated as **Plural**.\n\nSo, even 0.5 (half) often takes a plural noun in measurements.",
      examples: [
        { text: "It took 1.5 hours. (Correct - Plural)", isCorrect: true },
        { text: "It took 1.5 hour. (Incorrect)", isCorrect: false }
      ]
    },
    {
      title: 'Determiner vs. Pronoun',
      content: "Be careful! A number is only a determiner if it is followed by a noun.\n\nIf the number stands alone, it is a Pronoun (it replaces the noun).",
      examples: [
        { text: "I bought **two** cakes. (Determiner)", isCorrect: true },
        { text: "I bought **two**. (Pronoun - stands alone)", isCorrect: true }
      ]
    },
    {
      title: 'Style Tip: Words or Digits?',
      content: "When should you write 'Three' and when should you write '3'?\n\n**General Rule:**\n- **0-9:** Write the word (Zero, One, Nine).\n- **10+:** Write the digit (10, 50, 100).",
      examples: [
        { text: "I have three cats.", isCorrect: true },
        { text: "I have 3 cats. (A bit casual, but okay in text messages)", isCorrect: true },
        { text: "There are 250 people.", isCorrect: true }
      ]
    }
  ],
  quiz: cardinalsQuiz
};