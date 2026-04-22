"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ClientLogos } from "@/components/ClientLogos";
import { AccredianEdge } from "@/components/AccredianEdge";
import { CAT } from "@/components/CAT";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqGroups } from "@/lib/site-data";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen selection:bg-[#1A73E8]/20 selection:text-[#1A73E8]">
      <SiteHeader onEnquire={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onEnquire={() => setIsModalOpen(true)} />
        <Stats />
        <ClientLogos />
        <AccredianEdge />
        <CAT />
        <Process />
        
        {/* FAQs */}
        <section id="faqs" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extrabold text-[#000000]">
                Frequently Asked <span className="text-[#1A73E8]">Questions</span>
              </h2>
            </div>
            <FaqAccordion groups={faqGroups} />
            
            <div className="mt-16 text-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1A73E8] hover:bg-[#1557b0] text-white w-[170px] h-[48px] rounded-lg text-lg font-bold shadow-lg shadow-[#1A73E8]/20 transition-all"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        <Testimonials onEnquire={() => setIsModalOpen(true)} />
      </main>

      <Footer onEnquire={() => setIsModalOpen(true)} />

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <EnquiryForm onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
