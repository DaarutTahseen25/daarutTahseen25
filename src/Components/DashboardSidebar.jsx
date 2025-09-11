// components/DashboardSidebar.jsx
import React from "react";
import { useNavigate } from "react-router";
import { LogOut } from "lucide-react";

import DashboardSidebarLink from "./DashboardSidebarLink";
import { useAuth } from "../contexts/AuthContext";
import { getDashboardSidebarLinks } from "../utils/GetLinks";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const role = user?.role;

  const handleLogout = () => {
    // navigate first, then log out
    navigate("/login", { replace: true });
    setTimeout(() => logout(), 100);
  };

  // pulls only dashboard links for the user’s role
  const links = getDashboardSidebarLinks(role, user);

  return (
    <aside className="bg-white hidden lg:block md:row-span-full border-r border-gray-300 h-full relative overflow-hidden">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center h-[120px]">
        <img src="/logo.png" alt="Logo" className="w-28" />
      </div>

      {/* Navigation */}
      <nav className="w-full py-4">
        <ul className="flex flex-col gap-3 w-[90%] mx-auto">
          {links.map((item) => (
            <li key={item.key}>
              <DashboardSidebarLink
                icon={item.icon}
                label={item.label}
                to={item.to}
                // disable link if it requires level but user has no level yet
                disabled={item.requiresLevel && !user?.level}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="py-4 border-t border-gray-300">
        <ul className="flex flex-col gap-3 w-[90%] mx-auto">
          <li
            onClick={handleLogout}
            className="cursor-pointer group relative hover:scale-[1.02] transition-all duration-300"
          >
            <DashboardSidebarLink icon={<LogOut size={20} />} label="Log out" />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
