"use client";

import { Lightbulb, Brain, Users, BarChart3, Settings, Globe, Banknote } from "lucide-react";

export function CAT() {
  return (
    <section id="cat" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4" data-cur="cursor">
        <div className="text-center mb-10 mx-2" data-cur="cursor">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
            Our<span className="text-[#1A73E8]"> Domain Expertise</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1" data-cur="cursor">
            <span className="text-[#1A73E8]" data-cur="cursor">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 w-full" data-cur="cursor">
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg" data-cur="cursor">
            <Lightbulb className="text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" data-cur="cursor" />
            <h3 className="text-[10px] sm:text-lg font-semibold text-center text-gray-900" data-cur="cursor">Product & Innovation Hub</h3>
          </div>
          
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg" data-cur="cursor">
            <Brain className="text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" data-cur="cursor" />
            <h3 className="text-[10px] sm:text-lg font-semibold text-center text-gray-900" data-cur="cursor">Gen-AI Mastery</h3>
          </div>
          
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg">
            <Users className="text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" />
            <h3 className="text-[10px] sm:text-lg font-semibold text-center text-gray-900">Leadership Elevation</h3>
          </div>
          
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg" data-cur="cursor">
            <BarChart3 className="text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" />
            <h3 className="text-[10px] sm:text-lg font-semibold text-center text-gray-900">Tech & Data Insights</h3>
          </div>
          
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg" data-cur="cursor">
            <Settings className="text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" />
            <h3 className="text-[10px] sm:text-lg font-semibold text-center text-gray-900">Operations Excellence</h3>
          </div>
          
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg">
            <Globe className="text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" />
            <h3 className="text-[10px] sm:text-lg font-semibold text-center text-gray-900">Digital Enterprise</h3>
          </div>
          
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg">
            <Banknote className="text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" />
            <h3 className="text-[10px] sm:text-lg font-semibold text-center text-gray-900">Fintech Innovation Lab</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

