"use client";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 49,
    annual: 39,
    tagline: "For small teams exploring AI",
    features: [
      "Up to 10 team members",
      "3 native integrations",
      "Basic knowledge graph",
      "50K AI actions / mo",
      "Email support",
      "7-day history",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Growth",
    monthly: 149,
    annual: 119,
    tagline: "For scaling teams that move fast",
    features: [
      "Up to 50 team members",
      "Unlimited integrations",
      "Full knowledge graph",
      "500K AI actions / mo",
      "Custom agents (5)",
      "Priority support",
      "90-day history",
      "Analytics dashboard",
    ],
    cta: "Start free trial",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    tagline: "For orgs that demand the best",
    features: [
      "Unlimited members",
      "Unlimited integrations",
      "Advanced knowledge graph",
      "Unlimited AI actions",
      "Unlimited custom agents",
      "Dedicated CSM",
      "Unlimited history",
      "SSO & SCIM",
      "On-premise option",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="section-pad bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-mono text-amber-400 text-xs tracking-widest uppercase">
              Pricing
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
            Simple, transparent pricing
          </h2>
          <p className="reveal stagger-2 text-stone-500 max-w-md mx-auto text-sm">
            Start free for 14 days. No credit card required.
          </p>

          {/* Toggle */}
          <div className="reveal stagger-3 flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!annual ? "text-white" : "text-stone-500"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 transition-colors duration-300 ${
                annual ? "bg-amber-400" : "bg-charcoal-600"
              }`}
              style={{ backgroundColor: annual ? "#fbbf24" : "#2a2a2a" }}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-[#080808] transition-all duration-300 ${
                  annual ? "left-7" : "left-1"
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? "text-white" : "text-stone-500"}`}>
              Annual{" "}
              <span className="text-amber-400 text-xs ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative p-8 flex flex-col reveal stagger-${i + 1} ${
                plan.highlight
                  ? "border border-amber-400/30 bg-[#0e0e0e]"
                  : "border border-white/6 bg-[#0a0a0a]"
              }`}
              style={
                plan.highlight
                  ? { boxShadow: "0 0 60px rgba(251,191,36,0.08)" }
                  : {}
              }
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 px-4 py-1">
                  <span className="text-mono text-[#080808] text-xs font-semibold tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-white text-2xl mb-1"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-stone-500 text-sm">{plan.tagline}</p>
              </div>

              <div className="mb-8">
                {plan.monthly !== null ? (
                  <>
                    <span
                      className="text-display text-white"
                      style={{
                        fontFamily: "'Bebas Neue', cursive",
                        fontSize: "3.5rem",
                        lineHeight: 1,
                      }}
                    >
                      ${annual ? plan.annual : plan.monthly}
                    </span>
                    <span className="text-stone-500 text-sm ml-1">/mo per team</span>
                    {annual && (
                      <p className="text-stone-600 text-xs mt-1">
                        billed annually
                      </p>
                    )}
                  </>
                ) : (
                  <span
                    className="text-display text-white"
                    style={{
                      fontFamily: "'Bebas Neue', cursive",
                      fontSize: "3rem",
                      lineHeight: 1,
                    }}
                  >
                    Custom
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-stone-400 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={plan.highlight ? "btn-primary text-center" : "btn-ghost text-center"}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
