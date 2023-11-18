"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const MobileHeader = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState("/");
  const outSide = useRef(null);
  const handleClickOutside = () => {
    setOpen((prev) => !prev);
  };

  const handleClickInside = () => {
    setOpen((prev) => !prev);
  };

  useOnClickOutside(outSide, handleClickOutside);

  const pathname = usePathname();

  return (
    <div>
      <Menu
        onClick={handleClickInside}
        className="relative z-50 h-5 w-5 text-zinc-700 m-5"
      />

      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-40 w-full">
          <ul
            ref={outSide}
            className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8"
          >
            <li>
              <Link
                className={cn(
                  "flex items-center w-full font-semibold",
                  activeLink === "/#" && "text-violet-500"
                )}
                href="/#"
              >
                Home
              </Link>
            </li>
            <li className="my-3 h-px w-full bg-gray-300" />
            <li>
              <Link
                className={cn(
                  "flex items-center w-full font-semibold",
                  activeLink === "/#projects" && "text-violet-500"
                )}
                href="/#projects"
              >
                Projects
              </Link>
            </li>
            <li className="my-3 h-px w-full bg-gray-300" />
            <li>
              <Link
                className={cn(
                  "flex items-center w-full font-semibold",
                  activeLink === "/#about" && "text-violet-500"
                )}
                href="/#about"
              >
                About
              </Link>
            </li>
            <li className="my-3 h-px w-full bg-gray-300" />
            <li>
              <Link
                className={cn(
                  "flex items-center w-full font-semibold",
                  activeLink === "/#contact" && "text-violet-500"
                )}
                href="/#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileHeader;
