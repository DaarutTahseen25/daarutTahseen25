import React, { useEffect, useRef, useState, useCallback } from "react";
import HeaderProfile from "./HeaderProfile";
import { Link } from "react-router";
import { MenuIcon } from "lucide-react";
import useUIStore from "../store/useUIStore";
import { useAuth } from "../contexts/AuthContext";
import { createPortal } from "react-dom";

const DashboardHeader = React.memo(() => {
  const { user } = useAuth();
  const { openSidebar } = useUIStore();
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [shouldObserve, setShouldObserve] = useState(false);

  // Memoize resize handler so it's not recreated
  const handleResize = useCallback(() => {
    setShouldObserve(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Sticky logic with memoized observer callback
  useEffect(() => {
    if (!shouldObserve) {
      setIsSticky(false);
      return;
    }

    const observerCallback = ([entry]) => {
      setIsSticky(!entry.isIntersecting);
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0,
    });

    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [shouldObserve]);

  // Memoized openSidebar click
  const handleOpenSidebar = useCallback(() => {
    openSidebar();
  }, [openSidebar]);

  return (
    <>
      {shouldObserve && <div ref={sentinelRef} className='h-0 w-full' />}

      <header
        className={`bg-white border-b border-gray-300 flex items-center justify-center transition-shadow duration-300 z-[2]
        h-20 lg:h-[129px] py-4 md:p-4 w-full
        ${
          isSticky
            ? "fixed top-0 left-0 bg-white/70 backdrop-blur-lg shadow-md"
            : "relative"
        }
      `}>
        <div className='flex items-center justify-between w-[90%] md:w-full mx-auto'>
          {/* Mobile menu icon */}
          <div className='lg:hidden'>
            <MenuIcon className='cursor-pointer' onClick={handleOpenSidebar} />
          </div>

          <div className='w-[90%] mx-auto flex items-center justify-end gap-4'>
            <div className='h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-accent/20 transition-colors duration-200 flex items-center justify-center'>
              <Link to={`/${user?.role}/messages`}>
                <img
                  src='/notification bell.png'
                  alt='notification'
                  width={20}
                  height={20}
                  loading='lazy' // Lazy load small optimization
                />
              </Link>
            </div>
            <HeaderProfile />
          </div>
        </div>
      </header>
    </>
  );
});

DashboardHeader.displayName = "DashboardHeader";
export default DashboardHeader;
