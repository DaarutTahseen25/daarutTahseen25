import React, { useEffect, useMemo, useCallback } from "react";
import useUIStore from "../store/useUIStore";
import {
  Home,
  Info,
  BookOpen,
  GraduationCap,
  FileText,
  Phone,
  LogOut,
  X,
  LayoutGrid,
} from "lucide-react";
import Button from "./Button";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { truncateEmail } from "../utils/helper";
import { getDashboardSidebarLinks } from "../utils/GetLinks";

// Static nav items for all users
const navItems = [
  { key: "home", icon: <Home size={20} />, label: "Home", to: "/" },
  {
    key: "about",
    icon: <Info size={20} />,
    label: "About Us",
    to: "/about-us",
  },
  {
    key: "courses",
    icon: <BookOpen size={20} />,
    label: "Courses",
    to: "/our-courses",
  },
  {
    key: "admission",
    icon: <GraduationCap size={20} />,
    label: "Admission",
    to: "/about-admissions",
  },
  {
    key: "resources",
    icon: <FileText size={20} />,
    label: "Resources",
    to: "/portal-resources",
  },
  {
    key: "contact",
    icon: <Phone size={20} />,
    label: "Contact",
    to: "/contact-us",
  },
];

const bottomItems = [{ icon: <LogOut size={20} />, label: "Log out" }];

// Memoized components with modern styling
const NavItem = React.memo(({ item, onClick, index }) => (
  <Link
    to={item.to}
    key={item.key}
    onClick={onClick}
    className='flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-50 hover:shadow-sm transition-all duration-200 transform hover:translate-x-1 group'
    style={{
      animationDelay: `${index * 50}ms`,
      animation: "slideInRight 0.3s ease-out forwards",
    }}>
    <div className='group-hover:text-primary transition-colors duration-200'>
      {item.icon}
    </div>
    <span className='font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200'>
      {item.label}
    </span>
  </Link>
));
NavItem.displayName = "NavItem";

const DashboardLink = React.memo(({ userPath, onClick }) => (
  <Link
    to={`/${userPath}`}
    onClick={onClick}
    className='flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-sm transition-all duration-200 transform hover:translate-x-1 group border border-primary/50'>
    <div className='group-hover:text-primary not-even:transition-colors duration-200'>
      <LayoutGrid size={20} />
    </div>
    <span className='font-semibold text-primary group-hover:text-primary transition-colors duration-200'>
      Dashboard
    </span>
  </Link>
));
DashboardLink.displayName = "DashboardLink";

const UserProfile = React.memo(({ profile, firstName, email }) => (
  <li className='flex items-center gap-4 '>
    <div className='h-12 w-12 rounded-full overflow-hidden ring-2 ring-blue-200 shadow-md'>
      <img
        src={profile?.image}
        alt='Profile'
        className='w-full h-full object-cover'
      />
    </div>
    <div className='flex flex-col gap-1 items-start text-left'>
      <h1 className='font-clash font-semibold text-[18px] text-gray-900'>
        {firstName}
      </h1>
      <p className='font-montserrat text-[13px] text-gray-600 bg-white px-2 py-1 rounded-md'>
        {email}
      </p>
    </div>
  </li>
));
UserProfile.displayName = "UserProfile";

const LoginButton = React.memo(({ onClick }) => (
  <Link to='/login'>
    <Button
      className='w-full bg-primary text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
      onClick={onClick}>
      Login/Register
    </Button>
  </Link>
));
LoginButton.displayName = "LoginButton";

const LogoutButton = React.memo(({ item, onClick }) => (
  <li
    className='flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 cursor-pointer transition-all duration-200 text-red-600 hover:text-red-700 transform hover:translate-x-1 border border-red-200/50 group'
    onClick={onClick}>
    <div className='group-hover:rotate-12 transition-transform duration-200'>
      {item.icon}
    </div>
    <span className='font-medium'>{item.label}</span>
  </li>
));
LogoutButton.displayName = "LogoutButton";

export default React.memo(function HomeSidebar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isSidebarOpen, closeSidebar } = useUIStore();

  const profile = useMemo(() => user?.user || user || null, [user]);
  const firstName = useMemo(
    () => profile?.full_name?.split(" ")[0] || "Guest",
    [profile?.full_name]
  );
  const email = useMemo(
    () => truncateEmail(profile?.email || "guest@example.com"),
    [profile?.email]
  );
  const userPath = useMemo(() => profile?.role || "", [profile?.role]);

  const isDashboardPage = useMemo(() => {
    return userPath ? location.pathname.startsWith(`/${userPath}`) : false;
  }, [location.pathname, userPath]);

  const nav = useMemo(() => {
    if (user && userPath && isDashboardPage) {
      return getDashboardSidebarLinks(userPath);
    }
    return navItems;
  }, [user, userPath, isDashboardPage]);

  const handleLogout = useCallback(() => {
    closeSidebar();
    navigate("/login", { replace: true });
    setTimeout(() => {
      logout();
    }, 100);
  }, [closeSidebar, navigate, logout]);

  const handleOverlayClick = useCallback(() => {
    closeSidebar();
  }, [closeSidebar]);

  const handleNavClick = useCallback(() => {
    closeSidebar();
  }, [closeSidebar]);

  useEffect(() => {
    if (isSidebarOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Add CSS animation keyframes
      const style = document.createElement("style");
      style.textContent = `
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.head.removeChild(style);
      };
    }
  }, [isSidebarOpen]);

  if (!isSidebarOpen) return null;

  return (
    <>
      {/* Modern Overlay with smooth fade */}
      <div
        className={`fixed lg:hidden inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-500 ease-out ${
          isSidebarOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleOverlayClick}
        style={{ animation: "fadeIn 0.3s ease-out" }}
      />

      {/* Modern Sidebar with glass morphism effect */}
      <aside
        className={`fixed lg:hidden top-0 right-0 h-dvh w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 p-6 flex flex-col justify-between transform transition-all duration-500 ease-out border-l border-gray-200/50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
        }}>
        {/* Header with close button */}
        <div>
          <div className='flex justify-between items-center mb-8'>
            <div className='h-1 w-12 bg-accent rounded-full'></div>
            <button
              onClick={closeSidebar}
              className='p-2 cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 transform hover:scale-110 hover:rotate-90'
              aria-label='Close Sidebar'>
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links with staggered animation */}
          <nav>
            <ul className='flex flex-col gap-2'>
              {nav.map((item, index) => (
                <NavItem
                  key={item.key}
                  item={item}
                  onClick={handleNavClick}
                  index={index}
                />
              ))}
              {!isDashboardPage && profile?.role && (
                <div className='mt-2'>
                  <DashboardLink userPath={userPath} onClick={handleNavClick} />
                </div>
              )}
            </ul>
          </nav>
        </div>

        {/* Bottom section with modern styling */}
        <div className='space-y-4'>
          <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
          <ul className='flex flex-col gap-3'>
            {user ? (
              <>
                <UserProfile
                  profile={profile}
                  firstName={firstName}
                  email={email}
                />
                {bottomItems.map((item, idx) => (
                  <LogoutButton key={idx} item={item} onClick={handleLogout} />
                ))}
              </>
            ) : (
              <LoginButton onClick={handleNavClick} />
            )}
          </ul>
        </div>
      </aside>
    </>
  );
});
