"use client";

const clients = [
  { name: "HP", color: "#0096D6" },
  { name: "Dell", color: "#007DB8" },
  { name: "Tata", color: "#005696" },
  { name: "Adobe", color: "#FF0000" },
  { name: "American Express", color: "#007BC1" },
  { name: "Microsoft", color: "#737373" },
];

export function ClientLogos() {
  return (
    <section id="clients" className="bg-white py-16 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-[var(--text-gray)] uppercase tracking-widest mb-10">
          Trusted by Global Leaders
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <span className="text-2xl font-black italic tracking-tighter" style={{ color: client.color }}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
