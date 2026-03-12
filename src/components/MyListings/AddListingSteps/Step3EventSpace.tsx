"use client";

import React from "react";
import { Plus, X, Info } from "lucide-react";

interface Step3EventSpaceProps {
  amenities: string[];
  setAmenities: (val: string[]) => void;
  spaceHighlights: string[];
  setSpaceHighlights: (val: string[]) => void;
  parkingType: string;
  setParkingType: (val: string) => void;
  parkingCapacity: string;
  setParkingCapacity: (val: string) => void;
  onOpenAmenities: () => void;
  onOpenHighlights: () => void;
}

const Step3EventSpace: React.FC<Step3EventSpaceProps> = ({
  amenities,
  setAmenities,
  spaceHighlights,
  setSpaceHighlights,
  parkingType,
  setParkingType,
  parkingCapacity,
  setParkingCapacity,
  onOpenAmenities,
  onOpenHighlights,
}) => {
  const removeAmenity = (item: string) => {
    setAmenities(amenities.filter((i) => i !== item));
  };

  const removeHighlight = (item: string) => {
    setSpaceHighlights(spaceHighlights.filter((i) => i !== item));
  };

  const parkingOptions = [
    "On-Site Parking",
    "Nearby Parking",
    "Street Parking Only",
    "No Parking Available",
  ];

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[28px] font-bold text-gray-900 mb-8 font-sans">
        Event Space Amenities, Highlights & Parking
      </h2>

      <div className="flex flex-col gap-10">
        {/* Amenities section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[17px] font-bold text-gray-900">Amenities</h3>
            <div className="flex items-center gap-1.5 text-gray-500 text-[13px] font-medium">
              <Info size={14} className="text-gray-400" />
              <span>Add Event Space Amenities</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            {amenities.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[#FE3B4C] font-bold text-[15px]">
                <span>{item}</span>
                <button 
                  onClick={() => removeAmenity(item)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            
            <button 
              onClick={onOpenAmenities}
              className="flex items-center gap-1.5 text-[#00AEEF] font-bold text-[15px] hover:opacity-80 transition-opacity"
            >
              <Plus size={18} />
              <span>Add Amenities</span>
            </button>
          </div>
        </div>

        {/* Venue Highlights section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[17px] font-bold text-gray-900">Venue Highlights</h3>
            <div className="flex items-center gap-1.5 text-gray-500 text-[13px] font-medium">
              <Info size={14} className="text-gray-400" />
              <span>Add Features Highlights</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {spaceHighlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[#FE3B4C] font-bold text-[15px]">
                <span>{item}</span>
                <button 
                  onClick={() => removeHighlight(item)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}

            <button 
              onClick={onOpenHighlights}
              className="flex items-center gap-1.5 text-[#00AEEF] font-bold text-[15px] hover:opacity-80 transition-opacity"
            >
              <Plus size={18} />
              <span>Add Highlights</span>
            </button>
          </div>
        </div>

        {/* Parking Availability section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[17px] font-bold text-gray-900">Parking Availability</h3>
          <div className="flex flex-col gap-4">
            <label className="text-[15px] font-bold text-gray-900">Is Parking Available?</label>
            <div className="flex flex-wrap gap-y-4 gap-x-8">
              {parkingOptions.map((option) => (
                <div 
                  key={option} 
                  className="flex items-center cursor-pointer group"
                  onClick={() => setParkingType(option)}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 transition-all ${parkingType === option ? "border-[#FE3B4C]" : "border-gray-300 group-hover:border-[#FE3B4C]"}`}>
                    {parkingType === option && <div className="w-2.5 h-2.5 rounded-full bg-[#FE3B4C]" />}
                  </div>
                  <span className={`text-[15px] font-bold transition-colors ${parkingType === option ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"}`}>
                    {option}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Total Parking Capacity section */}
        <div className="flex flex-col gap-3">
          <label className="text-[15px] font-bold text-gray-900">Total Parking Capacity</label>
          <div className="w-full rounded-xl border border-gray-100 px-5 py-4 bg-white focus-within:border-gray-200 transition-all">
            <input 
              type="text" 
              value={parkingCapacity}
              onChange={(e) => setParkingCapacity(e.target.value)}
              placeholder="Enter number of vehicles" 
              className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-300 font-medium" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3EventSpace;
