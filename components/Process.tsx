"use client";

import { workflowSteps } from "@/lib/site-data";

export function Process() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--primary-blue)]">How It Works</h2>
          <p className="mt-2 text-4xl font-extrabold text-[var(--foreground)]">How We Deliver Results</p>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[var(--bg-light)] -translate-y-1/2 hidden lg:block" />
          <div className="grid gap-12 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="relative z-10 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm transition hover:shadow-xl group">
                <div className="w-12 h-12 bg-[var(--primary-blue)] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">{step.title}</h3>
                <p className="text-[var(--text-gray)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
