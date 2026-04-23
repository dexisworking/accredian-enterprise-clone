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
import { LeadCapture } from "@/components/LeadCapture";
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
        <section id="faqs" className="w-full flex justify-center mt-16 sm:mt-16 md:py-12 xl:px-12 px-4" data-cur="cursor">
          <div className="w-full max-w-[85rem]" data-cur="cursor">
            <div className="w-full">
              <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
                Frequently Asked <span className="text-[#1A73E8]" data-cur="cursor">Questions</span>
              </h2>
            </div>
            
            <FaqAccordion groups={faqGroups} />
            
            <div className="flex justify-center mt-6" data-cur="cursor">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-[#1A73E8] text-white font-semibold rounded-lg shadow-md hover:bg-[#1557b0] transition duration-300" 
                data-cur="pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        <Testimonials onEnquire={() => setIsModalOpen(true)} />
        <LeadCapture />
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
