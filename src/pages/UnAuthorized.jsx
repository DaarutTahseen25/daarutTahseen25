import React from "react";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import { ShieldX, ArrowLeft, LogIn, Home, AlertTriangle } from "lucide-react";

const UnAuthorized = () => {
  usePageTitle("Unauthorized");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-[20px] border border-[#CCCCCC] shadow-xl overflow-hidden">
          {/* Header Section with Icon */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 px-8 py-12 text-center relative">
            <div className="absolute top-6 right-6">
              <AlertTriangle className="w-6 h-6 text-orange-500 animate-pulse" />
            </div>

            {/* Main Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <ShieldX className="w-10 h-10 text-red-600" />
            </div>

            {/* Title */}
            <h1 className="font-clash font-bold text-3xl md:text-4xl text-red-600 mb-3 uppercase tracking-wide">
              Unauthorized
            </h1>

            {/* Status Code */}
            <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
              Error 401
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-8 text-center">
            <p className="font-montserrat text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              You don't have the required permissions to access this page.
              Please check your credentials or contact support.
            </p>

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Primary Action - Login */}
              <button
                onClick={() => navigate("/login")}
                className="
                  w-full flex items-center justify-center gap-3
                  bg-primary text-white font-montserrat font-semibold
                  px-6 py-4 rounded-[8px] text-base
                  hover:bg-buttonhover transform hover:scale-[1.02]
                  transition-all duration-200 ease-in-out
                  shadow-md hover:shadow-lg
                "
              >
                <LogIn className="w-5 h-5" />
                Login to Continue
              </button>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="
                    flex items-center justify-center gap-2
                    bg-gray-100 text-gray-700 font-montserrat font-medium
                    px-4 py-3 rounded-[8px] text-sm
                    hover:bg-gray-200 border border-[#CCCCCC]
                    transition-all duration-200 ease-in-out
                  "
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </button>

                <button
                  onClick={() => navigate("/")}
                  className="
                    flex items-center justify-center gap-2
                    bg-gray-100 text-gray-700 font-montserrat font-medium
                    px-4 py-3 rounded-[8px] text-sm
                    hover:bg-gray-200 border border-[#CCCCCC]
                    transition-all duration-200 ease-in-out
                  "
                >
                  <Home className="w-4 h-4" />
                  Home
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center mt-6 px-4">
          <p className="font-montserrat text-gray-500 text-sm">
            Need help? Contact support at{" "}
            <a
              href="mailto:support@example.com"
              className="text-primary hover:text-buttonhover underline font-medium"
            >
              support@example.com
            </a>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-20 -z-10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 -z-10" />
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-yellow-100 rounded-full opacity-30 -z-10" />
      </div>
    </div>
  );
};

export default UnAuthorized;
