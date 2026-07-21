"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import BackgroundGlow from "./BackgroundGlow";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <BackgroundGlow />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-sm text-muted"
        >
          <MapPin size={14} />
          {profile.location}
          <span className="h-1 w-1 rounded-full bg-muted" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.name.split(" ")[0]}{" "}
          {profile.name.split(" ").slice(1).join(" ")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl text-xl text-gradient font-display font-medium sm:text-2xl"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8 text-sm text-muted"
        >
          <div>
            <span className="block font-display text-2xl font-semibold text-foreground">
              5+
            </span>
            Years in delivery leadership
          </div>
          <div>
            <span className="block font-display text-2xl font-semibold text-foreground">
              4
            </span>
            Companies, platform to enterprise
          </div>
          <div>
            <span className="block font-display text-2xl font-semibold text-foreground">
              M.Eng
            </span>
            Computer Science, Oregon State
          </div>
        </motion.div>
      </div>
    </section>
  );
}
