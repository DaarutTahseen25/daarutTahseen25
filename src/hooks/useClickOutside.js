import { useEffect, useRef, useCallback } from "react";

export function useClickOutside(handler, shouldHandle = true) {
  const ref = useRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        (typeof shouldHandle === "function" ? shouldHandle() : shouldHandle)
      ) {
        handler();
      }
    },
    [handler, shouldHandle]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return ref;
}
