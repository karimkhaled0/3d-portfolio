"use client";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ScrollBarCanvas = ({ children }: Props) => {
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [scrolled, setScrolled] = useState<number>(0);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [scrollPer, setScrollPer] = useState<number>(0);

  useEffect(() => {
    const container = document.getElementById(
      "scrollContainer"
    ) as HTMLDivElement;
    const canvas = document.getElementById("canvasScroll") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const canvasSize = 800;
    const containerSize = 943; // Set your container height here
    container.style.height = containerSize + "px";
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    const render = () => {
      setContainerHeight(container.clientHeight);
      setScrolled(container.scrollTop);
      setContentHeight(container.scrollHeight);
      setScrollPer(scrolled / (contentHeight - containerHeight));

      const canvasRadius = canvasSize / 2;
      const canvasCenter = { x: canvasRadius, y: canvasRadius };

      ctx!.clearRect(0, 0, canvasSize, canvasSize);
      ctx!.lineWidth = 5;
      makeArc(
        "#666666",
        canvasCenter.x,
        canvasCenter.y,
        canvasRadius - 10,
        0,
        2 * Math.PI
      );
      makeArc(
        "#FFFFFF",
        canvasCenter.x,
        canvasCenter.y,
        canvasRadius - 10,
        (scrollPer - 0.1) * 2 * Math.PI,
        scrollPer * 2 * Math.PI
      );
    };

    const makeArc = (
      color: string,
      x: number,
      y: number,
      radius: number,
      startAngle: number,
      endAngle: number
    ) => {
      ctx!.beginPath();
      ctx!.strokeStyle = color;
      ctx!.arc(x, y, radius, startAngle, endAngle);
      ctx!.stroke();
    };

    container.addEventListener("scroll", render);
    render();

    return () => {
      container.removeEventListener("scroll", render);
    };
  }, [scrolled, contentHeight, containerHeight, scrollPer]);

  return (
    <div
      className="relative h-screen"
      id="scrollContainer"
      style={{ overflowY: "auto" }}
    >
      <canvas
        id="canvasScroll"
        className="rotate-[-72deg] sticky top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2"
      ></canvas>
      <div className="text-xl text-white">{children}</div>
    </div>
  );
};

export default ScrollBarCanvas;
