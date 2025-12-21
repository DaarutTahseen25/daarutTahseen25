import React, { useMemo, useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { ChevronDown, LayoutDashboard, Home, User, LogOut } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import useUIStore from "../store/useUIStore";
import { useClickOutside } from "../hooks/useClickOutside";
import { useAuth } from "../contexts/AuthContext";
import { truncateEmail } from "../utils/helper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import Button from "./Button";

const HeaderProfile = React.memo(() => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDropdownOpen, toggleDropdown, closeDropdown } = useUIStore();
  const ref = useClickOutside(closeDropdown);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const profile = user?.user || user || null;
  const isLoading = !user;

  const { firstName, email, userPath, isDashboardPage, defaultAvatar } =
    useMemo(() => {
      const fn = profile?.full_name?.split(" ")[0] || "Guest";
      const mail = truncateEmail(profile?.email || "guest@example.com");
      const path = user?.role || "";
      const isDash = path ? location.pathname.startsWith(`/${path}`) : false;
      const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        fn
      )}&background=ccc&color=444`;

      return {
        firstName: fn,
        email: mail,
        userPath: path,
        isDashboardPage: isDash,
        defaultAvatar: avatar,
      };
    }, [profile, user, location.pathname]);

  const handleLogout = useCallback(() => {
    closeDropdown();
    setShowLogoutDialog(true);
  }, [closeDropdown]);

  const confirmLogout = useCallback(() => {
    setShowLogoutDialog(false);
    navigate("/login", { replace: true });
    setTimeout(() => logout(), 100);
  }, [navigate, logout]);

  return (
    <div
      ref={ref}
      className="relative flex items-center gap-3 cursor-pointer select-none"
    >
      {/* Profile Trigger */}
      <div
        onClick={user ? toggleDropdown : undefined}
        className="flex items-center gap-3 group"
        role="button"
        tabIndex={0}
      >
        {/* Avatar */}
        <div className="flex h-10 w-10 rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-gray-300 transition">
          {isLoading ? (
            <Skeleton circle height={40} width={40} />
          ) : (
            <img
              src={profile?.image || defaultAvatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* User Info */}
        {!isDashboardPage &&
          (isLoading ? (
            <div className="hidden xl:flex flex-col gap-1">
              <Skeleton height={20} width={100} />
              <Skeleton height={16} width={130} />
            </div>
          ) : (
            <div className="hidden xl:flex flex-col items-start">
              <span className="font-clash font-medium text-[16px] text-gray-900">
                {firstName}
              </span>
              <span className="font-montserrat text-[14px] text-gray-500 truncate">
                {email}
              </span>
            </div>
          ))}

        {/* Chevron Icon */}
        {!isLoading && user && !isDashboardPage && (
          <ChevronDown
            className={`hidden xl:block text-gray-500 transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && user && (
        <div
          className={`
            absolute top-12 right-0 bg-white shadow-lg rounded-lg overflow-hidden
            w-60 z-[1000] animate-scale-fade
          `}
        >
          <DropdownItem
            to={`/${userPath}`}
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            onClick={closeDropdown}
          />
          <DropdownItem
            to="/"
            icon={<Home size={18} />}
            label="Home"
            onClick={closeDropdown}
          />
          <DropdownItem
            to={`/${userPath}/profile`}
            icon={<User size={18} />}
            label="Profile"
            onClick={() => {
              closeDropdown();
              navigate(`/${userPath}/profile`);
            }}
          />
          <DropdownAction
            icon={<LogOut size={18} />}
            label="Logout"
            onClick={handleLogout}
          />
        </div>
      )}

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
    </div>
  );
});

const DropdownItem = ({ to, icon, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-3 py-3 px-5 hover:bg-gray-50 transition-colors text-gray-700"
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
);

const DropdownAction = ({ onClick, icon, label }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 py-3 px-5 w-full hover:bg-gray-50 transition-colors text-left text-gray-700"
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

HeaderProfile.displayName = "HeaderProfile";

export default HeaderProfile;
