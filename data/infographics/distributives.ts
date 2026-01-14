
export const distributivesInfographic = {
  title: "Group Splitters",
  color: "bg-teal-500",
  rules: [
    "EACH: Small groups, focus on individuals.",
    "EVERY: Large groups, focus on the whole group.",
    "EITHER: Choice between exactly TWO things.",
    "NEITHER: Refusing both of exactly TWO things."
  ],
  examples: [
    { label: "Each One", text: "Each cub got a snack." },
    { label: "Total group", text: "Every lion loves naps." },
    { label: "Choice of 2", text: "Either path leads home." }
  ],
  mistakes: [
    { bad: "Every of the cubs", good: "Each of the cubs", reason: "'Every' cannot be used with 'of the'." },
    { bad: "Neither of the three", good: "None of the three", reason: "'Neither' is only for 2 items. Use 'None' for 3+." },
    { bad: "Every students", good: "Every student", reason: "Every/Each must be followed by a singular noun." }
  ]
};
