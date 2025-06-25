import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardMain from "./DashboardMain";
import HomeSidebar from "../HomeSidebar";

const DashboardLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[250px_1fr]">
      {/* Sidebar - fixed height */}
      <DashboardSidebar />
      <HomeSidebar />

      {/* Main content area - scrollable */}
      <div className="flex flex-col h-screen overflow-y-auto">
        <DashboardHeader />
        <DashboardMain />
      </div>
    </div>
  );
};

export default DashboardLayout;
