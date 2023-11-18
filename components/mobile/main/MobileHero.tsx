"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Suspense, useRef } from "react";
import { Skeleton } from "../../ui/skeleton";
type Props = {};

const MobileHero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Ready to build your next project ?"],
    loop: false,
    delaySpeed: 500000,
  });

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [1, 0], [1, 0.9]);
  return (
    <div className="w-full">
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
        }}
        className="xs:space-y-5 space-y-3 w-full cursor-default my-40 text-center"
      >
        <h1 className="xs:text-5xl text-3xl leading-none">KARIM KHALED</h1>
        <h2 className="xs:text-xl text-sm bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-transparent bg-clip-text px-4 py-1 tracking-[5px] rounded-sm leading-relaxed">
          FULL STACK DEVELOPER
        </h2>
        <div className="flex items-center">
          <h2 className="xs:text-sm text-[8px] mx-4 opacity-70 tracking-[5px]">
            {text}
          </h2>
          <Cursor cursorColor="#000000" />
        </div>
      </motion.div>
    </div>
  );
};

export default MobileHero;
