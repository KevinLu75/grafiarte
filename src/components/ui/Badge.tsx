import React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outline";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full font-label-sm text-[10px] font-semibold uppercase tracking-wider",
          {
            "bg-primary-container/20 text-primary-fixed border border-primary-container/30": variant === "primary",
            "bg-surface-container-lowest/85 backdrop-blur-md text-secondary border border-white/10": variant === "secondary",
            "bg-tertiary-container/20 text-tertiary-fixed border border-tertiary-container/30": variant === "tertiary",
            "bg-surface-container-low border border-primary-container/30 shadow-[0_0_15px_rgba(0,102,255,0.15)] text-secondary-fixed": variant === "outline",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
