import React from "react";
import { Outlet } from "react-router";

const DashboardMain = () => {
  return (
    <main className="h-full bg-secondary py-8  flex-1 flex  justify-center">
      <div className="w-[95%] mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardMain;
