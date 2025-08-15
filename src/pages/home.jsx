import React, { useEffect, useState } from "react";
import FeaturedCourses from "../Components/FeaturedCourses";
import Hero from "../Components/Hero";
import Trusted from "../Components/Trusted";
import Testimonial from "../Components/Testimonial";
import { ArrowUp } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Home");
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
    <main className="grid">
      <Hero />
      <Trusted />
      <FeaturedCourses />
      <Testimonial />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[50] cursor-pointer bg-buttonhover text-white p-3 rounded-full shadow-lg hover:bg-primary transition-all duration-300 opacity-80 hover:opacity-100"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </main>
  );
};

export default Home;
