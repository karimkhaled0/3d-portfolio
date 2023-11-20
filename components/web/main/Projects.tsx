"use client";

import { MouseEvent } from "react";
import Project from "./Project";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowRightCircleIcon } from "lucide-react";
type Props = {
  projectEnter: (event: MouseEvent<HTMLDivElement>) => void;
  mouseLeave: (event: MouseEvent<HTMLDivElement>) => void;
};

const Projects = ({ projectEnter, mouseLeave }: Props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <Project
            className="bg-white"
            projectEnter={projectEnter}
            projectLeave={mouseLeave}
            projectName="MEKANIKU"
            projectDate="2023"
            projectDescription="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
            projectTech={["Backend", "Frontend"]}
            imageURL="/mobile.jpg"
            projectURL="mekaniku"
          />
          <Project
            className="bg-red-500"
            projectEnter={projectEnter}
            projectLeave={mouseLeave}
            projectName="MEKANIKU"
            projectDate="2023"
            projectDescription="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
            projectTech={["Backend", "Frontend"]}
            imageURL="/mobile.jpg"
            projectURL="test"
          />
          <Project
            className="bg-gray-500"
            projectEnter={projectEnter}
            projectLeave={mouseLeave}
            projectName="MEKANIKU"
            projectDate="2023"
            projectDescription="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
            projectTech={["Backend", "Frontend"]}
            imageURL="/mobile.jpg"
            projectURL="mekaniku"
          />
          <div className="absolute z-50 top-1/2 -right-[650px] transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center justify-center space-y-5">
              <h3 className="text-black text-6xl font-semibold">Want more?</h3>
              <Link
                href={"/projects"}
                className="button-circle button-circle_outline space-x-5"
              >
                <h2 className="text-black text-xl font-medium">
                  View showcase
                </h2>
                <div
                  className="button-circle__icon"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <div className="base-icon button-circle__base-icon">
                    <div className="base-icon">
                      <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="14"
                          y1="20.5651"
                          x2="25"
                          y2="20.5651"
                          stroke="black"
                          stroke-width="1.21739"
                        ></line>
                        <path
                          d="M20.3203 16L24.8855 20.5652L20.6247 24.8261"
                          stroke="black"
                          stroke-width="1.21739"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="base-icon button-circle__mask-icon">
                    <div className="base-icon">
                      <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="14"
                          y1="20.5651"
                          x2="25"
                          y2="20.5651"
                          stroke="white"
                          stroke-width="1.21739"
                        ></line>
                        <path
                          d="M20.3203 16L24.8855 20.5652L20.6247 24.8261"
                          stroke="white"
                          stroke-width="1.21739"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
