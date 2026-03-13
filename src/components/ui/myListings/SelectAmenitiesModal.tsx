/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  X, Cherry as Chair, Speaker, Lightbulb, HelpCircle,
  Layers, Zap, Bath, ShieldCheck, Coffee, Wifi,
  UtensilsCrossed, LogOut, Car, Projector, Lock,
  Flame, Bus, Thermometer, PlusSquare, Heart
} from "lucide-react";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";

interface AmenityOption {
  id: string;
  label: string;
  icon: any;
}

const AMENITY_OPTIONS: AmenityOption[] = [
  { id: "chairs_tables", label: "Chairs & Tables", icon: Chair },
  { id: "sound_system", label: "Sound System", icon: Speaker },
  { id: "lighting_setup", label: "Lighting Setup", icon: Lightbulb },
  { id: "staff_support", label: "On-Site Staff Support", icon: HelpCircle },
  { id: "stage_access", label: "Stage Access", icon: Layers },
  { id: "power_supply", label: "Dedicated Power Supply", icon: Zap },
  { id: "restroom", label: "Restroom Facilities", icon: Bath },
  { id: "safety", label: "Safety & Compliance", icon: ShieldCheck },
  { id: "vip_lounge", label: "VIP Lounge Access", icon: Coffee },
  { id: "internet", label: "High-Speed Internet", icon: Wifi },
  { id: "catering", label: "Catering Services", icon: UtensilsCrossed },
  { id: "emergency_exits", label: "Emergency Exits", icon: LogOut },
  { id: "parking", label: "Parking Availability", icon: Car },
  { id: "av_equipment", label: "Audio-Visual Equipment", icon: Projector },
  { id: "security", label: "On-Site Security", icon: Lock },
  { id: "fire_safety", label: "Fire Safety Measures", icon: Flame },
  { id: "transport", label: "Transport Services", icon: Bus },
  { id: "climate_control", label: "Climate Control", icon: Thermometer },
  { id: "first_aid", label: "First Aid Station", icon: PlusSquare },
  { id: "insurance", label: "Insurance Coverage", icon: Heart },
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
        className="w-full max-w-[900px] bg-white rounded-3xl shadow-xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 flex-none flex justify-between items-center border-b border-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 font-sans">Select Amenities</h2>
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
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all gap-3 h-[140px] ${isSelected
                      ? "border-red-500 bg-red-50/10 text-red-500"
                      : "border-gray-100 bg-white text-gray-900 hover:border-gray-200"
                    }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? "text-red-500" : "text-gray-600"}`}>
                    <Icon component={option.icon} size="lg" strokeWidth={1.5} />
                  </div>
                  <span className={`text-[13px] font-bold text-center leading-tight ${isSelected ? "text-red-500" : "text-gray-900"}`}>
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

export default SelectAmenitiesModal;
