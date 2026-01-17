import { ModuleData } from '../../types.ts';
import { interrogativesQuiz } from '../quizzes/interrogatives.ts';

export const interrogativesModule: ModuleData = {
  id: 'interrogatives',
  name: 'Interrogatives',
  icon: 'fa-question-circle',
  color: 'bg-blue-500',
  difficulty: 'Beginner',
  description: 'Master the art of asking: What, Which, and Whose.',
  mascotIntro: "Questions guide our path! But asking 'Which' is very different from asking 'What'. Let's find out why.",
  
  infographic: {
    title: "The Question Creators",
    color: "bg-blue-500",
    rules: [
      "**POSITION**: They must sit immediately BEFORE the noun they ask about.",
      "**WHAT**: Used for unlimited, open-ended choices.",
      "**WHICH**: Used for a limited list or specific set of options.",
      "**WHOSE**: Used to ask about ownership (Possession).",
      "**PRONUNCIATION**: 'Whose' and 'Who's' sound the same, but spell them carefully!"
    ],
    examples: [
      { label: "Unlimited", text: "**What** music do you like? (Any genre)" },
      { label: "Limited", text: "**Which** song is this? (On this album)" },
      { label: "Ownership", text: "**Whose** phone is ringing?" }
    ],
    mistakes: [
      { bad: "Who's coat is this?", good: "Whose coat is this?", reason: "'Who's' means 'Who is'. You are asking about the owner, so use 'Whose'." },
      { bad: "Which is your name?", good: "What is your name?", reason: "Names are unlimited options, so we use 'What'." },
      { bad: "What of these three?", good: "Which of these three?", reason: "When picking from a small group, always use 'Which'." }
    ]
  },

  learnSlides: [
    {
      title: 'What is an Interrogative Determiner?',
      content: "These are special words we use to ask questions about a specific noun.\n\nTo be a **Determiner**, the question word must come **immediately before** the noun.\n\n- **Determiner:** **Which** *car* do you like? (Modifies 'car')\n- **Pronoun:** **Which** do you like? (Stands alone)",
      examples: [
        { text: "**What** time is it?", isCorrect: true },
        { text: "**Whose** turn is it?", isCorrect: true },
        { text: "**Who** is it? (Pronoun - not a determiner)", isCorrect: true }
      ],
      didYouKnow: "Interrogative comes from 'Interrogate', which means to ask questions."
    },
    {
      title: 'The Great Debate: What vs. Which',
      content: "Students often confuse these. Here is the secret:\n\n1. **What (Open):** Use when the answer could be *anything* in the world.\n2. **Which (Closed):** Use when there is a *limited selection* (like a menu, a few items on a table, or a specific group).",
      examples: [
        { text: "**What** is your favorite color? (Pick from all colors)", isCorrect: true },
        { text: "**Which** color do you want—red or blue? (Pick from these two)", isCorrect: true }
      ]
    },
    {
      title: 'Whose vs. Who\'s',
      content: "These words sound exactly the same, but look at the spelling!\n\n- **Whose:** Asks about possession (My, Your, His).\n- **Who's:** Short for 'Who is' or 'Who has'.\n\n**Test:** If you can say 'Who is coat is this?', use Who's. (That makes no sense, so use Whose!)",
      examples: [
        { text: "**Whose** shoes are these? (They are mine)", isCorrect: true },
        { text: "**Who's** that girl? (Who is that girl)", isCorrect: true }
      ]
    },
    {
      title: 'Indirect Questions',
      content: "We also use these words in the middle of sentences to express doubt or a choice. This is called an 'Indirect Question'.\n\nThe grammar rule stays the same: Determiner + Noun.",
      examples: [
        { text: "I don't know **which** road to take.", isCorrect: true },
        { text: "I wonder **whose** dog is barking.", isCorrect: true },
        { text: "Tell me **what** flavor you want.", isCorrect: true }
      ]
    }
  ],
  quiz: interrogativesQuiz
};