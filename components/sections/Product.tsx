"use client";

const capabilities = [
  {
    icon: "⚡",
    label: "Instant Context",
    desc: "Nexora ingests your docs, codebase, and conversations — building a live model of your business logic.",
  },
  {
    icon: "🔗",
    label: "Native Integrations",
    desc: "Connect Slack, Linear, GitHub, Notion, Salesforce, and 200+ tools in one click. No engineers required.",
  },
  {
    icon: "🧠",
    label: "Team Memory",
    desc: "Every decision, every output — indexed and retrievable. Your collective knowledge, always on.",
  },
  {
    icon: "🎯",
    label: "Goal-Aware",
    desc: "Set OKRs once. Nexora tracks progress, surfaces blockers, and recommends next best actions.",
  },
];

export default function Product() {
  return (
    <section id="product" className="section-pad relative overflow-hidden">
      {/* Side glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-mono text-amber-400 text-xs tracking-widest uppercase">
              The Platform
            </span>
          </div>
          <h2
            className="reveal stagger-1 text-heading text-white mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.1,
            }}
          >
            One AI layer that runs{" "}
            <span className="text-amber-400 italic">across everything</span>
          </h2>
          <p className="reveal stagger-2 text-stone-400 text-lg leading-relaxed max-w-xl">
            Stop stitching together point solutions. Nexora gives your entire 
            organization a unified AI brain that knows your context, respects 
            your process, and scales with your ambition.
          </p>
        </div>

        {/* Product UI mockup + capabilities */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Mock UI */}
          <div className="lg:col-span-3 reveal reveal-left stagger-2">
            <div className="relative rounded-sm overflow-hidden border border-white/8 bg-[#0e0e0e] amber-border-glow">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#161616]">
                <span className="w-3 h-3 rounded-full bg-[#3a3a3a]" />
                <span className="w-3 h-3 rounded-full bg-[#3a3a3a]" />
                <span className="w-3 h-3 rounded-full bg-amber-400/60" />
                <div className="flex-1 mx-4 h-5 bg-[#0e0e0e] rounded-sm flex items-center px-3">
                  <span className="text-mono text-stone-600 text-xs">nexora.ai/workspace</span>
                </div>
              </div>

              {/* App content */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-8 h-8 bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-sm flex-shrink-0">
                    N
                  </div>
                  <div>
                    <p className="text-stone-300 text-sm leading-relaxed mb-3">
                      I&apos;ve analyzed your Q3 pipeline. Here&apos;s what I found:
                    </p>
                    <div className="space-y-2">
                      {[
                        { label: "Deals at risk", value: "3", color: "text-red-400", bg: "bg-red-400/10" },
                        { label: "Avg. deal velocity", value: "+18%", color: "text-green-400", bg: "bg-green-400/10" },
                        { label: "Recommended action", value: "Accelerate Acme Corp", color: "text-amber-400", bg: "bg-amber-400/10" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className={`flex items-center justify-between px-3 py-2 ${item.bg} border border-white/5`}
                        >
                          <span className="text-stone-500 text-xs">{item.label}</span>
                          <span className={`${item.color} text-mono text-xs font-medium`}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Prompt bar */}
                <div className="flex items-center gap-3 border border-white/8 bg-[#161616] px-4 py-3">
                  <span className="text-stone-600 text-sm flex-1">Ask Nexora anything...</span>
                  <div className="w-7 h-7 bg-amber-400 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#080808">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-[#0e0e0e] border border-amber-400/30 px-3 py-1.5">
                <span className="text-mono text-amber-400 text-xs">Live</span>
                <span className="ml-2 w-1.5 h-1.5 bg-amber-400 rounded-full inline-block animate-pulse" />
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-2 space-y-4">
            {capabilities.map((cap, i) => (
              <div
                key={cap.label}
                className={`card-dark p-5 reveal reveal-right stagger-${i + 1}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{cap.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{cap.label}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
