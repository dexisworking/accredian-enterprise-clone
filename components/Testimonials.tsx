"use client";

import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0b1c33] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--primary-blue)]">Testimonials</h2>
          <p className="mt-2 text-4xl font-extrabold">What Our Partners Say</p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-[var(--primary-blue)] mb-6">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V21H14.017ZM6.017 21V12H5.017C4.46472 12 4.017 11.5523 4.017 11V9C4.017 8.44772 4.46472 8 5.017 8H9.017C9.56928 8 10.017 8.44772 10.017 9V15C10.017 15.5523 9.56928 16 9.017 16H6.017C6.017 16.8954 6.91242 18 8.017 18V21H6.017Z" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-300 italic mb-8">"{t.quote}"</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="font-bold text-xl">{t.name}</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Enterprise Partner</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
