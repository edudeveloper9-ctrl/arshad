import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ResumeModal } from './components/ResumeModal';
import { CursorGlow } from './components/CursorGlow';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Custom Website Development');

  // Toggle Theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  // Section observer for navbar active link highlighting
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (title: string) => {
    setSelectedService(title);
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B1A] text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* Initial loading screen */}
      <LoadingScreen />

      {/* Desktop ambient soft cursor glow */}
      <CursorGlow />

      {/* Subtle Noise / Radial dot texture */}
      <div className="fixed inset-0 pointer-events-none noise-overlay z-0 opacity-40" />

      {/* Persistent Navbar */}
      <Navbar
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
        activeSection={activeSection}
      />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services onSelectService={handleSelectService} />
        <Testimonials />
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Button on Every Page */}
      <FloatingWhatsApp />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
