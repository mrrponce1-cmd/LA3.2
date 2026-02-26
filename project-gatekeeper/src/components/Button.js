import React from "react";

const Button = ({ children, type = "button", ...props }) => (
  <button type={type} className="btn" {...props}>
    {children}
  </button>
);

export default Button;
