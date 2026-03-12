"use client";

import React from "react";
import { HelpCircle, X, Check } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import CategorySelect from "@/components/ui/myListings/CategorySelect";
import CategoryMultiSelect from "@/components/ui/myListings/CategoryMultiSelect";

interface Step2MusicianProps {
  performerType: string;
  setPerformerType: (val: string) => void;
  musicGenres: string[];
  setMusicGenres: (val: string[]) => void;
  yearsOfExperience: string;
  setYearsOfExperience: (val: string) => void;
  performanceLanguages: string;
  setPerformanceLanguages: (val: string) => void;
  performanceDuration: string;
  setPerformanceDuration: (val: string) => void;
  providesEquipment: boolean;
  setProvidesEquipment: (val: boolean) => void;
  technicalRequirements: string;
  setTechnicalRequirements: (val: string) => void;
  equipmentCategories: string[];
  setEquipmentCategories: (val: string[]) => void;
  setIsGenresModalOpen: (open: boolean) => void;
}

const Step2Musician: React.FC<Step2MusicianProps> = ({
  performerType,
  setPerformerType,
  musicGenres,
  yearsOfExperience,
  setYearsOfExperience,
  performanceLanguages,
  setPerformanceLanguages,
  performanceDuration,
  setPerformanceDuration,
  providesEquipment,
  setProvidesEquipment,
  equipmentCategories,
  setEquipmentCategories,
  technicalRequirements,
  setTechnicalRequirements,
  setIsGenresModalOpen,
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[28px] font-bold text-gray-900 mb-8 font-sans">Performer Details</h2>

      <div className="flex flex-col gap-8">
        {/* Performer Type */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-3">Performer Type</label>
          <CategorySelect
            value={performerType}
            onChange={setPerformerType}
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

        {/* Music Genres */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 max-w-full">
            <label className="text-[15px] font-bold text-gray-900">Music Genres</label>
            <div className="flex items-center text-gray-400 text-xs gap-1.5 self-start sm:self-auto">
              <Icon component={HelpCircle} size="xs" />
              <span>Select genres you actively perform.</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-3 mt-4 items-center">
            {musicGenres.map((genre) => (
              <div key={genre} className="flex items-center gap-1 px-4 py-2 bg-red-50 text-red-500 rounded-lg text-[14px] font-bold border border-red-200">
                {genre}
              </div>
            ))}
            <button
              onClick={() => setIsGenresModalOpen(true)}
              className="text-blue-500 text-[15px] font-bold flex items-center hover:text-blue-600 transition-colors"
            >
              <span className="mr-1.5 text-lg leading-none">+</span> Add Genres
            </button>
          </div>
        </div>

        {/* Experience, Languages, Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Years of Experience</label>
            <div className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
              <input
                type="text"
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(e.target.value)}
                placeholder="Enter Years of Experience"
                className="w-full bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Languages You Perform In</label>
            <CategorySelect
              value={performanceLanguages}
              onChange={setPerformanceLanguages}
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
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Performance Duration</label>
            <CategorySelect
              value={performanceDuration}
              onChange={setPerformanceDuration}
              placeholder="Select Duration"
              options={[
                "1 Hour",
                "2 Hour",
                "3 hours",
                "4+ hours",

              ]}
            />
          </div>
        </div>

        {/* Equipment Provision Toggle */}
        <div className="flex items-center justify-between pb-2">
          <label className="text-[15px] font-bold text-gray-900">Do You Provide Your Own Equipment?</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setProvidesEquipment(false);
                setEquipmentCategories([]);
              }}
              className={`w-10 h-10 rounded-lg flex items-center justify-center border-2 transition-all ${!providesEquipment
                ? "border-red-500 bg-red-50 text-red-500 shadow-sm"
                : "border-gray-200 text-gray-300 hover:border-gray-300"
                }`}
            >
              <Icon component={X} size="sm" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => setProvidesEquipment(true)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center border-2 transition-all ${providesEquipment
                ? "border-green-500 bg-green-50 text-green-500 shadow-sm"
                : "border-gray-200 text-gray-300 hover:border-gray-300"
                }`}
            >
              <Icon component={Check} size="sm" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {providesEquipment && (
          <div>
            <label className="block text-[15px] font-bold text-gray-900 mb-3">Equipment Category</label>
            <CategoryMultiSelect
              value={equipmentCategories}
              onChange={setEquipmentCategories}
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
          <label className="block text-[15px] font-bold text-gray-900 mb-3">Technical Requirements</label>
          <div className="w-full rounded-xl border border-gray-200 p-4 bg-white focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
            <textarea
              value={technicalRequirements}
              onChange={(e) => setTechnicalRequirements(e.target.value)}
              placeholder="Mention any technical setup required from the venue (e.g., stage size, power outlets)"
              className="w-full min-h-[120px] bg-transparent border-none outline-none text-[15px] text-gray-900 placeholder:text-gray-400 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Musician;
