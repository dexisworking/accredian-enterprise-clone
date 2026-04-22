"use client";

const edges = [
  {
    title: "Global Perspective",
    description: "Curriculum designed with global industry standards and case studies.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Support",
    description: "Dedicated learning managers and 24/7 technical assistance for teams.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Flexibility",
    description: "Modular programs that fit into busy corporate schedules seamlessly.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "In-depth Focus",
    description: "Specialized training paths focusing on deep technical and strategic skills.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function AccredianEdge() {
  return (
    <section id="edge" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--primary-blue)]">The Accredian Edge</h2>
          <p className="mt-2 text-4xl font-extrabold text-[var(--foreground)]">Why Choose Us for Your Enterprise Training?</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {edges.map((edge) => (
            <div key={edge.title} className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[var(--bg-light)] text-[var(--primary-blue)] mb-6">
                {edge.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">{edge.title}</h3>
              <p className="text-[var(--text-gray)] leading-relaxed">{edge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
