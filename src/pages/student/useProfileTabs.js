// src/pages/Profile/useProfileTabs.js
import { useState } from "react";

export const useProfileTabs = () => {
  const [tabs, setTabs] = useState([
    { id: 1, label: "profile", isActive: true },
    { id: 2, label: "security", isActive: false },
    { id: 3, label: "notifications", isActive: false },
  ]);

  const activeId = tabs.find((tab) => tab.isActive)?.id || tabs[0].id;

  const toggleActive = (id) => {
    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === id ? { ...tab, isActive: true } : { ...tab, isActive: false }
      )
    );
  };

  const tabsState = { activeId, tabs, toggleActive };

  return tabsState;
};
