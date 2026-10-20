import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, X, CheckCircle, Smartphone, Globe, Layers, ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/projects';
import { filterProjectsList } from '../utils/portfolio-utils';

const CATEGORIES = ["All", "Websites", "Mobile Apps", "Full-Stack", "UI/UX Design"] as const;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filtered = filterProjectsList(PROJECTS, selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Selected <span className="gradient-text">Projects & Case Studies</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
            Real products built with modern architectures, pixel-perfect UX, and production-tested backends.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: 1st card featured (spans 2 cols on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((project, idx) => {
            const isFeaturedCard = idx === 0 && selectedCategory === 'All';

            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl glass-panel border border-white/15 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between ${
                  isFeaturedCard ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Card Image Container */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative aspect-video sm:aspect-[16/10] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1A] via-transparent to-transparent opacity-80" />

                    {/* Category Label */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-xl text-xs font-semibold text-white bg-slate-950/70 border border-white/20 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick View Pill */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-cyan-600/80 backdrop-blur-md shadow-lg">
                        <span>View Details</span>
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-lg sm:text-xl font-bold text-white font-heading hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 rounded-lg text-[11px] font-medium text-cyan-400 bg-cyan-500/10">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/10 gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                        aria-label={`GitHub source for ${project.title}`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.playStoreUrl ? (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 shadow-md transition-all"
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                        <span>Play Store</span>
                      </a>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:opacity-90 shadow-md transition-all"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Glass Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl glass-panel border border-white/20 bg-slate-950/95 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="rounded-2xl overflow-hidden aspect-video relative mb-6 border border-white/10">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-xl text-xs font-bold text-white bg-violet-600/80 backdrop-blur-md">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-2 font-heading">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeModalProject.fullDescription}
                </p>
              </div>

              {/* Stats Strip */}
              {activeModalProject.stats && (
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl glass-panel border-white/10 text-center">
                  {activeModalProject.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-lg sm:text-xl font-extrabold font-heading gradient-text">
                        {s.value}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Key Deliverables & Features
                </h4>
                <div className="space-y-2">
                  {activeModalProject.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
                    The Challenge
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalProject.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    Engineering Solution
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl text-xs font-medium text-slate-200 bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:border-cyan-400 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </a>
                {activeModalProject.playStoreUrl ? (
                  <a
                    href={activeModalProject.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:opacity-95 shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    <Smartphone className="h-4 w-4" />
                    <span>Open in Play Store</span>
                  </a>
                ) : (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-violet-600/30 transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
