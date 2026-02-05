import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8 block">• ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-medium leading-snug">
            I collaborate with global clients to Cultivate Compelling and Immersive Digital Experiences Through The Realms of Design and Development.
          </h2>
        </div>

        <div className="flex flex-col justify-end">
          <div className="grid grid-cols-2 gap-12 mb-12">
            <div>
              <div className="text-6xl md:text-7xl font-bold mb-4">120+</div>
              <div className="text-[11px] tracking-widest uppercase text-white/40">Completed Projects</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold mb-4">8+</div>
              <div className="text-[11px] tracking-widest uppercase text-white/40">Years of Experience</div>
            </div>
          </div>
          
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-all w-fit">
            More About Me 
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};