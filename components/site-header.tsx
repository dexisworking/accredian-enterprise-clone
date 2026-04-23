"use client";

import { useState } from "react";



export function SiteHeader({ onEnquire }: { onEnquire?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-6 px-6 md:px-14" data-cur="cursor">
      <div className="max-w-[85rem] mx-auto flex justify-between items-center" data-cur="cursor">
        <a href="#home">
          <img 
            src="/logo.webp" 
            alt="logo" 
            className="w-[124px] h-[32px]" 
            data-cur="cursor" 
          />
        </a>
        
        <ul className="hidden md:flex justify-end items-center flex-1 space-x-8" data-cur="cursor">
          <li className="text-[16px] font-circular font-normal cursor-pointer text-[#1A73E8] font-semibold border-b-[3px] border-[#1A73E8]" data-cur="cursor">
            <a href="#home" data-cur="pointer">Home</a>
          </li>
          <li className="text-[16px] font-circular font-normal cursor-pointer text-black">
            <a href="#stats" data-cur="pointer">Stats</a>
          </li>
          <li className="text-[16px] font-circular font-normal cursor-pointer text-black">
            <a href="#clients">Clients</a>
          </li>
          <li className="text-[16px] font-circular font-normal cursor-pointer text-black">
            <a href="#accredianEdge">Accredian Edge</a>
          </li>
          <li className="text-[16px] font-circular font-normal cursor-pointer text-black">
            <a href="#cat">CAT</a>
          </li>
          <li className="text-[16px] font-circular font-normal cursor-pointer text-black">
            <a href="#howItWorks" data-cur="pointer">How It Works</a>
          </li>
          <li className="text-[16px] font-circular font-normal cursor-pointer text-black">
            <a href="#faqs">FAQs</a>
          </li>
          <li className="text-[16px] font-circular font-normal cursor-pointer text-black">
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div className="md:hidden flex items-center relative">
          <svg 
            onClick={() => setIsOpen(!isOpen)}
            stroke="currentColor" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            aria-hidden="true" 
            className="w-8 h-8 text-black cursor-pointer" 
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          
          <div className={`${isOpen ? "flex" : "hidden"} absolute top-[50px] right-0 bg-white shadow-lg p-6 rounded-xl w-[200px] z-[60]`}>
            <ul className="flex flex-col space-y-4 w-full">
              <li className="text-[16px] font-circular text-black cursor-pointer">
                <a 
                  className="text-[#1A73E8] font-semibold border-b-[2px] border-[#1A73E8] block" 
                  href="#home"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              <li className="text-[16px] font-circular text-black cursor-pointer">
                <a className="text-black block" href="#stats" onClick={() => setIsOpen(false)}>Stats</a>
              </li>
              <li className="text-[16px] font-circular text-black cursor-pointer">
                <a className="text-black block" href="#clients" onClick={() => setIsOpen(false)}>Clients</a>
              </li>
              <li className="text-[16px] font-circular text-black cursor-pointer">
                <a className="text-black block" href="#accredianEdge" onClick={() => setIsOpen(false)}>Accredian Edge</a>
              </li>
              <li className="text-[16px] font-circular text-black cursor-pointer">
                <a className="text-black block" href="#cat" onClick={() => setIsOpen(false)}>CAT</a>
              </li>
              <li className="text-[16px] font-circular text-black cursor-pointer">
                <a className="text-black block" href="#howItWorks" onClick={() => setIsOpen(false)}>How It Works</a>
              </li>
              <li className="text-[16px] font-circular text-black cursor-pointer">
                <a className="text-black block" href="#faqs" onClick={() => setIsOpen(false)}>FAQs</a>
              </li>
              <li className="text-[16px] font-circular text-black cursor-pointer">
                <a className="text-black block" href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
