
import React, { useState, useMemo, useEffect } from 'react';
import { DETERMINER_MODULES } from '../data/determiners.ts';
import { Question, MascotMood } from '../types.ts';
import Mascot from '../components/Mascot.tsx';
import ProgressBar from '../components/ProgressBar.tsx';
import TextFormatter from '../components/TextFormatter.tsx';
import { SUCCESS_MESSAGES, OOPS_MESSAGES } from '../constants/mascotConfig.ts';

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, currentIdx, isReviewing]);

  const allQuestionsPool = useMemo(() => {
    return DETERMINER_MODULES.flatMap(m => m.quiz);
  }, []);

  const currentQuestion = questions[currentIdx];

  useEffect(() => {
    if (step !== 'quiz' || !currentQuestion) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (showExplanation) {
        if (e.key === 'Enter' || e.key === ' ') {
          nextQuestion();
        }
        return;
      }

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
      <div className="max-w-4xl mx-auto py-12 text-center flex flex-col items-center space-y-12 animate-in fade-in zoom-in-95 duration-500">
        <Mascot mood="thinking" message="Are you the ultimate King of the Den? Prove it!" />
        
        <div className="space-y-6">
          <h1 className="text-7xl font-bubble text-orange-600 drop-shadow-sm">The Mega Challenge</h1>
          <p className="text-xl text-stone-400 font-black uppercase tracking-[0.3em]">Choose Your Quest Length</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full max-w-2xl">
          {[5, 10, 20, 30, 40, 50].map(count => (
            <button
              key={count}
              onClick={() => startQuiz(count)}
              className="glass-card p-10 rounded-[2.5rem] text-4xl font-black text-orange-700 hover:bg-orange-600 hover:text-white transition-all transform hover:scale-110 active:scale-90 shadow-2xl border-4 border-orange-50 group"
            >
              <div className="relative z-10">
                {count} 
                <span className="text-[10px] block font-black uppercase mt-3 opacity-60 tracking-widest">Challenges</span>
              </div>
            </button>
          ))}
        </div>

        <button 
          onClick={onBack}
          className="bg-white/50 px-8 py-3 rounded-full text-stone-400 hover:text-orange-600 font-black uppercase tracking-widest text-xs transition-all border border-transparent hover:border-orange-100 flex items-center gap-2"
        >
          <i className="fas fa-arrow-left"></i> Nevermind, take me back
        </button>
      </div>
    );
  }

  if (step === 'result') {
    const percentage = (score / questions.length) * 100;
    const isHero = percentage >= 80;

    if (isReviewing) {
      return (
        <div className="max-w-5xl mx-auto py-12 flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500 pb-24">
          <div className="w-full flex justify-between items-center bg-white p-8 rounded-[2.5rem] shadow-xl border border-stone-100">
             <h2 className="text-4xl font-bubble text-orange-600">The Mega Scroll Review</h2>
             <button 
               onClick={() => setIsReviewing(false)}
               className="bg-orange-100 text-orange-700 px-10 py-3 rounded-full font-black uppercase tracking-widest hover:bg-orange-200 transition-all shadow-md active:scale-95"
             >
               Back
             </button>
          </div>

          <div className="w-full space-y-10">
            {questions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
              return (
                <div key={q.id} className={`glass-card rounded-[3.5rem] p-12 border-l-[1.5rem] ${isCorrect ? 'border-green-500 shadow-green-50' : 'border-red-500 shadow-red-50'} shadow-2xl`}>
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[10px] font-black text-stone-400 tracking-[0.3em] uppercase">CHALLENGE {idx + 1}</span>
                    <i className={`fas ${isCorrect ? 'fa-certificate text-green-500' : 'fa-skull-crossbones text-red-500'} text-4xl`}></i>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-800 mb-10">
                    <TextFormatter text={q.question} />
                  </h4>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className={`p-8 rounded-3xl border-2 ${isCorrect ? 'bg-green-50/50' : 'bg-red-50/50'}`}>
                      <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-3">Your Answer</p>
                      <p className={`text-2xl font-black ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        <TextFormatter text={userAns || 'Skipped'} />
                      </p>
                    </div>
                    {!isCorrect && (
                      <div className="p-8 rounded-3xl bg-green-50/50 border-2 border-green-100">
                        <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-3">Lion's Choice</p>
                        <p className="text-2xl font-black text-green-700">
                          <TextFormatter text={q.correctAnswer} />
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100">
                    <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest mb-3">Wisdom</p>
                    <p className="text-xl text-gray-600 font-bold leading-relaxed italic">
                      <TextFormatter text={q.explanation} />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            onClick={() => setIsReviewing(false)}
            className="px-16 py-6 rounded-full bg-orange-600 text-white font-black uppercase tracking-widest hover:bg-orange-700 transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            Finish Review
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto py-12 text-center flex flex-col items-center space-y-12 animate-in fade-in duration-500 pb-20">
        <Mascot mood={isHero ? 'happy' : 'idle'} className="scale-125" message={isHero ? "You have conquered the Den!" : "A valiant effort! The jungle path continues."} />
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bubble text-orange-600">The Final Roar!</h1>
          <p className="text-4xl font-black text-gray-800">Final Score: {score} / {questions.length}</p>
          <div className="w-full bg-stone-200 h-10 rounded-full overflow-hidden max-w-xl mx-auto mt-6 p-1.5 shadow-inner">
            <div className={`h-full rounded-full transition-all duration-[2s] ${isHero ? 'bg-green-500' : 'bg-orange-500'} shadow-lg`} style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="text-2xl text-stone-500 italic pt-8 font-bubble">
            {isHero ? "You are truly the King of the Den!" : "Great effort! A few more hunts and you'll be unstoppable."}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => setIsReviewing(true)}
            className="bg-blue-500 text-white px-12 py-5 rounded-full text-xl font-black tracking-widest uppercase shadow-2xl hover:bg-blue-600 transition-all flex items-center gap-3 hover:scale-105 active:scale-95"
          >
            <i className="fas fa-scroll"></i> Review Scroll
          </button>
          <button 
            onClick={() => setStep('setup')}
            className="bg-white border-4 border-orange-600 text-orange-600 px-12 py-5 rounded-full text-xl font-black tracking-widest uppercase shadow-lg hover:bg-orange-50 transition-all active:scale-95"
          >
            Try Again
          </button>
          <button 
            onClick={onBack}
            className="bg-orange-600 text-white px-12 py-5 rounded-full text-xl font-black tracking-widest uppercase shadow-2xl hover:bg-orange-700 transition-all hover:scale-105 active:scale-95"
          >
            Home
          </button>
        </div>
      </div>
    );
  }

  const q = currentQuestion;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 pb-20">
      <div className="flex justify-between items-center mb-12 bg-white/30 backdrop-blur-md p-5 rounded-[2.5rem] border border-white/50 shadow-sm">
        <h2 className="text-4xl font-bubble text-orange-500">The Mega Quiz</h2>
        <div className="bg-white/80 px-6 py-2 rounded-full font-black text-stone-400 uppercase tracking-widest text-xs shadow-sm">
          Challenge: {currentIdx + 1} / {questions.length}
        </div>
      </div>

      <div className="mb-16 w-full max-w-5xl mx-auto space-y-6">
        <ProgressBar current={currentIdx + 1} total={questions.length} color="bg-orange-500" />
        <div className="flex justify-center">
          <div className="bg-stone-800 text-white px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase flex items-center gap-3 shadow-xl">
            <i className="fas fa-keyboard text-orange-400"></i>
            <span>Keys 1-4 for choices • Enter to continue</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        <div className="lg:col-span-4 sticky top-12">
          <Mascot mood={feedback?.mood || 'thinking'} message={feedback?.msg || "Listen to the whispers of the leaves! The answer is there."} className="scale-110" />
        </div>
        
        <div className="lg:col-span-8 flex flex-col gap-8 w-full">
          <div className="glass-card p-12 md:p-16 rounded-[4rem] shadow-2xl min-h-[450px] border-4 border-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-orange-400/20"></div>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12 leading-tight">
              <TextFormatter text={q.question} />
            </h3>
            
            <div className="space-y-6">
              {q.type === 'mcq' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {q.options?.map((opt, idx) => (
                    <button
                      key={opt}
                      disabled={showExplanation}
                      onClick={() => handleAnswer(opt)}
                      className={`p-6 rounded-[2rem] border-4 text-left font-black text-xl transition-all flex items-center gap-5 shadow-sm group ${
                        showExplanation
                          ? opt.toLowerCase() === q.correctAnswer.toLowerCase()
                            ? 'bg-green-100 border-green-500 text-green-800 shadow-2xl scale-105 z-10'
                            : answers[q.id] === opt 
                              ? 'bg-red-50 border-red-200 text-red-400 opacity-60'
                              : 'bg-white border-stone-50 text-stone-200'
                          : 'bg-white border-stone-100 hover:border-orange-400 hover:shadow-2xl active:bg-orange-50 hover:-translate-y-1'
                      }`}
                    >
                      <span className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm shrink-0 shadow-inner ${showExplanation ? 'bg-stone-100 text-stone-400' : 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors'}`}>
                        {idx + 1}
                      </span>
                      <TextFormatter text={opt} />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="text"
                    disabled={showExplanation}
                    autoFocus
                    className="w-full p-10 text-4xl border-4 border-stone-100 rounded-[2.5rem] focus:border-orange-400 outline-none font-black shadow-inner bg-stone-50/50"
                    placeholder="Your answer..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.stopPropagation();
                        handleAnswer((e.target as HTMLInputElement).value);
                      }
                    }}
                  />
                </div>
              )}

              {showExplanation && (
                <div className="mt-12 p-10 bg-stone-900 text-white rounded-[3rem] shadow-2xl border-l-[1.5rem] border-orange-500 animate-in slide-in-from-top-10 duration-500">
                  <div className="flex items-center gap-4 mb-6 text-orange-400">
                     <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                      <i className="fas fa-info-circle text-xl"></i>
                     </div>
                     <p className="font-black uppercase tracking-[0.2em] text-[10px]">Lion's Wisdom</p>
                  </div>
                  <p className="text-xl md:text-3xl font-bold leading-relaxed mb-10 opacity-95">
                    <TextFormatter text={q.explanation} />
                  </p>
                  <button 
                    onClick={nextQuestion}
                    className="w-full bg-orange-600 text-white py-6 rounded-[2.5rem] font-black uppercase tracking-widest hover:bg-orange-700 transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95 group"
                  >
                    Next Challenge
                    <kbd className="text-[10px] bg-orange-500 px-3 py-1 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity">Enter</kbd>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalQuiz;
