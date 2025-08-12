import React, { useMemo, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { ChevronDown, LayoutDashboard, Home, User, LogOut } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import useUIStore from "../store/useUIStore";
import { useClickOutside } from "../hooks/useClickOutside";
import { useAuth } from "../contexts/AuthContext";
import { truncateEmail } from "../utils/helper";

const HeaderProfile = React.memo(() => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDropdownOpen, toggleDropdown, closeDropdown } = useUIStore();
  const ref = useClickOutside(closeDropdown);

  const profile = user?.user || user || null;
  const isLoading = !user;

  const { firstName, email, userPath, isDashboardPage, defaultAvatar } =
    useMemo(() => {
      const fn = profile?.full_name?.split(" ")[0] || "Guest";
      const mail = truncateEmail(profile?.email || "guest@example.com");
      const path = user?.role;
      const isDash = location.pathname.startsWith(`/${path}`);
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
    navigate("/login", { replace: true });
    setTimeout(logout, 100);
  }, [closeDropdown, navigate, logout]);

  return (
    <div ref={ref} className='relative flex items-center gap-4 cursor-pointer'>
      {/* Trigger Area */}
      <div
        onClick={user ? toggleDropdown : undefined}
        className='flex items-center gap-4'>
        {/* Avatar */}
        <div className='flex h-10 w-10 rounded-full overflow-hidden'>
          {isLoading ? (
            <Skeleton circle height={40} width={40} />
          ) : (
            <img
              src={profile?.image || defaultAvatar}
              alt='Profile'
              className='w-full h-full object-cover'
            />
          )}
        </div>

        {/* User Info */}
        {!isDashboardPage &&
          (isLoading ? (
            <div className='flex flex-col gap-1 items-start text-left md:hidden xl:block'>
              <Skeleton height={20} width={100} />
              <Skeleton height={16} width={130} />
            </div>
          ) : (
            <div className='flex flex-col items-start text-left md:hidden xl:block'>
              <h1 className='font-clash font-medium text-[20px] text-black'>
                {firstName}
              </h1>
              <p className='font-montserrat text-[14px] text-black truncate'>
                {email}
              </p>
            </div>
          ))}

        {/* Dropdown Icon */}
        {!isLoading && user && !isDashboardPage && (
          <ChevronDown
            className={`md:hidden xl:block transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && user && (
        <div
          className={`
            absolute top-12 right-0 bg-white shadow-md z-10
            ${isDashboardPage ? "w-[15rem]" : "min-w-[15rem] w-max max-w-xs"}
          `}>
          <DropdownItem
            to={`/${userPath}`}
            onClick={closeDropdown}
            icon={<LayoutDashboard size={18} />}
            label='Dashboard'
          />
          <DropdownItem
            to='/'
            onClick={closeDropdown}
            icon={<Home size={18} />}
            label='Home'
          />
          <DropdownItem
            to={`/${userPath}/profile`}
            onClick={closeDropdown}
            icon={<User size={18} />}
            label='Profile'
          />
          <DropdownAction
            onClick={handleLogout}
            icon={<LogOut size={18} />}
            label='Logout'
          />
        </div>
      )}
    </div>
  );
});

const DropdownItem = React.memo(({ to, onClick, icon, label }) => (
  <Link
    to={to}
    onClick={onClick}
    className='flex items-center gap-2 py-3 px-4 hover:bg-accent/20 transition'>
    {icon}
    <span className='font-clash font-medium text-black'>{label}</span>
  </Link>
));

const DropdownAction = React.memo(({ onClick, icon, label }) => (
  <div
    onClick={onClick}
    className='flex items-center gap-2 py-3 px-4 hover:bg-accent/20 cursor-pointer transition'>
    {icon}
    <span className='font-clash font-medium text-black'>{label}</span>
  </div>
));

HeaderProfile.displayName = "HeaderProfile";
DropdownItem.displayName = "DropdownItem";
DropdownAction.displayName = "DropdownAction";

export default HeaderProfile;
