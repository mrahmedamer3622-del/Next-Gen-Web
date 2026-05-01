"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects are delivered in 2–6 weeks depending on scope. A simple 5-page site takes about 2 weeks, while a full custom web app can take 4–8 weeks. We'll give you a precise timeline after your discovery call.",
  },
  {
    q: "Do you work with clients outside the US?",
    a: "Absolutely. We work with clients worldwide. Our team is async-friendly and we schedule calls to accommodate different time zones. All communication and deliverables are in English.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Typically: your brand assets (logo, colors, fonts), copy or a content outline, and a reference of sites you like. If you don't have all of this, we can help — we offer branding and copywriting add-ons.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Every website we build is mobile-first by default. We test across iOS, Android, and all major browsers. Mobile traffic makes up 60%+ of web visits, so we treat it as the primary experience.",
  },
  {
    q: "Do you offer ongoing maintenance and support?",
    a: "Yes. All plans include a post-launch support period. After that, we offer monthly retainer packages for hosting management, updates, performance monitoring, and new feature development.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes — redesigns are one of our specialties. We audit your current site, identify what's hurting performance or conversions, and rebuild it with modern standards. We can often reuse your existing domain and content.",
  },
  {
    q: "What's included in SEO optimization?",
    a: "We handle technical SEO: proper heading structure, meta tags, sitemap, robots.txt, schema markup, image optimization, and Core Web Vitals. For ongoing content SEO, we can connect you with our content partners.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
        open ? "border-purple-500/30 bg-purple-500/5" : "border-white/8 bg-white/[0.02]"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span
          className={`font-semibold text-sm md:text-base transition-colors ${
            open ? "text-white" : "text-slate-200 group-hover:text-white"
          }`}
        >
          {q}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            open ? "bg-purple-600 text-white" : "bg-white/8 text-slate-400"
          }`}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400">
            Everything you need to know before we start building together.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            Still have questions? We&apos;re happy to chat.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/30 text-sm font-semibold text-purple-300 hover:bg-purple-500/10 transition-colors"
          >
            Ask us directly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
