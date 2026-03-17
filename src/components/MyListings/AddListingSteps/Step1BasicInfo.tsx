/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { HelpCircle, X } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";

interface Step1BasicInfoProps {
  formik: any;
  LISTING_TYPES: any[];
  setIsTagsModalOpen: (open: boolean) => void;
  setIsAddressModalOpen: (open: boolean) => void;
}

const Step1BasicInfo: React.FC<Step1BasicInfoProps> = ({
  formik,
  LISTING_TYPES,
  setIsTagsModalOpen,
  setIsAddressModalOpen,
}) => {
  const { values, setFieldValue, handleChange, errors, touched } = formik;
  const {
    selectedType,
    title,
    description,
    selectedTags,
    address,
    locationType
  } = values;

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">Basic Info</h2>

      <div className="flex flex-col gap-8">
        {/* Listing Type */}
        <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Listing Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {LISTING_TYPES.map((type: any) => {
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setFieldValue("selectedType", type.id)}
                  className={`flex flex-col items-start justify-between p-4 rounded-lg border-2  w-[175px] h-[100px] text-left transition-all ${isSelected
                    ? "border-[#FF3A44] bg-[#FF3A44]/10"
                    : "border-gray-100/80 bg-white "
                    }`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center  ${isSelected ? "" : " "}`}>
                    <Image
                      src={type.icon}
                      alt={type.label}
                      width={25}
                      height={25}
                      className="object-contain"
                    />
                  </div>
                  <span className={`text-[14px] font-medium  ${isSelected ? "text-[#FF3A44]" : "text-[#000000]"
                    }`}>
                    {type.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Listing Title</label>
          <div className={`w-full rounded-md border px-4 py-3.5 bg-white transition-colors ${touched.title && errors.title ? "border-red-500" : "border-[#F0EFEF]"}`}>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="Enter a clear, descriptive title"
              className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#B9BFC3]"
            />
          </div>
          {touched.title && errors.title && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.title}</p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-[14px] font-medium text-[#000000]">Description</label>
            <span className="text-xs text-gray-400">(Max 500 characters)</span>
          </div>
          <div className={`w-full rounded-md border p-4 bg-white transition-colors ${touched.description && errors.description ? "border-red-500" : "border-[#F0EFEF]"}`}>
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              rows={3}
              placeholder="Describe your offering in detail, including features, experience, or specifications."
              className="w-full min-h-[140px] bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#B9BFC3] resize-none"
              maxLength={500}
            />
          </div>
          {touched.description && errors.description && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.description}</p>
          )}
        </div>

        {/* Tags */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 max-w-full">
            <label className="text-[14px] font-medium text-[#000000]">Tags</label>
            <div className="flex items-center text-gray-400 text-xs gap-1.5 self-start sm:self-auto">
              <Icon component={HelpCircle} size="xs" />
              <span>Help users find your listing</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-3 mt-4 items-center">
            {selectedTags.map((tag: string) => (
              <div key={tag} className="flex items-center gap-1 px-4 py-2 bg-red-50 text-red-500 rounded-lg text-[14px] font-bold border border-red-200">
                {tag}
              </div>
            ))}
            <button
              onClick={() => setIsTagsModalOpen(true)}
              className="text-[#009FFD] text-[14px] font-medium flex items-center "
            >
              <span className="mr-1.5 text-lg leading-none">+</span> Select Tags
            </button>
          </div>
        </div>

        <hr className="border-gray-100 border-t-2 my-2" />

        {/* Location Type */}
        <div className="pb-8">
          <label className="block text-[14px] font-medium text-[#000000] mb-5">Location Type</label>
          <div className="flex flex-col gap-6">
            <label
              className="flex items-center cursor-pointer group w-fit"
              onClick={() => setFieldValue("locationType", "my_location")}
            >
              <div className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 mr-3 transition-colors ${locationType === "my_location" ? "border-[#FF3A44]" : "border-[#F0EFEF]"
                }`}>
                {locationType === "my_location" && <div className="w-2.5 h-2.5 rounded-full bg-[#FF3A44]" />}
              </div>
              <span className={`text-[14px] font-medium transition-colors ${locationType === "my_location" ? "text-[#000000]" : "text-[#000000]"
                }`}>At My Location</span>
            </label>

            {address ? (
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between w-full">
                  <label
                    className="flex items-center flex-1 cursor-pointer group"
                    onClick={() => setFieldValue("locationType", "saved_address")}
                  >
                    <div className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 mr-3 transition-colors ${locationType === "saved_address" ? "border-[#FF3A44]" : "border-[#F0EFEF]"
                      }`}>
                      {locationType === "saved_address" && <div className="w-2.5 h-2.5 rounded-full bg-[#FF3A44]" />}
                    </div>
                    <span className={`text-[14px] font-medium leading-tight transition-colors ${locationType === "saved_address" ? "text-[#000000]" : "text-[#FOEFEF]"
                      }`}>
                      Mr. John Smith, {address}
                    </span>
                  </label>
                  <button
                    onClick={() => setFieldValue("address", "")}
                    className="p-1 text-[#F0EFEF] ml-4"
                  >
                    <Icon component={X} className=" w-4 h-4 text-[#000000]" />
                  </button>
                </div>
                {touched.address && errors.address && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium ml-8">{errors.address}</p>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsAddressModalOpen(true)}
                  className={`text-[#009FFD] text-[14px] font-medium flex items-center w-fit px-2 py-1 rounded transition-colors ${touched.address && errors.address ? "bg-red-50 text-red-500" : ""}`}
                >
                  <span className="mr-1.5 text-lg leading-none">+</span> Add New Address
                </button>
                {touched.address && errors.address && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.address}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1BasicInfo;
