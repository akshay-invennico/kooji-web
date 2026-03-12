"use client";

import React from "react";
import { HelpCircle, X } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import CategorySelect from "@/components/ui/myListings/CategorySelect";

interface Step2EquipmentProps {
  equipmentCategory: string;
  setEquipmentCategory: (val: string) => void;
  brand: string;
  setBrand: (val: string) => void;
  model: string;
  setModel: (val: string) => void;
  powerOutput: string;
  setPowerOutput: (val: string) => void;
  weight: string;
  setWeight: (val: string) => void;
  yearOfPurchase: string;
  setYearOfPurchase: (val: string) => void;
  condition: string;
  setCondition: (val: string) => void;
  usageType: string;
  setUsageType: (val: string) => void;
  accessories: string;
  setAccessories: (val: string) => void;
  includes: string[];
  removeInclude: (item: string) => void;
  setIsAddIncludesModalOpen: (open: boolean) => void;
  notIncludes: string[];
  removeNotInclude: (item: string) => void;
  setIsAddNotIncludesModalOpen: (open: boolean) => void;
}

const Step2Equipment: React.FC<Step2EquipmentProps> = ({
  equipmentCategory,
  setEquipmentCategory,
  brand,
  setBrand,
  model,
  setModel,
  powerOutput,
  setPowerOutput,
  weight,
  setWeight,
  yearOfPurchase,
  setYearOfPurchase,
  condition,
  setCondition,
  usageType,
  setUsageType,
  accessories,
  setAccessories,
  includes,
  removeInclude,
  setIsAddIncludesModalOpen,
  notIncludes,
  removeNotInclude,
  setIsAddNotIncludesModalOpen,
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[28px] font-bold text-gray-900 mb-8 font-sans">Equipment Details</h2>

      <div className="flex flex-col gap-8">
        {/* Equipment Category */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-3">Equipment Category</label>
          <CategorySelect
            value={equipmentCategory}
            onChange={setEquipmentCategory}
            placeholder="Select Catogery"
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

        {/* Brand & Model */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Brand</label>
            <div className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
              <input 
                type="text" 
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand Name" 
                className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400" 
              />
            </div>
          </div>
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Model</label>
            <div className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
              <input 
                type="text" 
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Model Name/No." 
                className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400" 
              />
            </div>
          </div>
        </div>

        {/* Power Output & Weight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-[15px] font-bold text-gray-900">Power Output</label>
              <span className="text-xs text-gray-400">(If any)</span>
            </div>
            <div className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
              <input 
                type="text" 
                value={powerOutput}
                onChange={(e) => setPowerOutput(e.target.value)}
                placeholder="Power Output (kW)" 
                className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400" 
              />
            </div>
          </div>
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Weight</label>
            <div className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
              <input 
                type="text" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight (kg)" 
                className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400" 
              />
            </div>
          </div>
        </div>

        {/* Year, Condition, Usage */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Year of Purchase</label>
            <CategorySelect
              value={yearOfPurchase}
              onChange={setYearOfPurchase}
              placeholder="Select Year"
              options={[
                "2016", "2017", "2018", "2019", "2020",
                "2021", "2022", "2023", "2024", "2025",
                "2026", "2027"
              ]}
            />
          </div>
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Condition</label>
            <CategorySelect
              value={condition}
              onChange={setCondition}
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
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Usage Type</label>
            <CategorySelect
              value={usageType}
              onChange={setUsageType}
              placeholder="Select Usage Type"
              options={[
                "Indoor",
                "Outdoor",
                "Both"
              ]}
            />
          </div>
        </div>

        <hr className="border-gray-100 border-t-2 my-2" />

        {/* Accessories Included */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-3">Accessories Included</label>
          <div className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
            <input 
              type="text" 
              value={accessories}
              onChange={(e) => setAccessories(e.target.value)}
              placeholder="e.g. Cables, stands, carrying case" 
              className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400" 
            />
          </div>
        </div>

        {/* What it Includes */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 max-w-full">
            <label className="text-[15px] font-bold text-gray-900">What it Includes</label>
            <div className="flex items-center text-gray-400 text-xs gap-1.5 self-start sm:self-auto">
              <Icon component={HelpCircle} size="xs" />
              <span>add Items Includes with this Listing</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 items-center">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-red-500 text-[14px] font-bold">
                {item}
                <button onClick={() => removeInclude(item)} className="p-0.5 hover:bg-red-50 rounded text-gray-700 hover:text-red-600 focus:outline-none">
                  <Icon component={X} size="xs" />
                </button>
              </div>
            ))}
            <button 
              onClick={() => setIsAddIncludesModalOpen(true)}
              className="text-blue-500 text-[14px] font-bold flex items-center hover:text-blue-600 transition-colors"
            >
              <span className="mr-1.5 text-lg leading-none">+</span> Add Items
            </button>
          </div>
        </div>

        <hr className="border-gray-100 border-t-2 my-2" />

        {/* What not Included */}
        <div className="pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 max-w-full">
            <label className="text-[15px] font-bold text-gray-900">What not Included</label>
            <div className="flex items-center text-gray-400 text-xs gap-1.5 self-start sm:self-auto">
              <Icon component={HelpCircle} size="xs" />
              <span>add Items which not Included with this Listing</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 items-center">
            {notIncludes.map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-red-500 text-[14px] font-bold">
                {item}
                <button onClick={() => removeNotInclude(item)} className="p-0.5 hover:bg-red-50 rounded text-gray-700 hover:text-red-600 focus:outline-none">
                  <Icon component={X} size="xs" />
                </button>
              </div>
            ))}
            <button 
              onClick={() => setIsAddNotIncludesModalOpen(true)}
              className="text-blue-500 text-[14px] font-bold flex items-center hover:text-blue-600 transition-colors"
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
