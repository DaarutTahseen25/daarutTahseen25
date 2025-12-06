import React from "react";

const AssessmentTab = React.memo(({ activeTab, setActiveTab, student }) => {
  const tabs = ["Assignments", "Exams"];

  const getTabKey = (tab) => tab.toLowerCase();

  return (
    <div className="w-full mt-6 overflow-hidden">
      {/* Mobile: Dropdown Style */}
      <div className="sm:hidden">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full p-3 text-base font-medium border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-primary capitalize appearance-none cursor-pointer"
        >
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab} ({student[getTabKey(tab)]?.length || 0})
            </option>
          ))}
        </select>
      </div>

      {/* Tablet/Desktop: Traditional Tabs */}
      <div className="hidden sm:block border-b border-gray-200 overflow-hidden">
        <div className="flex items-center justify-start gap-2 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 px-2 text-sm md:text-base  font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 capitalize  ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300"
              }`}
            >
              {tab} ({student[getTabKey(tab)]?.length || 0})
            </button>
          ))}
        </div>
      </div>

      {/* Tablet: Horizontal Scroll Tabs (Alternative) */}
      <div className="hidden xs:block sm:hidden border-b border-gray-200">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-1 pb-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-3 text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
              }`}
            >
              {tab} ({student[getTabKey(tab)]?.length || 0})
            </button>
          ))}
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
});

export default AssessmentTab;
