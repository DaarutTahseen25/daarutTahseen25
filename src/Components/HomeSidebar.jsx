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

// Move static data outside component to prevent recreation
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

// Memoized components
const NavItem = React.memo(({ item, onClick }) => (
  <Link
    to={item.to}
    key={item.key}
    onClick={onClick}
    className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 transition'>
    {item.icon}
    <span>{item.label}</span>
  </Link>
));
NavItem.displayName = "NavItem";

const DashboardLink = React.memo(({ userPath, onClick }) => (
  <Link
    to={`/${userPath}`}
    onClick={onClick}
    className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 transition'>
    <LayoutGrid size={20} />
    <span>Dashboard</span>
  </Link>
));
DashboardLink.displayName = "DashboardLink";

const UserProfile = React.memo(({ profile, firstName, email }) => (
  <li className='flex items-center gap-4'>
    <div className='h-10 w-10 rounded-full overflow-hidden'>
      <img
        src={profile?.image}
        alt='Profile'
        className='w-full h-full object-cover'
      />
    </div>
    <div className='flex flex-col gap-0 items-start text-left'>
      <h1 className='font-clash font-medium text-[20px] text-black'>
        {firstName}
      </h1>
      <p className='font-montserrat text-[14px] text-black'>{email}</p>
    </div>
  </li>
));
UserProfile.displayName = "UserProfile";

const LoginButton = React.memo(({ onClick }) => (
  <Link to='/login'>
    <Button className='w-full' onClick={onClick}>
      Login/Register
    </Button>
  </Link>
));
LoginButton.displayName = "LoginButton";

const LogoutButton = React.memo(({ item, onClick }) => (
  <li
    className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 cursor-pointer transition text-gray-700'
    onClick={onClick}>
    {item.icon}
    <span>{item.label}</span>
  </li>
));
LogoutButton.displayName = "LogoutButton";

export default React.memo(function HomeSidebar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isSidebarOpen, closeSidebar } = useUIStore();

  // Memoize derived values
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

  const isDashboardPage = useMemo(
    () => location.pathname.startsWith(`/${userPath}`),
    [location.pathname, userPath]
  );

  const nav = useMemo(
    () => (isDashboardPage ? getDashboardSidebarLinks(userPath) : navItems),
    [isDashboardPage, userPath]
  );

  // Memoize callbacks
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

  // Body overflow effect - only run when sidebar state changes
  useEffect(() => {
    if (isSidebarOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isSidebarOpen]);

  // Early return if sidebar is closed to avoid unnecessary rendering
  if (!isSidebarOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className='fixed lg:hidden inset-0 bg-black/40 z-40 transition-opacity duration-300'
        onClick={handleOverlayClick}
      />

      {/* Sidebar */}
      <aside
        className={`fixed lg:hidden top-0 right-0 h-dvh w-64 bg-white shadow z-50 p-4 flex flex-col justify-between transform transition-transform duration-300 translate-x-0`}>
        {/* Close Button */}
        <div>
          <div className='flex justify-end mb-6'>
            <button
              onClick={closeSidebar}
              className='text-gray-500'
              aria-label='Close Sidebar'>
              <X />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className='flex flex-col gap-3'>
            {nav.map((item) => (
              <NavItem key={item.key} item={item} onClick={handleNavClick} />
            ))}
            {/* Dashboard link if not on dashboard page */}
            {!isDashboardPage && profile?.role && (
              <DashboardLink userPath={userPath} onClick={handleNavClick} />
            )}
          </ul>
        </div>

        {/* Bottom section (User or Login/Register) */}
        <div>
          <ul className='flex flex-col gap-2'>
            {user ? (
              <UserProfile
                profile={profile}
                firstName={firstName}
                email={email}
              />
            ) : (
              <LoginButton onClick={handleNavClick} />
            )}

            {/* Log out button */}
            {bottomItems.map((item, idx) => (
              <LogoutButton key={idx} item={item} onClick={handleLogout} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
});
