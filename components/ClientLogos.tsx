"use client";

import Image from "next/image";
import { clientLogos } from "@/lib/site-data";

export function ClientLogos() {
  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#0F172A] mb-4">
            Our Proven <span className="text-[#1A73E8]">Partnerships</span>
          </h2>
          <p className="text-xl text-slate-600">
            Successful Collaborations With the <span className="text-[#1A73E8]">Industry's Best</span>
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-6 gap-12 items-center opacity-80 hover:opacity-100 transition-opacity">
          {clientLogos.map((client) => (
            <div key={client.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110">
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain max-h-12 w-auto"
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
