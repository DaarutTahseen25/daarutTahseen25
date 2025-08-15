import React, { useEffect, useRef, useState, useCallback } from "react";
import HeaderProfile from "./HeaderProfile";
import { Link } from "react-router";
import { MenuIcon } from "lucide-react";
import useUIStore from "../store/useUIStore";
import { useAuth } from "../contexts/AuthContext";

const DashboardHeader = React.memo(() => {
  const { user } = useAuth();
  const { openSidebar } = useUIStore();
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [shouldObserve, setShouldObserve] = useState(false);

  // Handle resize to check if we should enable sticky
  const handleResize = useCallback(() => {
    setShouldObserve(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Scroll logic for sticky
  useEffect(() => {
    if (!shouldObserve) {
      setIsSticky(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldObserve]);

  // Open sidebar handler
  const handleOpenSidebar = useCallback(() => {
    openSidebar();
  }, [openSidebar]);

  return (
    <>
      <header
        ref={headerRef}
        className={`bg-white border-b border-gray-300 flex items-center justify-center transition-shadow duration-300 z-[2]
        h-20 lg:h-[129px] py-4 md:p-4 w-full
        ${
          isSticky
            ? "fixed top-0 left-0 bg-white/70 backdrop-blur-lg shadow-md"
            : "relative"
        }
      `}
      >
        <div className="flex items-center justify-between w-[90%] md:w-full mx-auto">
          {/* Mobile menu icon */}
          <div className="lg:hidden">
            <MenuIcon className="cursor-pointer" onClick={handleOpenSidebar} />
          </div>

          <div className="w-[90%] mx-auto flex items-center justify-end gap-4">
            <div className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-accent/20 transition-colors duration-200 flex items-center justify-center">
              <Link to={`/${user?.role}/messages`}>
                <img
                  src="/notification bell.png"
                  alt="notification"
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </Link>
            </div>
            <HeaderProfile />
          </div>
        </div>
      </header>

      {/* Placeholder to prevent bounce */}
      {isSticky && shouldObserve && (
        <div style={{ height: headerRef.current?.offsetHeight || 0 }} />
      )}
    </>
  );
});

DashboardHeader.displayName = "DashboardHeader";
export default DashboardHeader;
