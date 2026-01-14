import { Question } from '../../types';

export const demonstrativesQuiz: Question[] = [
  // --- Physical Distance: Near (This/These) ---
  { id: 'dem1', type: 'mcq', question: "___ book in my hand is heavy.", options: ["This", "That", "Those"], correctAnswer: "This", explanation: "Singular and near (in hand)." },
  { id: 'dem2', type: 'fill-in-the-blank', question: "Look at ___ scar on my arm.", correctAnswer: "this", explanation: "Singular and on the speaker's body (near)." },
  { id: 'dem3', type: 'mcq', question: "___ cookies here smell delicious.", options: ["This", "These", "Those"], correctAnswer: "These", explanation: "Plural and near ('here')." },
  { id: 'dem4', type: 'mcq', question: "Take ___ keys; I don't need them.", options: ["this", "these", "that"], correctAnswer: "these", explanation: "Plural (keys) and implied handing over (near)." },
  { id: 'dem5', type: 'mcq', question: "I really like ___ shoes I am wearing.", options: ["those", "these", "this"], correctAnswer: "these", explanation: "Plural and on the speaker's feet." },
  { id: 'dem6', type: 'fill-in-the-blank', question: "Come sit on ___ chair next to me.", correctAnswer: "this", explanation: "Singular and near." },
  { id: 'dem7', type: 'mcq', question: "___ people in this room are my friends.", options: ["These", "Those", "That"], correctAnswer: "These", explanation: "Plural and inside the current location." },
  { id: 'dem8', type: 'mcq', question: "Is ___ seat taken? (touching the chair)", options: ["this", "that"], correctAnswer: "this", explanation: "Immediate proximity." },
  { id: 'dem9', type: 'mcq', question: "Please sign ___ form right here.", options: ["this", "that", "those"], correctAnswer: "this", explanation: "Singular and near location ('right here')." },
  { id: 'dem10', type: 'fill-in-the-blank', question: "___ apples in my basket are fresh.", correctAnswer: "these", explanation: "Plural and in possession." },

  // --- Physical Distance: Far (That/Those) ---
  { id: 'dem11', type: 'mcq', question: "Can you see ___ birds high up in the sky?", options: ["these", "this", "those"], correctAnswer: "those", explanation: "Plural and far away." },
  { id: 'dem12', type: 'mcq', question: "Look at ___ mountain in the distance.", options: ["this", "that", "these"], correctAnswer: "that", explanation: "Singular and far." },
  { id: 'dem13', type: 'fill-in-the-blank', question: "Pass me ___ plate on the other table.", correctAnswer: "that", explanation: "Singular and distant." },
  { id: 'dem14', type: 'mcq', question: "Who are ___ people across the street?", options: ["these", "those", "that"], correctAnswer: "those", explanation: "Plural and far." },
  { id: 'dem15', type: 'mcq', question: "I want to buy ___ car over there.", options: ["this", "that", "these"], correctAnswer: "that", explanation: "Singular and pointed out at a distance." },
  { id: 'dem16', type: 'mcq', question: "___ stars are so bright tonight.", options: ["These", "Those", "This"], correctAnswer: "Those", explanation: "Plural and extremely far away." },
  { id: 'dem17', type: 'mcq', question: "Do you remember ___ house we lived in years ago?", options: ["that", "this", "these"], correctAnswer: "that", explanation: "Singular, distant in space and memory." },
  { id: 'dem18', type: 'fill-in-the-blank', question: "Look at ___ clouds on the horizon.", correctAnswer: "those", explanation: "Plural and far." },
  { id: 'dem19', type: 'mcq', question: "___ boots in the shop window are expensive.", options: ["Those", "These", "That"], correctAnswer: "Those", explanation: "Plural and separated by a window/distance." },
  { id: 'dem20', type: 'mcq', question: "Put the boxes in ___ corner over there.", options: ["this", "that", "these"], correctAnswer: "that", explanation: "Singular location at a distance." },

  // --- Time Reference (Present/Near Future vs Past) ---
  { id: 'dem21', type: 'mcq', question: "I am very busy ___ morning.", options: ["this", "that", "those"], correctAnswer: "this", explanation: "Refers to the current morning (Time: Near)." },
  { id: 'dem22', type: 'mcq', question: "In ___ days (history), people had no internet.", options: ["these", "those", "this"], correctAnswer: "those", explanation: "Refers to a distant past time." },
  { id: 'dem23', type: 'mcq', question: "___ week has been great so far.", options: ["This", "That", "Those"], correctAnswer: "This", explanation: "Current ongoing time period." },
  { id: 'dem24', type: 'fill-in-the-blank', question: "Do you remember ___ summer of 2010?", correctAnswer: "that", explanation: "Past time requires 'That'." },
  { id: 'dem25', type: 'mcq', question: "We are going to Paris ___ weekend.", options: ["this", "that", "those"], correctAnswer: "this", explanation: "Upcoming near future." },
  { id: 'dem26', type: 'mcq', question: "People were happier in ___ days.", options: ["these", "those"], correctAnswer: "those", explanation: "Referring to the past." },
  { id: 'dem27', type: 'mcq', question: "___ days, everyone uses smartphones.", options: ["These", "Those", "That"], correctAnswer: "These", explanation: "Refers to the current era (present)." },
  { id: 'dem28', type: 'mcq', question: "I will never forget ___ night.", options: ["that", "this", "these"], correctAnswer: "that", explanation: "Looking back at a specific past event." },
  { id: 'dem29', type: 'mcq', question: "___ time, I will succeed!", options: ["This", "That", "Those"], correctAnswer: "This", explanation: "Refers to the current attempt." },
  { id: 'dem30', type: 'mcq', question: "At ___ moment, the phone rang.", options: ["that", "this", "these"], correctAnswer: "that", explanation: "Refers to a specific moment in the past narrative." },

  // --- Introductions & Identification (Phone/In-person) ---
  { id: 'dem31', type: 'mcq', question: "Hello, ___ is Leo speaking.", options: ["that", "this", "it"], correctAnswer: "this", explanation: "Telephone introduction uses 'This'." },
  { id: 'dem32', type: 'mcq', question: "Who is ___?", options: ["this", "that", "these"], correctAnswer: "that", explanation: "Asking about an unidentified person seen at a distance or heard." },
  { id: 'dem33', type: 'mcq', question: "Mom, ___ is my friend, Sam.", options: ["this", "that", "it"], correctAnswer: "this", explanation: "Introducing someone standing next to you." },
  { id: 'dem34', type: 'mcq', question: "(On the phone) Is ___ John?", options: ["this", "that", "these"], correctAnswer: "that", explanation: "Asking the identity of the person on the other end." },
  { id: 'dem35', type: 'mcq', question: "___ was a great party!", options: ["This", "That", "These"], correctAnswer: "That", explanation: "Referring to an event that just finished or is in the past." },
  { id: 'dem36', type: 'mcq', question: "___ is a hospital, not a playground.", options: ["This", "That", "Those"], correctAnswer: "This", explanation: "Identifying the current location." },
  { id: 'dem37', type: 'mcq', question: "___ was the best meal I've ever had.", options: ["That", "This"], correctAnswer: "That", explanation: "Refers back to the meal just eaten." },
  { id: 'dem38', type: 'mcq', question: "___ is Dr. Smith.", options: ["This", "These", "Those"], correctAnswer: "This", explanation: "Formal introduction." },
  { id: 'dem39', type: 'mcq', question: "Was ___ your sister I saw yesterday?", options: ["that", "this"], correctAnswer: "that", explanation: "Referring to a past sighting." },
  { id: 'dem40', type: 'mcq', question: "(Doorbell rings) Who is ___?", options: ["this", "that", "it"], correctAnswer: "that", explanation: "Unseen person at a distance." },

  // --- Abstract Reference (Ideas/Statements) ---
  { id: 'dem41', type: 'mcq', question: "He failed the test. ___ is why he is sad.", options: ["This", "That", "These"], correctAnswer: "That", explanation: "Referring back to the previously stated fact." },
  { id: 'dem42', type: 'mcq', question: "Listen to ___: You are going to win!", options: ["this", "that", "those"], correctAnswer: "this", explanation: "Referring forward to what is about to be said." },
  { id: 'dem43', type: 'mcq', question: "You are a liar! Don't say ___.", options: ["this", "that", "these"], correctAnswer: "that", explanation: "Referring to what was just said by the other person." },
  { id: 'dem44', type: 'mcq', question: "Stop doing ___!", options: ["that", "this", "these"], correctAnswer: "that", explanation: "Referring to an action someone is doing at a distance or annoyingly." },
  { id: 'dem45', type: 'mcq', question: "I don't like ___ idea.", options: ["that", "those", "these"], correctAnswer: "that", explanation: "Referring to a specific abstract idea." },
  { id: 'dem46', type: 'mcq', question: "___ is the main problem: we have no money.", options: ["This", "That", "Those"], correctAnswer: "This", explanation: "Refers forward to the problem about to be described." },
  { id: 'dem47', type: 'mcq', question: "Can you explain ___ rule again?", options: ["that", "this"], correctAnswer: "that", explanation: "Refers back to a rule previously mentioned." },
  { id: 'dem48', type: 'mcq', question: "What do you mean by ___?", options: ["that", "this"], correctAnswer: "that", explanation: "Referring to the other person's statement." },
  { id: 'dem49', type: 'mcq', question: "___ is all I have to say.", options: ["That", "Those"], correctAnswer: "That", explanation: "Summarizing what was just said." },
  { id: 'dem50', type: 'mcq', question: "Correct me if I am wrong, but isn't ___ the answer?", options: ["this", "that"], correctAnswer: "that", explanation: "Referring to a specific answer." },

  // --- Emotional Distance & Attitude ---
  { id: 'dem51', type: 'mcq', question: "I hate ___ guy.", options: ["that", "this"], correctAnswer: "that", explanation: "'That' can express dislike or emotional distance." },
  { id: 'dem52', type: 'mcq', question: "I love ___ country!", options: ["this", "that"], correctAnswer: "this", explanation: "'This' expresses closeness/belonging." },
  { id: 'dem53', type: 'mcq', question: "Why does ___ girl keep staring at me?", options: ["that", "this"], correctAnswer: "that", explanation: "Emotional distance/annoyance." },
  { id: 'dem54', type: 'mcq', question: "Look at ___ poor dog.", options: ["that", "those"], correctAnswer: "that", explanation: "Singular subject." },
  { id: 'dem55', type: 'mcq', question: "We have been working on ___ project for months.", options: ["this", "that"], correctAnswer: "this", explanation: "Emphasis on current activity." },
  
  // --- Plural vs Singular Tricky Cases ---
  { id: 'dem56', type: 'mcq', question: "___ scissors are sharp.", options: ["These", "This", "That"], correctAnswer: "These", explanation: "Scissors are plural." },
  { id: 'dem57', type: 'mcq', question: "___ jeans fit well.", options: ["These", "This", "That"], correctAnswer: "These", explanation: "Jeans are plural." },
  { id: 'dem58', type: 'mcq', question: "___ news is shocking.", options: ["This", "These", "Those"], correctAnswer: "This", explanation: "News is singular (uncountable)." },
  { id: 'dem59', type: 'mcq', question: "___ physics problem is hard.", options: ["This", "These"], correctAnswer: "This", explanation: "Physics is singular (subject name)." },
  { id: 'dem60', type: 'mcq', question: "___ glasses are mine.", options: ["Those", "That", "This"], correctAnswer: "Those", explanation: "Glasses (spectacles) are plural." },
  { id: 'dem61', type: 'mcq', question: "___ cattle are grazing.", options: ["These", "This", "That"], correctAnswer: "These", explanation: "Cattle is a plural noun." },
  { id: 'dem62', type: 'mcq', question: "___ police are investigating.", options: ["These", "This"], correctAnswer: "These", explanation: "Police is usually treated as plural." },
  { id: 'dem63', type: 'mcq', question: "___ information is useful.", options: ["This", "These", "Those"], correctAnswer: "This", explanation: "Information is singular (uncountable)." },
  { id: 'dem64', type: 'mcq', question: "I don't like ___ kind of movies.", options: ["this", "these"], correctAnswer: "this", explanation: "'Kind' is singular." },
  { id: 'dem65', type: 'mcq', question: "I don't like ___ kinds of movies.", options: ["these", "this"], correctAnswer: "these", explanation: "'Kinds' is plural." },

  // --- Mixed Revision ---
  { id: 'dem66', type: 'mcq', question: "Look at ___ bird!", options: ["that", "those", "these"], correctAnswer: "that", explanation: "Singular/Far." },
  { id: 'dem67', type: 'mcq', question: "___ are my photos.", options: ["These", "This", "That"], correctAnswer: "These", explanation: "Plural." },
  { id: 'dem68', type: 'mcq', question: "Give me ___ pen.", options: ["that", "those", "these"], correctAnswer: "that", explanation: "Singular." },
  { id: 'dem69', type: 'mcq', question: "Is ___ your bag here?", options: ["this", "that"], correctAnswer: "this", explanation: "Near." },
  { id: 'dem70', type: 'mcq', question: "___ were the best days of my life.", options: ["Those", "That", "This"], correctAnswer: "Those", explanation: "Past/Plural." },
  { id: 'dem71', type: 'mcq', question: "Can you see ___ ships on the horizon?", options: ["those", "that", "this"], correctAnswer: "those", explanation: "Far/Plural." },
  { id: 'dem72', type: 'mcq', question: "___ trousers are too long.", options: ["These", "This"], correctAnswer: "These", explanation: "Plural noun." },
  { id: 'dem73', type: 'mcq', question: "What is ___ noise?", options: ["that", "those", "these"], correctAnswer: "that", explanation: "Singular." },
  { id: 'dem74', type: 'mcq', question: "Do you know ___ man standing by the door?", options: ["that", "this", "these"], correctAnswer: "that", explanation: "Singular/Far." },
  { id: 'dem75', type: 'mcq', question: "___ homework is very difficult.", options: ["This", "These", "Those"], correctAnswer: "This", explanation: "Homework is uncountable/singular." }
];