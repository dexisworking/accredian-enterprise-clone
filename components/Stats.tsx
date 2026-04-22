"use client";

import { stats } from "@/lib/site-data";

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-8">
              <div className="relative inline-block mb-4">
                <p className="text-6xl font-extrabold text-[#1A73E8] tracking-tight">
                  {stat.value}
                </p>
              </div>
              <p className="text-lg font-medium text-slate-600 leading-snug max-w-[280px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
