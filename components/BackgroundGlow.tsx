export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-[110px] animate-float-slow"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full opacity-25 blur-[120px] animate-float"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent-2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full opacity-20 blur-[100px] animate-float-slow"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent-3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
