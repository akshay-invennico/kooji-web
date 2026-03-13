"use client";

import React from "react";
import { Calendar, Check } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";

interface Step6ReviewProps {
  title: string;
  equipmentCategory: string;
  usageType: string;
  address: string;
  pricing: {
    dailyPrice: string;
    weeklyPrice: string;
    monthlyPrice: string;
    selfDeliveryPrice: string;
  };
  startDate: Date | null;
  endDate: Date | null;
  formatDate: (date: Date | null) => string;
  description: string;
  includes: string[];
  notIncludes: string[];
  brand: string;
  model: string;
  powerOutput: string;
  weight: string;
  condition: string;
  accessories: string;
  coverPhoto: string | null;
  galleryPhotos: (string | null)[];
  selectedType: string;
  performerType: string;
  musicGenres: string[];
  yearsOfExperience: string;
  performanceLanguages: string;
  performanceDuration: string;
  providesEquipment: boolean;
  equipmentCategories: string[];
  technicalRequirements: string;
  techRole: string;
  techExperienceYears: string;
  techServiceType: string;
  techProvidesEquipment: boolean;
  techEquipmentCategories: string[];
  techHandlesSetup: boolean;
  venueHighlights: string[];
  spaceType: string;
  allowedEventTypes: string[];
  propertySize: string;
  maximumCapacity: string;
  standingLimits: string;
  sittingLimits: string;
  noiseRestrictions: boolean;
  noiseRestrictionFrom: string;
  noiseRestrictionTo: string;
  amenities?: string[];
  parkingType?: string;
  parkingCapacity?: string;
}

const Step6Review: React.FC<Step6ReviewProps> = ({
  title,
  equipmentCategory,
  usageType,
  address,
  pricing,
  startDate,
  endDate,
  formatDate,
  description,
  includes,
  notIncludes,
  brand,
  model,
  powerOutput,
  weight,
  condition,
  accessories,
  coverPhoto,
  galleryPhotos,
  selectedType,
  performerType,
  musicGenres,
  yearsOfExperience,
  performanceLanguages,
  performanceDuration,
  providesEquipment,
  equipmentCategories,
  technicalRequirements,
  techRole,
  techExperienceYears,
  techServiceType,
  techProvidesEquipment,
  techEquipmentCategories,
  techHandlesSetup,
  venueHighlights,
  spaceType,
  allowedEventTypes,
  propertySize,
  maximumCapacity,
  standingLimits,
  sittingLimits,
  noiseRestrictions,
  noiseRestrictionFrom,
  noiseRestrictionTo,
  amenities = [],
  parkingType = "",
  parkingCapacity = "",
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto pb-20">
      <h2 className="text-[28px] font-bold text-gray-900 mb-8 font-sans">Review & Publish</h2>

      <div className="space-y-10">
        {/* Images Preview */}
        <div className="flex flex-col gap-4">
          <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
            {coverPhoto ? (
              <img src={coverPhoto} alt="Cover" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No Cover Photo</div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {galleryPhotos.map((photo, index) => (
              <div key={index} className="h-32 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 relative">
                {photo ? (
                  <img src={photo} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Photo</div>
                )}
                {index === 3 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-[13px] font-bold">
                    View all Photos
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Header Info */}
        <div>
          <h1 className="text-[26px] font-bold text-gray-900 mb-2">{title || "Listing Title"}</h1>
          <div className="flex items-center gap-2 text-gray-400 text-[14px] font-medium mb-4">
            <span>
              {selectedType === 'equipment' ? equipmentCategory :
                selectedType === 'musician' ? performerType :
                  selectedType === 'technician' ? techRole :
                    spaceType || "Category"}
            </span>
            <span>•</span>
            <span>
              {selectedType === 'equipment' ? usageType :
                selectedType === 'musician' ? performanceDuration :
                  selectedType === 'technician' ? techServiceType :
                    maximumCapacity || "Details"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-[14px]">
              <div className="w-5 h-5 flex items-center justify-center text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 13V13.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="leading-tight">{address}</span>
            </div>
            <button className="text-red-500 text-[14px] font-bold flex items-center gap-1">
              <span className="underline">Show on Map</span>
            </button>
          </div>
        </div>

        {/* Pricing & Delivery Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pricing Card */}
          <div className="bg-[#F8F8F8] p-6 rounded-[20px] relative">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-gray-900 text-[15px] font-bold">Price:</span>
                  <span className="text-red-500 text-[24px] font-bold">${pricing.dailyPrice}</span>
                  <span className="text-gray-400 text-[15px] font-bold">/day</span>
                </div>
              </div>
              <span className="text-gray-400 text-[13px] font-bold">*1 day minimum</span>
            </div>

            <div className="flex gap-8 mb-8">
              <div className="flex items-baseline gap-1.5">
                <span className="text-red-500 text-[17px] font-bold">${pricing.weeklyPrice}</span>
                <span className="text-gray-400 text-[14px] font-bold">/Week</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-red-500 text-[17px] font-bold">${pricing.monthlyPrice}</span>
                <span className="text-gray-400 text-[14px] font-bold">/Month</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-900 text-[14px] font-bold">From</span>
                <div className="bg-white px-3 py-2.5 rounded-lg flex items-center gap-2 border border-gray-100 shadow-sm">
                  <Icon component={Calendar} size="xs" className="text-gray-400" />
                  <span className="text-[13px] font-bold text-gray-900 whitespace-nowrap">{formatDate(startDate)}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-900 text-[14px] font-bold">To</span>
                <div className="bg-white px-3 py-2.5 rounded-lg flex items-center gap-2 border border-gray-100 shadow-sm">
                  <Icon component={Calendar} size="xs" className="text-gray-400" />
                  <span className="text-[13px] font-bold text-gray-900 whitespace-nowrap">{formatDate(endDate)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Card */}
          <div className="bg-white border border-gray-100 p-6 rounded-[20px] shadow-sm">
            <h3 className="text-[17px] font-bold text-gray-900 mb-2">Delivery & Pickup</h3>
            <p className="text-gray-400 text-[13px] font-medium mb-6 leading-relaxed">How You Want to Deliver & Pick This Booking</p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-red-50 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FE3B4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900">
                    {selectedType === 'equipment' ? 'Self Delivery' : selectedType === 'event_space' ? 'Parking' : 'Own Equipment'}
                  </div>
                  <div className="text-[13px] font-bold text-gray-401">
                    {selectedType === 'equipment' ? (
                      <>
                        <span className="text-red-500">${pricing.selfDeliveryPrice || '0'}</span>
                        <span className="text-gray-400 ml-1">for Drop & Pickup</span>
                      </>
                    ) : selectedType === 'musician' ? (
                      <span className={providesEquipment ? "text-green-500" : "text-red-500"}>
                        {providesEquipment ? 'Provided by Performer' : 'Not Provided'}
                      </span>
                    ) : selectedType === 'technician' ? (
                      <span className={techProvidesEquipment ? "text-green-500" : "text-red-500"}>
                        {techProvidesEquipment ? 'Provided by Technician' : 'Not Provided'}
                      </span>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-gray-900">{parkingType}</span>
                        {parkingCapacity && <span className="text-gray-400 text-[12px]">Capacity: {parkingCapacity} vehicles</span>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Sections */}
        <div className="space-y-8 pt-4">
          <div>
            <h3 className="text-[19px] font-bold text-gray-900 mb-4 font-sans">Description</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-[15px] font-bold text-gray-900 mb-2">Overview</h4>
                <p className="text-gray-400 text-[14px] leading-relaxed font-medium">
                  {description || "No description provided."}
                </p>
              </div>

              {technicalRequirements && (
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">Technical Requirements</h4>
                  <p className="text-gray-400 text-[14px] leading-relaxed font-medium">
                    {technicalRequirements}
                  </p>
                </div>
              )}

              {venueHighlights.length > 0 && (
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">Venue Highlights</h4>
                  <ul className="text-gray-400 text-[14px] leading-relaxed font-medium list-none space-y-1">
                    {venueHighlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {amenities.length > 0 && (
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">Amenities</h4>
                  <ul className="text-gray-400 text-[14px] leading-relaxed font-medium list-none space-y-1">
                    {amenities.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {includes.length > 0 && (
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">What&apos;s Included</h4>
                  <ul className="text-gray-400 text-[14px] leading-relaxed font-medium list-none space-y-1">
                    {includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {notIncludes.length > 0 && (
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">What&apos;s Not Included</h4>
                  <ul className="text-gray-400 text-[14px] leading-relaxed font-medium list-none space-y-1">
                    {notIncludes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-[15px] font-bold text-gray-900 mb-2">Rules and Usages Guideline</h4>
                <ul className="text-gray-400 text-[14px] leading-relaxed font-medium list-none space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full" />Minimum rental: 1 day</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full" />Late return charges apply</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full" />Weekend bookings allowed</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full" />Advance booking recommended</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-[#F8F8F8] p-8 rounded-[24px]">
            <h3 className="text-[19px] font-bold text-gray-900 mb-6 font-sans">Specifications</h3>
            {selectedType === 'equipment' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Brand:</span>
                    <span className="text-gray-900 font-bold">{brand}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Power Output:</span>
                    <span className="text-gray-900 font-bold">{powerOutput}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Weight:</span>
                    <span className="text-gray-900 font-bold">{weight}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Usage Type:</span>
                    <span className="text-gray-900 font-bold">{usageType}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Model:</span>
                    <span className="text-gray-900 font-bold">{model}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Condition:</span>
                    <span className="text-gray-900 font-bold">{condition}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Accessories Included:</span>
                    <span className="text-gray-900 font-bold">{accessories}</span>
                  </div>
                </div>
              </div>
            ) : selectedType === 'musician' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Performer Type:</span>
                    <span className="text-gray-900 font-bold">{performerType}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Genres:</span>
                    <span className="text-gray-900 font-bold">{musicGenres.join(", ")}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Years of Experience:</span>
                    <span className="text-gray-900 font-bold">{yearsOfExperience}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Languages:</span>
                    <span className="text-gray-900 font-bold">{performanceLanguages}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Performance Duration:</span>
                    <span className="text-gray-900 font-bold">{performanceDuration}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Provides Equipment:</span>
                    <span className="text-gray-900 font-bold">{providesEquipment ? "Yes" : "No"}</span>
                  </div>
                  {providesEquipment && equipmentCategories.length > 0 && (
                    <div className="flex gap-2 text-[14px]">
                      <span className="text-gray-400 font-medium">• Equipment Categories:</span>
                      <span className="text-gray-900 font-bold">{equipmentCategories.join(", ")}</span>
                    </div>
                  )}
                </div>
              </div>
            ) : selectedType === 'technician' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Technician Role:</span>
                    <span className="text-gray-900 font-bold">{techRole}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Years of Experience:</span>
                    <span className="text-gray-900 font-bold">{techExperienceYears}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Handles Setup & Breakdown:</span>
                    <span className="text-gray-900 font-bold">{techHandlesSetup ? "Yes" : "No"}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Service Type:</span>
                    <span className="text-gray-900 font-bold">{techServiceType}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Provides Equipment:</span>
                    <span className="text-gray-900 font-bold">{techProvidesEquipment ? "Yes" : "No"}</span>
                  </div>
                  {techProvidesEquipment && techEquipmentCategories.length > 0 && (
                    <div className="flex gap-2 text-[14px]">
                      <span className="text-gray-400 font-medium">• Equipment Categories:</span>
                      <span className="text-gray-900 font-bold">{techEquipmentCategories.join(", ")}</span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Space Type:</span>
                    <span className="text-gray-900 font-bold">{spaceType}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Allowed Event Types:</span>
                    <span className="text-gray-900 font-bold">{allowedEventTypes.join(", ")}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Property Size:</span>
                    <span className="text-gray-900 font-bold">{propertySize}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Maximum Guest Capacity:</span>
                    <span className="text-gray-900 font-bold">{maximumCapacity}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Standing Limits:</span>
                    <span className="text-gray-900 font-bold">{standingLimits}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Sitting Limits:</span>
                    <span className="text-gray-900 font-bold">{sittingLimits}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Noise Restrictions:</span>
                    <span className="text-gray-900 font-bold">{noiseRestrictions ? `Yes (${noiseRestrictionFrom} - ${noiseRestrictionTo})` : "No"}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6Review;
