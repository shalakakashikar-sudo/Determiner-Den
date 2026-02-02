import { ModuleData } from '../../types.ts';
import { distributivesQuiz } from '../quizzes/distributives.ts';

export const distributivesModule: ModuleData = {
  id: 'distributives',
  name: 'Distributives',
  icon: 'fa-arrows-to-circle',
  color: 'bg-teal-500',
  difficulty: 'Intermediate',
  description: 'Master the group dividers: Each, Every, Either, and Neither.',
  mascotIntro: "The herd is big, but we must look at them one by one! Let's divide the group and master the rules of separation.",
  
  infographic: {
    title: "Group Splitters & Dividers",
    color: "bg-teal-500",
    rules: [
      "**SINGULARITY**: Distributives are grammatically SINGULAR. Use singular verbs (*is, has, walks*).",
      "**EACH (2+)**: Used for specific, small groups. Focuses on individual members (One by one).",
      "**EVERY (3+)**: Used for large groups or generalizations. Focuses on the whole group (All together).",
      "**EITHER / NEITHER**: Strictly for pairs (exactly 2 things). No more, no less!",
      "**THE MODIFIER RULE**: Use 'Every' (not 'Each') after words like *nearly, almost,* or *practically*.",
      "**PRONOUN STATUS**: 'Each' can stand alone (*Each was given a prize*). 'Every' CANNOT."
    ],
    examples: [
      { label: "Individual", text: "**Each** lion has unique spots." },
      { label: "Frequency", text: "I roar **every** three hours." },
      { label: "Binary Choice", text: "You can take **either** path." },
      { label: "Floating Each", text: "They cost ten dollars **each**." },
      { label: "Nearly Rule", text: "Almost **every** cub is asleep." }
    ],
    mistakes: [
      { bad: "Every of the cubs", good: "Each of the cubs", reason: "'Every' is shy! It cannot stand next to 'of'. Use 'Every one of' or 'Each of'." },
      { bad: "Neither of the three.", good: "None of the three.", reason: "Neither is ONLY for two options. For 3+, use 'None'." },
      { bad: "Nearly each student.", good: "Nearly every student.", reason: "Adverbs like 'nearly' or 'almost' are best friends with 'Every', not 'Each'." },
      { bad: "Every lions are here.", good: "Every lion is here.", reason: "Distributives are singular determiners. They need singular nouns and verbs." }
    ]
  },

  learnSlides: [
    {
      title: 'What are Distributives?',
      content: "Distributives are words that look at a group but treat the members **individually**. \n\nImagine a pride of lions. If you say 'All lions', you are looking at the whole crowd. If you say 'Each lion', you are looking at one lion... then the next... then the next.",
      examples: [
        { text: "All the students passed. (Group focus)", isCorrect: true },
        { text: "Each student passed. (Individual focus)", isCorrect: true }
      ],
      didYouKnow: "They are called 'Distributives' because they distribute the action to each person separately, like handing out mail."
    },
    {
      title: 'The Golden Rule: Think Singular',
      content: "This is the most important rule: **Distributives are grammatically Singular.**\n\nEven if 'Every student' implies a hundred people, we treat it as **one student at a time**.\n\n- **Rule:** Use a singular noun and a singular verb.\n- **Example:** Every student *is* present (Not *are*).",
      examples: [
        { text: "Each of them **is** ready.", isCorrect: true },
        { text: "Each of them **are** ready.", isCorrect: false },
        { text: "Neither road **leads** to the city.", isCorrect: true }
      ]
    },
    {
      title: 'Each vs. Every: Group Size',
      content: "They seem the same, but they have different 'territories':\n\n1. **Each:** Used for **two or more** items. We use it when the group is small or specifically known.\n2. **Every:** Used for **three or more** items. We use it for larger groups or when we don't know the exact number.",
      examples: [
        { text: "I have a ring on **each** hand. (Correct - only 2 hands)", isCorrect: true },
        { text: "I have a ring on **every** hand. (Incorrect - implies many hands!)", isCorrect: false }
      ],
      didYouKnow: "You can't use 'Every' for 2 items. It's 'Each' or 'Both' for the win!"
    },
    {
      title: 'The Modifier Nuance',
      content: "This is a high-level secret! Adverbs like **Almost**, **Nearly**, and **Practically** can only be used with **Every**.\n\nThey describe a percentage of a 'whole', and since 'Every' focuses on the group-as-a-whole, it is the only one that fits.",
      examples: [
        { text: "Almost **every** student passed.", isCorrect: true },
        { text: "Almost **each** student passed.", isCorrect: false },
        { text: "Practically **every** lion roars.", isCorrect: true }
      ]
    },
    {
      title: 'Pronoun vs. Determiner',
      content: "**Each** is very strong—it can stand alone as a pronoun. \n**Every** is dependent—it **always** needs a noun following it.\n\n- **Each:** 'There are two cakes. **Each** costs $5.' (Correct)\n- **Every:** 'There are two cakes. **Every** costs $5.' (Incorrect - Every what?)",
      examples: [
        { text: "I gave **each** a prize. (Correct)", isCorrect: true },
        { text: "I gave **every** a prize. (Incorrect)", isCorrect: false }
      ]
    },
    {
      title: 'The "Of" Trap',
      content: "When using the 'Of' construction, the noun becomes plural, but the verb **stays singular**!\n\n- **Pattern:** Each of + Plural Noun + Singular Verb\n- **Rule:** You can say 'Each of', but you **cannot** say 'Every of'. You must say 'Every one of'.",
      examples: [
        { text: "Each of the lions **is** brave.", isCorrect: true },
        { text: "Every one of the lions **is** brave.", isCorrect: true },
        { text: "Every of the lions is brave.", isCorrect: false }
      ]
    },
    {
      title: 'Either & Neither (The Binary Choice)',
      content: "These are strictly for **PAIRS** (2 things).\n\n1. **Either:** One or the other (Choice). \n2. **Neither:** Not one and not the other (Zero).\n\n**Nuance:** In formal writing, use a singular verb. In casual speech, people often use plural verbs, but for exams, **stay singular**!",
      examples: [
        { text: "**Neither** candidate is qualified.", isCorrect: true },
        { text: "**Neither of** the candidates are qualified. (Casual only)", isCorrect: true }
      ]
    },
    {
      title: 'Floating "Each"',
      content: "Unlike 'Every', the word 'Each' can 'float' around the sentence for different meanings.\n\n- **Subject Focus:** 'The lions **each** have a cub.'\n- **Price Focus:** 'The apples are 50 cents **each**.'\n- **Indirect Object:** 'I gave them $5 **each**.'",
      examples: [
        { text: "They **each** received a medal.", isCorrect: true },
        { text: "The tickets cost $20 **every**. (Incorrect)", isCorrect: false }
      ]
    },
    {
      title: 'Every: Frequency & Numbers',
      content: "We use 'Every' to show intervals of time or distance.\n\n- **Pattern:** Every + Number + Plural Noun.\n- **Examples:** 'Every **four years**', 'Every **two miles**'.\n\n**Note:** We can also use 'Every other' to mean skipping one.",
      examples: [
        { text: "The bus comes **every ten minutes**.", isCorrect: true },
        { text: "I visit the den **every other day**.", isCorrect: true }
      ]
    },
    {
      title: 'The Outlier: Both',
      content: "While 'Both' is a distributive (it refers to 2 things), it is the only one that is **Plural**.\n\n- **Distributive Singulars:** Each, Every, Either, Neither.\n- **Distributive Plural:** Both.\n\n**Compare:** \n- 'Each lion **is** big.'\n- 'Both lions **are** big.'",
      examples: [
        { text: "Both students **are** here.", isCorrect: true },
        { text: "Every student **is** here.", isCorrect: true }
      ]
    }
  ],
  quiz: distributivesQuiz
};
