"use client";

import MobileHero from "@/components/mobile/main/MobileHero";
import Hero from "@/components/web/main/Hero";
import Projects from "@/components/web/main/Projects";
import Velocity from "@/components/web/main/Velocity";
import { headers } from "next/headers";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobile = userAgent.includes("Mobile");

    setIsMobile(mobile);
  }, []);
  if (isMobile)
    return (
      <main>
        <section id="#">
          <MobileHero />
        </section>
        <Velocity />
        <section id="#projects">
          <Projects />
        </section>
      </main>
    );
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
