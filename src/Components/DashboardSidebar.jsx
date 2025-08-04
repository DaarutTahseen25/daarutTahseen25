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
import { getDashboardSidebarLinks } from "../utils/GetLinks";

const DashboardSidebar = () => {
  const { logout, user } = useAuth();
  const role = user?.role;

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
              {getDashboardSidebarLinks(role).map((item) => (
                <li key={item.key}>
                  <DashboardSidebarLink
                    icon={item.icon}
                    label={item.label}
                    to={item.to}
                    disabled={item.requiresLevel && !user?.level}
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
