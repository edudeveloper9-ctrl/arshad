import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Sparkles, CheckCircle } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { SKILL_CATEGORIES } from '../data/skills';
import { EXPERIENCES } from '../data/experience';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl glass-panel border border-white/20 bg-slate-950/95 shadow-2xl p-6 sm:p-10 my-6 max-h-[92vh] overflow-y-auto text-slate-100">
        
        {/* Top Header Controls */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6 sticky top-0 bg-slate-950/80 backdrop-blur-md z-20 py-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Curriculum Vitae
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href="/resume.pdf"
              download="MUDIVEDU_ARSHADD_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-95 shadow-md transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors ml-2 cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div id="printable-resume" className="space-y-8 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-white/10">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-heading">
              {PROFILE.name}
            </h1>
            <div className="text-sm font-semibold gradient-text mt-1">
              Full-Stack Developer · Mobile App Developer · UI/UX Designer
            </div>
            <div className="flex flex-wrap gap-y-2 gap-x-4 mt-3 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                {PROFILE.location.full}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                {PROFILE.phones[0].display}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5 text-blue-400" />
                {PROFILE.emails[0].email}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Results-driven Full-Stack &amp; Mobile Engineer with 5 years of professional experience conceptualizing, designing, developing, and deploying fast, responsive web systems and cross-platform mobile apps. Proficient in React, Next.js, Node.js, Flutter, TypeScript, MongoDB, and PostgreSQL. Proven track record delivering 45+ websites and 30+ mobile apps on time with pixel-perfect attention to user experience and security.
            </p>
          </div>

          {/* Core Technical Proficiencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-bold text-white block mb-1">Frontend &amp; Mobile:</span>
                <span className="text-slate-300">React, Next.js, TypeScript, Flutter, React Native, Tailwind CSS, HTML5, CSS3/SCSS</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-bold text-white block mb-1">Backend &amp; Databases:</span>
                <span className="text-slate-300">Node.js, Express, REST APIs, MongoDB, PostgreSQL, MySQL, Firebase Auth &amp; Firestore</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-bold text-white block mb-1">UI/UX Design:</span>
                <span className="text-slate-300">Figma, Interactive Prototyping, Design Systems, Responsive Layouts, WCAG AA Accessibility</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="font-bold text-white block mb-1">DevOps &amp; Tools:</span>
                <span className="text-slate-300">Git, GitHub, Docker, Postman, Vercel, VS Code, CI/CD pipelines</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.filter((e) => e.type === 'work').map((job) => (
                <div key={job.id} className="border-l-2 border-cyan-500/40 pl-4 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">
                      {job.role}
                    </h3>
                    <span className="text-xs font-mono text-cyan-300">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-violet-300">
                    {job.organization} · {job.location}
                  </div>
                  <p className="text-xs text-slate-300">
                    {job.description}
                  </p>
                  <ul className="space-y-1 pt-1">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
              Education
            </h2>
            {EXPERIENCES.filter((e) => e.type === 'education').map((edu) => (
              <div key={edu.id} className="border-l-2 border-violet-500/40 pl-4 space-y-1">
                <h3 className="text-sm font-bold text-white">
                  {edu.role}
                </h3>
                <div className="text-xs text-violet-300">
                  {edu.organization} · {edu.location}
                </div>
                <p className="text-xs text-slate-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
