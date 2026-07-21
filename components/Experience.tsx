"use client";

import { experience } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-40">
      <div className="wrap">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve driven <span className="italic">delivery.</span>
            </>
          }
          className="mb-20"
        />

        <div>
          {experience.map((job, i) => (
            <Reveal key={job.role + job.company}>
              <article className="group grid gap-6 border-t border-line py-10 transition-colors md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      {job.period}
                    </span>
                  </div>
                  <div className="mt-4 font-serif text-lg text-fg">
                    {job.company}
                  </div>
                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted">
                    {job.companyBlurb}
                  </p>
                  <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted/70">
                    {job.location}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <h3 className="font-serif text-2xl font-medium leading-snug text-fg transition-colors group-hover:text-accent sm:text-3xl">
                    {job.role}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-accent/60" />
                        <span className="max-w-2xl">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
