import React from "react";

const Button = ({ children, type = "button" }) => (
  <button type={type} className="btn">
    {children}
  </button>
);

export default Button;
