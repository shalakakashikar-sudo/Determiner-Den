
import React, { useState } from 'react';
import Home from './pages/Home.tsx';
import ModulePage from './pages/ModulePage.tsx';
import FinalQuiz from './pages/FinalQuiz.tsx';
import Layout from './components/Layout.tsx';
import { DETERMINER_MODULES } from './data/determiners.ts';
import { DeterminerTypeId } from './types.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'module' | 'finalQuiz'>('home');
  const [activeModuleId, setActiveModuleId] = useState<DeterminerTypeId | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToModule = (id: string) => {
    setActiveModuleId(id as DeterminerTypeId);
    setCurrentPage('module');
    scrollToTop();
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setActiveModuleId(null);
    scrollToTop();
  };

  const startFinalQuiz = () => {
    setCurrentPage('finalQuiz');
    scrollToTop();
  };

  const activeModule = DETERMINER_MODULES.find(m => m.id === activeModuleId);

  return (
    <Layout>
      <div className="animate-in fade-in duration-700">
        {currentPage === 'home' && (
          <Home 
            onSelectModule={navigateToModule} 
            onStartFinalQuiz={startFinalQuiz} 
          />
        )}

        {currentPage === 'module' && activeModule && (
          <ModulePage 
            module={activeModule} 
            onBack={navigateToHome} 
          />
        )}

        {currentPage === 'finalQuiz' && (
          <FinalQuiz onBack={navigateToHome} />
        )}
      </div>
    </Layout>
  );
};

export default App;