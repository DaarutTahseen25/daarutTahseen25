import { Routes, Route, Navigate } from "react-router";
import { Suspense, lazy } from "react";
import QuranLoader from "../Components/QuranLoader";
import RequireTestAuth from "../auth/RequireTestAuth";

const LandingRoutes = lazy(() => import("./LandingRoutes"));
const StudentRoutes = lazy(() => import("./StudentRoutes"));
const TeacherRoutes = lazy(() => import("./TeacherRoutes"));
const AdminRoutes = lazy(() => import("./AdminRoutes"));
const LogIn = lazy(() => import("../pages/Login"));
const UnAuthorized = lazy(() => import("../pages/UnAuthorized"));
const CreateAccount = lazy(() => import("../pages/CreateAccount"));
const SelectAccount = lazy(() => import("../Components/SelectAccount"));
const StudentRegistrationForm = lazy(() =>
  import("../Components/StudentRegistrationForm")
);
const TutorRegistrationForm = lazy(() =>
  import("../Components/TutorRegistrationForm")
);
const OtpRegPage = lazy(() => import("../Components/OtpRegPage"));
const TestRoutes = lazy(() => import("./TestRoutes"));

const LoaderFallback = () => (
  <div className="w-full h-screen flex justify-center items-center text-lg font-medium">
    <QuranLoader />
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoaderFallback />}>
      <Routes>
        {/* Public routes */}
        <Route path="/*" element={<LandingRoutes />} />
        <Route path="/otp-page" element={<OtpRegPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
        {/* Dashboards */}
        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/teacher/*" element={<TeacherRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route
          path="/assessment/*"
          element={
            <RequireTestAuth>
              <TestRoutes />
            </RequireTestAuth>
          }
        />
        {/* Create Account Flow */}{" "}
        <Route path="/create" element={<CreateAccount />}>
          {" "}
          <Route index element={<Navigate to="select" replace />} />{" "}
          <Route path="select" element={<SelectAccount />} />{" "}
          <Route path="student-account" element={<StudentRegistrationForm />} />{" "}
          <Route path="tutor-account" element={<TutorRegistrationForm />} />{" "}
        </Route>
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
