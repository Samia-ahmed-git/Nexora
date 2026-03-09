"use client";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  { end: 94, suffix: "%", label: "Reduction in manual reporting", sub: "Avg. across 200+ teams" },
  { end: 3, suffix: "×", label: "Faster decision cycles", sub: "Measured over 90 days" },
  { end: 12, suffix: "h", label: "Saved per employee / week", sub: "Based on user surveys" },
  { end: 99, suffix: ".9%", label: "Platform uptime SLA", sub: "Since launch" },
];

const testimonials = [
  {
    quote:
      "Nexora replaced three separate AI tools we were stitching together. It just works — and it actually understands our process.",
    name: "Sofia Laurent",
    role: "Head of Ops, Meridian",
    avatar: "SL",
  },
  {
    quote:
      "The knowledge graph blew us away. It found a connection between a 6-month-old Slack thread and a current deal that we'd have missed.",
    name: "James Park",
    role: "CTO, Foundry Labs",
    avatar: "JP",
  },
  {
    quote:
      "We cut our weekly status meeting entirely. Nexora sends everyone a briefing Sunday night. It's magic.",
    name: "Amara Osei",
    role: "CEO, Arcline",
    avatar: "AO",
  },
];

export default function Metrics() {
  return (
    <section id="metrics" className="section-pad relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(251,191,36,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-mono text-amber-400 text-xs tracking-widest uppercase">
              Real results
            </span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <h2
            className="reveal stagger-1 text-white"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Numbers that speak{" "}
            <span className="text-amber-400 italic">for themselves</span>
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-[#080808] p-8 text-center reveal stagger-${i + 1}`}
            >
              <div
                className="text-display text-amber-400 mb-2"
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <p className="text-white text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-stone-600 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-dark p-7 flex flex-col gap-5 reveal stagger-${i + 1}`}
            >
              {/* Quote mark */}
              <div
                className="text-amber-400/30 text-5xl leading-none"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                &ldquo;
              </div>
              <p className="text-stone-300 text-sm leading-relaxed -mt-4">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <div className="w-9 h-9 bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                  <span className="text-mono text-amber-400 text-xs">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-stone-600 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
