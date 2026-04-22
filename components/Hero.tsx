"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { heroChecklist } from "@/lib/site-data";

export function Hero({ onEnquire }: { onEnquire?: () => void }) {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#f8fbff] rounded-[3rem] overflow-hidden border border-[var(--line)] shadow-sm">
          {/* Background Gradient Accents */}
          <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-[#1A73E8]/5 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 items-center px-8 sm:px-12 py-16 lg:py-20 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-7xl font-extrabold text-[#0F172A] leading-[1.1] tracking-tight">
                Next-Gen <span className="text-[#1A73E8]">Expertise</span><br />
                For Your <span className="text-[#1A73E8]">Enterprise</span>
              </h1>
              
              <p className="mt-8 text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium">
                Cultivate high-performance teams through expert learning.
              </p>
              
              <div className="mt-10 space-y-4">
                {heroChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-green-500 shrink-0" />
                    <span className="text-lg font-semibold text-[#0F172A]">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <button 
                  onClick={onEnquire}
                  className="bg-[#1A73E8] hover:bg-[#1557b0] text-white px-10 py-4 rounded-xl text-xl font-bold shadow-lg shadow-[#1A73E8]/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Enquire Now
                </button>
              </div>
            </div>
            
            <div className="relative mt-16 lg:mt-0 lg:h-[600px] flex items-end justify-center">
              <div className="relative w-full h-full max-w-2xl lg:max-w-none">
                <Image 
                  src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp" 
                  alt="Accredian Enterprise Team" 
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
