import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const DashboardSidebarLink = ({ icon, label, to, disabled = false }) => {
  const { user } = useAuth();

  const baseClasses =
    "flex items-center px-6 gap-3 w-full h-11 rounded-lg font-medium transition-all duration-300";

  const activeClasses = "bg-primary text-white shadow-md";
  const hoverClasses = "hover:bg-primary hover:text-white hover:scale-[1.02]";
  const disabledClasses =
    "text-gray-400 cursor-not-allowed opacity-50 bg-gray-100";

  // Disabled link
  if (disabled) {
    return (
      <div className={`${baseClasses} ${disabledClasses}`}>
        <span className="flex items-center justify-center text-lg">{icon}</span>
        <span>{label}</span>
      </div>
    );
  }

  // Button (e.g., logout)
  if (!to) {
    return (
      <button className={`${baseClasses} text-dark-grey ${hoverClasses}`}>
        <span className="flex items-center justify-center text-lg">{icon}</span>
        <span>{label}</span>
      </button>
    );
  }

  const isExact = to === `/${user.role}`;

  return (
    <NavLink
      to={to}
      {...(isExact ? { end: true } : {})}
      className={({ isActive }) =>
        `${baseClasses} text-[#A9A9A9] ${hoverClasses} ${
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
