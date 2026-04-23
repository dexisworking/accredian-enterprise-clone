"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function LeadCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "LeadCapture" }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      }
    } catch (error) {
      console.error("Lead capture failed:", error);
      setStatus("idle");
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100" data-cur="cursor">
      <div className="mx-auto max-w-4xl px-4 text-center" data-cur="cursor">
        {status === "success" ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
            <p className="text-gray-600">We'll send our enterprise brochure to your inbox shortly.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-6 text-[#1A73E8] font-semibold hover:underline"
            >
              Back to form
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4" data-cur="cursor">
              Ready to <span className="text-[#1A73E8]" data-cur="cursor">Transform</span> Your Team?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto" data-cur="cursor">
              Get our 2026 Enterprise Learning Roadmap and see how we've helped 500+ companies scale their tech expertise.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" data-cur="cursor">
              <input 
                required
                type="email"
                placeholder="Work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl border border-slate-200 bg-white focus:border-[#1A73E8] focus:ring-4 focus:ring-[#1A73E8]/10 outline-none transition-all text-lg shadow-sm"
                data-cur="cursor"
              />
              <button 
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-4 bg-[#1A73E8] hover:bg-[#1557b0] text-white font-bold rounded-xl shadow-lg shadow-[#1A73E8]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 group"
                data-cur="pointer"
              >
                {status === "loading" ? "Joining..." : "Get Roadmap"}
                <Send size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-400" data-cur="cursor">
              Join 10,000+ leaders already receiving our insights.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
