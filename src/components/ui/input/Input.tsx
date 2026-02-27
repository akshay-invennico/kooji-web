"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  label?: string;
  isRequired?: boolean;
  icon?: React.ReactNode;
  error?: string | null;
  touched?: boolean;
  wrapperClassName?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      isRequired = false,
      icon,
      error,
      touched = false,
      wrapperClassName,
      className,
      type = "text",
      placeholder,
      id,
      ...rest
    },
    ref
  ) => {
    const fieldId = id ?? name;
    const showError = touched && !!error;

    return (
      <div className={clsx("w-full", wrapperClassName)}>
        {label && (
          <label
            htmlFor={fieldId}
            className="block mb-1.5 text-xs font-bold text-gray-800"
          >
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="flex items-center gap-2">
          {icon && <span className="shrink-0 text-gray-400">{icon}</span>}
          <input
            ref={ref}
            id={fieldId}
            name={name}
            type={type}
            placeholder={placeholder}
            aria-invalid={showError ? true : undefined}
            aria-describedby={showError ? `${fieldId}-error` : undefined}
            className={clsx(
              "w-full bg-transparent border-none outline-none",
              "text-[13px] md:text-[15px] text-gray-900 placeholder:text-gray-400 font-medium",
              className
            )}
            {...rest}
          />
        </div>

        {showError && (
          <p id={`${fieldId}-error`} role="alert" className="mt-1 text-[10px] text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
