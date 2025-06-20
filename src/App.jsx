// App.jsx
import { Routes, Route, Link } from "react-router";
import Home from "./pages/home";
import About from "./pages/About";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
