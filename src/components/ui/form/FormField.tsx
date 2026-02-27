"use client";

import React from "react";
import clsx from "clsx";

export interface FormFieldProps {
  name: string;
  label: string;
  icon?: React.ReactNode;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string | null;
  touched?: boolean;
  id?: string;
  className?: string;
  inputRowClassName?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched = false,
  id,
  className,
  inputRowClassName,
}) => {
  const fieldId = id ?? name;
  const showError = touched && !!error;

  return (
    <div className={clsx("w-full", className)}>
      <label
        htmlFor={fieldId}
        className="block text-[11px] md:text-xs font-bold text-gray-800 mb-1.5"
      >
        {label}
      </label>

      <div className={clsx("flex items-center gap-2 md:gap-3", inputRowClassName)}>
        {icon && <span className="shrink-0 text-gray-400">{icon}</span>}
        <input
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={showError || undefined}
          aria-describedby={showError ? `${fieldId}-error` : undefined}
          className="w-full bg-transparent border-none outline-none text-[13px] md:text-[15px] text-gray-900 placeholder:text-gray-400 font-medium"
        />
      </div>

      {showError && (
        <p
          id={`${fieldId}-error`}
          role="alert"
          className="mt-1 text-[10px] text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
