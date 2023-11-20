"use client";

import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";
import { useRouter } from "next/navigation";
import { MouseEvent, Suspense } from "react";

type Props = {
  projectEnter: (event: MouseEvent<HTMLDivElement>) => void;
  projectLeave: (event: MouseEvent<HTMLDivElement>) => void;
  splineURL: string;
  projectName: string;
  projectDescription: string;
  projectDate: string;
  projectTech: string[];
  className: string;
  projectURL: string;
};

const Project = ({
  projectEnter,
  projectLeave,
  splineURL,
  projectName,
  projectDescription,
  projectDate,
  projectTech,
  className,
  projectURL,
}: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/projects/${projectURL}`)}
      className={cn(
        "relative h-screen w-[90vw] project cursor-pointer",
        className
      )}
      onMouseEnter={projectEnter}
      onMouseLeave={projectLeave}
    >
      {/* Model */}
      <div className="">
        <Suspense fallback={null}>
          <Spline scene={splineURL} />
        </Suspense>
      </div>

      {/* Project Details */}
      <div className="flex items-stretch justify-between absolute bottom-0 bg-gradient-to-b from-transparent to-black/70 w-full h-[500px] text-white">
        {/* Project name and details */}
        <div className="space-y-20 mx-20 self-end my-20">
          <h2 className="text-7xl font-bold">{projectName}</h2>
          <p className="text-lg font-bold w-[750px]">{projectDescription}</p>
        </div>
        {/* Date and tech */}
        <div className="space-y-20 mx-20 self-end my-20 flex flex-col flex-nowrap items-end justify-center">
          <h2 className="text-xl border border-white px-10 py-2 rounded-full">
            {projectDate}
          </h2>
          <div className="flex items-center space-x-5">
            {projectTech.map((tech) => (
              <h2
                key={tech}
                className="text-2xl border border-white px-20 py-2 rounded-full"
              >
                {tech}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
