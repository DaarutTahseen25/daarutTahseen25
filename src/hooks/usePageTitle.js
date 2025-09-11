// hooks/usePageTitle.js
import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | DaaruTahseen` : "DaaruTahseen";
  }, [title]);
}
