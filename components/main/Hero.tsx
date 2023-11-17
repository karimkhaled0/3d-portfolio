"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import KarimImage from "@/images/landpage/karim.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Suspense, useRef } from "react";
import { Skeleton } from "../ui/skeleton";
import ManModel from "./ManModel";
type Props = {};

const Hero = (props: Props) => {
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
    <div className="flex justify-between w-full">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
        }}
        className="space-y-5 w-full cursor-default my-40 mx-20"
      >
        <h1 className="text-[150px] leading-none">
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            K
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            A
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            R
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            I
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            M
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            {" "}
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            K
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            H
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            A
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            L
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            E
          </motion.span>
          <motion.span
            whileHover={{
              color: "#8b5cf6",
            }}
          >
            D
          </motion.span>
        </h1>
        <h2 className="text-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-transparent bg-clip-text px-4 py-1 tracking-[20px] rounded-sm">
          FULL STACK DEVELOPER
        </h2>
        <div className="flex items-center">
          <h2 className="text-xl mx-4 opacity-70 tracking-[5px]">{text}</h2>
          <Cursor cursorColor="#000000" />
        </div>
      </motion.div>
      <div className="w-full">
        <Suspense
          fallback={<Skeleton className="h-[900px] w-[900px] bg-gray-400" />}
        >
          {/* image */}
          {/* <Image
            src={KarimImage}
            width={900}
            height={900}
            alt="Picture of the author"
          /> */}
          <ManModel />
        </Suspense>
      </div>
    </div>
  );
};

export default Hero;
