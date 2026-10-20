import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#0B0B1A]">
                  <span className="text-xs font-black gradient-text">MA</span>
                </div>
              </div>
              <span className="font-heading font-extrabold text-base tracking-tight text-white">
                {PROFILE.name}
              </span>
            </a>
            <p className="mt-1.5 text-xs text-slate-400 max-w-sm">
              Full-Stack Developer & App Designer based in Sadum, Chittoor, Andhra Pradesh, India.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-300">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Icons & Back To Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
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
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-all cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center">
          <div>
            Designed &amp; built by <span className="text-slate-200 font-semibold">{PROFILE.name}</span> © 2026
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with passion &amp; precision</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
