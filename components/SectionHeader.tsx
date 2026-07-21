import Reveal from "./Reveal";

export default function SectionHeader({
  index,
  eyebrow,
  title,
  className = "",
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="ghost-number pointer-events-none absolute -top-10 right-0 text-[7rem] leading-none sm:-top-16 sm:text-[11rem]"
      >
        {index}
      </span>
      <Reveal className="relative">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="font-serif mt-5 max-w-3xl text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
