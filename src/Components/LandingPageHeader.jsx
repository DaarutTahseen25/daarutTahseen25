import React, { useEffect, useRef, useState } from "react";
import useUIStore from "../store/useUIStore";
import { MenuIcon } from "lucide-react";
import HeaderProfile from "./HeaderProfile";
import Button from "./Button";
import { Link, NavLink } from "react-router";
import { isAuthenticated } from "../services/authService";

export default function LandingPageHeader() {
  const { openSidebar } = useUIStore();
  const headerRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      {
        root: null,
        threshold: 0,
      }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, []);

  return (
    <>
      {/* Sentinel div */}
      <div ref={sentinelRef} className='h-0 w-full'></div>

      <header
        ref={headerRef}
        className={`bg-white flex justify-center items-center py-6 h-20 z-40 w-full transition-shadow duration-300 ${
          isSticky
            ? "fixed bg-white/70 backdrop-blur-lg top-0 left-0 shadow-lg"
            : "relative shadow"
        }`}>
        <div className='w-[90%] md:w-[85%] flex justify-between items-center mx-auto'>
          <Link to='/'>
            <img
              src='/logo.png'
              alt='logo'
              className='w-[5rem] lg:w-[7rem] lg:h-[3rem] cursor-pointer'
            />
          </Link>

          <nav className='hidden lg:flex justify-between items-center cursor-pointer font-clash gap-4 lg:gap-6 font-medium text-sm lg:text-lg'>
            <NavItem to='/' text='Home' />
            <NavItem to='/about-us' text='About Us' />
            <NavItem to='/our-courses' text='Courses' />
            <NavItem to='/about-admissions' text='Admission' />
            <NavItem to='/portal-resources' text='Resources' />
            <NavItem to='/contact-us' text='Contact' />
          </nav>

          {isAuthenticated() ? (
            <div className='hidden lg:block'>
              <HeaderProfile />
            </div>
          ) : (
            <div className='hidden lg:block'>
              <Link to='/login'>
                <Button className='px-4 py-2 text-sm lg:text-base font-clash font-medium bg-primary text-white hover:bg-primarydark rounded-lg shadow'>
                  Login/Register
                </Button>
              </Link>
            </div>
          )}

          <div className='block lg:hidden'>
            <MenuIcon
              className='cursor-pointer text-black'
              onClick={openSidebar}
            />
          </div>
        </div>
      </header>
    </>
  );
}

const NavItem = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `transition-colors hover:text-accent ${
        !isActive ? "text-accent" : "text-primary"
      }`
    }>
    {text}
  </NavLink>
);
