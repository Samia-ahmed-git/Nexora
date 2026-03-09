import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora — Intelligence, Amplified",
  description:
    "Nexora is the AI operating layer for ambitious teams. Ship smarter, move faster, scale further.",
  keywords: ["AI", "startup", "productivity", "automation", "intelligence"],
  openGraph: {
    title: "Nexora — Intelligence, Amplified",
    description: "The AI operating layer for ambitious teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
