"use client";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden py-32">
      {/* Dramatic background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 50% 120%, rgba(251,191,36,0.12) 0%, transparent 60%),
            linear-gradient(to bottom, #080808, #0a0808)
          `,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center bottom, black 30%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-amber-400" />
          <span className="text-mono text-amber-400 text-xs tracking-widest uppercase">
            Join the waitlist
          </span>
          <div className="w-8 h-px bg-amber-400" />
        </div>

        <h2
          className="reveal stagger-1 mb-6"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
          }}
        >
          <span className="gradient-text amber-glow">Ready to</span>
          <br />
          <span className="text-white">Move faster?</span>
        </h2>

        <p className="reveal stagger-2 text-stone-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Join 2,400+ teams already on the waitlist. Early access includes 
          3 months free on any plan and a dedicated onboarding call.
        </p>

        {!submitted ? (
          <div className="reveal stagger-3 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="your@email.com"
              className="flex-1 bg-[#161616] border border-white/10 px-4 py-3.5 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/40 transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            <button onClick={handleSubmit} className="btn-primary whitespace-nowrap">
              Get access →
            </button>
          </div>
        ) : (
          <div className="reveal stagger-3 flex items-center justify-center gap-3 py-4">
            <div className="w-6 h-6 bg-amber-400 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#080808">
                <polyline points="20 6 9 17 4 12" strokeWidth="3" stroke="#080808" fill="none" />
              </svg>
            </div>
            <span className="text-white font-medium">You&apos;re on the list — we&apos;ll be in touch.</span>
          </div>
        )}

        <p className="reveal stagger-4 text-stone-600 text-xs mt-4">
          No spam. No credit card. Just early access.
        </p>
      </div>
    </section>
  );
}
