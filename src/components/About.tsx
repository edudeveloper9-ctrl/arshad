import React from 'react';
import { MapPin, Calendar, Globe, Mail, Phone, Code, CheckCircle2, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-28">
      {/* Background ambient light */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="gradient-text">Mudivedu Arshadd</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Photo Card + Quick Info Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Glass Card */}
            <div className="relative rounded-3xl p-3 glass-panel border border-white/15 shadow-2xl overflow-hidden group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={PROFILE.profilePhoto}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xl font-bold font-heading">{PROFILE.name}</div>
                  <div className="text-xs text-cyan-300 font-mono">Full-Stack & Mobile App Specialist</div>
                </div>
              </div>
            </div>

            {/* Quick-Info Glass Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl glass-panel border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-violet-500/15 text-violet-400 shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-xs font-semibold text-white leading-tight mt-0.5">
                    {PROFILE.location.city}, {PROFILE.location.state}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl glass-panel border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Experience</div>
                  <div className="text-xs font-semibold text-white leading-tight mt-0.5">
                    {PROFILE.experienceBadge}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl glass-panel border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400 shrink-0">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Languages</div>
                  <div className="text-xs font-semibold text-white leading-tight mt-0.5">
                    {PROFILE.languages.join(', ')}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl glass-panel border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Availability</div>
                  <div className="text-xs font-semibold text-emerald-300 leading-tight mt-0.5">
                    Freelance & Full-time
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy, Stats & Currently Learning */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border-white/15 shadow-xl mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Crafting Digital Products That Excel</span>
              </h3>
              
              <div className="text-sm sm:text-base text-slate-300 space-y-4 leading-relaxed font-normal">
                <p>
                  I'm Mudivedu Arshadd, a full-stack developer and designer from <strong className="text-cyan-300">Sadum, Chittoor District, Andhra Pradesh, India</strong>. With 5 years of hands-on experience, I've designed and developed many websites and mobile apps for clients and businesses, from idea and UI design to development, deployment and support.
                </p>
                <p>
                  I love working across the whole stack: crafting smooth, responsive interfaces on the frontend and building secure, scalable APIs and databases on the backend. I care about clean code, great user experience and delivering on time.
                </p>
                <p className="text-slate-200">
                  I'm always learning new technologies and always ready for the next challenge. My goal is simple: <span className="font-semibold text-white gradient-text">build digital products that look amazing and work flawlessly.</span>
                </p>
              </div>
            </div>

            {/* Animated / Quantitative Stats 4-Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {PROFILE.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl glass-panel border-white/10 text-center hover:border-cyan-400/30 transition-all hover:-translate-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Currently Learning / Exploring */}
            <div className="p-5 rounded-2xl glass-panel border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                <Code className="h-4 w-4 text-cyan-400" />
                <span>Currently Learning & Leveling Up</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROFILE.currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-200 bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
