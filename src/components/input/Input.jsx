import React from "react";
import "./input.css";

const Input = React.forwardRef(({ type, ...props }, ref) => {
  return <input type={type} className="custom-input" ref={ref} {...props} />;
});

Input.displayName = "Input";

export { Input };
