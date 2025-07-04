import React from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";

const ResourcesPage = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen">
      <HomeSidebar />
      <LandingPageHeader />
      <h1>Resources</h1>
      <Footer />
    </main>
  );
};

export default ResourcesPage;
