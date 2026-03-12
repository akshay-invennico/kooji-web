/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { HelpCircle, X } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";

interface Step1BasicInfoProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (desc: string) => void;
  selectedTags: string[];
  setIsTagsModalOpen: (open: boolean) => void;
  address: string;
  setIsAddressModalOpen: (open: boolean) => void;
  setAddress: (addr: string) => void;
  locationType: "my_location" | "saved_address";
  setLocationType: (type: "my_location" | "saved_address") => void;
  LISTING_TYPES: any[];
}

const Step1BasicInfo: React.FC<Step1BasicInfoProps> = ({
  selectedType,
  setSelectedType,
  title,
  setTitle,
  description,
  setDescription,
  selectedTags,
  setIsTagsModalOpen,
  address,
  setIsAddressModalOpen,
  setAddress,
  locationType,
  setLocationType,
  LISTING_TYPES,
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[28px] font-bold text-gray-900 mb-8 font-sans">Basic Info</h2>

      <div className="flex flex-col gap-8">
        {/* Listing Type */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-3">Listing Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {LISTING_TYPES.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex flex-col items-start justify-between p-4 rounded-xl border-2 transition-all h-[110px] text-left hover:shadow-sm ${isSelected
                    ? "border-red-500 bg-red-50/10"
                    : "border-gray-100/80 bg-white hover:border-gray-200"
                    }`}
                >
                  <Icon
                    component={type.icon}
                    size="lg"
                    className={isSelected ? "text-red-500" : "text-gray-400"}
                    strokeWidth={1.5}
                  />
                  <span className={`text-[13px] font-bold leading-tight ${isSelected ? "text-red-500" : "text-gray-900"
                    }`}>
                    {type.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Listing Title */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-3">Listing Title</label>
          <div className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a clear, descriptive title"
              className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-[15px] font-bold text-gray-900">Description</label>
            <span className="text-xs text-gray-400">(Max 500 characters)</span>
          </div>
          <div className="w-full rounded-xl border border-gray-200 p-4 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your offering in detail, including features, experience, or specifications."
              className="w-full min-h-[140px] bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400 resize-none"
              maxLength={500}
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 max-w-full">
            <label className="text-[15px] font-bold text-gray-900">Tags</label>
            <div className="flex items-center text-gray-400 text-xs gap-1.5 self-start sm:self-auto">
              <Icon component={HelpCircle} size="xs" />
              <span>Help users find your listing</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-3 mt-4 items-center">
            {selectedTags.map((tag) => (
              <div key={tag} className="flex items-center gap-1 px-4 py-2 bg-red-50 text-red-500 rounded-lg text-[14px] font-bold border border-red-200">
                {tag}
              </div>
            ))}
            <button
              onClick={() => setIsTagsModalOpen(true)}
              className="text-blue-500 text-[15px] font-bold flex items-center hover:text-blue-600 transition-colors"
            >
              <span className="mr-1.5 text-lg leading-none">+</span> Select Tags
            </button>
          </div>
        </div>

        <hr className="border-gray-100 border-t-2 my-2" />

        {/* Location Type */}
        <div className="pb-8">
          <label className="block text-[15px] font-bold text-gray-900 mb-5">Location Type</label>
          <div className="flex flex-col gap-6">
            <label
              className="flex items-center cursor-pointer group w-fit"
              onClick={() => setLocationType("my_location")}
            >
              <div className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 mr-3 transition-colors ${locationType === "my_location" ? "border-red-500" : "border-gray-300"
                }`}>
                {locationType === "my_location" && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
              </div>
              <span className={`text-[15px] font-bold transition-colors ${locationType === "my_location" ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                }`}>At My Location</span>
            </label>

            {address && (
              <div className="flex items-center justify-between w-full">
                <label
                  className="flex items-center flex-1 cursor-pointer group"
                  onClick={() => setLocationType("saved_address")}
                >
                  <div className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 mr-3 transition-colors ${locationType === "saved_address" ? "border-red-500" : "border-gray-300"
                    }`}>
                    {locationType === "saved_address" && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
                  </div>
                  <span className={`text-[14px] font-bold leading-tight transition-colors ${locationType === "saved_address" ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                    }`}>
                    Mr. John Smith, {address}
                  </span>
                </label>
                <button
                  onClick={() => setAddress("")}
                  className="p-1 text-gray-400 hover:text-gray-600 ml-4"
                >
                  <Icon component={X} size="xs" />
                </button>
              </div>
            )}

            <button
              onClick={() => setIsAddressModalOpen(true)}
              className="text-blue-500 text-[15px] font-bold flex items-center hover:text-blue-600 transition-colors w-fit"
            >
              <span className="mr-1.5 text-lg leading-none">+</span> Add New Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1BasicInfo;
