import { useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export const usePageTitle = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  const pageTitle = useMemo(() => {
    // Defensive: user.role might be undefined/null
    const role = user?.role?.toLowerCase() || "";

    if (pathname === "/") return "Home | Daaruttahseen";

    const parts = pathname.slice(1).split("/").filter(Boolean);

    if (parts[0]?.toLowerCase() === role) {
      parts.shift();
    }

    if (parts.length === 0) return "Daaruttahseen";

    const formatted = parts
      .map((part) =>
        part
          .replace(/-/g, " ")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      )
      .join(" | ");

    return `${formatted} | Daaruttahseen`;
  }, [pathname, user?.role]);

  useEffect(() => {
    console.log("Setting document title:", pageTitle); // Debug log
    document.title = pageTitle;
  }, [pageTitle]);
};
