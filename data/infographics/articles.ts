import { ModuleData } from '../../types.ts';
import { articlesQuiz } from '../quizzes/articles.ts';

export const articlesModule: ModuleData = {
  id: 'articles',
  name: 'Articles',
  icon: 'fa-certificate',
  color: 'bg-orange-400',
  difficulty: 'Beginner',
  description: 'Master the tiny giants of English: A, An, The, and the "No Article" rule.',
  mascotIntro: "The roaring basics! Is it 'A Lion' or 'The Lion'? These tiny words are the engine of your sentences!",
  
  infographic: {
    title: "Articles Mastery",
    color: "bg-orange-400",
    rules: [
      "**A / AN**: Use for general or non-specific things (one of many).",
      "**THE**: Use for specific, unique, or previously mentioned things.",
      "**SOUND RULE**: 'An' is for vowel SOUNDS (An hour, An MP3), not just letters.",
      "**ZERO**: No article for plural generalizations, languages, or most countries.",
      "**SUPERLATIVES**: Always use 'The' before words like 'best', 'tallest', or 'first'.",
      "**TITLES**: Use 'A' for jobs (A doctor) but 'The' for unique titles (The President)."
    ],
    examples: [
      { label: "General", text: "I need **a** pen. (Any pen will do)." },
      { label: "Specific", text: "I need **the** pen. (The one I lost)." },
      { label: "Unique", text: "**The** sun is bright today." },
      { label: "Superlative", text: "Leo is **the** best lion." }
    ],
    mistakes: [
      { bad: "An university", good: "A university", reason: "Starts with a 'Y' consonant sound." },
      { bad: "The lions are fast.", good: "Lions are fast.", reason: "General facts about groups don't need 'The'." },
      { bad: "I saw a Moon.", good: "I saw the moon.", reason: "Unique objects only have one 'version', so use 'The'." },
      { bad: "She is doctor.", good: "She is a doctor.", reason: "Singular professions always need 'A' or 'An'." }
    ]
  },

  learnSlides: [
    {
      title: 'Specific vs. General',
      content: "This is the primary function of an article. It acts as a signal to the listener.\n\n1. **Indefinite (A / An):** 'Don't worry which one it is.' Used for non-specific items or when introducing something for the first time.\n2. **Definite (The):** 'You know which one I mean.' Used for specific items that are already known to both speaker and listener.",
      examples: [
        { text: "I want a cookie. (I'm hungry, any cookie will work!)", isCorrect: true },
        { text: "I want the cookie. (The one with the extra chocolate on top.)", isCorrect: true },
        { text: "I found a gold coin! (First time mentioning it)", isCorrect: true }
      ],
      didYouKnow: "'The' is used more than any other word in English. It accounts for about 7% of all words we speak!"
    },
    {
      title: 'The Sound Rule (A vs An)',
      content: "Forget the alphabet—listen to the **SOUND**!\n\n- **Use A:** Before consonant sounds (B, C, D, F... and also 'Y' and 'W' sounds).\n- **Use An:** Before vowel sounds (A, E, I, O, U).\n\n**The Abbreviations Trap:**\nEven abbreviations follow this! \n- **An** FBI agent (Starts with 'Ef' - vowel sound).\n- **A** NASA scientist (Starts with 'N' - consonant sound).",
      examples: [
        { text: "An apple (Vowel sound)", isCorrect: true },
        { text: "A car (Consonant sound)", isCorrect: true },
        { text: "A university (Starts with 'Y' sound - Yu-niversity)", isCorrect: true },
        { text: "An hour (The H is silent, starts with 'O' sound)", isCorrect: true },
        { text: "An umbrella vs. A uniform. (Vowel sound vs. 'Y' sound)", isCorrect: true }
      ]
    },
    {
      title: 'The "Second Mention" Rule',
      content: "When we introduce a noun, it's 'new' to the conversation, so we use **A/An**.\n\nOnce it's been introduced, it becomes 'shared knowledge'. From that point on, we use **The**.",
      examples: [
        { text: "I saw **a** lion. **The** lion was huge.", isCorrect: true },
        { text: "I bought **a** sandwich and **an** apple. **The** sandwich was great, but **the** apple was sour.", isCorrect: true }
      ],
      didYouKnow: "This rule helps listeners follow the 'thread' of your story!"
    },
    {
      title: 'Unique Objects & Superlatives',
      content: "If there is only **one** of something, it's inherently specific, so we use **The**.\n\n- **Celestial Bodies:** The sun, the moon, the stars.\n- **The World:** The sky, the ocean, the internet.\n- **Rank & Superlatives:** When someone is at the top of a list, they are unique.\n*(The best, the fastest, the first, the last)*.",
      examples: [
        { text: "The sun rises in the east.", isCorrect: true },
        { text: "He is the tallest boy in class.", isCorrect: true },
        { text: "This is the first time I've roared.", isCorrect: true }
      ]
    },
    {
      title: 'Geography: The Map Guide',
      content: "Geographic names have very specific patterns:\n\n- **Use THE:** Oceans, Seas, Rivers, Deserts, and Mountain Ranges (The Pacific, The Nile, The Sahara, The Alps).\n- **Use THE:** Countries with 'United', 'Republic', or plural names (The USA, The UK, The Netherlands, The Philippines).\n- **NO Article:** Single mountains, single lakes, most cities, and most countries (Mount Everest, Lake Victoria, Japan, Paris).",
      examples: [
        { text: "I visited the France.", isCorrect: false },
        { text: "I visited France.", isCorrect: true },
        { text: "We hiked the Himalayas.", isCorrect: true },
        { text: "I live in the London.", isCorrect: false }
      ]
    },
    {
      title: 'Zero Article: Generalizations',
      content: "We omit the article when talking about things **in general**.\n\n- **General Plurals:** 'Lions are brave.' (All lions everywhere).\n- **Uncountable Concepts:** 'Water is essential.' (Not specific water).\n- **Languages & Subjects:** 'I speak French.' 'I love Math.'\n- **Sports & Meals:** 'I play tennis.' 'Dinner is ready.'",
      examples: [
        { text: "The dogs are loyal. (Only the ones I own)", isCorrect: true },
        { text: "Dogs are loyal. (Dogs in general)", isCorrect: true },
        { text: "The breakfast was tasty. (The specific one we ate today)", isCorrect: true },
        { text: "I never skip breakfast. (The concept of breakfast)", isCorrect: true }
      ]
    },
    {
      title: 'Titles & Professions',
      content: "When talking about someone's job or status:\n\n1. **General Jobs:** Use **A/An**. (She is **a** doctor. He is **an** artist).\n2. **High/Unique Titles:** Use **The** when the title stands alone, but **nothing** if the name follows.\n\n- **The** Queen is here.\n- Queen Elizabeth is here. (No article before the name!)",
      examples: [
        { text: "He wants to be **an** engineer.", isCorrect: true },
        { text: "I spoke to **the** principal.", isCorrect: true },
        { text: "The President Biden. (Incorrect)", isCorrect: false },
        { text: "President Biden. (Correct)", isCorrect: true }
      ]
    },
    {
      title: 'Fixed Expressions & Locations',
      content: "English has many 'fixed phrases' where articles are dropped depending on the **purpose** of the visit.\n\n- **Primary Purpose:** If you go to school to *study*, say 'Go to school'. If you go to jail to *serve a sentence*, say 'In jail'.\n- **Secondary Purpose:** If you go to a school building to *fix a window*, say 'Go to **the** school'.",
      examples: [
        { text: "I go to bed at 10 PM. (To sleep)", isCorrect: true },
        { text: "I sat on the bed. (Specific piece of furniture)", isCorrect: true },
        { text: "He is in hospital. (As a patient)", isCorrect: true },
        { text: "I'm going to the hospital. (To visit someone)", isCorrect: true }
      ],
      didYouKnow: "In American English, we almost always say 'The hospital', while British English often drops 'The' for patients!"
    }
  ],
  quiz: articlesQuiz
};
