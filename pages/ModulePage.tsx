
import React, { useState, useEffect } from 'react';
import { Question, MascotMood, ModuleData } from '../types.ts';
import Mascot from '../components/Mascot.tsx';
import ProgressBar from '../components/ProgressBar.tsx';
import Infographic from '../components/Infographic.tsx';
import TextFormatter from '../components/TextFormatter.tsx';
import { SUCCESS_MESSAGES, OOPS_MESSAGES } from '../constants/mascotConfig.ts';

interface ModulePageProps {
  module: ModuleData;
  onBack: () => void;
}

const ModulePage: React.FC<ModulePageProps> = ({ module, onBack }) => {
  const [step, setStep] = useState<'learn' | 'quizSetup' | 'quiz' | 'result'>('learn');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<{ mood: MascotMood; msg: string } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [isReviewing, setIsReviewing] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, currentSlideIndex, currentQuestionIndex, isReviewing]);

  const currentQuestion = activeQuestions[currentQuestionIndex];

  useEffect(() => {
    if (step !== 'quiz') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // If explanation is visible, Enter advances
      if (showExplanation) {
        if (e.key === 'Enter' || e.key === ' ') {
          nextQuestion();
        }
        return;
      }

      // Hotkeys for MCQ
      if (currentQuestion?.type === 'mcq' && currentQuestion.options) {
        const key = parseInt(e.key);
        if (!isNaN(key) && key > 0 && key <= currentQuestion.options.length) {
          handleAnswer(currentQuestion.options[key - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, showExplanation, currentQuestion, currentQuestionIndex]);

  const nextSlide = () => {
    if (currentSlideIndex < module.learnSlides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setStep('quizSetup');
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      onBack();
    }
  };

  const startQuiz = (count: number) => {
    const shuffled = [...module.quiz].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));
    setActiveQuestions(selected);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers({});
    setStep('quiz');
    setIsReviewing(false);
  };

  const handleAnswer = (ans: string) => {
    if (showExplanation) return;
    
    const isCorrect = ans.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim();
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: ans }));
    
    if (isCorrect) {
      setScore(score + 1);
      setLastFeedback({ 
        mood: 'happy', 
        msg: SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)] 
      });
    } else {
      setLastFeedback({ 
        mood: 'oops', 
        msg: OOPS_MESSAGES[Math.floor(Math.random() * OOPS_MESSAGES.length)] 
      });
    }
    
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setLastFeedback(null);
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('result');
    }
  };

  const resetModule = () => {
    setStep('learn');
    setCurrentSlideIndex(0);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers({});
    setLastFeedback(null);
    setActiveQuestions([]);
    setIsReviewing(false);
  };

  const renderLearn = () => {
    const slide = module.learnSlides[currentSlideIndex];
    const isLastSlide = currentSlideIndex === module.learnSlides.length - 1;

    return (
      <div className="flex flex-col items-center space-y-10 animate-in fade-in slide-in-from-right-4 duration-500 max-w-6xl mx-auto pb-12">
        <div className="w-full">
          {isLastSlide && module.infographic && (
            <Infographic typeId={module.id} data={module.infographic} />
          )}
          
          <div className="glass-card rounded-[3.5rem] p-10 md:p-16 shadow-2xl relative z-10 border-4 border-white overflow-hidden">
            <div className="flex items-center gap-6 mb-12">
              <div className={`w-16 h-16 rounded-2xl ${module.color} flex items-center justify-center text-white text-3xl shadow-lg ring-4 ring-white`}>
                <i className={`fas ${module.icon}`}></i>
              </div>
              <h2 className="text-4xl md:text-5xl font-bubble text-gray-800 tracking-tight">{slide.title}</h2>
            </div>
            
            <div className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 whitespace-pre-line font-medium bg-stone-50/50 p-8 md:p-12 rounded-3xl border border-stone-100/50">
              <TextFormatter text={slide.content} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Examples Section - Now wider to prevent overflow */}
              <div className={`${slide.didYouKnow ? 'lg:col-span-7' : 'lg:col-span-12'} bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border-2 border-stone-100`}>
                <h4 className="font-black text-gray-800 uppercase tracking-widest mb-8 flex items-center gap-3 text-sm">
                  <i className="fas fa-paw text-orange-500"></i> THE EXAMPLES
                </h4>
                <ul className="space-y-6">
                  {slide.examples.map((ex, i) => (
                    <li key={i} className={`text-xl md:text-2xl font-bold p-6 md:p-8 rounded-[2rem] border-2 transition-transform hover:scale-[1.01] shadow-sm ${ex.isCorrect ? 'bg-green-50/40 border-green-100 text-green-900' : 'bg-red-50/40 border-red-100 text-red-900'}`}>
                      <div className="flex items-start gap-5">
                        <div className={`mt-1.5 shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${ex.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                          <i className={`fas ${ex.isCorrect ? 'fa-check' : 'fa-times'} text-sm`}></i>
                        </div>
                        <div className="flex-1 min-w-0 break-words leading-snug">
                          <TextFormatter text={ex.text} />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Did You Know Section */}
              {slide.didYouKnow && (
                <div className="lg:col-span-5 flex items-stretch">
                   <div className="bg-orange-600 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute -top-10 -right-10 p-4 opacity-10">
                      <i className="fas fa-lightbulb text-[12rem] rotate-12"></i>
                    </div>
                    <h4 className="font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3 text-[11px] opacity-70">
                      LEO'S SECRET SCROLL
                    </h4>
                    <p className="text-3xl md:text-4xl font-bubble leading-tight italic relative z-10">
                      "<TextFormatter text={slide.didYouKnow} />"
                    </p>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex items-end gap-8 px-4 md:px-0">
          <div className="shrink-0">
            <Mascot mood="idle" message={slide.didYouKnow ? "Got that secret? Let's hunt for more!" : "Your wisdom grows like a lion's mane!"} className="w-28 md:w-36" />
          </div>
          <div className="flex-grow flex gap-4 justify-between items-center pb-6">
            <button onClick={prevSlide} className="px-10 py-4 rounded-full bg-stone-200 text-gray-700 font-black uppercase tracking-widest hover:bg-stone-300 transition-all shadow-md active:scale-95">
              Back
            </button>
            <div className="flex gap-3">
              {module.learnSlides.map((_, i) => (
                <div key={i} className={`h-3 rounded-full transition-all duration-500 ${i === currentSlideIndex ? 'bg-orange-600 w-12 shadow-lg shadow-orange-200' : 'bg-orange-100 w-3'}`}></div>
              ))}
            </div>
            <button onClick={nextSlide} className="px-12 py-5 rounded-full bg-orange-600 text-white font-black uppercase tracking-widest hover:bg-orange-700 transition-all shadow-2xl shadow-orange-200 hover:scale-105 active:scale-95 flex items-center gap-2">
              {isLastSlide ? 'Begin Hunt' : 'Next Lesson'}
              <i className="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderQuizSetup = () => {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center flex flex-col items-center space-y-12 animate-in fade-in zoom-in-95 duration-500 px-4">
        <Mascot mood="thinking" message={`Ready for the ${module.name} challenge? Choose your challenge length!`} />
        
        <div className="space-y-6">
          <h1 className="text-6xl font-bubble text-orange-600">The Quiz Arena</h1>
          <p className="text-xl text-stone-400 font-black uppercase tracking-[0.3em]">Select Question Count</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full max-w-3xl">
          {[5, 10, 20, 30, 40, 50].map(count => (
            <button
              key={count}
              onClick={() => startQuiz(count)}
              className="glass-card p-10 rounded-[2.5rem] text-4xl font-black text-orange-700 hover:bg-orange-600 hover:text-white transition-all transform hover:scale-110 active:scale-90 shadow-2xl border-4 border-orange-50 group relative overflow-hidden"
            >
              <div className="relative z-10">
                {count} 
                <span className="text-[10px] block font-black uppercase mt-3 opacity-60 tracking-widest">Questions</span>
              </div>
              <div className="absolute -bottom-4 -right-4 text-orange-100 group-hover:text-orange-500/20 transition-colors opacity-40">
                <i className="fas fa-paw text-6xl"></i>
              </div>
            </button>
          ))}
        </div>

        <button 
          onClick={() => setStep('learn')}
          className="bg-white/50 px-8 py-3 rounded-full text-stone-400 hover:text-orange-600 font-black uppercase tracking-widest text-xs transition-all border border-transparent hover:border-orange-100 hover:shadow-md flex items-center gap-2"
        >
          <i className="fas fa-arrow-left"></i> Review the scrolls
        </button>
      </div>
    );
  };

  const renderQuiz = () => {
    const question = activeQuestions[currentQuestionIndex];
    if (!question) return null;

    return (
      <div className="flex flex-col items-center space-y-12 animate-in fade-in zoom-in-95 duration-500 max-w-6xl mx-auto pb-12 px-4">
        <div className="w-full max-w-4xl space-y-6">
          <ProgressBar current={currentQuestionIndex + 1} total={activeQuestions.length} color={module.color} />
          <div className="flex justify-between font-black text-stone-400 uppercase tracking-[0.3em] text-[10px]">
             <span className="bg-white/80 px-5 py-2 rounded-full shadow-sm"><i className="fas fa-keyboard mr-2"></i> Hotkeys 1-4</span>
             <span className="bg-white/80 px-5 py-2 rounded-full shadow-sm">Hunt {currentQuestionIndex + 1} of {activeQuestions.length}</span>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-12 items-start w-full">
          <div className="md:col-span-8 flex flex-col gap-8 w-full">
            <div className="glass-card rounded-[3.5rem] p-10 md:p-16 shadow-2xl min-h-[450px] border-4 border-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-orange-400/20"></div>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12 leading-tight">
                <TextFormatter text={question.question} />
              </h3>
              
              <div className="space-y-5">
                {question.type === 'mcq' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {question.options?.map((opt, idx) => (
                      <button
                        key={opt}
                        disabled={showExplanation}
                        onClick={() => handleAnswer(opt)}
                        className={`p-6 rounded-3xl border-4 text-left font-black text-xl transition-all flex items-center gap-5 shadow-sm group ${
                          showExplanation 
                            ? opt.toLowerCase() === question.correctAnswer.toLowerCase()
                              ? 'bg-green-100 border-green-500 text-green-800 shadow-xl scale-105 z-10'
                              : answers[question.id] === opt 
                                ? 'bg-red-50 border-red-200 text-red-400 opacity-60'
                                : 'bg-white border-stone-50 text-stone-200'
                            : 'bg-white border-stone-100 hover:border-orange-400 hover:shadow-2xl active:bg-orange-50 hover:-translate-y-1'
                        }`}
                      >
                        <span className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm shrink-0 shadow-inner ${showExplanation ? 'bg-stone-100 text-stone-400' : 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors'}`}>
                          {idx + 1}
                        </span>
                        <div className="flex-1 break-words">
                          <TextFormatter text={opt} />
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    <input
                      type="text"
                      disabled={showExplanation}
                      placeholder="Your answer..."
                      autoFocus
                      className="w-full p-10 rounded-[2.5rem] border-4 border-stone-100 focus:border-orange-400 focus:outline-none font-black text-4xl text-gray-800 shadow-inner bg-stone-50/50 placeholder:opacity-30"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.stopPropagation();
                          handleAnswer((e.target as HTMLInputElement).value);
                        }
                      }}
                    />
                    {!showExplanation && (
                      <p className="text-[10px] text-stone-400 font-black text-center uppercase tracking-[0.4em] animate-pulse">Press Enter to check your hunt</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {showExplanation && (
              <div className="p-10 bg-stone-900 text-white rounded-[3rem] shadow-2xl border-l-[1.5rem] border-orange-500 animate-in slide-in-from-top-10 duration-500">
                <div className="flex items-center gap-4 mb-6 text-orange-400">
                   <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                    <i className="fas fa-lightbulb text-xl"></i>
                   </div>
                   <p className="font-black uppercase tracking-[0.2em] text-[10px]">Lion's Wisdom</p>
                </div>
                <p className="text-xl md:text-3xl font-bold leading-relaxed opacity-95 mb-10">
                  <TextFormatter text={question.explanation} />
                </p>
                <button 
                  onClick={nextQuestion}
                  className="w-full bg-orange-600 text-white py-6 rounded-[2rem] font-black uppercase tracking-widest hover:bg-orange-700 transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95 group"
                >
                  Onward! 
                  <span className="text-xs bg-orange-500 px-3 py-1 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity">Enter</span>
                </button>
              </div>
            )}
          </div>
          
          <div className="hidden md:block md:col-span-4 sticky top-12">
             <Mascot 
              mood={lastFeedback ? lastFeedback.mood : 'thinking'} 
              message={lastFeedback ? lastFeedback.msg : "Focus, young cub! The correct determiner is out there."} 
              className="scale-110"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const isGreatScore = score / activeQuestions.length >= 0.8;
    
    if (isReviewing) {
      return (
        <div className="flex flex-col items-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500 pb-24 max-w-5xl mx-auto px-4">
          <div className="w-full flex justify-between items-center bg-white p-8 rounded-[2.5rem] shadow-xl border border-stone-100">
             <h2 className="text-4xl font-bubble text-orange-600">The Hunt Review</h2>
             <button 
               onClick={() => setIsReviewing(false)}
               className="bg-orange-100 text-orange-700 px-10 py-3 rounded-full font-black uppercase tracking-widest hover:bg-orange-200 transition-all shadow-md active:scale-95"
             >
               Back
             </button>
          </div>

          <div className="w-full space-y-10">
            {activeQuestions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
              return (
                <div key={q.id} className={`glass-card rounded-[3.5rem] p-12 border-l-[1.5rem] ${isCorrect ? 'border-green-500 shadow-green-50' : 'border-red-500 shadow-red-50'} shadow-2xl`}>
                  <div className="flex justify-between items-start mb-10">
                    <span className="bg-stone-100 text-stone-500 text-[10px] px-6 py-2 rounded-full font-black uppercase tracking-[0.3em]">HUNT {idx + 1}</span>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      <i className={`fas ${isCorrect ? 'fa-check' : 'fa-times'}`}></i>
                    </div>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 leading-tight">
                    <TextFormatter text={q.question} />
                  </h4>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    <div className={`p-8 rounded-3xl border-2 ${isCorrect ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}>
                      <p className="text-[10px] uppercase font-black text-gray-400 mb-3 tracking-widest">Your Roar</p>
                      <p className={`text-2xl font-black ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        <TextFormatter text={userAns || 'No answer'} />
                      </p>
                    </div>
                    {!isCorrect && (
                      <div className="p-8 rounded-3xl bg-green-50/50 border-2 border-green-100">
                        <p className="text-[10px] uppercase font-black text-gray-400 mb-3 tracking-widest">Correct Answer</p>
                        <p className="text-2xl font-black text-green-700">
                          <TextFormatter text={q.correctAnswer} />
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100">
                    <p className="text-[10px] uppercase font-black text-stone-400 mb-4 tracking-[0.2em]">Leo's Wisdom</p>
                    <p className="text-gray-600 text-xl font-bold leading-relaxed italic">
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
            Back to Score
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center space-y-12 py-10 text-center animate-in fade-in duration-500 pb-20 px-4">
        <Mascot mood={isGreatScore ? 'happy' : 'idle'} className="scale-125" message={isGreatScore ? "You're the King of the Jungle!" : "Great effort, young cub! Let's practice more."} />
        
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-bubble text-orange-600">The Hunt is Over!</h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl font-black text-gray-800">Your Score: {score} / {activeQuestions.length}</p>
            <div className="w-full max-w-xl h-8 bg-stone-200 rounded-full overflow-hidden mt-6 p-1">
              <div 
                className={`h-full transition-all duration-[1.5s] rounded-full shadow-inner ${isGreatScore ? 'bg-green-500' : 'bg-orange-500'}`}
                style={{ width: `${(score / activeQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => setIsReviewing(true)}
            className="px-12 py-5 rounded-full bg-blue-500 text-white font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95"
          >
            <i className="fas fa-list-check"></i> Review
          </button>
          <button 
            onClick={resetModule}
            className="px-12 py-5 rounded-full bg-white border-4 border-orange-600 text-orange-600 font-black uppercase tracking-widest hover:bg-orange-50 transition-all flex items-center gap-3 shadow-lg active:scale-95"
          >
            <i className="fas fa-undo"></i> Try Again
          </button>
          <button 
            onClick={onBack}
            className="px-16 py-5 rounded-full bg-orange-600 text-white font-black uppercase tracking-widest hover:bg-orange-700 shadow-2xl hover:scale-105 transition-all flex items-center gap-3 active:scale-95"
          >
            <i className="fas fa-home"></i> Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-8 relative px-4">
      <div className="mb-12 flex justify-between items-center bg-white/30 backdrop-blur-md p-4 rounded-3xl border border-white/50">
        <button onClick={onBack} className="text-orange-600 hover:text-orange-800 font-black uppercase tracking-widest text-xs flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
          <i className="fas fa-chevron-left"></i> Home
        </button>
        <span className="font-bubble text-3xl text-orange-400 drop-shadow-sm">{module.name}</span>
        <div className="w-20 hidden md:block"></div>
      </div>

      {step === 'learn' && renderLearn()}
      {step === 'quizSetup' && renderQuizSetup()}
      {step === 'quiz' && renderQuiz()}
      {step === 'result' && renderResult()}
    </div>
  );
};

export default ModulePage;
