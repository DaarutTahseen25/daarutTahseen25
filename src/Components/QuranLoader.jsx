import React from "react";

const QuranLoader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-secondary">
      <div className="flex flex-col items-center space-y-4">
        
        {/* Soft pulsing Arabic text */}
        <div className="text-accent text-3xl font-bold animate-pulse">
          تحميل
        </div>

        {/* Minimal glowing line */}
        <div className="w-24 h-1 bg-accent/40 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-accent animate-[loaderSlide_1.4s_linear_infinite]"></div>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes loaderSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default QuranLoader;
