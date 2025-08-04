import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const DashboardSidebarLink = ({ icon, label, to, disabled = false }) => {
  const { user } = useAuth();
  const baseClasses =
    "flex items-center px-7 gap-3 w-full h-10 rounded-md transition-colors duration-200";

  const activeClasses = "bg-primary text-white";
  const hoverClasses = "hover:bg-primary hover:text-white";
  const disabledClasses = "text-gray-400 cursor-not-allowed opacity-50";

  // Render disabled as non-clickable div
  if (disabled) {
    return (
      <div className={`${baseClasses} ${disabledClasses}`}>
        <span className='flex items-center justify-center'>{icon}</span>
        <span>{label}</span>
      </div>
    );
  }

  // Render logout button if `to` is missing
  if (!to) {
    return (
      <button className={`${baseClasses} ${hoverClasses} text-dark-grey`}>
        <span className='flex items-center justify-center'>{icon}</span>
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
        `${baseClasses} text-dark-grey ${hoverClasses} ${
          isActive ? activeClasses : ""
        }`
      }>
      <span className='flex items-center justify-center'>{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default DashboardSidebarLink;
