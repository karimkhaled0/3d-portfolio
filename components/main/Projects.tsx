import React from "react";
import Project from "./Project";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div>
      <Project id={"blue"} className="bg-[#1A3762] text-white" />
      <Project id={"green"} className="bg-green-500 text-white" />
      <Project id={"red"} className="bg-red-500 text-white" />
    </div>
  );
};

export default Projects;
