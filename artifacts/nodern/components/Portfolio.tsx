"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LuminaStore",
    category: "E-Commerce",
    description:
      "A luxury e-commerce platform with 3D product previews and one-click checkout — 4x conversion increase.",
    gradient: "from-purple-900/60 to-blue-900/40",
    accent: "#a855f7",
    tag: "Shopify + Next.js",
  },
  {
    title: "FlowAnalytics",
    category: "SaaS Dashboard",
    description:
      "Real-time analytics platform processing 2M+ events/day with custom charting and team collaboration.",
    gradient: "from-blue-900/60 to-cyan-900/40",
    accent: "#06b6d4",
    tag: "React + Node.js",
  },
  {
    title: "Nexus Finance",
    category: "FinTech Web App",
    description:
      "Secure personal finance management app with AI-powered insights and real-time bank sync.",
    gradient: "from-violet-900/60 to-purple-900/40",
    accent: "#8b5cf6",
    tag: "Next.js + Prisma",
  },
  {
    title: "AeroPilot",
    category: "SaaS Landing",
    description:
      "Visually stunning product landing page with 40% higher sign-up rate than the previous version.",
    gradient: "from-cyan-900/60 to-blue-900/40",
    accent: "#2563eb",
    tag: "Next.js + Framer",
  },
  {
    title: "Verdant Studio",
    category: "Creative Portfolio",
    description:
      "Award-winning portfolio for a photography studio — immersive gallery with smooth transitions.",
    gradient: "from-pink-900/40 to-purple-900/60",
    accent: "#ec4899",
    tag: "Next.js + GSAP",
  },
  {
    title: "TaskMeld",
    category: "Productivity App",
    description:
      "Collaborative project management tool for remote teams with drag-and-drop and real-time sync.",
    gradient: "from-indigo-900/60 to-blue-900/40",
    accent: "#6366f1",
    tag: "React + Socket.io",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects We&apos;re{" "}
            <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every project is crafted with precision, passion, and a relentless
            focus on measurable outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Project visual */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                {/* Abstract geometric decorations */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 50%, ${project.accent}40, transparent 60%)`,
                  }}
                />
                <div className="absolute top-4 right-4 opacity-20 w-16 h-16 rounded-full border-2 border-white" />
                <div className="absolute bottom-4 left-4 opacity-20 w-8 h-8 rounded border border-white rotate-45" />
                <div className="text-center z-10">
                  <div
                    className="text-4xl font-black opacity-30 tracking-tighter"
                    style={{ color: project.accent }}
                  >
                    {project.title.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <ExternalLink className="w-4 h-4" />
                    View Case Study
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{
                      color: project.accent,
                      background: `${project.accent}15`,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-600">{project.tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
