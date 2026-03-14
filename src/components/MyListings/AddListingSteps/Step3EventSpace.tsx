/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Plus, X, Info } from "lucide-react";

interface Step3EventSpaceProps {
  formik: any;
  onOpenAmenities: () => void;
  onOpenHighlights: () => void;
}

const Step3EventSpace: React.FC<Step3EventSpaceProps> = ({
  formik,
  onOpenAmenities,
  onOpenHighlights,
}) => {
  const { values, setFieldValue, handleChange } = formik;
  const { amenities, spaceHighlights, parkingType, parkingCapacity } = values;

  const removeAmenity = (item: string) => {
    setFieldValue("amenities", amenities.filter((i: string) => i !== item));
  };

  const removeHighlight = (item: string) => {
    setFieldValue("spaceHighlights", spaceHighlights.filter((i: string) => i !== item));
  };


  const parkingOptions = [
    "On-Site Parking",
    "Nearby Parking",
    "Street Parking Only",
    "No Parking Available",
  ];

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">
        Event Space Amenities, Highlights & Parking
      </h2>

      <div className="flex flex-col gap-10">
        {/* Amenities section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[17px] font-semibold text-[#000000]">Amenities</h3>
            <div className="flex items-center gap-1.5 text-gray-500 text-[13px] font-medium">
              <Info size={14} className="text-gray-400" />
              <span>Add Event Space Amenities</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {amenities.map((item: string) => (
              <div key={item} className="flex items-center gap-2 text-[#FF3A44] font-bold text-[14px]">
                <span>{item}</span>
                <button
                  onClick={() => removeAmenity(item)}
                  className="rounded text-[#F0EFEF]"
                >
                  <X size={16} />
                </button>
              </div>
            ))}

            <button
              onClick={onOpenAmenities}
              className="text-[#009FFD] text-[14px] font-medium flex items-center"
            >
              <Plus size={18} />
              <span>Add Amenities</span>
            </button>
          </div>
        </div>

        {/* Venue Highlights section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[17px] font-semibold text-[#000000]">Venue Highlights</h3>
            <div className="flex items-center gap-1.5 text-gray-500 text-[13px] font-medium">
              <Info size={14} className="text-gray-400" />
              <span>Add Features Highlights</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {spaceHighlights.map((item: string) => (
              <div key={item} className="flex items-center gap-2 text-[#FF3A44] font-bold text-[14px]">
                <span>{item}</span>
                <button
                  onClick={() => removeHighlight(item)}
                  className="rounded text-[#F0EFEF]"
                >
                  <X size={16} />
                </button>
              </div>
            ))}

            <button
              onClick={onOpenHighlights}
              className="text-[#009FFD] text-[14px] font-medium flex items-center"
            >
              <Plus size={18} />
              <span>Add Highlights</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-[17px] font-semibold text-[#000000]">Parking Availability</h3>
          <div className="flex flex-col gap-4">
            <label className="text-[14px] font-medium text-[#000000]">Is Parking Available?</label>
            <div className="flex flex-wrap gap-y-4 gap-x-8">
              {parkingOptions.map((option: string) => (
                <div
                  key={option}
                  className="flex items-center cursor-pointer group"
                  onClick={() => setFieldValue("parkingType", option)}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 transition-all ${parkingType === option ? "border-[#FF3A44]" : "border-[#F0EFEF]"}`}>
                    {parkingType === option && <div className="w-2.5 h-2.5 rounded-full bg-[#FF3A44]" />}
                  </div>
                  <span className={`text-[15px] font-medium transition-colors text-[#000000]`}>
                    {option}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[14px] font-medium text-[#000000]">Total Parking Capacity</label>
          <div className="w-full rounded-md border border-[#F0EFEF] px-5 py-4 bg-white">
            <input
              type="text"
              name="parkingCapacity"
              value={parkingCapacity}
              onChange={handleChange}
              placeholder="Enter number of vehicles"
              className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#F0EFEF] font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3EventSpace;
