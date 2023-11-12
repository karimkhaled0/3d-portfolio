"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-64  xl:h-[850px] xl:w-[850px] animate-pulse opacity-20" />
    </div>
  );
};

export default BackgroundCircles;
