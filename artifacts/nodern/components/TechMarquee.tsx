"use client";

import { motion } from "framer-motion";

const techs = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Node.js", color: "#68A063" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Framer Motion", color: "#BB4BF8" },
  { name: "Vercel", color: "#ffffff" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "GraphQL", color: "#E10098" },
];

function TechItem({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mx-8 shrink-0">
      <div
        className="w-2 h-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}80` }}
      />
      <span className="text-sm font-semibold text-slate-400 whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-16 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-transparent to-[#050510] z-10 pointer-events-none" />

      <div className="mb-8 text-center">
        <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">
          Technologies We Master
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {[...techs, ...techs].map((t, i) => (
            <TechItem key={`${t.name}-${i}`} name={t.name} color={t.color} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
