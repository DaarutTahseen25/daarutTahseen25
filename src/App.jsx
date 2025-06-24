// App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/home";
import About from "./pages/About";
import "./App.css";
import OtpREgistration from "./Components/OtpRegPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/otp" element={<OtpREgistration />} />
      </Routes>
    </>
  );
};

export default App;
