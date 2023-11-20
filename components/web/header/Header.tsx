import Link from "next/link";
import Logo from "./Logo";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {};

const Header = (props: Props) => {
  const [activeLink, setActiveLink] = useState("/");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`h-20 bg-[hsla(0,0%,100%,.5)] backdrop-blur-sm items-center text-white flex fixed 
      top-0 left-0 transition-all duration-250 ease-in-out w-full transform will-change z-50 ${
        visible ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <div className="h-full w-full overflow-hidden relative">
        <div className="items-center flex h-full left-0 top-0">
          <div className="w-full">
            <div className="items-center flex w-full">
              <Logo />

              <div className="flex items-center space-x-10 text-black z-50">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
