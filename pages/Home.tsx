
import React from 'react';
import { DETERMINER_MODULES } from '../data/determiners.ts';
import Mascot from '../components/Mascot.tsx';

interface HomeProps {
  onSelectModule: (id: string) => void;
  onStartFinalQuiz: () => void;
}

const Home: React.FC<HomeProps> = ({ onSelectModule, onStartFinalQuiz }) => {
  return (
    <div className="flex flex-col items-center space-y-12 py-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bubble text-orange-600 drop-shadow-sm">Determiner Den</h1>
        <p className="text-lg md:text-xl text-stone-600 font-medium italic">Your friendly path to mastering grammar!</p>
      </div>

      <Mascot mood="idle" message="Welcome to my den! Ready to roar with knowledge?" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {DETERMINER_MODULES.map((module) => (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className="glass-card p-6 rounded-3xl hover:scale-105 transition-all text-center group flex flex-col items-center shadow-sm hover:shadow-xl border-b-4 border-black/5 active:translate-y-1"
          >
            <div className={`w-16 h-16 rounded-2xl ${module.color} flex items-center justify-center text-white text-3xl mb-4 group-hover:rotate-12 transition-transform`}>
              <i className={`fas ${module.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{module.name}</h3>
            <p className="text-sm text-gray-500 mt-2">Learn & Quiz</p>
          </button>
        ))}
      </div>

      <div className="pt-8">
        <button 
          onClick={onStartFinalQuiz}
          className="bg-orange-600 text-white px-10 py-5 rounded-full text-2xl font-bubble shadow-xl hover:bg-orange-700 hover:scale-110 active:scale-95 transition-all flex items-center gap-3"
        >
          <i className="fas fa-crown"></i>
          The Final Mega Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
