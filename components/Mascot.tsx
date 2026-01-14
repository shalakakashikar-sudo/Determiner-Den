import React, { useState, useEffect, useRef } from 'react';
import { MascotMood } from '../types';
import { LEO_COMMENTS } from '../constants/mascotConfig';

interface MascotProps {
  mood: MascotMood;
  message?: string;
  className?: string;
}

const Mascot: React.FC<MascotProps> = ({ mood: propMood, message, className = "" }) => {
  const [isTickled, setIsTickled] = useState(false);
  const [tickleMsg, setTickleMsg] = useState("");
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; scale: number }[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const nextSparkleId = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Effective mood determines what to show (overrides prop mood if tickled)
  const effectiveMood = isTickled ? 'tickled' : propMood;

  // --- Animation & Interaction Logic ---

  // 1. Mouse Tracking for Eyes
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      // Don't track if blinking or in states where eyes are closed/fixed
      if (isBlinking || ['roar', 'oops', 'tickled'].includes(effectiveMood)) {
         setMousePos({ x: 0, y: 0 });
         return;
      }
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ 
        x: Math.max(-1.2, Math.min(1.2, x)), 
        y: Math.max(-1.2, Math.min(1.2, y)) 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [effectiveMood, isBlinking]);

  // 2. Random Blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      // Don't blink if already in a special eye state
      if (['roar', 'oops', 'sad', 'surprised'].includes(effectiveMood)) return;
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 250);
    }, 3500 + Math.random() * 3000);
    return () => clearInterval(blinkInterval);
  }, [effectiveMood]);

  // 3. Tickle Handler
  const handleTickle = () => {
    if (isTickled) return;
    setIsTickled(true);
    const randomTip = LEO_COMMENTS[Math.floor(Math.random() * LEO_COMMENTS.length)];
    setTickleMsg(randomTip);

    const newSparkles = Array.from({ length: 14 }).map(() => ({
      id: nextSparkleId.current++,
      x: (Math.random() - 0.5) * 140,
      y: (Math.random() - 0.5) * 140,
      scale: 0.4 + Math.random() * 1.2
    }));
    setSparkles(prev => [...prev, ...newSparkles]);

    setTimeout(() => setIsTickled(false), 2000);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => !newSparkles.find(ns => ns.id === s.id)));
    }, 1200);
  };

  // --- SVG Sub-Renderers ---

  const pupilX = mousePos.x * 3.5; 
  const pupilY = mousePos.y * 3.5;
  const standardEyeColor = "#374151"; // Dark gray/black

  const renderEyes = () => {
    if (isBlinking || effectiveMood === 'tickled') {
      // Happy closed eyes ^ ^
      return <g>
        <path d="M32,50 Q40,42 48,50" stroke={standardEyeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M52,50 Q60,42 68,50" stroke={standardEyeColor} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>;
    }

    switch (effectiveMood) {
      case 'oops': // X X eyes
        return <g className="animate-pulse">
          <path d="M34,44 L46,56 M46,44 L34,56" stroke={standardEyeColor} strokeWidth="3" strokeLinecap="round" />
          <path d="M54,44 L66,56 M66,44 L54,56" stroke={standardEyeColor} strokeWidth="3" strokeLinecap="round" />
        </g>;
      case 'roar': // > < eyes
        return <g>
           <path d="M34,44 L46,50 L34,56" stroke={standardEyeColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
           <path d="M66,44 L54,50 L66,56" stroke={standardEyeColor} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>;
      case 'sad': // Droopy, teary eyes
        return <g>
          <circle cx="40" cy="52" r="7" fill="white" stroke={standardEyeColor} strokeWidth="1"/>
          <circle cx="60" cy="52" r="7" fill="white" stroke={standardEyeColor} strokeWidth="1"/>
          {/* Pupils looking down/sadly */}
          <circle cx="40" cy="54" r="3.5" fill={standardEyeColor} />
          <circle cx="60" cy="54" r="3.5" fill={standardEyeColor} />
          {/* Droopy lids */}
          <path d="M32,48 Q40,44 48,48" stroke={standardEyeColor} strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M52,48 Q60,44 68,48" stroke={standardEyeColor} strokeWidth="2" fill="none" opacity="0.5" />
        </g>;
      case 'surprised': // Wide open O_O
         return <g>
            <circle cx="40" cy="50" r="9" fill="white" stroke={standardEyeColor} strokeWidth="2"/>
            <circle cx="60" cy="50" r="9" fill="white" stroke={standardEyeColor} strokeWidth="2"/>
            {/* Tiny pupils */}
            <circle cx="40" cy="50" r="2.5" fill={standardEyeColor} />
            <circle cx="60" cy="50" r="2.5" fill={standardEyeColor} />
         </g>;
      default: // Standard tracking eyes
        return <g>
          <circle cx="40" cy="50" r="8" fill="white" />
          <circle cx="60" cy="50" r="8" fill="white" />
          <g style={{ transform: `translate(${pupilX}px, ${pupilY}px)` }} className="transition-transform duration-75">
            <circle cx="40" cy="50" r="3.5" fill={standardEyeColor} />
            <circle cx="38" cy="48" r="1.5" fill="white" />
            <circle cx="60" cy="50" r="3.5" fill={standardEyeColor} />
            <circle cx="58" cy="48" r="1.5" fill="white" />
          </g>
        </g>;
    }
  };

  const renderMouth = () => {
    const mouthColor = "#78350F"; // Dark brown/reddish
    switch (effectiveMood) {
      case 'happy':
      case 'tickled':
        return <path d="M42,62 Q50,70 58,62" fill="none" stroke={mouthColor} strokeWidth="2.5" strokeLinecap="round" />;
      case 'grin':
         return <path d="M38,62 Q50,72 62,62" fill="white" stroke={mouthColor} strokeWidth="2.5" strokeLinecap="round" />;
      case 'oops':
        return <ellipse cx="50" cy="65" rx="3" ry="4" fill={mouthColor} />; // Small open mouth
      case 'sad':
        return <path d="M38,68 Q50,58 62,68" fill="none" stroke={mouthColor} strokeWidth="3" strokeLinecap="round" />; // Frown
      case 'surprised':
         return <circle cx="50" cy="66" r="4" fill="none" stroke={mouthColor} strokeWidth="3" />; // Little 'o'
      case 'roar':
        return <path d="M38,62 Q50,75 62,62 Q60,55 50,55 Q40,55 38,62 Z" fill={mouthColor} stroke={mouthColor} strokeWidth="1" strokeLinejoin="round" />; 
      case 'thinking':
        return <path d="M45,65 Q50,65 55,65" fill="none" stroke={mouthColor} strokeWidth="2.5" strokeLinecap="round" />; // Flat line
      default: // Idle smile
        return <path d="M45,62 Q50,66 55,62" fill="none" stroke={mouthColor} strokeWidth="2.5" strokeLinecap="round" />;
    }
  };

  // Extra elements like tears, teeth, blush
  const renderSpecialEffects = () => {
    return <>
       {/* Blush for happy/grin */}
       {['happy', 'grin', 'tickled'].includes(effectiveMood) && (
         <g opacity="0.5" fill="#F472B6">
            <ellipse cx="30" cy="60" rx="4" ry="2.5" />
            <ellipse cx="70" cy="60" rx="4" ry="2.5" />
         </g>
       )}

       {/* Tears for sad */}
       {effectiveMood === 'sad' && (
         <g className="animate-drip">
            <path d="M34,58 Q32,65 34,70 Q36,65 34,58 Z" fill="#60A5FA" opacity="0.8"/>
            <path d="M66,58 Q64,65 66,70 Q68,65 66,58 Z" fill="#60A5FA" opacity="0.8" style={{animationDelay: '0.5s'}}/>
         </g>
       )}

       {/* Teeth for roar/grin */}
       {effectiveMood === 'roar' && (
         <g fill="white">
             <path d="M43,58 L45,63 L47,58 Z" /> {/* Top fangs */}
             <path d="M53,58 L55,63 L57,58 Z" />
             <path d="M46,68 L48,63 L50,68 Z" /> {/* Bottom teeth */}
         </g>
       )}
       {effectiveMood === 'grin' && (
         <path d="M40,62 L60,62" stroke="white" strokeWidth="2" strokeLinecap="round"/> 
       )}
    </>
  };

  // --- Styles & Main Render ---

  const getContainerAnimation = () => {
    if (isTickled) return 'animate-jelly';
    if (effectiveMood === 'sad') return 'animate-tremble grayscale-[0.3]';
    if (effectiveMood === 'roar') return 'animate-shake scale-110';
    if (effectiveMood === 'thinking') return 'animate-float-slow';
    return 'animate-float';
  };

  const displayMsg = isTickled ? tickleMsg : message;

  return (
    <div className={`flex flex-col items-center ${className} font-sans`}>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-5px) rotate(2deg); } }
        @keyframes jelly { 
          0% { transform: scale(1, 1); } 30% { transform: scale(1.25, 0.75); } 40% { transform: scale(0.75, 1.25); } 
          50% { transform: scale(1.15, 0.85); } 65% { transform: scale(0.95, 1.05); } 75% { transform: scale(1.05, 0.95); } 100% { transform: scale(1, 1); } 
        }
        @keyframes tremble { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-1px) rotate(-1deg); } 75% { transform: translateX(1px) rotate(1deg); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); } 20%, 40%, 60%, 80% { transform: translateX(2px); } }
        @keyframes drip { 0% { transform: translateY(0); opacity: 0.8; } 100% { transform: translateY(15px); opacity: 0; } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-jelly { animation: jelly 0.8s both; }
        .animate-tremble { animation: tremble 0.3s linear infinite; }
        .animate-shake { animation: shake 0.5s linear infinite; }
        .animate-drip { animation: drip 1.5s ease-in infinite; }
      `}</style>

      <div 
        ref={containerRef}
        onClick={handleTickle}
        className="relative group cursor-pointer"
        style={{ perspective: '1000px' }}
      >
        {/* Background Glow based on mood */}
        <div className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 scale-90 group-hover:scale-125 
            ${effectiveMood === 'roar' ? 'bg-red-400/40 scale-110' : 
              effectiveMood === 'sad' ? 'bg-blue-300/30 scale-90' : 
              effectiveMood === 'tickled' ? 'bg-yellow-400/60 scale-125' : 
              'bg-orange-300/30'}`}></div>

        {/* --- THE SVG LION --- */}
        <svg 
          viewBox="0 0 100 100" 
          className={`w-36 h-36 md:w-48 md:h-48 drop-shadow-2xl transition-all duration-500 ${getContainerAnimation()}`}
        >
          {/* === ORIGINAL LEO BODY === 
              (Reverted to the spiky mane and simple geometry you preferred)
          */}
          
          {/* Mane (Rotating slightly on hover) */}
          <g className="origin-center transition-transform duration-700 group-hover:rotate-12">
            <path d="M50,5 L58,18 L72,12 L75,26 L88,28 L84,42 L95,50 L84,58 L88,72 L75,74 L72,88 L58,82 L50,95 L42,82 L28,88 L25,74 L12,72 L16,58 L5,50 L16,42 L12,28 L25,26 L28,12 L42,18 Z" 
                  fill="#F59E0B" stroke="#B45309" strokeWidth="2" strokeLinejoin="round" />
          </g>

          {/* Ears */}
          <path d="M25,25 Q15,15 25,35" fill="#FCD34D" stroke="#D97706" strokeWidth="2" />
          <path d="M75,25 Q85,15 75,35" fill="#FCD34D" stroke="#D97706" strokeWidth="2" />

          {/* Face Base */}
          <circle cx="50" cy="55" r="30" fill="#FCD34D" stroke="#D97706" strokeWidth="2" />

          {/* Cheeks */}
          <circle cx="30" cy="60" r="4" fill="#FCA5A5" opacity="0.6" />
          <circle cx="70" cy="60" r="4" fill="#FCA5A5" opacity="0.6" />

          {/* Snout/Nose area */}
          <ellipse cx="50" cy="60" rx="12" ry="10" fill="#FFFBEB" opacity="0.8" />
          <path d="M46,56 Q50,58 54,56 L50,62 Z" fill="#78350F" stroke="#78350F" strokeWidth="1" strokeLinejoin="round" />

          {/* === NEW EXPRESSION LOGIC ===
              (Rendered on top of the old body)
          */}
          {renderSpecialEffects()}
          {renderEyes()}
          {renderMouth()}

          {/* Paws (Peeking up) */}
          <ellipse cx="30" cy="85" rx="6" ry="5" fill="#FCD34D" stroke="#D97706" strokeWidth="2" />
          <ellipse cx="70" cy="85" rx="6" ry="5" fill="#FCD34D" stroke="#D97706" strokeWidth="2" />
        </svg>

        {/* Sparkles */}
        {sparkles.map(s => (
          <div key={s.id} className="absolute pointer-events-none animate-ping text-xl"
            style={{ left: `calc(50% + ${s.x}px)`, top: `calc(50% + ${s.y}px)`, transform: `scale(${s.scale})`, animationDuration: '0.8s' }}>
            {['✨', '⭐', '🧡', '🐾'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>
      
      {/* Message Bubble (Enhanced transition) */}
      <div className={`mt-6 relative max-w-xs transition-all duration-500 ${displayMsg ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
         {displayMsg && (
           <>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 border-l-4 border-t-4 border-orange-100 z-0 rounded-tl-md"></div>
            <div className={`relative z-10 bg-white px-6 py-4 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border-[3px] transition-all duration-300 
                 ${isTickled || effectiveMood === 'happy' ? 'border-orange-300 scale-105' : 
                   effectiveMood === 'roar' ? 'border-red-300' :
                   effectiveMood === 'sad' ? 'border-blue-200' :
                   'border-orange-100'}`}>
              <p className={`text-gray-700 font-bold text-center leading-snug ${effectiveMood === 'roar' ? 'uppercase tracking-wider' : ''}`}>
                {displayMsg}
              </p>
              {isTickled && <span className="absolute -right-3 -top-3 text-3xl animate-bounce filter drop-shadow-md">😹</span>}
              {effectiveMood === 'roar' && !isTickled && <span className="absolute -right-2 -top-4 text-3xl animate-pulse">🦁</span>}
            </div>
           </>
         )}
      </div>
    </div>
  );
};

export default Mascot;