"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button/Button";

interface SelectTagsModalProps {
  onClose: () => void;
  onSave: (selectedTags: string[]) => void;
  initialSelectedTags?: string[];
  title?: string;
}

const AVAILABLE_TAGS = [
  "live band",
  "Acoustic",
  "DJ setup",
  "Live band", // Note: The design has both lowercase and capitalized versions, reproducing as requested
  "Acoustic performance",
  "Stand-up comedy",
  "Trivia night",
  "Karaoke night",
  "Open mic session",
  "Music festival",
  "DJ workshop",
  "Sound design seminar",
  "Themed dance party",
  "Fashion show",
  "Silent disco",
  "Interactive art installation",
  "Cultural showcase",
  // Duplicates exist in the design image
  "live band",
  "Food and music pairing event",
  "DJ setup",
  "Food and music pairing event",
  "Acoustic",
  "Live band",
  "Silent disco",
  "Acoustic performance",
  "Stand-up comedy",
  "Karaoke night",
  "Open mic session",
  "Music festival",
  "DJ workshop",
  "Sound design seminar",
  "Themed dance party",
  "Interactive art installation",
  "Trivia night",
  "Cultural showcase",
  "Fashion show",
  "Food and music pairing event",
  "Food and music pairing event"
];

// Ensure unique tags for the internal state mapping
const uniqueTags = Array.from(new Set(AVAILABLE_TAGS));

const SelectTagsModal: React.FC<SelectTagsModalProps> = ({ 
  onClose, 
  onSave,
  initialSelectedTags = [],
  title = "Select Tags"
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(initialSelectedTags);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => 
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSave = () => {
    onSave(selectedTags);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div 
        className="w-full max-w-[800px] bg-white rounded-2xl shadow-xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 flex-none">
          <h2 className="text-xl font-bold text-gray-900 font-sans">{title}</h2>
        </div>

        <div className="px-6 sm:px-8 pb-6 flex-1 overflow-y-auto">
          <div className="flex flex-wrap gap-3">
            {/* We map over the array from the design to reproduce the layout */}
            {AVAILABLE_TAGS.map((tag, index) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={`${tag}-${index}`}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2.5 rounded-md text-[13px] font-medium transition-colors border ${
                    isSelected
                      ? "border-red-400 text-red-500 bg-white"
                      : "border-gray-100 text-gray-800 bg-white hover:border-gray-200"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6 sm:p-8 flex-none flex items-center justify-end gap-6 bg-white border-t border-gray-50">
          <button 
            onClick={onClose}
            className="text-gray-500 font-medium text-[15px] hover:text-gray-700 transition-colors"
          >
            Cancel
          </button>
          <Button 
            variant="primary" 
            onClick={handleSave}
            className="bg-red-500 hover:bg-red-600 px-8 py-2.5 rounded-lg shadow-sm border-none"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectTagsModal;
