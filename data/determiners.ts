
import { DeterminerModule } from '../types';
import { articlesQuiz } from './quizzes/articles';
import { demonstrativesQuiz } from './quizzes/demonstratives';
import { possessivesQuiz } from './quizzes/possessives';
import { quantifiersQuiz } from './quizzes/quantifiers';
import { distributivesQuiz } from './quizzes/distributives';
import { interrogativesQuiz } from './quizzes/interrogatives';
import { cardinalsQuiz } from './quizzes/cardinals';
import { ordinalsQuiz } from './quizzes/ordinals';

import { articlesInfographic } from './infographics/articles';
import { demonstrativesInfographic } from './infographics/demonstratives';
import { possessivesInfographic } from './infographics/possessives';
import { quantifiersInfographic } from './infographics/quantifiers';
import { distributivesInfographic } from './infographics/distributives';
import { interrogativesInfographic } from './infographics/interrogatives';
import { cardinalsInfographic } from './infographics/cardinals';
import { ordinalsInfographic } from './infographics/ordinals';

export interface ModuleData extends DeterminerModule {
  infographic: any;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  mascotIntro: string; // What Leo says when you open this module
}

export const DETERMINER_MODULES: ModuleData[] = [
  {
    id: 'articles',
    name: 'Articles',
    icon: 'fa-certificate',
    color: 'bg-orange-400',
    difficulty: 'Beginner',
    description: 'Master the basics: A, An, and The.',
    mascotIntro: "The roaring basics! Let's spot the difference between 'A Lion' and 'The Lion'!",
    infographic: articlesInfographic,
    learnSlides: [
      {
        title: 'Definite vs. Indefinite',
        content: 'Articles define a noun as specific or unspecific. \n\nIndefinite (A/An): Used for general items or things mentioned for the first time.\nDefinite (The): Used for specific items, unique things, or things already mentioned.',
        examples: [
          { text: "I saw a lion. (Any lion)", isCorrect: true },
          { text: "I saw the lion we tracked yesterday. (Specific lion)", isCorrect: true }
        ],
        didYouKnow: "'The' is the most common word in the English language! We use it more than any other word."
      },
      {
        title: 'The Sound Rule',
        content: "Use 'A' before consonant sounds and 'An' before vowel sounds (a, e, i, o, u). Watch out for silent letters! It is about the sound, not the letter.",
        examples: [
          { text: "An apple (Vowel sound)", isCorrect: true },
          { text: "A university (starts with a 'Y' consonant sound)", isCorrect: true },
          { text: "An hour (starts with a vowel sound, H is silent)", isCorrect: true }
        ],
        didYouKnow: "Think of it like this: If the first sound makes your throat vibrate like a vowel, use 'An'!"
      },
      {
        title: 'Common Article Errors',
        content: "Be careful! We don't use 'A' or 'An' with plural nouns or uncountable things like 'water' or 'advice'.",
        examples: [
          { text: "I want a water.", isCorrect: false },
          { text: "I want some water.", isCorrect: true },
          { text: "He gave me an advice.", isCorrect: false }
        ],
        didYouKnow: "Uncountable nouns are tricky! They never take 'A' or 'An' because you can't have just 'one' of them."
      }
    ],
    quiz: articlesQuiz
  },
  {
    id: 'demonstratives',
    name: 'Demonstratives',
    icon: 'fa-hand-point-right',
    color: 'bg-yellow-500',
    difficulty: 'Beginner',
    description: 'Point things out: This, That, These, Those.',
    mascotIntro: "Paw at what you want! Is it near or far? Let's point it out.",
    infographic: demonstrativesInfographic,
    learnSlides: [
      {
        title: 'Near vs. Far',
        content: "Demonstratives point to specific things based on distance and number. They help the listener know exactly which object you are talking about.",
        examples: [
          { text: "This apple (here, singular)", isCorrect: true },
          { text: "That star (far away, singular)", isCorrect: true },
          { text: "These cookies (here, plural)", isCorrect: true },
          { text: "Those birds (far away, plural)", isCorrect: true }
        ],
        didYouKnow: "You can use 'That' to refer to an idea someone just said: 'That is a great point!'"
      },
      {
        title: 'Common Demonstrative Errors',
        content: "Always match the number! Don't use a singular demonstrative with a plural noun.",
        examples: [
          { text: "This birds are loud.", isCorrect: false },
          { text: "These birds are loud.", isCorrect: true },
          { text: "Those cat is cute.", isCorrect: false }
        ],
        didYouKnow: "Demonstratives can also be pronouns! 'This is my favorite' vs 'This book is my favorite'."
      }
    ],
    quiz: demonstrativesQuiz
  },
  {
    id: 'possessives',
    name: 'Possessives',
    icon: 'fa-id-badge',
    color: 'bg-amber-600',
    difficulty: 'Intermediate',
    description: 'Show ownership: My, Your, Its, Their.',
    mascotIntro: "This is my mane, and that is your screen! Let's learn about ownership.",
    infographic: possessivesInfographic,
    learnSlides: [
      {
        title: 'Whose is it?',
        content: "Possessive determiners come before the noun to show who owns it or has a relationship with it. They include: My, Your, His, Her, Its, Our, Their.",
        examples: [
          { text: "This is my den.", isCorrect: true },
          { text: "Is this your book?", isCorrect: true },
          { text: "Is this you book?", isCorrect: false }
        ],
        didYouKnow: "In English, possessives don't change if the noun is plural. It's 'My cat' and 'My cats'!"
      },
      {
        title: 'Common Mistake: Its vs. It\'s',
        content: "This is the #1 mistake even grown-ups make! \n\nIts shows possession.\nIt's is a contraction for 'It is' or 'It has'.",
        examples: [
          { text: "The lion licked its paw. (Ownership)", isCorrect: true },
          { text: "It's a sunny day. (It is)", isCorrect: true },
          { text: "The cat wants it's food.", isCorrect: false }
        ],
        didYouKnow: "Possessive determiners never take an apostrophe. No apostrophes for 'Yours', 'Hers', or 'Ours' either!"
      }
    ],
    quiz: possessivesQuiz
  },
  {
    id: 'quantifiers',
    name: 'Quantifiers',
    icon: 'fa-chart-pie',
    color: 'bg-green-500',
    difficulty: 'Advanced',
    description: 'Amounts: Many, Much, Few, Little.',
    mascotIntro: "I have many teeth but little patience for bad grammar! Let's count.",
    infographic: quantifiersInfographic,
    learnSlides: [
      {
        title: 'Countable vs. Uncountable',
        content: "Use Many/Few with things you can count (apples, friends, cars).\nUse Much/Little with things you can't count (water, happiness, money).",
        examples: [
          { text: "I have many friends.", isCorrect: true },
          { text: "There is too much sugar.", isCorrect: true },
          { text: "I have much coins.", isCorrect: false }
        ],
        didYouKnow: "Money is uncountable! You say 'much money' but 'many dollars'."
      },
      {
        title: 'The \"A\" Difference',
        content: "Few/Little = Not enough (Negative meaning).\nA few/A little = Some (Positive meaning).",
        examples: [
          { text: "I have few friends. (I am lonely)", isCorrect: true },
          { text: "I have a few friends. (I am happy)", isCorrect: true }
        ],
        didYouKnow: "Adding 'A' changes the mood of the sentence from sad to happy! One tiny letter makes a big difference."
      },
      {
        title: 'Some vs. Any',
        content: "Use Some in positive sentences.\nUse Any in negative sentences and questions.",
        examples: [
          { text: "I have some milk.", isCorrect: true },
          { text: "I don't have any milk.", isCorrect: true },
          { text: "Do you have any milk?", isCorrect: true }
        ]
      }
    ],
    quiz: quantifiersQuiz
  },
  {
    id: 'distributives',
    name: 'Distributives',
    icon: 'fa-arrows-to-circle',
    color: 'bg-teal-500',
    difficulty: 'Intermediate',
    description: 'Groups: Each, Every, Either, Neither.',
    mascotIntro: "Each student must listen! Every lion loves a nap. Let's divide the group.",
    infographic: distributivesInfographic,
    learnSlides: [
      {
        title: 'Individual Focus',
        content: "Distributives refer to members of a group individually. They are usually followed by a singular noun.",
        examples: [
          { text: "Each student has a book.", isCorrect: true },
          { text: "Every day is a gift.", isCorrect: true }
        ],
        didYouKnow: "'Each' focuses on the individuals, while 'Every' focuses on the group as a whole. They both take singular verbs!"
      },
      {
        title: 'Either & Neither',
        content: "Use these when talking about exactly two options.\n\nEither means 'one or the other'.\nNeither means 'not one and not the other'.",
        examples: [
          { text: "You can take either road. (Choose one)", isCorrect: true },
          { text: "Neither answer is correct. (Both are wrong)", isCorrect: true },
          { text: "Neither of the three roads.", isCorrect: false }
        ],
        didYouKnow: "Remember: 'Either' and 'Neither' are only for 2 things! If there are 3 or more, use 'Any' or 'None'."
      },
      {
        title: 'Distributive Errors',
        content: "Don't use a plural noun directly after Each or Every.",
        examples: [
          { text: "Every students are here.", isCorrect: false },
          { text: "Every student is here.", isCorrect: true },
          { text: "Each children got a gift.", isCorrect: false }
        ]
      }
    ],
    quiz: distributivesQuiz
  },
  {
    id: 'interrogatives',
    name: 'Interrogatives',
    icon: 'fa-question-circle',
    color: 'bg-blue-500',
    difficulty: 'Beginner',
    description: 'Ask questions: Which, What, Whose.',
    mascotIntro: "Whose turn is it? What are we learning? Questions, questions!",
    infographic: interrogativesInfographic,
    learnSlides: [
      {
        title: 'Asking Questions',
        content: "These determiners are used to ask questions about a noun: Which, What, Whose. They must come right before the noun they modify.",
        examples: [
          { text: "Whose pen is this?", isCorrect: true },
          { text: "Which flavor do you want?", isCorrect: true },
          { text: "What book are you reading?", isCorrect: true }
        ],
        didYouKnow: "'Which' is used when there are limited choices (like a menu). 'What' is for general, open questions."
      },
      {
        title: 'Interrogative Errors',
        content: "Don't confuse 'Whose' (possessive) with 'Who's' (Who is).",
        examples: [
          { text: "Who's coat is this?", isCorrect: false },
          { text: "Whose coat is this?", isCorrect: true },
          { text: "What are the time?", isCorrect: false }
        ]
      }
    ],
    quiz: interrogativesQuiz
  },
  {
    id: 'cardinals',
    name: 'Cardinals',
    icon: 'fa-list-ol',
    color: 'bg-indigo-500',
    difficulty: 'Beginner',
    description: 'Counting: One, Two, Ten.',
    mascotIntro: "One lion, two eyes, four paws! Counting is crucial in the jungle.",
    infographic: cardinalsInfographic,
    learnSlides: [
      {
        title: 'Exact Numbers',
        content: "Cardinals answer the question 'How many?'. They are the basic counting numbers: one, two, three, ten, hundred.",
        examples: [
          { text: "I have three cats.", isCorrect: true },
          { text: "There are ten lions.", isCorrect: true }
        ],
        didYouKnow: "Cardinals are only determiners when they come before a noun. In 'The number is three', 'three' is a pronoun!"
      },
      {
        title: 'Cardinal Rules',
        content: "Remember to use plural nouns for any number greater than one!",
        examples: [
          { text: "I have two car.", isCorrect: false },
          { text: "I have two cars.", isCorrect: true },
          { text: "Only one student came.", isCorrect: true }
        ]
      }
    ],
    quiz: cardinalsQuiz
  },
  {
    id: 'ordinals',
    name: 'Ordinals',
    icon: 'fa-award',
    color: 'bg-purple-500',
    difficulty: 'Intermediate',
    description: 'Ranking: First, Second, Next.',
    mascotIntro: "I always come first in the roar contest! Who is second?",
    infographic: ordinalsInfographic,
    learnSlides: [
      {
        title: 'Order and Rank',
        content: "Ordinals show the position or rank in a sequence: first, second, third, last, next.",
        examples: [
          { text: "This is the first time.", isCorrect: true },
          { text: "He is the last person in line.", isCorrect: true }
        ],
        didYouKnow: "We almost always use the article 'The' before ordinal numbers. Try saying 'He is first one'—it sounds weird, right?"
      },
      {
        title: 'Common Ordinal Errors',
        content: "Be careful with spelling! 'Fifth' (not fiveth) and 'Twelfth' (not twelveth) are common traps.",
        examples: [
          { text: "It's my fiveth birthday.", isCorrect: false },
          { text: "It's my fifth birthday.", isCorrect: true },
          { text: "He finished in one place.", isCorrect: false }
        ],
        didYouKnow: "We use ordinals for dates in English. We say 'The fourth of July', not 'The four of July'!"
      }
    ],
    quiz: ordinalsQuiz
  }
];
