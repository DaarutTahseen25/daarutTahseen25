import React from "react";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

const UnAuthorized = () => {
  usePageTitle("Unauthorized");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Unauthorized</h1>
      <p className="text-gray-700 mb-6">
        You don’t have permission to access this page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default UnAuthorized;
