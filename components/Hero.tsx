"use client";



export function Hero({ onEnquire }: { onEnquire?: () => void }) {
  return (
    <section id="home" className="relative pt-24 pb-12 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-4 md:gap-8 lg:gap-12 shadow-xl overflow-visible" data-cur="cursor">
          <div className="sm:w-1/2 w-full sm:ml-7 flex flex-col justify-between gap-4 sm:gap-4 md:gap-8 lg:gap-10 md:ps-2 lg:ps-8" data-cur="cursor">
            <h1 className="text-center sm:text-left cursor-context-menu text-[40px] sm:text-[54px] lg:text-[72px] font-black text-[#000000] leading-[1.1] tracking-tight pt-2 px-8 sm:px-0 font-circular" data-cur="cursor">
              Next-Gen <span className="text-[#1A73E8]" data-cur="cursor">Expertise</span><br />
              For Your <span className="text-[#1A73E8]" data-cur="cursor">Enterprise</span>
            </h1>
            <p className="mt-6 text-[18px] sm:text-[22px] text-[#3C4043] font-medium max-w-xl text-center sm:text-start leading-relaxed font-circular" data-cur="cursor">
              Cultivate high-performance teams through expert learning.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center sm:justify-start" data-cur="cursor">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-green-600 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span className="text-sm sm:text-base font-semibold text-[#000000]">Tailored Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-green-600 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span className="text-sm sm:text-base font-semibold text-[#000000]">Industry Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-green-600 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span className="text-sm sm:text-base font-semibold text-[#000000]">Expert Guidance</span>
              </div>
            </div>
            <div className="mt-12 flex justify-center sm:justify-start" data-cur="cursor">
              <button 
                onClick={onEnquire}
                className="bg-[#1A73E8] hover:bg-[#1557b0] text-white w-[180px] h-[52px] rounded-lg text-lg font-bold shadow-lg shadow-[#1A73E8]/25 transition-all transform active:scale-[0.98]"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div className="flex w-full sm:w-1/2 sm:justify-end sm:items-end justify-center">
            <img 
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp" 
              alt="headerImage" 
              className="sm:w-full sm:h-full h-[80%] w-[80%]" 
              data-cur="cursor" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
