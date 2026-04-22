"use client";

const stats = [
  { label: "Professionals Trained", value: "10K+", desc: "For career success" },
  { label: "Sessions Delivered", value: "200+", desc: "Unmatched excellence" },
  { label: "Active Learners", value: "5K+", desc: "Engaged in courses" },
  { label: "Domain Experts", value: "50+", desc: "Industry veterans" },
];

export function Stats() {
  return (
    <section id="stats" className="bg-white py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group text-center">
              <p className="text-4xl font-extrabold text-[var(--primary-blue)] transition-transform duration-500 group-hover:scale-110">
                {stat.value}
              </p>
              <h3 className="mt-4 text-lg font-bold text-[var(--foreground)]">
                {stat.label}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-gray)]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
