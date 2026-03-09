"use client";

const items = [
  "Knowledge Graph",
  "Workflow Automation",
  "Real-time Sync",
  "SOC 2 Certified",
  "Custom Agents",
  "200+ Integrations",
  "Async Briefings",
  "Team Memory",
  "Goal Tracking",
  "Decision Support",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative bg-amber-400 border-y border-amber-400/20" style={{ overflow: "hidden", clipPath: "inset(0)", height: "46px", display: "flex", alignItems: "center", zIndex: 1 }}>
      <div className="flex whitespace-nowrap items-center" style={{ animation: "marquee 25s linear infinite", willChange: "transform" }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 flex-shrink-0">
            <span
              className="text-display text-[#080808] text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.1em" }}
            >
              {item}
            </span>
            <span className="text-[#080808]/40 text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
