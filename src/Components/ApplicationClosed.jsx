import React from "react";
import { CalendarX, Home } from "lucide-react";
import { Link } from "react-router";
import Button from "./Button";

const ApplicationClosed = () => {
  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg text-center animate-in fade-in zoom-in duration-300">
      <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <CalendarX className="w-8 h-8" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-3 font-clash">
        Applications Closed
      </h2>

      <p className="text-gray-600 mb-8 leading-relaxed">
        We are currently not accepting new student applications. Please check
        back later for the next intake or contact support for more information.
      </p>
    </div>
  );
};

export default ApplicationClosed;
