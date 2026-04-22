"use client";

import { useState } from "react";
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
      <div className="bg-white p-12 rounded-[2.5rem] text-center">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Message Received!</h3>
        <p className="text-slate-600 text-lg">Our enterprise experts will reach out to you within 24 hours.</p>
        <button 
          onClick={() => {
            setStatus("idle");
            if (onClose) onClose();
          }}
          className="mt-10 inline-flex items-center gap-2 text-[#1A73E8] font-bold hover:underline group"
        >
          Close
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors z-50"
        >
          <X size={24} />
        </button>
      )}
      
      <div className="p-8 sm:p-12">
        <h2 className="text-3xl font-extrabold text-[#0F172A] mb-8">Enquire Now</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Name</label>
              <input required type="text" placeholder="Enter Name" className="w-full px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1A73E8] outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
              <input required type="email" placeholder="Enter Email" className="w-full px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1A73E8] outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
              <div className="flex gap-2">
                <select className="w-24 px-2 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1A73E8] outline-none transition-all text-sm font-semibold">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input required type="tel" placeholder="Phone number is required" className="flex-1 px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1A73E8] outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company Name</label>
              <input required type="text" placeholder="Enter company name" className="w-full px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1A73E8] outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Select Domain</label>
              <select required className="w-full px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1A73E8] outline-none transition-all text-sm font-medium">
                <option value="">Select Domain</option>
                <option>Data Science & AI</option>
                <option>Product Management</option>
                <option>Cyber Security</option>
                <option>Cloud Computing</option>
                <option>Leadership</option>
                <option>Fintech</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">No. of candidates</label>
              <input required type="number" placeholder="Enter No. of candidates" className="w-full px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1A73E8] outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Select Mode of Delivery*</label>
              <select required className="w-full px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1A73E8] outline-none transition-all text-sm font-medium">
                <option value="">Select Mode</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Location</label>
              <input required type="text" placeholder="Eg: Gurgoan, Delhi, India" className="w-full px-5 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1A73E8] outline-none transition-all" />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#1A73E8] hover:bg-[#1557b0] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {status === "loading" ? "Processing..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
