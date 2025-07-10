import React from "react";
import { NavLink } from "react-router";

const DashboardSidebarLink = ({ icon, label, to }) => {
  const baseClasses =
    "flex items-center px-7 gap-3 w-full h-10  rounded-md text-dark-grey hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer ";

  if (!to) {
    return (
      <button
        className={baseClasses}
        onClick={() => console.log("Logging out...")}
      >
        <span className="flex items-center justify-center">{icon}</span>
        <span>{label}</span>
      </button>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${isActive ? "bg-primary text-white" : ""}`
      }
    >
      <span className="flex items-center justify-center">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default DashboardSidebarLink;
