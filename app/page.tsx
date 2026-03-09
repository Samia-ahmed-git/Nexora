"use client";
import { useEffect } from "react";
import Cursor from "@/components/ui/Cursor";
import { useScrollReveal } from "@/components/ui/useScrollReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Product from "@/components/sections/Product";
import Marquee from "@/components/sections/Marquee";
import Features from "@/components/sections/Features";
import Metrics from "@/components/sections/Metrics";
import Pricing from "@/components/sections/Pricing";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Product />
        <Features />
        <Metrics />
        <Pricing />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
