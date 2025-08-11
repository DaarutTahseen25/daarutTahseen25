import React, { useEffect, useRef, useState } from "react";
import HeaderProfile from "./HeaderProfile";
import { Link } from "react-router";
import { MenuIcon } from "lucide-react";
import useUIStore from "../store/useUIStore";
import { useAuth } from "../contexts/AuthContext";

const DashboardHeader = () => {
  const { user } = useAuth();
  const { openSidebar } = useUIStore();
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [shouldObserve, setShouldObserve] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShouldObserve(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!shouldObserve) {
      setIsSticky(false); // <-- Reset sticky when no longer observing
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
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
  }, [shouldObserve]);

  return (
    <>
      {/* Only renders when on small screen */}
      {shouldObserve && <div ref={sentinelRef} className='h-0 w-full'></div>}

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
          {/* Menu icon for mobile */}
          <div className='lg:hidden'>
            <MenuIcon className='cursor-pointer' onClick={openSidebar} />
          </div>

          <div className='w-[90%] mx-auto flex items-center justify-end gap-4'>
            <div className='h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-accent/20 transition-colors duration-200 flex items-center justify-center'>
              <Link to={`/${user?.role}/messages`}>
                <img
                  src='/notification bell.png'
                  alt='notification'
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <HeaderProfile />
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;
