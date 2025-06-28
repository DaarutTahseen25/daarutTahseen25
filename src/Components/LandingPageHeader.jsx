import React from "react";
import React from "react";
import useUIStore from "../store/useUIStore";

import { MenuIcon } from "lucide-react";
import HeaderProfile from "./HeaderProfile";
import Button from "./Button";
import { Link } from "react-router";
import { user } from "../App";

export default function LandingPageHeader() {
  // Using the custom UI store to manage sidebar state
  // openSidebar is a function to open the sidebar when the menu icon is clicked
  const { openSidebar } = useUIStore();
  // user variable to check if a user is logged in
  // This can be replaced with actual user state management logic
  return (
    <header className="bg-white flex justify-center items-center py-6 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] h-20 ">
      <div className="w-[90%] md:w-[85%] flex justify-between gap-2 items-center mx-auto text-center">
        <Link to="/">
          <img
            src="logo.png"
            alt="logo"
            className="w-[5rem] lg:w-[7rem] lg:h-[3rem] cursor-pointer"
          />
        </Link>
        <Link to="/">
          <img
            src="logo.png"
            alt="logo"
            className="w-[5rem] lg:w-[7rem] lg:h-[3rem] cursor-pointer"
          />
        </Link>
        {/* Navigation items for larger screens */}
        {/* This section contains the main navigation items that are visible on larger screens */}
        <ul className="hidden lg:flex justify-between items-center cursor-pointer font-clash gap-4 lg:gap-6 font-medium text-sm lg:text-lg">
          <li className="transition-colors hover:text-accent">Home</li>
          <li className="transition-colors hover:text-accent">About Us</li>
          <li className="transition-colors hover:text-accent">Courses</li>
          <li className="transition-colors hover:text-accent">Admission</li>
          <li className="transition-colors hover:text-accent">Resources</li>
          <li className="transition-colors hover:text-accent">Contact</li>
        </ul>

        {/* Checks if there's a logged in user */}

        {user.isAuthenticated ? (
          <div className="hidden lg:block">
            <HeaderProfile />
          </div>
        ) : (
          <div className="hidden lg:block">
            <Link to="/create">
              <Button className=" focus:outline-none transition-all rounded-lg px-4 py-2 text-sm lg:text-base md:inline-flex items-center justify-center shadow font-medium font-clash hover:bg-[#009688]  cursor-pointer bg-primary text-white hover:bg-primarydark  ">
                Login/Register
              </Button>
            </Link>
          </div>
        )}
        {/* Mobile menu icon */}
        {/* This section contains the menu icon that is visible on smaller screens */}
        {/* When clicked, it opens the sidebar for navigation */}
        <div className="block lg:hidden">
          <MenuIcon className="cursor-pointer" onClick={openSidebar} />
        </div>
      </div>
    </header>
  );
}
