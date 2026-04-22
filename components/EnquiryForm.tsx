"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-[var(--line)]">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4">Message Received!</h3>
        <p className="text-[var(--text-gray)] text-lg">Our enterprise experts will reach out to you within 24 hours.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-10 inline-flex items-center gap-2 text-[var(--primary-blue)] font-bold hover:underline group"
        >
          Send another enquiry
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(15,23,42,0.1)] border border-[var(--line)]">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <label className="text-xs font-bold text-[var(--text-gray)] uppercase tracking-widest">Full Name</label>
          <input required type="text" placeholder="e.g. Rahul Verma" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-[var(--bg-light)] focus:bg-white focus:border-[var(--primary-blue)] focus:ring-4 focus:ring-[var(--primary-blue)]/10 outline-none transition-all" />
        </div>
        <div className="space-y-3">
          <label className="text-xs font-bold text-[var(--text-gray)] uppercase tracking-widest">Work Email</label>
          <input required type="email" placeholder="rahul@company.com" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-[var(--bg-light)] focus:bg-white focus:border-[var(--primary-blue)] focus:ring-4 focus:ring-[var(--primary-blue)]/10 outline-none transition-all" />
        </div>
        <div className="space-y-3">
          <label className="text-xs font-bold text-[var(--text-gray)] uppercase tracking-widest">Phone Number</label>
          <div className="flex gap-3">
            <select className="w-28 px-3 py-4 rounded-2xl border border-gray-100 bg-[var(--bg-light)] focus:bg-white focus:border-[var(--primary-blue)] outline-none transition-all text-sm font-semibold">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input required type="tel" placeholder="9876543210" className="flex-1 px-5 py-4 rounded-2xl border border-gray-100 bg-[var(--bg-light)] focus:bg-white focus:border-[var(--primary-blue)] focus:ring-4 focus:ring-[var(--primary-blue)]/10 outline-none transition-all" />
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-xs font-bold text-[var(--text-gray)] uppercase tracking-widest">Company Name</label>
          <input required type="text" placeholder="e.g. Tata Consultancy" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-[var(--bg-light)] focus:bg-white focus:border-[var(--primary-blue)] focus:ring-4 focus:ring-[var(--primary-blue)]/10 outline-none transition-all" />
        </div>
        <div className="space-y-3">
          <label className="text-xs font-bold text-[var(--text-gray)] uppercase tracking-widest">Domain</label>
          <select required className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-[var(--bg-light)] focus:bg-white focus:border-[var(--primary-blue)] focus:ring-4 focus:ring-[var(--primary-blue)]/10 outline-none transition-all text-sm font-medium">
            <option value="">Select Domain</option>
            <option>Data Science & AI</option>
            <option>Product Management</option>
            <option>Cyber Security</option>
            <option>Cloud Computing</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-xs font-bold text-[var(--text-gray)] uppercase tracking-widest">Candidate Count</label>
          <select required className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-[var(--bg-light)] focus:bg-white focus:border-[var(--primary-blue)] focus:ring-4 focus:ring-[var(--primary-blue)]/10 outline-none transition-all text-sm font-medium">
            <option value="">Select Count</option>
            <option>1-10</option>
            <option>10-50</option>
            <option>50-100</option>
            <option>100+</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-12 w-full bg-[var(--primary-blue)] hover:bg-black text-white font-bold py-5 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed text-lg tracking-wide"
      >
        {status === "loading" ? "Processing..." : "Get Started"}
      </button>
      <p className="mt-6 text-center text-xs text-[var(--text-gray)] font-medium">
        We respect your privacy. No spam, only solutions.
      </p>
    </form>
  );
}
