import { useEffect } from "react";
import { useLocation } from "react-router";

export const usePageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const formatTitle = (path) => {
      if (path === "/") return "Home | Daaruttahseen";

      let parts = path.slice(1).split("/");

      // Remove "dashboard" if it's the first part
      if (parts[0].toLowerCase() === "dashboard") {
        parts.shift();
      }

      const formatted = parts
        .map((part) =>
          part
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        )
        .join(" | ");

      const finalTitle = formatted
        ? `${formatted} | Daaruttahseen`
        : "Daaruttahseen";
      return finalTitle;
    };

    document.title = formatTitle(pathname);
  }, [pathname]);
};
