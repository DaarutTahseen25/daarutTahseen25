// DashboardHeader.jsx
import React from "react";
import HeaderProfile from "../HeaderProfile";

const DashboardHeader = () => {
  return (
    <header className="bg-white h-20 md:h-[129px] py-4 md:p-4 border-b border-gray-300 flex items-center justify-center ">
      <div className="flex items-center justify-between w-[90%] md:w-full mx-auto">
        <div className="md:hidden">
          <img src="/logo.png" alt="" />
        </div>
        <div className="w-[90%] mx-auto flex items-center justify-end gap-4">
          <div className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-accent/20 transition-colors duration-200 flex items-center justify-center">
            <img src="/notification bell.png" alt="" width={20} height={20} />
          </div>
          <HeaderProfile />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
