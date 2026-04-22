"use client";

import Image from "next/image";
import { clientLogos } from "@/lib/site-data";

export function ClientLogos() {
  return (
    <section id="clients" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#000000]">
            Trusted by Top <span className="text-[#1A73E8]">Enterprises</span> Worldwide
          </h2>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-6 gap-12 items-center opacity-60">
          {clientLogos.map((client) => (
            <div key={client.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-10 w-auto object-contain max-w-[140px]"
              />
            </div>
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-12 py-4">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div key={i} className="flex items-center grayscale">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain max-h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
