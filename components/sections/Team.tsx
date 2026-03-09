"use client";

const team = [
  {
    name: "Elara Voss",
    role: "CEO & Co-founder",
    bio: "Former VP Product at Stripe. Built and scaled 3 products to $100M ARR.",
    initials: "EV",
    color: "#fbbf24",
  },
  {
    name: "Marcus Chen",
    role: "CTO & Co-founder",
    bio: "Ex-DeepMind research lead. 12 published papers on large-scale ML systems.",
    initials: "MC",
    color: "#60a5fa",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    bio: "Designed the original Figma desktop app. Obsessed with making AI feel human.",
    initials: "PS",
    color: "#a78bfa",
  },
  {
    name: "Daniel Okafor",
    role: "Head of Engineering",
    bio: "Previously infra lead at Vercel. Architected systems handling 10B req/day.",
    initials: "DO",
    color: "#34d399",
  },
];

const investors = [
  { name: "Y Combinator", batch: "W24" },
  { name: "Andreessen Horowitz", batch: "Lead" },
  { name: "OpenAI Fund", batch: "Partner" },
  { name: "Founders Fund", batch: "Investor" },
];

export default function Team() {
  return (
    <section id="team" className="section-pad relative overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-mono text-amber-400 text-xs tracking-widest uppercase">
              The team
            </span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <h2
            className="reveal stagger-1 text-white mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Built by people who&apos;ve{" "}
            <span className="italic text-stone-400">done it before</span>
          </h2>
          <p className="reveal stagger-2 text-stone-500 text-sm max-w-md mx-auto">
            We&apos;ve shipped at Stripe, DeepMind, Figma, and Vercel. 
            Now we&apos;re building the AI layer we always wished existed.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`card-dark p-6 text-center group reveal stagger-${i + 1}`}
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[#080808] font-bold text-sm relative"
                style={{ backgroundColor: member.color }}
              >
                <span className="text-mono">{member.initials}</span>
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-300" />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">{member.name}</h3>
              <p className="text-amber-400/70 text-xs mb-3 tracking-wide">{member.role}</p>
              <p className="text-stone-500 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Investors */}
        <div className="border-t border-white/5 pt-12 text-center">
          <p className="reveal text-stone-600 text-xs uppercase tracking-widest mb-8">Backed by the best</p>
          <div className="flex flex-wrap justify-center gap-8">
            {investors.map((inv, i) => (
              <div key={inv.name} className={`reveal stagger-${i + 1} flex items-center gap-2`}>
                <span className="text-stone-400 font-medium text-sm">{inv.name}</span>
                <span className="text-mono text-amber-400/50 text-xs">{inv.batch}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
