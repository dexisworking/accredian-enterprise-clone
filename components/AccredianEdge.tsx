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
    <section id="accredian-edge" className="py-24 bg-[#f8fbff] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#0F172A] mb-4">
            The <span className="text-[#1A73E8]">Accredian Edge</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {accredianEdge.map((edge, i) => {
            const Icon = icons[edge.icon] || Lightbulb;
            return (
              <div 
                key={edge.title} 
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-[#1A73E8]/5 transition-all duration-500 group transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1A73E8]/5 flex items-center justify-center mb-6 group-hover:bg-[#1A73E8] transition-colors duration-500">
                  <Icon size={32} className="text-[#1A73E8] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0F172A] mb-4">
                  {edge.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {edge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1A73E8]/5 to-transparent pointer-events-none" />
    </section>
  );
}
