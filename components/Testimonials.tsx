"use client";

import Image from "next/image";
import { testimonials } from "@/lib/site-data";
import { ChevronRight } from "lucide-react";

export function Testimonials({ onEnquire }: { onEnquire?: () => void }) {
  return (
    <section id="testimonials" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(26,115,232,0.1),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#1A73E8]/10 text-[#1A73E8] text-xs font-bold tracking-widest uppercase mb-4 border border-[#1A73E8]/20">
            Success Stories
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Trusted by Leaders, Loved by Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 relative group hover:bg-white/10 transition-all duration-500">
              <div className="mb-8 h-12 relative grayscale group-hover:grayscale-0 transition-all">
                <img 
                  src={testimonial.logo} 
                  alt={testimonial.name}
                  className="h-full object-contain"
                />
              </div>
              <p className="text-xl text-slate-300 italic leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">Strategic Partner</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                   <CheckIcon className="text-green-500" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mb-24">
          <div className="w-3 h-3 rounded-full bg-[#1A73E8]" />
          <div className="w-3 h-3 rounded-full bg-slate-700" />
        </div>

        {/* CTA Banner */}
        <div className="relative bg-[#1A73E8] rounded-[3rem] p-12 overflow-hidden shadow-2xl shadow-[#1A73E8]/40">
           <div className="absolute top-0 right-0 w-[400px] h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.2),transparent_70%)]" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <HeadsetIcon className="text-white" size={48} />
                </div>
                <div>
                   <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                     Want to Learn More About Our Training Solutions?
                   </h3>
                   <p className="text-xl text-blue-100 font-medium">
                     Get Expert Guidance for Your Team's Success!
                   </p>
                </div>
              </div>
              <button 
                onClick={onEnquire}
                className="bg-white text-[#1A73E8] hover:bg-slate-50 px-10 py-4 rounded-2xl text-xl font-bold flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us <ChevronRight size={24} />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      className={className} 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function HeadsetIcon({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      className={className} 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}
