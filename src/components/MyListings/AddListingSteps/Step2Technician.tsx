/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { X, Check } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import CategorySelect from "@/components/ui/myListings/CategorySelect";
import CategoryMultiSelect from "@/components/ui/myListings/CategoryMultiSelect";

interface Step2TechnicianProps {
  formik: any;
}

const Step2Technician: React.FC<Step2TechnicianProps> = ({
  formik,
}) => {
  const { values, setFieldValue, handleChange, errors, touched } = formik;
  const {
    techRole,
    techExperienceYears,
    techServiceType,
    techProvidesEquipment,
    techEquipmentCategories,
    techHandlesSetup,
  } = values;

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">Service Expertise</h2>

      <div className="flex flex-col gap-8">
        {/* Technician Role */}
        <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Technician Role</label>
          <div className={touched.techRole && errors.techRole ? "border border-red-500 rounded-md" : ""}>
            <CategorySelect
              value={techRole}
              onChange={(val) => setFieldValue("techRole", val)}
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
          {touched.techRole && errors.techRole && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.techRole}</p>
          )}
        </div>

        {/* Experience and Service Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Years of Experience</label>
            <div className={`w-full rounded-md border px-4 py-3.5 bg-white transition-colors ${touched.techExperienceYears && errors.techExperienceYears ? "border-red-500" : "border-[#F0EFEF]"}`}>
              <input
                type="text"
                name="techExperienceYears"
                value={techExperienceYears}
                onChange={handleChange}
                placeholder="Enter Years of Experience"
                className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#B9BFC3]"
              />
            </div>
            {touched.techExperienceYears && errors.techExperienceYears && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.techExperienceYears}</p>
            )}
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Service Type</label>
            <div className={touched.techServiceType && errors.techServiceType ? "border border-red-500 rounded-md" : ""}>
              <CategorySelect
                value={techServiceType}
                onChange={(val) => setFieldValue("techServiceType", val)}
                placeholder="Select Type"
                options={[
                  "Live Events",
                  "Studio Sessions",
                  "Both"
                ]}
              />
            </div>
            {touched.techServiceType && errors.techServiceType && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.techServiceType}</p>
            )}
          </div>
        </div>


        <div className="flex items-center justify-between pb-2 border-b border-[#F0EFEF] mb-2">
          <label className="text-[14px] font-medium text-[#000000]">Do You Provide Technical Equipment?</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setFieldValue("techProvidesEquipment", false);
                setFieldValue("techEquipmentCategories", []);
              }}
              className={`text-[14px] font-medium transition-all ${!techProvidesEquipment ? "text-[#FF3A44]" : "text-[#F0EFEF]"}`}
            >
              No
            </button>
            <button
              onClick={() => setFieldValue("techProvidesEquipment", true)}
              className={`text-[14px] font-medium transition-all ${techProvidesEquipment ? "text-green-500" : "text-[#F0EFEF]"}`}
            >
              Yes
            </button>
          </div>
        </div>

        {techProvidesEquipment && (
          <div className="animate-in fade-in slide-in-from-top-2">
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Equipment Category</label>
            <CategoryMultiSelect
              value={techEquipmentCategories}
              onChange={(val) => setFieldValue("techEquipmentCategories", val)}
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

        <div className="flex items-center justify-between pb-2">
          <label className="text-[14px] font-medium text-[#000000]">Do You Handle Setup & Breakdown?</label>
          <button
            type="button"
            onClick={() => setFieldValue("techHandlesSetup", !techHandlesSetup)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${techHandlesSetup ? "bg-[#FF3A44]" : "bg-[#F0EFEF]"}`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition duration-200 ease-in-out ${techHandlesSetup ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Technician;
