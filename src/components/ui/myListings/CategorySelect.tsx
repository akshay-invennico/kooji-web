"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ value, onChange, options, placeholder = "Select Category" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-full flex items-center justify-between rounded-xl border px-4 py-3.5 bg-white transition-all outline-none",
          isOpen ? "border-gray-300 ring-1 ring-gray-300" : "border-gray-200 hover:border-gray-300"
        )}
      >
        <span className={clsx("text-[15px] font-medium", !value ? "text-gray-900" : "text-gray-900")}>
          {value || placeholder}
        </span>
        <ChevronDown 
          size={18} 
          className={clsx("text-gray-900 transition-transform duration-200", isOpen && "rotate-180")} 
          strokeWidth={2}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] z-50 overflow-hidden">
          <ul className="max-h-[320px] overflow-y-auto py-2">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={clsx(
                    "w-full text-left px-5 py-2.5 text-[15px] font-medium transition-colors hover:bg-red-50/50 outline-none",
                    value === option ? "text-[#FE3B4C]" : "text-gray-900"
                  )}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
