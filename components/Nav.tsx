"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Highlights" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
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
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-lg shadow-black/20" : "py-5"
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight text-gradient"
        >
          {profile.initials}
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-full text-sm transition-colors ${
                  active === link.href
                    ? "text-foreground bg-white/5"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden section-container mt-3 pb-4">
          <div className="glass rounded-2xl p-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
