"use client";

import { accredianEdge } from "@/lib/site-data";
import { Lightbulb, Users, Zap, Monitor, Layers, Target, Clock } from "lucide-react";

const icons: Record<string, any> = {
  lightbulb: Lightbulb,
  users: Users,
  zap: Zap,
  monitor: Monitor,
  layers: Layers,
  target: Target,
  clock: Clock,
};

export function AccredianEdge() {
  return (
    <section id="accredianEdge" className="py-24 bg-[#f8fbff] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#0F172A] mb-4">
            The <span className="text-[#1A73E8]">Accredian Edge</span>
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto py-20 px-10">
          {/* Connecting Dotted Line SVG */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 px-20">
            <svg viewBox="0 0 1000 400" fill="none" className="w-full h-full">
              <path 
                d="M50,200 C150,50 250,350 350,200 C450,50 550,350 650,200 C750,50 850,350 950,200" 
                stroke="#BDC1C6" 
                strokeWidth="2" 
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="relative z-10 flex justify-between items-center h-[400px]">
            {accredianEdge.map((edge, i) => {
              const Icon = icons[edge.icon] || Lightbulb;
              const isEven = i % 2 === 0;
              const yOffset = isEven ? '-translate-y-24' : 'translate-y-24';
              
              return (
                <div 
                  key={edge.title} 
                  className={`flex flex-col items-center group transition-all duration-500 transform ${yOffset} w-[14%]`}
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-[#1A73E8] group-hover:scale-110 transition-all duration-300">
                    <Icon size={30} className="text-[#1A73E8] group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className={`absolute ${isEven ? 'top-20' : 'bottom-20'} w-48 text-center`}>
                    <h3 className="text-lg font-bold text-[#000000] mb-2 leading-tight">
                      {edge.title}
                    </h3>
                    <p className="text-sm text-[#5F6368] leading-tight font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {edge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1A73E8]/5 to-transparent pointer-events-none" />
    </section>
  );
}
