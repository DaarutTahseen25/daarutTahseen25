import { Routes, Route } from "react-router";

import LandingLayout from "../layouts/LandingLayout";
import Home from "../pages/home";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import Courses from "../pages/Courses";
import AdmissionsPage from "../pages/AdmissionsPage";
import ContactUsPage from "../pages/ContactUsPage";
import ResourcesPage from "../pages/ResourcesPage";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="our-terms" element={<TermsOfService />} />
        <Route path="our-courses" element={<Courses />} />
        <Route path="about-admissions" element={<AdmissionsPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="portal-resources" element={<ResourcesPage />} />
      </Route>
    </Routes>
  );
};

export default LandingRoutes;
