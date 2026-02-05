import React, { useState } from 'react';
import { Project } from '../types';

const ALL_PROJECTS: Project[] = [
   {
    id: '3',
    title: 'Brand Renewal',
    category: ' Web design • Brand Identity • Digital Design •Package disign',
    imageUrl: 'https://github.com/illugh88-lang/kim/blob/main/ppsu_silm.jpg?raw=true',
    galleryImages: [
      'https://github.com/illugh88-lang/kim/blob/main/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202026-02-05%20154044.png?raw=true',
      'https://github.com/illugh88-lang/kim/blob/main/basic_PPSU_wide.jpg?raw=true',
      'https://github.com/illugh88-lang/kim/blob/main/pp_slim%20copy.jpg?raw=true',
      'https://github.com/illugh88-lang/kim/blob/main/BASIC_PPSU150_detail.jpg?raw=true'
    ],
    link: '#',
    isWide: true,
    description: '브랜드 로고 리뉴얼 이후 제품 전체적으로 브랜드 아이덴티티를 구축하고자, 제품 베이직 라인 구축 및 회사 홈페이지를 비롯한 전체 상품 상제페이지 리뉴얼'
  },
  {
    id: '1',
    title: 'COLOR PP BABY BOTTLE',
    category: 'Design • Package disign • Digital Design',
    imageUrl: 'https://github.com/illugh88-lang/kim/blob/main/C_PP140_title_800_1.jpg?raw=true',
    galleryImages: [
      'https://github.com/illugh88-lang/kim/blob/main/C_PP140_detail.jpg?raw=true'
    ],
    link: '#',
    description: '기존 PP 젖병과는 차별화를 둔 컬러감이 추가된 PP 젖병 제품 기획, 제품 컬러, 인쇄디자인 및 패키지, 제품 사진 촬영을 포함한 상세페이지 디자인 작업'
  },
  {
    id: '4',
    title: '2023 토끼',
    category: ' Web design • Brand Identity • Digital Design •Package disign',
    imageUrl: 'https://github.com/illugh88-lang/kim/blob/main/PP_2023_Rabbit_2set_title_800_0.jpg?raw=true',
    galleryImages: [
        'https://github.com/illugh88-lang/kim/blob/main/PP_2023_Rabbit_2set_detail.jpg?raw=true',
    ],
    link: '#',
    description: '신년 띠 젖병 프로젝트 #2 2023 토끼 젖병 제품 인쇄디자인 및 패키지 제품 사진 촬영을 포함한 상세페이지 디자인 작업.'
  },
  {
    id: '2',
    title: '2024 Dragon',
    category: ' Web design • Brand Identity • Digital Design •Package disign',
    imageUrl: 'https://github.com/illugh88-lang/kim/blob/main/2024_dragon_PP_twin_title_800.jpg?raw=true',
    galleryImages: [
      'https://github.com/illugh88-lang/kim/blob/main/2024_dragon_PP_twin_detail.jpg?raw=true'
    ],
    link: '#',
    description: '신년 띠 젖병 프로젝트 #2 2024 푸른용 젖병 제품 인쇄디자인 및 패키지 제품 사진 촬영을 포함한 상세페이지 디자인 작업.'
  },
  {
    id: '5',
    title: '꿈 찾는 곰, 꿈 찾는 토끼',
    category: 'Brand Identity • Digital Design',
    imageUrl: 'https://github.com/illugh88-lang/kim/blob/main/1112.jpg?raw=true',
    galleryImages: [
        'https://github.com/illugh88-lang/kim/blob/main/1232.jpg?raw=true',
        'https://github.com/illugh88-lang/kim/blob/main/rabbit_ppsu_detail.jpg?raw=true'
    ],
    link: '#',
    description: '꿈찾는 곰,토끼 시리즈, 제품 인쇄 드로잉, 패키징, 제품 촬영을 포함한 상세페이지 작업'
  },
    {
    id: '6',
    title: 'Brush',
    category: 'Digital Design •Package disign',
    imageUrl: 'https://github.com/illugh88-lang/kim/blob/main/BG_longB_triple_detail_2.gif?raw=true',
    galleryImages: [
        'https://github.com/illugh88-lang/kim/blob/main/BG_longB_triple_detail.jpg?raw=true',
    ],
    link: '#',
    description: '롱바디 브러쉬 패키지 및 제품 촬영 및 동영상 촬영, 상세페이지 작업'
  },
    {
    id: '7',
    title: 'SNS 인스타',
    category: 'SNS • Digital Design',
    imageUrl: 'https://github.com/illugh88-lang/kim/blob/main/2025_new.jpg?raw=true',
    galleryImages: [
        'https://github.com/illugh88-lang/kim/blob/main/is_2024_B.jpg?raw=true',
        'https://github.com/illugh88-lang/kim/blob/main/250114_in.jpg?raw=true',
        'https://github.com/illugh88-lang/kim/blob/main/1080_1080_4.jpg?raw=true',
        'https://github.com/illugh88-lang/kim/blob/main/insta_W-set_3.jpg?raw=true',
        'https://github.com/illugh88-lang/kim/blob/main/insta_wash_1.jpg?raw=true',

    ],
    link: '#',
    description: '인스타 카드 뉴스, 이미지 제작 및 동영상 촬영 및 편집 업로드'
  },
    {
    id: '5',
    title: 'PACKAGE DESIGN',
    category: 'Brand Identity • Digital Design',
    imageUrl: 'https://github.com/illugh88-lang/kim/blob/main/240807_dayper.jpg?raw=true',
    galleryImages: [
        'https://github.com/illugh88-lang/kim/blob/main/240807_dayper.jpg?raw=true',
        'https://github.com/illugh88-lang/kim/blob/main/240807_joyper.jpg?raw=true',
        'https://github.com/illugh88-lang/kim/blob/main/240807_venefit.jpg?raw=true',
        'https://github.com/illugh88-lang/kim/blob/main/241127_%EB%8D%B0%EC%9D%B4%ED%8D%BC.jpg?raw=true'
    ],
    link: '#',
    description: '[시안] 신규 브랜드 런칭 및 브랜드 디자인'
  },
    {
    id: '5',
    title: 'Hydra Lips',
    category: 'Brand Identity • Digital Design',
    imageUrl: 'https://github.com/illugh88-lang/kim/blob/main/1112.jpg?raw=true',
    galleryImages: [
        'https://github.com/illugh88-lang/kim/blob/main/1232.jpg?raw=true',
        'https://github.com/illugh88-lang/kim/blob/main/rabbit_ppsu_detail.jpg?raw=true'
    ],
    link: '#',
    description: '꿈찾는 곰,토끼 시리즈, 제품 인쇄 드로잉, 패키징, 제품 촬영을 포함한 상세페이지 작업'
  },

];

interface PortfolioGridProps {
  onProjectClick: (project: Project) => void;
  onShowAll?: () => void;
  forceShowAll?: boolean;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onProjectClick, onShowAll, forceShowAll = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = (isExpanded || forceShowAll) ? ALL_PROJECTS : ALL_PROJECTS.slice(0, 5);

  return (
    <section id="work" className={`${forceShowAll ? '' : 'py-20 border-t border-white/5'} px-0 max-w-[1440px] mx-auto`}>
      {!forceShowAll && (
        <div className="mb-20 px-6 md:px-12">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2 block">• PORTFOLIO</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase">Works</h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 px-6 md:px-12">
        {visibleProjects.map((project) => (
          <div 
            key={project.id} 
            className={`${project.isWide ? 'md:col-span-2' : ''} group cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both`}
            onClick={() => onProjectClick(project)}
          >
            <div className="overflow-hidden mb-6 aspect-[1.15/1] bg-[#111]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-white/30 font-semibold">{project.category}</p>
            </div>
            
            <div className="mt-4 h-px w-full bg-white/5 group-hover:bg-white/20 transition-colors" />
          </div>
        ))}
      </div>

      {!isExpanded && !forceShowAll && (
        <div className="mt-32 flex justify-center">
          <button 
            onClick={onShowAll || (() => setIsExpanded(true))}
            className="px-14 py-4 border border-white/20 rounded-full text-[11px] uppercase tracking-[0.4em] font-black hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95"
          >
            All
          </button>
        </div>
      )}
    </section>
  );
};