import React from "react";
import PropTypes from "prop-types";

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
  label, // This is to label text displayed above the input
  type = "text", // we will add ourInput types here: text, email, password, etc.
  name, // add name and id of the input here
  value, // Controlled input value this value usually updates with state
  onChange, // add a function to handle input changes
  placeholder, // this adds a placeholder text inside the input
  required = false, // use this if the input is mandatory
  error, // If there is an error, shows error text and red border
  className = "", // this is used optionaly to add Tailwind classes
  ...props //you can add other things like disabled, maxLength etc
}) => {
  return (
    <div className="w-full">
      {/* Render label if provided */}
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
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
        aria-invalid={!!error}
        className={`w-full px-4 py-2 text-sm border rounded-xl outline-none transition 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          dark:bg-gray-800 dark:border-gray-600 dark:text-white 
          ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        {...props}
      />

      {/* Show error message below input */}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

// i defined prop types to catch bugs and clarify usage
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
