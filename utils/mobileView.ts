/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

function MobileScreenUser(specificScreenSize: number) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= specificScreenSize;
}

export default MobileScreenUser;
