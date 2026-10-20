import React from 'react';
import { Globe, Smartphone, Palette, Server, ShoppingBag, ShieldCheck, Sparkles, ArrowRight, Check } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/services';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="h-6 w-6" />;
      case 'Smartphone': return <Smartphone className="h-6 w-6" />;
      case 'Palette': return <Palette className="h-6 w-6" />;
      case 'Server': return <Server className="h-6 w-6" />;
      case 'ShoppingBag': return <ShoppingBag className="h-6 w-6" />;
      case 'ShieldCheck': return <ShieldCheck className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const handleQuoteClick = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Comprehensive <span className="gradient-text">Services & Solutions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
            From initial wireframing to production deployment and 24/7 reliability, here is how I help clients succeed.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full" />
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`p-7 rounded-3xl glass-panel border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between group ${
                service.popular
                  ? 'border-violet-500/40 hover:border-cyan-400/50 shadow-violet-500/5'
                  : 'border-white/15 hover:border-cyan-400/30'
              }`}
            >
              <div>
                {/* Header Icon + Popular Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-cyan-400 border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  {service.popular && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-sm">
                      Most Requested
                    </span>
                  )}
                </div>

                {/* Service Title & Desc */}
                <h3 className="text-xl font-bold text-white font-heading mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.fullDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get A Quote Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => handleQuoteClick(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-600 border border-white/10 hover:border-transparent transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-cyan-400/30 cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
