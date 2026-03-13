"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import clsx from "clsx";

interface CategoryMultiSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
  placeholder?: string;
}

const CategoryMultiSelect: React.FC<CategoryMultiSelectProps> = ({ value, onChange, options, placeholder = "Select Category" }) => {
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

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
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
        <span className={clsx("text-[15px] truncate max-w-[90%]", value.length === 0 ? "text-gray-900 font-medium" : "text-gray-900 font-medium")}>
          {value.length > 0 ? value.join(", ") : placeholder}
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
            {options.map((option) => {
              const isSelected = value.includes(option);
              return (
                <li key={option} className="px-5 py-2">
                  <button
                    type="button"
                    onClick={() => toggleOption(option)}
                    className="w-full text-left flex items-center gap-3 outline-none group"
                  >
                    <div
                      className={clsx(
                        "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all",
                        isSelected 
                          ? "bg-[#FE3B4C] border-[#FE3B4C] text-white" 
                          : "border-gray-300 bg-white"
                      )}
                    >
                      {isSelected && <Check size={14} strokeWidth={3} />}
                    </div>
                    <span 
                      className={clsx(
                        "text-[15px] font-medium transition-colors",
                        isSelected ? "text-[#FE3B4C]" : "text-gray-900"
                      )}
                    >
                      {option}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryMultiSelect;
