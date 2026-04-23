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
    <div className="relative bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors z-50 lg:text-slate-400"
        >
          <X size={24} />
        </button>
      )}

      {/* Left Side: Branding/Info (40%) */}
      <div className="lg:w-[40%] bg-[#f8fbff] p-10 flex flex-col justify-between border-r border-slate-100">
        <div>
          <img 
            src="/logo.webp" 
            alt="Accredian" 
            className="h-10 mb-12"
          />
          <h2 className="text-[32px] font-extrabold text-[#000000] mb-6 leading-[1.2]">
            Elevate Your <br />
            <span className="text-[#1A73E8]">Team's Potential</span>
          </h2>
          <p className="text-lg text-[#3C4043] font-medium leading-relaxed">
            Fill out the form and our learning advisors will get back to you with a tailored solution.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[#1A73E8]">
            <div className="w-10 h-10 rounded-lg bg-[#E8F0FE] flex items-center justify-center font-bold">1</div>
            <p className="font-bold text-lg">Consultation</p>
          </div>
          <div className="flex items-center gap-3 text-[#5F6368]">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold">2</div>
            <p className="font-bold text-lg">Strategy</p>
          </div>
          <div className="flex items-center gap-3 text-[#5F6368]">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold">3</div>
            <p className="font-bold text-lg">Execution</p>
          </div>
        </div>
      </div>

      {/* Right Side: Form (60%) */}
      <div className="lg:w-[60%] p-10">
        <h3 className="text-2xl font-extrabold text-[#000000] mb-8">Enquire Now</h3>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input required type="text" placeholder="Enter Name" className="w-full px-5 py-3 rounded-lg border border-slate-200 bg-white focus:border-[#1A73E8] outline-none transition-all text-[15px] font-medium" />
            <input required type="email" placeholder="Enter Email" className="w-full px-5 py-3 rounded-lg border border-slate-200 bg-white focus:border-[#1A73E8] outline-none transition-all text-[15px] font-medium" />
            
            <div className="flex gap-2">
              <select className="w-24 px-2 py-3 rounded-lg border border-slate-200 bg-white focus:border-[#1A73E8] outline-none transition-all text-[15px] font-bold">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input required type="tel" placeholder="Phone number" className="flex-1 px-5 py-3 rounded-lg border border-slate-200 bg-white focus:border-[#1A73E8] outline-none transition-all text-[15px] font-medium" />
            </div>
            
            <input required type="text" placeholder="Company Name" className="w-full px-5 py-3 rounded-lg border border-slate-200 bg-white focus:border-[#1A73E8] outline-none transition-all text-[15px] font-medium" />
            
            <select required className="w-full px-5 py-3 rounded-lg border border-slate-200 bg-white focus:border-[#1A73E8] outline-none transition-all text-[15px] font-medium appearance-none">
              <option value="">Select Domain</option>
              <option>Data Science & AI</option>
              <option>Product Management</option>
              <option>Cyber Security</option>
              <option>Cloud Computing</option>
              <option>Leadership</option>
              <option>Fintech</option>
            </select>
            
            <input required type="number" placeholder="No. of candidates" className="w-full px-5 py-3 rounded-lg border border-slate-200 bg-white focus:border-[#1A73E8] outline-none transition-all text-[15px] font-medium" />
            
            <select required className="w-full px-5 py-3 rounded-lg border border-slate-200 bg-white focus:border-[#1A73E8] outline-none transition-all text-[15px] font-medium appearance-none">
              <option value="">Select Mode of Delivery</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
            
            <input required type="text" placeholder="Location" className="w-full px-5 py-3 rounded-lg border border-slate-200 bg-white focus:border-[#1A73E8] outline-none transition-all text-[15px] font-medium" />
          </div>
          
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full mt-4 bg-[#1A73E8] hover:bg-[#1557b0] text-white font-bold h-12 rounded-lg shadow-lg shadow-[#1A73E8]/20 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {status === "loading" ? "Processing..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
