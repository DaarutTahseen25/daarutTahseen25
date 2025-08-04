import React, { useEffect, useState } from "react";
import useUIStore from "../store/useUIStore";
import {
  Home,
  Info,
  BookOpen,
  GraduationCap,
  FileText,
  Phone,
  LogOut,
  X,
  LayoutGrid,
} from "lucide-react";
import Button from "./Button";
import { Link, useLocation, useNavigate } from "react-router";
import { isAuthenticated } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";
import { truncateEmail } from "../utils/helper";
import { getDashboardSidebarLinks } from "../utils/GetLinks";

export const navItems = [
  { key: "home", icon: <Home size={20} />, label: "Home", to: "/" },
  {
    key: "about",
    icon: <Info size={20} />,
    label: "About Us",
    to: "/about-us",
  },
  {
    key: "courses",
    icon: <BookOpen size={20} />,
    label: "Courses",
    to: "/our-courses",
  },
  {
    key: "admission",
    icon: <GraduationCap size={20} />,
    label: "Admission",
    to: "/about-admissions",
  },
  {
    key: "resources",
    icon: <FileText size={20} />,
    label: "Resources",
    to: "/portal-resources",
  },
  {
    key: "contact",
    icon: <Phone size={20} />,
    label: "Contact",
    to: "/contact-us",
  },
];

const bottomItems = [{ icon: <LogOut size={20} />, label: "Log out" }];

export default function HomeSidebar() {
  const { logout, user } = useAuth();

  const profile = user?.user || user || null;

  const firstName = profile?.full_name?.split(" ")[0] || "Guest";
  const email = truncateEmail(profile?.email || "guest@example.com");

  const userPath = profile?.role;

  const navigate = useNavigate();
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith(`/${userPath}`);

  const nav = isDashboardPage ? getDashboardSidebarLinks(userPath) : navItems;

  // Using the custom UI store to manage sidebar state
  // isSidebarOpen indicates whether the sidebar is currently open
  const { isSidebarOpen, closeSidebar } = useUIStore();

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  // user variable to check if a user is logged in
  // This can be replaced with actual user state management logic

  function handleLogout() {
    closeSidebar();
    logout();
  }

  return (
    <>
      {/* Overlay for the sidebar */}
      {/* This overlay appears when the sidebar is open on smaller screens */}
      {isSidebarOpen && (
        <div
          className='fixed lg:hidden overflow-hidden inset-0 bg-black/40 z-40 transition-opacity duration-300'
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar component */}
      {/* This sidebar is fixed to the right side of the screen on smaller screens */}
      <aside
        className={`fixed lg:hidden top-0 right-0 h-dvh w-64 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] z-50 p-4 flex flex-col justify-between transform transition-transform duration-300 overflow-hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Close button and navigation items */}
        {/* This section contains the close button and the main navigation items */}

        <div>
          <div className='flex justify-end mb-6'>
            <button
              onClick={closeSidebar}
              className='text-gray-500 cursor-pointer'>
              <X />
            </button>
          </div>

          {/* Navigation items list */}
          {/* This section maps through the navItems array to display each item */}
          {/* Each item consists of an icon and a label */}
          <ul className='flex flex-col gap-3'>
            {nav.map((item, idx) => (
              <Link
                to={item.to}
                key={item.key}
                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 cursor-pointer   transition `}
                onClick={closeSidebar}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            {!isDashboardPage && (
              <Link
                to={`/${userPath}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 cursor-pointer   transition `}
                onClick={closeSidebar}>
                <LayoutGrid size={20} />
                <span>Dashboard</span>
              </Link>
            )}
          </ul>
        </div>
        <div>
          {/* Down list */}
          {/* This section contains the user profile and bottom items */}
          {/* If a user is logged in, it displays the user's profile picture and name */}
          {/* Otherwise, it shows a login/register button */}
          <ul className='flex flex-col gap-2'>
            {isAuthenticated() ? (
              <li>
                <div className='flex items-center gap-4'>
                  <div className='flex h-10 w-10 rounded-full overflow-hidden'>
                    <img
                      src={profile?.image}
                      alt='Profile'
                      className='w-full h-full object-cover'
                    />
                  </div>

                  <div
                    className={`flex flex-col gap-0 items-start text-left ${
                      isSidebarOpen ? "" : "md:hidden"
                    } xl:block`}>
                    <h1 className='font-clash font-[500] text-[20px] text-black'>
                      {firstName}
                    </h1>
                    <p className='font-montserrat truncate font-[400] text-[14px] text-black'>
                      {email}
                    </p>
                  </div>
                </div>
              </li>
            ) : (
              <Link to='/login'>
                <Button className='w-full' onClick={closeSidebar}>
                  Login/Register
                </Button>
              </Link>
            )}
            {bottomItems.map((item, idx) => (
              <li
                key={idx}
                className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 cursor-pointer transition text-gray-700'
                onClick={handleLogout}>
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
