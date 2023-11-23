import { MouseEvent } from "react";

type Props = {
  mouse: {
    x: number | null;
    y: number | null;
    clientX: number | null;
    clientY: number | null;
  };
  setCursorText: (text: string) => void;
  setCursorVariant: (variant: string) => void;
};

const customCursor = ({ mouse, setCursorText, setCursorVariant }: Props) => {
  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX || 0;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY || 0;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: "16px",
      backgroundColor: "#fff",
      x: mouseXPosition - 8,
      y: mouseYPosition - 8,
      transition: {
        type: "spring",
        mass: 0.2,
      },
      mixBlendMode: "difference" as const,
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      color: "#000",
      height: 150,
      width: 150,
      fontSize: "30px",
      lineHeight: "40px",
      x: mouseXPosition - 70,
      y: mouseYPosition - 70,
      backgroundColor: "#fff",
    },
  };

  const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 28,
  };

  function projectEnter(event: MouseEvent<HTMLDivElement>) {
    setCursorText("See Project");
    setCursorVariant("project");
  }

  function mouseLeave(event: MouseEvent<HTMLDivElement>) {
    setCursorText("");
    setCursorVariant("default");
  }

  return {
    variants,
    spring,
    projectEnter,
    mouseLeave,
  };
};

export default customCursor;
