
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative pb-16">
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-orange-100 py-3 text-center z-50">
        <p className="text-sm font-semibold text-orange-800 tracking-wide font-bubble">
          &copy; Created by Shalaka Kashikar
        </p>
      </footer>
    </div>
  );
};

export default Layout;
