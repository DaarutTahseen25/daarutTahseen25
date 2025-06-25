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
  LayoutGrid,
  ListTree,
  LogOut,
  School,
} from "lucide-react";

const DashboardSidebarLinks = [
  { key: "home", icon: <Home />, label: "Home", to: "/" },
  {
    key: "dashboard",
    icon: <LayoutDashboard />,
    label: "Dashboard",
    to: "/dashboard/home",
  },
  {
    key: "admission",
    icon: <School />,
    label: "Admission",
    to: "/dashboard/admission",
  },
  {
    key: "mycourses",
    icon: <BookOpen />,
    label: "My Courses",
    to: "/dashboard/mycourses",
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
          {DashboardSidebarLinks.map((item) => (
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
