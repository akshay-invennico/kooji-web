/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import CategorySelect from "@/components/ui/myListings/CategorySelect";
import CategoryMultiSelect from "@/components/ui/myListings/CategoryMultiSelect";

interface Step2EventSpaceProps {
  formik: any;
}

const Step2EventSpace: React.FC<Step2EventSpaceProps> = ({
  formik,
}) => {
  const { values, setFieldValue, handleChange, errors, touched } = formik;
  const {
    spaceType,
    allowedEventTypes,
    propertySize,
    maximumCapacity,
    standingLimits,
    sittingLimits,
    noiseRestrictions,
    noiseRestrictionFrom,
    noiseRestrictionTo,
  } = values;

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
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">Event Space Specifications</h2>

      <div className="flex flex-col gap-6">
        {/* Type of Space */}
        <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Type of Space</label>
          <div className={touched.spaceType && errors.spaceType ? "border border-red-500 rounded-md" : ""}>
            <CategorySelect
              value={spaceType}
              onChange={(val) => setFieldValue("spaceType", val)}
              placeholder="Select Type"
              options={spaceTypeOptions}
            />
          </div>
          {touched.spaceType && errors.spaceType && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.spaceType}</p>
          )}
        </div>

        {/* Allowed Event Types */}
        <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Allowed Event Types</label>
          <CategoryMultiSelect
            value={allowedEventTypes}
            onChange={(val) => setFieldValue("allowedEventTypes", val)}
            placeholder="Select Allowed Event Types"
            options={allowedEventOptions}
          />
        </div>

        {/* Property Size and Maximum Guest Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Property Size</label>
            <div className={`w-full rounded-md border px-4 py-3.5 bg-white transition-colors ${touched.propertySize && errors.propertySize ? "border-red-500" : "border-[#F0EFEF]"}`}>
              <input
                type="text"
                name="propertySize"
                value={propertySize}
                onChange={handleChange}
                placeholder="Enter total square footage"
                className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#B9BFC3] font-medium"
              />
            </div>
            {touched.propertySize && errors.propertySize && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.propertySize}</p>
            )}
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Maximum Guest Capacity</label>
            <div className={touched.maximumCapacity && errors.maximumCapacity ? "border border-red-500 rounded-md" : ""}>
              <CategorySelect
                value={maximumCapacity}
                onChange={(val) => setFieldValue("maximumCapacity", val)}
                placeholder="Select maximum number of guests"
                options={capacityOptions}
              />
            </div>
            {touched.maximumCapacity && errors.maximumCapacity && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.maximumCapacity}</p>
            )}
          </div>
        </div>


        {/* Standing Limits and Sitting Limits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Standing Limits</label>
            <div className={`relative ${isStandingLimitExceeded ? "text-[#FF3A44]" : ""}`}>
              <div className={`rounded-md border transition-all ${isStandingLimitExceeded ? "border-[#FF3A44] ring-1 ring-[#FF3A44]" : "border-[#F0EFEF]"}`}>
                <CategorySelect
                  value={standingLimits}
                  onChange={(val) => setFieldValue("standingLimits", val)}
                  placeholder="Select maximum standing Limits"
                  options={capacityOptions}
                />
              </div>
              {isStandingLimitExceeded && (
                <div className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-[#FF3A44]">
                  <span className="w-4 h-4 rounded-full border border-[#FF3A44] flex items-center justify-center text-[10px] pb-0.5">i</span>
                  Standing Limits can not Exide Max Guest Capacity
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Sitting Limits</label>
            <CategorySelect
              value={sittingLimits}
              onChange={(val) => setFieldValue("sittingLimits", val)}
              placeholder="Select maximum sitting Limits"
              options={capacityOptions}
            />
          </div>
        </div>

        <div className="flex items-center justify-between py-2">
          <label className="text-[14px] font-medium text-[#000000]">Are There Noise Restrictions?</label>
          <button
            type="button"
            onClick={() => setFieldValue("noiseRestrictions", !noiseRestrictions)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${noiseRestrictions ? "bg-[#FF3A44]" : "bg-[#F0EFEF]"}`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition duration-200 ease-in-out ${noiseRestrictions ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </div>

        {noiseRestrictions && (
          <div className="flex flex-col gap-3">
            <label className="block text-[14px] font-medium text-[#000000]">Specify restriction timings</label>
            <div className="grid grid-cols-2 gap-4">
              <CategorySelect
                value={noiseRestrictionFrom}
                onChange={(val) => setFieldValue("noiseRestrictionFrom", val)}
                placeholder="From"
                options={timeOptions}
              />
              <CategorySelect
                value={noiseRestrictionTo}
                onChange={(val) => setFieldValue("noiseRestrictionTo", val)}
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
