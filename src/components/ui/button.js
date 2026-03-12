// src/components/ui/button.js
import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({ children, className, size = "md", ...props }) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
