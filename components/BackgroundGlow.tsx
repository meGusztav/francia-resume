export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-[0.18] blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px)",
          backgroundSize: "clamp(4rem, 12vw, 9rem) 100%",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)",
        }}
      />
    </div>
  );
}
