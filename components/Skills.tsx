"use client";

import { skills } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="relative py-28 sm:py-40">
      <div className="wrap">
        <SectionHeader
          index="04"
          eyebrow="Toolkit"
          title={
            <>
              The technical <span className="italic">foundation.</span>
            </>
          }
          className="mb-20"
        />

        <div>
          {groups.map(([group, items], i) => (
            <Reveal key={group}>
              <div className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                      {group}
                    </h3>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="font-serif text-xl text-fg/90 transition-colors hover:text-accent sm:text-2xl"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
