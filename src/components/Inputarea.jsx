import React from "react";

const Inputarea = ({
    label, placeholder, required, type
}) => {
  return (
    <div>
      <label htmlFor={label} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type | "text"}
        id={label}
        name={label}
        placeholder={placeholder}
        className="rounded w-full px-4 py-2 border border-gray-300 outline-none"
        required={required}
      />
    </div>
  );
};

export default Inputarea;
