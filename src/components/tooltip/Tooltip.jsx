import React, { useState } from "react";
import "./tooltip.css";

export function TooltipProvider({ children }) {
  return <div className="tooltip-provider">{children}</div>;
}

export function Tooltip({ children }) {
  return <div className="tooltip-container">{children}</div>;
}

export function TooltipTrigger({ children }) {
  return <button className="tooltip-trigger">{children}</button>;
}

export function TooltipContent({ children, position = "top" }) {
  return (
    <div className="tooltip-content" data-position={position}>
      {children}
    </div>
  );
}
