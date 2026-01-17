import { ModuleData } from '../../types.ts';
import { demonstrativesQuiz } from '../quizzes/demonstratives.ts';

export const demonstrativesModule: ModuleData = {
  id: 'demonstratives',
  name: 'Demonstratives',
  icon: 'fa-hand-point-right',
  color: 'bg-yellow-500',
  difficulty: 'Beginner',
  description: 'Master the pointing words: This, That, These, and Those.',
  mascotIntro: "Is it close enough to touch, or far away? One or many? Let's learn to point!",
  
  infographic: {
    title: "The Pointing Matrix",
    color: "bg-yellow-500",
    rules: [
      "**THIS**: Near + Singular (Touching it).",
      "**THAT**: Far + Singular (Pointing at it).",
      "**THESE**: Near + Plural (Surrounded by them).",
      "**THOSE**: Far + Plural (Pointing at a group).",
      "**MATCHING**: Always match the number! (This Car, These Cars)."
    ],
    examples: [
      { label: "Here (1)", text: "**This** book in my hand." },
      { label: "There (1)", text: "**That** star in the sky." },
      { label: "Here (Many)", text: "**These** shoes on my feet." }
    ],
    mistakes: [
      { bad: "This eyes", good: "These eyes", reason: "Plural nouns (eyes) need plural pointers (These)." },
      { bad: "Those boy", good: "That boy", reason: "Singular noun (boy) needs a singular pointer (That)." },
      { bad: "I am John.", good: "This is John.", reason: "On the phone, we introduce ourselves with 'This'." }
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
      content: "Use **This** for things you are holding, touching, or are right next to you.\nUse **That** for things you have to point at because they are out of reach.",
      examples: [
        { text: "**This** shirt is soft. (I am wearing it)", isCorrect: true },
        { text: "**That** car is fast. (It is driving away)", isCorrect: true }
      ]
    },
    {
      title: 'Plural: These vs. Those',
      content: "Use **These** when you are surrounded by the items or holding them.\nUse **Those** when the group of items is far away from you.",
      examples: [
        { text: "**These** cookies are delicious. (On my plate)", isCorrect: true },
        { text: "Don't touch **those** wires! (Over there on the wall)", isCorrect: true },
        { text: "**This** cookies are good.", isCorrect: false }
      ]
    },
    {
      title: 'Distance in Time',
      content: "We also use these words for Time! \n\n- **This:** The present or near future (This morning, This week).\n- **That:** The past (That day, That summer).",
      examples: [
        { text: "I am busy **this** week. (Current week)", isCorrect: true },
        { text: "I remember **that** day well. (Past memory)", isCorrect: true }
      ],
      didYouKnow: "We say 'This is a great party!' (Now) but 'That was a great party!' (Yesterday)."
    },
    {
      title: 'Introductions (Phone & In-Person)',
      content: "This is a special English rule. When we introduce people (or ourselves on the phone), we use Demonstratives, not pronouns like 'He' or 'I'.\n\n- **On the Phone:** 'Hello, **this** is Leo.' (Not 'I am Leo')\n- **In Person:** 'Mom, **this** is my friend Sam.' (Not 'He is Sam')",
      examples: [
        { text: "Hello, is **that** Sarah? (On phone)", isCorrect: true },
        { text: "Yes, **this** is she.", isCorrect: true },
        { text: "I am Leo.", isCorrect: false } // In the context of picking up a phone
      ]
    },
    {
      title: 'Emotional Distance',
      content: "Sometimes we use 'That' or 'Those' to show we don't like something. We are pushing it away with our words!\n\n- **Positive:** 'I love **this** idea!' (Close to my heart)\n- **Negative:** 'I don't want to talk to **that** guy.' (Keep him away)",
      examples: [
        { text: "What is **this** mess?", isCorrect: true },
        { text: "Get **that** thing away from me.", isCorrect: true }
      ]
    }
  ],
  quiz: demonstrativesQuiz
};