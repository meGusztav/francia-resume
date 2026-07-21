"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Download } from "lucide-react";
import { profile } from "@/lib/data";
import BackgroundGlow from "./BackgroundGlow";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <BackgroundGlow />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build the next roadmap together
          </h2>
          <p className="mt-4 text-muted">
            Open to Project & Product Manager roles and consulting engagements.
            Reach out directly — I usually reply within a day.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-3">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === "LinkedIn" ? "_blank" : undefined}
              rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group flex flex-col items-center gap-3 rounded-3xl p-6 text-center transition-transform hover:-translate-y-1"
            >
              <div className="rounded-2xl border border-border bg-white/5 p-3 text-accent transition-colors group-hover:bg-white/10">
                <c.icon size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">
                  {c.label}
                </div>
                <div className="mt-1 break-all text-xs text-muted">
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            <Download size={16} />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
