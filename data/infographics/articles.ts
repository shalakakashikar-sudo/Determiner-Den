import { ModuleData } from '../../types.ts';
import { articlesQuiz } from '../quizzes/articles.ts';

export const articlesModule: ModuleData = {
  id: 'articles',
  name: 'Articles',
  icon: 'fa-certificate',
  color: 'bg-orange-400',
  difficulty: 'Beginner',
  description: 'Master the tiny giants of English: A, An, The, and the "No Article" rule.',
  mascotIntro: "The roaring basics! Is it 'A Lion' or 'The Lion'? One small word changes everything!",
  
  infographic: {
    title: "Articles Mastery",
    color: "bg-orange-400",
    rules: [
      "**A / AN**: Use for general things (one of many).",
      "**THE**: Use for specific things (you know which one).",
      "**SOUND RULE**: Use 'An' before vowel SOUNDS (not just letters).",
      "**ZERO**: Don't use articles for general plural nouns."
    ],
    examples: [
      { label: "General", text: "I need **a** pen. (Any pen will do)." },
      { label: "Specific", text: "I need **the** pen. (That red one)." },
      { label: "Sound Rule", text: "**An** hour (Silent H, vowel sound)." }
    ],
    mistakes: [
      { bad: "An university", good: "A university", reason: "Starts with 'Y' sound (You-niversity)." },
      { bad: "The lions are fast.", good: "Lions are fast.", reason: "General facts about groups don't need 'The'." },
      { bad: "I saw the Moon.", good: "I saw the moon.", reason: "Unique things (Sun, Moon, Sky) usually take 'The'." } 
    ]
  },

  learnSlides: [
    {
      title: 'Specific vs. General',
      content: "This is the main job of an article. It tells us if the noun is special to us right now, or just 'one of many'.\n\n1. **Indefinite (A / An):** We use this when the listener doesn't know which one we mean, or it doesn't matter.\n2. **Definite (The):** We use this when the listener knows *exactly* which object we are talking about.",
      examples: [
        { text: "I want a cookie. (Any cookie is fine)", isCorrect: true },
        { text: "I want the cookie. (The specific one you are holding)", isCorrect: true }
      ],
      didYouKnow: "'The' is the most common word in the English language! We use it more than any other word."
    },
    {
      title: 'The Sound Rule (A vs An)',
      content: "When do we use 'A' vs 'An'? It depends on the **SOUND**, not the spelling!\n\n- **Use A:** Before consonant sounds (B, C, D...).\n- **Use An:** Before vowel sounds (A, E, I, O, U).\n\n**The Trick:** Say the word out loud. Does it make your throat vibrate immediately? Then use 'An'.",
      examples: [
        { text: "An apple (Vowel sound)", isCorrect: true },
        { text: "A car (Consonant sound)", isCorrect: true },
        { text: "A university (Starts with 'Y' sound - Yu-niversity)", isCorrect: true },
        { text: "An hour (The H is silent, starts with 'O' sound)", isCorrect: true }
      ]
    },
    {
      title: 'The "Second Mention" Rule',
      content: "When we talk about something for the first time, it is new, so we use **A/An**.\n\nBut the *second* time we mention it, we now know what it is! So we switch to **The**.",
      examples: [
        { text: "I saw **a** bird. **The** bird was blue.", isCorrect: true },
        { text: "I bought **a** sandwich. **The** sandwich was delicious.", isCorrect: true }
      ]
    },
    {
      title: 'Unique Things',
      content: "If there is only **one** of something in our world, we always use **The**.\n\nWe don't say 'A sun' because there is only one sun for us!",
      examples: [
        { text: "The sun is hot.", isCorrect: true },
        { text: "The sky is blue.", isCorrect: true },
        { text: "The internet is down.", isCorrect: true }
      ]
    },
    {
      title: 'Geography & Places',
      content: "Place names are tricky! Here is your cheat sheet:\n\n- **Rivers, Oceans, Deserts:** Use 'The' (The Nile, The Pacific).\n- **Countries with 'Kingdom' or 'States':** Use 'The' (The USA, The UK).\n- **Most Countries & Cities:** NO Article (France, London, Tokyo).",
      examples: [
        { text: "I visited the France.", isCorrect: false },
        { text: "I visited France.", isCorrect: true },
        { text: "I swam in the Amazon River.", isCorrect: true }
      ]
    },
    {
      title: 'The "No Article" Rule',
      content: "Sometimes we don't use any article at all. This happens when we make **General Statements** with plural nouns.\n\nCompare:\n- **Specific:** 'The dogs in this park are loud.' (Only these dogs)\n- **General:** 'Dogs are loyal animals.' (All dogs everywhere)",
      examples: [
        { text: "I love the music. (This specific song)", isCorrect: true },
        { text: "I love music. (Music in general)", isCorrect: true },
        { text: "The water is life.", isCorrect: false },
        { text: "Water is life.", isCorrect: true }
      ]
    }
  ],
  quiz: articlesQuiz
};