import React, { useState } from 'react';
import { Layout, Server, Smartphone, Database, Palette, Terminal, Sparkles, Check } from 'lucide-react';
import { SKILL_CATEGORIES, MARQUEE_SKILLS } from '../data/skills';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="h-5 w-5" />;
      case 'Server': return <Server className="h-5 w-5" />;
      case 'Smartphone': return <Smartphone className="h-5 w-5" />;
      case 'Database': return <Database className="h-5 w-5" />;
      case 'Palette': return <Palette className="h-5 w-5" />;
      case 'Terminal': return <Terminal className="h-5 w-5" />;
      default: return <Sparkles className="h-5 w-5" />;
    }
  };

  const displayedCategories = activeCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
            Battle-tested across 5 years of full-stack engineering, from mobile touch interfaces to resilient cloud backends.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full" />
        </div>

        {/* Filter Categories Segmented Bar */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 p-1.5 mb-10 max-w-2xl mx-auto rounded-2xl glass-panel border-white/10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-3xl glass-panel border-white/15 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-cyan-400 border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skill Bars & Chips */}
              <div className="space-y-3 pt-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200 flex items-center gap-1.5">
                        <Check className="h-3 w-3 text-cyan-400" />
                        {skill.name}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress track */}
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Horizontal Tech Ribbon Marquee */}
        <div className="relative w-full overflow-hidden py-4 border-y border-white/10 glass-panel">
          <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-8 items-center text-sm font-semibold text-slate-300">
            {MARQUEE_SKILLS.concat(MARQUEE_SKILLS).map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span className="hover:text-white transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
