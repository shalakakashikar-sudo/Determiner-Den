import { ModuleData } from '../../types.ts';
import { demonstrativesQuiz } from '../quizzes/demonstratives.ts';

export const demonstrativesModule: ModuleData = {
  id: 'demonstratives',
  name: 'Demonstratives',
  icon: 'fa-hand-point-right',
  color: 'bg-yellow-500',
  difficulty: 'Beginner',
  description: 'Master the pointing words: This, That, These, and Those.',
  mascotIntro: "Is it close enough to touch, or far away? One or many? Let's learn to point with precision!",
  
  infographic: {
    title: "The Pointing Matrix",
    color: "bg-yellow-500",
    rules: [
      "**THIS**: Near + Singular (Touching it/In my space).",
      "**THAT**: Far + Singular (Pointing away/Out of reach).",
      "**THESE**: Near + Plural (Group at my feet/In my hands).",
      "**THOSE**: Far + Plural (Group at a distance).",
      "**TIME**: Use 'This' for now/future; 'That' for the past.",
      "**IDEAS**: Use 'This' for what I am about to say; 'That' for what was just said."
    ],
    examples: [
      { label: "Here (1)", text: "**This** book in my hand." },
      { label: "There (1)", text: "**That** star in the sky." },
      { label: "Here (Many)", text: "**These** shoes on my feet." },
      { label: "Idea", text: "**That** was a great point!" }
    ],
    mistakes: [
      { bad: "This eyes", good: "These eyes", reason: "Plural nouns (eyes) need plural pointers (These)." },
      { bad: "Those boy", good: "That boy", reason: "Singular noun (boy) needs a singular pointer (That)." },
      { bad: "In these days...", good: "In those days...", reason: "When talking about the past, we use 'That' or 'Those' to show time distance." }
    ]
  },

  learnSlides: [
    {
      title: 'What are Demonstratives?',
      content: "Demonstratives act like a verbal finger. They point at specific things to tell the listener exactly **which** one you mean.\n\nThey change based on two things:\n1. **Distance:** Is it here (Near) or there (Far)?\n2. **Number:** Is it just one (Singular) or many (Plural)?",
      examples: [
        { text: "I like **this** cake. (The one I am eating)", isCorrect: true },
        { text: "I like **that** cake. (The one in the window)", isCorrect: true }
      ],
      didYouKnow: "The word 'Demonstrate' means to show clearly. That is exactly what these words do!"
    },
    {
      title: 'The "Pointer" Grid',
      content: "Memorize this simple 2x2 grid to never make a mistake:\n\n- **Near + One:** THIS (This apple)\n- **Far + One:** THAT (That apple)\n\n- **Near + Many:** THESE (These apples)\n- **Far + Many:** THOSE (Those apples)",
      examples: [
        { text: "Hold **this**. (Handing it over)", isCorrect: true },
        { text: "Look at **those** birds! (High in the sky)", isCorrect: true }
      ]
    },
    {
      title: 'Singular: This vs. That',
      content: "Use **This** for things you are holding, touching, or are right next to you (Spatial Nearness).\n\nUse **That** for things you have to point at because they are out of reach (Spatial Distance).",
      examples: [
        { text: "**This** shirt is soft. (I am wearing it)", isCorrect: true },
        { text: "**That** car is fast. (It is driving away)", isCorrect: true }
      ]
    },
    {
      title: 'Plural: These vs. Those',
      content: "Use **These** when you are surrounded by the items or holding them.\n\nUse **Those** when the group of items is far away from you.\n\n**Watch out!** Many students forget to change the noun to plural too!",
      examples: [
        { text: "**These** cookies are delicious. (On my plate)", isCorrect: true },
        { text: "Don't touch **those** wires! (Over there on the wall)", isCorrect: true },
        { text: "**This** cookies are good.", isCorrect: false }
      ]
    },
    {
      title: 'Distance in Time',
      content: "We also use these words for Time! \n\n- **This / These:** The present, the current moment, or the near future (This morning, These days).\n- **That / Those:** The past (That day, That summer, Those years).",
      examples: [
        { text: "I am busy **this** week. (Current week)", isCorrect: true },
        { text: "I remember **that** day well. (Past memory)", isCorrect: true },
        { text: "In **those** days, we had no phones.", isCorrect: true }
      ],
      didYouKnow: "We say 'This is a great party!' (Now) but 'That was a great party!' (Yesterday)."
    },
    {
      title: 'Introductions & Identification',
      content: "In English, when we introduce people or identify someone we cannot see (like on the phone or through a door), we use **This** and **That**.\n\n- **Near:** 'Hello, **this** is Leo.'\n- **Far/Unseen:** 'Who is **that** at the door?' / 'Is **that** you, Sarah?'",
      examples: [
        { text: "Hello, is **that** Sarah? (On phone)", isCorrect: true },
        { text: "Mom, **this** is my friend Sam.", isCorrect: true },
        { text: "Who is **this**? (Pointing at someone far away)", isCorrect: false }
      ]
    },
    {
      title: 'Abstract Ideas: Backward vs. Forward',
      content: "We use these words to refer to information in a conversation.\n\n- **Referring Backward (Anaphoric):** Use **That**. \n*'He lost his keys. That was a shame.'*\n\n- **Referring Forward (Cataphoric):** Use **This**.\n*'Listen to this: I just won the lottery!'*",
      examples: [
        { text: "I'm moving to London. **That** is my plan.", isCorrect: true },
        { text: "I'll tell you **this**: it won't be easy.", isCorrect: true }
      ]
    },
    {
      title: 'Emotional Distance (Attitude)',
      content: "Sometimes we use 'That' or 'Those' to show we don't like something. We are pushing it away with our words!\n\n- **Positive/Inclusive:** 'I love **this** idea!' (Close to my heart)\n- **Negative/Exclusive:** 'I don't want to talk to **that** guy.' (Keep him away)",
      examples: [
        { text: "What is **this** mess? (It's right in my face!)", isCorrect: true },
        { text: "Get **that** spider away from me.", isCorrect: true }
      ]
    },
    {
      title: 'The Contrast Slide',
      content: "When comparing two things, we often use **this** and **that** to create a clear difference between our choices.\n\n*'I prefer **this** apple to **that** one.'*\n\nIt helps the listener follow which item is being discussed as 'Option A' vs 'Option B'.",
      examples: [
        { text: "**This** car is cheap, but **that** one is better.", isCorrect: true },
        { text: "**These** shoes are okay, but I like **those** more.", isCorrect: true }
      ]
    },
    {
      title: 'Tricky Nouns: Singular or Plural?',
      content: "Remember, the Demonstrative must match the **Grammar**, not just the number of objects you see!\n\n- **Plural only:** These trousers, those scissors, these glasses.\n- **Uncountable (Singular):** This news, that information, this furniture.",
      examples: [
        { text: "**This** news is shocking.", isCorrect: true },
        { text: "**Those** news are shocking.", isCorrect: false },
        { text: "Pass me **those** scissors.", isCorrect: true }
      ],
      didYouKnow: "'News' looks plural because of the 's', but it is a singular uncountable noun. It always takes 'This' or 'That'!"
    }
  ],
  quiz: demonstrativesQuiz
};
