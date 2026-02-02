import { ModuleData } from '../../types.ts';
import { cardinalsQuiz } from '../quizzes/cardinals.ts';

export const cardinalsModule: ModuleData = {
  id: 'cardinals',
  name: 'Cardinals (Numbers)',
  icon: 'fa-list-ol',
  color: 'bg-indigo-500',
  difficulty: 'Beginner',
  description: 'Master the art of counting: One, Two, Zero, and the grammar of exact quantity.',
  mascotIntro: "One lion, two eyes, four paws! In the jungle, accurate counting keeps you safe. Let's master the math of grammar!",
  
  infographic: {
    title: "The Counting Den",
    color: "bg-indigo-500",
    rules: [
      "**FUNCTION**: They answer 'How many?' and provide exact numerical precision.",
      "**THE 1 vs ALL**: 'One' is singular; literally every other number (0, 0.5, 2, 1,000,000) is plural.",
      "**NO 'S' RULE**: As determiners, numbers NEVER take an 's'. (Two hundred people, NOT two hundreds).",
      "**PRECISION**: Use qualifiers like 'About' or 'Over' for approximate cardinals.",
      "**HYPHENS**: Use hyphens for compound numbers from twenty-one to ninety-nine.",
      "**COLLECTIVES**: Use 'Dozen', 'Score', or 'Gross' as specific quantity determiners."
    ],
    examples: [
      { label: "Singular", text: "**One** brave lion." },
      { label: "Plural", text: "**Ten** noisy monkeys." },
      { label: "Large", text: "**Five thousand** trees." },
      { label: "Approximate", text: "**Over forty** birds." }
    ],
    mistakes: [
      { bad: "Three hundreds birds.", good: "Three hundred birds.", reason: "When used as a determiner, 'hundred' stays singular." },
      { bad: "I have twenty one coins.", good: "I have twenty-one coins.", reason: "Compound numbers (21-99) need a hyphen!" },
      { bad: "There is zero mistake.", good: "There are zero mistakes.", reason: "Zero is treated as plural in English grammar." },
      { bad: "The page tenth.", good: "Page ten.", reason: "When identifying a specific item after the noun, use a cardinal." }
    ]
  },

  learnSlides: [
    {
      title: 'What is a Cardinal?',
      content: "Cardinal numbers (1, 2, 3...) tell us **exactly how many**. \n\nWhen a number comes before a noun, it's a **Determiner**. It limits the noun to a specific count.\n\n- **Exact:** 'I have **three** pens.'\n- **Determiner Phrase:** You can combine them! 'Those **two** pens' or 'My **four** sisters'.",
      examples: [
        { text: "I see **three** birds. (Determiner)", isCorrect: true },
        { text: "I see birds. (Vague quantity)", isCorrect: true }
      ],
      didYouKnow: "The word 'Cardinal' comes from the Latin 'cardo' meaning 'hinge'—these numbers are the hinge that the whole counting system turns on!"
    },
    {
      title: 'The Singular Rule (1 vs. The World)',
      content: "Grammar math is simple but strict:\n\n- **One** = Singular Noun (One cat).\n- **Everything Else** = Plural Noun (Zero cats, Two cats, 1.5 liters).\n\nIn English, 'Singular' means **exactly one**. Anything else—even if it is less than one or nothing at all—usually triggers the plural form.",
      examples: [
        { text: "I have **one** idea.", isCorrect: true },
        { text: "I have **five** ideas.", isCorrect: true },
        { text: "There are **zero** cookies left.", isCorrect: true }
      ]
    },
    {
      title: 'Large Numbers (The No-S Rule)',
      content: "When using Hundred, Thousand, or Million as determiners (with a number in front), **never** add an 's'.\n\n- **Correct:** Five **hundred** people.\n- **Incorrect:** Five **hundreds** people.\n\n**Note:** You only add the 's' when they stand alone as a general noun phrase: '**Hundreds of** people'.",
      examples: [
        { text: "Two **thousand** miles.", isCorrect: true },
        { text: "Two **thousands** miles.", isCorrect: false },
        { text: "Six **million** dollars.", isCorrect: true }
      ]
    },
    {
      title: 'Approximate Cardinals',
      content: "Sometimes we don't know the exact number. We use 'Qualifiers' with cardinals to be honest about our guess:\n\n- **About / Around:** Near the number.\n- **Over / More than:** Higher than the number.\n- **Under / Less than:** Lower than the number.\n- **Exactly:** Confirming precision.",
      examples: [
        { text: "**About** ten lions arrived.", isCorrect: true },
        { text: "**Over** fifty birds flew by.", isCorrect: true },
        { text: "**Under** five minutes remain.", isCorrect: true }
      ]
    },
    {
      title: 'Compound Numbers & Hyphens',
      content: "When writing out numbers as words, you must use a **hyphen** (-) for any number from **twenty-one** to **ninety-nine**.\n\nThis also applies when they are part of larger numbers (e.g., four hundred twenty-one).",
      examples: [
        { text: "I am **twenty-five** years old.", isCorrect: true },
        { text: "I am **twenty five** years old.", isCorrect: false },
        { text: "There are **ninety-nine** problems.", isCorrect: true }
      ]
    },
    {
      title: 'Collective Quantities',
      content: "English has special words that act like fixed-number cardinals:\n\n- **A Dozen:** Exactly 12.\n- **A Baker's Dozen:** Exactly 13.\n- **A Score:** Exactly 20 (archaic/formal).\n- **A Gross:** Exactly 144.\n\nThese act just like numbers in a sentence!",
      examples: [
        { text: "I want **a dozen** eggs.", isCorrect: true },
        { text: "He lived for **four score** years.", isCorrect: true }
      ],
      didYouKnow: "Abraham Lincoln famously used 'Four score' in his Gettysburg Address to mean 80 years!"
    },
    {
      title: 'Cardinals for Identification',
      content: "Sometimes cardinals don't count a total—they identify a **position** or **label**.\n\nWhen the number comes **AFTER** the noun, we use a cardinal instead of an ordinal.\n\n- **Cardinal:** 'Turn to **Page Ten**.' (Identifies the page).\n- **Ordinal:** 'Read the **tenth page**.' (Counts the pages).",
      examples: [
        { text: "We are in **Room Five**.", isCorrect: true },
        { text: "Watch **Channel Four**.", isCorrect: true },
        { text: "Flight **101** is boarding.", isCorrect: true }
      ]
    },
    {
      title: 'Fractions & Decimals',
      content: "Decimals and fractions follow the 'Not 1' plural rule.\n\n- **Decimals:** 0.5 **miles**, 1.0 **mile** (exactly 1), 1.1 **miles**.\n- **Fractions:** If it is less than one, we usually use the singular if it's 'half an hour', but plural for 'three quarters of an **inch**' is tricky—usually determined by the noun!",
      examples: [
        { text: "Wait **half an** hour.", isCorrect: true },
        { text: "It is **0.75** kilometers.", isCorrect: true },
        { text: "He drank **1.5** liters.", isCorrect: true }
      ]
    }
  ],
  quiz: cardinalsQuiz
};
