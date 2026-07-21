import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}
