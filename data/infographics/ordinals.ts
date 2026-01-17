
import { ModuleData } from '../../types.ts';
import { ordinalsQuiz } from '../quizzes/ordinals.ts';

export const ordinalsModule: ModuleData = {
  id: 'ordinals',
  name: 'Ordinals (Order)',
  icon: 'fa-award',
  color: 'bg-purple-500',
  difficulty: 'Intermediate',
  description: 'Ranking and position: First, Second, Next, Last.',
  mascotIntro: "Who crossed the finish line first? Who came last? Let's get everything in order!",
  quiz: ordinalsQuiz,
  
  infographic: {
    title: "Ranking & Order",
    color: "bg-purple-500",
    rules: [
      "**FUNCTION**: Shows position in a list (Rank), not quantity.",
      "**THE RULE**: Almost always used with 'The' (The first, The last).",
      "**ENDINGS**: Memorize the suffixes: -st (1), -nd (2), -rd (3), -th (4+).",
      "**DATES**: We write 'May 4', but we SAY 'May the Fourth'."
    ],
    examples: [
      { label: "Rank", text: "The **first** place winner." },
      { label: "Date", text: "The **fourth** of July." },
      { label: "Floor", text: "The **second** floor." }
    ],
    mistakes: [
      { bad: "He came two.", good: "He came second.", reason: "Two is an amount. Second is a position." },
      { bad: "My fiveth birthday.", good: "My fifth birthday.", reason: "Spelling change: Five -> Fifth." },
      { bad: "The 21th Century.", good: "The 21st Century.", reason: "21 ends in 'One', so it gets 'st' (Twenty-first)." }
    ]
  },

  // Removed duplicate quiz property here to fix the compilation error
  learnSlides: [
    {
      title: 'What is an Ordinal?',
      content: "Cardinals tell us *how many* (1, 2, 3). \nOrdinals tell us the **order** or **position** in a list.\n\nThink of a race:\n- **Cardinal:** There are 10 runners.\n- **Ordinal:** I finished **third**.",
      examples: [
        { text: "This is the **first** time.", isCorrect: true },
        { text: "This is the **one** time.", isCorrect: false },
        { text: "Turn right at the **second** light.", isCorrect: true }
      ],
      didYouKnow: "They are called 'Ordinals' because they show the 'Order' of things."
    },
    {
      title: 'The "The" Rule',
      content: "This is the most helpful trick for Ordinals.\n\nBecause there is usually only **one** winner or **one** first step, we almost always put the definite article **The** before the number.\n\n*(Exception: You can also use possessives like 'My first car').*",
      examples: [
        { text: "He is **the** first person here.", isCorrect: true },
        { text: "He is **a** first person here. (Sounds weird)", isCorrect: false },
        { text: "That was **her** second attempt.", isCorrect: true }
      ]
    },
    {
      title: 'Spelling Traps',
      content: "Most numbers just add '-th' (Four -> Fourth). But watch out for these rebels!\n\n1. **One, Two, Three:** Completely change -> First, Second, Third.\n2. **Five:** Becomes **Fifth** (Not Fiveth).\n3. **Nine:** Becomes **Ninth** (Drop the 'e').\n4. **Twelve:** Becomes **Twelfth** (v becomes f).",
      examples: [
        { text: "The nineth time.", isCorrect: false },
        { text: "The ninth time.", isCorrect: true },
        { text: "The twelveth floor.", isCorrect: false },
        { text: "The twelfth floor.", isCorrect: true }
      ]
    },
    {
      title: 'Dates: The Invisible "The"',
      content: "Dates in English are tricky. We usually **write** them with cardinals, but we **speak** them with ordinals.\n\n- **Written:** May 4\n- **Spoken:** May **the** Four**th**\n\nAlways add 'The' and '-th' when speaking!",
      examples: [
        { text: "My birthday is July One. (Wrong)", isCorrect: false },
        { text: "My birthday is July First. (Correct)", isCorrect: true }
      ]
    },
    {
      title: 'Big Numbers',
      content: "For numbers bigger than 20, only the **last** digit changes to an ordinal.\n\n- 21 -> Twenty-**first** (Not Twentieth-first)\n- 53 -> Fifty-**third**\n- 100 -> One Hundred**th**",
      examples: [
        { text: "The 22nd (Twenty-second) floor.", isCorrect: true },
        { text: "The 22th floor.", isCorrect: false }
      ]
    }
  ]
};
