"use client";

import { workflowSteps } from "@/lib/site-data";
import { BarChart, Monitor, Video } from "lucide-react";

const stepIcons = [BarChart, Monitor, Video];

export function Process() {
  return (
    <section id="howItWorks" className="py-24 bg-white relative">
      <div className="mx-auto max-w-6xl" data-cur="cursor">
        <div className="text-center mb-10 mx-2" data-cur="cursor">
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
            How We <span className="text-[#1A73E8]" data-cur="cursor">Deliver Results</span> That Matter?
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1" data-cur="cursor">
            A Structured Three-Step Approach to <span className="text-[#1A73E8]">Skill Development</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-4" data-cur="cursor">
          {/* Step 1 */}
          <div className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center max-w-[18rem] w-full" data-cur="cursor">
            <div className="absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute right-[-4px] sm:right-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-[#1A73E8] rounded-lg" data-cur="cursor"></div>
            <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 border-blue-300 border-2 bg-white rounded-full font-circular flex justify-center items-center font-normal sm:font-bold text-center">
              <p>1</p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1A73E8] text-white rounded-full shadow-md" data-cur="cursor">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-combined text-8xl" data-cur="cursor">
                <path d="M12 16v5"></path>
                <path d="M16 14v7"></path>
                <path d="M20 10v11"></path>
                <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" data-cur="cursor"></path>
                <path d="M4 18v3"></path>
                <path d="M8 14v7" data-cur="cursor"></path>
              </svg>
            </div>
            <h3 className="text-md sm:text-lg font-normal sm:font-semibold text-gray-900 mt-4">Skill Gap Analysis</h3>
            <p className="text-gray-600 hidden sm:block text-sm mt-2 max-w-[18rem]" data-cur="cursor">Assess team skill gaps and developmental needs.</p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center max-w-[18rem] w-full" data-cur="cursor">
            <div className="absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute right-[-4px] sm:right-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 border-blue-300 border-2 bg-white rounded-full font-circular flex justify-center items-center font-normal sm:font-bold text-center">
              <p>2</p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1A73E8] text-white rounded-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-presentation text-8xl">
                <path d="M2 3h20"></path>
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                <path d="m7 21 5-5 5 5"></path>
              </svg>
            </div>
            <h3 className="text-md sm:text-lg font-normal sm:font-semibold text-gray-900 mt-4" data-cur="cursor">Customized Training Plan</h3>
            <p className="text-gray-600 hidden sm:block text-sm mt-2 max-w-[18rem]">Create a tailored roadmap addressing organizational goals.</p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-blue-50 border border-blue-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center max-w-[18rem] w-full" data-cur="cursor">
            <div className="absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute right-[-4px] sm:right-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-[#1A73E8] rounded-lg"></div>
            <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 border-blue-300 border-2 bg-white rounded-full font-circular flex justify-center items-center font-normal sm:font-bold text-center">
              <p>3</p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1A73E8] text-white rounded-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-play text-8xl">
                <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"></path>
                <path d="M12 17v4"></path>
                <path d="M8 21h8"></path>
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
              </svg>
            </div>
            <h3 className="text-md sm:text-lg font-normal sm:font-semibold text-gray-900 mt-4">Flexible Program Delivery</h3>
            <p className="text-gray-600 hidden sm:block text-sm mt-2 max-w-[18rem]" data-cur="cursor">Deliver adaptable programs aligned with industry and organizational needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

