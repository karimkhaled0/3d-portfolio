import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const SmoothScrollX = ({ children }: Props) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-185vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 2,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[288vw] flex justify-center items-center"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SmoothScrollX;
