"use client";

import { LeadForm } from "./lead-form";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--bg-light)] pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(26,115,232,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center rounded-full bg-[var(--line)] px-3 py-1 text-sm font-semibold text-[var(--primary-blue)] mb-8">
              Accredian Enterprise
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl leading-[1.1]">
              <span className="block">Empower Your Team with</span>
              <span className="block text-[var(--primary-blue)] mt-2">Strategic Skill Enhancement</span>
            </h1>
            <p className="mt-8 text-lg text-[var(--text-gray)] sm:text-xl leading-relaxed max-w-xl">
              Partner with Accredian to deliver customized training programs in Data Science, AI, and Product Management that drive measurable business impact.
            </p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { title: "Customized", desc: "Curriculum tailored to your needs" },
                { title: "Expert-led", desc: "Training by industry veterans" },
                { title: "Project-based", desc: "Real-world hands-on experience" },
                { title: "ROI Driven", desc: "Measurable performance growth" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-[var(--line)]">
                    <svg className="h-6 w-6 text-[var(--primary-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--foreground)]">{item.title}</h3>
                    <p className="text-sm text-[var(--text-gray)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 lg:col-span-6 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[var(--brand-blue)]/10 to-transparent blur-2xl pointer-events-none" />
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
