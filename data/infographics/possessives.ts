
import { ModuleData } from '../../types.ts';
import { possessivesQuiz } from '../quizzes/possessives.ts';

export const possessivesModule: ModuleData = {
  id: 'possessives',
  name: 'Possessives',
  icon: 'fa-id-badge',
  color: 'bg-amber-600',
  difficulty: 'Intermediate',
  description: 'Master ownership: My, Your, His, Her, Its, Our, Their.',
  mascotIntro: "This is my mane. That is your screen. Who owns what? Let's sort it out!",
  quiz: possessivesQuiz,
  
  infographic: {
    title: "The Ownership Den",
    color: "bg-amber-600",
    rules: [
      "**POSITION**: Always comes BEFORE the noun (My car).",
      "**GENDER**: Matches the OWNER, not the object owned.",
      "**PLURALS**: Never adds an 's' (No 'Ours house', just 'Our house').",
      "**ITS vs IT'S**: 'Its' = Owned by it. 'It's' = It is.",
      "**NO APOSTROPHES**: Possessive determiners NEVER use apostrophes."
    ],
    examples: [
      { label: "Male Owner", text: "**His** sister is tall." },
      { label: "Female Owner", text: "**Her** brother is short." },
      { label: "Animal/Thing", text: "The tree lost **its** leaves." }
    ],
    mistakes: [
      { bad: "The cat licked it's paw.", good: "The cat licked its paw.", reason: "Don't let the apostrophe fool you! 'It's' means 'It is'." },
      { bad: "This is mine book.", good: "This is my book.", reason: "'Mine' stands alone. 'My' helps the noun." },
      { bad: "They're house.", good: "Their house.", reason: "'They're' means 'They are'. Use 'Their' for ownership." }
    ]
  },

  // Removed duplicate quiz property here to fix the compilation error
  learnSlides: [
    {
      title: 'What is a Possessive Determiner?',
      content: "These are words that sit in front of a noun to tell us **who it belongs to**.\n\nThey replace articles. You cannot say 'The My Car'. You must choose: 'The Car' (Specific) or 'My Car' (Possessed).",
      examples: [
        { text: "Where is **my** phone?", isCorrect: true },
        { text: "Where is **the my** phone?", isCorrect: false },
        { text: "Is this **your** pen?", isCorrect: true }
      ],
      didYouKnow: "In English, possessives don't change if the noun is plural! We say 'My cat' and 'My cats' (unlike French or Spanish)."
    },
    {
      title: 'The Gender Rule',
      content: "This is very important! In English, the possessive word matches the **gender of the OWNER**, not the object.\n\n- If **John** (boy) has a sister, she is **his** sister.\n- If **Mary** (girl) has a brother, he is **her** brother.",
      examples: [
        { text: "The boy loves **his** mother.", isCorrect: true },
        { text: "The girl loves **her** father.", isCorrect: true },
        { text: "The table lost **its** leg. (Neutral object)", isCorrect: true }
      ]
    },
    {
      title: 'Determiner vs. Pronoun',
      content: "Don't confuse them! They mean the same thing, but act differently.\n\n1. **Determiner (Weak):** Needs a noun. (This is **my** book).\n2. **Pronoun (Strong):** Stands alone. (This book is **mine**).",
      examples: [
        { text: "That is **her** car.", isCorrect: true },
        { text: "That car is **hers**.", isCorrect: true },
        { text: "That is **hers** car. (Incorrect)", isCorrect: false }
      ]
    },
    {
      title: 'The #1 Mistake: Its vs. It\'s',
      content: "Even native speakers get this wrong! \n\n- **Its** (No apostrophe) = Belonging to it. (Like His/Her)\n- **It's** (With apostrophe) = It is / It has.\n\n**The Test:** Can you replace it with 'It is'?\n- 'The dog wagged **it is** tail' -> NO. So use **Its**.\n- '**It is** a sunny day' -> YES. So use **It's**.",
      examples: [
        { text: "The robot lost **its** battery.", isCorrect: true },
        { text: "**It's** raining outside.", isCorrect: true }
      ]
    },
    {
      title: 'Their vs. There vs. They\'re',
      content: "The Triple Trap! They sound identical.\n\n1. **Their:** Ownership (Their house).\n2. **There:** Place (Over there).\n3. **They're:** They are (They're happy).",
      examples: [
        { text: "**Their** car is parked over **there**.", isCorrect: true },
        { text: "**They're** driving **their** car.", isCorrect: true }
      ]
    }
  ]
};
