import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

const StatsCard = ({ label, icon: Icon, value, color = "#2462FF" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, Number(value), {
      duration: 1,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return (
    <div
      className="
        flex flex-col sm:flex-row items-center justify-between
         max-w-xs sm:max-w-sm md:max-w-md
        rounded-2xl bg-white shadow-md hover:shadow-lg
        p-4 sm:p-6 transition-shadow duration-300
      "
    >
      {/* Text section */}
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <h2 className="text-sm md:text-base font-medium text-gray-500">
          {label}
        </h2>
        <motion.p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
          {rounded}
        </motion.p>
      </div>

      {/* Icon section */}
      <div
        className="
          flex items-center justify-center
          w-14 h-14 md:w-16 md:h-16
          rounded-xl
          text-white
          shrink-0
        "
        style={{ backgroundColor: color }}
      >
        {Icon && <Icon className="w-6 h-6 md:w-8 md:h-8" />}
      </div>
    </div>
  );
};

export default StatsCard;
