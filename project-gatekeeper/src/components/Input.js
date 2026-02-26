import React from "react";

const Input = ({ type, placeholder, value, onChange, error }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input-box ${error ? "error" : ""}`}
      required   // <-- this triggers the native tooltip
    />
  );
};

export default Input;
