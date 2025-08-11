import React from "react";

function Button({
  children,
  variant = "primary",
  size = "md",
  isDisabled = false,
  onClick,
  type = "button",
  className = "",
  rounded = "rounded",
}) {
  const base =
    "inline-flex items-center justify-center shadow font-medium focus:outline-none transition-all";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary: "bg-primary text-white hover:bg-primarydark",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-400 text-gray-900 hover:bg-gray-50",
    cancel: "bg-transparent border-2 border-primary text-primary",
    notActive: "bg-light-grey text-dark-grey",
  };

  const cursor = isDisabled
    ? "opacity-80 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      className={`${base} ${sizes[size]} ${variants[variant]} ${cursor} ${rounded} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
