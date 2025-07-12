import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";

import QuranLoader from "./Components/QuranLoader";
import DashboardLayoutGuard from "./Components/dashboard/DashboardLayoutGuard";
import Courses from "./pages/Courses";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ResourcesPage from "./pages/ResourcesPage";

import { usePageTitle } from "./hooks/usePageTitle";

// import DashboardLayoutGuard from "./Components/dashboard/DashboardLayoutGuard";

// Lazy-loaded pages & components
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./Components/TermsOfService"));
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const LogIn = lazy(() => import("./pages/Login"));
const OtpRegistration = lazy(() => import("./Components/OtpRegPage"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const SelectAccount = lazy(() => import("./Components/SelectAccount"));
const StudentRegistrationForm = lazy(() =>
  import("./Components/StudentRegistrationForm")
);
const TutorRegistrationForm = lazy(() =>
  import("./Components/TutorRegistrationForm")
);

const DashboardLayout = lazy(() =>
  import("./Components/dashboard/DashboardLayout")
);
const Dashboard = lazy(() => import("./Components/dashboard/Dashboard"));
const DashboardTeacher = lazy(() =>
  import("./Components/dashboard/DashboardTeacher")
);
const Notifications = lazy(() =>
  import("./Components/dashboard/Notifications")
);
const TutorProfile = lazy(() => import("./Components/dashboard/TutorProfile"));
const Curriculum = lazy(() => import("./Components/dashboard/Curriculum"));
const Admission = lazy(() => import("./Components/dashboard/Admission"));
const MyCourses = lazy(() => import("./Components/dashboard/MyCourses"));
const PayFees = lazy(() => import("./Components/dashboard/PayFees"));
const Resources = lazy(() => import("./Components/dashboard/Resources"));
const Profile = lazy(() => import("./Components/dashboard/Profile"));
const LevelRegistration = lazy(() =>
  import("./Components/dashboard/LevelRegistration")
);
const TeacherCourses = lazy(() =>
  import("./Components/dashboard/TeacherCourses")
);
const Library = lazy(() => import("./Components/dashboard/Library"));
const Payments = lazy(() => import("./Components/dashboard/Payments"));
const Messages = lazy(() => import("./Components/dashboard/Messages"));
const Classes = lazy(() => import("./Components/dashboard/Classes"));

// Temporary user data — move this to Context or Zustand in real apps
export const user = {
  username: "aisha_yusuf",
  email: "aisha.yusuf@daaruttasheen.sch.ng",
  isAuthenticated: false,
  isAdmissionProcess: false,
  isAdmitted: true,
  isApproved: true,
  role: "student",
};

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  return user.isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  usePageTitle();
  return (
    <Suspense
      fallback={
        <div className="">
          <QuranLoader />
        </div>
      }
    >
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/our-terms" element={<TermsOfService />} />
        <Route path="/otp-page" element={<OtpRegistration />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/our-courses" element={<Courses />} />
        <Route path="/about-admissions" element={<AdmissionsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/portal-resources" element={<ResourcesPage />} />

        {/* Create Account Flow */}
        <Route path="/create" element={<CreateAccount />}>
          <Route index element={<Navigate to="select" replace />} />
          <Route path="select" element={<SelectAccount />} />
          <Route path="student-account" element={<StudentRegistrationForm />} />
          <Route path="tutor-account" element={<TutorRegistrationForm />} />
        </Route>

        {/* Dashboard - Protected */}
        <Route
          path="/dashboard/*"
          element={
            //later wrap with protected route component here
            <DashboardLayoutGuard>
              <DashboardLayout />
            </DashboardLayoutGuard>
          }
        >
          {/* Redirect to appropriate role */}
          <Route index element={<Navigate to={user.role} replace />} />

          {/* Dashboard by role */}
          <Route path="student" element={<Dashboard />} />
          <Route path="teacher" element={<DashboardTeacher />} />

          {/* profile by role */}
          <Route
            path="profile"
            element={user.role === "teacher" ? <TutorProfile /> : <Profile />}
          />

          {/* Shared Pages */}
          <Route
            path="messages"
            element={user.role === "teacher" ? <Messages /> : <Notifications />}
          />
          <Route path="level-registration" element={<LevelRegistration />} />
          <Route path="admission" element={<Admission />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route
            path="my-courses"
            element={
              user.role === "student" ? <MyCourses /> : <TeacherCourses />
            }
          />
          <Route path="payfees" element={<PayFees />} />
          <Route path="payments" element={<Payments />} />
          <Route path="my-classes" element={<Classes />} />
          <Route path="library" element={<Library />} />
          <Route path="resources" element={<Resources />} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
