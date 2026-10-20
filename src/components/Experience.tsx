import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/30 scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
            A 5-year journey from foundational computer science theory to shipping production apps for thousands of users.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Gradient Line (Centered on lg, left-aligned on mobile) */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

          <div className="space-y-12">
            {EXPERIENCES.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  } gap-6 sm:gap-8 group`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-0 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 group-hover:scale-125 transition-transform">
                    {item.type === 'work' ? (
                      <Briefcase className="h-4 w-4 text-cyan-300" />
                    ) : (
                      <GraduationCap className="h-4 w-4 text-violet-300" />
                    )}
                  </div>

                  {/* Card Container (offset by margin on mobile to clear the timeline line) */}
                  <div className="ml-10 sm:ml-14 lg:ml-0 w-full lg:w-[calc(50%-2rem)]">
                    <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/15 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-violet-600/10">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                          <Calendar className="h-3 w-3" />
                          <span>{item.period}</span>
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-slate-400" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-2">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-violet-300 mb-3">
                        {item.organization}
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* 3 Achievement Bullets */}
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((ach, achIdx) => (
                          <div key={achIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
