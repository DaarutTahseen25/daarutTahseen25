// components/DashboardSidebarLink.jsx
import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const DashboardSidebarLink = ({ icon, label, to, disabled = false }) => {
  const { user } = useAuth();

  const baseClasses =
    "flex items-center px-3 gap-3 w-full py-2.5 rounded-lg font-normal text-sm transition-colors";
  const activeClasses = "bg-primary/10 text-primary font-medium";
  const hoverClasses = "hover:bg-gray-50";
  const disabledClasses = "text-gray-300 cursor-not-allowed opacity-60";

  // 🚫 Disabled link (e.g., requires level but user has none)
  if (disabled) {
    return (
      <div className={`${baseClasses} ${disabledClasses}`}>
        <span className="flex items-center justify-center text-lg">{icon}</span>
        <span>{label}</span>
      </div>
    );
  }

  // 🔘 Button-style item (like Logout) without a `to` prop
  if (!to) {
    return (
      <button
        type="button"
        className={`${baseClasses} text-gray-600 ${hoverClasses}`}
      >
        <span className="flex items-center justify-center text-lg">{icon}</span>
        <span>{label}</span>
      </button>
    );
  }

  // Determine if this link is exactly the role root (e.g. /student, /teacher, /admin)
  const isExact = user?.role && to === `/${user?.role || "aspirant"}`;

  return (
    <NavLink
      to={to}
      {...(isExact ? { end: true } : {})}
      className={({ isActive }) =>
        `${baseClasses} text-gray-600 ${hoverClasses} ${
          isActive ? activeClasses : ""
        }`
      }
    >
      <span className="flex items-center justify-center text-lg">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default DashboardSidebarLink;
