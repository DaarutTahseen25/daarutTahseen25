// src/Components/LandingPageHeader.jsx
import React from "react";
import useUIStore from "../store/useUIStore";
import { MenuIcon } from "lucide-react";
import HeaderProfile from "./HeaderProfile";
import Button from "./Button";
import { Link, NavLink } from "react-router"; // ✅ updated from "react-router"
import { user } from "../App";

export default function LandingPageHeader() {
  const { openSidebar } = useUIStore();

  return (
    <>
      <header className="bg-white flex justify-center items-center py-6 shadow h-20 z-40 relative">
        <div className="w-[90%] md:w-[85%] flex justify-between items-center mx-auto">
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="w-[5rem] lg:w-[7rem] lg:h-[3rem] cursor-pointer"
            />
          </Link>

          {/* Navigation items for larger screens */}
          {/* This section contains the main navigation items that are visible on larger screens */}
          <nav className="hidden lg:flex justify-between items-center cursor-pointer font-clash gap-4 lg:gap-6 font-medium text-sm lg:text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors hover:text-accent ${
                  !isActive ? "text-accent" : "text-primary"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `transition-colors hover:text-accent ${
                  !isActive ? "text-accent" : "text-primary"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/our-courses"
              className={({ isActive }) =>
                `transition-colors hover:text-accent ${
                  !isActive ? "text-accent" : "text-primary"
                }`
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/about-admissions"
              className={({ isActive }) =>
                `transition-colors hover:text-accent ${
                  !isActive ? "text-accent" : "text-primary"
                }`
              }
            >
              Admission
            </NavLink>
            <NavLink
              to="/portal-resources"
              className={({ isActive }) =>
                `transition-colors hover:text-accent ${
                  !isActive ? "text-accent" : "text-primary"
                }`
              }
            >
              Resources
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `transition-colors hover:text-accent ${
                  !isActive ? "text-accent" : "text-primary"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Auth: Desktop */}
          {user?.isAuthenticated ? (
            <div className="hidden lg:block">
              <HeaderProfile />
            </div>
          ) : (
            <div className="hidden lg:block">
              <Link to="/login">
                <Button className="px-4 py-2 text-sm lg:text-base font-clash font-medium bg-primary text-white hover:bg-primarydark rounded-lg shadow">
                  Login/Register
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Icon */}
          <div className="block lg:hidden">
            <MenuIcon
              className="cursor-pointer text-black"
              onClick={openSidebar}
            />
          </div>
        </div>
      </header>

      {/* Sidebar
      <HomeSidebar /> */}
    </>
  );
}
