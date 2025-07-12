// src/Components/LandingPageHeader.jsx
import React from "react";
import useUIStore from "../store/useUIStore";
import { MenuIcon } from "lucide-react";
import HeaderProfile from "./HeaderProfile";
import Button from "./Button";
import { Link } from "react-router"; // ✅ updated from "react-router"
import { user } from "../App";
import HomeSidebar from "./HomeSidebar"; // ✅ Import sidebar

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
            <Link to="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <Link
              to="/about-us"
              className="transition-colors hover:text-accent"
            >
              About Us
            </Link>
            <Link
              to="/our-courses"
              className="transition-colors hover:text-accent"
            >
              Courses
            </Link>
            <Link
              to="/about-admissions"
              className="transition-colors hover:text-accent"
            >
              Admission
            </Link>
            <Link
              to="/portal-resources"
              className="transition-colors hover:text-accent"
            >
              Resources
            </Link>
            <Link
              to="/contact-us"
              className="transition-colors hover:text-accent"
            >
              Contact
            </Link>
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
