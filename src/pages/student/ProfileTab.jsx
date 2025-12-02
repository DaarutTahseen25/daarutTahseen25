import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useSearchParams } from "react-router";

const ProfileTab = ({ activeId, toggleActive, tabs }) => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const activeLabel = tabs.find((t) => t.id === activeId)?.label ?? "";

  function closeSelect() {
    setOpen(false);
  }

  const ref = useClickOutside(closeSelect);

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl) {
      const found = tabs.find(
        (t) => t.label.toLowerCase() === tabFromUrl.toLowerCase()
      );
      if (found && found.id !== activeId) {
        toggleActive(found.id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const currentTab = tabs.find((t) => t.id === activeId)?.label;
    if (currentTab) {
      const params = new URLSearchParams(searchParams);
      params.set("tab", currentTab.toLowerCase());
      setSearchParams(params, { replace: true });
    }
  }, [activeId, tabs, searchParams, setSearchParams]);

  useEffect(() => {
    const handleResize = () => closeSelect();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-[480px] mx-auto">
      {/* --- Mobile Custom Select --- */}
      <div className="relative sm:hidden mb-3 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`
            flex w-[200px] items-center justify-between gap-2
            px-10 py-4 rounded-lg font-clash font-medium capitalize
            text-sm bg-white shadow-md
            focus:outline-none focus:ring-2 focus:ring-primary/50
            transition-all duration-300
            ${open ? "ring-2 ring-primary/50" : ""}
          `}
        >
          {activeLabel}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div
            ref={ref}
            className="absolute z-20 mt-2 w-[200px] bg-white shadow-lg rounded-md overflow-hidden ring-1 ring-gray-200"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  toggleActive(tab.id);
                  setOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-2 capitalize text-sm
                  hover:bg-gray-100 transition-colors
                  ${
                    tab.isActive
                      ? "bg-primary/10 font-semibold text-primary"
                      : ""
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* --- Desktop / Tablet Tabs --- */}
      <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[#F6F6F6] rounded-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => toggleActive(tab.id)}
            className={`
              px-3 cursor-pointer sm:px-4 md:px-6 lg:px-7
              py-2 sm:py-2.5 md:py-3
              rounded-lg md:rounded-xl
              capitalize font-clash font-medium
              text-xs sm:text-sm md:text-base lg:text-lg
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-primary/50
              hover:bg-white hover:shadow-md
              ${
                tab.isActive
                  ? "bg-white text-primary font-semibold shadow-lg scale-105"
                  : "text-gray-600"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTab;
