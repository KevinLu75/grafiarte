import React from "react";
import { cn } from "../../lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-surface-container-low border border-surface-container-high/60 rounded-xl overflow-hidden shadow-lg group transition-all duration-300",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-space-lg flex flex-col gap-space-md", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";
