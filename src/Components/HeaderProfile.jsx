import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { useClickOutside } from "../hooks/useClickOutside";
import { ChevronDown, ChevronUp } from "lucide-react";

import useUIStore from "../store/useUIStore";

const HeaderProfile = () => {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const { isDropdownOpen, toggleDropdown, closeDropdown } = useUIStore();

  const ref = useClickOutside(closeDropdown);

  return (
    <div ref={ref} className="relative flex items-center gap-4 cursor-pointer">
      {/* Trigger Area */}
      <div onClick={toggleDropdown} className="flex items-center gap-4">
        <div className="flex h-10 w-10 rounded-full overflow-hidden">
          <img
            src="/test1.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className={`flex flex-col gap-0 items-start text-left md:hidden xl:block   ${
            isDashboardPage ? "hidden" : ""
          } `}
        >
          <h1 className="font-clash font-[500] text-[20px] leading-[100%] tracking-[0%] text-black">
            Abdulazeez
          </h1>
          <p className="font-montserrat font-[400] text-[14px] leading-[100%] tracking-[0%] text-black">
            azeez@gmail.com
          </p>
        </div>

        <ChevronDown
          className={`md:hidden xl:block transition-transform duration-300 ease-in-out ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          } ${isDashboardPage ? "hidden" : ""}  `}
        />
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className={`absolute  md:w-[15rem] xl:w-full top-12 right-0 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] flex flex-col z-10 ${
            isDashboardPage ? "w-[15rem] md:w-[15rem] xl:w-full" : "w-full"
          }  `}
        >
          <Link
            to={"/dashboard"}
            className="flex items-center gap-2 py-[0.76rem] px-4 hover:bg-accent/20 transition-colors duration-200"
            onClick={closeDropdown}
          >
            <img src="/Dashboard.png" alt="" />
            <span className="font-clash font-[500] tracking-[0%] text-black">
              Dashboard
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 py-[0.76rem] px-4 hover:bg-accent/20 transition-colors duration-200"
            onClick={closeDropdown}
          >
            <img src="/home.png" alt="" />
            <span className="font-clash font-[500] tracking-[0%] text-black">
              Home
            </span>
          </Link>
          <Link
            className="flex items-center gap-2 py-[0.76rem] px-4 hover:bg-accent/20 transition-colors duration-200"
            onClick={closeDropdown}
          >
            <img src="/Profile.png" alt="" />
            <span className="font-clash font-[500] tracking-[0%] text-black">
              Profile
            </span>
          </Link>
          <div
            className="flex items-center gap-2 py-[0.76rem] px-4 hover:bg-accent/20 transition-colors duration-200"
            onClick={closeDropdown}
          >
            <img src="/logout.png" alt="" />
            <span className="font-clash font-[500] tracking-[0%] text-black">
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
