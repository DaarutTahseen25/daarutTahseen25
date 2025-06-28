<<<<<<< HEAD
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import QuranLoader from "./Components/QuranLoader";

// Lazy-loaded pages & components
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const LogIn = lazy(() => import("./pages/LogIn"));
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
  isAdmissionProcess: true,
  role: "student", // or "teacher"
};

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  return user.isAuthenticated ? children : <Navigate to="/login" replace />;
=======
import React from "react";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import LogIn from "./pages/LogIn";

// Pages & Components
import OtpRegistration from "./Components/OtpRegPage";
import Home from "./pages/home";
import DashboardLayout from "./Components/dashboard/DashboardLayout";
import Dashboard from "./Components/dashboard/Dashboard"; // Student Dashboard
import DashboardTeacher from "./Components/dashboard/DashboardTeacher";
import TutorRegistrationForm from "./Components/TutorRegistrationForm";
import StudentRegistrationForm from "./Components/StudentRegistrationForm";
import CreateAccount from "./pages/CreateAccount";
import SelectAccount from "./Components/SelectAccount";
import About from "./pages/about";
import Notifications from "./Components/dashboard/Notifications";
import Curriculum from "./Components/dashboard/Curriculum";
import Admission from "./Components/dashboard/Admission";
import MyCourses from "./Components/dashboard/MyCourses";
import PayFees from "./Components/dashboard/PayFees";
import Resources from "./Components/dashboard/Resources";
import Profile from "./Components/dashboard/Profile";
import LevelRegistration from "./Components/dashboard/LevelRegistration";
import TeacherCourses from "./Components/dashboard/TeacherCourses";
import Library from "./Components/dashboard/Library";
import Payments from "./Components/dashboard/Payments";
import Messages from "./Components/dashboard/Messages";
import Classes from "./Components/dashboard/Classes";

export const user = {
  username: "aisha_yusuf",
  email: "aisha.yusuf@daaruttasheen.sch.ng",
  isAuthenticated: true,
  isAdmissionProcess: true,
  role: "student",
>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
};

const App = () => {
  return (
<<<<<<< HEAD
    <Suspense fallback={<QuranLoader />}>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/otp-page" element={<OtpRegistration />} />
        <Route path="/login" element={<LogIn />} />

        {/* Create Account Flow */}
        <Route path="/create" element={<CreateAccount />}>
          <Route index element={<Navigate to="select" replace />} />
          <Route path="select" element={<SelectAccount />} />
          <Route path="student-account" element={<StudentRegistrationForm />} />
          <Route path="tutor-account" element={<TutorRegistrationForm />} />
        </Route>

        {/* Dashboard - Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* Redirect to appropriate role */}
          <Route index element={<Navigate to={user.role} replace />} />

          {/* Dashboard by role */}
          <Route path="student" element={<Dashboard />} />
          <Route path="teacher" element={<DashboardTeacher />} />

          {/* Shared Pages */}
          <Route path="notifications" element={<Notifications />} />
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
          <Route path="messages" element={<Messages />} />
          <Route path="my-classes" element={<Classes />} />
          <Route path="library" element={<Library />} />
          <Route path="resources" element={<Resources />} />
          <Route path="profile" element={<Profile />} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Suspense>
=======
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="otp-page" element={<OtpRegistration />} />
      <Route path="/login" element={<LogIn />} />

      {/* Create Account Flow */}
      <Route path="create" element={<CreateAccount />}>
        <Route index element={<Navigate to="select" replace />} />
        <Route path="select" element={<SelectAccount />} />
        <Route path="student-account" element={<StudentRegistrationForm />} />
        <Route path="tutor-account" element={<TutorRegistrationForm />} />
      </Route>

      {/* Dashboard Layout */}
      <Route path="dashboard" element={<DashboardLayout />}>
        {/* Redirect to appropriate dashboard home */}
        <Route index element={<Navigate to={user.role} replace />} />

        {/* Dashboard Home Pages */}
        <Route path="student" element={<Dashboard />} />
        <Route path="teacher" element={<DashboardTeacher />} />

        {/* Shared/Student Pages */}
        <Route path="notifications" element={<Notifications />} />
        <Route path="level-registration" element={<LevelRegistration />} />
        <Route path="admission" element={<Admission />} />
        <Route path="curriculum" element={<Curriculum />} />
        <Route
          path="my-courses"
          element={user.role === "student" ? <MyCourses /> : <TeacherCourses />}
        />
        <Route path="payfees" element={<PayFees />} />
        <Route path="payments" element={<Payments />} />
        <Route path="messages" element={<Messages />} />
        <Route path="my-classes" element={<Classes />} />
        <Route path="library" element={<Library />} />
        <Route path="resources" element={<Resources />} />
        <Route path="profile" element={<Profile />} />

        {/* Fallback: go to dashboard root */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>

>>>>>>> 09eb6f5e8997fff351b576dfce8aad7f8edab89d
  );
};

export default App;
