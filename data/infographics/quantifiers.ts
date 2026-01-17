import { ModuleData } from '../../types.ts';
import { quantifiersQuiz } from '../quizzes/quantifiers.ts';

export const quantifiersModule: ModuleData = {
  id: 'quantifiers',
  name: 'Quantifiers',
  icon: 'fa-chart-pie',
  color: 'bg-green-500',
  difficulty: 'Advanced',
  description: 'Master complex counting: Much, Many, Some, Any, Little, Few.',
  mascotIntro: "English math is strange. We count dollars, but not money! Let's solve this puzzle.",
  quiz: quantifiersQuiz,
  
  infographic: {
    title: "The Quantity Lab",
    color: "bg-green-500",
    rules: [
      "**COUNTABLE**: Things you can count (1 car, 2 cars). Use MANY / FEW.",
      "**UNCOUNTABLE**: Liquids, powders, ideas (Water, Sand). Use MUCH / LITTLE.",
      "**THE SAFETY NET**: 'A lot of' works for BOTH types!",
      "**SOME vs ANY**: 'Some' for Yes (Positive). 'Any' for No/Questions (Negative).",
      "**THE 'A' RULE**: 'A few' is positive (Some). 'Few' is negative (Not enough)."
    ],
    examples: [
      { label: "Countable", text: "I have **many** books." },
      { label: "Uncountable", text: "I don't have **much** time." },
      { label: "Positive", text: "I have **some** ideas." },
      { label: "Negative", text: "I don't have **any** ideas." }
    ],
    mistakes: [
      { bad: "Much people", good: "Many people", reason: "People are countable. 'Much' is for things you measure, not count." },
      { bad: "I have few friends.", good: "I have a few friends.", reason: "'Few' means you are lonely. 'A few' means you have a group!" },
      { bad: "I have 3 moneys.", good: "I have 3 dollars.", reason: "Money is uncountable. Currency (dollars) is countable." }
    ]
  },

  learnSlides: [
    {
      title: 'Step 1: Can you count it?',
      content: "Before picking a word, look at the noun. Can you count it on your fingers (1, 2, 3)?\n\n1. **Countable:** Apples, Cars, Friends, Minutes. (Uses 'Many' or 'Few')\n2. **Uncountable:** Water, Rice, Money, Time, Happiness. (Uses 'Much' or 'Little')\n\n*Hint:* Countable nouns usually end in 'S' (Cars). Uncountable nouns rarely do.",
      examples: [
        { text: "I have **many** coins. (Countable)", isCorrect: true },
        { text: "I have **much** money. (Uncountable)", isCorrect: true }
      ],
      didYouKnow: "Bread and Furniture are Uncountable in English! You say 'A loaf of bread' or 'A piece of furniture'."
    },
    {
      title: 'Many vs. Much (The Big Rule)',
      content: "Use **Many** for Countable things.\nUse **Much** for Uncountable things.\n\n**The Hack:** If you are stressed and can't remember the rule, just use **'A lot of'**. It is grammatically correct for BOTH!\n- A lot of cars (Correct)\n- A lot of water (Correct)",
      examples: [
        { text: "How **many** slices of pizza?", isCorrect: true },
        { text: "How **much** pizza is left?", isCorrect: true }
      ]
    },
    {
      title: 'Some vs. Any',
      content: "This switch depends on the 'Vibe' of the sentence.\n\n1. **Positive (+):** Use **Some**. ('I have some apples')\n2. **Negative (-):** Use **Any**. ('I don't have any apples')\n3. **Question (?):** Usually **Any**. ('Do you have any apples?')",
      examples: [
        { text: "I need **some** help.", isCorrect: true },
        { text: "I don't need **any** help.", isCorrect: true },
        { text: "Do you have **any** milk?", isCorrect: true }
      ],
      didYouKnow: "Exception! If we OFFER something, we use 'Some' to be polite: 'Would you like some tea?'"
    },
    {
      title: 'The Emotional "A": Few vs. A Few',
      content: "One tiny letter changes the meaning from Sad to Happy!\n\n1. **Few / Little (Without 'A'):** Negative. It means 'Not enough' or 'Almost zero'.\n*(Example: 'I have little money' = I am poor)*\n\n2. **A Few / A Little (With 'A'):** Positive. It means 'Some' or 'Enough'.\n*(Example: 'I have a little money' = I can buy lunch!)*",
      examples: [
        { text: "He has **few** friends. (He is lonely)", isCorrect: true },
        { text: "He has **a few** friends. (He is popular)", isCorrect: true }
      ]
    },
    {
      title: 'The Scale of Quantity',
      content: "Memorize this order from 100% to 0%:\n\n- **All / Every:** 100% (Total)\n- **Most:** 80-90% (Majority)\n- **Many / Much / A lot of:** 50-70% (Large amount)\n- **Some / A few:** 20-40% (Small amount)\n- **No / None:** 0% (Zero)",
      examples: [
        { text: "**All** birds lay eggs.", isCorrect: true },
        { text: "**Most** birds can fly.", isCorrect: true }
      ]
    }
  ]
};