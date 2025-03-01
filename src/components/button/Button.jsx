import React from "react";
import "./button.css";

export function Button({ children, variant = "default", size = "default", ...props }) {
  return (
    <button className={`button ${variant} ${size}`} {...props}>
      {children}
    </button>
  );
}
