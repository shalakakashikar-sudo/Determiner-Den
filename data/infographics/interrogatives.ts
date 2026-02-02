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
      "**THE BIG THREE**: Only *What*, *Which*, and *Whose* can function as Interrogative Determiners.",
      "**POSITION**: They MUST sit immediately BEFORE the noun they are modifying.",
      "**WHAT (UNLIMITED)**: Use for general inquiries with infinite possible answers.",
      "**WHICH (LIMITED)**: Use when choosing from a specific, limited set of options.",
      "**WHOSE (POSSESSION)**: Asks about the owner of the following noun.",
      "**INDIRECT USE**: They can appear in statements too (*I don't know whose bag this is*)."
    ],
    examples: [
      { label: "General", text: "**What** movie do you want to see? (Any movie)" },
      { label: "Specific Set", text: "**Which** movie is better, the first or second?" },
      { label: "Ownership", text: "**Whose** footprints are these?" },
      { label: "Classification", text: "**What** kind of bird is that?" }
    ],
    mistakes: [
      { bad: "Who's house is that?", good: "Whose house is that?", reason: "'Who's' is 'Who is'. You need the possessive determiner 'Whose'." },
      { bad: "Which is your phone number?", good: "What is your phone number?", reason: "Since there are millions of possible numbers, 'What' is the standard choice." },
      { bad: "What book you like?", good: "What book do you like?", reason: "Don't forget the auxiliary verb 'do' in questions!" },
      { bad: "When time is it?", good: "What time is it?", reason: "'When' is an adverb, not a determiner. Use 'What' to modify 'time'." }
    ]
  },

  learnSlides: [
    {
      title: 'The Big Three',
      content: "In the world of determiners, there are only **three** question words that can modify a noun directly:\n\n1. **What**\n2. **Which**\n3. **Whose**\n\nOther question words like *When*, *Where*, *Why*, and *How* are adverbs—they can't be determiners because they don't sit in front of a noun!",
      examples: [
        { text: "**What** car? (Determiner)", isCorrect: true },
        { text: "**Where** car? (Incorrect)", isCorrect: false },
        { text: "**Whose** car? (Determiner)", isCorrect: true }
      ],
      didYouKnow: "If you can't put a noun right after the question word, it isn't an interrogative determiner!"
    },
    {
      title: 'The Noun Check',
      content: "How do you know if these words are acting as **Determiners** or **Pronouns**?\n\n- **Determiner:** Followed by a noun. (*What color?*)\n- **Pronoun:** Stands alone. (*What is that?*)\n\nIn this app, we focus on the **Determiner** version, where the question word leads the noun into the sentence.",
      examples: [
        { text: "**Which** book do you want? (Determiner)", isCorrect: true },
        { text: "**Which** is yours? (Pronoun)", isCorrect: true }
      ]
    },
    {
      title: 'What: The Open Choice',
      content: "Use **What** when you are asking a general question and the answer could be *anything*.\n\nThere is no 'list' in the speaker's mind. You are asking for information from the whole world.\n\n- **General:** 'What color do you like?'\n- **Identification:** 'What time is it?'",
      examples: [
        { text: "**What** size do you need?", isCorrect: true },
        { text: "**What** subject is your favorite?", isCorrect: true }
      ]
    },
    {
      title: 'Which: The Limited Choice',
      content: "Use **Which** when there is a **limited selection** of choices. \n\nMaybe the choices are on a table, in a menu, or were just mentioned in the conversation. You are asking the listener to pick from a specific set.",
      examples: [
        { text: "**Which** twin is older?", isCorrect: true },
        { text: "**Which** road should we take, left or right?", isCorrect: true }
      ],
      didYouKnow: "If you can point to the options, 'Which' is usually the better choice!"
    },
    {
      title: 'What vs. Which: The Nuance',
      content: "Sometimes both are okay, but the meaning changes slightly!\n\n- **'What bus goes to London?'** (Asking about the whole bus system).\n- **'Which bus goes to London?'** (Asking about the three buses parked in front of us).\n\nWhen the choice is very small (2 or 3), **Which** is strictly preferred.",
      examples: [
        { text: "**What** fruit do you like?", isCorrect: true },
        { text: "**Which** fruit do you want, the apple or the pear?", isCorrect: true }
      ]
    },
    {
      title: 'Whose: The Owner Finder',
      content: "**Whose** is the interrogative version of possessives like *My* or *His*.\n\nIt asks about ownership or relationship to the noun that follows it. \n\n- **Pattern:** Whose + Noun + Auxiliary + Subject + Verb?",
      examples: [
        { text: "**Whose** phone is this?", isCorrect: true },
        { text: "**Whose** child is that?", isCorrect: true }
      ],
      didYouKnow: "Whose can be used for things too, like 'Whose handle is broken?' (referring to a cup)."
    },
    {
      title: 'Whose vs. Who\'s (The Spelling Trap)',
      content: "Never let these two confuse your roar! They sound identical.\n\n- **Whose:** Ownership Determiner. (*Whose cat?*)\n- **Who's:** Contraction of 'Who is' or 'Who has'. (*Who's hungry?*)\n\n**The Trick:** If you can say 'Who is', use Who's. If you can't, use Whose!",
      examples: [
        { text: "**Whose** team are you on?", isCorrect: true },
        { text: "**Who's** on your team?", isCorrect: true },
        { text: "**Who's** team are you on?", isCorrect: false }
      ]
    },
    {
      title: 'Interrogative Phrases',
      content: "We often combine 'What' and 'Which' with other words to be even more specific:\n\n- **What kind/sort/type of...**\n- **Which one of...**\n\nThese phrases act like one big determiner unit to narrow down the hunt.",
      examples: [
        { text: "**What kind of** lion are you?", isCorrect: true },
        { text: "**Which one of** these cubs is yours?", isCorrect: true }
      ]
    },
    {
      title: 'Indirect Questions (Statements)',
      content: "Interrogative determiners don't always appear in questions with question marks! \n\nThey can be used in statements to show that you don't know something or are describing a choice. \n\n*Note:* The word order changes to **Subject + Verb** (not Verb + Subject).",
      examples: [
        { text: "I don't know **which** way to go.", isCorrect: true },
        { text: "Tell me **what** time it starts.", isCorrect: true },
        { text: "I asked **whose** car it was.", isCorrect: true }
      ]
    },
    {
      title: 'Exclamatory "What"',
      content: "Surprise! **What** has a secret identity. It can also be used as an 'Exclamatory Determiner' to show strong emotion.\n\n- **Pattern:** What + (A/An) + Adjective + Noun!\n- **Example:** What a beautiful mane!",
      examples: [
        { text: "**What** a disaster!", isCorrect: true },
        { text: "**What** lovely weather!", isCorrect: true }
      ],
      didYouKnow: "This is the only time an interrogative word doesn't actually ask a question!"
    }
  ],
  quiz: interrogativesQuiz
};
