"use client";

import { testimonials } from "@/lib/site-data";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0b1c33] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-blue)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-[var(--primary-blue)] text-sm font-bold uppercase tracking-widest mb-6 border border-white/10">
            Success Stories
          </div>
          <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight">
            Trusted by Leaders, Loved by Teams
          </h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div 
              key={t.name} 
              className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 hover:border-[var(--primary-blue)]/30"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary-blue)]/20 flex items-center justify-center text-[var(--primary-blue)] mb-8 transition-transform duration-500 group-hover:scale-110">
                  <Quote size={24} fill="currentColor" />
                </div>
                <p className="text-lg leading-relaxed text-gray-300 italic mb-10">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-bold text-xl tracking-tight">{t.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">
                    Strategic Partner
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
