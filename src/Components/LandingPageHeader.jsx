// import Button from "./Button";
import { Menu, ChevronDown } from "lucide-react";
import { useAuth, fakeUser } from "../context/AuthProvider";
import { useState } from "react";

export default function LandingPageHeader() {
  const { isAuthenticated } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false)
  return (
    <header className="bg-white flex justify-center items-center py-6 shadow-[0px_0px_5px_0.2px_rgba(0,0,0,0.25)] h-20 ">
      <div className="w-[90%] lg:w-[85%] flex justify-between gap-2 items-center mx-auto text-center">
        <img
          src="/landingPageLogo.png"
          alt="logo"
          className="w-[5rem] lg:w-[7rem] lg:h-[3rem]"
        />
        {/* h-[3.855rem] w-[7.63125rem] */}
        <ul className="hidden md:flex justify-between items-center cursor-pointer font-clash gap-4 lg:gap-6 font-medium text-sm lg:text-lg">
          <li className="transition-colors hover:text-accent">Home</li>
          <li className="transition-colors hover:text-accent">About Us</li>
          <li className="transition-colors hover:text-accent">Courses</li>
          <li className="transition-colors hover:text-accent">Admission</li>
          <li className="transition-colors hover:text-accent">Resources</li>
          <li className="transition-colors hover:text-accent">Contact</li>
        </ul>
        {isAuthenticated ? (
          <button className=" focus:outline-none transition-all rounded-lg px-4 py-2 text-sm lg:text-base md:inline-flex items-center justify-center shadow font-medium font-clash hover:bg-[#009688] hidden cursor-pointer bg-primary text-white hover:bg-primarydark ">
            Login/Register
          </button>
        ) : (
          <div className="hidden md:flex items-center gap-2 relative ">
            <img src={fakeUser.avatar} alt={fakeUser.username} className="w-10 h-10" />
            <p className="flex flex-col justify-between items-start">
              <span className="font-medium font-clash">{fakeUser.username}</span>
              <span className="text-sm font-montserrat">{fakeUser.email}</span>
            </p>
            <ChevronDown size={22} className={`cursor-pointer transition-all duration-300 ${showUserMenu ? "rotate-180" : "rotate-360"} `} onClick={()=> setShowUserMenu(show =>!show)} />
              {showUserMenu && (
                <ul className=" absolute left-0 -bottom-[9.8rem] border border-gray-300 z-[2] shadow-md bg-white w-full font-medium font-clash">
                  <li className="border-b border-gray-300 flex gap-3 w-full items-center py-1.5 pl-3 hover:bg-gray-50 cursor-pointer">
                    <img src="/dashboard.png" alt="dashboard icon" className="w-4 h-4" />
                    <span className="text-left">Dashboard</span>
                  </li>
                  <li className="border-b border-gray-300 flex gap-3 w-full items-center py-1.5 pl-3 hover:bg-gray-50 cursor-pointer">
                    <img src="/home.png" alt="home icon" className="w-4 h-4" />
                    <span>Home</span>
                  </li>
                  <li className="border-b border-gray-300 flex gap-3 w-full items-center py-1.5 pl-3 hover:bg-gray-50 cursor-pointer">
                    <img src="/profile.png" alt="profile icon" className="w-4 h-4" />
                    <span>Profile</span>
                  </li>
                  <li className=" border-gray-300 flex gap-3 w-full items-center py-1.5 pl-3 hover:bg-gray-50 cursor-pointer">
                    <img src="/logout.png" alt="logout icon" className="w-4 h-4" />
                    <span>Logout</span>
                  </li>
                </ul>
              )
              }
          </div>
        )}
        <Menu size={29} className=" md:hidden cursor-pointer" />
      </div>
    </header>
  );
}
