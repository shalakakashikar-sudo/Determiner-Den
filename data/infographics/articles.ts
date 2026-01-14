
export const articlesInfographic = {
  title: "Articles Mastery",
  color: "bg-orange-400",
  rules: [
    "A: Use for general nouns starting with consonant sounds.",
    "AN: Use for general nouns starting with vowel sounds (a,e,i,o,u).",
    "THE: Use for specific items, unique things, or things already known.",
    "ZERO ARTICLE: No article for general plurals (e.g., Lions roar)."
  ],
  examples: [
    { label: "Consonant Sound", text: "A University (starts with 'Y' sound)" },
    { label: "Vowel Sound", text: "An Hour (starts with 'O' sound)" },
    { label: "Specific", text: "The Moon is beautiful tonight." }
  ],
  mistakes: [
    { bad: "An university", good: "A university", reason: "It sounds like 'Yuniversity', a consonant sound." },
    { bad: "A apple", good: "An apple", reason: "Vowel sounds need 'an' for smooth speech." },
    { bad: "The lions are cats.", good: "Lions are cats.", reason: "General statements about groups don't need 'The'." }
  ]
};
