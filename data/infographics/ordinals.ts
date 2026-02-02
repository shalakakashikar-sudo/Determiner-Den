import { ModuleData } from '../../types.ts';
import { ordinalsQuiz } from '../quizzes/ordinals.ts';

export const ordinalsModule: ModuleData = {
  id: 'ordinals',
  name: 'Ordinals (Order)',
  icon: 'fa-award',
  color: 'bg-purple-500',
  difficulty: 'Intermediate',
  description: 'Ranking and position: First, Second, Next, Last.',
  mascotIntro: "Who crossed the finish line first? Who came last? Let's get everything in order! Every position tells a story.",
  quiz: ordinalsQuiz,
  
  infographic: {
    title: "Ranking & Order Mastery",
    color: "bg-purple-500",
    rules: [
      "**FUNCTION**: Shows position in a series (Rank), not the total quantity.",
      "**THE RULE**: Usually preceded by 'The' or a Possessive (The first, My second).",
      "**SUFFIXES**: 1st (st), 2nd (nd), 3rd (rd), 4th-20th (th).",
      "**COMPOUNDS**: Only the LAST number becomes ordinal (Twenty-first).",
      "**RELATIVE**: Words like 'Next', 'Last', and 'Previous' function as ordinals.",
      "**DATES**: Always spoken as ordinals even if written as cardinals (May 4th)."
    ],
    examples: [
      { label: "Rank", text: "The **first** place winner." },
      { label: "Date", text: "The **twenty-fifth** of December." },
      { label: "Floor", text: "My office is on the **tenth** floor." },
      { label: "Regnal", text: "King Henry **the Eighth**." }
    ],
    mistakes: [
      { bad: "He came two.", good: "He came second.", reason: "Two counts people. Second ranks them." },
      { bad: "The 22th floor.", good: "The 22nd floor.", reason: "22 ends in 'Two', so it needs 'nd' (Twenty-second)." },
      { bad: "The three first students.", good: "The first three students.", reason: "Ordinals (First) always come BEFORE cardinals (Three) in a phrase." },
      { bad: "My ninty-ninth try.", good: "My ninety-ninth try.", reason: "Keep the 'e' in ninety, but drop it for ninth!" }
    ]
  },

  learnSlides: [
    {
      title: 'What is an Ordinal?',
      content: "Cardinals tell us *how many* (1, 2, 3). \nOrdinals tell us the **order** or **position** in a list.\n\nThink of a race:\n- **Cardinal:** There are 10 runners. (The total size)\n- **Ordinal:** I finished **third**. (My specific spot)",
      examples: [
        { text: "This is the **first** time.", isCorrect: true },
        { text: "This is the **one** time.", isCorrect: false },
        { text: "Turn right at the **second** light.", isCorrect: true }
      ],
      didYouKnow: "Ordinals are determiners because they limit the noun to exactly one specific position in a sequence."
    },
    {
      title: 'The Suffix System',
      content: "Most ordinals end in **-th**. But the first three are special rebels:\n\n- **1** -> Fir**st** (1st)\n- **2** -> Seco**nd** (2nd)\n- **3** -> Thi**rd** (3rd)\n- **4-20** -> Four**th**, Fif**th**, Ten**th** (4th-20th)\n\n**Note:** When you get to 21, the cycle repeats! 21st, 22nd, 23rd, 24th...",
      examples: [
        { text: "The **3rd** door on the left.", isCorrect: true },
        { text: "The **3th** door on the left.", isCorrect: false }
      ]
    },
    {
      title: 'The "Definite" Nature',
      content: "Because a position in a sequence is usually unique, ordinals almost always need a **Definite Determiner** in front of them.\n\n- **Definite Article:** **The** first prize.\n- **Possessive:** **My** second chance.\n- **Demonstrative:** **That** third house.",
      examples: [
        { text: "He is **the** first person here.", isCorrect: true },
        { text: "He is **a** first person here.", isCorrect: false },
        { text: "This is **my** tenth roar!", isCorrect: true }
      ]
    },
    {
      title: 'Spelling Rebels',
      content: "Watch out for these tricky spelling changes when turning numbers into ordinals:\n\n- **Five** -> **Fifth** (Not Fiveth)\n- **Eight** -> **Eighth** (Only one 't')\n- **Nine** -> **Ninth** (Drop the 'e')\n- **Twelve** -> **Twelfth** (v becomes f)\n- **Twenty** -> **Twentieth** (y becomes ie)",
      examples: [
        { text: "The **ninth** lion.", isCorrect: true },
        { text: "The **nineth** lion.", isCorrect: false },
        { text: "It's my **twentieth** birthday.", isCorrect: true }
      ]
    },
    {
      title: 'Compound Ordinals (21+)',
      content: "For numbers bigger than 20, we only make the **very last part** ordinal. The first part stays a cardinal.\n\n- **Correct:** Twenty-**first** (21st)\n- **Wrong:** Twentieth-first\n\n**Hyphen Rule:** Always use a hyphen between the tens and the units (Forty-second, Ninety-ninth).",
      examples: [
        { text: "The **twenty-first** century.", isCorrect: true },
        { text: "The **seventy-fourth** floor.", isCorrect: true }
      ]
    },
    {
      title: 'Dates & Centuries',
      content: "Ordinals are the kings of the calendar! \n\n- **Dates:** Even if we write 'May 4', we always say 'May the **Fourth**' or 'The **Fourth** of May'.\n- **Centuries:** We live in the **twenty-first** century.\n- **Anniversaries:** It is their **fiftieth** wedding anniversary.",
      examples: [
        { text: "Today is October **3rd**.", isCorrect: true },
        { text: "The **19th** century was long ago.", isCorrect: true }
      ]
    },
    {
      title: 'Relative Ordinals: Next & Last',
      content: "Words that describe position without using numbers also act as ordinals! These are 'Relative Ordinals'.\n\n- **Next**: The one after this.\n- **Last**: The final one.\n- **Previous / Following**: Before and after.\n- **Middle**: The center point.",
      examples: [
        { text: "The **next** bus is coming.", isCorrect: true },
        { text: "The **last** cookie is mine!", isCorrect: true },
        { text: "The **middle** child.", isCorrect: true }
      ]
    },
    {
      title: 'Royal & Regnal Numbers',
      content: "When referring to Kings, Queens, or Popes, we write Roman Numerals but **speak** Ordinals.\n\n- **Written:** Elizabeth II\n- **Spoken:** Elizabeth **the Second**\n\nNotice we add a silent 'the' when speaking these titles!",
      examples: [
        { text: "King Charles **the Third**.", isCorrect: true },
        { text: "Pope John **the Twenty-third**.", isCorrect: true }
      ]
    },
    {
      title: 'Ordinals in Fractions',
      content: "Ordinals have a secret job in math! They serve as the 'denominators' (the bottom number) in fractions.\n\n- **1/3**: One **third**\n- **1/10**: One **tenth**\n- **3/4**: Three **quarters** (Special word, but 'fourths' is also okay).",
      examples: [
        { text: "I ate a **third** of the pizza.", isCorrect: true },
        { text: "Five-**eighths** of the group.", isCorrect: true }
      ],
      didYouKnow: "When the top number (numerator) is more than 1, we add an 's' to the ordinal: 'Two-third**s**'."
    },
    {
      title: 'Position Swap: Cardinal vs Ordinal',
      content: "Where you put the number changes its type! \n\n1. **Ordinal + Noun:** 'The **tenth** page.' (Position Focus)\n2. **Noun + Cardinal:** '**Page ten**.' (Label Focus)\n\nIn 'Page ten', the number 10 acts like a name or label, so we use the cardinal form.",
      examples: [
        { text: "I live in **Room 4**. (Cardinal)", isCorrect: true },
        { text: "I live on the **4th** floor. (Ordinal)", isCorrect: true },
        { text: "Turn to **Chapter 5**.", isCorrect: true }
      ]
    }
  ]
};
