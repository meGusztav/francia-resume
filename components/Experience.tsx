"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Experience
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I&apos;ve driven delivery
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border sm:block" />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.role + job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative sm:pl-10"
              >
                <span className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-accent bg-background sm:block" />

                <div className="glass rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <span className="text-sm text-muted">{job.period}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-accent">
                    <span className="font-medium">{job.company}</span>
                    <span className="text-muted">— {job.companyBlurb}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{job.location}</p>

                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
