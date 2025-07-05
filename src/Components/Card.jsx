// components/ui/Card.jsx
import React from "react";
function Card({ title, description, children, footer, className = "" }) {
  return (
    <div className={`rounded-lg  bg-white shadow p-5 ${className}`}>
      {/* Card Title */}
      {title && (
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      )}

      {/* Card Description */}
      {description && <p className="text-gray-600 mb-4">{description}</p>}

      {/* Card Body */}
      <div className="mb-4">{children}</div>

      {/* Card Footer */}
      {footer && (
        <div className="pt-4 border-t border-gray-100 w-full">{footer}</div>
      )}
    </div>
  );
}

export default Card;
