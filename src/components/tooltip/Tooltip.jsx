import React, { useState } from "react";
import "./tooltip.css";

export function TooltipProvider({ children }) {
  return <div className="tooltip-provider">{children}</div>;
}

export function Tooltip({ children }) {
  return <div className="tooltip-container">{children}</div>;
}

export function TooltipTrigger({ children, onMouseEnter, onMouseLeave }) {
  return (
    <div className="tooltip-trigger" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
}

export function TooltipContent({ children, position = "top" }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`tooltip-content ${isVisible ? "visible" : ""}`}
      data-position={position}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
    </div>
  );
}
