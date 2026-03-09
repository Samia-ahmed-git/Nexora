"use client";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
  Developers: ["API Docs", "SDK", "GitHub", "Community", "Status"],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-400 flex items-center justify-center">
                <span
                  className="text-[#080808] text-lg"
                  style={{ fontFamily: "'Bebas Neue', cursive" }}
                >
                  N
                </span>
              </div>
              <span
                className="text-white text-xl tracking-widest"
                style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.15em" }}
              >
                Nexora
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-5">
              The AI operating layer for ambitious teams. Ship smarter, 
              move faster, scale further.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "gh"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-stone-500 hover:text-white hover:border-white/30 transition-all duration-200 text-xs"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-mono text-xs text-stone-600 uppercase tracking-widest mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="animated-underline text-stone-500 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-stone-600 text-xs">
            © 2024 Nexora, Inc. All rights reserved.
          </p>
          <p className="text-stone-700 text-xs">
            Designed with intent. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
