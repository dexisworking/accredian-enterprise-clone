"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export function SiteHeader({ onEnquire }: { onEnquire?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm border-b border-slate-100 h-20">
      <div className="mx-auto flex max-w-7xl h-full items-center justify-between px-4 lg:px-8">
        <a href="#top" className="flex items-center">
          <img 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/main/accredian-logo.webp" 
            alt="Accredian" 
            className="h-[35px] w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-[var(--text-gray)] transition hover:text-[#1A73E8] relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1A73E8] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={onEnquire}
            className="inline-flex items-center justify-center rounded-lg bg-[#1A73E8] px-6 py-2 text-[15px] font-bold text-white transition hover:bg-[#1557b0] shadow-md shadow-[#1A73E8]/20"
          >
            Enquire Now
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 lg:hidden"
        >
          <span className="text-2xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mx-0 overflow-hidden bg-white border-b border-slate-100 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-[15px] font-bold text-slate-700 hover:bg-slate-50 hover:text-[#1A73E8]"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              if (onEnquire) onEnquire();
            }}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#1A73E8] px-5 py-3 text-[15px] font-bold text-white mx-4"
          >
            Enquire Now
          </button>
        </nav>
      </div>
    </header>
  );
}
