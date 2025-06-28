import React from "react";
import React from "react";
import useUIStore from "../store/useUIStore";
import { getDashboardSidebarLinks } from "./dashboard/DashboardSidebar";
import { getDashboardSidebarLinks } from "./dashboard/DashboardSidebar";
import { Link, useLocation } from "react-router";
import { user } from "../App";

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
  LayoutDashboard,
  School,
  ListTree,
  Bell,
  CreditCard,
  LayoutDashboard,
  School,
  ListTree,
  Bell,
  CreditCard,
} from "lucide-react";
import Button from "./Button";
import { Link, useLocation } from "react-router";
import { user } from "../App";

export const navItems = [
  { key: "home", icon: <Home size={20} />, label: "Home", to: "/" },
  { key: "about", icon: <Info size={20} />, label: "About Us" },
  { key: "courses", icon: <BookOpen size={20} />, label: "Courses" },
  { key: "admission", icon: <GraduationCap size={20} />, label: "Admission" },
  { key: "resources", icon: <FileText size={20} />, label: "Resources" },
  { key: "contact", icon: <Phone size={20} />, label: "Contact" },
  {
    key: "dashboard",
    icon: <LayoutGrid size={20} />,
    label: "Dashboard",
    to: "/dashboard",
  },
];

// Nav items for the sidebar
// Each item consists of an icon and a label

const bottomItems = [{ icon: <LogOut size={20} />, label: "Log out" }];

export default function HomeSidebar() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");

  const nav = isDashboardPage ? getDashboardSidebarLinks() : navItems;

  // Using the custom UI store to manage sidebar state
  // isSidebarOpen indicates whether the sidebar is currently open
  const { isSidebarOpen, closeSidebar } = useUIStore();

  // user variable to check if a user is logged in
  // This can be replaced with actual user state management logic

  return (
    <>
      {/* Overlay for the sidebar */}
      {/* This overlay appears when the sidebar is open on smaller screens */}
      {isSidebarOpen && (
        <div
          className="fixed lg:hidden inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar component */}
      {/* This sidebar is fixed to the right side of the screen on smaller screens */}
      <aside
        className={`fixed lg:hidden top-0 right-0 h-dvh w-64 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] z-50 p-4 flex flex-col justify-between transform transition-transform duration-300 overflow-y-hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button and navigation items */}
        {/* This section contains the close button and the main navigation items */}

        <div>
          <div className="flex justify-end mb-6">
            <button
              onClick={closeSidebar}
              className="text-gray-500 cursor-pointer"
            >
              <X />
            </button>
          </div>

          {/* Navigation items list */}
          {/* This section maps through the navItems array to display each item */}
          {/* Each item consists of an icon and a label */}
          <ul className="flex flex-col gap-3">
            {nav.map((item, idx) => (
              <Link
                to={item.to}
                key={item.key}
                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 cursor-pointer   transition `}
                onClick={closeSidebar}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          {/* Down list */}
          {/* This section contains the user profile and bottom items */}
          {/* If a user is logged in, it displays the user's profile picture and name */}
          {/* Otherwise, it shows a login/register button */}
          <ul className="flex flex-col gap-2">
            {user.isAuthenticated ? (
              <li>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 rounded-full overflow-hidden">
                    <img
                      src="/test1.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-0 items-start text-left md:hidden xl:block">
                    <h1 className="font-clash font-[500] text-[20px] text-black">
                      Abdulazeez
                    </h1>
                    <p className="font-montserrat font-[400] text-[14px] text-black">
                      azeez@gmail.com
                    </p>
                  </div>
                </div>
              </li>
            ) : (
              <Button className=" focus:outline-none transition-all rounded-lg px-4 py-2 text-sm lg:text-base md:inline-flex items-center justify-center shadow font-medium font-clash hover:bg-[#009688] hidden cursor-pointer bg-primary text-white hover:bg-primarydark ">
                Login/Register
              </Button>
            )}
            {bottomItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 cursor-pointer transition text-gray-700"
                onClick={closeSidebar}
              >
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
