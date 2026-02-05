
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { Services } from './components/Services';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Close modal on escape key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-white selection:text-black ${selectedProject ? 'overflow-hidden' : ''}`}>
      <Navbar />
      <main>
        <Hero onProjectClick={setSelectedProject} />
        <PortfolioGrid onProjectClick={setSelectedProject} />
        <Services />
        <ContactCTA />
      </main>
      <Footer />
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;
