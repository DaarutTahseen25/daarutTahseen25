// DashboardSidebar.jsx

import React from "react";
import { useNavigate } from "react-router";

import DashboardSidebarLink from "./DashboardSidebarLink";
import {
  Bell,
  BookOpen,
  CreditCard,
  FileText,
  LayoutDashboard,
  ListTree,
  LogOut,
  MessageSquare,
  School,
  Users,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

// Sidebar Link Generator
export const getDashboardSidebarLinks = () => {
  const { user, logout } = useAuth();
  const role = user?.role;

  if (role === "student") {
    const links = [];

    links.unshift(
      {
        key: "mycourses",
        icon: <BookOpen />,
        label: "My Courses",
        to: "/dashboard/student/my-courses",
      },
      {
        key: "level-registration",
        icon: <School />,
        label: "Level Registration",
        to: "/dashboard/student/level-registration",
      },
      {
        key: "admission",
        icon: <School />,
        label: "Admission",
        to: "/dashboard/student/admission",
      },
      {
        key: "curriculum",
        icon: <ListTree />,
        label: "Curriculum",
        to: "/dashboard/student/curriculum",
      },
      {
        key: "notifications",
        icon: <Bell />,
        label: "Notifications",
        to: "/dashboard/student/messages",
      },
      {
        key: "payfees",
        icon: <CreditCard />,
        label: "Pay Fees",
        to: "/dashboard/student/my-fees",
      },
      {
        key: "resources",
        icon: <FileText />,
        label: "Resources",
        to: "/dashboard/student/resources",
      }
    );

    return links;
  }

  if (role === "teacher") {
    return [
      {
        key: "courses",
        icon: <Users />,
        label: "My Courses",
        to: "/dashboard/teacher/my-courses",
      },
      {
        key: "myclasses",
        icon: <BookOpen />,
        label: "My Classes",
        to: "/dashboard/teacher/my-classes",
      },
      {
        key: "messages",
        icon: <MessageSquare />,
        label: "Messages",
        to: "/dashboard/teacher/messages",
      },
      {
        key: "payments",
        icon: <CreditCard />,
        label: "Payments",
        to: "/dashboard/teacher/payments",
      },
      {
        key: "library",
        icon: <FileText />,
        label: "Library",
        to: "/dashboard/teacher/library",
      },
    ];
  }

  return [];
};

// Sidebar Component
const DashboardSidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className='bg-white hidden lg:block md:row-span-full border-r border-gray-300 h-full'>
      <div className='flex flex-col justify-between h-full'>
        {/* Top Section: Logo and Navigation */}
        <div>
          <div className='p-4 flex items-center justify-center h-[120px]'>
            <img src='/logo.png' alt='DaarutTahseen Logo' />
          </div>

          <nav className='w-full py-4 mt-4'>
            <ul className='flex flex-col gap-3 w-[90%] mx-auto'>
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
        <div className='py-4 border-t border-dark-grey'>
          <ul className='flex flex-col gap-3 w-[90%] mx-auto'>
            <li
              onClick={() => {
                logout();
              }}
              className='cursor-pointer'>
              <DashboardSidebarLink
                icon={<LogOut size={20} />}
                label='Log out'
              />
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
