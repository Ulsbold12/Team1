"use client";

import { Header } from "@/app/_components/header";
import Hero from "@/app/_components/Hero";

import Footer from "./_components/Footer";
import Modul from "./_components/Modul";
import Cta from "./_components/Cta";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <Hero />
      <Modul />
      <Cta />
      <Footer />
    </div>
  );
}
