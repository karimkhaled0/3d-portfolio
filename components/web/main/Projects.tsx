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
            splineURL="https://prod.spline.design/kMnroCyRbU61pnpW/scene.splinecode"
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
            splineURL="https://prod.spline.design/kMnroCyRbU61pnpW/scene.splinecode"
            projectURL="mekaniku"
          />
          <Project
            className="bg-gray-500"
            projectEnter={projectEnter}
            projectLeave={mouseLeave}
            projectName="MEKANIKU"
            projectDate="2023"
            projectDescription="An innovative real-estate development company that focuses on constructing sustainable and cost-effective properties while minimizing environmental impacts."
            projectTech={["Backend", "Frontend"]}
            splineURL="https://prod.spline.design/kMnroCyRbU61pnpW/scene.splinecode"
            projectURL="mekaniku"
          />
          <div className="absolute z-50 top-1/2 -right-[650px] transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center justify-center space-y-5">
              <h3 className="text-black text-6xl font-medium">Want More?</h3>
              <Link href={"/projects"} className="flex items-center space-x-5">
                <span className="text-2xl">View showcase</span>
                <motion.div
                  whileHover={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                  transition={{ duration: 2 }}
                  className="border border-gray-500 p-2 rounded-full"
                >
                  <ArrowRight className="h-7 w-7" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
