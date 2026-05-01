"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and goals. Strategy sessions, competitor analysis, and scope definition.",
    number: "01",
    color: "#a855f7",
  },
  {
    icon: Pencil,
    title: "Design",
    description:
      "Wireframes to stunning high-fidelity mockups. Every interaction, flow, and visual crafted for maximum impact.",
    number: "02",
    color: "#6366f1",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Clean, performant code built with modern frameworks. Responsive, accessible, and blazing fast by default.",
    number: "03",
    color: "#2563eb",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Thorough QA, performance audits, and a smooth go-live. We stay with you post-launch to ensure success.",
    number: "04",
    color: "#06b6d4",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A battle-tested workflow that delivers exceptional results — every
            single time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Number + Icon */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>
                    <div
                      className="absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: step.color }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
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
