"use client";

import Image from "next/image";

const clients = [
  { name: "Reliance Industries Limited", url: "https://enterprise.accredian.com/assets/reliance-BW6X8p58.png" },
  { name: "HCL", url: "https://enterprise.accredian.com/assets/hcl-D7-2v5O_.png" },
  { name: "IBM", url: "https://enterprise.accredian.com/assets/ibm-D_Y-B5-v.png" },
  { name: "CRIF", url: "https://enterprise.accredian.com/assets/crif-BYW71X4F.png" },
  { name: "ADP", url: "https://enterprise.accredian.com/assets/adp-mG0lX2M0.png" },
  { name: "Bayer", url: "https://enterprise.accredian.com/assets/bayer-CstZ0_86.png" },
];

export function ClientLogos() {
  return (
    <section id="clients" className="bg-white py-16 border-y border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-[var(--text-gray)] uppercase tracking-[0.2em] mb-12">
          TRUSTED BY INNOVATIVE ORGANIZATIONS
        </p>
        
        <div className="relative">
          {/* Desktop/Tablet Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center justify-center w-full h-12 relative group">
                <img
                  src={client.url}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-[140px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Mobile Marquee */}
          <div className="md:hidden flex overflow-hidden group">
            <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-12 items-center py-4">
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex items-center justify-center w-32 h-10 shrink-0">
                  <img
                    src={client.url}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
