import React from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, LayoutDashboard, Home, User, LogOut } from "lucide-react";

import useUIStore from "../store/useUIStore";
import { useClickOutside } from "../hooks/useClickOutside";
import { useAuth } from "../contexts/AuthContext";
import { truncateEmail } from "../utils/helper";

const HeaderProfile = () => {
  const { user, logout } = useAuth();

  const profile = user?.user || user || null;
  const role = profile?.role;
  const isLoading = !user;

  const firstName = profile?.full_name?.split(" ")[0] || "Guest";
  const email = truncateEmail(profile?.email || "guest@example.com");

  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const { isDropdownOpen, toggleDropdown, closeDropdown } = useUIStore();

  const ref = useClickOutside(closeDropdown);

  const defaultAvatar =
    "https://ui-avatars.com/api/?name=G+U&background=ccc&color=444";

  return (
    <div ref={ref} className='relative flex items-center gap-4 cursor-pointer'>
      {/* Trigger Area */}
      <div
        onClick={user ? toggleDropdown : null}
        className='flex items-center gap-4'>
        <div className='flex h-10 w-10 rounded-full overflow-hidden'>
          <img
            src={profile?.image || defaultAvatar}
            alt='Profile'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Info */}
        {isLoading ? (
          <div className='flex flex-col gap-1 items-start text-left md:hidden xl:block'>
            <div className='h-5 w-24 bg-gray-300 rounded animate-pulse' />
            <div className='h-4 w-32 bg-gray-200 rounded animate-pulse' />
          </div>
        ) : (
          <div
            className={`flex flex-col gap-0 items-start text-left md:hidden xl:block ${
              isDashboardPage ? "hidden" : ""
            }`}>
            <h1 className='font-clash font-[500] text-[20px] text-black'>
              {firstName}
            </h1>
            <p className='font-montserrat font-[400] truncate text-[14px] text-black'>
              {email}
            </p>
          </div>
        )}

        {/* Dropdown Icon */}
        {!isLoading && user && (
          <ChevronDown
            className={`md:hidden xl:block transition-transform duration-300 ease-in-out ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            } ${isDashboardPage ? "hidden" : ""}`}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && user && (
        <div
          className={`absolute md:w-[15rem] xl:w-full top-12 right-0 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] flex flex-col z-10 ${
            isDashboardPage ? "w-[15rem] md:w-[15rem] xl:w-full" : "w-full"
          }`}>
          <Link
            to={`/dashboard/${role}`}
            className='flex items-center gap-2 py-[0.76rem] px-4 hover:bg-accent/20 transition-colors duration-200'
            onClick={closeDropdown}>
            <LayoutDashboard size={18} />
            <span className='font-clash font-[500] text-black'>Dashboard</span>
          </Link>

          <Link
            to='/'
            className='flex items-center gap-2 py-[0.76rem] px-4 hover:bg-accent/20 transition-colors duration-200'
            onClick={closeDropdown}>
            <Home size={18} />
            <span className='font-clash font-[500] text-black'>Home</span>
          </Link>

          <Link
            to='/dashboard/profile'
            className='flex items-center gap-2 py-[0.76rem] px-4 hover:bg-accent/20 transition-colors duration-200'
            onClick={closeDropdown}>
            <User size={18} />
            <span className='font-clash font-[500] text-black'>Profile</span>
          </Link>

          <div
            className='flex items-center gap-2 py-[0.76rem] px-4 hover:bg-accent/20 transition-colors duration-200 cursor-pointer'
            onClick={() => {
              closeDropdown();
              logout();
            }}>
            <LogOut size={18} />
            <span className='font-clash font-[500] text-black'>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
