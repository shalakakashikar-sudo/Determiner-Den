
export const cardinalsInfographic = {
  title: "Counting Den",
  color: "bg-indigo-500",
  rules: [
    "Show exact quantity or number.",
    "Answer the question 'How many?'.",
    "Numbers 2+ always need plural nouns.",
    "ONE is the only cardinal for singular nouns."
  ],
  examples: [
    { label: "Quantity", text: "Ten lions are hunting." },
    { label: "Singular", text: "One sun in the sky." },
    { label: "Large number", text: "A hundred trees." }
  ],
  mistakes: [
    { bad: "Two student", good: "Two students", reason: "Cardinals greater than 1 need plural nouns." },
    { bad: "One lions", good: "One lion", reason: "1 is always singular." },
    { bad: "The five books", good: "Five books", reason: "Usually, cardinals don't need 'The' unless specific." }
  ]
};
