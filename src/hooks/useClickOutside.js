import { useEffect, useRef } from "react";

export function useClickOutside(handler, shouldHandle = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        (typeof shouldHandle === "function" ? shouldHandle() : shouldHandle)
      ) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, shouldHandle]);

  return ref;
}
