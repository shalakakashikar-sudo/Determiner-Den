
export const quantifiersInfographic = {
  title: "Amount Indicators",
  color: "bg-green-500",
  rules: [
    "MANY: Only for countable items (cars, trees).",
    "MUCH: Only for uncountable items (water, sand).",
    "SOME: Used in positive statements.",
    "ANY: Used in questions and negative statements."
  ],
  examples: [
    { label: "Positive", text: "I have some milk." },
    { label: "Negative", text: "I don't have any milk." },
    { label: "Uncountable", text: "Too much sugar is bad." }
  ],
  mistakes: [
    { bad: "Much people", good: "Many people", reason: "People are countable (1 person, 2 people)." },
    { bad: "Many water", good: "Much water", reason: "Water cannot be counted individually." },
    { bad: "I have few friends", good: "I have a few friends", reason: "'Few' means 'almost none' (sad), 'A few' means 'some' (happy)." }
  ]
};
