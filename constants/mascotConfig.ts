
import { MascotMood } from '../types';

/**
 * Accessibility labels or Tooltips for the mascot's current state.
 * (The visual rendering is now handled by the SVG component)
 */
// Added missing MascotMood keys: roar, sad, surprised, grin
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
 * A mix of educational grammar tips and fun "flavor" text.
 * Includes mnemonics for Determiners, Subject-Verb Agreement, and Punctuation.
 */
export const LEO_COMMENTS = [
  // --- Educational Tips ---
  "💡 Tip: 'The' is our only Definite Article. It's for specific things, like 'The' King of the Jungle!",
  "💡 Tip: Demonstratives are like pointing paws: This, That, These, Those! 👉",
  "💡 Tip: Quantifiers answer 'How much?'. I have *many* spots, but *much* patience.",
  "💡 Tip: Singular subjects need singular verbs. The lion *roars* (add the S)!",
  "💡 Tip: Possessives show ownership. This is *my* mane, that is *your* pencil.",
  "💡 Tip: 'A' goes before consonant sounds, 'An' goes before vowel sounds. Even if it's an 'H'!",

  // --- Fun / Character Building ---
  "Grammar is like a puzzle, and you're the master solver!",
  "I'm keeping my eyes on your punctuation... 👀",
  "Do you think I need a haircut? Or is the mane majestic?",
  "If I were a human, I would teach grammar! (That's a conditional sentence!)",
  "Active Voice: The lion ate the homework. Passive Voice: The homework was eaten by the lion!",
  "Roar! That's 'Lion' for 'You're doing great!'"
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
 * Optional: Theme colors if you want to sync the UI background 
 * with the mascot's mood.
 */
// Added missing MascotMood keys: roar, sad, surprised, grin
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
