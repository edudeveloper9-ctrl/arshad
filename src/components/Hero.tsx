import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageCircle, FileText, Briefcase, Github, Linkedin, Instagram, Twitter, Youtube, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface HeroProps {
  onOpenResume: () => void;
}

const FLOATING_TECHS = [
  { name: 'React', position: 'top-2 -left-6 md:-left-8', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-300' },
  { name: 'Next.js 14', position: 'top-16 -right-6 md:-right-8', color: 'from-violet-500/20 to-purple-500/20 text-violet-300' },
  { name: 'Node.js', position: 'bottom-20 -left-8 md:-left-10', color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300' },
  { name: 'Flutter', position: 'bottom-6 -right-4 md:-right-6', color: 'from-sky-500/20 to-blue-600/20 text-sky-300' },
  { name: 'MongoDB', position: '-top-6 right-16', color: 'from-green-500/20 to-emerald-600/20 text-emerald-400' },
  { name: 'Figma', position: '-bottom-6 left-12', color: 'from-pink-500/20 to-rose-500/20 text-pink-300' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PROFILE.rolesRotator[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PROFILE.rolesRotator.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-40 right-10 w-[420px] h-[420px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-emerald-500/30 text-xs sm:text-sm font-medium text-emerald-300 mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for freelance & full-time work</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="gradient-text font-black">
                {PROFILE.name}
              </span>{' '}
              <span className="inline-block animate-bounce origin-bottom-right">👋</span>
            </h1>

            {/* Subtitle Rotator */}
            <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-bold font-heading text-slate-200 mb-6">
              <span className="text-cyan-400 mr-2">&gt;</span>
              <span className="gradient-text-warm border-r-2 border-cyan-400 pr-1 animate-pulse">
                {displayText}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
              {PROFILE.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              {/* Primary View Work */}
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-xl shadow-violet-600/25 hover:shadow-cyan-500/30 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Briefcase className="h-4 w-4" />
                <span>View My Work</span>
              </button>

              {/* WhatsApp Me */}
              <a
                href={PROFILE.phones[0].waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp Me</span>
              </a>

              {/* Download Resume */}
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white glass-panel hover:bg-white/10 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <FileText className="h-4 w-4 text-cyan-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                Connect:
              </span>
              {PROFILE.socials.map((social) => {
                let IconComponent = Github;
                if (social.name.includes('LinkedIn')) IconComponent = Linkedin;
                else if (social.name.includes('Instagram')) IconComponent = Instagram;
                else if (social.name.includes('Twitter') || social.name.includes('X')) IconComponent = Twitter;
                else if (social.name.includes('YouTube')) IconComponent = Youtube;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 hover:-translate-y-0.5"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Profile Visual in Glass Frame + Floating Tech Chips */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square max-w-full">
              
              {/* Outer Gradient Ring Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-violet-600 via-blue-500 to-cyan-400 opacity-60 blur-xl animate-pulse" />

              {/* Glass Frame Container */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden glass-panel border border-white/20 p-2 shadow-2xl">
                <img
                  src={PROFILE.profilePhoto}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover object-top rounded-2xl transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to MA Monogram gradient container if image fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.avatar-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'avatar-fallback h-full w-full rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-violet-900/60 to-slate-900 border border-white/10';
                      fallback.innerHTML = '<span class="text-6xl font-black gradient-text">MA</span><span class="text-xs text-slate-400 mt-2 font-mono">MUDIVEDU ARSHADD</span>';
                      parent.appendChild(fallback);
                    }
                  }}
                />

                {/* Subtle Inner Glass Vignette Scrim */}
                <div className="absolute inset-x-2 bottom-2 h-20 bg-gradient-to-t from-[#0B0B1A]/80 to-transparent pointer-events-none rounded-b-2xl" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                  <span className="font-semibold">{PROFILE.location.city}, AP</span>
                  <span className="text-cyan-400 font-mono">5 YOE</span>
                </div>
              </div>

              {/* Floating Tech Chips */}
              {FLOATING_TECHS.map((tech, idx) => (
                <div
                  key={tech.name}
                  className={`absolute ${tech.position} hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel border border-white/15 bg-slate-900/80 backdrop-blur-xl shadow-lg transition-transform hover:scale-110 z-20 cursor-default animate-bounce`}
                  style={{
                    animationDuration: `${3.5 + idx * 0.4}s`,
                    animationDelay: `${idx * 0.2}s`
                  }}
                >
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                  <span className="text-xs font-bold text-white whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
            aria-label="Scroll to About Me section"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Explore Portfolio</span>
            <div className="p-2 rounded-full glass-panel group-hover:border-cyan-400/40 group-hover:translate-y-1 transition-all">
              <ArrowDown className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
