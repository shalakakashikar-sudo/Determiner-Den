
import React, { useState, useMemo, useEffect } from 'react';
import { Question, MascotMood } from '../types';
import { ModuleData } from '../data/determiners';
import Mascot from '../components/Mascot';
import ProgressBar from '../components/ProgressBar';
import Infographic from '../components/Infographic';
import { SUCCESS_MESSAGES, OOPS_MESSAGES } from '../constants/mascotConfig';

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

  // Smooth scroll to top when slide, question, or step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, currentSlideIndex, currentQuestionIndex, isReviewing]);

  const currentQuestion = activeQuestions[currentQuestionIndex];

  // Keyboard controls
  useEffect(() => {
    if (step !== 'quiz') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (showExplanation) {
        if (e.key === 'Enter' || e.key === ' ') {
          nextQuestion();
        }
        return;
      }

      // MCQ Keyboard Selection
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

  // Learning Handlers
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

  // Quiz Setup Handlers
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

  // Quiz Handlers
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

  // Rendering
  const renderLearn = () => {
    const slide = module.learnSlides[currentSlideIndex];
    const isLastSlide = currentSlideIndex === module.learnSlides.length - 1;

    return (
      <div className="flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="w-full max-w-4xl">
          {isLastSlide && module.infographic && (
            <Infographic typeId={module.id} data={module.infographic} />
          )}
          
          <div className="glass-card rounded-3xl p-8 shadow-lg relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center text-white text-2xl`}>
                <i className={`fas ${module.icon}`}></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{slide.title}</h2>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 whitespace-pre-line">{slide.content}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-400">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <i className="fas fa-check-circle"></i> Examples
                </h4>
                <ul className="space-y-2">
                  {slide.examples.map((ex, i) => (
                    <li key={i} className={`text-lg ${ex.isCorrect ? 'text-green-700' : 'text-red-700 line-through opacity-70'}`}>
                      {ex.text}
                    </li>
                  ))}
                </ul>
              </div>
              
              {slide.didYouKnow && (
                <div className="flex items-stretch">
                   <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-400 flex flex-col justify-center w-full">
                    <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                      <i className="fas fa-lightbulb text-yellow-500"></i> Leo's Tip
                    </h4>
                    <p className="text-blue-700 italic">"{slide.didYouKnow}"</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl flex items-end gap-6 pb-4">
          <div className="shrink-0">
            <Mascot mood="idle" message={slide.didYouKnow ? "Got that tip? Let's keep moving!" : "You're doing great, cub!"} className="w-28 md:w-32" />
          </div>
          <div className="flex-grow flex gap-4 justify-between items-center pb-4">
            <button onClick={prevSlide} className="px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 transition-colors">
              Back
            </button>
            <div className="flex gap-2">
              {module.learnSlides.map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i === currentSlideIndex ? 'bg-orange-500 w-8' : 'bg-orange-200'} transition-all`}></div>
              ))}
            </div>
            <button onClick={nextSlide} className="px-8 py-3 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200">
              {isLastSlide ? 'Start Quiz' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderQuizSetup = () => {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center flex flex-col items-center space-y-10 animate-in fade-in zoom-in-95 duration-500">
        <Mascot mood="thinking" message={`Time for the ${module.name} challenge! How many questions?`} />
        
        <div className="space-y-4">
          <h1 className="text-5xl font-bubble text-orange-600">Quiz Settings</h1>
          <p className="text-lg text-stone-500">Select the number of questions to practice.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl">
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
          onClick={() => setStep('learn')}
          className="text-orange-600 hover:underline font-bold"
        >
          Wait, I want to review the rules again
        </button>
      </div>
    );
  };

  const renderQuiz = () => {
    const question = activeQuestions[currentQuestionIndex];
    if (!question) return null;

    return (
      <div className="flex flex-col items-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <div className="w-full max-w-4xl space-y-4">
          <ProgressBar current={currentQuestionIndex + 1} total={activeQuestions.length} />
          <div className="flex justify-between font-bold text-orange-600 text-sm">
             <span className="bg-orange-100 px-3 py-1 rounded-full"><i className="fas fa-keyboard mr-1"></i> Use 1-4 for MCQs, Enter to Continue</span>
             <span>Question {currentQuestionIndex + 1} of {activeQuestions.length}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-end w-full max-w-5xl">
          <div className="w-full md:w-2/3 glass-card rounded-3xl p-8 shadow-lg min-h-[300px]">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{question.question}</h3>
            
            <div className="space-y-4">
              {question.type === 'mcq' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {question.options?.map((opt, idx) => (
                    <button
                      key={opt}
                      disabled={showExplanation}
                      onClick={() => handleAnswer(opt)}
                      className={`p-4 rounded-2xl border-2 text-left font-bold transition-all flex items-center gap-3 ${
                        showExplanation 
                          ? opt.toLowerCase() === question.correctAnswer.toLowerCase()
                            ? 'bg-green-100 border-green-500 text-green-700'
                            : answers[question.id] === opt 
                              ? 'bg-red-50 border-red-200 text-red-500'
                              : 'bg-white border-gray-100 text-gray-400'
                          : 'bg-white border-orange-100 hover:border-orange-400 hover:shadow-md active:bg-orange-50 group'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${showExplanation ? 'bg-gray-200 text-gray-500' : 'bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors'}`}>
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
                    placeholder="Type your answer..."
                    autoFocus
                    className="w-full p-4 rounded-2xl border-2 border-orange-100 focus:border-orange-400 focus:outline-none font-bold text-xl"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAnswer((e.target as HTMLInputElement).value);
                    }}
                  />
                  {!showExplanation && (
                    <p className="text-sm text-gray-400 text-center italic">Press Enter to check</p>
                  )}
                </div>
              )}
            </div>

            {showExplanation && (
              <div className="mt-8 p-6 bg-orange-50 rounded-2xl border-l-4 border-orange-400 animate-in slide-in-from-top-4 duration-300">
                <p className="font-bold text-orange-800 mb-2">Explanation:</p>
                <p className="text-gray-700">{question.explanation}</p>
                <button 
                  onClick={nextQuestion}
                  className="mt-4 w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  Continue <kbd className="text-[10px] bg-orange-500/50 px-1.5 rounded">Enter</kbd>
                </button>
              </div>
            )}
          </div>
          
          <div className="hidden md:block w-1/3">
             <Mascot 
              mood={lastFeedback ? lastFeedback.mood : 'thinking'} 
              message={lastFeedback ? lastFeedback.msg : "Focus, you can do it!"} 
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
        <div className="flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
          <div className="w-full max-w-4xl flex justify-between items-center mb-4">
             <h2 className="text-3xl font-bubble text-orange-600">Review Answers</h2>
             <button 
               onClick={() => setIsReviewing(false)}
               className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold hover:bg-orange-200 transition-colors"
             >
               Back to Summary
             </button>
          </div>

          <div className="w-full max-w-4xl space-y-6">
            {activeQuestions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns?.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
              return (
                <div key={q.id} className={`glass-card rounded-3xl p-6 border-l-8 ${isCorrect ? 'border-green-500' : 'border-red-500 shadow-red-50/50'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-stone-100 text-stone-500 text-xs px-3 py-1 rounded-full font-bold">QUESTION {idx + 1}</span>
                    <i className={`fas ${isCorrect ? 'fa-check-circle text-green-500' : 'fa-times-circle text-red-500'} text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{q.question}</h4>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className={`p-4 rounded-2xl ${isCorrect ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
                      <p className="text-xs uppercase font-black text-gray-400 mb-1">Your Answer</p>
                      <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{userAns || 'Skipped'}</p>
                    </div>
                    {!isCorrect && (
                      <div className="p-4 rounded-2xl bg-green-50 border border-green-100">
                        <p className="text-xs uppercase font-black text-gray-400 mb-1">Correct Answer</p>
                        <p className="font-bold text-green-700">{q.correctAnswer}</p>
                      </div>
                    )}
                  </div>

                  <div className="p-4 bg-orange-50/50 rounded-2xl">
                    <p className="text-xs uppercase font-black text-orange-300 mb-1">Explanation</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            onClick={() => setIsReviewing(false)}
            className="mt-8 px-10 py-4 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all shadow-lg"
          >
            Finish Review
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center space-y-12 py-10 text-center animate-in fade-in duration-500">
        <Mascot mood={isGreatScore ? 'happy' : 'idle'} className="scale-110" />
        
        <div className="space-y-4">
          <h2 className="text-5xl font-bubble text-orange-600">Quiz Completed!</h2>
          <p className="text-3xl font-bold text-gray-700">You scored {score} out of {activeQuestions.length}</p>
          <div className="w-full max-w-md mx-auto h-6 bg-gray-200 rounded-full overflow-hidden mt-6">
            <div 
              className={`h-full transition-all duration-1000 ${isGreatScore ? 'bg-green-500' : 'bg-orange-400'}`}
              style={{ width: `${(score / activeQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setIsReviewing(true)}
            className="px-8 py-4 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg"
          >
            <i className="fas fa-list-check"></i> Review Answers
          </button>
          <button 
            onClick={resetModule}
            className="px-8 py-4 rounded-full bg-white border-2 border-orange-600 text-orange-600 font-bold hover:bg-orange-50 transition-all flex items-center gap-2"
          >
            <i className="fas fa-undo"></i> Try Again
          </button>
          <button 
            onClick={onBack}
            className="px-10 py-4 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-700 shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            <i className="fas fa-home"></i> Back to Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-4 relative">
      <div className="mb-8 flex justify-between items-center">
        <button onClick={onBack} className="text-orange-600 hover:text-orange-800 font-bold flex items-center gap-2">
          <i className="fas fa-chevron-left"></i> Home
        </button>
        <span className="font-bubble text-2xl text-orange-400">{module.name} Module</span>
      </div>

      {step === 'learn' && renderLearn()}
      {step === 'quizSetup' && renderQuizSetup()}
      {step === 'quiz' && renderQuiz()}
      {step === 'result' && renderResult()}
    </div>
  );
};

export default ModulePage;
