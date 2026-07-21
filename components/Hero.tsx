"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import BackgroundGlow from "./BackgroundGlow";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <BackgroundGlow />

      <div className="wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted"
        >
          <span className="text-accent">Project / Product Manager</span>
          <span className="hidden h-px w-8 bg-line sm:inline-block" />
          <span>{profile.location}</span>
          <span className="hidden h-px w-8 bg-line sm:inline-block" />
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Open to work
          </span>
        </motion.div>

        <h1 className="font-serif mt-8 text-[clamp(3rem,12vw,10.5rem)] font-medium leading-[0.92] tracking-[-0.03em]">
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease }}
            className="block"
          >
            Wilhelm
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="block pl-[0.08em] italic text-accent"
          >
            Gusztav
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="block"
          >
            Francia
          </motion.span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="serif-lead max-w-md text-2xl sm:text-[1.7rem]"
          >
            I turn business objectives into roadmaps engineers{" "}
            <span className="accent-word">actually</span> want to build.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="flex flex-col items-start gap-5 md:items-end"
          >
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-bg transition-transform hover:-translate-y-0.5"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Resume ↓
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mt-16 flex flex-wrap items-end gap-x-12 gap-y-6 border-t border-line pt-8"
        >
          {[
            ["5+", "Years in delivery leadership"],
            ["4", "Companies, platform to enterprise"],
            ["3.93", "M.Eng CGPA, Oregon State"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="font-serif text-3xl">{num}</div>
              <div className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
