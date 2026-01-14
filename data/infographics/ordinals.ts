
export const ordinalsInfographic = {
  title: "Ranking & Order",
  color: "bg-purple-500",
  rules: [
    "Show rank, sequence, or position.",
    "Suffixes: 1st, 2nd, 3rd, 4th, 10th...",
    "Usually need the article 'THE' before them.",
    "Used for dates and floors in buildings."
  ],
  examples: [
    { label: "Rank", text: "The first place winner." },
    { label: "Date", text: "The fourth of July." },
    { label: "Sequence", text: "The second chapter." }
  ],
  mistakes: [
    { bad: "He came two.", good: "He came second.", reason: "Use ordinals for position, not counting numbers." },
    { bad: "The fiveth day", good: "The fifth day", reason: "Watch out for irregular spellings (5th, 12th)!" },
    { bad: "I live on three floor.", good: "I live on the third floor.", reason: "Always use 'the' with ordinal positions." }
  ]
};
