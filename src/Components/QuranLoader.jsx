// QuranLoader.jsx
import React from "react";
import QuranIcon from "./QuranIcon";

const QuranLoader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-secondary">
      <div className="animate-pulse p-6 rounded-full border-4 border-accent border-dashed">
        <QuranIcon className="text-accent animate-pulse" />
      </div>
    </div>
  );
};

export default QuranLoader;
