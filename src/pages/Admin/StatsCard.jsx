/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const StatsCard = ({ label, icon: Icon, value, color = "#2563eb" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, Number(value), {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl bg-white/80  border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Gradient overlay */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20"
        style={{ backgroundColor: color }}
      />

      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
            <motion.p className="text-3xl font-bold text-gray-900">
              {rounded}
            </motion.p>
          </div>
          <div
            className="flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${color}15` }}
          >
            {Icon && <Icon className="w-6 h-6" style={{ color }} />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
