// components/DashboardSidebar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LogOut } from "lucide-react";

import DashboardSidebarLink from "./DashboardSidebarLink";
import { useAuth } from "../contexts/AuthContext";
import { getDashboardSidebarLinks } from "../utils/GetLinks";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import Button from "./Button";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const role = user?.role || "aspirant";
  const profile = user?.user || user;
  const firstName = profile?.full_name?.split(" ")[0] || "User";

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    setShowLogoutDialog(false);
    navigate("/login", { replace: true });
    setTimeout(() => logout(), 100);
  };

  // pulls only dashboard links for the user's role
  const links = getDashboardSidebarLinks(role, user);

  return (
    <aside className="bg-white hidden lg:flex lg:flex-col md:row-span-full h-full border-r border-gray-200">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 flex items-center justify-center h-[100px] border-b border-gray-200">
          <img src="/logo.png" alt="Logo" className="w-24 h-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="flex flex-col gap-1 px-3">
            {links.map((item) => (
              <li key={item.key}>
                <DashboardSidebarLink
                  icon={item.icon}
                  label={item.label}
                  to={item.to}
                  disabled={item.requiresLevel && !user?.level}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="mt-auto border-t border-gray-200 p-4">
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
    </aside>
  );
};

export default DashboardSidebar;
