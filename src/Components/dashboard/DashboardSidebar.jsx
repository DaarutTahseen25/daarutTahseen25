// DashboardSidebar.jsx

import React from "react";

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

export const getDashboardSidebarLinks = (
  role = user.role,
  isAdmissionProcess = user.isAdmissionProcess
) => {
  if (role === "student") {
    return [
      { key: "home", icon: <Home />, label: "Home", to: "/" },
      {
        key: "dashboard",
        icon: <LayoutDashboard />,
        label: "Dashboard",
        to: "/dashboard/student",
      },
      {
        key: "admission-or-registration",
        icon: <School />,
        label: isAdmissionProcess ? "Admission" : "Level Registration",
        to: isAdmissionProcess
          ? "/dashboard/admission"
          : "/dashboard/level-registration",
      },
      {
        key: "mycourses",
        icon: <BookOpen />,
        label: "My Courses",
        to: "/dashboard/my-courses",
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
        to: "/dashboard/notifications",
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
      },
    ];
  }

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

// DashboardSidebarLink component for individual links
// This component can be reused for each link in the sidebar

const DashboardSidebar = () => {
  return (
    <aside className="bg-white hidden lg:block md:row-span-full   border-r border-gray-300 h-full">
      <div className="p-4 flex items-center justify-center h-[120px]">
        <img src="/logo.png" alt="" className="" />
      </div>
      <nav className="w-full  py-4">
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

        {/* Divider */}
        <div className="border-t border-dark-grey my-4 w-full mx-auto" />

        <ul className="flex flex-col gap-3 w-[90%] mx-auto">
          <li>
            <DashboardSidebarLink icon={<LogOut size={20} />} label="Log out" />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
