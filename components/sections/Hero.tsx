"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; pulse: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let animId: number;
    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251, 191, 36, ${alpha})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1, i + 6).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(251, 191, 36, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />

      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(251,191,36,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #080808, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-amber-400/20 bg-amber-400/5"
          style={{ animation: "fadeIn 0.8s ease forwards" }}
        >
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-mono text-amber-400 text-xs tracking-widest uppercase">
            Now in private beta — 2,400 teams on waitlist
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="mb-6"
          style={{ animation: "fadeUp 0.9s ease 0.15s both" }}
        >
          <span
            className="block text-display gradient-text amber-glow"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(4rem, 12vw, 11rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
            }}
          >
            Intelligence
          </span>
          <span
            className="block text-heading text-stone-300 italic"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 6vw, 5.5rem)",
              lineHeight: 1.1,
            }}
          >
            amplified for your team
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl mx-auto text-stone-400 text-lg md:text-xl leading-relaxed mb-10"
          style={{ animation: "fadeUp 0.9s ease 0.3s both" }}
        >
          Nexora is the AI operating layer that plugs into your existing stack — 
          automating decisions, accelerating workflows, and giving every teammate 
          a superpower they'll actually use.
        </p>

        {/* CTA Row */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animation: "fadeUp 0.9s ease 0.45s both" }}
        >
          <a href="#" className="btn-primary">
            Request Access →
          </a>
          <a href="#product" className="btn-ghost flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch 2-min demo
          </a>
        </div>

        {/* Social proof logos */}
        <div
          className="mt-16 flex flex-col items-center gap-4"
          style={{ animation: "fadeIn 1s ease 0.7s both" }}
        >
          <p className="text-stone-600 text-xs uppercase tracking-widest">
            Trusted by teams at
          </p>
          <div className="flex items-center gap-8 flex-wrap justify-center">
            {["Linear", "Vercel", "Stripe", "Notion", "Figma"].map((co) => (
              <span
                key={co}
                className="text-stone-600 hover:text-stone-400 transition-colors duration-300 text-sm font-semibold tracking-wide"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {co}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeIn 1s ease 1.2s both" }}
      >
        <span className="text-stone-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-400/50 to-transparent" />
      </div>
    </section>
  );
}
