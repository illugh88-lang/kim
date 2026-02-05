import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <div className="flex gap-8 text-[11px] font-medium tracking-widest uppercase text-white/60">
          <a href="#" className="hover:text-white transition-colors">Home</a>
        </div>
        
        <div className="text-sm font-bold tracking-[0.2em] uppercase">
          [ Kim Bohyeon ]
        </div>

        <div className="flex gap-8 text-[11px] font-medium tracking-widest uppercase text-white/60">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};