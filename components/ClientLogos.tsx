"use client";

import Image from "next/image";
import { clientLogos } from "@/lib/site-data";

export function ClientLogos() {
  return (
    <div id="clients" className="mt-8 sm:mt-28 xl:px-12 px-4 text-center" data-cur="cursor">
      <div className="text-center mx-2" data-cur="cursor">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight" data-cur="cursor">
          Our Proven <span className="text-[#1A73E8]" data-cur="cursor">Partnerships</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3 m-auto" data-cur="cursor">
          Successful Collaborations With the <span className="text-[#1A73E8]" data-cur="cursor">Industry’s Best</span>
        </p>
      </div>
      <div className="w-full flex justify-center items-center mt-2">
        <ul className="hidden sm:grid grid-cols-3 md:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8 xl:gap-12" data-cur="cursor">
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png" alt="client" className="object-contain w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" data-cur="cursor" />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png" alt="client" className="object-contain w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40" data-cur="cursor" />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png" alt="client" className="object-contain w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" data-cur="cursor" />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png" alt="client" className="object-contain w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" data-cur="cursor" />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg" alt="client" className="object-contain w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" data-cur="cursor" />
          </li>
          <li className="flex justify-center items-center sm:p-4" data-cur="cursor">
            <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg" alt="client" className="object-contain w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24" />
          </li>
        </ul>
        <div className="sm:hidden overflow-hidden relative w-full">
          <div className="flex mt-4 whitespace-nowrap animate-marquee">
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
            <div className="flex justify-center items-center px-8"><img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg" alt="client" className="w-14 h-14 sm:w-20 sm:h-20 object-contain" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
