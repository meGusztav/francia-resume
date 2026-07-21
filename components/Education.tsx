"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Education
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Education &amp; credentials
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-3xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-border bg-white/5 p-3 text-accent">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{edu.school}</p>
                  <p className="text-sm text-muted">
                    {edu.location} · {edu.period}
                  </p>
                  <p className="mt-2 text-sm text-foreground/80">{edu.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (education.length + i) * 0.06 }}
              className="glass rounded-3xl p-6 sm:p-8 md:col-span-2"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-border bg-white/5 p-3 text-accent">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{cert.issuer}</p>
                  <p className="mt-2 text-sm text-foreground/80">{cert.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
