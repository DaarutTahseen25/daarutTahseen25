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
};

const App = () => {
  return (
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

  );
};

export default App;
