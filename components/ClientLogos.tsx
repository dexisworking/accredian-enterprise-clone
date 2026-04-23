"use client";

import Image from "next/image";
import { clientLogos } from "@/lib/site-data";

export function ClientLogos() {
  return (
    <section id="clients" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-2 mb-16" data-cur="cursor">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
            Our Proven <span className="text-[#1A73E8]" data-cur="cursor">Partnerships</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto" data-cur="cursor">
            Successful Collaborations With the <span className="text-[#1A73E8]" data-cur="cursor">Industry’s Best</span>
          </p>
        </div>
        
        {/* Desktop Grid */}
        <ul className="hidden sm:grid grid-cols-3 md:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8 xl:gap-12" data-cur="cursor">
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img 
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png" 
              alt="client" 
              className="object-contain w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" 
              data-cur="cursor" 
            />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img 
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png" 
              alt="client" 
              className="object-contain w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40" 
              data-cur="cursor" 
            />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img 
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png" 
              alt="client" 
              className="object-contain w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" 
              data-cur="cursor" 
            />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img 
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png" 
              alt="client" 
              className="object-contain w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" 
              data-cur="cursor" 
            />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img 
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg" 
              alt="client" 
              className="object-contain w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" 
            />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img 
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg" 
              alt="client" 
              className="object-contain w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24" 
            />
          </li>
        </ul>

        {/* Mobile Marquee */}
        <div className="md:hidden relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-12 py-4">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div key={i} className="flex items-center grayscale">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain max-h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
