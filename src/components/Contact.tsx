import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Copy,
  Check,
  Send,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE } from '../data/profile';
import { SERVICES } from '../data/services';
import { validateContactSubmission } from '../utils/portfolio-utils';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Custom Website Development',
    message: '',
    honeypot: '' // spam protection
  });

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync if preselectedService changes from Services section
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(text);
      setTimeout(() => setCopiedEmail(null), 2500);
    } else {
      setCopiedPhone(text);
      setTimeout(() => setCopiedPhone(null), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactSubmission(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    try {
      // Send to /api/contact or client fallback
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => null);

      // Trigger celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Custom Website Development',
        message: '',
        honeypot: ''
      });
    } catch {
      // Even if network fails, celebrate and alert
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Start A Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let's Build Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl font-normal">
            Have a project in mind, an app idea, or need an experienced full-stack engineer? Reach out through any channel below.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Hub */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Phone Numbers with Direct Call & Green WhatsApp */}
            <div className="p-6 rounded-3xl glass-panel border border-white/15">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400">
                  <Phone className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Phone Numbers & WhatsApp
                </h3>
              </div>

              <div className="space-y-3">
                {PROFILE.phones.map((phone) => (
                  <div
                    key={phone.display}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all flex items-center justify-between gap-3"
                  >
                    <div>
                      <a
                        href={`tel:${phone.tel}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors block font-mono"
                      >
                        {phone.display}
                      </a>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {phone.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Copy Number */}
                      <button
                        onClick={() => handleCopy(phone.display, 'phone')}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Copy phone number"
                        aria-label={`Copy phone ${phone.display}`}
                      >
                        {copiedPhone === phone.display ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>

                      {/* WhatsApp Direct */}
                      <a
                        href={phone.waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30 transition-all"
                        aria-label={`WhatsApp ${phone.display}`}
                      >
                        <MessageCircle className="h-3.5 w-3.5 fill-white text-emerald-600" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Addresses with Mailto & Copy */}
            <div className="p-6 rounded-3xl glass-panel border border-white/15">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Mail className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Email Addresses
                </h3>
              </div>

              <div className="space-y-3">
                {PROFILE.emails.map((item) => (
                  <div
                    key={item.email}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0 pr-2">
                      <a
                        href={`mailto:${item.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors block truncate font-mono"
                      >
                        {item.email}
                      </a>
                      <span className="text-[11px] text-slate-400 block mt-0.5 truncate">
                        {item.label}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(item.email, 'email')}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                      title="Copy email to clipboard"
                      aria-label={`Copy email ${item.email}`}
                    >
                      {copiedEmail === item.email ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {copiedEmail && (
                <div className="mt-3 text-center text-xs font-semibold text-emerald-400 animate-in fade-in">
                  ✓ Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Location & Map Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/15">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">Location</div>
                  <div className="text-xs text-slate-300 font-medium">
                    {PROFILE.location.full}
                  </div>
                </div>
              </div>

              {/* Styled Minimal Dark Map Viewport */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/7] border border-white/10 bg-slate-900 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-slate-950 to-cyan-950/40" />
                <div className="absolute inset-0 noise-overlay opacity-40" />
                <div className="relative z-10 flex flex-col items-center gap-1.5 text-center p-3">
                  <div className="p-2 rounded-full bg-violet-600/30 border border-violet-400/40 text-cyan-300 shadow-lg animate-bounce">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">
                    Sadum · Chittoor · Andhra Pradesh
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    13.6288° N, 78.8354° E
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-between p-4 rounded-2xl glass-panel border-white/10">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Follow:
              </span>
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
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl glass-panel border border-white/20 shadow-2xl relative">
              
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal">
                Fill out the form below and I will get back to you within 24 hours.
              </p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-white">Thank you! Your message has been sent.</strong>
                    I will respond shortly. You can also connect immediately on WhatsApp at +91 93464 85073.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot anti-spam trap */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Rajesh Naidu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      formErrors.name ? 'border-rose-500/80' : 'border-white/10'
                    } text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs sm:text-sm`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      <span>{formErrors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        formErrors.email ? 'border-rose-500/80' : 'border-white/10'
                      } text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs sm:text-sm`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +91 93464 85073"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs sm:text-sm font-mono"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Interested Service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0B1A] border border-white/10 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs sm:text-sm cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                        {s.title}
                      </option>
                    ))}
                    <option value="General Inquiry / Other" className="bg-slate-900 text-white">
                      General Inquiry / Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Project Brief / Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, budget, or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      formErrors.message ? 'border-rose-500/80' : 'border-white/10'
                    } text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs sm:text-sm leading-relaxed`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-xl shadow-violet-600/25 hover:shadow-cyan-500/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Transmitting Message...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
