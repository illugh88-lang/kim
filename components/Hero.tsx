import React from 'react';
import { Project } from '../types';

interface HeroProps {
  onProjectClick: (project: Project) => void;
}

export const Hero: React.FC<HeroProps> = ({ onProjectClick }) => {
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
    </section>
  );
};