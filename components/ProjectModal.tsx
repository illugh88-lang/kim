import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Use galleryImages if available, otherwise just use the main imageUrl
  const displayImages = project.galleryImages && project.galleryImages.length > 0 
    ? project.galleryImages 
    : [project.imageUrl];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
      {/* Backdrop - clicking this will close the modal since the X button was removed */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300 cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[#0d0d0d] w-full max-w-7xl h-full max-h-[92vh] overflow-hidden rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 flex flex-col md:flex-row animate-in fade-in zoom-in duration-500">
        
        {/* Left Side: Scrollable Gallery Area - Outputs multiple images as requested */}
        <div className="w-full md:w-[70%] h-[50vh] md:h-full overflow-y-auto bg-black scroll-smooth scrollbar-hide">
          <div className="flex flex-col gap-1">
            {displayImages.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${project.title} - ${index + 1}`} 
                className="w-full h-auto block object-cover animate-in fade-in duration-1000"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Right Side: Details Area */}
        <div className="w-full md:w-[30%] p-8 md:p-14 overflow-y-auto border-t md:border-t-0 md:border-l border-white/5 flex flex-col bg-[#0d0d0d]">
          <div className="my-auto">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-4 block font-black">Project Insight</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-[1]">{project.title}</h2>
              <div className="h-1 w-20 bg-white mb-10" />
            </div>
            
            <div className="space-y-12">
              <p className="text-white/60 text-[15px] leading-relaxed font-light">
                {project.description || "사용자의 감각을 자극하는 비주얼 스토리텔링과 정교한 디지털 설계를 통해 브랜드의 가치를 물리적, 디지털 공간에 구현했습니다."}
              </p>

              <div className="grid grid-cols-1 gap-10">
                <div className="group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-3 font-bold group-hover:text-white/40 transition-colors">Category</span>
                  <span className="text-sm text-white/90 font-semibold tracking-wide uppercase">{project.category}</span>
                </div>
                
                <div className="group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-3 font-bold group-hover:text-white/40 transition-colors"></span>
                  <span className="text-sm text-white/90 font-semibold tracking-wide"></span>
                </div>
              </div>
              
              {/* Launch Project button removed as per request */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};