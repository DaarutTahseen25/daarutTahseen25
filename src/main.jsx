import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import TestPage from "./pages/AspirantTest/TestPage";
import { ToastContainer } from "react-toastify";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ToastContainer />
    <AuthProvider>
      {/* <TestPage /> */}
      <App />
    </AuthProvider>
  </BrowserRouter>
);
