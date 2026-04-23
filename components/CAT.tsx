"use client";

import { catFramework } from "@/lib/site-data";
import { BookOpen, Terminal, Wrench } from "lucide-react";

const icons = [BookOpen, Terminal, Wrench];

export function CAT() {
  return (
    <section id="cat" className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xl text-slate-600">
            Our Proven Approach to <span className="text-[#1A73E8]">Learning Excellence</span>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto h-[500px] flex items-center justify-center">
          {/* Thick Wave SVG Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg viewBox="0 0 1000 500" fill="none" className="w-full h-full preserve-3d">
              <path 
                d="M100,250 C250,50 450,450 600,250 C750,50 900,250 950,250" 
                stroke="#1A73E8" 
                strokeWidth="24" 
                strokeLinecap="round"
                className="opacity-100"
              />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-0">
            {catFramework.map((item, i) => {
              const Icon = icons[i] || BookOpen;
              const offset = i === 1 ? 'lg:translate-y-20' : i === 2 ? 'lg:-translate-x-16' : '';
              const negativeMargin = i > 0 ? 'lg:-ml-24' : '';
              
              return (
                <div key={item.title} className={`flex flex-col items-center text-center group ${offset} ${negativeMargin}`}>
                  <div className="relative mb-6">
                    {/* Large Overlapping Circles */}
                    <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border-[12px] border-white flex items-center justify-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-500 relative z-20">
                      <div className="flex flex-col items-center">
                         <Icon size={80} className="text-[#1A73E8] mb-4" />
                         <h3 className="text-3xl font-extrabold text-[#000000]">
                           {item.title}
                         </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-[#3C4043] leading-relaxed max-w-[240px] font-medium">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
