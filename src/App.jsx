import React, { Suspense, lazy } from "react";

import "./App.css";
import { Routes, Route, Navigate } from "react-router";

import QuranLoader from "./Components/QuranLoader";
import { usePageTitle } from "./hooks/usePageTitle";

import DashboardRoutes from "./routes/DashbaordRoutes";

// Pages
const Home = lazy(() => import("./pages/home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const LogIn = lazy(() => import("./pages/Login"));
const Courses = lazy(() => import("./pages/Courses"));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));

// Create Account Components
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const SelectAccount = lazy(() => import("./Components/SelectAccount"));
const StudentRegistrationForm = lazy(() =>
  import("./Components/StudentRegistrationForm")
);
const TutorRegistrationForm = lazy(() =>
  import("./Components/TutorRegistrationForm")
);

// OTP Component
const OtpRegistration = lazy(() => import("./Components/OtpRegPage"));
const UnAuthorized = lazy(() => import("./pages/UnAuthorized"));

const App = () => {
  usePageTitle();
  return (
    <Suspense
      fallback={
        <div className=''>
          <QuranLoader />
        </div>
      }>
      <Routes>
        {/* Public Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AbouUs />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/our-terms' element={<TermsOfService />} />
        <Route path='/otp-page' element={<OtpRegistration />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/our-courses' element={<Courses />} />
        <Route path='/about-admissions' element={<AdmissionsPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/portal-resources' element={<ResourcesPage />} />
        <Route path='/unauthorized' element={<UnAuthorized />} />

        {/* Create Account Flow */}
        <Route path='/create' element={<CreateAccount />}>
          <Route index element={<Navigate to='select' replace />} />
          <Route path='select' element={<SelectAccount />} />
          <Route path='student-account' element={<StudentRegistrationForm />} />
          <Route path='tutor-account' element={<TutorRegistrationForm />} />
        </Route>

        {/* Dashboard routes grouped */}
        <Route path='/*' element={<DashboardRoutes />} />
      </Routes>
    </Suspense>
  );
};

export default App;
