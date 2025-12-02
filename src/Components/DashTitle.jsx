/* eslint-disable no-unused-vars */
import React from "react";

const DashTitle = ({ title, subtitle, as: Heading = "h1", className = "" }) => {
  return (
    <div className={`text-center md:text-left ${className}`}>
      <Heading
        className="
          font-clash font-semibold text-accent
          text-2xl sm:text-3xl lg:text-4xl
        "
      >
        {title}
      </Heading>

      {subtitle && (
        <p className="mt-1 text-accent text-base sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default DashTitle;
