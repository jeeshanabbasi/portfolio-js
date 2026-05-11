export default function BackgroundDesign() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top-left gradient blob */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-500/8 rounded-full blur-[120px]" />

      {/* Center-right gradient blob */}
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-500/8 dark:bg-blue-600/6 rounded-full blur-[100px]" />

      {/* Bottom-left accent */}
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-violet-500/6 dark:bg-violet-600/5 rounded-full blur-[110px]" />

      {/* Bottom-right soft glow */}
      <div className="absolute -bottom-20 right-0 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-400/4 rounded-full blur-[130px]" />

      {/* Subtle top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/60 dark:from-slate-950/80 to-transparent" />

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white/60 dark:from-slate-950/80 to-transparent" />

      {/* Very subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
