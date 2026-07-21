"use client";

import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import BackgroundGlow from "./BackgroundGlow";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: profile.linkedin, external: true, icon: <LinkedinIcon /> },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s+/g, "")}`, value: profile.phone },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      <BackgroundGlow />
      <div className="wrap relative z-10">
        <Reveal>
          <span className="eyebrow">Contact / 06</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-serif mt-8 text-[clamp(2.4rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.02em]">
            Let&apos;s build the
            <br />
            <span className="italic text-accent">next roadmap.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
          <Reveal delay={0.1}>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex flex-col"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                Email me directly
              </span>
              <span className="font-serif mt-2 break-all text-3xl text-fg transition-colors group-hover:text-accent sm:text-5xl">
                {profile.email}
                <span className="ml-3 inline-block transition-transform group-hover:translate-x-2">
                  ↗
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-4 md:items-end">
              <p className="max-w-xs text-sm leading-relaxed text-muted md:text-right">
                Open to Project &amp; Product Manager roles and consulting
                engagements. I usually reply within a day.
              </p>
              <div className="flex flex-wrap gap-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fg link-underline"
                  >
                    {s.icon}
                    {s.value ?? s.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fg link-underline"
                >
                  Resume ↓
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
