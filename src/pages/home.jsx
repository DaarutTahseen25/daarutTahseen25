import React from "react";
import FeaturedCourses from "../Components/FeaturedCourses";
import Hero from "../Components/Hero";
import LandingPageHeader from "../Components/LandingPageHeader";
import Trusted from "../Components/Trusted";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";
import HomeSidebar from "../Components/HomeSidebar";

const Home = () => {
  return (
    <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen">
      <HomeSidebar />
      <LandingPageHeader />

      <Hero />
      <Trusted />
      <FeaturedCourses />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default Home;
