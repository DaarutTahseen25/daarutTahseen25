import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";

// Hooks
import { usePageTitle } from "./hooks/usePageTitle";

// Components
import QuranLoader from "./Components/QuranLoader";
import DashbaordRoutes from "./routes/DashbaordRoutes";

// Reusable Fallback Loader
const LoaderFallback = () => (
  <div>
    <QuranLoader />
  </div>
);

// Pages (Public)
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const LogIn = lazy(() => import("./pages/Login"));
const Courses = lazy(() => import("./pages/Courses"));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const UnAuthorized = lazy(() => import("./pages/UnAuthorized"));

// Pages (Account Creation Flow)
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const SelectAccount = lazy(() => import("./Components/SelectAccount"));
const StudentRegistrationForm = lazy(() =>
  import("./Components/StudentRegistrationForm")
);
const TutorRegistrationForm = lazy(() =>
  import("./Components/TutorRegistrationForm")
);

// OTP
const OtpRegistration = lazy(() => import("./Components/OtpRegPage"));

const App = () => {
  usePageTitle();

  return (
    <Suspense fallback={<LoaderFallback />}>
      <Routes>
        {/* Public Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
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

        {/* Dashboard Routes */}
        <Route path='/*' element={<DashbaordRoutes />} />
      </Routes>
    </Suspense>
  );
};

export default App;
