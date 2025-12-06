// components/HomeSidebar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { LogOut, X, LayoutGrid } from "lucide-react";

import Button from "./Button";
import useUIStore from "../store/useUIStore";
import { useAuth } from "../contexts/AuthContext";
import { getDashboardSidebarLinks } from "../utils/GetLinks";
import { landingLinks } from "../utils/sidebarConfig";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export default function HomeSidebar() {
  const { logout, user } = useAuth();
  const { isSidebarOpen, closeSidebar } = useUIStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const profile = user?.user || user || null;
  const firstName = profile?.full_name?.split(" ")[0] || "Guest";
  const role = profile?.role;
  const isDashboardPage = role
    ? location.pathname.startsWith(`/${role}`)
    : false;

  const links =
    user && role && isDashboardPage
      ? getDashboardSidebarLinks(role, profile)
      : landingLinks;

  const handleLogout = () => {
    closeSidebar();
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    setShowLogoutDialog(false);
    navigate("/login", { replace: true });
    setTimeout(() => logout(), 100);
  };

  useEffect(() => {
    if (!isSidebarOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed lg:hidden inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`fixed lg:hidden top-0 right-0 h-screen w-80 bg-white shadow-xl z-50 flex flex-col border-l border-gray-200 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <img src="/logo.png" alt="Logo" className="w-20 h-auto" />
            <button
              onClick={closeSidebar}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
              aria-label="Close Sidebar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-4 overflow-y-auto">
            <ul className="flex flex-col gap-1 px-3">
              {links.map((item) => (
                <li key={item.key}>
                  <NavLink
                    to={item.to}
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg font-normal text-sm transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      } ${
                        item.requiresLevel && !user?.level
                          ? "opacity-60 cursor-not-allowed"
                          : ""
                      }`
                    }
                    {...(item.requiresLevel && !user?.level
                      ? { onClick: (e) => e.preventDefault() }
                      : {})}
                  >
                    <span className="flex items-center justify-center text-lg">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile & Logout Section */}
          <div className="mt-auto border-t border-gray-200 p-4">
            {/* User Profile */}
            <div className="flex items-center gap-3 mb-3 px-2 py-2">
              <img
                src={profile?.image || "/default-avatar.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-sm truncate">
                  {firstName}
                </h3>
                <p className="text-xs text-gray-500 capitalize">{role}</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <LogOut size={16} />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent className="max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>
              Are you sure you want to logout? You will need to sign in again to
              access your account.
            </DialogDescription>
          </DialogHeader>

          <div className="flex gap-3 mt-4">
            <Button
              onClick={() => setShowLogoutDialog(false)}
              variant="outline"
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmLogout}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
