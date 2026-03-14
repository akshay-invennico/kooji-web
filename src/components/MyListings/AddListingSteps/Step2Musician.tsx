/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { HelpCircle, X, Check } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import CategorySelect from "@/components/ui/myListings/CategorySelect";
import CategoryMultiSelect from "@/components/ui/myListings/CategoryMultiSelect";

interface Step2MusicianProps {
  formik: any;
  setIsGenresModalOpen: (open: boolean) => void;
}

const Step2Musician: React.FC<Step2MusicianProps> = ({
  formik,
  setIsGenresModalOpen,
}) => {
  const { values, setFieldValue, handleChange, errors, touched } = formik;
  const {
    performerType,
    musicGenres,
    yearsOfExperience,
    performanceLanguages,
    performanceDuration,
    providesEquipment,
    equipmentCategories,
    technicalRequirements,
  } = values;

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">Performer Details</h2>

      <div className="flex flex-col gap-8">
        {/* Performer Type */}
        <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Performer Type</label>
          <div className={touched.performerType && errors.performerType ? "border border-red-500 rounded-md" : ""}>
            <CategorySelect
              value={performerType}
              onChange={(val) => setFieldValue("performerType", val)}
              placeholder="Select Type"
              options={[
                "Solo Singer",
                "Band",
                "Instrumentalist",
                "DJ",
                "Music Group",
                "Duo",
                "Tribute Act",
                "Other"
              ]}
            />
          </div>
          {touched.performerType && errors.performerType && (
            <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.performerType}</p>
          )}
        </div>

        {/* Music Genres */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 max-w-full">
            <label className="text-[14px] font-medium text-[#000000]">Music Genres</label>
            <div className="flex items-center text-gray-400 text-xs gap-1.5 self-start sm:self-auto">
              <Icon component={HelpCircle} size="xs" />
              <span>Select genres you actively perform.</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-3 mt-4 items-center">
            {musicGenres.map((genre: string) => (
              <div key={genre} className="flex items-center gap-1 px-4 py-2 bg-red-50 text-red-500 rounded-lg text-[14px] font-bold border border-red-200">
                {genre}
              </div>
            ))}
            <button
              onClick={() => setIsGenresModalOpen(true)}
              className="text-[#009FFD] text-[14px] font-medium flex items-center"
            >
              <span className="mr-1.5 text-lg leading-none">+</span> Add Genres
            </button>
          </div>
        </div>

        {/* Experience, Languages, Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Years of Experience</label>
            <div className={`w-full rounded-md border px-4 py-3.5 bg-white transition-colors ${touched.yearsOfExperience && errors.yearsOfExperience ? "border-red-500" : "border-[#F0EFEF]"}`}>
              <input
                type="text"
                name="yearsOfExperience"
                value={yearsOfExperience}
                onChange={handleChange}
                placeholder="Enter Years of Experience"
                className="w-full bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#F0EFEF]"
              />
            </div>
            {touched.yearsOfExperience && errors.yearsOfExperience && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.yearsOfExperience}</p>
            )}
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Languages You Perform In</label>
            <div className={touched.performanceLanguages && errors.performanceLanguages ? "border border-red-500 rounded-md" : ""}>
              <CategorySelect
                value={performanceLanguages}
                onChange={(val) => setFieldValue("performanceLanguages", val)}
                placeholder="Select Language"
                options={[
                  "English",
                  "Hindi",
                  "Spanish",
                  "French",
                  "Arabic",
                  "Other"
                ]}
              />
            </div>
            {touched.performanceLanguages && errors.performanceLanguages && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.performanceLanguages}</p>
            )}
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Performance Duration</label>
            <div className={touched.performanceDuration && errors.performanceDuration ? "border border-red-500 rounded-md" : ""}>
              <CategorySelect
                value={performanceDuration}
                onChange={(val) => setFieldValue("performanceDuration", val)}
                placeholder="Select Duration"
                options={[
                  "1 Hour",
                  "2 Hour",
                  "3 hours",
                  "4+ hours",

                ]}
              />
            </div>
            {touched.performanceDuration && errors.performanceDuration && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.performanceDuration}</p>
            )}
          </div>
        </div>


        {/* Equipment Provision Toggle */}
        <div className="flex items-center justify-between pb-2">
          <label className="text-[14px] font-medium text-[#000000]">Do You Provide Your Own Equipment?</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setFieldValue("providesEquipment", false);
                setFieldValue("equipmentCategories", []);
              }}
              className={`w-10 h-10 rounded-md flex items-center justify-center border-2 transition-all ${!providesEquipment
                ? "border-[#FF3A44] bg-[#FF3A44]/10 text-[#FF3A44]"
                : "border-[#F0EFEF] text-[#F0EFEF]"
                }`}
            >
              <Icon component={X} size="sm" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => setFieldValue("providesEquipment", true)}
              className={`w-10 h-10 rounded-md flex items-center justify-center border-2 transition-all ${providesEquipment
                ? "border-green-500 bg-green-50 text-green-500"
                : "border-[#F0EFEF] text-[#F0EFEF]"
                }`}
            >
              <Icon component={Check} size="sm" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {providesEquipment && (
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-3">Equipment Category</label>
            <CategoryMultiSelect
              value={equipmentCategories}
              onChange={(val) => setFieldValue("equipmentCategories", val)}
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

        {/* Technical Requirements */}
        <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-3">Technical Requirements</label>
          <div className="w-full rounded-md border border-[#F0EFEF] p-4 bg-white">
            <textarea
              name="technicalRequirements"
              value={technicalRequirements}
              onChange={handleChange}
              placeholder="Mention any technical setup required from the venue (e.g., stage size, power outlets)"
              className="w-full min-h-[120px] bg-transparent border-none outline-none text-[15px] text-[#000000] placeholder:text-[#F0EFEF] resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Musician;
