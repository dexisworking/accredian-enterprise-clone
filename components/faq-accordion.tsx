"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQGroup {
  title: string;
  items: FAQItem[];
}

export function FaqAccordion({ groups }: { groups: FAQGroup[] }) {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Sidebar Tabs */}
      <div className="lg:w-1/3 flex flex-col gap-4">
        {groups.map((group, idx) => (
          <button
            key={group.title}
            onClick={() => {
              setActiveGroupIndex(idx);
              setOpenItemIndex(0);
            }}
            className={`px-8 py-5 rounded-2xl text-left text-xl font-bold transition-all ${
              activeGroupIndex === idx
                ? "bg-white shadow-xl shadow-slate-200/50 text-[#1A73E8] border border-slate-100"
                : "bg-slate-50 text-slate-500 hover:bg-slate-100"
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>

      {/* Accordion Content */}
      <div className="lg:w-2/3 space-y-4">
        {groups[activeGroupIndex].items.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenItemIndex(openItemIndex === idx ? null : idx)}
              className="w-full px-8 py-6 flex items-center justify-between text-left group"
            >
              <span className={`text-xl font-bold transition-colors ${
                openItemIndex === idx ? "text-[#1A73E8]" : "text-[#0F172A]"
              }`}>
                {item.question}
              </span>
              {openItemIndex === idx ? (
                <ChevronUp className="text-[#1A73E8]" size={24} />
              ) : (
                <ChevronDown className="text-slate-400 group-hover:text-slate-600" size={24} />
              )}
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openItemIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-8 pb-8 text-lg text-slate-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
