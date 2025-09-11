// src/routes/AspirantRoutes.jsx
import { Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import QuranLoader from "../Components/QuranLoader";

const TestLayout = lazy(() => import("../layouts/TestLayout"));
const TestPage = lazy(() => import("../pages/AspirantTest/TestPage"));
const Welcome = lazy(() => import("../pages/AspirantTest/Welcome"));
// const ResultPage = lazy(() => import("../pages/AspirantTest/ResultPage"));

export default function TestRoutes() {
  return (
    <Suspense fallback={<QuranLoader />}>
      <Routes>
        <Route path="/" element={<TestLayout />}>
          <Route index element={<Welcome />} />
          <Route path="test" element={<TestPage />} />
        </Route>
        {/* <Route path="result" element={<ResultPage />} /> */}
      </Routes>
    </Suspense>
  );
}
