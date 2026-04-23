"use client";

import { stats } from "@/lib/site-data";

export function Stats() {
  return (
    <div id="stats" className="tools w-full overflow-hidden flex flex-col items-center mt-8 sm:mt-28 px-4 capitalize" data-cur="cursor">
      <div className="text-center mb-6 mx-2" data-cur="cursor">
        <h2 className="text-2xl mx-1 sm:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
          Our<span className="text-[#1A73E8]" data-cur="cursor"> Track Record</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1" data-cur="cursor">
          The Numbers Behind <span className="text-[#1A73E8]" data-cur="cursor">Our Success</span>
        </p>
      </div>

      <div className="w-full flex justify-center p-4 text-center" data-cur="cursor">
        <div>
          {/* Desktop View */}
          <div className="hidden sm:flex justify-start p-4 gap-10 rounded-xl" data-cur="cursor">
            {stats.map((stat, i) => (
              <div key={i} className={`flex flex-col justify-start gap-4 items-center ${i < stats.length - 1 ? 'border-r-2' : 'border-r-0'} pr-4`} data-cur="cursor">
                <div className="text-2xl text-[#1A73E8] font-semibold w-24 h-15 bg-blue-100 p-2 rounded-full flex items-center justify-center" data-cur="cursor">
                  <h2 data-cur="cursor">{stat.value}</h2>
                </div>
                <div>
                  <p className="max-w-[300px]" data-cur="cursor">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="sm:hidden grid grid-cols-1 p-4 gap-10 rounded-xl" data-cur="cursor">
            {stats.map((stat, i) => (
              <div key={i} className={`flex justify-start items-center text-left gap-4 ${i < stats.length - 1 ? 'border-b-2 pb-4' : 'border-b-0'}`} data-cur="cursor">
                <div className="flex justify-center items-center text-[#1A73E8] text-center font-semibold w-full max-w-[70px] bg-blue-100 p-2 rounded-full" data-cur="cursor">
                  <h2 className="text-md md:text-2xl" data-cur="cursor">{stat.value}</h2>
                </div>
                <div>
                  <p className="text-md md:text-2xl" data-cur="cursor">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
