"use client";

import { motion } from "framer-motion";
import { highlights } from "@/lib/data";

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Impact
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected highlights
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: "var(--accent-2)" }}
              />
              <div className="relative">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  {h.metric}
                </div>
                <div className="mt-3 text-base font-semibold text-foreground">
                  {h.label}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {h.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
