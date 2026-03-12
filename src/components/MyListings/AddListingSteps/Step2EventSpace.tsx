"use client";

import React from "react";
import CategorySelect from "@/components/ui/myListings/CategorySelect";
import CategoryMultiSelect from "@/components/ui/myListings/CategoryMultiSelect";

interface Step2EventSpaceProps {
  spaceType: string;
  setSpaceType: (val: string) => void;
  allowedEventTypes: string[];
  setAllowedEventTypes: (val: string[]) => void;
  propertySize: string;
  setPropertySize: (val: string) => void;
  maximumCapacity: string;
  setMaximumCapacity: (val: string) => void;
  standingLimits: string;
  setStandingLimits: (val: string) => void;
  sittingLimits: string;
  setSittingLimits: (val: string) => void;
  noiseRestrictions: boolean;
  setNoiseRestrictions: (val: boolean) => void;
  noiseRestrictionFrom: string;
  setNoiseRestrictionFrom: (val: string) => void;
  noiseRestrictionTo: string;
  setNoiseRestrictionTo: (val: string) => void;
}

const Step2EventSpace: React.FC<Step2EventSpaceProps> = ({
  spaceType,
  setSpaceType,
  allowedEventTypes,
  setAllowedEventTypes,
  propertySize,
  setPropertySize,
  maximumCapacity,
  setMaximumCapacity,
  standingLimits,
  setStandingLimits,
  sittingLimits,
  setSittingLimits,
  noiseRestrictions,
  setNoiseRestrictions,
  noiseRestrictionFrom,
  setNoiseRestrictionFrom,
  noiseRestrictionTo,
  setNoiseRestrictionTo,
}) => {
  const spaceTypeOptions = [
    "Recording Studio",
    "Rehearsal Room",
    "Banquet Hall",
    "Performance Hall",
    "Outdoor Venue",
    "Rooftop Venue",
    "Private Studio",
    "Warehouse Space",
  ];

  const allowedEventOptions = [
    "Concert",
    "Wedding",
    "Corporate Event",
    "Private Party",
    "Rehearsal",
    "Recording Session",
    "Launch Event",
    "Workshop",
  ];

  const capacityOptions = [
    "1 - 15",
    "16 - 30",
    "31 - 45",
    "46 - 60",
    "61 - 75",
    "76 - 90",
    "91 - 105",
    "105 +",
  ];

  const timeOptions = [
    "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", 
    "17:00", "18:00", "19:00", "20:00", 
    "21:00", "22:00", "23:00", "23:59"
  ];

  const getCapacityValue = (cap: string) => {
    if (!cap) return 0;
    if (cap.includes("+")) return 106;
    const parts = cap.split("-");
    return parseInt(parts[parts.length - 1].trim());
  };

  const isStandingLimitExceeded = 
    standingLimits && 
    maximumCapacity && 
    getCapacityValue(standingLimits) > getCapacityValue(maximumCapacity);

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[28px] font-bold text-gray-900 mb-8 font-sans">Event Space Specifications</h2>

      <div className="flex flex-col gap-6">
        {/* Type of Space */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-3">Type of Space</label>
          <CategorySelect
            value={spaceType}
            onChange={setSpaceType}
            placeholder="Select Type"
            options={spaceTypeOptions}
          />
        </div>

        {/* Allowed Event Types */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-3">Allowed Event Types</label>
          <CategoryMultiSelect
            value={allowedEventTypes}
            onChange={setAllowedEventTypes}
            placeholder="Select Allowed Event Types"
            options={allowedEventOptions}
          />
        </div>

        {/* Property Size and Maximum Guest Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Property Size</label>
            <div className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white focus-within:border-gray-300 transition-all">
              <input 
                type="text" 
                value={propertySize}
                onChange={(e) => setPropertySize(e.target.value)}
                placeholder="Enter total square footage" 
                className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400 font-medium" 
              />
            </div>
          </div>
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Maximum Guest Capacity</label>
            <CategorySelect
              value={maximumCapacity}
              onChange={setMaximumCapacity}
              placeholder="Select maximum number of guests"
              options={capacityOptions}
            />
          </div>
        </div>

        {/* Standing Limits and Sitting Limits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Standing Limits</label>
            <div className={`relative ${isStandingLimitExceeded ? "text-red-500" : ""}`}>
              <div className={`rounded-xl border transition-all ${isStandingLimitExceeded ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"}`}>
                <CategorySelect
                  value={standingLimits}
                  onChange={setStandingLimits}
                  placeholder="Select maximum standing Limits"
                  options={capacityOptions}
                />
              </div>
              {isStandingLimitExceeded && (
                <div className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-[#FE3143]">
                  <span className="w-4 h-4 rounded-full border border-[#FE3143] flex items-center justify-center text-[10px] pb-0.5">i</span>
                  Standing Limits can not Exide Max Guest Capacity
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Sitting Limits</label>
            <CategorySelect
              value={sittingLimits}
              onChange={setSittingLimits}
              placeholder="Select maximum sitting Limits"
              options={capacityOptions}
            />
          </div>
        </div>

        {/* Noise Restrictions Toggle */}
        <div className="flex items-center justify-between py-2">
          <label className="text-[15px] font-bold text-gray-900">Are There Noise Restrictions?</label>
          <button
            type="button"
            onClick={() => setNoiseRestrictions(!noiseRestrictions)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${noiseRestrictions ? "bg-[#FE3B4C]" : "bg-gray-200"}`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${noiseRestrictions ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </div>

        {/* Restriction Timings */}
        {noiseRestrictions && (
          <div className="flex flex-col gap-3">
            <label className="block text-[15px] font-bold text-gray-900">Specify restriction timings</label>
            <div className="grid grid-cols-2 gap-4">
              <CategorySelect
                value={noiseRestrictionFrom}
                onChange={setNoiseRestrictionFrom}
                placeholder="From"
                options={timeOptions}
              />
              <CategorySelect
                value={noiseRestrictionTo}
                onChange={setNoiseRestrictionTo}
                placeholder="To"
                options={timeOptions}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step2EventSpace;
