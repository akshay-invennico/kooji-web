"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-400 border border-gray-200",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
  outline:
    "bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-400 border border-gray-200",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm gap-1.5",
  md: "px-6 py-2.5 text-base gap-2",
  lg: "px-8 py-3 text-lg gap-2.5",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={type}
        disabled={isDisabled}
        className={clsx(
          "inline-flex items-center justify-center font-semibold rounded-full",
          "transition-colors duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          VARIANT_STYLES[variant],
          SIZE_STYLES[size],
          isDisabled && "opacity-60 cursor-not-allowed pointer-events-none",
          className
        )}
        {...rest}
      >
        {loading ? (
          <Loader2
            size={size === "sm" ? 14 : size === "lg" ? 20 : 16}
            className="animate-spin shrink-0"
          />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}

        {children && <span>{children}</span>}

        {!loading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
