"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {};

const Header = (props: Props) => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <header id="nav" className="sticky h-20 inset-x-0 top-0 z-50">
      <nav
        className="flex flex-col sm:flex-row items-center 
      p-5 pl-2 mx-auto space-y-5 sm:space-y-0"
      >
        <Logo />

        <div className="flex items-center space-x-10">
          <Link href="/#">
            <h2
              className={cn(
                "font-bold",
                activeLink === "/#" && "text-violet-500"
              )}
            >
              Home
            </h2>
          </Link>
          <Link
            className={cn(
              "font-bold",
              activeLink === "/#projects" && "text-violet-500"
            )}
            href="/#projects"
          >
            <h2>Projects</h2>
          </Link>
          <Link
            className={cn(
              "font-bold",
              activeLink === "/#about" && "text-violet-500"
            )}
            href="/#about"
          >
            <h2>About</h2>
          </Link>

          <Link
            className={cn(
              "font-bold",
              activeLink === "/#contact" && "text-violet-500"
            )}
            href="/#contact"
          >
            <h2>Contact</h2>
          </Link>
        </div>

        {/* <div className="flex-1 flex items-center justify-end space-x-4">
          <DarkModeToggle />
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
