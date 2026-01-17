import { ModuleData } from '../../types.ts';
import { quantifiersQuiz } from '../quizzes/quantifiers.ts';

export const quantifiersModule: ModuleData = {
  id: 'quantifiers',
  name: 'Quantifiers',
  icon: 'fa-chart-pie',
  color: 'bg-green-500',
  difficulty: 'Advanced',
  description: 'Master complex counting: Much, Many, Some, Any, and the tricky "A" vs "The".',
  mascotIntro: "English math is strange. We count dollars, but not money! Let's solve this puzzle together.",
  quiz: quantifiersQuiz,
  
  infographic: {
    title: "The Quantity Lab",
    color: "bg-green-500",
    rules: [
      "**STEP 1**: Check the Noun! Is it Countable (1, 2, 3) or Uncountable (Liquid/Concept)?",
      "**MANY / FEW**: Only for Countable nouns.",
      "**MUCH / LITTLE**: Only for Uncountable nouns.",
      "**SOME vs ANY**: 'Some' = Positive (+). 'Any' = Negative/Question (-?).",
      "**THE 'A' RULE**: 'A few' is happy (Positive). 'Few' is sad (Negative/Not enough).",
      "**THE 'THE' RULE**: 'The few' means 'Not many, but ALL of them'."
    ],
    examples: [
      { label: "Countable", text: "**Many** cars are on the road." },
      { label: "Uncountable", text: "There isn't **much** traffic." },
      { label: "Polite Offer", text: "Would you like **some** tea? (Expecting Yes)" },
      { label: "The Specific", text: "I spent **the little** money I had." }
    ],
    mistakes: [
      { bad: "Much people came.", good: "Many people came.", reason: "People are countable. Use Many." },
      { bad: "I have a news.", good: "I have some news.", reason: "News is uncountable! Never say 'A news'." },
      { bad: "I have few friends.", good: "I have a few friends.", reason: "'Few' means you are lonely. 'A few' means you have a group!" },
      { bad: "Give me an advice.", good: "Give me some advice.", reason: "Advice is abstract. You can't have 'one' advice." }
    ]
  },

  learnSlides: [
    {
      title: 'Step 1: The "Count" Test',
      content: "Before choosing a word, look at the noun. Can you count it on your fingers?\n\n1. **Countable (Distinct items):** Cup, Friend, Idea, Dollar, Job.\n*(Plural: Cups, Friends, Ideas)*\n\n2. **Uncountable (Stuff/Concepts):** Water, Bread, Money, Work, Advice.\n*(Plural: NEVER! You cannot say 'Waters' or 'Breads')*",
      examples: [
        { text: "I have **one** job. (Countable)", isCorrect: true },
        { text: "I have **much** work. (Uncountable)", isCorrect: true },
        { text: "I have **two** works. (Incorrect)", isCorrect: false }
      ],
      didYouKnow: "Furniture is uncountable! It refers to the *category*. You buy 'Three chairs', but 'Some furniture'."
    },
    {
      title: 'Many vs. Much (The Big Divide)',
      content: "Once you know the noun type, pick your team:\n\n- **Countable Team:** Use **Many**.\n*(How many cousins do you have?)*\n\n- **Uncountable Team:** Use **Much**.\n*(How much sugar do you want?)*\n\n**Hack:** **'A lot of'** works for BOTH teams! Use it when you are unsure or stressed.",
      examples: [
        { text: "There are **many** stars.", isCorrect: true },
        { text: "There is **much** light.", isCorrect: true },
        { text: "There is **a lot of** light.", isCorrect: true }
      ]
    },
    {
      title: 'Some vs. Any (The Vibe Check)',
      content: "This choice depends on the 'mood' of the sentence.\n\n1. **Positive (+):** Use **Some**.\n*(I have some money.)*\n\n2. **Negative (-):** Use **Any**.\n*(I don't have any money.)*\n\n3. **Question (?):** Use **Any**.\n*(Do you have any money?)*",
      examples: [
        { text: "I bought **some** apples.", isCorrect: true },
        { text: "I didn't buy **any** apples.", isCorrect: true }
      ]
    },
    {
      title: 'Exception: The Polite Offer',
      content: "Wait! Why do we say 'Would you like **some** tea?' if it is a question?\n\n**Rule:** If you are OFFERING something and expect the answer to be 'Yes', use **Some**.\n\nIt sounds nicer and more generous than 'Any'.",
      examples: [
        { text: "Can I have **some** water? (Asking for it)", isCorrect: true },
        { text: "Do you have **any** water? (Checking if it exists)", isCorrect: true }
      ]
    },
    {
      title: 'The Emotional "A": Few vs. A Few',
      content: "One tiny letter changes the meaning from Sad to Happy! (For Countable Nouns)\n\n1. **Few (Without 'A'):** Negative. It means 'Not enough' or 'Almost zero'.\n*(Example: 'I have few friends.' = I am lonely.)*\n\n2. **A Few (With 'A'):** Positive. It means 'Some' or 'Enough'.\n*(Example: 'I have a few friends.' = I have a squad!)*",
      examples: [
        { text: "Few people came. (The room was empty)", isCorrect: true },
        { text: "A few people came. (We had a party)", isCorrect: true }
      ]
    },
    {
      title: 'The Emotional "A": Little vs. A Little',
      content: "The same rule applies to Uncountable nouns.\n\n1. **Little (Without 'A'):** Negative. 'Not much'.\n*(Example: 'There is little hope.' = We might fail.)*\n\n2. **A Little (With 'A'):** Positive. 'Some'.\n*(Example: 'There is a little hope.' = We can do this!)*",
      examples: [
        { text: "I have **little** money. (I'm broke)", isCorrect: true },
        { text: "I have **a little** money. (Let's buy snacks)", isCorrect: true }
      ]
    },
    {
      title: 'The "Total" Concept: The Few / The Little',
      content: "This is a specific usage. It means **'Not much/many, but ALL that there is'**.\n\nYou use it when referring to the *entirety* of a small amount.\n\n- **The few:** 'I read **the few** books I own.' (I don't have many, but I read ALL of them).\n- **The little:** 'He spent **the little** money he had.' (He didn't have much, but he spent ALL of it).",
      examples: [
        { text: "**The few** friends he has are loyal.", isCorrect: true },
        { text: "She drank **the little** water left in the bottle.", isCorrect: true }
      ]
    },
    {
      title: 'Tricky Uncountables List',
      content: "Memorize these! They look like they should be countable, but they are NOT.\n\n- **News** (Ends in S, but is singular/uncountable!)\n- **Information** (Never say 'an information')\n- **Advice** (Never say 'an advice')\n- **Hair** (Unless talking about a single strand)\n- **Bread / Toast** (Use 'slices of')",
      examples: [
        { text: "The news **is** good.", isCorrect: true },
        { text: "The news **are** good.", isCorrect: false },
        { text: "Can you give me **some** advice?", isCorrect: true }
      ]
    },
    {
      title: 'Excess: Too Much vs. Too Many',
      content: "When you have too of something (a bad amount), the rule stays the same.\n\n- **Too Many:** For Countable things.\n- **Too Much:** For Uncountable things.",
      examples: [
        { text: "You ate **too many** cookies. (Countable)", isCorrect: true },
        { text: "You ate **too much** cake. (Uncountable mass)", isCorrect: true }
      ]
    }
  ]
};