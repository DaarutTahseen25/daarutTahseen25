// import React, { useEffect, useMemo, useCallback } from "react";
// import useUIStore from "../store/useUIStore";
// import {
//   Home,
//   Info,
//   BookOpen,
//   GraduationCap,
//   FileText,
//   Phone,
//   LogOut,
//   X,
//   LayoutGrid,
// } from "lucide-react";
// import Button from "./Button";
// import { Link, useLocation, useNavigate } from "react-router";
// import { useAuth } from "../contexts/AuthContext";
// import { truncateEmail } from "../utils/helper";
// import { getDashboardSidebarLinks } from "../utils/GetLinks";

// // Static nav items for all users
// const navItems = [
//   { key: "home", icon: <Home size={20} />, label: "Home", to: "/" },
//   {
//     key: "about",
//     icon: <Info size={20} />,
//     label: "About Us",
//     to: "/about-us",
//   },
//   {
//     key: "courses",
//     icon: <BookOpen size={20} />,
//     label: "Courses",
//     to: "/our-courses",
//   },
//   {
//     key: "admission",
//     icon: <GraduationCap size={20} />,
//     label: "Admission",
//     to: "/about-admissions",
//   },
//   {
//     key: "resources",
//     icon: <FileText size={20} />,
//     label: "Resources",
//     to: "/portal-resources",
//   },
//   {
//     key: "contact",
//     icon: <Phone size={20} />,
//     label: "Contact",
//     to: "/contact-us",
//   },
// ];

// const bottomItems = [{ icon: <LogOut size={20} />, label: "Log out" }];

// // Memoized components with modern styling
// const NavItem = React.memo(({ item, onClick, index }) => (
//   <Link
//     to={item.to}
//     key={item.key}
//     onClick={onClick}
//     className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-sm transition-all duration-200 transform hover:translate-x-1 group"
//     style={{
//       animationDelay: `${index * 50}ms`,
//       animation: "slideInRight 0.3s ease-out forwards",
//     }}
//   >
//     <div className="group-hover:text-blue-600 transition-colors duration-200">
//       {item.icon}
//     </div>
//     <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
//       {item.label}
//     </span>
//   </Link>
// ));
// NavItem.displayName = "NavItem";

// const DashboardLink = React.memo(({ userPath, onClick }) => (
//   <Link
//     to={`/${userPath}`}
//     onClick={onClick}
//     className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-sm transition-all duration-200 transform hover:translate-x-1 group border border-green-200/50"
//   >
//     <div className="group-hover:text-green-600 transition-colors duration-200">
//       <LayoutGrid size={20} />
//     </div>
//     <span className="font-semibold text-green-700 group-hover:text-green-800 transition-colors duration-200">
//       Dashboard
//     </span>
//   </Link>
// ));
// DashboardLink.displayName = "DashboardLink";

// const UserProfile = React.memo(({ profile, firstName, email }) => (
//   <li className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200/50 shadow-sm">
//     <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-blue-200 shadow-md">
//       <img
//         src={profile?.image}
//         alt="Profile"
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <div className="flex flex-col gap-1 items-start text-left">
//       <h1 className="font-clash font-semibold text-[18px] text-gray-900">
//         {firstName}
//       </h1>
//       <p className="font-montserrat text-[13px] text-gray-600 bg-white px-2 py-1 rounded-md">
//         {email}
//       </p>
//     </div>
//   </li>
// ));
// UserProfile.displayName = "UserProfile";

// const LoginButton = React.memo(({ onClick }) => (
//   <Link to="/login">
//     <Button
//       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
//       onClick={onClick}
//     >
//       Login/Register
//     </Button>
//   </Link>
// ));
// LoginButton.displayName = "LoginButton";

// const LogoutButton = React.memo(({ item, onClick }) => (
//   <li
//     className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 cursor-pointer transition-all duration-200 text-red-600 hover:text-red-700 transform hover:translate-x-1 border border-red-200/50 group"
//     onClick={onClick}
//   >
//     <div className="group-hover:rotate-12 transition-transform duration-200">
//       {item.icon}
//     </div>
//     <span className="font-medium">{item.label}</span>
//   </li>
// ));
// LogoutButton.displayName = "LogoutButton";

// export default React.memo(function HomeSidebar() {
//   const { logout, user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { isSidebarOpen, closeSidebar } = useUIStore();

//   const profile = useMemo(() => user?.user || user || null, [user]);
//   const firstName = useMemo(
//     () => profile?.full_name?.split(" ")[0] || "Guest",
//     [profile?.full_name]
//   );
//   const email = useMemo(
//     () => truncateEmail(profile?.email || "guest@example.com"),
//     [profile?.email]
//   );
//   const userPath = useMemo(() => profile?.role || "", [profile?.role]);

//   const isDashboardPage = useMemo(() => {
//     return userPath ? location.pathname.startsWith(`/${userPath}`) : false;
//   }, [location.pathname, userPath]);

//   const nav = useMemo(() => {
//     if (user && userPath && isDashboardPage) {
//       return getDashboardSidebarLinks(userPath);
//     }
//     return navItems;
//   }, [user, userPath, isDashboardPage]);

//   const handleLogout = useCallback(() => {
//     closeSidebar();
//     navigate("/login", { replace: true });
//     setTimeout(() => {
//       logout();
//     }, 100);
//   }, [closeSidebar, navigate, logout]);

//   const handleOverlayClick = useCallback(() => {
//     closeSidebar();
//   }, [closeSidebar]);

//   const handleNavClick = useCallback(() => {
//     closeSidebar();
//   }, [closeSidebar]);

//   useEffect(() => {
//     if (isSidebarOpen) {
//       const originalOverflow = document.body.style.overflow;
//       document.body.style.overflow = "hidden";

//       // Add CSS animation keyframes
//       const style = document.createElement("style");
//       style.textContent = `
//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//       `;
//       document.head.appendChild(style);

//       return () => {
//         document.body.style.overflow = originalOverflow;
//         document.head.removeChild(style);
//       };
//     }
//   }, [isSidebarOpen]);

//   if (!isSidebarOpen) return null;

//   return (
//     <>
//       {/* Modern Overlay with smooth fade */}
//       <div
//         className={`fixed lg:hidden inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-500 ease-out ${
//           isSidebarOpen ? "opacity-100" : "opacity-0"
//         }`}
//         onClick={handleOverlayClick}
//         style={{ animation: "fadeIn 0.3s ease-out" }}
//       />

//       {/* Modern Sidebar with glass morphism effect */}
//       <aside
//         className={`fixed lg:hidden top-0 right-0 h-dvh w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 p-6 flex flex-col justify-between transform transition-all duration-500 ease-out border-l border-gray-200/50 ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{
//           backgroundImage:
//             "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
//         }}
//       >
//         {/* Header with close button */}
//         <div>
//           <div className="flex justify-between items-center mb-8">
//             <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
//             <button
//               onClick={closeSidebar}
//               className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 transform hover:scale-110 hover:rotate-90"
//               aria-label="Close Sidebar"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           {/* Navigation Links with staggered animation */}
//           <nav>
//             <ul className="flex flex-col gap-2">
//               {nav.map((item, index) => (
//                 <NavItem
//                   key={item.key}
//                   item={item}
//                   onClick={handleNavClick}
//                   index={index}
//                 />
//               ))}
//               {!isDashboardPage && profile?.role && (
//                 <div className="mt-2">
//                   <DashboardLink userPath={userPath} onClick={handleNavClick} />
//                 </div>
//               )}
//             </ul>
//           </nav>
//         </div>

//         {/* Bottom section with modern styling */}
//         <div className="space-y-4">
//           <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
//           <ul className="flex flex-col gap-3">
//             {user ? (
//               <>
//                 <UserProfile
//                   profile={profile}
//                   firstName={firstName}
//                   email={email}
//                 />
//                 {bottomItems.map((item, idx) => (
//                   <LogoutButton key={idx} item={item} onClick={handleLogout} />
//                 ))}
//               </>
//             ) : (
//               <LoginButton onClick={handleNavClick} />
//             )}
//           </ul>
//         </div>
//       </aside>
//     </>
//   );
// });



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

// Exceptional memoized components with advanced animations
const NavItem = React.memo(({ item, onClick, index, isActive }) => (
  <Link
    to={item.to}
    key={item.key}
    onClick={onClick}
    className={`
      relative flex items-center gap-3 px-4 py-3 rounded-xl 
      hover:bg-accent/20 transition-all duration-300 ease-out
      transform hover:translate-x-2 hover:scale-[1.02]
      group overflow-hidden
      ${isActive ? "bg-accent/10 shadow-lg" : ""}
    `}
    style={{
      animationDelay: `${index * 80}ms`,
      animation:
        "slideInRightBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
    }}
  >
    {/* Animated background gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Animated border indicator */}
    <div className="absolute left-0 top-1/2 h-0 w-1 bg-gray-700 rounded-r-full group-hover:h-8 transition-all duration-300 transform -translate-y-1/2" />

    <div className="relative z-10 group-hover:rotate-3 group-hover:scale-110 transition-all duration-300">
      {item.icon}
    </div>
    <span className="relative z-10 font-medium group-hover:font-semibold transition-all duration-300">
      {item.label}
    </span>

    {/* Subtle shine effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  </Link>
));
NavItem.displayName = "NavItem";

const DashboardLink = React.memo(({ userPath, onClick }) => (
  <Link
    to={`/${userPath}`}
    onClick={onClick}
    className="relative flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent/20 transition-all duration-300 transform hover:translate-x-2 hover:scale-[1.02] group overflow-hidden border-2 border-dashed border-gray-300 hover:border-gray-500"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
      <LayoutGrid size={20} />
    </div>
    <span className="relative z-10 font-semibold group-hover:font-bold transition-all duration-300">
      Dashboard
    </span>
    <div className="absolute top-0 right-0 w-2 h-2 bg-gray-700 rounded-full opacity-60 animate-pulse" />
  </Link>
));
DashboardLink.displayName = "DashboardLink";

const UserProfile = React.memo(({ profile, firstName, email }) => (
  <li className="relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-gray-50/80 to-gray-100/40 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
    {/* Animated background pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-20 h-20 bg-gray-700 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-16 h-16 bg-black rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>

    <div className="relative h-12 w-12 rounded-full overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-300">
      <img
        src={profile?.image}
        alt="Profile"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="relative z-10 flex flex-col gap-0 items-start text-left">
      <h1 className="font-clash font-medium text-[20px] text-black group-hover:text-gray-800 transition-colors duration-300">
        {firstName}
      </h1>
      <p className="font-montserrat text-[14px] text-black/80 group-hover:text-black transition-colors duration-300">
        {email}
      </p>
    </div>

    {/* Floating dots decoration */}
    <div className="absolute top-2 right-2 flex gap-1">
      <div className="w-1 h-1 bg-gray-700/50 rounded-full animate-bounce" />
      <div
        className="w-1 h-1 bg-gray-700/30 rounded-full animate-bounce"
        style={{ animationDelay: "0.1s" }}
      />
      <div
        className="w-1 h-1 bg-gray-700/20 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      />
    </div>
  </li>
));
UserProfile.displayName = "UserProfile";

const LoginButton = React.memo(({ onClick }) => (
  <Link to="/login">
    <Button
      className="relative w-full overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
      onClick={onClick}
    >
      <span className="relative z-10">Login/Register</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </Button>
  </Link>
));
LoginButton.displayName = "LoginButton";

const LogoutButton = React.memo(({ item, onClick }) => (
  <li
    className="relative flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent/20 cursor-pointer transition-all duration-300 text-gray-700 hover:text-gray-900 transform hover:translate-x-2 hover:scale-[1.02] group overflow-hidden"
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-red-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
      {item.icon}
    </div>
    <span className="relative z-10 font-medium group-hover:font-semibold transition-all duration-300">
      {item.label}
    </span>
    <div className="absolute right-2 top-1/2 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 transform -translate-y-1/2" />
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

      // Advanced CSS animations
      const style = document.createElement("style");
      style.textContent = `
        @keyframes slideInRightBounce {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.8);
          }
          50% {
            transform: translateX(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes fadeInScale {
          from { 
            opacity: 0; 
            transform: scale(0.95);
            backdrop-filter: blur(0px);
          }
          to { 
            opacity: 1; 
            transform: scale(1);
            backdrop-filter: blur(8px);
          }
        }
        
        @keyframes sidebarSlide {
          from {
            transform: translateX(100%) rotateY(15deg);
            opacity: 0;
          }
          to {
            transform: translateX(0) rotateY(0deg);
            opacity: 1;
          }
        }
        
        @keyframes floatingDots {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.body.style.overflow = originalOverflow;
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, [isSidebarOpen]);

  if (!isSidebarOpen) return null;

  return (
    <>
      {/* Exceptional overlay with dynamic blur */}
      <div
        className="fixed lg:hidden inset-0 bg-black/40 z-40 backdrop-blur-sm"
        onClick={handleOverlayClick}
        style={{
          animation: "fadeInScale 0.4s ease-out",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Exceptional sidebar with perspective animation */}
      <aside
        className="fixed lg:hidden top-0 right-0 h-dvh w-72 bg-white shadow-2xl z-50 p-6 flex flex-col justify-between overflow-hidden"
        style={{
          animation:
            "sidebarSlide 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
          backgroundImage: `
            radial-gradient(circle at 20% 10%, rgba(0,0,0,0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 90%, rgba(0,0,0,0.01) 0%, transparent 50%),
            linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 100%)
          `,
          backdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        {/* Exceptional header with floating elements */}
        <div>
          <div className="flex justify-between items-center mb-8">
            {/* Animated logo area */}
            <div className="flex gap-1">
              <div className="h-2 w-8 bg-gray-700 rounded-full animate-pulse" />
              <div
                className="h-2 w-4 bg-gray-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="h-2 w-2 bg-gray-300 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>

            <button
              onClick={closeSidebar}
              className="relative p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100/50 transition-all duration-300 transform hover:scale-110 hover:rotate-90 group"
              aria-label="Close Sidebar"
            >
              <X
                size={20}
                className="group-hover:drop-shadow-md transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200/50 to-gray-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Exceptional navigation with advanced animations */}
          <nav className="space-y-2">
            {nav.map((item, index) => (
              <NavItem
                key={item.key}
                item={item}
                onClick={handleNavClick}
                index={index}
                isActive={location.pathname === item.to}
              />
            ))}
            {!isDashboardPage && profile?.role && (
              <div className="mt-4">
                <DashboardLink userPath={userPath} onClick={handleNavClick} />
              </div>
            )}
          </nav>
        </div>

        {/* Exceptional bottom section */}
        <div className="space-y-4">
          {/* Elegant divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent">
            <div className="absolute top-0 left-1/2 w-8 h-px bg-gray-700 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="space-y-3">
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
          </div>

          {/* Floating decoration elements */}
          <div className="flex justify-center gap-2 pt-2">
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
            <div
              className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="w-1 h-1 bg-gray-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-1 h-1 bg-gray-700 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="w-1 h-1 bg-gray-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
            <div
              className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>
      </aside>
    </>
  );
});