"use client";

import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="wrap">
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <span className="eyebrow">About / 01</span>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-muted">
                Fluent in English &amp; Filipino. Based in Manila, working with
                teams across the U.S.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <p className="serif-lead text-2xl sm:text-[2.1rem]">
                Strategy that survives contact with{" "}
                <span className="accent-word">engineering</span>. Five years
                translating business objectives into roadmaps and driving
                cross-functional execution across platform, infrastructure, and
                operations.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
                {profile.summary}
              </p>
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
              {profile.competencies.map((item, i) => (
                <Reveal as="span" key={item} delay={i * 0.04}>
                  <span className="inline-block border border-line px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-fg/80">
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
