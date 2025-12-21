import React from "react";

const Tabs = React.memo(({ activeTab, setActiveTab }) => {
  const tabs = ["Classes", "Total Students", "Assignment", "Exam"];

  return (
    <div className='w-full mt-6 overflow-hidden'>
      {/* Mobile: Dropdown Style */}
      <div className='sm:hidden'>
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className='w-full p-3 text-base font-medium border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-primary appearance-none cursor-pointer'>
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>

      {/* Tablet/Desktop: Traditional Tabs */}
      <div className='hidden sm:block border-b border-gray-200 overflow-hidden'>
        <div className='flex items-center justify-start gap-2 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 text-sm md:text-base lg:text-lg font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300"
              }`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tablet: Horizontal Scroll Tabs (Alternative) */}
      <div className='hidden xs:block sm:hidden border-b border-gray-200'>
        <div className='flex items-center gap-4 overflow-x-auto scrollbar-hide px-1 pb-0'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-3 text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
              }`}>
              {tab}
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

export default Tabs;
