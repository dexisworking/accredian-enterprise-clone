"use client";

import Image from "next/image";
import { capabilityGroups } from "@/lib/site-data";

export function CAT() {
  return (
    <section id="cat" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-light)] text-[var(--primary-blue)] text-sm font-bold uppercase tracking-widest mb-6 border border-[var(--line)]">
            CAT Framework
          </div>
          <h2 className="text-4xl font-extrabold text-[var(--foreground)] sm:text-5xl leading-tight">
            Customized Academic Training
          </h2>
          <p className="mt-6 text-lg text-[var(--text-gray)] leading-relaxed">
            We provide multi-dimensional training paths designed to meet the unique needs of your workforce.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[var(--line)] -translate-y-1/2 hidden xl:block z-0" />
          
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 relative z-10">
            {capabilityGroups.map((group, index) => (
              <div 
                key={group.title} 
                className="group flex flex-col items-center text-center bg-white p-2 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-lg">
                  <Image 
                    src={group.image} 
                    alt={group.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Step Number Circle */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-[var(--primary-blue)] shadow-md">
                    0{index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{group.title}</h3>
                <p className="text-sm text-[var(--text-gray)] leading-relaxed px-4 mb-6">
                  {group.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 px-2 mt-auto">
                  {group.items.slice(0, 3).map((item) => (
                    <span key={item} className="text-[10px] font-bold uppercase tracking-wider bg-[var(--bg-light)] text-[var(--primary-blue)] px-2 py-1 rounded-md">
                      {item}
                    </span>
                  ))}
                  {group.items.length > 3 && (
                    <span className="text-[10px] font-bold text-[var(--text-gray)] px-1">
                      +{group.items.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
