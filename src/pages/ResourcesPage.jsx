import React from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";
import { usePageTitle } from "../hooks/usePageTitle";

const ResourcesPage = () => {
  usePageTitle("Resources");
  return (
    <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] mx-auto py-10">
        <h1>Resources</h1>
      </div>
    </main>
  );
};

export default ResourcesPage;
