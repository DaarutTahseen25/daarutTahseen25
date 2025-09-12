// // QuranLoader.jsx
// import React from "react";
// import QuranIcon from "./QuranIcon";

// const QuranLoader = () => {
//   return (
//     <div className="flex items-center justify-center w-screen h-screen bg-secondary">
//       <div className="animate-pulse p-6 rounded-full border-4 border-accent border-dashed">
//         <QuranIcon className="text-accent animate-pulse" />
//       </div>
//     </div>
//   );
// };

// export default QuranLoader;

import React from "react";

const QuranLoader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-secondary">
      <div className="flex flex-col items-center space-y-8">
        {/* Main rotating book */}
        <div className="relative">
          <div
            className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center transform rotate-12 animate-spin"
            style={{ animationDuration: "4s" }}
          >
            <span className="text-secondary font-bold text-xl">تحميل</span>
          </div>

          {/* Orbiting dots */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "2s" }}
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent/70 rounded-full"></div>
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-2 h-2 bg-accent/70 rounded-full"></div>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
          </div>
        </div>

        {/* Progress squares */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-accent rounded-sm animate-bounce"></div>
          <div
            className="w-3 h-3 bg-accent/70 rounded-sm animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-accent/50 rounded-sm animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div
            className="w-3 h-3 bg-accent/30 rounded-sm animate-bounce"
            style={{ animationDelay: "0.6s" }}
          ></div>
          <div
            className="w-3 h-3 bg-accent/20 rounded-sm animate-bounce"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>

        {/* Expanding circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-40 h-40 border-2 border-accent/20 rounded-full animate-ping"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute w-60 h-60 border border-accent/10 rounded-full animate-ping"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuranLoader;
