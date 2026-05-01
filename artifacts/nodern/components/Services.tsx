"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code2, Layers, Gauge } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Stunning, conversion-focused designs that capture your brand's essence and keep visitors engaged.",
    gradient: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400",
    border: "hover:border-purple-500/30",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Blazing-fast, scalable web applications built with modern tech stacks — Next.js, React, and beyond.",
    gradient: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
    border: "hover:border-blue-500/30",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Research-driven user experiences that feel intuitive, beautiful, and drive real business results.",
    gradient: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-400",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Lightning-speed optimizations — Core Web Vitals, SEO, and infrastructure tuning for maximum impact.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    iconColor: "text-cyan-400",
    border: "hover:border-cyan-500/30",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`relative glass-card rounded-2xl p-8 ${service.border} cursor-default overflow-hidden`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="relative z-10">
        <div
          className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${service.iconColor}`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            End-to-end digital solutions crafted to help your business grow,
            stand out, and convert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
