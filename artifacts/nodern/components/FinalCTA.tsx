"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Glow effects */}
        <div className="absolute -inset-40 bg-gradient-to-r from-purple-600/10 via-blue-600/15 to-purple-600/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-card rounded-3xl p-16 border border-purple-500/20"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 mb-8 mx-auto glow-purple">
            <Zap className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Turn Your Idea Into a{" "}
            <span className="gradient-text">Powerful Website?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Join 150+ businesses that trust Nodern to deliver websites that
            work — beautifully and profitably.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-white text-base glow-purple transition-opacity hover:opacity-90"
          >
            Contact Nodern Now
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
