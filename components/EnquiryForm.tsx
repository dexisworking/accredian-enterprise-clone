"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, X } from "lucide-react";

interface EnquiryFormProps {
  onClose?: () => void;
}

export function EnquiryForm({ onClose }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-white p-16 text-center min-h-[500px] flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-sm">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-4xl font-extrabold text-[#000000] mb-4">Message Received!</h3>
        <p className="text-[#5F6368] text-xl font-medium max-w-md mx-auto leading-relaxed">
          Our enterprise advisors will reach out to you within 24 hours to discuss your team's transformation.
        </p>
        <button 
          onClick={() => {
            setStatus("idle");
            if (onClose) onClose();
          }}
          className="mt-12 bg-[#1A73E8] hover:bg-[#1557b0] text-white px-10 py-4 rounded-lg text-lg font-bold shadow-lg shadow-[#1A73E8]/20 transition-all flex items-center gap-2 group"
        >
          Close
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col sm:flex-row overflow-hidden">
      {/* Left Image Section */}
      <div className="hidden sm:flex w-1/2 bg-blue-100 items-center justify-center">
        <img 
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp" 
          alt="Quote Request" 
          className="w-full h-full object-cover" 
          data-cur="cursor"
        />
      </div>

      {/* Right Form Section */}
      <div id="scrollbar2" className="font-circular w-full md:w-1/2 p-8 max-h-[90vh] overflow-y-auto no-scrollbar" data-cur="cursor">
        <div className="flex justify-between items-center pb-4 border-b border-neutral-100 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Enquire Now</h2>
          {onClose && (
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-black space-y-4">
            <div>
              <input 
                required
                className="w-full px-2 py-3 font-normal text-sm border-b-2 border-neutral-200 focus:border-[#1A73E8] outline-none transition bg-transparent" 
                type="text" 
                placeholder="Enter Name" 
                data-cur="cursor" 
              />
            </div>
            <div>
              <input 
                required
                className="w-full px-2 py-3 font-normal text-sm border-b-2 border-neutral-200 focus:border-[#1A73E8] outline-none transition bg-transparent" 
                type="email" 
                placeholder="Enter Email" 
              />
            </div>
            <div className="flex gap-2">
              <select className="w-20 px-1 py-3 font-normal text-sm border-b-2 border-neutral-200 focus:border-[#1A73E8] outline-none transition bg-transparent">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input 
                required
                className="flex-1 px-2 py-3 font-normal text-sm border-b-2 border-neutral-200 focus:border-[#1A73E8] outline-none transition bg-transparent" 
                type="tel" 
                placeholder="Phone number" 
              />
            </div>
            <div>
              <input 
                required
                className="w-full px-2 py-3 font-normal text-sm border-b-2 border-neutral-200 focus:border-[#1A73E8] outline-none transition bg-transparent" 
                type="text" 
                placeholder="Enter Company Name" 
              />
            </div>
            <div>
              <select 
                required
                className="w-full px-2 py-3 font-normal text-sm border-b-2 border-neutral-200 focus:border-[#1A73E8] outline-none transition bg-transparent appearance-none"
              >
                <option value="">Select Domain</option>
                <option>Data Science & AI</option>
                <option>Product Management</option>
                <option>Cyber Security</option>
                <option>Cloud Computing</option>
                <option>Leadership</option>
                <option>Fintech</option>
              </select>
            </div>
            <div>
              <input 
                required
                type="number" 
                placeholder="Enter No. of candidates" 
                className="w-full px-2 py-3 font-normal text-sm border-b-2 border-neutral-200 focus:border-[#1A73E8] outline-none transition bg-transparent" 
                data-cur="cursor" 
              />
            </div>
            <div>
              <select 
                required
                className="w-full px-2 py-3 font-normal text-sm border-b-2 border-neutral-200 focus:border-[#1A73E8] outline-none transition bg-transparent appearance-none"
              >
                <option value="">Select Mode of Delivery *</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
              </select>
            </div>
            <div data-cur="cursor">
              <input 
                required
                type="text" 
                placeholder="Eg: Gurugram, Delhi, India" 
                className="w-full px-2 py-3 font-normal text-sm border-b-2 border-neutral-200 focus:border-[#1A73E8] outline-none transition bg-transparent" 
              />
            </div>
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full py-3 bg-[#1A73E8] hover:bg-[#1557b0] text-white rounded-lg font-semibold transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
              >
                {status === "loading" ? "Processing..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

