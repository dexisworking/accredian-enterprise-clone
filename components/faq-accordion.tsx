"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openItem, setOpenItem] = useState(items[0]?.question ?? "");

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = item.question === openItem;

        return (
          <article
            key={item.question}
            className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
          >
            <button
              type="button"
              onClick={() =>
                setOpenItem((current) =>
                  current === item.question ? "" : item.question,
                )
              }
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold tracking-tight text-slate-950">
                {item.question}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-xl text-slate-600 transition ${isOpen ? "rotate-45 text-[var(--brand-blue)]" : ""}`}
              >
                +
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
