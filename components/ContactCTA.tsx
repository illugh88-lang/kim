import React from 'react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-60 px-6 md:px-12 bg-white text-black text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-[11px] tracking-[0.4em] uppercase font-bold mb-8 block">I'll make it</span>
        <h2 className="text-5xl md:text-8xl font-extrabold uppercase leading-tight tracking-tighter mb-16">
          <span className="block">Make it</span>
          <span className="block">better.</span>
        </h2>
        <a href="mailto:hbk8158@naver.com" className="inline-block px-12 py-5 bg-black text-white rounded-full text-[12px] font-bold uppercase tracking-[0.3em] hover:scale-110 transition-transform cursor-pointer">
          contact
        </a>
      </div>
    </section>
  );
};