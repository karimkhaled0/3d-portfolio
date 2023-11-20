"use client";

import MobileHero from "@/components/mobile/main/MobileHero";
import Hero from "@/components/web/main/Hero";
import { MouseEvent, Suspense, useEffect, useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import Projects from "@/components/web/main/Projects";
import Header from "@/components/web/header/Header";
import Velocity from "@/components/web/main/Velocity";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX || 0;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY || 0;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: "16px",
      backgroundColor: "#fff",
      x: mouseXPosition - 8,
      y: mouseYPosition - 8,
      transition: {
        type: "spring",
        mass: 0.2,
      },
      mixBlendMode: "difference" as const,
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      color: "#000",
      height: 150,
      width: 150,
      fontSize: "30px",
      lineHeight: "40px",
      x: mouseXPosition - 70,
      y: mouseYPosition - 70,
      backgroundColor: "#fff",
    },
  };

  const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 28,
  };

  function projectEnter(event: MouseEvent<HTMLDivElement>) {
    setCursorText("See Project");
    setCursorVariant("project");
  }

  function mouseLeave(event: MouseEvent<HTMLDivElement>) {
    setCursorText("");
    setCursorVariant("default");
  }

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobile = userAgent.includes("Mobile");

    setIsMobile(mobile);
  }, []);

  return isMobile ? (
    <main>
      <section id="#">
        <MobileHero />
      </section>
      <Velocity />
    </main>
  ) : (
    <main ref={ref} className={"relative bg-white"}>
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
      <div className="h-screen"></div>
    </main>
  );
}
