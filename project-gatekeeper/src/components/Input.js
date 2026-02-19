import React from "react";

const Input = ({ type, placeholder, value, onChange, error }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`input ${error ? "border-red" : "border-gray"}`}
    required
  />
);

export default Input;
