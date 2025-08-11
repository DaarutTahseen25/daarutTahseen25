import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import TestPage from "./pages/AspirantTest/TestPage";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <AuthProvider>
      {/* <TestPage /> */}
      <App />
    </AuthProvider>
  </BrowserRouter>
);
