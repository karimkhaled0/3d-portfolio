"use client";
import { MouseEvent, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  flipped?: boolean;
}

interface Props {}

function ParallaxText({
  children,
  baseVelocity = 100,
  flipped,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className={cn("", flipped && "rotate-180")}>{children} </span>
        <span className={cn("", flipped && "rotate-180")}>{children} </span>
        <span className={cn("", flipped && "rotate-180")}>{children} </span>
        <span className={cn("", flipped && "rotate-180")}>{children} </span>
      </motion.div>
    </div>
  );
}

export default function Velocity(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [1, 0], [1, 1]);
  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="relative pt-40 pb-20 space-y-5"
    >
      <ParallaxText baseVelocity={-2}>
        Projects&#160;&#160;Projects&#160;&#160;Projects
      </ParallaxText>
      <ParallaxText baseVelocity={1} flipped>
        Projects&#160;&#160;Projects&#160;&#160;Projects
      </ParallaxText>
    </motion.section>
  );
}
