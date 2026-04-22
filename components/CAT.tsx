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

        <div className="relative max-w-5xl mx-auto">
          {/* Wave/Loop SVG Background */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden lg:block">
            <svg viewBox="0 0 1000 200" fill="none" className="w-full">
              <path 
                d="M50,100 C150,0 350,200 500,100 C650,0 850,200 950,100" 
                stroke="#1A73E8" 
                strokeWidth="4" 
                strokeDasharray="12 12" 
                className="opacity-20"
              />
              <circle cx="50" cy="100" r="6" fill="#1A73E8" />
              <circle cx="500" cy="100" r="6" fill="#1A73E8" />
              <circle cx="950" cy="100" r="6" fill="#1A73E8" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 relative">
            {catFramework.map((item, i) => {
              const Icon = icons[i] || BookOpen;
              return (
                <div key={item.title} className="flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    {/* Outer circle with gradient border effect */}
                    <div className="w-48 h-48 rounded-full border-4 border-[#1A73E8] flex items-center justify-center bg-white shadow-xl group-hover:scale-105 transition-transform duration-500 relative z-20">
                      <div className="p-8">
                         <Icon size={64} className="text-[#1A73E8]" />
                      </div>
                    </div>
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-[#1A73E8]/10 rounded-full blur-2xl scale-90 group-hover:scale-110 transition-transform duration-500 -z-10" />
                  </div>
                  
                  <h3 className="text-3xl font-extrabold text-[#0F172A] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-[240px]">
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
