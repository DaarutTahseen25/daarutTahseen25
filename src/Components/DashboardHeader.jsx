// components/DashboardHeader.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "react-router";
import { MenuIcon, ChevronRight } from "lucide-react";
import HeaderProfile from "./HeaderProfile";
import useUIStore from "../store/useUIStore";
import { useAuth } from "../contexts/AuthContext";

const DashboardHeader = React.memo(() => {
  const { user } = useAuth();
  const { openSidebar } = useUIStore();
  const location = useLocation();
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [shouldObserve, setShouldObserve] = useState(false);

  // Get current page title from pathname
  const getPageTitle = () => {
    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);

    // Get the last segment and format it
    const lastSegment = segments[segments.length - 1];

    // If it's just the role root, return "Dashboard"
    if (segments.length === 1 || lastSegment === user?.role) {
      return "Dashboard";
    }

    // Format the segment: remove hyphens, capitalize words
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Get breadcrumb path
  const getBreadcrumbs = () => {
    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);

    // Remove the role from segments
    const breadcrumbSegments = segments.slice(1);

    if (breadcrumbSegments.length === 0) {
      return [];
    }

    return breadcrumbSegments.map((segment) =>
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

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

  const pageTitle = getPageTitle();
  const breadcrumbs = getBreadcrumbs();

  return (
    <>
      <header
        ref={headerRef}
        className={`bg-white border-b border-gray-200 flex flex-col justify-center transition-all duration-300 z-[2]
        min-h-[80px] lg:min-h-[100px] py-4 px-4 lg:px-6 w-full
        ${
          isSticky
            ? "fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-sm"
            : "relative"
        }
      `}
      >
        <div className="flex items-center justify-between w-full mx-auto max-w-full">
          {/* Left section: Mobile menu + Page title */}
          <div className="flex items-center gap-4 flex-1">
            {/* Mobile menu icon */}
            <button
              onClick={handleOpenSidebar}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Right section: Actions */}
          <div className="flex items-center gap-3">
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
