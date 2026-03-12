"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";
import Button from "@/components/ui/button/Button";

interface HighlightCategory {
  title: string;
  options: string[];
}

const HIGHLIGHT_CATEGORIES: HighlightCategory[] = [
  {
    title: "Sound & Acoustics",
    options: [
      "Sound-Friendly Acoustics",
      "Soundproofed Interiors",
      "In-Built Sound System",
      "DJ Console Setup Available",
      "Microphones Included",
      "Acoustic Panels Installed",
      "Soundproofed Studio Environment",
    ],
  },
  {
    title: "Lighting",
    options: [
      "Noise-Controlled Environment",
      "High-Fidelity Audio System",
      "Acoustic Panels Installed",
      "Multi-Zone Sound Distribution",
      "Soundproofing Techniques Applied",
      "Live Sound Monitoring Equipment",
    ],
  },
];

interface SelectHighlightsModalProps {
  onClose: () => void;
  onSave: (selected: string[]) => void;
  initialSelected?: string[];
}

const SelectHighlightsModal: React.FC<SelectHighlightsModalProps> = ({
  onClose,
  onSave,
  initialSelected = [],
}) => {
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((i) => i !== option) : [...prev, option]
    );
  };

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div 
        className="w-full max-w-[700px] bg-white rounded-3xl shadow-xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 flex-none flex justify-between items-center border-b border-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 font-sans">Venue Highlights</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-8">
            {HIGHLIGHT_CATEGORIES.map((category) => (
              <div key={category.title}>
                <h3 className="text-[17px] font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="flex flex-col gap-4">
                  {category.options.map((option) => {
                    const isSelected = selected.includes(option);
                    return (
                      <div 
                        key={option} 
                        className="flex items-center cursor-pointer group w-max"
                        onClick={() => toggleOption(option)}
                      >
                        <div className={`relative flex items-center justify-center w-[20px] h-[20px] rounded border mr-3 transition-colors ${isSelected ? 'bg-[#FE3B4C] border-[#FE3B4C]' : 'bg-white border-gray-300 group-hover:border-[#FE3B4C]'}`}>
                          {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                        </div>
                        <span className={`text-[15px] font-bold transition-colors ${isSelected ? "text-red-500" : "text-gray-400 group-hover:text-gray-900"}`}>
                          {option}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 flex-none flex items-center justify-end gap-6 bg-white border-t border-gray-50">
          <button 
            onClick={onClose}
            className="text-gray-400 font-bold text-[15px] hover:text-gray-600 transition-colors"
          >
            Cancel
          </button>
          <Button 
            variant="primary" 
            onClick={() => onSave(selected)}
            className="bg-[#FE3B4C] hover:bg-red-600 text-white rounded-[12px] px-12 py-3.5 shadow-md shadow-red-200/50 border-none font-bold transition-all h-full"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectHighlightsModal;
