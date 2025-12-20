import React from "react";
import useUIStore from "../store/useUIStore";

const FiltersAndTabs = () => {
  const {
    searchTerm,
    activeTab,
    setActiveTab,
    setSearchTerm,
    resetCourseFilters,
  } = useUIStore();

  const tabs = ["Classes", "Total Students", "Assignment", "Exam"];

  return (
    <div className="mb-6 mt-4">
      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-2 mb-4 bg-white p-3 rounded shadow">
        <button className="px-3 py-1 border  rounded border-textmuted">
          Filter by
        </button>
        <select className="px-3 py-1 border rounded border-textmuted">
          <option>Date</option>
          <option>Name</option>
        </select>
        <select className="px-3 py-1 border rounded border-textmuted">
          <option>Status</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border rounded flex-1 border-textmuted focus:outline-none focus:ring-none focus:border-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={resetCourseFilters}
          className="px-3 py-1 border text-red-500 rounded border-textmuted"
        >
          Reset Filter
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-textmuted">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 mr-4 text-md md:text-lg md:font-semibold ${
              activeTab === tab
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FiltersAndTabs;
