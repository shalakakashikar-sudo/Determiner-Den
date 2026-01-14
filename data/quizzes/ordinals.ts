import { Question } from '../../types';

export const ordinalsQuiz: Question[] = [
  // --- Months & Calendar ---
  { id: 'ord1', type: 'mcq', question: "January is the ___ month of the year.", options: ["one", "first", "once"], correctAnswer: "first", explanation: "Sequence starts with first." },
  { id: 'ord2', type: 'mcq', question: "December is the ___ month.", options: ["twelve", "twelfth", "twentieth"], correctAnswer: "twelfth", explanation: "Position 12." },
  { id: 'ord3', type: 'mcq', question: "March is the ___ month.", options: ["third", "three", "thirteen"], correctAnswer: "third", explanation: "Position 3." },
  { id: 'ord4', type: 'mcq', question: "February is the ___ month.", options: ["second", "two", "secondary"], correctAnswer: "second", explanation: "Position 2." },
  { id: 'ord5', type: 'mcq', question: "October is the ___ month.", options: ["ten", "tenth", "tent"], correctAnswer: "tenth", explanation: "Position 10." },
  { id: 'ord6', type: 'fill-in-the-blank', question: "Sunday is often considered the ___ day of the week.", correctAnswer: "first", explanation: "Sequence of days." },
  { id: 'ord7', type: 'mcq', question: "August is the ___ month.", options: ["eighth", "eight", "eighty"], correctAnswer: "eighth", explanation: "Position 8." },
  { id: 'ord8', type: 'mcq', question: "November is the ___ month.", options: ["eleventh", "eleven", "oneth"], correctAnswer: "eleventh", explanation: "Position 11." },
  { id: 'ord9', type: 'mcq', question: "My birthday is on the ___ of July.", options: ["four", "fourth", "forth"], correctAnswer: "fourth", explanation: "Dates always use ordinals." },
  { id: 'ord10', type: 'fill-in-the-blank', question: "New Year's Day is on the ___ of January.", correctAnswer: "first", explanation: "1st." },

  // --- Floors & Buildings ---
  { id: 'ord11', type: 'mcq', question: "I live on the ___ floor.", options: ["two", "second", "twice"], correctAnswer: "second", explanation: "Floors are ranked." },
  { id: 'ord12', type: 'mcq', question: "The lobby is usually on the ___ floor.", options: ["ground", "one", "once"], correctAnswer: "ground", explanation: "Often considered the starting point (0 or 1st)." },
  { id: 'ord13', type: 'mcq', question: "The penthouse is on the ___ floor.", options: ["top", "most", "high"], correctAnswer: "top", explanation: "Highest rank." },
  { id: 'ord14', type: 'mcq', question: "Take the elevator to the ___ floor.", options: ["ten", "tenth"], correctAnswer: "tenth", explanation: "Floor number." },
  { id: 'ord15', type: 'mcq', question: "The basement is often the ___ level.", options: ["lower", "lowest", "low"], correctAnswer: "lowest", explanation: "Rank relative to height." },
  
  // --- Competition & Ranking ---
  { id: 'ord16', type: 'fill-in-the-blank', question: "He came ___ in the race. (after the first)", correctAnswer: "second", explanation: "Position 2." },
  { id: 'ord17', type: 'mcq', question: "The winner finished in ___ place.", options: ["one", "first", "once"], correctAnswer: "first", explanation: "Rank 1." },
  { id: 'ord18', type: 'mcq', question: "The runner-up finished ___.", options: ["second", "two", "twice"], correctAnswer: "second", explanation: "Rank 2." },
  { id: 'ord19', type: 'mcq', question: "The wooden spoon goes to the ___ place.", options: ["last", "least", "end"], correctAnswer: "last", explanation: "Final position." },
  { id: 'ord20', type: 'mcq', question: "He won the ___ prize.", options: ["third", "three"], correctAnswer: "third", explanation: "Rank 3." },
  { id: 'ord21', type: 'mcq', question: "This is my ___ attempt at the exam.", options: ["second", "two"], correctAnswer: "second", explanation: "Sequence of tries." },
  { id: 'ord22', type: 'mcq', question: "She ranked ___ in the class.", options: ["five", "fifth"], correctAnswer: "fifth", explanation: "Academic rank." },
  { id: 'ord23', type: 'mcq', question: "Silver medal is for ___ place.", options: ["second", "two"], correctAnswer: "second", explanation: "Rank 2." },
  { id: 'ord24', type: 'mcq', question: "Bronze medal is for ___ place.", options: ["third", "three"], correctAnswer: "third", explanation: "Rank 3." },
  { id: 'ord25', type: 'mcq', question: "Gold medal is for ___ place.", options: ["first", "one"], correctAnswer: "first", explanation: "Rank 1." },

  // --- Alphabet & Sequences ---
  { id: 'ord26', type: 'mcq', question: "A is the ___ letter of the alphabet.", options: ["first", "one"], correctAnswer: "first", explanation: "Sequence start." },
  { id: 'ord27', type: 'mcq', question: "B is the ___ letter.", options: ["second", "two"], correctAnswer: "second", explanation: "Sequence 2." },
  { id: 'ord28', type: 'mcq', question: "Z is the ___ letter.", options: ["last", "end", "finish"], correctAnswer: "last", explanation: "Sequence end." },
  { id: 'ord29', type: 'mcq', question: "C is the ___ letter.", options: ["third", "three"], correctAnswer: "third", explanation: "Sequence 3." },
  { id: 'ord30', type: 'mcq', question: "M is the ___ letter.", options: ["thirteenth", "thirteen"], correctAnswer: "thirteenth", explanation: "Position 13." },
  { id: 'ord31', type: 'mcq', question: "This is the ___ time I've told you.", options: ["hundredth", "hundred"], correctAnswer: "hundredth", explanation: "Exaggerated sequence." },
  { id: 'ord32', type: 'mcq', question: "Please read the ___ paragraph.", options: ["four", "fourth"], correctAnswer: "fourth", explanation: "Specific order." },
  { id: 'ord33', type: 'mcq', question: "Skip to the ___ chapter.", options: ["nine", "ninth"], correctAnswer: "ninth", explanation: "Specific order." },
  { id: 'ord34', type: 'mcq', question: "He is the ___ child in the family.", options: ["oldest", "one", "most old"], correctAnswer: "oldest", explanation: "Rank by age." },
  { id: 'ord35', type: 'mcq', question: "She is the ___ born.", options: ["first", "one"], correctAnswer: "first", explanation: "Order of birth." },

  // --- Historical & Regnal Numbers ---
  { id: 'ord36', type: 'mcq', question: "Henry VIII is read as Henry the ___.", options: ["Eighth", "Eight"], correctAnswer: "Eighth", explanation: "Regnal numbers are ordinals." },
  { id: 'ord37', type: 'mcq', question: "Elizabeth II is Elizabeth the ___.", options: ["Second", "Two"], correctAnswer: "Second", explanation: "Regnal number." },
  { id: 'ord38', type: 'mcq', question: "Louis XIV is Louis the ___.", options: ["Fourteenth", "Fourteen"], correctAnswer: "Fourteenth", explanation: "Regnal number." },
  { id: 'ord39', type: 'mcq', question: "We live in the ___ century.", options: ["21", "21st"], correctAnswer: "21st", explanation: "Centuries are ordinal." },
  { id: 'ord40', type: 'mcq', question: "The ___ World War ended in 1918.", options: ["One", "First"], correctAnswer: "First", explanation: "Historical event sequence." },

  // --- Spelling & Grammar Checks ---
  { id: 'ord41', type: 'mcq', question: "Which is the correct spelling?", options: ["Ninth", "Nineth"], correctAnswer: "Ninth", explanation: "Drop the 'e' from Nine." },
  { id: 'ord42', type: 'mcq', question: "Which is the correct spelling?", options: ["Twelfth", "Twelveth"], correctAnswer: "Twelfth", explanation: "V changes to F." },
  { id: 'ord43', type: 'mcq', question: "Which is correct?", options: ["Twentieth", "Twenteth"], correctAnswer: "Twentieth", explanation: "Y changes to IE." },
  { id: 'ord44', type: 'mcq', question: "Which is correct?", options: ["Fortieth", "Fourtieth"], correctAnswer: "Fortieth", explanation: "No 'u' in forty." },
  { id: 'ord45', type: 'mcq', question: "Which is correct?", options: ["Fifth", "Fiveth"], correctAnswer: "Fifth", explanation: "Irregular formation." },
  { id: 'ord46', type: 'mcq', question: "5th is written as ___.", options: ["fifth", "five"], correctAnswer: "fifth", explanation: "Abbreviation." },
  { id: 'ord47', type: 'mcq', question: "1st is written as ___.", options: ["first", "onest"], correctAnswer: "first", explanation: "Abbreviation." },
  { id: 'ord48', type: 'mcq', question: "2nd is written as ___.", options: ["second", "twond"], correctAnswer: "second", explanation: "Abbreviation." },
  { id: 'ord49', type: 'mcq', question: "3rd is written as ___.", options: ["third", "threerd"], correctAnswer: "third", explanation: "Abbreviation." },
  { id: 'ord50', type: 'mcq', question: "21st is written as twenty-___.", options: ["first", "one"], correctAnswer: "first", explanation: "Compound ordinal." },

  // --- Sentence Usage ---
  { id: 'ord51', type: 'mcq', question: "This is the ___ time lucky.", options: ["third", "three"], correctAnswer: "third", explanation: "Idiom." },
  { id: 'ord52', type: 'mcq', question: "Love at ___ sight.", options: ["first", "one"], correctAnswer: "first", explanation: "Idiom." },
  { id: 'ord53', type: 'mcq', question: "Usually, we put '___' before ordinal numbers.", options: ["the", "a"], correctAnswer: "the", explanation: "Grammar rule (The first, The second)." },
  { id: 'ord54', type: 'mcq', question: "He finished ___ to last.", options: ["second", "two"], correctAnswer: "second", explanation: "Relative position." },
  { id: 'ord55', type: 'mcq', question: "This is my ___ priority.", options: ["number one", "first"], correctAnswer: "first", explanation: "Though 'number one' is used, 'first' is the grammatical ordinal." },
  { id: 'ord56', type: 'mcq', question: "The ___ step is to mix the ingredients.", options: ["one", "first"], correctAnswer: "first", explanation: "Process order." },
  { id: 'ord57', type: 'mcq', question: "And the ___ step is to bake it.", options: ["next", "two"], correctAnswer: "next", explanation: "'Next' functions as a sequence marker similar to ordinals." },
  { id: 'ord58', type: 'mcq', question: "Ideally, safety comes ___.", options: ["first", "one"], correctAnswer: "first", explanation: "Idiom/Priority." },
  { id: 'ord59', type: 'mcq', question: "I am the ___ person in line.", options: ["fiftieth", "fifty"], correctAnswer: "fiftieth", explanation: "Position." },
  { id: 'ord60', type: 'mcq', question: "It is the ___ anniversary.", options: ["50th", "50"], correctAnswer: "50th", explanation: "Anniversaries use ordinals." },

  // --- Advanced & Mixed ---
  { id: 'ord61', type: 'mcq', question: "In the fraction 1/3, 'third' is an ___.", options: ["ordinal", "cardinal"], correctAnswer: "ordinal", explanation: "The denominator is usually expressed as an ordinal." },
  { id: 'ord62', type: 'mcq', question: "The ___ amendment to the constitution.", options: ["first", "one"], correctAnswer: "first", explanation: "Legal numbering." },
  { id: 'ord63', type: 'mcq', question: "He is in the ___ grade.", options: ["sixth", "six"], correctAnswer: "sixth", explanation: "School levels." },
  { id: 'ord64', type: 'mcq', question: "It is her ___ birthday.", options: ["eighteenth", "eighteen"], correctAnswer: "eighteenth", explanation: "Birthdays are rankings of years." },
  { id: 'ord65', type: 'mcq', question: "Which comes after tenth?", options: ["eleventh", "ninth"], correctAnswer: "eleventh", explanation: "Sequence." },
  { id: 'ord66', type: 'mcq', question: "Which comes before twentieth?", options: ["nineteenth", "twenty-first"], correctAnswer: "nineteenth", explanation: "Sequence." },
  { id: 'ord67', type: 'mcq', question: "The ___ estate (the press).", options: ["fourth", "four"], correctAnswer: "fourth", explanation: "Historical term." },
  { id: 'ord68', type: 'mcq', question: "Eleventh hour means the ___ moment.", options: ["last", "first"], correctAnswer: "last", explanation: "Idiom." },
  { id: 'ord69', type: 'mcq', question: "Second to ___.", options: ["none", "one"], correctAnswer: "none", explanation: "Idiom." },
  { id: 'ord70', type: 'mcq', question: "First come, ___ served.", options: ["first", "one"], correctAnswer: "first", explanation: "Proverb." },
  { id: 'ord71', type: 'mcq', question: "Possession is nine-___ of the law.", options: ["tenths", "tens"], correctAnswer: "tenths", explanation: "Fractional ordinal." },
  { id: 'ord72', type: 'mcq', question: "She finished in the top ___.", options: ["ten", "tenth"], correctAnswer: "ten", explanation: "Exception: 'Top Ten' uses cardinal as a group name." },
  { id: 'ord73', type: 'mcq', question: "The ___ time's a charm.", options: ["third", "three"], correctAnswer: "third", explanation: "Proverb." },
  { id: 'ord74', type: 'mcq', question: "He is a ___ class citizen.", options: ["second", "two"], correctAnswer: "second", explanation: "Social ranking." },
  { id: 'ord75', type: 'mcq', question: "The ___ commandment.", options: ["tenth", "ten"], correctAnswer: "tenth", explanation: "Biblical list." }
];