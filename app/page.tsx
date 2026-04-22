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
  return (
    <div className="bg-white min-h-screen">
      <SiteHeader />
      
      <main>
        <Hero />
        <Stats />
        <ClientLogos />
        <AccredianEdge />
        <CAT />
        <Process />
        <Testimonials />
        
        <section id="faqs" className="py-24 bg-[var(--bg-light)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="max-w-xl">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--primary-blue)]">FAQs</h2>
                <p className="mt-2 text-4xl font-extrabold text-[var(--foreground)]">Frequently Asked Questions</p>
                <p className="mt-4 text-[var(--text-gray)]">Everything you need to know about our corporate training programs and delivery modes.</p>
              </div>
              <FaqAccordion groups={faqGroups} />
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--primary-blue)]">Enquire Now</h2>
                <p className="mt-2 text-4xl font-extrabold text-[var(--foreground)]">Ready to Transform Your Team?</p>
                <p className="mt-6 text-lg text-[var(--text-gray)] leading-relaxed">
                  Fill out the form to request a customized proposal or schedule a conversation with our enterprise learning experts.
                </p>
                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--bg-light)] text-[var(--primary-blue)] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--foreground)]">Email Us</h4>
                      <p className="text-[var(--text-gray)]">enterprise@accredian.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--bg-light)] text-[var(--primary-blue)] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--foreground)]">Call Us</h4>
                      <p className="text-[var(--text-gray)]">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
