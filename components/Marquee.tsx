export default function Marquee({
  items,
  reverse = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const Row = () => (
    <div
      className={`marquee__track ${
        reverse ? "animate-marquee-rev" : "animate-marquee"
      }`}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-serif text-2xl italic sm:text-3xl">{item}</span>
          <span className="text-accent text-lg">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <Row />
      <Row />
    </div>
  );
}
