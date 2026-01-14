
import React from 'react';

interface InfographicProps {
  typeId: string;
  data: {
    title: string;
    rules: string[];
    examples: { text: string; label: string }[];
    mistakes: { bad: string; good: string; reason: string }[];
    color: string;
  };
}

const Infographic: React.FC<InfographicProps> = ({ data }) => {
  const baseColor = data.color.replace('bg-', '');
  
  return (
    <div className={`w-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border-4 ${data.color.replace('bg-', 'border-')} relative overflow-hidden mb-12`}>
      {/* Decorative Background Elements */}
      <div className="absolute -top-10 -right-10 opacity-5 text-[12rem] rotate-12">
        <i className="fas fa-scroll"></i>
      </div>
      <div className={`absolute -bottom-12 -left-12 w-48 h-48 rounded-full ${data.color} opacity-5`}></div>
      
      <div className="relative z-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl ${data.color} flex items-center justify-center text-white text-3xl shadow-lg`}>
              <i className="fas fa-lightbulb animate-pulse"></i>
            </div>
            <h3 className="text-3xl md:text-4xl font-bubble text-gray-800 tracking-tight">
              {data.title} Cheat Sheet
            </h3>
          </div>
          <div className={`px-5 py-2 rounded-full ${data.color} bg-opacity-20 text-${baseColor} font-bold text-base border-2 ${data.color.replace('bg-', 'border-')} border-opacity-30 whitespace-nowrap`}>
            Jungle Study Guide
          </div>
        </header>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section 1: Rules */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <i className={`fas fa-gavel text-${baseColor} text-lg`}></i>
              <h4 className="font-black text-gray-800 uppercase tracking-widest text-base">The Rules</h4>
            </div>
            <ul className="space-y-4">
              {data.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 group hover:border-orange-200 transition-all">
                  <span className={`mt-2 flex-shrink-0 w-3 h-3 rounded-full ${data.color} shadow-sm group-hover:scale-125 transition-transform`}></span>
                  <span className="text-base md:text-lg font-medium text-gray-700 leading-snug">{rule.replace(/\*\*/g, '')}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Section 2: Examples */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <i className={`fas fa-star text-${baseColor} text-lg`}></i>
              <h4 className="font-black text-gray-800 uppercase tracking-widest text-base">Real Examples</h4>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {data.examples.map((ex, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border-2 border-dashed border-stone-200 hover:border-orange-300 transition-all">
                  <div className={`text-xs md:text-sm font-black text-${baseColor} uppercase tracking-widest mb-2`}>{ex.label}</div>
                  <div className="text-gray-800 font-bold text-xl md:text-2xl">{ex.text.replace(/\*\*/g, '')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Mistakes */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2 text-red-500">
              <i className="fas fa-exclamation-triangle text-lg"></i>
              <h4 className="font-black text-gray-800 uppercase tracking-widest text-base">Don't Get Trapped!</h4>
            </div>
            <div className="space-y-5">
              {data.mistakes.map((m, idx) => (
                <div key={idx} className="bg-red-50/50 p-5 rounded-2xl border border-red-100 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm md:text-base line-through text-red-400 font-bold italic">{m.bad.replace(/\*\*/g, '')}</span>
                    <i className="fas fa-arrow-right text-stone-300 text-sm"></i>
                    <span className="text-sm md:text-base text-green-600 font-black underline decoration-2 underline-offset-4">{m.good.replace(/\*\*/g, '')}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    <span className="font-bold text-red-600">Why?</span> {m.reason.replace(/\*\*/g, '')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
