import React, { useEffect, useState } from "react";
import FeaturedCourses from "../Components/FeaturedCourses";
import Hero from "../Components/Hero";
import LandingPageHeader from "../Components/LandingPageHeader";
import Trusted from "../Components/Trusted";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";
import HomeSidebar from "../Components/HomeSidebar";
import { ArrowUp } from "lucide-react"; // you can replace with any icon

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] h-screen relative">
      <HomeSidebar />
      <LandingPageHeader />

      <Hero />
      <Trusted />
      <FeaturedCourses />
      <Testimonial />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[2] cursor-pointer bg-buttonhover text-white p-3 rounded-full shadow-lg hover:bg-primary transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </main>
  );
};

export default Home;
