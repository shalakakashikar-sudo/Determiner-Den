import { Question } from '../../types';

export const possessivesQuiz: Question[] = [
  // --- Possessive Determiners (My, Your, His, Her, Its, Our, Their) ---
  { id: 'pos1', type: 'fill-in-the-blank', question: "The cat licked ___ paws.", correctAnswer: "its", explanation: "Possessive for animals/things is 'its'." },
  { id: 'pos2', type: 'mcq', question: "Is this ___ bag? I found it on your desk.", options: ["my", "your", "his"], correctAnswer: "your", explanation: "Addressing the owner directly." },
  { id: 'pos3', type: 'fill-in-the-blank', question: "I have lost ___ keys.", correctAnswer: "my", explanation: "First person possessive." },
  { id: 'pos4', type: 'mcq', question: "She washes ___ hair every day.", options: ["her", "hers", "she"], correctAnswer: "her", explanation: "Determiner modifying 'hair'." },
  { id: 'pos5', type: 'mcq', question: "He broke ___ leg skiing.", options: ["he", "his", "him"], correctAnswer: "his", explanation: "Third person male possessive." },
  { id: 'pos6', type: 'mcq', question: "We love ___ new house.", options: ["our", "us", "ours"], correctAnswer: "our", explanation: "Determiner modifying 'new house'." },
  { id: 'pos7', type: 'mcq', question: "The birds are building ___ nests.", options: ["there", "their", "theirs"], correctAnswer: "their", explanation: "Possessive for plural subject." },
  { id: 'pos8', type: 'mcq', question: "Please take off ___ shoes.", options: ["you", "yours", "your"], correctAnswer: "your", explanation: "Determiner modifying 'shoes'." },
  { id: 'pos9', type: 'mcq', question: "The tree lost ___ leaves.", options: ["it's", "its", "it"], correctAnswer: "its", explanation: "Possessive of 'tree'." },
  { id: 'pos10', type: 'fill-in-the-blank', question: "They parked ___ car in the garage.", correctAnswer: "their", explanation: "Third person plural possessive." },

  // --- Possessive Pronouns vs Determiners ---
  { id: 'pos11', type: 'mcq', question: "This book is ___.", options: ["my", "mine", "me"], correctAnswer: "mine", explanation: "Pronoun at the end of the sentence." },
  { id: 'pos12', type: 'mcq', question: "That car is ___.", options: ["theirs", "their", "there"], correctAnswer: "theirs", explanation: "Pronoun replacing 'their car'." },
  { id: 'pos13', type: 'mcq', question: "Is this pen ___?", options: ["your", "yours", "you're"], correctAnswer: "yours", explanation: "Possessive pronoun." },
  { id: 'pos14', type: 'mcq', question: "The house on the corner is ___.", options: ["ours", "our", "us"], correctAnswer: "ours", explanation: "Pronoun." },
  { id: 'pos15', type: 'mcq', question: "It wasn't my fault, it was ___.", options: ["her", "hers", "she"], correctAnswer: "hers", explanation: "Pronoun replacing 'her fault'." },
  { id: 'pos16', type: 'mcq', question: "I didn't have my umbrella, so she lent me ___.", options: ["her", "hers"], correctAnswer: "hers", explanation: "Pronoun." },
  { id: 'pos17', type: 'mcq', question: "Your coat is black; ___ is blue.", options: ["my", "mine"], correctAnswer: "mine", explanation: "Subject pronoun." },
  { id: 'pos18', type: 'mcq', question: "These are ___ (our) seats, not ___ (their).", options: ["our / theirs", "ours / their"], correctAnswer: "our / theirs", explanation: "Determiner before noun, pronoun at end." },
  { id: 'pos19', type: 'mcq', question: "Is that coffee ___ or ___?", options: ["yours / mine", "your / my"], correctAnswer: "yours / mine", explanation: "Pronouns." },
  { id: 'pos20', type: 'mcq', question: "A friend of ___ called today.", options: ["me", "my", "mine"], correctAnswer: "mine", explanation: "Double genitive phrase." },

  // --- Common Confusions (Its/It's, Your/You're, Their/There/They're) ---
  { id: 'pos21', type: 'mcq', question: "The dog wagged ___ tail.", options: ["its", "it's"], correctAnswer: "its", explanation: "Possessive (no apostrophe)." },
  { id: 'pos22', type: 'mcq', question: "___ a beautiful day.", options: ["Its", "It's"], correctAnswer: "It's", explanation: "Contraction of 'It is'." },
  { id: 'pos23', type: 'mcq', question: "___ going to be late.", options: ["Your", "You're"], correctAnswer: "You're", explanation: "Contraction of 'You are'." },
  { id: 'pos24', type: 'mcq', question: "Is this ___ jacket?", options: ["your", "you're"], correctAnswer: "your", explanation: "Possessive." },
  { id: 'pos25', type: 'mcq', question: "___ house is very big.", options: ["There", "Their", "They're"], correctAnswer: "Their", explanation: "Possessive." },
  { id: 'pos26', type: 'mcq', question: "___ waiting for the bus.", options: ["There", "Their", "They're"], correctAnswer: "They're", explanation: "Contraction of 'They are'." },
  { id: 'pos27', type: 'mcq', question: "Put the book over ___.", options: ["there", "their", "they're"], correctAnswer: "there", explanation: "Adverb of place." },
  { id: 'pos28', type: 'mcq', question: "___ turn is it?", options: ["Whose", "Who's"], correctAnswer: "Whose", explanation: "Possessive interrogative." },
  { id: 'pos29', type: 'mcq', question: "___ coming to dinner?", options: ["Whose", "Who's"], correctAnswer: "Who's", explanation: "Contraction of 'Who is'." },
  { id: 'pos30', type: 'mcq', question: "The company changed ___ logo.", options: ["it's", "its"], correctAnswer: "its", explanation: "Possessive." },

  // --- Possessive Nouns (Apostrophes) ---
  { id: 'pos31', type: 'mcq', question: "This is ___ book.", options: ["Sarah's", "Sarahs"], correctAnswer: "Sarah's", explanation: "Singular possession." },
  { id: 'pos32', type: 'mcq', question: "The ___ room is messy.", options: ["boys'", "boy's"], correctAnswer: "boys'", explanation: "Plural possession (room belongs to multiple boys)." },
  { id: 'pos33', type: 'mcq', question: "The ___ room is messy.", options: ["childrens'", "children's"], correctAnswer: "children's", explanation: "Irregular plural possession." },
  { id: 'pos34', type: 'mcq', question: "I found a ___ nest.", options: ["birds", "bird's"], correctAnswer: "bird's", explanation: "Singular possession." },
  { id: 'pos35', type: 'mcq', question: "The ___ toys are everywhere.", options: ["babies'", "baby's"], correctAnswer: "babies'", explanation: "Plural ending in 'ies'." },
  { id: 'pos36', type: 'mcq', question: "He is my ___ brother.", options: ["friend's", "friends"], correctAnswer: "friend's", explanation: "Singular possession." },
  { id: 'pos37', type: 'mcq', question: "The ___ bathroom is upstairs.", options: ["ladies'", "lady's"], correctAnswer: "ladies'", explanation: "Plural possession." },
  { id: 'pos38', type: 'mcq', question: "___ car is fast.", options: ["James's", "James"], correctAnswer: "James's", explanation: "Singular name ending in 's' usually takes 's." },
  { id: 'pos39', type: 'mcq', question: "This is my ___ house.", options: ["parents'", "parents"], correctAnswer: "parents'", explanation: "Plural possession." },
  { id: 'pos40', type: 'mcq', question: "The ___ bone.", options: ["dog's", "dogs"], correctAnswer: "dog's", explanation: "Singular possession." },

  // --- Joint vs Separate Possession ---
  { id: 'pos41', type: 'mcq', question: "___ wedding was beautiful.", options: ["Jack and Jill's", "Jack's and Jill's"], correctAnswer: "Jack and Jill's", explanation: "Joint possession (one wedding)." },
  { id: 'pos42', type: 'mcq', question: "___ hair colors are different.", options: ["Jack and Jill's", "Jack's and Jill's"], correctAnswer: "Jack's and Jill's", explanation: "Separate possession (two heads of hair)." },
  { id: 'pos43', type: 'mcq', question: "I stayed at my ___ house.", options: ["aunt and uncle's", "aunt's and uncle's"], correctAnswer: "aunt and uncle's", explanation: "Joint possession (one house)." },
  { id: 'pos44', type: 'mcq', question: "___ voices were loud.", options: ["The men and women's", "The men's and women's"], correctAnswer: "The men's and women's", explanation: "Separate groups/voices." },
  { id: 'pos45', type: 'mcq', question: "___ office is on the top floor.", options: ["Mr. Smith and Mr. Jones's", "Mr. Smith's and Mr. Jones's"], correctAnswer: "Mr. Smith and Mr. Jones's", explanation: "Joint possession (shared office)." },

  // --- Indefinite Pronouns Possession ---
  { id: 'pos46', type: 'mcq', question: "It is ___ business.", options: ["nobody's", "nobodies"], correctAnswer: "nobody's", explanation: "Indefinite pronoun possession." },
  { id: 'pos47', type: 'mcq', question: "I need ___ help.", options: ["someone's", "someones"], correctAnswer: "someone's", explanation: "Possessive." },
  { id: 'pos48', type: 'mcq', question: "This is ___ else's coat.", options: ["someone", "anyone"], correctAnswer: "someone", explanation: "Used with else's." },
  { id: 'pos49', type: 'mcq', question: "To ___ surprise, he won.", options: ["everyones'", "everyone's"], correctAnswer: "everyone's", explanation: "Singular indefinite pronoun." },
  { id: 'pos50', type: 'mcq', question: "Is this ___?", options: ["anybody's", "anybodies"], correctAnswer: "anybody's", explanation: "Possessive." },

  // --- Advanced & Tricky Cases ---
  { id: 'pos51', type: 'mcq', question: "For ___ sake!", options: ["goodness'", "goodness's"], correctAnswer: "goodness'", explanation: "Abstract nouns ending in 's' often drop the second 's'." },
  { id: 'pos52', type: 'mcq', question: "For ___ sake.", options: ["conscience'", "conscience's"], correctAnswer: "conscience'", explanation: "Traditional idiom exception." },
  { id: 'pos53', type: 'mcq', question: "___ computer is faster?", options: ["Whose", "Who's"], correctAnswer: "Whose", explanation: "Possessive interrogative." },
  { id: 'pos54', type: 'mcq', question: "We have two weeks' ___.", options: ["vacation", "vacations"], correctAnswer: "vacation", explanation: "Possessive used for time measurement." },
  { id: 'pos55', type: 'mcq', question: "Wait a ___ time.", options: ["moments", "moment's"], correctAnswer: "moment's", explanation: "Time possession." },
  { id: 'pos56', type: 'mcq', question: "The ___ surface is hot.", options: ["suns", "sun's"], correctAnswer: "sun's", explanation: "Singular possession." },
  { id: 'pos57', type: 'mcq', question: "The ___ handle.", options: ["door's", "doors"], correctAnswer: "door's", explanation: "Inanimate possession (though 'door handle' is also common)." },
  { id: 'pos58', type: 'mcq', question: "___ idea is better.", options: ["Hers", "Her"], correctAnswer: "Her", explanation: "Determiner." },
  { id: 'pos59', type: 'mcq', question: "This is a picture of ___.", options: ["him", "his"], correctAnswer: "his", explanation: "Implying 'his face' or 'his property' (Double genitive nuance)." },
  { id: 'pos60', type: 'mcq', question: "I appreciate ___ helping me.", options: ["you", "your"], correctAnswer: "your", explanation: "Gerund possessive rule (formal English)." },
  { id: 'pos61', type: 'mcq', question: "He objected to ___ being there.", options: ["my", "me"], correctAnswer: "my", explanation: "Gerund possessive rule." },
  { id: 'pos62', type: 'mcq', question: "One must do ___ duty.", options: ["one's", "his"], correctAnswer: "one's", explanation: "Possessive of 'one'." },
  { id: 'pos63', type: 'mcq', question: "I met a cousin of ___.", options: ["them", "their", "theirs"], correctAnswer: "theirs", explanation: "Double possessive." },
  { id: 'pos64', type: 'mcq', question: "The ___ decision is final.", options: ["boss's", "boss'"], correctAnswer: "boss's", explanation: "Singular ending in s." },
  { id: 'pos65', type: 'mcq', question: "Five ___ worth of gas.", options: ["dollar's", "dollars'"], correctAnswer: "dollars'", explanation: "Plural value." },
  { id: 'pos66', type: 'mcq', question: "The ___ tail is bushy.", options: ["fox's", "foxes"], correctAnswer: "fox's", explanation: "Singular." },
  { id: 'pos67', type: 'mcq', question: "The ___ tails are bushy.", options: ["foxes'", "fox's"], correctAnswer: "foxes'", explanation: "Plural." },
  { id: 'pos68', type: 'mcq', question: "That is ___ problem, not mine.", options: ["their", "theirs"], correctAnswer: "their", explanation: "Determiner." },
  { id: 'pos69', type: 'mcq', question: "I prefer ___ car to hers.", options: ["our", "ours"], correctAnswer: "our", explanation: "Determiner." },
  { id: 'pos70', type: 'mcq', question: "The ___ leg is broken.", options: ["chair's", "chairs"], correctAnswer: "chair's", explanation: "Inanimate possession." },
  { id: 'pos71', type: 'mcq', question: "___ name is Leo.", options: ["Its", "It's"], correctAnswer: "Its", explanation: "Possessive." },
  { id: 'pos72', type: 'mcq', question: "___ a nice name.", options: ["Its", "It's"], correctAnswer: "It's", explanation: "Contraction." },
  { id: 'pos73', type: 'mcq', question: "___ raining outside.", options: ["Its", "It's"], correctAnswer: "It's", explanation: "Contraction." },
  { id: 'pos74', type: 'mcq', question: "Every dog has ___ day.", options: ["it's", "its"], correctAnswer: "its", explanation: "Possessive." },
  { id: 'pos75', type: 'mcq', question: "The ___ Conference.", options: ["Women's", "Womens'"], correctAnswer: "Women's", explanation: "Irregular plural." }
];