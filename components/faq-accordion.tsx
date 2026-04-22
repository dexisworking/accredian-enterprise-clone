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
    <div className="flex flex-col lg:flex-row gap-16">
      {/* Sidebar Tabs (30%) */}
      <div className="lg:w-[30%] flex flex-col gap-5">
        {groups.map((group, idx) => (
          <button
            key={group.title}
            onClick={() => {
              setActiveGroupIndex(idx);
              setOpenItemIndex(0);
            }}
            className={`px-8 py-6 rounded-xl text-left text-[18px] font-extrabold transition-all border-2 ${
              activeGroupIndex === idx
                ? "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-[#1A73E8] border-[#1A73E8]"
                : "bg-slate-50 text-slate-500 border-transparent hover:bg-slate-100"
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>

      {/* Accordion Content (70%) */}
      <div className="lg:w-[70%] space-y-5">
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
