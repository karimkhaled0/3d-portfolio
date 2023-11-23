"use client";

import MobileHero from "@/components/mobile/main/MobileHero";
import Hero from "@/components/web/main/Hero";
import { useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import Projects from "@/components/web/main/Projects";
import Header from "@/components/web/header/Header";
import Velocity from "@/components/web/main/Velocity";
import SmoothScrollY from "@/components/providers/SmoothScrollY";
import customCursor from "@/utils/customCursor";
import useMobileView from "@/hooks/useMobileView";

export default function Home() {
  const containerRef = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  // Mouse Position
  const mouse = useMouse(containerRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  // Custom Cursor
  const { mouseLeave, projectEnter, spring, variants } = customCursor({
    mouse,
    setCursorText,
    setCursorVariant,
  });

  // Mobile View Check
  const isMobile = useMobileView();

  return isMobile ? (
    <main>
      <section id="#">
        <MobileHero />
      </section>
      <Velocity />
    </main>
  ) : (
    <SmoothScrollY>
      <main ref={containerRef} className="relative bg-white">
        <Header />
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>
        <section id="#" className="mt-20">
          <Hero />
        </section>
        <Velocity />
        <Projects projectEnter={projectEnter} mouseLeave={mouseLeave} />
        <div className="h-screen bg-blue-400"></div>
      </main>
    </SmoothScrollY>
  );
}
