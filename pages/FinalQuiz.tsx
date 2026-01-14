
import React, { useState, useMemo, useEffect } from 'react';
import { DETERMINER_MODULES } from '../data/determiners';
import { Question, MascotMood } from '../types';
import Mascot from '../components/Mascot';
import ProgressBar from '../components/ProgressBar';
import { SUCCESS_MESSAGES, OOPS_MESSAGES } from '../constants/mascotConfig';

interface FinalQuizProps {
  onBack: () => void;
}

const FinalQuiz: React.FC<FinalQuizProps> = ({ onBack }) => {
  const [step, setStep] = useState<'setup' | 'quiz' | 'result'>('setup');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [feedback, setFeedback] = useState<{ mood: MascotMood; msg: string } | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isReviewing, setIsReviewing] = useState(false);

  // Smooth scroll to top when question or step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, currentIdx, isReviewing]);

  // Pool all available questions from every module
  const allQuestionsPool = useMemo(() => {
    return DETERMINER_MODULES.flatMap(m => m.quiz);
  }, []);

  const currentQuestion = questions[currentIdx];

  // Keyboard controls for quiz
  useEffect(() => {
    if (step !== 'quiz' || !currentQuestion) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (showExplanation) {
        if (e.key === 'Enter' || e.key === ' ') {
          nextQuestion();
        }
        return;
      }

      // MCQ Keyboard Selection
      if (currentQuestion.type === 'mcq' && currentQuestion.options) {
        const key = parseInt(e.key);
        if (!isNaN(key) && key > 0 && key <= currentQuestion.options.length) {
          handleAnswer(currentQuestion.options[key - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, showExplanation, currentQuestion, currentIdx]);

  const startQuiz = (count: number) => {
    const shuffled = [...allQuestionsPool].sort(() => Math.random() - 0.5);
    const finalCount = Math.min(count, shuffled.length);
    setQuestions(shuffled.slice(0, finalCount));
    setStep('quiz');
    setCurrentIdx(0);
    setScore(0);
    setAnswers({});
    setIsReviewing(false);
  };

  const handleAnswer = (ans: string) => {
    if (showExplanation) return;
    
    const q = questions[currentIdx];
    const isCorrect = ans.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
    
    setAnswers(prev => ({ ...prev, [q.id]: ans }));

    if (isCorrect) {
      setScore(s => s + 1);
      setFeedback({ mood: 'happy', msg: SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)] });
    } else {
      setFeedback({ mood: 'oops', msg: OOPS_MESSAGES[Math.floor(Math.random() * OOPS_MESSAGES.length)] });
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setFeedback(null);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setStep('result');
    }
  };

  if (step === 'setup') {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center flex flex-col items-center space-y-10 animate-in fade-in zoom-in-95 duration-500">
        <Mascot mood="thinking" message="How big of a challenge do you want today?" />
        
        <div className="space-y-4">
          <h1 className="text-5xl font-bubble text-orange-600">The Mega Quiz Setup</h1>
          <p className="text-lg text-stone-500">Pick the number of questions you want to tackle!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-xl">
          {[5, 10, 20, 30, 40, 50].map(count => (
            <button
              key={count}
              onClick={() => startQuiz(count)}
              className="glass-card py-6 rounded-2xl text-2xl font-bold text-orange-700 hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-sm border-2 border-orange-100"
            >
              {count} <span className="text-sm block font-normal opacity-80">Questions</span>
            </button>
          ))}
        </div>

        <button 
          onClick={onBack}
          className="text-orange-600 hover:underline font-bold"
        >
          Nevermind, take me back
        </button>
      </div>
    );
  }

  if (step === 'result') {
    const percentage = (score / questions.length) * 100;
    const isHero = percentage >= 80;

    if (isReviewing) {
      return (
        <div className="max-w-4xl mx-auto py-12 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-full flex justify-between items-center mb-4">
             <h2 className="text-4xl font-bubble text-orange-600">Mega Review</h2>
             <button 
               onClick={() => setIsReviewing(false)}
               className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold hover:bg-orange-200 transition-colors"
             >
               Back to Score
             </button>
          </div>

          <div className="w-full space-y-6">
            {questions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
              return (
                <div key={q.id} className={`glass-card rounded-3xl p-6 border-l-8 ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-black text-stone-400">CHALLENGE {idx + 1}</span>
                    <i className={`fas ${isCorrect ? 'fa-check-circle text-green-500' : 'fa-times-circle text-red-500'} text-xl`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">{q.question}</h4>
                  
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Marked</p>
                      <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{userAns || 'None'}</p>
                    </div>
                    {!isCorrect && (
                      <div className="p-3 rounded-xl bg-green-50">
                        <p className="text-[10px] uppercase font-bold text-gray-400">Correct</p>
                        <p className="font-bold text-green-700">{q.correctAnswer}</p>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 italic px-2">{q.explanation}</p>
                </div>
              );
            })}
          </div>

          <button 
            onClick={() => setIsReviewing(false)}
            className="px-12 py-4 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all shadow-xl"
          >
            End Review
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto py-12 text-center flex flex-col items-center space-y-10 animate-in fade-in duration-500">
        <Mascot mood={isHero ? 'happy' : 'idle'} className="scale-125" />
        <div className="space-y-4">
          <h1 className="text-6xl font-bubble text-orange-600">The Final Roar!</h1>
          <p className="text-3xl font-bold text-gray-700">Final Score: {score} / {questions.length}</p>
          <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden max-w-md mx-auto mt-4">
            <div className="bg-orange-500 h-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="text-xl text-stone-500 italic pt-4">
            {isHero ? "You are truly the King of the Den!" : "Great effort! A bit more practice and you'll be unstoppable."}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setIsReviewing(true)}
            className="bg-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-blue-600 transition-all flex items-center gap-2"
          >
            <i className="fas fa-search"></i> Review
          </button>
          <button 
            onClick={() => setStep('setup')}
            className="bg-white border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-full text-xl font-bold shadow-md hover:bg-orange-50 transition-all"
          >
            Try Again
          </button>
          <button 
            onClick={onBack}
            className="bg-orange-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-orange-700 transition-all"
          >
            Home
          </button>
        </div>
      </div>
    );
  }

  const q = currentQuestion;

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bubble text-orange-500">The Mega Quiz</h2>
        <div className="text-stone-500 font-bold">Challenge: {currentIdx + 1} / {questions.length}</div>
      </div>

      <div className="mb-8">
        <ProgressBar current={currentIdx + 1} total={questions.length} color="bg-orange-500" />
        <div className="mt-4 bg-orange-100 px-4 py-2 rounded-xl text-orange-700 text-sm font-bold inline-flex items-center gap-2">
           <i className="fas fa-keyboard"></i>
           <span>Use keys <b>1-4</b> for choices, <b>Enter</b> to continue</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <Mascot mood={feedback?.mood || 'thinking'} message={feedback?.msg || "Think carefully! This is for all the pride!"} />
        </div>
        
        <div className="md:col-span-2 glass-card p-10 rounded-[3rem] shadow-xl min-h-[400px]">
          <h3 className="text-3xl font-bold text-gray-800 mb-10 leading-snug">{q.question}</h3>
          
          <div className="space-y-6">
            {q.type === 'mcq' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {q.options?.map((opt, idx) => (
                  <button
                    key={opt}
                    disabled={showExplanation}
                    onClick={() => handleAnswer(opt)}
                    className={`p-5 rounded-2xl border-2 text-xl font-bold transition-all flex items-center gap-4 ${
                      showExplanation
                        ? opt.toLowerCase() === q.correctAnswer.toLowerCase()
                          ? 'bg-green-100 border-green-500 text-green-700'
                          : answers[q.id] === opt 
                            ? 'bg-red-50 border-red-200 text-red-500'
                            : 'bg-white border-gray-100 text-gray-400'
                        : 'bg-white border-orange-100 hover:border-orange-400 hover:shadow-lg active:scale-95 group'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${showExplanation ? 'bg-gray-200 text-gray-400' : 'bg-orange-200 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'}`}>
                      {idx + 1}
                    </span>
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  disabled={showExplanation}
                  autoFocus
                  className="w-full p-6 text-2xl border-2 border-orange-100 rounded-3xl focus:border-orange-400 outline-none font-bold"
                  placeholder="Your answer..."
                  onKeyDown={(e) => e.key === 'Enter' && handleAnswer((e.target as HTMLInputElement).value)}
                />
              </div>
            )}

            {showExplanation && (
              <div className="mt-8 p-8 bg-stone-50 rounded-3xl border-l-8 border-orange-500 animate-in fade-in slide-in-from-top-4 duration-300">
                <p className="text-lg text-gray-700 mb-6 font-medium">{q.explanation}</p>
                <button 
                  onClick={nextQuestion}
                  className="w-full bg-stone-800 text-white py-4 rounded-2xl font-bold hover:bg-black transition-colors flex items-center justify-center gap-2"
                >
                  Onward to the next! <kbd className="text-xs bg-white/20 px-2 py-0.5 rounded">Enter</kbd>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalQuiz;
