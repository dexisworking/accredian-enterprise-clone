"use client";

import { workflowSteps } from "@/lib/site-data";
import { BarChart, Monitor, Video } from "lucide-react";

const stepIcons = [BarChart, Monitor, Video];

export function Process() {
  return (
    <section id="howItWorks" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#0F172A] mb-4">
            How We <span className="text-[#1A73E8]">Deliver Results</span> That Matter?
          </h2>
          <p className="text-xl text-slate-600">
            A Structured Three-Step Approach to <span className="text-[#1A73E8]">Skill Development</span>
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {workflowSteps.map((step, index) => {
            const Icon = stepIcons[index] || BarChart;
            return (
              <div 
                key={step.title} 
                className="group relative flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-[#f8fbff] border-x-[12px] border-[#1A73E8] shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Step Number */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-[#1A73E8] shadow-sm">
                  {index + 1}
                </div>

                <div className="w-20 h-20 bg-[#1A73E8] text-white rounded-full flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <Icon size={32} strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
