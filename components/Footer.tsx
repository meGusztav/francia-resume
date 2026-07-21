import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-10">
      <div className="wrap flex flex-col items-start justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a
          href="#top"
          className="link-underline text-fg"
        >
          Back to top ↑
        </a>
        <span>Manila, PH — Designed &amp; built with Next.js</span>
      </div>
    </footer>
  );
}
