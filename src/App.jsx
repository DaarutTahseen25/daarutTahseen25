// App.jsx
import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/About";
import "./App.css";

import DashboardLayout from "./Components/dashboard/DashboardLayout";
import Dashboard from "./Components/dashboard/Dashboard";
import AccountTypePage from "./pages/accountcreationpage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/accountcreationpage" element={<AccountTypePage />} />
      </Routes>
    </>
  );
};

export default App;
