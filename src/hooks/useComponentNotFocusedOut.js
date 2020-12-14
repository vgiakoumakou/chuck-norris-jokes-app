import { useState, useEffect, useRef } from "react";

/**
 * This hook returns whether a specific element is focused out
 * (because the user clicked out of it in the document)
 */
export default function useComponentNotFocusedOut(initialIsVisible) {
  const [isComponentNotFocusedOut, setIsComponentNotFocusedOut] = useState(
    initialIsVisible
  );
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsComponentNotFocusedOut(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentNotFocusedOut(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentNotFocusedOut, setIsComponentNotFocusedOut };
}
