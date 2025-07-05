//I created this button component that  Supports different variants, sizes, and disabled states

import React from "react";

function Button({
  children, // Text or elements inside the button (e.g., "Join DaarutTahseen")
  variant = "primary", // Determines the button style: primary, secondary, danger, outline
  size = "md", // Determines button size: sm, md, lg
  isDisabled = false, // Whether the button is disabled
  onClick, // Function to call when button is clicked
  type = "button", // Button type (e.g., "button", "submit", "reset")
  className = "", // Extra custom Tailwind classes if needed
}) {
  // this styles styles shared across all buttons
  const base =
    "inline-flex items-center justify-center shadow font-medium rounded focus:outline-none transition-all  cursor-pointer";

  // this are styles for different button sizes
  const sizes = {
    sm: "px-3 py-1.5 text-sm", // Small button
    md: "px-4 py-2 text-base", // Medium button (default)
    lg: "px-6 py-3 text-lg", // Large button
  };

  // this are styles for different button variants (color schemes)
  const variants = {
    primary: "bg-primary text-white hover:bg-primarydark", // Primary color (usually your brand color)
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200", // Neutral gray style
    danger: "bg-red-500 text-white hover:bg-red-600", // Alert/destructive actions
    outline: "border border-gray-400 text-gray-900 hover:bg-gray-50", // Border-only style
    cancel: "bg-transparent border-2 border-primary text-primary ",
  };

  // this will apply opacity and disable pointer if the button is disabled
  const disabled = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  // Render the <button> element with dynamic styles based on props
  return (
    <button
      type={type}
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabled} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
