import React, { forwardRef } from "react";

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    isDisabled = false,
    isLoading = false,
    iconLeft,
    iconRight,
    onClick,
    type = "button",
    className = "",
    rounded = "rounded",
    ariaLabel,
    ...props
  },
  ref
) {
  const base =
    "inline-flex items-center justify-center shadow font-medium focus:outline-none transition-all";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary: `bg-primary text-white hover:bg-primarydark ${
      isDisabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer"
    }`,
    secondary: `bg-gray-100 text-gray-900 ${
      isDisabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer"
    }`,
    danger: `bg-red-500 text-white hover:bg-red-600 ${
      isDisabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer"
    }`,
    outline: `border border-gray-400 text-gray-900 hover:bg-gray-50 ${
      isDisabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer"
    }`,
    cancel: `bg-transparent border-2 border-primary text-primary ${
      isDisabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer"
    }`,
    notActive: "bg-light-grey text-dark-grey opacity-80 cursor-not-allowed",
  };

  return (
    <button
      ref={ref}
      type={type}
      className={`${base} ${sizes[size]} ${variants[variant]} ${rounded} ${className}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      aria-label={ariaLabel}
      aria-disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="mr-2 animate-spin w-4 h-4 border-2 border-t-2 border-gray-200 border-t-primary rounded-full"></span>
      )}
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
});

export default Button;
