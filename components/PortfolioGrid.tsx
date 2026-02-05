
import React, { useState } from 'react';
import { Project } from '../types';

const ALL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Luxe Beauty',
    category: 'UI/UX Design • Web Development • Digital Design',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    description: '프리미엄 뷰티 브랜드를 위한 고해상도 이커머스 플랫폼입니다. 우아함과 미니멀한 럭셔리에 중점을 둔 인터페이스를 제공합니다.'
  },
  {
    id: '2',
    title: 'Elegant Pack',
    category: 'Brand Identity • Digital Design',
    imageUrl: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    description: '현대적인 라이프스타일 브랜드를 위한 지속 가능한 패키징 솔루션입니다. 브랜드 아이덴티티 구축부터 디지털 구현까지 통합적인 디자인을 진행했습니다.'
  },
  {
    id: '3',
    title: 'Ridged',
    category: 'UI/UX Design • Web Development • Brand Identity • Digital Design',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    link: '#',
    isWide: true,
    description: '유동적인 디지털 경험을 통해 브루탈리즘 미학을 보여주는 혁신적인 건축 포트폴리오 사이트입니다.'
  },
  {
    id: '4',
    title: 'Water Drops',
    category: 'UI/UX Design • Web Development • Digital Design',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    description: '인터랙티브 대시보드와 예술적인 데이터 시각화를 통해 깨끗한 물 데이터를 형상화한 프로젝트입니다.'
  },
  {
    id: '5',
    title: 'Hydra Lips',
    category: 'Brand Identity • Digital Design',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    description: '대담한 컬러와 실험적인 타이포그래피를 활용한 코스메틱 스타트업의 브랜딩 프로젝트입니다.'
  },
  {
    id: '6',
    title: 'Urban Flow',
    category: 'Photography • Digital Art',
    imageUrl: 'https://images.unsplash.com/photo-1449156001935-d2864047830e?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    description: '도시의 역동적인 리듬을 담아낸 디지털 아트워크 시리즈입니다.'
  },
  {
    id: '7',
    title: 'Minimal Space',
    category: 'Interior Design • 3D Rendering',
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    description: '공간의 본질에 집중하는 미니멀리즘 인테리어 컨셉 디자인입니다.'
  },
  {
    id: '8',
    title: 'Digital Horizon',
    category: 'Web Development • UI Design',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    isWide: true,
    link: '#',
    description: '미래지향적인 기술 트렌드를 반영한 차세대 웹 인터페이스 솔루션입니다.'
  },
  {
    id: '9',
    title: 'Organic Rhythm',
    category: 'Motion Graphics • Branding',
    imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    description: '자연의 곡선미를 활용한 유기적인 형태의 브랜드 아이덴티티 및 모션 그래픽입니다.'
  },
  {
    id: '10',
    title: 'Crafted Wood',
    category: 'Product Design • Branding',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    description: '장인 정신이 깃든 수제 가구 브랜드를 위한 아날로그적 감성의 디지털 디자인입니다.'
  }
];

interface PortfolioGridProps {
  onProjectClick: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onProjectClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? ALL_PROJECTS : ALL_PROJECTS.slice(0, 5);

  return (
    <section id="work" className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5">
      <div className="mb-20">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 block">• PORTFOLIO</span>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase">Works</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-24">
        {visibleProjects.map((project) => (
          <div 
            key={project.id} 
            className={`${project.isWide ? 'md:col-span-2' : ''} group cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both`}
            onClick={() => onProjectClick(project)}
          >
            <div className="overflow-hidden mb-6 aspect-[16/10] md:aspect-auto">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[11px] uppercase tracking-widest text-white/40">{project.category}</p>
              </div>
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium border-b border-white/20 pb-1 hover:border-white transition-all">
                View
                <svg className="w-3 h-3 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {!isExpanded && (
        <div className="mt-32 flex justify-center">
          <button 
            onClick={() => setIsExpanded(true)}
            className="px-12 py-4 border border-white/20 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95"
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
};
