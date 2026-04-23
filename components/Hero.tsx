"use client";



export function Hero({ onEnquire }: { onEnquire?: () => void }) {
  return (
    <section id="home" className="relative pt-24 pb-12 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-4 md:gap-8 lg:gap-12 shadow-xl overflow-visible" data-cur="cursor">
          <div className="sm:w-1/2 w-full sm:ml-7 flex flex-col justify-between gap-4 sm:gap-4 md:gap-8 lg:gap-10 md:ps-2 lg:ps-8" data-cur="cursor">
            <h1 className="text-center sm:text-left cursor-context-menu text-2xl sm:text-4xl lg:text-6xl xxl:text-7xl 2xl:text-[5.2vw] 3xl:text-[5.0rem] font-bold max-w-full sm:max-w-[350px] lg:max-w-[700px] pt-2 capitalize px-8 sm:px-0 font-circular" data-cur="cursor">
              Next-Gen <span className="text-[#1A73E8]" data-cur="cursor">Expertise</span> for Your<span className="text-[#1A73E8]" data-cur="cursor"> Enterprise</span>
            </h1>
            <p className="font-medium md:font-normal text-sm sm:text-lg lg:text-2xl text-[#3C4043] max-w-full p-2 sm:p-0 w-full sm:max-w-[350px] text-center sm:text-start font-circular" data-cur="cursor">
              Cultivate high-performance teams through expert learning.
            </p>
            <ul className="grid grid-cols-2 mx-auto sm:flex sm:mx-0 sm:justify-start sm:flex-wrap gap-4" data-cur="cursor">
              <li className="flex items-center gap-2 mb-2" data-cur="cursor"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-6 h-6 text-green-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Tailored Solutions
              </li>
              <li className="flex items-center gap-2 mb-2" data-cur="cursor"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-6 h-6 text-green-600" data-cur="cursor"><circle cx="12" cy="12" r="10" data-cur="cursor"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Industry Insights
              </li>
              <li className="flex items-center gap-2 mb-2" data-cur="cursor"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-6 h-6 text-green-600" data-cur="cursor"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4" data-cur="cursor"></path></svg>
                Expert Guidance
              </li>
              <li className="flex items-center gap-2 mb-2 sm:hidden"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-6 h-6 text-green-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Measurable Impact
              </li>
            </ul>
            <div className="flex mb-6 sm:mb-0 justify-center sm:justify-start" data-cur="cursor">
              <button 
                onClick={onEnquire}
                className="w-[80%] sm:w-[170px] p-[7px] text-md font-normal text-white bg-[#1A73E8] rounded-lg shadow-md" 
                data-cur="pointer"
              >
                <p className="text-sm md:text-xl" data-cur="pointer">Enquire Now</p> 
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
