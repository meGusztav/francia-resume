"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About", n: "01" },
  { href: "#work", label: "Work", n: "02" },
  { href: "#experience", label: "Experience", n: "03" },
  { href: "#skills", label: "Skills", n: "04" },
  { href: "#contact", label: "Contact", n: "05" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "work", "experience", "skills", "education", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 py-3 backdrop-blur-md"
          : "py-5"
      }`}
    >
      <nav className="wrap flex items-center justify-between">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-serif text-lg font-semibold tracking-tight">
            Wilhelm Francia
          </span>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted sm:inline">
            / PM
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                  active === link.href
                    ? "text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                <span className="text-[0.6rem] opacity-60">{link.n}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download
          className="hidden font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg link-underline md:inline-block"
        >
          Resume ↓
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="wrap mt-4 md:hidden">
          <div className="flex flex-col gap-1 border-t border-line pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-2.5 font-mono text-sm uppercase tracking-[0.15em] text-muted"
              >
                <span className="text-xs text-accent">{link.n}</span>
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-2 py-2.5 font-mono text-sm uppercase tracking-[0.15em] text-fg"
            >
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
