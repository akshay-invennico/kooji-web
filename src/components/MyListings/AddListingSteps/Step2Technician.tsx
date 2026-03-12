"use client";

import React from "react";
import { X, Check } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import CategorySelect from "@/components/ui/myListings/CategorySelect";
import CategoryMultiSelect from "@/components/ui/myListings/CategoryMultiSelect";

interface Step2TechnicianProps {
  techRole: string;
  setTechRole: (val: string) => void;
  techExperienceYears: string;
  setTechExperienceYears: (val: string) => void;
  techServiceType: string;
  setTechServiceType: (val: string) => void;
  techProvidesEquipment: boolean;
  setTechProvidesEquipment: (val: boolean) => void;
  techEquipmentCategories: string[];
  setTechEquipmentCategories: (val: string[]) => void;
  techHandlesSetup: boolean;
  setTechHandlesSetup: (val: boolean) => void;
}

const Step2Technician: React.FC<Step2TechnicianProps> = ({
  techRole,
  setTechRole,
  techExperienceYears,
  setTechExperienceYears,
  techServiceType,
  setTechServiceType,
  techProvidesEquipment,
  setTechProvidesEquipment,
  techEquipmentCategories,
  setTechEquipmentCategories,
  techHandlesSetup,
  setTechHandlesSetup,
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[28px] font-bold text-gray-900 mb-8 font-sans">Service Expertise</h2>

      <div className="flex flex-col gap-8">
        {/* Technician Role */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-3">Technician Role</label>
          <CategorySelect
            value={techRole}
            onChange={setTechRole}
            placeholder="Select Role"
            options={[
              "Sound Engineer",
              "Lighting Technician",
              "Stage Manager",
              "Mixing Engineer",
              "Recording Engineer",
              "DJ Technician",
              "Production Assistant",
              "Other"
            ]}
          />
        </div>

        {/* Experience and Service Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Years of Experience</label>
            <div className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
              <input
                type="text"
                value={techExperienceYears}
                onChange={(e) => setTechExperienceYears(e.target.value)}
                placeholder="Enter Years of Experience"
                className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Service Type</label>
            <CategorySelect
              value={techServiceType}
              onChange={setTechServiceType}
              placeholder="Select Type"
              options={[
                "Live Events",
                "Studio Sessions",
                "Both"
              ]}
            />
          </div>
        </div>

        {/* Equipment Provision Toggle */}
        <div className="flex items-center justify-between pb-2 border-b border-gray-50 mb-2">
          <label className="text-[15px] font-bold text-gray-900">Do You Provide Technical Equipment?</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setTechProvidesEquipment(false);
                setTechEquipmentCategories([]);
              }}
              className={`text-[15px] font-bold transition-all ${!techProvidesEquipment ? "text-red-500" : "text-gray-400 hover:text-gray-600"}`}
            >
              No
            </button>
            <button
              onClick={() => setTechProvidesEquipment(true)}
              className={`text-[15px] font-bold transition-all ${techProvidesEquipment ? "text-green-500" : "text-gray-400 hover:text-gray-600"}`}
            >
              Yes
            </button>
          </div>
        </div>

        {/* Equipment Category Multi Select */}
        {techProvidesEquipment && (
          <div className="animate-in fade-in slide-in-from-top-2">
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Equipment Category</label>
            <CategoryMultiSelect
              value={techEquipmentCategories}
              onChange={setTechEquipmentCategories}
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
                "Harmonium",
              ]}
            />
          </div>
        )}

        {/* Setup & Breakdown Toggle */}
        <div className="flex items-center justify-between pb-2">
          <label className="text-[15px] font-bold text-gray-900">Do You Handle Setup & Breakdown?</label>
          <button
            type="button"
            onClick={() => setTechHandlesSetup(!techHandlesSetup)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${techHandlesSetup ? "bg-[#FE3B4C]" : "bg-gray-200"}`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${techHandlesSetup ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Technician;
