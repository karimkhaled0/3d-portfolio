"use client";

import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Velocity from "@/components/main/Velocity";

export default function Home() {
  return (
    <main>
      <section id="#">
        <Hero />
      </section>
      <Velocity />
      {/* <div className="relative h-screen brightness-50">
        <ZoomOut />
      </div> */}
      <section id="#projects">
        <Projects />
      </section>
    </main>
  );
}
