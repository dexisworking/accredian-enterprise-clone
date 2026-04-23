"use client";

import { catFramework } from "@/lib/site-data";
import { BookOpen, Terminal, Wrench } from "lucide-react";

const icons = [BookOpen, Terminal, Wrench];

export function CAT() {
  return (
    <section id="cat" className="w-full mt-12 sm:mt-24 py-4 flex flex-col items-center second-bg-grad" data-cur="cursor">
      <div className="text-center mx-2" data-cur="cursor">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
          The <span className="text-[#1A73E8]" data-cur="cursor">CAT Framework</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto" data-cur="cursor">
          Our Proven Approach to <span className="text-[#1A73E8]" data-cur="cursor">Learning Excellence</span>
        </p>
      </div>
      <div className="w-full flex justify-center mt-16">
        <img 
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg" 
          alt="Our Solutions" 
          className="w-[90%] sm:w-[70%] h-auto rounded-lg" 
          data-cur="cursor" 
        />
      </div>
    </section>
  );
}

