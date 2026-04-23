export function Testimonials({ onEnquire }: { onEnquire?: () => void }) {
  return (
    <div id="testimonials" className="testimonials w-full mt-16 sm:mt-20 flex flex-col items-center" data-cur="cursor">
      <div className="text-center mb-10 mx-2" data-cur="cursor">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
          Testimonials from <span className="text-[#1A73E8]">Our Partners</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3" data-cur="cursor">
          What <span className="text-[#1A73E8]">Our Clients</span> Are Saying
        </p>
      </div>
      
      <div className="w-full px-4 overflow-hidden">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-4 px-2" data-cur="cursor">
          {/* Slide 1 - ADP */}
          <div className="min-w-[300px] sm:min-w-[540px] flex h-auto">
            <div className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full min-h-[250px] flex-grow shadow-sm" data-cur="cursor">
              <div className="w-full flex flex-col justify-start items-start pl-6 h-full" data-cur="cursor">
                <div className="h-16 mb-4 flex items-center gap-4">
                  <img loading="lazy" className="h-14 w-14 object-contain" src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg" alt="ADP" />
                </div>
                <p className="text-neutral-600 text-base font-light" data-cur="cursor">
                  "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 - Bayer */}
          <div className="min-w-[300px] sm:min-w-[540px] flex h-auto">
            <div className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full min-h-[250px] flex-grow shadow-sm" data-cur="cursor">
              <div className="w-full flex flex-col justify-start items-start pl-6 h-full" data-cur="cursor">
                <div className="h-16 mb-4 flex items-center gap-4">
                  <img loading="lazy" className="h-14 w-14 object-contain" src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg" alt="Bayer" />
                </div>
                <p className="text-neutral-600 text-base font-light" data-cur="cursor">
                  "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 - Reliance */}
          <div className="min-w-[300px] sm:min-w-[540px] flex h-auto">
            <div className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full min-h-[250px] flex-grow shadow-sm">
              <div className="w-full flex flex-col justify-start items-start pl-6 h-full">
                <div className="h-16 mb-4 flex items-center gap-4">
                  <img loading="lazy" className="h-14 w-14 object-contain" src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png" alt="Reliance" />
                </div>
                <p className="text-neutral-600 text-base font-light">
                  "Choosing Accredian for the learning &amp; development of our employees was a beneficial decision. The value derived from the course is immense &amp; their support team is always there to help our employees."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8" data-cur="cursor">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1A73E8]" data-cur="pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" data-cur="pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" data-cur="pointer"></span>
        </div>
      </div>
    </div>
  );
}

