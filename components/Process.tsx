"use client";

import { workflowSteps } from "@/lib/site-data";
import { BarChart, Monitor, Video } from "lucide-react";

const stepIcons = [BarChart, Monitor, Video];

export function Process() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-light)] text-[var(--primary-blue)] text-sm font-bold uppercase tracking-widest mb-6 border border-[var(--line)]">
            Our Process
          </div>
          <h2 className="text-4xl font-extrabold text-[var(--foreground)] sm:text-5xl leading-tight">
            How We Deliver Results That Matter?
          </h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {workflowSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div 
                key={step.title} 
                className="group relative flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-[var(--bg-light)] border-x-[12px] border-[var(--primary-blue)] shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Step Number */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-[var(--primary-blue)] shadow-sm">
                  {index + 1}
                </div>

                <div className="w-20 h-20 bg-[var(--primary-blue)] text-white rounded-full flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <Icon size={32} strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">{step.title}</h3>
                <p className="text-[var(--text-gray)] leading-relaxed text-sm">
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
