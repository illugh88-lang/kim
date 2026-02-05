
import React from 'react';

const TESTIMONIALS = [
  {
    number: '01',
    quote: "1233, delivering striking designs that truly resonate with our brand. A true digital visionary.",
    author: "Brian Johnson",
    company: "Digital Solutions Agency",
    avatar: "https://i.pravatar.cc/150?u=brian"
  },
  {
    number: '02',
    quote: "Collaborating with John was a breeze. Their responsiveness and keen understanding of our goals made the process enjoyable. A true partner in our digital journey.",
    author: "Kevin Davis",
    company: "Creative Impact Studios",
    avatar: "https://i.pravatar.cc/150?u=kevin"
  },
  {
    number: '03',
    quote: "Impressed by John's web development prowess. The websites they've built not only look good but also operate seamlessly, enhancing our user experience. A reliable and skilled developer.",
    author: "Jake Smith",
    company: "PixelCraft Innovations",
    avatar: "https://i.pravatar.cc/150?u=jake"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5">
      <div className="mb-20">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 block">• TESTIMONIALS</span>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase">What My Clients Say</h2>
      </div>

      <div className="space-y-24">
        {TESTIMONIALS.map((t) => (
          <div key={t.number} className="max-w-4xl border-t border-white/10 pt-12">
            <div className="text-[11px] font-bold text-white/40 mb-12">{t.number}</div>
            <p className="text-xl md:text-2xl leading-relaxed font-light mb-12 italic text-white/90">
              " {t.quote} "
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} className="w-12 h-12 rounded-full grayscale" alt={t.author} />
              <div>
                <div className="text-sm font-bold uppercase tracking-widest">{t.author}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
