import React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import DashboardSidebar from "../Components/DashboardSidebar";
import DashboardMain from "../Components/DashboardMain";
import HomeSidebar from "../Components/HomeSidebar";

const DashboardLayout = () => {
  return (
    <div className='grid min-h-screen grid-cols-1 lg:grid-cols-[250px_1fr]'>
      {/* Sidebar - fixed height */}
      <DashboardSidebar />
      <HomeSidebar />

      {/* Main content area - scrollable */}
      <div className='flex flex-col h-screen overflow-y-auto'>
        <DashboardHeader />
        <DashboardMain />
      </div>
    </div>
  );
};

export default DashboardLayout;
