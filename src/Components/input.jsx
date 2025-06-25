import React from "react";

/**
 * Reusable Input Component
 *
 * Features:
 * - Optional label
 * - Supports all input types (text, email, password, etc.)
 * - Built-in error message and red border when `error` prop is passed
 * - Tailwind styled with dark mode support
 * - Extra props (e.g., `disabled`, `maxLength`) can be passed via ...props
 */

const Input = ({
  label, // Label text displayed above the input
  type = "text", // Input type: text, email, password, etc.
  name, // Name and id of the input
  value, // Controlled input value
  onChange, // Function to handle input changes
  placeholder, // Placeholder text inside the input
  required = false, // HTML5 required validation
  error, // If present, shows error text and red border
  className = "", // Optional Tailwind classes passed from parent
  ...props // Additional input attributes like disabled, maxLength, etc.
}) => {
  return (
    <div className="w-full">
      {/* Render label if provided */}
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 font-medium  text-textmain font-clash md:text-lg mt-4"
        >
          {label}
        </label>
      )}

      {/* Input field */}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error} // accessibility support
        className={`w-full px-4 py-3  border rounded outline-none transition 
          focus:ring-none focus:ring-transparent focus:border-primary 
          
          ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        {...props}
      />

      {/* Show error message below input */}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
