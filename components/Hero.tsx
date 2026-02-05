import React from 'react';
import { Project } from '../types';

interface HeroProps {
  onProjectClick: (project: Project) => void;
}

export const Hero: React.FC<HeroProps> = ({ onProjectClick }) => {
  const images: Project[] = [
    { id: 'h1', title: 'Cuba Mug', category: 'Photography • Branding', imageUrl: 'https://picsum.photos/800/600?random=1', link: '#' },
    { id: 'h2', title: 'Aurora Pine', category: 'Nature • Visuals', imageUrl: 'https://picsum.photos/600/800?random=2', link: '#' },
    { id: 'h3', title: 'Morning Steam', category: 'Conceptual • Art', imageUrl: 'https://picsum.photos/800/400?random=3', link: '#' },
    { id: 'h4', title: 'Starry Night', category: 'Landscape • Long Exposure', imageUrl: 'https://picsum.photos/500/500?random=4', link: '#' },
    { id: 'h5', title: 'Mountain Dusk', category: 'Travel • Outdoor', imageUrl: 'https://picsum.photos/700/500?random=5', link: '#' },
  ];

  return (
    <section className="pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="mb-20">
        <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight uppercase max-w-4xl">
          <span className="block">kim</span>
          <span className="block">bohyeon</span>
          <span className="block">Portfolio</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between mt-12 gap-8 text-sm text-white/60 font-light max-w-5xl">
          <div className="max-w-xs leading-relaxed">
            <span className="block font-medium text-white">디자이너 김보현</span>
            <span className="block">Package, Web & Digital Design</span>
          </div>
          <p className="max-w-md leading-relaxed">
             가치를 더하는 디자인,<br />
            사용자의 경험을 고려한 최적의 비주얼 솔루션을 제공합니다.
          </p>
        </div>
      </div>

      {/* Interactive Image Collage Grid */}
      <div className="grid grid-cols-12 gap-4 h-[600px] md:h-[800px]">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-4 h-full flex flex-col">
            <div className="h-1/2 pb-2 cursor-pointer group" onClick={() => onProjectClick(images[0])}>
                <img src={images[0].imageUrl} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]" alt="Work 1" />
            </div>
            <div className="h-1/2 pt-2 cursor-pointer group" onClick={() => onProjectClick(images[1])}>
                <img src={images[1].imageUrl} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]" alt="Work 2" />
            </div>
        </div>
        
        {/* Center Column - Tall Image */}
        <div className="col-span-12 md:col-span-5 h-full cursor-pointer group" onClick={() => onProjectClick(images[2])}>
            <img src={images[2].imageUrl} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.01]" alt="Work 3" />
        </div>
        
        {/* Right Column */}
        <div className="col-span-12 md:col-span-3 h-full flex flex-col">
            <div className="h-2/5 pb-2 cursor-pointer group" onClick={() => onProjectClick(images[3])}>
                <img src={images[3].imageUrl} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]" alt="Work 4" />
            </div>
            <div className="h-3/5 pt-2 cursor-pointer group" onClick={() => onProjectClick(images[4])}>
                <img src={images[4].imageUrl} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]" alt="Work 5" />
            </div>
        </div>
      </div>
    </section>
  );
};