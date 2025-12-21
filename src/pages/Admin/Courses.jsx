import React from "react";

const Courses = () => {
  return (
    <div className="font-clash pt-8">
      <div className="">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-medium text-gray-900 mb-2">
              Course Management
            </h1>
            <p className="text-gray-600">Create and manage courses by level</p>
          </div>
          <button className="px-8 py-3 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors">
            Create New Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
