"use client";

import { Target, Users, Zap, Monitor, Layers, BarChart3, Clock } from "lucide-react";

const edges = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    icon: Target,
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
    icon: Users,
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    icon: Zap,
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
    icon: Monitor,
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    icon: Layers,
  },
  {
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
    icon: BarChart3,
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
    icon: Clock,
  },
];

export function AccredianEdge() {
  return (
    <section id="accredian-edge" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--primary-blue)]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-light)] text-[var(--primary-blue)] text-sm font-bold uppercase tracking-widest mb-6 border border-[var(--line)]">
            The Accredian Edge
          </div>
          <h2 className="text-4xl font-extrabold text-[var(--foreground)] sm:text-5xl leading-tight">
            Why Choose Us for Your Enterprise Training?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {edges.map((edge, index) => (
            <div 
              key={edge.title} 
              className={`group p-8 rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                index === 6 ? "sm:col-span-2 lg:col-span-3 xl:col-span-1" : ""
              }`}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[var(--bg-light)] text-[var(--primary-blue)] mb-8 transition-colors duration-500 group-hover:bg-[var(--primary-blue)] group-hover:text-white">
                <edge.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">{edge.title}</h3>
              <p className="text-[var(--text-gray)] leading-relaxed text-sm">{edge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
