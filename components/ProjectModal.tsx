import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[#111] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl border border-white/5 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Image Container */}
          <div className="w-full md:w-2/3 h-[300px] md:h-auto min-h-[400px]">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Container */}
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 block">Project Overview</span>
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-6">{project.title}</h2>
            <div className="h-px w-12 bg-white/20 mb-8" />
            
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              {project.description || ""}
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">Category</span>
                <span className="text-xs text-white/80">{project.category}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">Timeline</span>
                <span className="text-xs text-white/80">3 Months Duration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};