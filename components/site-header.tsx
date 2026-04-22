"use client";

import { useState } from "react";

const navItems = [
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#top" className="flex items-center">
          <img 
            src="https://enterprise.accredian.com/static/media/logo.svg" 
            alt="Accredian" 
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-[var(--text-gray)] transition hover:text-[var(--primary-blue)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--primary-blue)] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--primary-blue-hover)] shadow-md"
          >
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--foreground)] lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      <div
        className={`mx-0 overflow-hidden bg-white border-b border-gray-100 transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
          isOpen ? "grid grid-rows-[1fr] opacity-100" : "grid grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[var(--text-gray)] transition hover:bg-[var(--bg-light)] hover:text-[var(--primary-blue)]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[var(--primary-blue)] px-5 py-3 text-sm font-bold text-white"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
