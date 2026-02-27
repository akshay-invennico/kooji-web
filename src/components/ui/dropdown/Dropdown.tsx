/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";

export interface DropdownOptionProps {
  value: string;
  label: string;
}

interface DropdownProps {
  label?: string;
  name?: string;
  options: DropdownOptionProps[];
  onSelect: (_selectedOption: DropdownOptionProps) => void;
  placement?: string;
  isRequired?: boolean;
  value?: DropdownOptionProps | null;
  isSearchable?: boolean;
  onInputChange?: (_inputValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  options,
  onSelect,
  placement = "Select",
  label,
  isRequired = false,
  isSearchable = false,
  value,
  onInputChange,
}) => {
  const [menuTarget, setMenuTarget] = useState<HTMLElement | undefined>();

  useEffect(() => {
    if (typeof document !== "undefined") {
      setMenuTarget(document.body);
    }
  }, []);

  const handleOptionSelect = (option: DropdownOptionProps) => {
    onSelect(option);
  };

  const handleInputChange = (inputValue: string) => {
    if (onInputChange) onInputChange(inputValue);
  };

  const selectStyles: StylesConfig<DropdownOptionProps> = {
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: isFocused
        ? "1.5px solid #9A6AFF"
        : "1px solid rgba(255, 255, 255, 0.4)",
      borderRadius: 0,
      boxShadow: "none",
      padding: "2px 0",
      color: "#FFFFFF",
      fontSize: "0.95rem",
      fontWeight: 400,
      minHeight: "38px",
      cursor: "pointer",
      "&:hover": {
        borderBottom: "1.5px solid #9A6AFF",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#FFFFFF",
    }),
    input: (provided) => ({
      ...provided,
      color: "#FFFFFF",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgba(255, 255, 255, 0.7)",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#FFFFFF",
      paddingRight: "6px",
      "&:hover": { color: "#9A6AFF" },
    }),
    indicatorSeparator: () => ({ display: "none" }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 100000000,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#1E1E1E",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      borderRadius: "8px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected
        ? "#9A6AFF"
        : isFocused
        ? "rgba(154, 106, 255, 0.15)"
        : "transparent",
      color: isSelected ? "#FFFFFF" : "#EDEDED",
      fontWeight: isSelected ? 500 : 400,
      cursor: "pointer",
      padding: "10px 12px",
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: 4,
      paddingBottom: 4,
      maxHeight: "220px",
    }),
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-white mb-2">
          {label}
          {isRequired && <span className="text-[#C7200A] ml-1">*</span>}
        </label>
      )}
      <Select
        name={name}
        placeholder={placement}
        options={options}
        onChange={(option: any) =>
          handleOptionSelect(option as DropdownOptionProps)
        }
        styles={selectStyles}
        onInputChange={handleInputChange}
        value={value}
        isSearchable={isSearchable}
        menuPortalTarget={menuTarget}
        className="placeholder:text-sm placeholder:text-white"
      />
    </div>
  );
};

export default Dropdown;
