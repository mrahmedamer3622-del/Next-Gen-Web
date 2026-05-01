"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, Search, Smartphone } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "We launch production-ready websites in as little as 2 weeks — without sacrificing quality.",
    stat: "2 weeks",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description:
      "Every pixel is intentional. We craft experiences that feel premium, polished, and memorable.",
    stat: "Award-level",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Built from the ground up for search engines — structured data, fast load times, and semantic HTML.",
    stat: "Top rankings",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Flawless across all screen sizes. Your audience gets a perfect experience on any device.",
    stat: "100% responsive",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4 block">
              Why Nodern
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Agency That{" "}
              <span className="gradient-text">Goes Further</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We&apos;re not just another agency. We&apos;re your long-term
              digital growth partner — obsessed with performance, design
              excellence, and real measurable results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white hover:opacity-90 transition-all hover:scale-105 glow-purple text-sm"
            >
              Start Your Project
            </a>
          </motion.div>

          {/* Right side — cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-xl font-bold text-purple-300 mb-1">
                    {reason.stat}
                  </div>
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
