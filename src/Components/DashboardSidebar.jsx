import React from "react";
import { useNavigate } from "react-router";

import DashboardSidebarLink from "./DashboardSidebarLink";
import { LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { getDashboardSidebarLinks } from "../utils/GetLinks";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const role = user?.role;

  const handleLogout = () => {
    navigate("/login", { replace: true });
    setTimeout(() => {
      logout();
    }, 100);
  };

  return (
    <aside className="bg-white hidden lg:block md:row-span-full border-r border-gray-300 h-full relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-4 w-32 h-32 bg-gray-700 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 right-4 w-24 h-24 bg-black rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-gray-500 rounded-full blur-xl animate-pulse transform -translate-x-1/2 -translate-y-1/2"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="flex flex-col justify-between h-full relative z-10">
        {/* Top Section: Logo and Navigation */}
        <div>
          {/* Enhanced logo section */}
          <div className="p-4 flex items-center justify-center h-[120px] relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg mx-2" />
            <div className="relative transform group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logo.png"
                alt="DaarutTahseen Logo"
                className="drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </div>
          </div>

          {/* Enhanced navigation */}
          <nav className="w-full py-4 mt-4 relative">
            {/* Navigation background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-transparent opacity-50" />

            <ul className="flex flex-col gap-3 w-[90%] mx-auto relative z-10">
              {getDashboardSidebarLinks(role).map((item, index) => (
                <li
                  key={item.key}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "slideInLeft 0.6s ease-out forwards",
                  }}
                  className="transform"
                >
                  <div className="group relative">
                    <DashboardSidebarLink
                      icon={item.icon}
                      label={item.label}
                      to={item.to}
                      disabled={item.requiresLevel && !user?.level}
                    />

                    {/* Hover indicator line */}
                    <div className="absolute left-0 top-1/2 w-0 h-8 bg-gray-700 rounded-r-full group-hover:w-1 transition-all duration-300 transform -translate-y-1/2 opacity-0 group-hover:opacity-100" />

                    {/* Disabled state overlay */}
                    {item.requiresLevel && !user?.level && (
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-gray-500 font-medium bg-white px-2 py-1 rounded-md shadow-sm border border-gray-200">
                          Level Required
                        </span>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Enhanced Bottom Section: Logout */}
        <div className="py-4 border-t border-gray-300 relative">
          {/* Elegant border enhancement */}
          <div className="absolute top-0 left-1/2 w-16 h-px bg-gray-700 transform -translate-x-1/2 -translate-y-1/2" />

          <ul className="flex flex-col gap-3 w-[90%] mx-auto">
            <li
              onClick={handleLogout}
              className="cursor-pointer group relative transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-red-50/50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
              <div className="relative">
                <DashboardSidebarLink
                  icon={
                    <LogOut
                      size={20}
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                  }
                  label="Log out"
                />
              </div>

              {/* Logout warning indicator */}
              <div className="absolute right-2 top-1/2 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 transform -translate-y-1/2" />
            </li>
          </ul>

          {/* Decorative bottom elements */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
            <div
              className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="w-1 h-1 bg-gray-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-1 h-1 bg-gray-700 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="w-1 h-1 bg-gray-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
            <div
              className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </aside>
  );
};

export default DashboardSidebar;
