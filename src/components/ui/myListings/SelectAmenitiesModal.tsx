/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/button/Button";
import Image from "next/image";

interface AmenityOption {
  id: string;
  label: string;
  icon: string;
}

const AMENITY_OPTIONS: AmenityOption[] = [
  { id: "chairs_tables", label: "Chairs & Tables", icon: "/icons/aminties/FeatureIcon1.svg" },
  { id: "sound_system", label: "Sound System", icon: "/icons/aminties/FeatureIcon2.svg" },
  { id: "lighting_setup", label: "Lighting Setup", icon: "/icons/aminties/FeatureIcon3.svg" },
  { id: "staff_support", label: "On-Site Staff Support", icon: "/icons/aminties/FeatureIcon4.svg" },
  { id: "stage_access", label: "Stage Access", icon: "/icons/aminties/FeatureIcon5.svg" },
  { id: "power_supply", label: "Dedicated Power Supply", icon: "/icons/aminties/FeatureIcon6.svg" },
  { id: "restroom", label: "Restroom Facilities", icon: "/icons/aminties/FeatureIcon7.svg" },
  { id: "safety", label: "Safety & Compliance", icon: "/icons/aminties/FeatureIcon8.svg" },
  { id: "vip_lounge", label: "VIP Lounge Access", icon: "/icons/aminties/FeatureIcon9.svg" },
  { id: "internet", label: "High-Speed Internet", icon: "/icons/aminties/FeatureIcon10.svg" },
  { id: "catering", label: "Catering Services", icon: "/icons/aminties/FeatureIcon11.svg" },
  { id: "emergency_exits", label: "Emergency Exits", icon: "/icons/aminties/FeatureIcon12.svg" },
  { id: "parking", label: "Parking Availability", icon: "/icons/aminties/FeatureIcon13.svg" },
  { id: "av_equipment", label: "Audio-Visual Equipment", icon: "/icons/aminties/FeatureIcon14.svg" },
  { id: "security", label: "On-Site Security", icon: "/icons/aminties/FeatureIcon15.svg" },
  { id: "fire_safety", label: "Fire Safety Measures", icon: "/icons/aminties/FeatureIcon16.svg" },
  { id: "transport", label: "Transport Services", icon: "/icons/aminties/FeatureIcon17.svg" },
  { id: "climate_control", label: "Climate Control", icon: "/icons/aminties/FeatureIcon18.svg" },
  { id: "first_aid", label: "First Aid Station", icon: "/icons/aminties/FeatureIcon19.svg" },
  { id: "insurance", label: "Insurance Coverage", icon: "/icons/aminties/FeatureIcon20.svg" },
];

interface SelectAmenitiesModalProps {
  onClose: () => void;
  onSave: (selected: string[]) => void;
  initialSelected?: string[];
}

const SelectAmenitiesModal: React.FC<SelectAmenitiesModalProps> = ({
  onClose,
  onSave,
  initialSelected = [],
}) => {
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const toggleOption = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div
        className="w-full max-w-[900px] bg-white rounded-md flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 flex-none flex justify-between items-center border-b border-gray-50">
          <h2 className="text-[24px] font-semibold text-[#000000] font-outfit">Select Amenities</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {AMENITY_OPTIONS.map((option) => {
              const isSelected = selected.includes(option.label);
              return (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.label)}
                  className={`flex flex-col items-center justify-center p-6 rounded-md border-2 transition-all gap-3 h-[120px] ${isSelected
                    ? "border-[#FF3A44] bg-[#FF3A44]/10 text-[#FF3A44]"
                    : "border-[#F0EFEF] bg-white text-[#000000]"
                    }`}
                >
                  <div className={`p-2 rounded-md ${isSelected ? "text-[#FF3A44]" : "text-gray-600"}`}>
                    <Image src={option.icon} alt={option.label} width={32} height={32} className={isSelected ? "brightness-0 invert-34 sepia-86 saturate-5000 hue-rotate-342 brightness-101 contrast-101" : ""} />
                  </div>
                  <span className={`text-[13px] font-bold text-start leading-tight ${isSelected ? "text-[#FF3A44]" : "text-[#000000]"}`}>
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-8 flex-none flex items-center justify-end gap-6 bg-white border-t border-gray-50">
          <button
            onClick={onClose}
            className="text-[#000000] font-bold text-[15px] transition-colors"
          >
            Cancel
          </button>
          <Button
            variant="primary"
            onClick={() => onSave(selected)}
            className="bg-[#FF3A44] text-white rounded-md px-12 py-3.5 border-none font-bold transition-all h-full"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectAmenitiesModal;
