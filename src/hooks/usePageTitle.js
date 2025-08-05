import { useEffect } from "react";
import { useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export const usePageTitle = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    const formatTitle = (path) => {
      if (path === "/") return "Home | Daaruttahseen";

      let parts = path.slice(1).split("/");

      if (parts[0].toLowerCase() === `${user?.role}`) {
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
