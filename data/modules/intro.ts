
import { ModuleData } from '../../types.ts';
import { introQuiz } from '../quizzes/intro.ts';

export const introModule: ModuleData = {
  id: 'intro',
  name: 'Introduction to Determiners',
  icon: 'fa-shapes',
  color: 'bg-slate-500',
  difficulty: 'Beginner',
  description: 'Start here! The absolute basics: Definition, Word Order, and The Golden Rules.',
  mascotIntro: "Welcome to the jungle of grammar! Nouns are wild animals—we need Determiners to catch them!",
  
  infographic: {
    title: "The Rules of the Road",
    color: "bg-slate-500",
    rules: [
      "**ALWAYS First**: Determiners go before adjectives and nouns.",
      "**ONE Driver Only**: You cannot have two main determiners (like 'The' and 'My') together.",
      "**Singular Nouns Need Help**: A singular countable noun (like 'cat') cannot stand alone.",
      "**The Function**: They tell us *WHICH* one or *HOW MANY*."
    ],
    examples: [
      { label: "Word Order", text: "**The** (Det) → **Big** (Adj) → **Lion** (Noun)" },
      { label: "Specific", text: "I want *that* cookie. (Pointing)" },
      { label: "General", text: "I want *a* cookie. (Any one)" }
    ],
    mistakes: [
      { bad: "I saw cat.", good: "I saw a cat.", reason: "Singular nouns are lonely! They need an introduction." },
      { bad: "The my book.", good: "My book.", reason: "Choose one: specific (The) or owner (My). Not both." },
      { bad: "Big the red ball.", good: "The big red ball.", reason: "Determiners always lead the line." }
    ]
  },

  learnSlides: [
    {
      title: 'What is a Determiner?',
      content: "Imagine a noun (like 'cat' or 'book'). By itself, it is just a vague idea. \n\nA **Determiner** is a word that stands in front of the noun to make it clear and real. It *'determines'* exactly which noun we are talking about.\n\nIt answers three main questions:\n1. **Which one?** (This cat, The cat)\n2. **Whose is it?** (My cat, Her cat)\n3. **How many?** (One cat, Many cats)",
      examples: [
        { text: "I bought car. (Incorrect - Which car?)", isCorrect: false },
        { text: "I bought a car. (Correct - A general car)", isCorrect: true },
        { text: "I bought this car. (Correct - A specific car)", isCorrect: true }
      ],
      didYouKnow: "Determiners act like introductions. They introduce the noun to the listener so they know what you are talking about!"
    },
    {
      title: 'The Golden Rule: Word Order',
      content: "Determiners are the **VIPs** (Very Important Parts) of the phrase. They **always** come first.\n\nEven if you have adjectives (describing words like 'red', 'big', 'fast'), the Determiner must stand at the very front.\n\n**The Pattern:**\n**Determiner** → **Adjective** → **Noun**",
      examples: [
        { text: "The big red bus.", isCorrect: true },
        { text: "Big the red bus. (Wrong order)", isCorrect: false },
        { text: "My favorite song.", isCorrect: true }
      ],
      didYouKnow: "Think of it like a train: The Determiner is the Engine, the Adjectives are the cargo cars, and the Noun is the Caboose!"
    },
    {
      title: 'The "One Slot" Rule',
      content: "This is a **crucial** rule for correct grammar.\n\nA noun phrase usually has only **one slot** for a main determiner. You cannot stack them on top of each other.\n\nYou must make a choice: Do you want to say *'The'* OR *'My'*? You cannot say *'The My'*.",
      examples: [
        { text: "I read the book.", isCorrect: true },
        { text: "I read my book.", isCorrect: true },
        { text: "I read the my book. (Incorrect - Double Determiner)", isCorrect: false }
      ],
      didYouKnow: "Exceptions exist! Words like 'All' and 'Both' are special 'pre-determiners'. You *can* say 'All the people'."
    },
    {
      title: 'General vs. Specific',
      content: "Determiners split the world into two sides. This helps the listener understand your meaning:\n\n1. **General (Indefinite):** We are talking about *any* item, or introducing one for the first time.\n*(Words: A, An, Any, Some)*\n\n2. **Specific (Definite):** We are talking about a *specific* item that we both know.\n*(Words: The, This, My, That)*",
      examples: [
        { text: "Pass me a pen. (Any pen will do)", isCorrect: true },
        { text: "Pass me the pen. (The specific one on the desk)", isCorrect: true }
      ]
    },
    {
      title: 'Can a Noun Stand Alone?',
      content: "When can a noun appear without a determiner?\n\n1. **Singular Countable Nouns:** *ALMOST NEVER*. You cannot say 'I have cat'. You must say 'A cat', 'The cat', or 'My cat'.\n\n2. **Plural or Uncountable Nouns:** *YES*. If you mean 'in general', they can stand alone.",
      examples: [
        { text: "Lion is strong. (Incorrect - Singular needs help)", isCorrect: false },
        { text: "A lion is strong. (Correct)", isCorrect: true },
        { text: "Lions are strong. (Correct - Plural Generalization)", isCorrect: true }
      ]
    },
    {
      title: 'Meet the Families',
      content: "There are four main families of determiners you will meet in this course:\n\n1. **Articles**: A, An, The (The most common).\n2. **Demonstratives**: This, That (Pointing).\n3. **Possessives**: My, Your (Owning).\n4. **Quantifiers**: Some, Many (Counting).\n\nLet's start exploring them!",
      examples: [
        { text: "**The** (Article) apple.", isCorrect: true },
        { text: "**That** (Demonstrative) apple.", isCorrect: true },
        { text: "**My** (Possessive) apple.", isCorrect: true },
        { text: "**Many** (Quantifier) apples.", isCorrect: true }
      ]
    }
  ],
  quiz: introQuiz
};
