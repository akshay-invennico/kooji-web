"use client";

import React, { useState } from "react";

const ServiceAreaForm = () => {
  const [range, setRange] = useState({ min: 1, max: 880 });

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), range.max - 1);
    setRange({ ...range, min: value });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), range.min + 1);
    setRange({ ...range, max: value });
  };

  return (
    <div className="flex-1 max-w-[800px]">
      <div className="mb-8">
        <h2 className="text-[20px] font-semibold text-[#000000] font-outfit">Service Area</h2>
      </div>

      <div className="mb-10">
        <h3 className="text-[16px] font-bold text-[#000000] font-outfit mb-6">Distance Range</h3>

        <div className="flex justify-between items-center mb-4">
          <div className="text-[14px] text-[#686262] font-outfit font-medium">
            From <span className="text-[#000000] font-bold">{range.min} mi</span>
          </div>
          <div className="text-[14px] text-[#686262] font-outfit font-medium">
            To <span className="text-[#000000] font-bold">{range.max} mi</span>
          </div>
        </div>

        <div className="relative w-full h-1 bg-gray-100 rounded-lg mb-10">
          {/* Active Range Bar */}
          <div
            className="absolute h-1 bg-[#FF3A44] rounded-lg"
            style={{
              left: `${(range.min / 1000) * 100}%`,
              right: `${100 - (range.max / 1000) * 100}%`
            }}
          />

          <input
            type="range"
            min="1"
            max="1000"
            value={range.min}
            onChange={handleMinChange}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#FF3A44] [&::-webkit-slider-thumb]:cursor-pointer"
          />
          <input
            type="range"
            min="1"
            max="1000"
            value={range.max}
            onChange={handleMaxChange}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#FF3A44] [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>

        <div className="w-full h-px bg-[#F0EFEF]" />
      </div>

      {/* Submit Button */}
      <button
        type="button"
        className="bg-[#FF3A44] text-white px-10 py-3.5 text-[16px] rounded-md font-semibold font-outfit hover:bg-[#E0343C] transition-all"
        onClick={() => console.log("Saving service area range:", range)}
      >
        Save Changes
      </button>
    </div>
  );
};

export default ServiceAreaForm;
