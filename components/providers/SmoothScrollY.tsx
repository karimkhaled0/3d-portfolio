import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";

type Props = {
  children: React.ReactNode;
};

const SmoothScrollY = ({ children }: Props) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return children;
};

export default SmoothScrollY;
