import React from "react";
import HomeSidebar from "../Components/HomeSidebar";
import LandingPageHeader from "../Components/LandingPageHeader";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const LandingLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen relative">
      <LandingPageHeader />
      <HomeSidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
