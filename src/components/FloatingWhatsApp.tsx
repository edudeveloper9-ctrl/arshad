import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { formatWhatsAppUrl } from '../utils/portfolio-utils';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('Hi Arshadd, I saw your portfolio and would like to discuss a project.');

  const primaryPhone = PROFILE.phones[0];

  const handleSend = () => {
    const url = formatWhatsAppUrl(primaryPhone.tel, customMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const setPreset = (text: string) => {
    setCustomMsg(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl glass-panel border border-emerald-500/30 bg-slate-950/95 shadow-2xl p-5 animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs">
                  MA
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">MUDIVEDU ARSHADD</h4>
                <p className="text-[11px] text-emerald-400">Online · Typically replies in mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <button
              onClick={() => setPreset('Hi Arshadd, I need a modern website designed and developed.')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              🌐 Need Website
            </button>
            <button
              onClick={() => setPreset('Hi Arshadd, looking for a mobile app developer (Android/iOS).')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              📱 Mobile App
            </button>
            <button
              onClick={() => setPreset('Hi Arshadd, I have a freelance/full-time role for you.')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              💼 Hire Full-time
            </button>
          </div>

          {/* Message Textarea */}
          <textarea
            rows={2}
            value={customMsg}
            onChange={(e) => setCustomMsg(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 mb-3"
            placeholder="Write your message..."
          />

          {/* Action button */}
          <button
            onClick={handleSend}
            className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Open in WhatsApp</span>
          </button>
        </div>
      )}

      {/* Floating Button with Green Glow & Pulse */}
      <div className="relative group">
        {/* Glow halo */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-60 blur-md group-hover:opacity-100 transition-opacity animate-pulse" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2 px-4 py-3.5 rounded-full bg-[#128C7E] hover:bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 fill-white text-transparent" />
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
};
