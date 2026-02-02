import { ModuleData } from '../../types.ts';
import { quantifiersQuiz } from '../quizzes/quantifiers.ts';

export const quantifiersModule: ModuleData = {
  id: 'quantifiers',
  name: 'Quantifiers',
  icon: 'fa-chart-pie',
  color: 'bg-green-500',
  difficulty: 'Advanced',
  description: 'Master complex counting: Much, Many, Some, Any, and the tricky nuances of quantity.',
  mascotIntro: "English math is strange. We count dollars, but not money! Let's solve this puzzle together.",
  quiz: quantifiersQuiz,
  
  infographic: {
    title: "The Quantity Lab",
    color: "bg-green-500",
    rules: [
      "**COUNT TEST**: Check if the noun is Countable (1, 2, 3) or Uncountable (Mass/Concept).",
      "**MANY vs MUCH**: 'Many' for countables, 'Much' for uncountables.",
      "**PARTITIVES**: Use 'Counting Bridges' (a piece of, a loaf of) to count the uncountable.",
      "**FEWER vs LESS**: 'Fewer' for countable items; 'Less' for bulk, mass, or time.",
      "**THE 'A' DIFFERENCE**: 'A few/little' = some (happy). 'Few/little' = not enough (sad).",
      "**ENOUGH**: Place 'Enough' AFTER adjectives but BEFORE nouns."
    ],
    examples: [
      { label: "Countable", text: "**Many** lions are in the pride." },
      { label: "Uncountable", text: "There isn't **much** water in the watering hole." },
      { label: "The Bridge", text: "Two **pieces of** information." },
      { label: "Comparison", text: "There are **fewer** trees here." },
      { label: "Sufficiency", text: "This mane is big **enough**." }
    ],
    mistakes: [
      { bad: "Can I have an advice?", good: "Can I have a piece of advice?", reason: "Advice is uncountable. You need a 'piece' to make it a countable unit." },
      { bad: "I have less problems.", good: "I have fewer problems.", reason: "Problems are countable. Use 'Fewer'." },
      { bad: "I have a news.", good: "I have some news.", reason: "News is uncountable! Use 'some' or 'a bit of news'." },
      { bad: "There were much people.", good: "There were many people.", reason: "People is the plural of person (countable)." },
      { bad: "He is enough tall.", good: "He is tall enough.", reason: "'Enough' goes AFTER describing words (adjectives)." }
    ]
  },

  learnSlides: [
    {
      title: 'Step 1: The "Count" Test',
      content: "Before choosing a word, look at the noun. Can you count it on your fingers?\n\n1. **Countable (Distinct items):** Cup, Friend, Idea, Dollar, Job.\n*(Plural: Cups, Friends, Ideas)*\n\n2. **Uncountable (Stuff/Concepts):** Water, Bread, Money, Work, Advice, News.\n*(Plural: NEVER! You cannot say 'Waters' or 'Advices' in standard English)*",
      examples: [
        { text: "I have **one** job. (Countable)", isCorrect: true },
        { text: "I have **much** work. (Uncountable)", isCorrect: true },
        { text: "I have **two** works. (Incorrect)", isCorrect: false }
      ],
      didYouKnow: "Furniture is uncountable! It refers to the *category*. You buy 'Three chairs', but 'Some furniture'."
    },
    {
      title: 'The Counting Bridge: Partitive Phrases',
      content: "How do we count things that are 'uncountable'? We use a **Counting Bridge** (Partitive Phrase)!\n\nInstead of counting the 'mass', we count a specific **unit**, **container**, or **piece** of it. This turns a 'mass noun' into a 'count noun' structure.\n\n**Common 'Pieces' of the Uncountable:**\n- **Information/Advice/News**: A *piece* of... / A *bit* of...\n- **Bread**: A *loaf* of... / A *slice* of...\n- **Water/Juice**: A *glass* of... / A *bottle* of...\n- **Paper**: A *sheet* of... / A *ream* of...\n- **Soap**: A *bar* of... / A *cake* of...\n- **Furniture**: An *item* of... / A *piece* of...\n- **Chocolate**: A *square* of... / A *bar* of...\n- **Rice/Sand**: A *grain* of...\n- **Lightning**: A *bolt* of... / A *flash* of...\n- **Thunder/Applause**: A *clap* of...\n- **Luck**: A *stroke* of... / A *run* of...\n- **Anger/Giggles**: A *fit* of...\n- **Clothing**: An *item* of...",
      examples: [
        { text: "He gave me **three pieces of** advice.", isCorrect: true },
        { text: "He gave me **three advices**. (Incorrect)", isCorrect: false },
        { text: "I bought **two loaves of** bread.", isCorrect: true }
      ],
      didYouKnow: "Even abstract feelings can have partitives! You can have 'a fit of anger' or 'a spark of hope'."
    },
    {
      title: 'Many vs. Much (The Big Divide)',
      content: "Once you know the noun type, pick your team:\n\n- **Countable Team:** Use **Many**.\n*(How many cousins do you have?)*\n\n- **Uncountable Team:** Use **Much**.\n*(How much sugar do you want?)*\n\n**Hack:** **'A lot of'** works for BOTH teams! Use it when you are unsure or want to sound natural in casual speech.",
      examples: [
        { text: "There are **many** stars.", isCorrect: true },
        { text: "There is **much** light.", isCorrect: true },
        { text: "There is **a lot of** light.", isCorrect: true }
      ]
    },
    {
      title: 'Fewer vs. Less: The Classic Battle',
      content: "This is one of the most common mistakes in English!\n\n- **Fewer:** Use for things you can count (Plural nouns).\n*(Fewer people, Fewer cars, Fewer ingredients)*\n\n- **Less:** Use for things you cannot count (Uncountable nouns).\n*(Less time, Less water, Less money, Less stress)*\n\n**Wait!** We also use **Less** for units of distance, time, and money when they are seen as a total amount.\n- 'It is **less** than 5 miles.'\n- 'I have **less** than $10.'",
      examples: [
        { text: "I have **fewer** coins than you.", isCorrect: true },
        { text: "I have **less** money than you.", isCorrect: true },
        { text: "I have **less** coins. (Incorrect)", isCorrect: false }
      ],
      didYouKnow: "Check your local supermarket! If the sign says '10 items or less', it's actually grammatically wrong—it should be '10 items or fewer'!"
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
      title: 'Enough & Plenty (Sufficiency)',
      content: "These tell us if we have enough of something.\n\n- **Enough:** Means a sufficient amount. It goes **BEFORE** nouns but **AFTER** adjectives.\n*(Enough food vs. Fast enough)*\n\n- **Plenty of:** Means more than enough. It works for both count and uncount nouns.\n*(Plenty of time, Plenty of friends)*",
      examples: [
        { text: "We have **enough** time.", isCorrect: true },
        { text: "This car isn't fast **enough**.", isCorrect: true },
        { text: "There are **plenty of** seats.", isCorrect: true }
      ]
    },
    {
      title: 'The Emotional "A": Few vs. A Few',
      content: "One tiny letter changes the meaning from Sad to Happy! (For Countable Nouns)\n\n1. **Few (Without 'A'):** Negative. It means 'Not many' and implies 'I wish I had more'.\n*(Example: 'I have few friends.' = I am lonely.)*\n\n2. **A Few (With 'A'):** Positive. It means 'A small number, but enough'.\n*(Example: 'I have a few friends.' = I have a squad!)*",
      examples: [
        { text: "Few people came. (The room was empty/disappointing)", isCorrect: true },
        { text: "A few people came. (We had a nice small gathering)", isCorrect: true }
      ]
    },
    {
      title: 'The Emotional "A": Little vs. A Little',
      content: "The same rule applies to Uncountable nouns.\n\n1. **Little (Without 'A'):** Negative. 'Almost none'.\n*(Example: 'There is little hope.' = We are likely to fail.)*\n\n2. **A Little (With 'A'):** Positive. 'Some'.\n*(Example: 'There is a little hope.' = There is still a chance!)*",
      examples: [
        { text: "I have **little** money. (I'm broke/can't afford it)", isCorrect: true },
        { text: "I have **a little** money. (I can buy a small snack)", isCorrect: true }
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
      title: 'The Spectrum: All to None',
      content: "Think of quantifiers on a scale from 100% to 0%:\n\n- **100%:** All\n- **90%:** Most\n- **70%:** Many / A lot of\n- **50%:** Some / Half\n- **20%:** A few / A little\n- **5%:** Few / Little\n- **0%:** No / None",
      examples: [
        { text: "**All** lions are cats.", isCorrect: true },
        { text: "**Most** cats like fish.", isCorrect: true },
        { text: "**No** cats like swimming. (Generally speaking)", isCorrect: true }
      ]
    },
    {
      title: 'Quantifier Phrases with "Of"',
      content: "Some quantifiers need the word 'of' when followed by a specific group.\n\n- **A lot of / Lots of:** Casual, for both types.\n- **A great deal of:** Formal, for **Uncountables** only.\n- **A large number of:** Formal, for **Countables** only.\n- **A majority of:** For Countables.",
      examples: [
        { text: "He has **a great deal of** patience.", isCorrect: true },
        { text: "There are **a large number of** stars.", isCorrect: true },
        { text: "**Lots of** people are here.", isCorrect: true }
      ]
    },
    {
      title: 'Tricky Uncountables List',
      content: "Memorize these! They look like they should be countable, but they are NOT.\n\n- **News** (Ends in S, but is singular/uncountable!)\n- **Information** (Never say 'an information')\n- **Advice** (Never say 'an advice')\n- **Hair** (Unless talking about a single strand)\n- **Equipment** (Never say 'equipments')\n- **Luggage** (Never say 'luggages')\n- **Knowledge** (Never say 'knowledges')\n- **Luck** (Never say 'lucks')",
      examples: [
        { text: "The news **is** good.", isCorrect: true },
        { text: "Can you give me **some** advice?", isCorrect: true },
        { text: "We have **too much** luggage.", isCorrect: true }
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