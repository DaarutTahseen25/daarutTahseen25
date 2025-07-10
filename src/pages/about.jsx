import React from "react";
import Button from "../Components/Button";
import LandingPageHeader from "../Components/LandingPageHeader";
import Footer from "../Components/Footer";
import HomeSidebar from "../Components/HomeSidebar";

const About = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen">
      <HomeSidebar />
      <LandingPageHeader />
      <h1>About us</h1>
      <Footer />
    </main>
  );
};

export default About;
