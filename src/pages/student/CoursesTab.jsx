import React from "react";

const Tabs = React.memo(({ activeTab, setActiveTab }) => {
  const tabs = ["Classes", "Total Courses", "Assignment", "Quiz"];
  return (
    <div className='flex flex-wrap justify-between items-center mt-6 gap-4 text-sm sm:text-base md:text-xl border-b overflow-x-auto'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 whitespace-nowrap ${
            activeTab === tab
              ? "text-green-600 border-b-2 border-green-600"
              : ""
          }`}>
          {tab}
        </button>
      ))}
    </div>
  );
});

export default Tabs;
