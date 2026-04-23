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
    <div className="flex gap-4 mt-8 md:mt-12 md:flex-row flex-col" data-cur="cursor">
      {/* Sidebar Tabs */}
      <div className="w-full md:flex-[0.3] relative">
        <div className="no-scrollbar md:max-w-sm md:px-4 py-2 flex flex-row md:flex-col items-center gap-4 md:gap-6 max-w-[90vw] overflow-x-auto" data-cur="cursor">
          {groups.map((group, idx) => (
            <div 
              key={group.title}
              onClick={() => {
                setActiveGroupIndex(idx);
                setOpenItemIndex(0);
              }}
              className={`w-full max-w-[280px] rounded-md px-4 py-4 text-center cursor-pointer transition-all ${
                activeGroupIndex === idx 
                ? "drop-shadow-lg md:drop-shadow-xl bg-white border border-[#1A73E8]/20" 
                : "border-2 border-neutral-300"
              }`}
              data-cur="cursor"
            >
              <h1 className={`text-sm whitespace-nowrap lg:text-lg font-semibold ${
                activeGroupIndex === idx ? "text-[#1A73E8]" : "text-neutral-500"
              }`} data-cur="cursor">
                {group.title}
              </h1>
            </div>
          ))}
        </div>
        {/* Mobile Scroll Indicator Button */}
        <button className="absolute md:hidden block z-20 right-0 top-[50%] translate-y-[-50%] drop-shadow-lg border bg-white rounded-full p-1">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </button>
      </div>

      {/* Accordion Content */}
      <div className="w-full md:flex-[0.7] md:px-4 flex flex-col gap-4" data-cur="cursor">
        {groups[activeGroupIndex].items.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-md shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)] overflow-hidden"
          >
            <h3 className="m-0">
              <button 
                onClick={() => setOpenItemIndex(openItemIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left p-4 hover:bg-black/5 transition-colors"
                type="button"
                aria-expanded={openItemIndex === idx}
                data-cur="pointer"
              >
                <div className="flex items-center w-full gap-2 py-2 px-2 flex-grow" data-cur="pointer">
                  <h1 className={`text-lg font-semibold w-full h-full ${openItemIndex === idx ? 'text-[#1A73E8]' : 'text-gray-900'}`} data-cur="pointer">
                    {item.question}
                  </h1>
                </div>
                <span className={`transition-transform duration-300 ${openItemIndex === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-500" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  </svg>
                </span>
              </button>
            </h3>
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openItemIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-0">
                <div className="flex flex-col gap-4 text-gray-700 text-lg leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

