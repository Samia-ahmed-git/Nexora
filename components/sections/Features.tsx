"use client";

const features = [
  {
    num: "01",
    title: "Knowledge Graph",
    body: "Nexora builds a dynamic graph of your organization — connecting people, projects, decisions, and data. Ask complex questions and get answers that understand full context.",
    tag: "Intelligence",
  },
  {
    num: "02",
    title: "Workflow Automation",
    body: "Define your processes once using natural language. Nexora executes them reliably — triggering actions, updating records, and notifying the right people at the right time.",
    tag: "Automation",
  },
  {
    num: "03",
    title: "Decision Support",
    body: "Every recommendation is traceable to your data. Nexora surfaces confidence levels, alternative options, and the reasoning behind every suggestion.",
    tag: "Insight",
  },
  {
    num: "04",
    title: "Permissions & Privacy",
    body: "Granular access controls ensure the AI sees exactly what each team member sees. SOC 2 Type II certified. Your data never trains our models.",
    tag: "Security",
  },
  {
    num: "05",
    title: "Async Intelligence",
    body: "Nexora works around the clock. Get daily briefings, proactive alerts, and weekly summaries without lifting a finger.",
    tag: "Productivity",
  },
  {
    num: "06",
    title: "Custom Agents",
    body: "Deploy specialized AI agents for sales, engineering, support, or finance. Each one knows its domain deeply and collaborates with the others seamlessly.",
    tag: "Agents",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-pad bg-[#0a0a0a] relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="reveal flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-mono text-amber-400 text-xs tracking-widest uppercase">
                What&apos;s inside
              </span>
            </div>
            <h2
              className="reveal stagger-1 text-white"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              Built for teams who{" "}
              <span className="italic text-stone-400">move fast</span>
            </h2>
          </div>
          <p className="reveal stagger-2 text-stone-500 text-sm max-w-sm leading-relaxed">
            Six foundational capabilities that give every person on your team 
            an unfair advantage.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((feat, i) => (
            <div
              key={feat.num}
              className={`relative p-8 bg-[#0a0a0a] group hover:bg-[#111] transition-colors duration-300 reveal stagger-${(i % 3) + 1}`}
            >
              {/* Number */}
              <div
                className="text-display text-[5rem] leading-none text-white/5 absolute top-4 right-6 select-none group-hover:text-amber-400/10 transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', cursive" }}
              >
                {feat.num}
              </div>

              {/* Tag */}
              <span className="text-mono text-amber-400/60 text-xs tracking-widest uppercase mb-4 block">
                {feat.tag}
              </span>

              {/* Title */}
              <h3
                className="text-white text-xl mb-3 group-hover:text-amber-400 transition-colors duration-300"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {feat.title}
              </h3>

              {/* Body */}
              <p className="text-stone-500 text-sm leading-relaxed">{feat.body}</p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
