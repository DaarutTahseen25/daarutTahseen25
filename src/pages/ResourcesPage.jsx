import React from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";
import { usePageTitle } from "../hooks/usePageTitle";

const ResourcesPage = () => {
  usePageTitle("Resources");
  return (
    <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen">
      <h1>Resources</h1>
    </main>
  );
};

export default ResourcesPage;
