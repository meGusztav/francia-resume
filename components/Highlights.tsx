"use client";

import { highlights } from "@/lib/data";
import Reveal from "./Reveal";

// Asymmetric spans so the grid never reads as a uniform robot-made matrix.
const spans = [
  "sm:col-span-4",
  "sm:col-span-2",
  "sm:col-span-2",
  "sm:col-span-4",
];

export default function Highlights() {
  return (
    <section id="work" className="paper relative py-28 sm:py-40">
      <div className="wrap">
        <div className="relative mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="eyebrow">Selected impact / 02</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif mt-5 text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl">
                Numbers I&apos;m
                <br />
                <span className="italic text-accent">proud of.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-[color:var(--muted-ink)]">
              A few outcomes from shipping across platform, disaster-response
              ops, and enterprise commerce.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px border border-line bg-[color:var(--line-ink)] sm:grid-cols-6">
          {highlights.map((h, i) => (
            <Reveal
              key={h.label}
              delay={i * 0.06}
              className={`${spans[i]} bg-cream`}
            >
              <div className="group h-full p-8 transition-colors sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-6xl font-semibold leading-none text-accent sm:text-7xl">
                    {h.metric}
                  </span>
                  <span className="font-mono text-xs text-[color:var(--muted-ink)]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif mt-6 text-xl font-medium text-ink">
                  {h.label}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--muted-ink)]">
                  {h.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
