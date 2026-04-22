"use client";

const stats = [
  { label: "Lives Impacted", value: "100k+" },
  { label: "Global Partnerships", value: "50+" },
  { label: "Enterprise Clients", value: "200+" },
  { label: "Domain Experts", value: "500+" },
];

export function Stats() {
  return (
    <section id="stats" className="bg-[var(--bg-light)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--primary-blue)]">Our Track Record</h2>
          <p className="mt-2 text-3xl font-extrabold text-[var(--foreground)] sm:text-4xl">Our Proven Partnerships</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-md">
              <p className="text-4xl font-extrabold text-[var(--primary-blue)]">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text-gray)] uppercase tracking-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
