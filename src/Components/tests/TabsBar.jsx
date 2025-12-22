import React from "react";

const TabsBar = ({ tabs = [], activeTab, onChange }) => {
  return (
    <div className="flex bg-gray-100 w-full sm:w-fit p-1 rounded-b-sm gap-2 mb-6 md:mb-8 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
            activeTab === tab
              ? "bg-white text-teal-600 shadow-md"
              : "bg-transparent text-gray-700 hover:bg-white/50"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabsBar;
