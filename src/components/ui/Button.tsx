import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-space-xs font-label-lg uppercase tracking-wider transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary: Gradient fill with ambient glow
            "bg-gradient-to-r from-primary-container via-blue-600 to-tertiary-container text-white rounded-xl hover:brightness-110 shadow-[0_0_28px_rgba(0,102,255,0.45)] hover:shadow-[0_0_36px_rgba(0,210,255,0.6)] border-b border-white/30":
              variant === "primary",
            // Secondary (Glass): Translucent surface with border
            "bg-surface-container border border-outline-variant/50 text-on-surface rounded-xl hover:bg-surface-container-high hover:border-secondary/40 hover:text-secondary-fixed shadow-md":
              variant === "secondary",
            // Ghost: Transparent with hover
            "bg-transparent text-white hover:bg-white/5 rounded-lg":
              variant === "ghost",
          },
          {
            "px-space-sm py-space-xs text-xs": size === "sm",
            "px-space-md py-space-sm text-sm": size === "md",
            "px-space-lg py-space-sm text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
