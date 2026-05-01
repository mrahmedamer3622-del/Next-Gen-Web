"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "2,499",
    desc: "Perfect for small businesses ready to make their mark online.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
      "30-day support",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-slate-800/60 to-slate-900/60",
    border: "border-white/8",
    buttonClass:
      "border border-white/15 hover:border-purple-500/40 text-slate-200 hover:text-white",
  },
  {
    name: "Growth",
    price: "5,999",
    desc: "For scaling businesses that need a powerful digital presence.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Advanced SEO + schema",
      "CMS integration",
      "Performance optimization",
      "Analytics dashboard",
      "Unlimited revisions",
      "90-day support",
    ],
    cta: "Most Popular — Start Now",
    popular: true,
    gradient: "from-purple-900/40 to-blue-900/40",
    border: "border-purple-500/40",
    buttonClass:
      "bg-gradient-to-r from-purple-600 to-blue-600 text-white glow-purple hover:opacity-90",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Full-stack custom solutions for high-growth companies.",
    features: [
      "Unlimited pages",
      "Custom web application",
      "API & third-party integrations",
      "E-commerce / payments",
      "Dedicated project manager",
      "Priority development",
      "12-month support SLA",
      "NDA & legal agreements",
    ],
    cta: "Contact Us",
    popular: false,
    gradient: "from-slate-800/60 to-slate-900/60",
    border: "border-white/8",
    buttonClass:
      "border border-white/15 hover:border-purple-500/40 text-slate-200 hover:text-white",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            No hidden fees. No surprises. Just world-class work at a price that
            makes sense for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col bg-gradient-to-br ${plan.gradient} border ${plan.border} ${
                plan.popular ? "ring-1 ring-purple-500/30 shadow-xl shadow-purple-900/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-bold text-white whitespace-nowrap">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-3">
                  {plan.price !== "Custom" && (
                    <span className="text-2xl font-bold text-slate-400">$</span>
                  )}
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] ${plan.buttonClass}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-slate-600 mt-8"
        >
          All plans include a free discovery call. Prices may vary based on
          project scope.
        </motion.p>
      </div>
    </section>
  );
}
