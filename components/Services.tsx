
import React from 'react';

const SERVICES = [
  {
    title: 'WEB DESIGN',
    items: [
      'SIMPLE HTML MODIFICATION',
      'WEBSITE MAINTENANCE'
    ]
  },
  {
    title: 'BRAND IDENTITY',
    items: [
      'LOGO DESIGN',
      'BRAND GUIDELINES',
      'LABEL DESIGN',
      'PACKAGING DESIGN',
      'VISUAL IDENTITY',
      'BRAND STRATEGY'
    ]
  },
  {
    title: 'DIGITAL DESIGN',
    items: [
      'ILLUSTRATIONS',
      'ANIMATIONS',
      'BUSINESS CARDS',
      'FLYERS',
      'BANNER DESIGN',
      'SOCIAL MEDIA'
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5">
      <div className="mb-24">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 block">SERVICES</span>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">WHAT I DO</h2>
      </div>

      <div className="space-y-0">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx} 
            className="group py-16 border-t border-white/10 flex flex-col md:flex-row items-start justify-between gap-12 transition-colors"
          >
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight w-full md:w-1/2">
              {service.title}
            </h3>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full md:w-1/2">
              {service.items.map((item, i) => (
                <span 
                  key={i} 
                  className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-medium group-hover:text-white/70 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
        {/* Bottom border for the last item to match the screenshot's clean lines */}
        <div className="border-t border-white/10 w-full" />
      </div>
    </section>
  );
};
