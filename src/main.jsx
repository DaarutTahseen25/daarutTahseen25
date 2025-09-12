import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import TestPage from "./pages/AspirantTest/TestPage";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Components/ErrorFallback";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ToastContainer />
    <AuthProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <App />
      </ErrorBoundary>
    </AuthProvider>
  </BrowserRouter>
);
