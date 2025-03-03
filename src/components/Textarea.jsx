import React from "react";

const Textarea = ({ label, required, placeholder, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={label}
        name={label}
        rows="4"
        placeholder={placeholder}
        className="rounded w-full px-4 py-2 border border-gray-300 outline-none"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default Textarea;
