import { useState, useEffect } from "react";

/**
 * This hook uses a window resize event listener to return whether the screen
 * has a small size (less than 768px, such as portrait tablets, large phones etc)
 */
export default function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768 ? true : false);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
}
