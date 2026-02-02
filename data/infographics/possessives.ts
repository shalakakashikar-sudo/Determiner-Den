import { ModuleData } from '../../types.ts';
import { possessivesQuiz } from '../quizzes/possessives.ts';

export const possessivesModule: ModuleData = {
  id: 'possessives',
  name: 'Possessives',
  icon: 'fa-id-badge',
  color: 'bg-amber-600',
  difficulty: 'Intermediate',
  description: 'Master ownership: My, Your, His, Her, Its, Our, Their, and Noun Apostrophes.',
  mascotIntro: "This is my mane. That is your screen. Who owns what? Let's sort out the jungle of ownership!",
  quiz: possessivesQuiz,
  
  infographic: {
    title: "The Ownership Den",
    color: "bg-amber-600",
    rules: [
      "**DETERMINERS**: Always sit BEFORE the noun (My car). No apostrophes needed for my, your, his, her, its, our, their.",
      "**NOUNS**: Use 's for singular owners (Leo's) and just an apostrophe for plural owners ending in 's' (Lions').",
      "**GENDER**: Matches the OWNER, not the object. John loves **his** mother. Mary loves **her** father.",
      "**WHOSE**: The question version of possession. 'Whose bone is this?'",
      "**JOINT OWNERSHIP**: Use 's only on the last name for shared things (Leo and Lea's den).",
      "**ONE'S**: The formal, general possessive. 'One must do one's duty.'"
    ],
    examples: [
      { label: "Determiner", text: "**Our** jungle is vast." },
      { label: "Plural Noun", text: "The **birds'** songs are loud." },
      { label: "Joint", text: "**Tim and Tom's** room (shared)." },
      { label: "Interrogative", text: "**Whose** tracks are these?" }
    ],
    mistakes: [
      { bad: "The cat licked it's paw.", good: "The cat licked its paw.", reason: "Determiners NEVER use apostrophes. 'It's' means 'It is'." },
      { bad: "The childrens' toys.", good: "The children's toys.", reason: "If a plural noun doesn't end in 's', add 's (just like singular)." },
      { bad: "I'm going to Sarahs house.", good: "I'm going to Sarah's house.", reason: "Don't forget the apostrophe for people's names!" },
      { bad: "Who's bag is this?", good: "Whose bag is this?", reason: "Who's = Who is. Whose = Ownership." }
    ]
  },

  learnSlides: [
    {
      title: 'What is a Possessive?',
      content: "Possessives tell us who the **owner** is. In grammar, they take two forms:\n\n1. **Possessive Determiners:** These words (My, Your, His, Her, Its, Our, Their) sit right in front of the noun.\n2. **Possessive Nouns:** These are names or objects that use an **apostrophe** (Leo's, The tree's).",
      examples: [
        { text: "Where is **my** phone?", isCorrect: true },
        { text: "This is **Leo's** den.", isCorrect: true },
        { text: "Is this **the my** phone?", isCorrect: false }
      ],
      didYouKnow: "In English, possessives don't change if the noun is plural! We say 'My cat' and 'My cats' (the word 'My' stays the same)."
    },
    {
      title: 'The Gender Rule',
      content: "This is a common trap! In English, the possessive matches the **gender of the OWNER**, not the object being owned.\n\n- If a **man** has a sister: **His** sister.\n- If a **woman** has a brother: **Her** brother.\n- If a **thing** has a part: **Its** handle.",
      examples: [
        { text: "John loves **his** mother.", isCorrect: true },
        { text: "Mary loves **her** father.", isCorrect: true },
        { text: "The dog wagged **his** tail. (Personal animal)", isCorrect: true }
      ]
    },
    {
      title: 'Possessive Nouns: The Singular',
      content: "For a single person or thing, we add an **apostrophe** and an **s** (**'s**).\n\nEven if the name already ends in 's', like *James*, adding **'s** is the most common and clear way to show ownership.",
      examples: [
        { text: "The **lion's** roar was loud.", isCorrect: true },
        { text: "That is **James's** car.", isCorrect: true },
        { text: "**Sams** bike is blue. (Missing apostrophe)", isCorrect: false }
      ]
    },
    {
      title: 'Possessive Nouns: The Plural',
      content: "When the owners are a group (plural) and the word already ends in **s**, just add the **apostrophe** after the s.\n\n- **Singular:** The bird's nest (1 bird).\n- **Plural:** The birds' nest (Many birds).",
      examples: [
        { text: "The **students'** grades were excellent.", isCorrect: true },
        { text: "My **parents'** house is big.", isCorrect: true },
        { text: "The **ladie's** room. (Wrong spelling)", isCorrect: false }
      ]
    },
    {
      title: 'Irregular Plurals: The Exception',
      content: "What if the plural word doesn't end in 's'? (Like *Children, People, Women*).\n\n**Rule:** Treat them like singular nouns! Add **'s**.\n\n- **Correct:** The children's toys.\n- **Wrong:** The childrens' toys.",
      examples: [
        { text: "The **men's** locker room.", isCorrect: true },
        { text: "**People's** opinions matter.", isCorrect: true }
      ]
    },
    {
      title: 'Determiner vs. Pronoun',
      content: "Don't confuse the 'help' words with the 'stand-alone' words!\n\n1. **Determiner:** Needs a noun companion. (**My** book).\n2. **Pronoun:** Stands alone and replaces the noun. (The book is **mine**).",
      examples: [
        { text: "That is **her** car.", isCorrect: true },
        { text: "That car is **hers**.", isCorrect: true },
        { text: "That is **hers** car. (Incorrect)", isCorrect: false }
      ]
    },
    {
      title: 'The #1 Trap: Its vs. It\'s',
      content: "This is the most common mistake in English!\n\n- **Its** (No apostrophe) = Belonging to it. (Possessive Determiner).\n- **It's** (With apostrophe) = It is / It has. (Contraction).\n\n**The Trick:** If you can't replace it with 'It is', use **Its**!",
      examples: [
        { text: "The robot lost **its** battery.", isCorrect: true },
        { text: "**It's** a sunny day.", isCorrect: true },
        { text: "The cat licked **it's** paw.", isCorrect: false }
      ]
    },
    {
      title: 'Their, There, and They\'re',
      content: "They sound the same, but they have very different jobs:\n\n1. **Their:** Ownership. (**Their** house).\n2. **There:** Place/Location. (It is over **there**).\n3. **They're:** They are. (**They're** going home).",
      examples: [
        { text: "They are in **their** car.", isCorrect: true },
        { text: "**They're** over **there**.", isCorrect: true }
      ]
    },
    {
      title: 'Joint vs. Separate Possession',
      content: "If two people own the same thing, put the **'s** only on the **last** name.\n\nIf they own separate things, put the **'s** on **both** names.\n\n- **Joint:** Leo and Lea's den (They share 1 den).\n- **Separate:** Leo's and Lea's roars (They have 2 different roars).",
      examples: [
        { text: "**Jack and Jill's** wedding. (One wedding)", isCorrect: true },
        { text: "**Jack's and Jill's** shoes. (Two pairs of shoes)", isCorrect: true }
      ]
    },
    {
      title: 'The Interrogative "Whose"',
      content: "**Whose** is the question word for possession. It acts exactly like 'My' or 'His' but for asking.\n\n- **Pattern:** Whose + Noun + [rest of question]?\n\n**Warning:** Don't confuse it with **Who's** (Who is)!",
      examples: [
        { text: "**Whose** tracks are these?", isCorrect: true },
        { text: "**Who's** tracks are these? (Who is tracks?)", isCorrect: false }
      ]
    },
    {
      title: 'One\'s: The General Possessive',
      content: "When we talk about 'people in general' (not a specific person), we use the pronoun **One**. Its possessive form is **One's**.\n\nThis is very formal English but important for essays and rules.",
      examples: [
        { text: "One must respect **one's** elders.", isCorrect: true },
        { text: "One should do **his** duty. (Old-fashioned/Less formal)", isCorrect: true }
      ]
    },
    {
      title: 'Possession with "Else"',
      content: "When using the word 'else' with indefinite pronouns (someone, anyone, nobody), the apostrophe goes on the word **else**, not the pronoun!",
      examples: [
        { text: "This is **someone else's** coat.", isCorrect: true },
        { text: "Is this **anyone's else** coat?", isCorrect: false }
      ]
    },
    {
      title: 'The Double Genitive',
      content: "English has a strange way of saying 'one of my...'. We use 'of' followed by a possessive pronoun or name.\n\n- **Correct:** A friend **of mine**.\n- **Correct:** That cousin **of Sarah's**.\n\nThis construction is used to sound more natural when focusing on the relationship.",
      examples: [
        { text: "He is a friend **of mine**.", isCorrect: true },
        { text: "He is **my friend**. (Also correct, but less emphasis)", isCorrect: true }
      ],
      didYouKnow: "This is called the 'Double Genitive' because it uses both 'of' AND the possessive form!"
    }
  ]
};
