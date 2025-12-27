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
  textArea = false,

  ...props // Additional input attributes like disabled, maxLength, etc.
}) => {
  if (textArea) {
    return (
      <div className={type === "radio" ? "" : "w-full"}>
        {label && (
          <label
            htmlFor={name}
            className="block mb-1 font-medium text-textmain font-clash md:text-lg mt-4"
          >
            {label}
          </label>
        )}
        <textarea
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-invalid={!!error}
          className={`w-full px-4 py-3 border rounded outline-none transition focus:ring-none focus:ring-transparent focus:border-primary ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
          {...props}
        ></textarea>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
  if (type === "radio") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <label
          htmlFor={props.id || name}
          className="relative flex items-center cursor-pointer"
        >
          <input
            id={props.id || name}
            name={name}
            type="radio"
            checked={!!props.checked}
            onChange={onChange}
            required={required}
            aria-invalid={!!error}
            className="sr-only"
            {...props}
          />
          <span
            className={`w-5 h-5 rounded-full border-[1px] transition-all duration-200 flex items-center justify-center
              ${
                props.checked
                  ? "border-accent bg-white"
                  : "border-gray-300 bg-white"
              }
            `}
          >
            {props.checked && (
              <span className="w-2.5 h-2.5 rounded-full bg-accent block"></span>
            )}
          </span>
          <span className="ml-2 text-textmain font-clash md:text-lg">
            {label}
          </span>
        </label>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
  return (
    <div className={type === "radio" ? "" : "w-full"}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 font-medium text-textmain font-clash md:text-lg mt-4"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        className={`w-full px-4 py-3 border rounded outline-none transition focus:ring-none focus:ring-transparent focus:border-primary ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
