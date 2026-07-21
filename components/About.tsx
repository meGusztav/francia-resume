"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              About
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Strategy that survives contact with engineering.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {profile.competencies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
