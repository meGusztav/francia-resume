"use client";

import { education, certifications } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-40">
      <div className="wrap">
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <span className="eyebrow">Credentials / 05</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif mt-6 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Education &amp; <span className="italic">certifications.</span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            {education.map((edu) => (
              <Reveal key={edu.school}>
                <div className="grid gap-2 border-t border-line py-8 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-fg">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-accent">{edu.school}</p>
                    <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                      {edu.detail}
                    </p>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.12em] text-muted sm:text-right">
                    <div>{edu.location}</div>
                    <div className="mt-1">{edu.period}</div>
                  </div>
                </div>
              </Reveal>
            ))}

            {certifications.map((cert) => (
              <Reveal key={cert.name}>
                <div className="grid gap-2 border-t border-line py-8 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-fg">
                      {cert.name}
                    </h3>
                    <p className="mt-1 text-accent">{cert.issuer}</p>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                      {cert.detail}
                    </p>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.12em] text-muted sm:text-right">
                    Certificate
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
