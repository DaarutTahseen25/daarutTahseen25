// DashboardSidebar.jsx

import React from "react";
import { useNavigate } from "react-router";

import DashboardSidebarLink from "./DashboardSidebarLink";
import {
  Bell,
  BookOpen,
  CreditCard,
  FileText,
  Home,
  LayoutDashboard,
  ListTree,
  LogOut,
  MessageSquare,
  School,
  Users,
} from "lucide-react";

import { user } from "../../App";
import useUIStore from "../../store/useUIStore";

// Sidebar Link Generator
export const getDashboardSidebarLinks = () => {
  const { role, isAdmitted } = user;
  const { isAdmissionProcess } = useUIStore();

  if (role === "student") {
    const links = [];

    // // 👇 Show only "Level Registration" when not done
    // if (!isAdmissionProcess) {
    //   links.push();

    //   return links; // ⛔️ Return early: show ONLY this
    // }

    // // 👇 Show admission link if level registration is done
    // links.push();

    // 👇 Show other dashboard items only after admission is granted
    links.unshift(
      { key: "home", icon: <Home />, label: "Home", to: "/" },
      {
        key: "dashboard",
        icon: <LayoutDashboard />,
        label: "Dashboard",
        to: "/dashboard/student",
      },
      {
        key: "mycourses",
        icon: <BookOpen />,
        label: "My Courses",
        to: "/dashboard/my-courses",
      },
      {
        key: "level-registration",
        icon: <School />,
        label: "Level Registration",
        to: "/dashboard/level-registration",
      },
      {
        key: "admission",
        icon: <School />,
        label: "Admission",
        to: "/dashboard/admission",
      },
      {
        key: "curriculum",
        icon: <ListTree />,
        label: "Curriculum",
        to: "/dashboard/curriculum",
      },
      {
        key: "notifications",
        icon: <Bell />,
        label: "Notifications",
        to: "/dashboard/messages",
      },
      {
        key: "payfees",
        icon: <CreditCard />,
        label: "Pay Fees",
        to: "/dashboard/payfees",
      },
      {
        key: "resources",
        icon: <FileText />,
        label: "Resources",
        to: "/dashboard/resources",
      }
    );

    return links;
  }

  // Teacher sidebar stays as it is
  if (role === "teacher") {
    return [
      { key: "home", icon: <Home />, label: "Home", to: "/" },
      {
        key: "dashboard",
        icon: <LayoutDashboard />,
        label: "Dashboard",
        to: "/dashboard/teacher",
      },
      {
        key: "courses",
        icon: <Users />,
        label: "My Courses",
        to: "/dashboard/my-courses",
      },
      {
        key: "myclasses",
        icon: <BookOpen />,
        label: "My Classes",
        to: "/dashboard/my-classes",
      },
      {
        key: "messages",
        icon: <MessageSquare />,
        label: "Messages",
        to: "/dashboard/messages",
      },
      {
        key: "payments",
        icon: <CreditCard />,
        label: "Payments",
        to: "/dashboard/payments",
      },
      {
        key: "library",
        icon: <FileText />,
        label: "Library",
        to: "/dashboard/library",
      },
    ];
  }

  return [];
};

// Sidebar Component
const DashboardSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="bg-white hidden lg:block md:row-span-full border-r border-gray-300 h-full">
      <div className="flex flex-col justify-between h-full">
        {/* Top Section: Logo and Navigation */}
        <div>
          <div className="p-4 flex items-center justify-center h-[120px]">
            <img src="/logo.png" alt="DaarutTahseen Logo" />
          </div>

          <nav className="w-full py-4">
            <ul className="flex flex-col gap-3 w-[90%] mx-auto">
              {getDashboardSidebarLinks().map((item) => (
                <li key={item.key}>
                  <DashboardSidebarLink
                    icon={item.icon}
                    label={item.label}
                    to={item.to}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section: Logout */}
        <div className="py-4 border-t border-dark-grey">
          <ul className="flex flex-col gap-3 w-[90%] mx-auto">
            <li
              onClick={() => {
                user.isAuthenticated = false;
                navigate("/login", { replace: true });
              }}
              className="cursor-pointer"
            >
              <DashboardSidebarLink
                icon={<LogOut size={20} />}
                label="Log out"
              />
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
