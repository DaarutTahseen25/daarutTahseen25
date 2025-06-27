import React from "react";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import OtpREgistration from "./Components/OtpRegPage";
import Home from "./pages/home";
import DashboardLayout from "./Components/dashboard/DashboardLayout";
import Dashboard from "./Components/dashboard/Dashboard";
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
const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="otp-page" element={<OtpREgistration />} />

      {/* CREATE ACCOUNT FLOW */}
      <Route path="create" element={<CreateAccount />}>
        <Route index element={<Navigate to="select" replace />} />
        <Route path="select" element={<SelectAccount />} />
        <Route path="student-account" element={<StudentRegistrationForm />} />
        <Route path="tutor-account" element={<TutorRegistrationForm />} />
      </Route>

      {/* DASHBOARD */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Dashboard />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="admission" element={<Admission />} />
        <Route path="level-registration" element={<LevelRegistration />} />
        <Route path="curriculum" element={<Curriculum />} />
        <Route path="mycourses" element={<MyCourses />} />
        <Route path="payfees" element={<PayFees />} />
        <Route path="resources" element={<Resources />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="home" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
