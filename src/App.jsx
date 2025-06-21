// App.jsx
import { Routes, Route, Link } from "react-router";
import Home from "./pages/home";
import About from "./pages/About";
import "./App.css";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
