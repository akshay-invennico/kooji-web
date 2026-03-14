"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import { X } from "lucide-react";

interface AddItemsModalProps {
  title: string;
  initialItems: string[];
  onClose: () => void;
  onSave: (items: string[]) => void;
}

const AddItemsModal: React.FC<AddItemsModalProps> = ({ title, initialItems, onClose, onSave }) => {
  const [items, setItems] = useState<string[]>(initialItems);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !items.includes(trimmed)) {
      setItems([...items, trimmed]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleRemove = (itemToRemove: string) => {
    setItems((prev) => prev.filter((item) => item !== itemToRemove));
  };

  const handleSave = () => {
    onSave(items);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-md w-full max-w-2xl px-8 py-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[24px] font-semibold text-[#000000] mb-6 font-outfit">{title}</h2>

        <div className="mb-8">
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Add</label>
          <div className="flex w-full rounded-md border border-[#F0EFEF] bg-white transition-all overflow-hidden h-14">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type here"
              className="flex-1 px-4 bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#F0EFEF]"
            />
            <button
              onClick={handleAdd}
              disabled={!inputValue.trim()}
              className="px-6 text-[#FF3A44] font-bold text-[15px] transition-colors disabled:opacity-50"
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-4 mb-10 min-h-[40px]">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2 text-[#FF3A44] text-[14px] font-bold">
              {item}
              <button 
                onClick={() => handleRemove(item)} 
                className="p-1 rounded-full text-gray-700 focus:outline-none transition-colors"
                aria-label={`Remove ${item}`}
              >
                <Icon component={X} size="xs" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-center gap-6 mt-4">
          <button 
            onClick={onClose}
            className="text-[#000000] font-bold text-[15px] transition-colors"
          >
            Cancel
          </button>
          <Button 
            variant="primary" 
            onClick={handleSave} 
            className="bg-[#FF3A44] rounded-md px-8 py-2.5 font-bold"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddItemsModal;
