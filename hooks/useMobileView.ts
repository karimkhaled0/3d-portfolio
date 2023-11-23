/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

function useMobileView() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobile = userAgent.includes("Mobile");

    setIsMobile(mobile);
  }, []);

  return isMobile;
}

export default useMobileView;
