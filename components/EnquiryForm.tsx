"use client";

import { useState } from "react";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center border border-gray-100">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Thank You!</h3>
        <p className="text-[var(--text-gray)]">Your enquiry has been submitted. Our team will get back to you shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-[var(--primary-blue)] font-bold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-bold text-[var(--foreground)] uppercase tracking-tight">Full Name</label>
          <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 outline-none transition" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-[var(--foreground)] uppercase tracking-tight">Work Email</label>
          <input required type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 outline-none transition" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-[var(--foreground)] uppercase tracking-tight">Phone Number</label>
          <div className="flex gap-2">
            <select className="w-24 px-2 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-blue)] outline-none transition">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input required type="tel" placeholder="9876543210" className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 outline-none transition" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-[var(--foreground)] uppercase tracking-tight">Company Name</label>
          <input required type="text" placeholder="Acme Inc" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 outline-none transition" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-[var(--foreground)] uppercase tracking-tight">Domain</label>
          <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 outline-none transition">
            <option value="">Select Domain</option>
            <option>Data Science & AI</option>
            <option>Product Management</option>
            <option>Cyber Security</option>
            <option>Cloud Computing</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-[var(--foreground)] uppercase tracking-tight">Candidate Count</label>
          <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 outline-none transition">
            <option value="">Select Count</option>
            <option>1-10</option>
            <option>10-50</option>
            <option>50-100</option>
            <option>100+</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-[var(--foreground)] uppercase tracking-tight">Delivery Mode</label>
          <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 outline-none transition">
            <option value="">Select Mode</option>
            <option>Online (Live)</option>
            <option>In-person (Classroom)</option>
            <option>Hybrid</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-[var(--foreground)] uppercase tracking-tight">Location</label>
          <input required type="text" placeholder="City, Country" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20 outline-none transition" />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 w-full bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-hover)] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : "Enquire Now"}
      </button>
      <p className="mt-4 text-center text-xs text-[var(--text-gray)]">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
}
