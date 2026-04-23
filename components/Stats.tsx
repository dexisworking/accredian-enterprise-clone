"use client";

import { stats } from "@/lib/site-data";

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-white" data-cur="cursor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-cur="cursor">
        <div className="text-center mb-6 mx-2" data-cur="cursor">
          <h2 className="text-2xl mx-1 sm:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
            Our<span className="text-[#1A73E8]" data-cur="cursor"> Track Record</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1" data-cur="cursor">
            The Numbers Behind <span className="text-[#1A73E8]" data-cur="cursor">Our Success</span>
          </p>
        </div>
        <div className="grid gap-0 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center px-12 py-8 ${i < stats.length - 1 ? 'md:border-r border-slate-200' : ''}`} data-cur="cursor">
              <div className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#E8F0FE] mb-6">
                <p className="text-5xl font-extrabold text-[#1A73E8] tracking-tight" data-cur="cursor">
                  {stat.value}
                </p>
              </div>
              <p className="text-[18px] font-medium text-[#3C4043] leading-snug max-w-[280px] mx-auto" data-cur="cursor">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
