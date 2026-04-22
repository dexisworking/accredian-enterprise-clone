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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/78 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur lg:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-ink)] text-sm font-semibold text-white">
            A
          </span>
          <span className="text-sm font-semibold tracking-[0.14em] text-slate-950 uppercase">
            Accredian Enterprise
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-blue-deep)]"
          >
            Enquire now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-slate-700 lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className="text-lg">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      <div
        className={`mx-4 mt-3 overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
          isOpen ? "grid grid-rows-[1fr] opacity-100" : "grid grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-5 py-3 text-sm font-semibold text-white"
            >
              Enquire now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
