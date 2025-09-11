// components/HomeSidebar.jsx
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router"; // ✅ correct package
import { LogOut, X, LayoutGrid } from "lucide-react";

import Button from "./Button";
import useUIStore from "../store/useUIStore";
import { useAuth } from "../contexts/AuthContext";
import { truncateEmail } from "../utils/helper";
import { getDashboardSidebarLinks } from "../utils/GetLinks"; // ✅ updated helper
import { landingLinks } from "../utils/sidebarConfig"; // ✅ use shared landing links

export default function HomeSidebar() {
  const { logout, user } = useAuth();
  const { isSidebarOpen, closeSidebar } = useUIStore();
  const navigate = useNavigate();
  const location = useLocation();

  const profile = user?.user || user || null;
  const firstName = profile?.full_name?.split(" ")[0] || "Guest";
  const email = truncateEmail(profile?.email || "guest@example.com");
  const role = profile?.role;
  const isDashboardPage = role
    ? location.pathname.startsWith(`/${role}`)
    : false;

  // Use dashboard links if user is in dashboard, otherwise landing links
  const links =
    user && role && isDashboardPage
      ? getDashboardSidebarLinks(role, profile)
      : landingLinks;

  const handleLogout = () => {
    closeSidebar();
    navigate("/login", { replace: true });
    setTimeout(() => logout(), 100);
  };

  // Lock scroll and add keyframes when sidebar opens
  useEffect(() => {
    if (!isSidebarOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideInRight {
        from {opacity:0; transform:translateX(20px);}
        to {opacity:1; transform:translateX(0);}
      }
      @keyframes fadeIn {from{opacity:0;} to{opacity:1;}}
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.head.removeChild(style);
    };
  }, [isSidebarOpen]);

  if (!isSidebarOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed lg:hidden inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 animate-[fadeIn_0.3s_ease-out]"
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside className="fixed lg:hidden top-0 right-0 h-screen w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 p-6 flex flex-col justify-between border-l border-gray-200/50 transform transition-transform duration-300 animate-[slideInRight_0.3s_ease-out]">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="h-1 w-12 bg-accent rounded-full"></div>
          <button
            onClick={closeSidebar}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition"
            aria-label="Close Sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-2">
          {links.map((item, i) => (
            <Link
              key={item.key}
              to={item.to}
              onClick={closeSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-50 hover:shadow-sm transition transform hover:translate-x-1"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item.icon}
              <span className="font-medium text-gray-700 group-hover:text-gray-900">
                {item.label}
              </span>
            </Link>
          ))}

          {/* Dashboard shortcut when on public pages */}
          {!isDashboardPage && role && (
            <Link
              to={`/${role}`}
              onClick={closeSidebar}
              className="flex items-center gap-3 mt-2 px-4 py-3 rounded-xl border border-primary/50 hover:bg-green-50 transition"
            >
              <LayoutGrid size={20} />
              <span className="font-semibold text-primary">Dashboard</span>
            </Link>
          )}
        </nav>

        {/* Bottom section */}
        <div className="space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          {user ? (
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-4">
                <img
                  src={profile?.image}
                  alt="Profile"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-200 shadow-md"
                />
                <div>
                  <h1 className="font-semibold text-gray-900">{firstName}</h1>
                  <p className="text-sm text-gray-600 bg-white px-2 py-1 rounded-md">
                    {email}
                  </p>
                </div>
              </li>
              <li
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 cursor-pointer text-red-600 hover:text-red-700 border border-red-200/50"
              >
                <LogOut size={20} />
                <span className="font-medium">Log out</span>
              </li>
            </ul>
          ) : (
            <Link to="/login" onClick={closeSidebar}>
              <Button className="w-full bg-primary text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition hover:scale-105">
                Login / Register
              </Button>
            </Link>
          )}
        </div>
      </aside>
    </>
  );
}
