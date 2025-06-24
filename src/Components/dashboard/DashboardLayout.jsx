import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardMain from "./DashboardMain";

const DashboardLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[250px_1fr] md:grid-rows-none">
      <DashboardSidebar />

      <div className="flex flex-col overflow-auto">
        <DashboardHeader />
        <DashboardMain />
      </div>
    </div>
  );
};

export default DashboardLayout;
