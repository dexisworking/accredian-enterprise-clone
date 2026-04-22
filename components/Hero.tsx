"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
              <span className="block">Empower Your Team with</span>
              <span className="block text-[var(--primary-blue)]">Strategic Skill Enhancement</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--text-gray)] sm:text-xl">
              Accredian Enterprise partners with organizations to deliver customized training programs in Data Science, AI, and Product Management.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Customized Curriculum",
                "Expert-led Training",
                "Hands-on Projects",
                "Measurable ROI",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary-blue)] text-white">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-[var(--foreground)]">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--primary-blue)] px-8 py-4 text-lg font-bold text-white transition hover:bg-[var(--primary-blue-hover)] shadow-lg"
              >
                Enquire Now
              </a>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
              <Image
                src="/hero_professionals.png"
                alt="Professional team"
                width={800}
                height={600}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-blue)]/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
