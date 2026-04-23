"use client";

import { accredianEdge } from "@/lib/site-data";
import { Lightbulb, Users, Zap, Monitor, Layers, Target, Clock } from "lucide-react";

const icons: Record<string, any> = {
  lightbulb: Lightbulb,
  users: Users,
  zap: Zap,
  monitor: Monitor,
  layers: Layers,
  target: Target,
  clock: Clock,
};

export function AccredianEdge() {
  return (
    <div id="accredianEdge" className="mt-12 px-4 md:px-8 xl:px-12" data-cur="cursor">
      <div className="text-center pb-8 mx-2" data-cur="cursor">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
          The <span className="text-[#1A73E8]" data-cur="cursor">Accredian Edge</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1" data-cur="cursor">
          Key Aspects of <span className="text-[#1A73E8]" data-cur="cursor">Our Strategic Training</span>
        </p>
      </div>
      
      {/* Desktop/Tablet View */}
      <div className="w-full hidden sm:flex justify-center items-center mb-8">
        <img 
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg" 
          alt="Our Solutions" 
          className="w-[100%] h-auto rounded-lg" 
          data-cur="cursor" 
        />
      </div>
      
      {/* Mobile View */}
      <div className="flex sm:hidden w-full justify-center items-center mb-8">
        <img 
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg" 
          alt="Our Solutions" 
          className="w-[100%] h-auto rounded-lg" 
        />
      </div>
    </div>
  );
}

