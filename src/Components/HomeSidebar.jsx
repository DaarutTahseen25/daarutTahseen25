import React, { useEffect } from "react";
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

// Public nav links
export const navItems = [
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

export default function HomeSidebar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isSidebarOpen, closeSidebar } = useUIStore();

  const profile = user?.user || user || null;
  const firstName = profile?.full_name?.split(" ")[0] || "Guest";
  const email = truncateEmail(profile?.email || "guest@example.com");
  const userPath = profile?.role || "";

  const isDashboardPage = location.pathname.startsWith(`/${userPath}`);
  const nav = isDashboardPage ? getDashboardSidebarLinks(userPath) : navItems;

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isSidebarOpen]);

  function handleLogout() {
    closeSidebar();
    navigate("/login", { replace: true });
    setTimeout(() => {
      logout();
    }, 100);
  }

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed lg:hidden inset-0 bg-black/40 z-40 transition-opacity duration-300'
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:hidden top-0 right-0 h-dvh w-64 bg-white shadow z-50 p-4 flex flex-col justify-between transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}>
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
              <Link
                to={item.to}
                key={item.key}
                onClick={closeSidebar}
                className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 transition'>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            {/* Dashboard link if not on dashboard page */}
            {!isDashboardPage && profile?.role && (
              <Link
                to={`/${userPath}`}
                onClick={closeSidebar}
                className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 transition'>
                <LayoutGrid size={20} />
                <span>Dashboard</span>
              </Link>
            )}
          </ul>
        </div>

        {/* Bottom section (User or Login/Register) */}
        <div>
          <ul className='flex flex-col gap-2'>
            {user ? (
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
                  <p className='font-montserrat text-[14px] text-black'>
                    {email}
                  </p>
                </div>
              </li>
            ) : (
              <Link to='/login'>
                <Button className='w-full' onClick={closeSidebar}>
                  Login/Register
                </Button>
              </Link>
            )}

            {/* Log out button */}
            {bottomItems.map((item, idx) => (
              <li
                key={idx}
                className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/20 cursor-pointer transition text-gray-700'
                onClick={handleLogout}>
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
