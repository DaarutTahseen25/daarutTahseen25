import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { ChevronDown, LayoutDashboard, Home, User, LogOut } from "lucide-react";

import useUIStore from "../store/useUIStore";
import { useClickOutside } from "../hooks/useClickOutside";
import { useAuth } from "../contexts/AuthContext";
import { truncateEmail } from "../utils/helper";

const HeaderProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDropdownOpen, toggleDropdown, closeDropdown } = useUIStore();
  const ref = useClickOutside(closeDropdown);

  const profile = user?.user || user || null;
  const isLoading = !user;

  const firstName = profile?.full_name?.split(" ")[0] || "Guest";
  const email = truncateEmail(profile?.email || "guest@example.com");
  const userPath = user?.role;
  const isDashboardPage = location.pathname.startsWith(`/${userPath}`);

  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    firstName
  )}&background=ccc&color=444`;

  const handleLogout = () => {
    closeDropdown();
    navigate("/login", { replace: true });
    setTimeout(() => {
      logout();
    }, 100);
  };

  return (
    <div ref={ref} className='relative flex items-center gap-4 cursor-pointer'>
      {/* Trigger Area */}
      <div
        onClick={user ? toggleDropdown : null}
        className='flex items-center gap-4'>
        {/* Avatar */}
        <div className='flex h-10 w-10 rounded-full overflow-hidden'>
          <img
            src={profile?.image || defaultAvatar}
            alt='Profile'
            className='w-full h-full object-cover'
          />
        </div>

        {/* User Info */}
        {isLoading ? (
          <div className='flex flex-col gap-1 items-start text-left md:hidden xl:block'>
            <div className='h-5 w-24 bg-gray-300 rounded animate-pulse' />
            <div className='h-4 w-32 bg-gray-200 rounded animate-pulse' />
          </div>
        ) : (
          <div
            className={`flex flex-col items-start text-left md:hidden xl:block ${
              isDashboardPage ? "hidden" : ""
            }`}>
            <h1 className='font-clash font-medium text-[20px] text-black'>
              {firstName}
            </h1>
            <p className='font-montserrat text-[14px] text-black truncate'>
              {email}
            </p>
          </div>
        )}

        {/* Dropdown Icon */}
        {!isLoading && user && (
          <ChevronDown
            className={`md:hidden xl:block transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            } ${isDashboardPage ? "hidden" : ""}`}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && user && (
        <div
          className={`absolute md:w-[15rem] xl:w-full top-12 right-0 bg-white shadow-md z-10 ${
            isDashboardPage ? "w-[15rem] md:w-[15rem] xl:w-full" : "w-full"
          }`}>
          <Link
            to={`/${userPath}`}
            onClick={closeDropdown}
            className='flex items-center gap-2 py-3 px-4 hover:bg-accent/20 transition'>
            <LayoutDashboard size={18} />
            <span className='font-clash font-medium text-black'>Dashboard</span>
          </Link>

          <Link
            to='/'
            onClick={closeDropdown}
            className='flex items-center gap-2 py-3 px-4 hover:bg-accent/20 transition'>
            <Home size={18} />
            <span className='font-clash font-medium text-black'>Home</span>
          </Link>

          <Link
            to={`/${userPath}/profile`}
            onClick={closeDropdown}
            className='flex items-center gap-2 py-3 px-4 hover:bg-accent/20 transition'>
            <User size={18} />
            <span className='font-clash font-medium text-black'>Profile</span>
          </Link>

          <div
            onClick={handleLogout}
            className='flex items-center gap-2 py-3 px-4 hover:bg-accent/20 cursor-pointer transition'>
            <LogOut size={18} />
            <span className='font-clash font-medium text-black'>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
