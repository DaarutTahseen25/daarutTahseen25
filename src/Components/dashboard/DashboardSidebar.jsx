// DashboardSidebar.jsx
import React from "react";

const DashboardSidebar = () => {
  return (
    <aside className="bg-white hidden md:block md:row-span-full   border-r border-gray-300 h-full">
      <div className="p-4 flex items-center justify-center border-b border-gray-300 h-[129px]">
        <img src="/logo.png" alt="" className="w-[147.54px] h-[85px]" />
      </div>
      Sidebar
    </aside>
  );
};

export default DashboardSidebar;
