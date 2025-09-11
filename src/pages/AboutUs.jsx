import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";

const AboutUs = () => {
  usePageTitle("About Us");
  return (
    <main className="grid  h-screen">
      <h1>About us</h1>
    </main>
  );
};

export default AboutUs;
