import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl font-normal">
            Direct feedback from entrepreneurs, medical clinics, and technology teams.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/20 shadow-2xl relative overflow-hidden">
            
            {/* Ambient Corner Quote Watermark */}
            <Quote className="absolute top-6 right-6 h-20 w-20 text-white/5 pointer-events-none" />

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6 text-amber-400">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed mb-8 italic">
              "{item.quote}"
            </p>

            {/* Author Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 font-bold text-white text-base shadow-md">
                  {item.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    {item.name}
                  </h4>
                  <div className="text-xs text-slate-300">
                    {item.role} · <span className="text-cyan-400">{item.company}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.location}
                  </div>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-xl text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20">
                {item.projectType}
              </div>
            </div>

          </div>

          {/* Carousel Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 p-3 rounded-full glass-panel border border-white/20 text-white hover:text-cyan-300 hover:border-cyan-400 transition-all shadow-xl cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 p-3 rounded-full glass-panel border border-white/20 text-white hover:text-cyan-300 hover:border-cyan-400 transition-all shadow-xl cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-gradient-to-r from-violet-500 to-cyan-400'
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
