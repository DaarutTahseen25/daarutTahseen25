import React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import DashboardSidebar from "../Components/DashboardSidebar";
import DashboardMain from "../Components/DashboardMain";
import MobileDashboardSidebar from "../Components/MobileDashboardSidebar";

const LayoutTeachers = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[250px_1fr]">
      {/* Sidebar - fixed height */}
      <DashboardSidebar />
      <MobileDashboardSidebar />

      {/* Main content area - scrollable */}
      <div className="flex flex-col h-screen overflow-y-auto">
        <DashboardHeader />
        <DashboardMain />
      </div>
    </div>
  );
};

export default LayoutTeachers;
