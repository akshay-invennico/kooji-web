/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { HelpCircle, X } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import CategorySelect from "@/components/ui/myListings/CategorySelect";

interface Step2EquipmentProps {
  formik: any;
  setIsAddIncludesModalOpen: (open: boolean) => void;
  setIsAddNotIncludesModalOpen: (open: boolean) => void;
}

const Step2Equipment: React.FC<Step2EquipmentProps> = ({
  formik,
  setIsAddIncludesModalOpen,
  setIsAddNotIncludesModalOpen,
}) => {
  const { values, setFieldValue, handleChange, errors, touched } = formik;
  const {
    equipmentCategory,
    brand,
    model,
    powerOutput,
    weight,
    yearOfPurchase,
    condition,
    usageType,
    accessories,
    includes,
    notIncludes,
  } = values;

  const removeInclude = (item: string) => setFieldValue("includes", includes.filter((i: string) => i !== item));
  const removeNotInclude = (item: string) => setFieldValue("notIncludes", notIncludes.filter((i: string) => i !== item));

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">Equipment Details</h2>

      <div className="flex flex-col gap-8">
        {/* Equipment Category */}
        <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Equipment Category</label>
          <div className={touched.equipmentCategory && errors.equipmentCategory ? "border border-red-500 rounded-md" : ""}>
            <CategorySelect
              value={equipmentCategory}
              onChange={(val) => setFieldValue("equipmentCategory", val)}
              placeholder="Select Category"
              options={[
                "Theremin",
                "Synthesizer",
                "Keyboard",
                "Sampler",
                "Mellotron",
                "Clavinet",
                "Harpsichord",
                "Piano",
                "Celesta",
                "Organ",
                "Accordion",
                "Harmonium"
              ]}
            />
          </div>
          {touched.equipmentCategory && errors.equipmentCategory && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.equipmentCategory}</p>
          )}
        </div>

        {/* Brand & Model */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Brand</label>
            <div className={`w-full rounded-md border px-4 py-3.5 bg-white transition-colors ${touched.brand && errors.brand ? "border-red-500" : "border-[#F0EFEF]"}`}>
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={handleChange}
                placeholder="Brand Name"
                className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#F0EFEF]"
              />
            </div>
            {touched.brand && errors.brand && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.brand}</p>
            )}
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Model</label>
            <div className={`w-full rounded-md border px-4 py-3.5 bg-white transition-colors ${touched.model && errors.model ? "border-red-500" : "border-[#F0EFEF]"}`}>
              <input
                type="text"
                name="model"
                value={model}
                onChange={handleChange}
                placeholder="Model Name/No."
                className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#F0EFEF]"
              />
            </div>
            {touched.model && errors.model && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.model}</p>
            )}
          </div>
        </div>

        {/* Power Output & Weight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-[14px] font-medium text-[#000000]">Power Output</label>
              <span className="text-xs text-gray-400">(If any)</span>
            </div>
            <div className="w-full rounded-md border border-[#F0EFEF] px-4 py-3.5 bg-white">
              <input
                type="text"
                name="powerOutput"
                value={powerOutput}
                onChange={handleChange}
                placeholder="Power Output (kW)"
                className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#F0EFEF]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Weight</label>
            <div className="w-full rounded-md border border-[#F0EFEF] px-4 py-3.5 bg-white">
              <input
                type="text"
                name="weight"
                value={weight}
                onChange={handleChange}
                placeholder="Weight (kg)"
                className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#F0EFEF]"
              />
            </div>
          </div>
        </div>

        {/* Year, Condition, Usage */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Year of Purchase</label>
            <CategorySelect
              value={yearOfPurchase}
              onChange={(val) => setFieldValue("yearOfPurchase", val)}
              placeholder="Select Year"
              options={[
                "2016", "2017", "2018", "2019", "2020",
                "2021", "2022", "2023", "2024", "2025",
                "2026", "2027"
              ]}
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Condition</label>
            <div className={touched.condition && errors.condition ? "border border-red-500 rounded-md" : ""}>
              <CategorySelect
                value={condition}
                onChange={(val) => setFieldValue("condition", val)}
                placeholder="Select Condition"
                options={[
                  "New",
                  "Like New",
                  "Good",
                  "Used",
                  "Vintage"
                ]}
              />
            </div>
            {touched.condition && errors.condition && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.condition}</p>
            )}
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Usage Type</label>
            <div className={touched.usageType && errors.usageType ? "border border-red-500 rounded-md" : ""}>
              <CategorySelect
                value={usageType}
                onChange={(val) => setFieldValue("usageType", val)}
                placeholder="Select Usage Type"
                options={[
                  "Indoor",
                  "Outdoor",
                  "Both"
                ]}
              />
            </div>
            {touched.usageType && errors.usageType && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.usageType}</p>
            )}
          </div>
        </div>


        <hr className="border-gray-100 border-t-2 my-2" />

        {/* Accessories Included */}
        <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Accessories Included</label>
          <div className="w-full rounded-md border border-[#F0EFEF] px-4 py-3.5 bg-white">
            <input
              type="text"
              name="accessories"
              value={accessories}
              onChange={handleChange}
              placeholder="e.g. Cables, stands, carrying case"
              className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#F0EFEF]"
            />
          </div>
        </div>

        {/* What it Includes */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 max-w-full">
            <label className="text-[14px] font-medium text-[#000000]">What it Includes</label>
            <div className="flex items-center text-gray-400 text-xs gap-1.5 self-start sm:self-auto">
              <Icon component={HelpCircle} size="xs" />
              <span>add Items Includes with this Listing</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 items-center">
            {includes.map((item: string) => (
              <div key={item} className="flex items-center gap-1.5 text-[#FF3A44] text-[14px] font-bold">
                {item}
                <button onClick={() => removeInclude(item)} className="p-0.5 rounded text-gray-700 ">
                  <Icon component={X} size="xs" />
                </button>
              </div>
            ))}
            <button
              onClick={() => setIsAddIncludesModalOpen(true)}
              className="text-[#009FFD] text-[14px] font-medium flex items-center"
            >
              <span className="mr-1.5 text-lg leading-none">+</span> Add Items
            </button>
          </div>
        </div>

        <hr className="border-gray-100 border-t-2 my-2" />

        {/* What not Included */}
        <div className="pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 max-w-full">
            <label className="text-[14px] font-medium text-[#000000]">What not Included</label>
            <div className="flex items-center text-gray-400 text-xs gap-1.5 self-start sm:self-auto">
              <Icon component={HelpCircle} size="xs" />
              <span>add Items which not Included with this Listing</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 items-center">
            {notIncludes.map((item: string) => (
              <div key={item} className="flex items-center gap-1.5 text-[#FF3A44] text-[14px] font-bold">
                {item}
                <button onClick={() => removeNotInclude(item)} className="p-0.5 rounded text-gray-700 ">
                  <Icon component={X} size="xs" />
                </button>
              </div>
            ))}
            <button
              onClick={() => setIsAddNotIncludesModalOpen(true)}
              className="text-[#009FFD] text-[14px] font-medium flex items-center"
            >
              <span className="mr-1.5 text-lg leading-none">+</span> Add Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Equipment;
