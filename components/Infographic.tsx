
import React from 'react';
import TextFormatter from './TextFormatter.tsx';

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
  const baseColorClass = data.color.replace('bg-', '');
  const borderColorClass = data.color.replace('bg-', 'border-');
  
  return (
    <div className={`w-full max-w-7xl mx-auto bg-[#FCF8F3] rounded-[4rem] p-6 md:p-20 shadow-[0_50px_130px_-25px_rgba(0,0,0,0.15)] border-[14px] ${borderColorClass} border-opacity-10 relative overflow-hidden mb-24`}>
      {/* Premium Texture & Grain */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/pinstripe-dark.png")` }}></div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` }}></div>
      
      {/* Dynamic Glow Orbs */}
      <div className="absolute -top-48 -right-48 w-[40rem] h-[40rem] bg-emerald-200 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-48 -left-48 w-[40rem] h-[40rem] bg-orange-200 rounded-full blur-[150px] opacity-20"></div>

      <div className="relative z-10">
        <header className="flex flex-col items-center mb-20 md:mb-32">
          <div className="inline-flex items-center gap-8 bg-white/95 backdrop-blur-3xl px-12 py-8 rounded-[3.5rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] border-4 border-white ring-[14px] ring-stone-100/50 mb-10 transform -rotate-1 hover:rotate-0 transition-all duration-1000 ease-out group cursor-default">
            <div className={`w-24 h-24 rounded-[2rem] ${data.color} flex items-center justify-center text-white text-5xl shadow-2xl shadow-${baseColorClass}/40 group-hover:scale-110 transition-transform duration-500`}>
              <i className="fas fa-scroll"></i>
            </div>
            <h3 className="text-6xl md:text-9xl font-bubble text-gray-800 tracking-tight leading-none">
              {data.title}
            </h3>
          </div>
          <div className="flex items-center gap-10">
            <span className={`h-2 w-24 rounded-full ${data.color} opacity-20`}></span>
            <span className="text-sm font-black text-stone-400 uppercase tracking-[1em] italic">Official Jungle Decree</span>
            <span className={`h-2 w-24 rounded-full ${data.color} opacity-20`}></span>
          </div>
        </header>

        {/* Improved Full-Width Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* TOP LEFT: The Laws (Spans 8 cols) */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <div className="bg-white rounded-[4rem] p-12 md:p-16 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border-2 border-white relative group overflow-hidden h-full flex flex-col">
              <div className="absolute -top-16 -right-16 opacity-[0.03] text-[20rem] text-stone-900 rotate-12 pointer-events-none group-hover:rotate-0 transition-transform duration-1000">
                <i className="fas fa-balance-scale"></i>
              </div>

              <div className="flex items-center gap-8 mb-16 relative z-10">
                <div className={`w-20 h-20 rounded-[1.5rem] bg-${baseColorClass}/10 flex items-center justify-center text-${baseColorClass} shadow-inner`}>
                   <i className="fas fa-gavel text-4xl"></i>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-gray-800 uppercase tracking-tighter italic leading-none mb-3">The Ancient Laws</h4>
                  <p className="text-sm text-stone-400 font-black uppercase tracking-[0.3em]">Fundamental Jungle Principles</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 relative z-10 flex-grow">
                {data.rules.map((rule, idx) => (
                  <div key={idx} className="flex gap-8 p-10 rounded-[3.5rem] bg-stone-50/40 border-2 border-transparent hover:border-orange-100/60 hover:bg-white hover:shadow-2xl transition-all duration-700 group/item flex-col justify-center">
                    <div className={`shrink-0 w-14 h-14 rounded-2xl ${data.color} flex items-center justify-center text-white text-xl font-black shadow-xl shadow-${baseColorClass}/20 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all`}>
                      {idx + 1}
                    </div>
                    <p className="text-3xl font-bold text-gray-700 leading-tight">
                      <TextFormatter text={rule} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TOP RIGHT: The Danger Zone (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-[#141414] rounded-[4.5rem] p-12 h-full shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] relative overflow-hidden group border-4 border-white/5 flex flex-col">
              <div className="absolute top-0 right-0 h-full w-10 bg-yellow-500/5 flex flex-col justify-around py-4">
                 {[...Array(35)].map((_, i) => <div key={i} className="w-full h-1 bg-black/40 rotate-45"></div>)}
              </div>
              
              <div className="flex items-center gap-6 mb-16 relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-red-600/20 flex items-center justify-center text-red-500 shadow-inner group-hover:scale-110 transition-transform duration-700">
                   <i className="fas fa-skull-crossbones text-4xl"></i>
                </div>
                <div>
                  <h4 className="text-4xl font-bubble text-white tracking-tight leading-none mb-2">Danger Zone</h4>
                  <p className="text-[10px] text-red-500 font-black uppercase tracking-[0.5em]">Lurking Mistakes</p>
                </div>
              </div>

              <div className="space-y-12 relative z-10 flex-grow">
                {data.mistakes.map((m, idx) => (
                  <div key={idx} className="group/mistake">
                    <div className="flex flex-col gap-6 p-10 rounded-[3.5rem] bg-white/[0.04] border-2 border-white/5 hover:border-red-500/40 hover:bg-white/[0.08] transition-all duration-700">
                      <div className="flex flex-col gap-4">
                        <span className="text-red-400/50 font-bold line-through decoration-red-600 text-xl italic break-words">
                          <TextFormatter text={m.bad} />
                        </span>
                        <div className="flex items-center gap-5">
                           <div className="w-12 h-px bg-white/20"></div>
                           <span className="text-green-400 font-black text-3xl underline decoration-green-400/30 underline-offset-[14px] break-words">
                             <TextFormatter text={m.good} />
                           </span>
                        </div>
                      </div>
                      <div className="pt-10 border-t border-white/10 mt-4">
                        <div className="flex items-center gap-3 mb-4">
                           <i className="fas fa-exclamation-circle text-red-600 text-sm"></i>
                           <p className="text-[11px] text-red-600 font-black uppercase tracking-[0.3em]">Why it traps you:</p>
                        </div>
                        <p className="text-xl font-bold text-stone-400 leading-snug italic opacity-70 group-hover/mistake:opacity-100 transition-opacity">
                          <TextFormatter text={m.reason} />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM: Wild Examples (Full Width 12-Column Row) */}
          <div className="lg:col-span-12">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-6 px-12">
                 <div className={`w-3 h-3 rounded-full ${data.color} animate-ping`}></div>
                 <h4 className="text-4xl font-bubble text-gray-800">Wild Examples from the Field</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {data.examples.map((ex, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-2xl p-14 rounded-[4.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08)] border-2 border-white relative overflow-hidden flex flex-col justify-between min-h-[320px] group hover:-translate-y-6 transition-all duration-700 ease-out">
                    <div className={`absolute top-0 left-0 w-full h-4 ${data.color} opacity-10 group-hover:opacity-100 transition-all duration-500`}></div>
                    
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className="text-[12px] font-black uppercase text-stone-300 tracking-[0.5em] group-hover:text-stone-400 transition-colors">Observed Case</span>
                        <span className="text-4xl font-black text-stone-200 mt-1 opacity-50">#0{idx + 1}</span>
                      </div>
                      <div className="w-16 h-16 rounded-3xl bg-stone-50 flex items-center justify-center text-stone-200 group-hover:text-yellow-500 group-hover:bg-yellow-50 transition-all duration-500">
                          <i className="fas fa-leaf text-2xl"></i>
                      </div>
                    </div>

                    <div className="py-12 flex flex-col items-center text-center">
                      <div className="text-4xl md:text-5xl font-bubble text-gray-800 leading-tight break-words overflow-wrap-anywhere">
                        <TextFormatter text={ex.text} />
                      </div>
                    </div>

                    <div className="pt-10 border-t border-stone-100 flex items-center justify-center">
                      <div className={`px-10 py-3 rounded-full ${data.color} bg-opacity-10 text-${baseColorClass} text-xs font-black uppercase tracking-[0.4em] shadow-sm group-hover:shadow-md transition-shadow`}>
                        {ex.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* REFINED FOOTER: Verified Pride Badge */}
        <div className="mt-32 flex justify-center">
           <div className="bg-white/60 backdrop-blur-3xl px-16 py-8 rounded-[4rem] border-2 border-white flex items-center gap-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-700 cursor-help">
             <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center text-3xl shadow-2xl shadow-green-200/50 animate-pulse">
               <i className="fas fa-check-double"></i>
             </div>
             <div className="text-left">
               <p className="text-2xl font-black text-gray-800 leading-none mb-3 uppercase tracking-tighter">Verified Jungle Law</p>
               <p className="text-xs text-stone-400 font-black uppercase tracking-[0.5em] italic opacity-80">Pride Expert Approved • Fully Offline Den Resource</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
