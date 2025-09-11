import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import { usePageTitle } from "./hooks/usePageTitle";
const App = () => {
  usePageTitle("Home");
  return <AppRoutes />;
};

export default App;
