"use client";

import Image from "next/image";

const categories = [
  {
    title: "Domain Specific",
    description: "In-depth training in Data Science, AI, ML, and Product Management.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Level Specific",
    description: "Tailored programs for Freshers, Mid-career, and Senior Leadership.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
  },
];

export function CAT() {
  return (
    <section id="cat" className="py-24 bg-[var(--bg-light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--primary-blue)]">CAT</h2>
          <p className="mt-2 text-4xl font-extrabold text-[var(--foreground)]">Customized Academic Training</p>
          <p className="mt-4 text-[var(--text-gray)]">We provide multi-dimensional training paths designed to meet the unique needs of your workforce.</p>
        </div>
        
        <div className="grid gap-10 md:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">{cat.title}</h3>
                <p className="text-[var(--text-gray)] leading-relaxed">{cat.description}</p>
                <div className="mt-6 flex gap-3">
                  <button className="text-[var(--primary-blue)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
