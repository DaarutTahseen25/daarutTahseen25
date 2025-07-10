import React from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";

const Courses = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen">
      <HomeSidebar />
      <LandingPageHeader />
      <h1>Courses</h1>
      <Footer />
    </main>
  );
};

export default Courses;
