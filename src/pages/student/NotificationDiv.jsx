import React, { useState } from "react";

const NotificationDiv = ({ title, subtitle }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-2xl p-4  bg-white/60 backdrop-blur-sm">
      <div>
        <h1 className="font-clash text-lg font-semibold text-gray-900">
          {title}
        </h1>
        <p className="font-clash text-sm text-gray-600">{subtitle}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => setEnabled((prev) => !prev)}
        className={`
          relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full 
          border-2 border-transparent transition-colors duration-300 ease-in-out 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          ${enabled ? "bg-primary" : "bg-gray-300"}
        `}
      >
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white 
            shadow ring-0 transition duration-300 ease-in-out
            ${enabled ? "translate-x-7 scale-110" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
};

export default NotificationDiv;
