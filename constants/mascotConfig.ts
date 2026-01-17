
import { MascotMood } from '../types';

/**
 * Accessibility labels or Tooltips for the mascot's current state.
 */
export const LEO_MOODS: Record<MascotMood, string> = {
  idle: 'Leo is watching you attentively.',
  happy: 'Leo is beaming with pride!',
  thinking: 'Leo is pondering the grammar rules...',
  oops: 'Leo looks a bit confused.',
  tickled: 'Leo is giggling and wiggling!',
  roar: 'Leo is letting out a mighty grammar roar!',
  sad: 'Leo is feeling a bit blue about grammar errors.',
  surprised: 'Leo is wide-eyed with discovery!',
  grin: 'Leo has a clever grammar grin.'
};

/**
 * A wide range of educational grammar tips, mnemonics, and fun "flavor" text.
 */
export const LEO_COMMENTS = [
  // --- The "Basics" Tips ---
  "💡 Tip: Determiners ALWAYS lead the line. They go before adjectives and nouns. The engine of the sentence! 🚂",
  "💡 Tip: Singular countable nouns are lonely. They almost always need a determiner like 'a', 'the', or 'my'.",
  "💡 Tip: 'A' and 'An' are like masks—use 'An' for vowel sounds and 'A' for consonants!",

  // --- Articles & Specificity ---
  "💡 Tip: Use 'The' for things that are one-of-a-kind, like 'the sun' or 'the internet'. ☀️",
  "💡 Tip: Talked about something once? Use 'A'. Talking about it again? Switch to 'The'!",
  "💡 Tip: Don't use articles for general plurals. 'Lions are cool'—no 'The' needed for all lions!",

  // --- Demonstratives Mnemonics ---
  "💡 Mnemonic: This and These are NEAR my knees. That and Those are FAR from toes! 🐾",
  "💡 Tip: On the phone, say 'This is Leo.' In person, say 'I am Leo.' Grammar has many faces!",

  // --- Possessives & Punctuation ---
  "💡 Mnemonic: 'Its' with no dot shows what it's got. 'It's' with a dot is 'It is' or 'It has'! 🦁",
  "💡 Tip: Possession is simple—my, your, his, her, its, our, their. No apostrophes allowed in these determiners!",
  "💡 Tip: Whose is for ownership. Who's is for 'Who is'. Don't let the sound trick your paws!",

  // --- Quantifiers & Counting ---
  "💡 Tip: Count your 'Many' coins, but measure your 'Much' money. Uncountables love 'Much'!",
  "💡 Tip: 'A few' is a positive vibe (I have some!). 'Few' is a sad vibe (I have almost none).",
  "💡 Tip: Can't decide between 'Many' and 'Much'? 'A lot of' is your jungle safety net!",

  // --- Distributives Logic ---
  "💡 Rule: You can say 'Each of', but NEVER 'Every of'. Every is too shy to stand by 'of'!",
  "💡 Tip: Either and Neither are for pairs. If you have three friends, use 'Any' or 'None' instead.",

  // --- Ordinals & Numbers ---
  "💡 Tip: Ordinal numbers (first, second, third) usually love the word 'The'. The first prize is knowledge!",
  "💡 Tip: We write 'May 4', but we roar 'May the Fourth'! Dates love ordinals.",

  // --- Fun / Leo's Personality ---
  "Did you know lions sleep for 20 hours? I spend the other 4 studying grammar! 💤",
  "My mane is magnificent, but your grammar is getting even sharper!",
  "Roar! That's 'Lion' for 'Your progress is majestic!'",
  "I'm not just a lion, I'm a Linguistic Lion. My roar has perfect syntax.",
  "If grammar were a hunt, you'd be the king of the pride today! 👑",
  "Every correct answer makes my tail twitch with joy!",
  "Don't worry about mistakes—even a king slips on a banana peel sometimes.",
  "I'm keeping my eyes on your punctuation... it's the claws of a sentence! 👀",
  "Success is 10% roar and 90% correct determiner usage!",
  "The pride is watching! Show them how a grammar master hunts."
];

/**
 * High-energy praise for correct answers.
 */
export const SUCCESS_MESSAGES = [
  "Roar-some job! 🦁",
  "Fur-tastic work!",
  "King of the Grammar Jungle! 👑",
  "Paws-itively perfect!",
  "You're making the whole pride proud!",
  "Spot on! (And I know about spots!)",
  "Grammar legend in the making! ✨"
];

/**
 * Gentle, encouraging feedback for incorrect answers.
 */
export const OOPS_MESSAGES = [
  "Oops-a-daisy! Even lions slip on bananas.",
  "Not quite! Let's paws and reflect. 🐾",
  "Close call! Try again, cub.",
  "Mistakes are just hairballs on the road to success.",
  "Don't worry, my first roar sounded like a squeak too!",
  "Shake it off! You'll get the next one."
];

/**
 * Theme colors for the UI based on the mascot's mood.
 */
export const MOOD_THEMES: Record<MascotMood, string> = {
  idle: 'bg-orange-50 border-orange-200',
  happy: 'bg-yellow-50 border-yellow-300',
  thinking: 'bg-blue-50 border-blue-200',
  oops: 'bg-red-50 border-red-200',
  tickled: 'bg-pink-50 border-pink-200',
  roar: 'bg-red-50 border-red-300',
  sad: 'bg-blue-50 border-blue-200',
  surprised: 'bg-indigo-50 border-indigo-200',
  grin: 'bg-emerald-50 border-emerald-200'
};
