import { ModuleData } from '../../types.ts';
import { distributivesQuiz } from '../quizzes/distributives.ts';

export const distributivesModule: ModuleData = {
  id: 'distributives',
  name: 'Distributives',
  icon: 'fa-arrows-to-circle',
  color: 'bg-teal-500',
  difficulty: 'Intermediate',
  description: 'Master the group dividers: Each, Every, Either, and Neither.',
  mascotIntro: "The herd is big, but we must look at them one by one! Let's divide the group.",
  
  infographic: {
    title: "Group Splitters",
    color: "bg-teal-500",
    rules: [
      "**SINGULARITY**: Distributives are grammatically SINGULAR. Always use singular verbs (is, has, walks).",
      "**EACH**: Focuses on individual members (One by one).",
      "**EVERY**: Focuses on the whole group (All together).",
      "**EITHER / NEITHER**: Only used for pairs (2 things).",
      "**THE 'OF' RULE**: You can say 'Each of', but NEVER 'Every of'."
    ],
    examples: [
      { label: "Individual", text: "**Each** cub has a name." },
      { label: "Group", text: "**Every** lion roars." },
      { label: "Choice (2)", text: "You can take **either** path." }
    ],
    mistakes: [
      { bad: "Every of the cubs", good: "Each of the cubs", reason: "'Every' is shy! It cannot stand next to 'of'. Use 'Everyone of' or 'Each of'." },
      { bad: "Every students are here.", good: "Every student is here.", reason: "Even though it means 'all', the grammar treats it as singular." },
      { bad: "Neither of the three.", good: "None of the three.", reason: "Neither is only for two options." }
    ]
  },

  learnSlides: [
    {
      title: 'What are Distributives?',
      content: "Distributives are words that look at a group, but treat the members **individually** rather than as a mass.\n\nImagine a teacher checking attendance. She looks at the whole class, but calls out names one by one. That is a distributive!",
      examples: [
        { text: "All the students passed. (Group focus)", isCorrect: true },
        { text: "Each student passed. (Individual focus)", isCorrect: true }
      ],
      didYouKnow: "They are called 'Distributives' because they distribute the action to each person separately."
    },
    {
      title: 'The Golden Rule: Think Singular',
      content: "This is the most important grammar rule here: **Distributives are always Singular.**\n\nEven if 'Every student' sounds like 100 people, grammatically we treat it as **one student at a time**.\n\n- **Correct:** Every child *likes* ice cream.\n- **Wrong:** Every child *like* ice cream.",
      examples: [
        { text: "Each of them **is** ready.", isCorrect: true },
        { text: "Each of them **are** ready.", isCorrect: false },
        { text: "Every day **is** a gift.", isCorrect: true }
      ]
    },
    {
      title: 'Each vs. Every: The Difference',
      content: "They are very similar, but have a tiny difference:\n\n1. **Each:** Think of a small number. We focus on the individual. (e.g., 'Each eye', 'Each earring').\n2. **Every:** Think of a large number. We focus on the total group. (e.g., 'Every person on Earth').",
      examples: [
        { text: "I wear a bracelet on **each** wrist. (Only 2 wrists)", isCorrect: true },
        { text: "**Every** drop of rain counts. (Millions of drops)", isCorrect: true }
      ]
    },
    {
      title: 'The "Of" Trap',
      content: "This is a common exam trap!\n\n- You CAN say: **Each of** the boys.\n- You CANNOT say: **Every of** the boys.\n\nIf you want to use 'of' with Every, you must say 'Every **one** of'.",
      examples: [
        { text: "Each of the cars is red.", isCorrect: true },
        { text: "Every of the cars is red. (Incorrect)", isCorrect: false },
        { text: "Every one of the cars is red. (Correct)", isCorrect: true }
      ]
    },
    {
      title: 'Either & Neither (The Power of Two)',
      content: "These words are exclusive to the number **TWO**.\n\n- **Either:** One OR the other (A or B).\n- **Neither:** Not one AND not the other (Zero).\n\nIf you have 3 or more options, use **Any** or **None**.",
      examples: [
        { text: "Do you want tea or coffee? **Either** is fine. (I'm happy with one)", isCorrect: true },
        { text: "I want **neither**. (I want zero)", isCorrect: true },
        { text: "Neither of my three friends came.", isCorrect: false } // Should be 'None'
      ],
      didYouKnow: "Pronunciation tip: You can say 'Ee-ther' or 'Eye-ther'. Both are correct!"
    }
  ],
  quiz: distributivesQuiz
};