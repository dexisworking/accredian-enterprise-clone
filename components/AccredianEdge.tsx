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

      {/* Domain Expertise Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20" data-cur="cursor">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" data-cur="cursor">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" data-cur="cursor"></path>
              <path d="M9 18h6" data-cur="cursor"></path>
              <path d="M10 22h4" data-cur="cursor"></path>
            </svg>
            <h3 className="text-[10px] sm:text-lg text-bold font-semibold text-center text-gray-900" data-cur="cursor">Product &amp; Innovation Hub</h3>
          </div>
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg" data-cur="cursor">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" data-cur="cursor">
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
              <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
              <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
              <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
            </svg>
            <h3 className="text-[10px] sm:text-lg text-bold font-semibold text-center text-gray-900" data-cur="cursor">Gen-AI Mastery</h3>
          </div>
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h3 className="text-[10px] sm:text-lg text-bold font-semibold text-center text-gray-900">Leadership Elevation</h3>
          </div>
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg" data-cur="cursor">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column-increasing text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2">
              <line x1="12" x2="12" y1="20" y2="10"></line>
              <line x1="18" x2="18" y1="20" y2="4"></line>
              <line x1="6" x2="6" y1="20" y2="16"></line>
            </svg>
            <h3 className="text-[10px] sm:text-lg text-bold font-semibold text-center text-gray-900">Tech &amp; Data Insights</h3>
          </div>
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg" data-cur="cursor">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <h3 className="text-[10px] sm:text-lg text-bold font-semibold text-center text-gray-900">Operations Excellence</h3>
          </div>
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            <h3 className="text-[10px] sm:text-lg text-bold font-semibold text-center text-gray-900">Digital Enterprise</h3>
          </div>
          <div className="p-2 w-[45%] xs:w-[30%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote text-[#1A73E8] font-semibold w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2">
              <rect width="20" height="12" x="2" y="6" rx="2"></rect>
              <circle cx="12" cy="12" r="2"></circle>
              <path d="M6 12h.01M18 12h.01"></path>
            </svg>
            <h3 className="text-[10px] sm:text-lg text-bold font-semibold text-center text-gray-900">Fintech Innovation Lab</h3>
          </div>
        </div>
      </div>
      
      {/* Tailored Course Segmentation Section */}
      <section className="mt-12 sm:mt-28 md:mx-16 mb-10 bg-white text-center font-circular" data-cur="cursor">
        <div className="text-center mb-10 mx-2" data-cur="cursor">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
            Tailored <span className="text-[#1A73E8]" data-cur="cursor">Course Segmentation</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto mx-1" data-cur="cursor">
            Explore <span className="text-[#1A73E8]" data-cur="cursor">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6" data-cur="cursor">
          <div className="bg-white rounded-lg shadow-lg border border-gray-300">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp" alt="Program Specific" className="w-full h-40 object-cover rounded-t-lg mb-4" data-cur="cursor" />
            <h4 className="text-2xl font-semibold text-[#1A73E8] px-6" data-cur="cursor">Program Specific</h4>
            <p className="text-gray-600 hidden sm:block mt-2 text-sm px-6 pb-6">Certificate, Executive, Post Graduate Certificate</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg border border-gray-300" data-cur="cursor">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp" alt="Industry Specific" className="w-full h-40 object-cover rounded-t-lg mb-4" data-cur="cursor" />
            <h4 className="text-2xl font-semibold text-[#1A73E8] px-6" data-cur="cursor">Industry Specific</h4>
            <p className="text-gray-600 hidden sm:block mt-2 text-sm px-6 pb-6" data-cur="cursor">IT, Healthcare, Retail, Finance, Education, Manufacturing</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg border border-gray-300" data-cur="cursor">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp" alt="Topic Specific" className="w-full h-40 object-cover rounded-t-lg mb-4" data-cur="cursor" />
            <h4 className="text-2xl font-semibold text-[#1A73E8] px-6" data-cur="cursor">Topic Specific</h4>
            <p className="text-gray-600 hidden sm:block mt-2 text-sm px-6 pb-6" data-cur="cursor">Machine Learning, Design, Analytics, Cybersecurity, Cloud</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg border border-gray-300">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp" alt="Level Specific" className="w-full h-40 object-cover rounded-t-lg mb-4" data-cur="cursor" />
            <h4 className="text-2xl font-semibold text-[#1A73E8] px-6" data-cur="cursor">Level Specific</h4>
            <p className="text-gray-600 hidden sm:block mt-2 text-sm px-6 pb-6" data-cur="cursor">Senior Leadership, Mid-Career Professionals, Freshers</p>
          </div>
        </div>
      </section>

      {/* Mobile View SVG */}
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

