/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import PhotoGalleryModal from "@/components/ui/listingDetails/PhotoGalleryModal";

interface Step6ReviewProps {
  formik: any;
  formatDate: (date: Date | null) => string;
}

const Step6Review: React.FC<Step6ReviewProps> = ({
  formik,
  formatDate,
}) => {
  const { values } = formik;
  const {
    title,
    equipmentCategory,
    usageType,
    address,
    startDate,
    endDate,
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
    spaceHighlights: venueHighlights,
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
    dailyPrice,
    weeklyPrice,
    monthlyPrice,
    selfDeliveryPrice,
  } = values;

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialPhotoIndex, setInitialPhotoIndex] = useState(0);

  const allPhotos = [coverPhoto, ...galleryPhotos].filter(Boolean) as string[];

  const handleOpenGallery = (index: number) => {
    setInitialPhotoIndex(index);
    setIsGalleryOpen(true);
  };

  const pricing = {
    dailyPrice,
    weeklyPrice,
    monthlyPrice,
    selfDeliveryPrice,
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">Review & Publish</h2>

      <div className="space-y-10">
        {/* Images Preview */}
        <div className="flex flex-col gap-4">
          <div
            className="w-full h-[400px] rounded-md overflow-hidden bg-gray-100 border border-[#F0EFEF] cursor-pointer"
            onClick={() => handleOpenGallery(0)}
          >
            {coverPhoto ? (
              <img src={coverPhoto} alt="Cover" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No Cover Photo</div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {galleryPhotos.slice(0, 4).map((photo: string | null, index: number) => (
              <div
                key={index}
                className="h-32 rounded-md overflow-hidden bg-gray-100 border border-[#F0EFEF] relative cursor-pointer"
                onClick={() => handleOpenGallery(index + 1)}
              >
                {photo ? (
                  <img src={photo} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Photo</div>
                )}
                {index === 3 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-[14px] font-medium">
                    View all Photos
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {isGalleryOpen && (
          <PhotoGalleryModal
            images={allPhotos}
            initialIndex={initialPhotoIndex}
            onClose={() => setIsGalleryOpen(false)}
          />
        )}

        {/* Header Info */}
        <div>
          <h1 className="text-[24px] font-semibold text-[#000000] mb-2 font-outfit">{title || "Listing Title"}</h1>
          <div className="flex items-center gap-2 text-[#686262] text-[14px] font-medium mb-4 font-outfit">
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
            <div className="flex items-center gap-2 text-[#686262] text-[14px]">
              <img src="/icons/reviewStep/locationIcon.svg" alt="location" className="w-5 h-5" />
              <span className="leading-tight font-medium">{address}</span>
            </div>
            <button className="text-[#FF3A44] text-[14px] font-medium flex items-center gap-1.5">
              <img src="/icons/reviewStep/mapIcon.svg" alt="map" className="w-5 h-5" />
              <span>Show on Map</span>
            </button>
          </div>
        </div>

        <div className="w-full border-t border-[#F0EFEF]"></div>

        {/* Pricing & Delivery Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pricing Card */}
          <div className="bg-[#F0EFEF] p-6 rounded-md relative">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[#000000] text-[16px] font-semibold font-outfit">Price:</span>
                  <span className="text-[#C5161D] text-[24px] font-bold font-outfit">${pricing.dailyPrice}</span>
                  <span className="text-[#686262] text-[15px] font-bold font-outfit">/day</span>
                </div>
              </div>
              <span className="text-[#686262] text-[14px] font-semibold">*1 day minimum</span>
            </div>

            <div className="flex gap-8 mb-6">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[#C5161D] text-[16px] font-semibold font-outfit">${pricing.weeklyPrice}</span>
                <span className="text-[#686262] text-[14px] font-semibold font-outfit">/Week</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[#C5161D] text-[16px] font-semibold font-outfit">${pricing.monthlyPrice}</span>
                <span className="text-[#686262] text-[14px] font-semibold font-outfit">/Month</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-[#000000] text-[14px] font-medium font-outfit">From</span>
                <div className="bg-white px-3 py-2.5 rounded-md flex items-center gap-2 border border-[#F0EFEF]">
                  <img src="/icons/reviewStep/calender.svg" alt="calendar" className="w-4 h-4" />
                  <span className="text-[14px] font-medium text-[#000000] whitespace-nowrap font-outfit">{formatDate(startDate)}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[#000000] text-[14px] font-medium font-outfit">To</span>
                <div className="bg-white px-3 py-2.5 rounded-md flex items-center gap-2 border border-[#F0EFEF]">
                  <img src="/icons/reviewStep/calender.svg" alt="calendar" className="w-4 h-4" />
                  <span className="text-[14px] font-medium text-[#000000] whitespace-nowrap font-outfit">{formatDate(endDate)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Card */}
          <div className="bg-white border border-[#F0EFEF] p-6 rounded-md">
            <h3 className="text-[18px] font-semibold text-[#000000] mb-3 font-outfit">Delivery & Pickup</h3>
            <p className="text-[#686262] text-[12px] font-medium mb-15 leading-relaxed">How You Want to Deliver & Pick This Booking</p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className=" shrink-0">
                  <img src="/icons/address/truck.svg" alt="delivery" className="w-10 h-10" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[#000000]">
                    {selectedType === 'equipment' ? 'Self Delivery' : selectedType === 'event_space' ? 'Parking' : 'Own Equipment'}
                  </div>
                  <div className="text-[14px] font-semibold text-gray-400">
                    {selectedType === 'equipment' ? (
                      <>
                        <span className="text-[#FF3A44] font-medium  text-[14px]">${pricing.selfDeliveryPrice || '0'}</span>
                        <span className="text-gray-400 ml-1 font-medium text-[14px]">for Drop & Pickup</span>
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
                        <span className="text-[#000000] font-bold">{parkingType}</span>
                        {parkingCapacity && <span className="text-gray-400 text-[12px] font-bold">Capacity: {parkingCapacity} vehicles</span>}
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
            <h3 className="text-[20px] font-bold text-[#000000] mb-4 font-outfit">Description</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-[16px] font-semibold text-[#000000] mb-2">Overview</h4>
                <p className="text-[#686262] text-[14px] leading-relaxed font-medium">
                  {description || "No description provided."}
                </p>
              </div>

              {technicalRequirements && (
                <div>
                  <h4 className="text-[16px] font-semibold text-[#000000] mb-2">Technical Requirements</h4>
                  <p className="text-[#686262] text-[14px] leading-relaxed font-medium">
                    {technicalRequirements}
                  </p>
                </div>
              )}

              {venueHighlights.length > 0 && (
                <div>
                  <h4 className="text-[16px] font-semibold text-[#000000] mb-2">Venue Highlights</h4>
                  <ul className="text-[#686262] text-[14px] leading-relaxed font-medium list-none space-y-1">
                    {venueHighlights.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF3A44] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {amenities.length > 0 && (
                <div>
                  <h4 className="text-[16px] font-semibold text-[#000000]mb-2">Amenities</h4>
                  <ul className="text-[#686262] text-[14px] leading-relaxed font-medium list-none space-y-1">
                    {amenities.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF3A44] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {includes.length > 0 && (
                <div>
                  <h4 className="text-[16px] font-semibold text-[#000000] mb-2">What&apos;s Included</h4>
                  <ul className="text-[#686262] text-[14px] leading-relaxed font-medium list-none space-y-1">
                    {includes.map((item: string, i: number) => (
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
                  <h4 className="text-[16px] font-semibold text-[#000000] mb-2">What&apos;s Not Included</h4>
                  <ul className="text-[#686262] text-[14px] leading-relaxed font-medium list-none space-y-1">
                    {notIncludes.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-[16px] font-semibold text-[#000000] mb-2">Rules and Usages Guideline</h4>
                <ul className="text-[#686262] text-[14px] leading-relaxed font-medium list-none space-y-1">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full" />Minimum rental: 1 day</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full" />Late return charges apply</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full" />Weekend bookings allowed</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full" />Advance booking recommended</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white border border-[#F0EFEF] p-8 rounded-md">
            <h3 className="text-[16px] font-semibold text-[#000000] mb-6 font-outfit">Specifications</h3>
            {selectedType === 'equipment' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#686262] font-medium">• Brand:</span>
                    <span className="text-[#000000] font-medium">{brand}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#686262] font-medium">• Power Output:</span>
                    <span className="text-[#000000] font-medium">{powerOutput}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#686262] font-medium">• Weight:</span>
                    <span className="text-[#000000] font-medium">{weight}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#686262] font-medium">• Usage Type:</span>
                    <span className="text-[#000000] font-medium">{usageType}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#686262] font-medium">• Model:</span>
                    <span className="text-[#000000] font-medium">{model}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#686262] font-medium">• Condition:</span>
                    <span className="text-[#000000] font-medium">{condition}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#686262] font-medium">• Accessories Included:</span>
                    <span className="text-[#000000] font-medium">{accessories}</span>
                  </div>
                </div>
              </div>
            ) : selectedType === 'musician' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Performer Type:</span>
                    <span className="text-[#000000] font-medium">{performerType}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Genres:</span>
                    <span className="text-[#000000] font-medium">{musicGenres.join(", ")}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Years of Experience:</span>
                    <span className="text-[#000000] font-medium">{yearsOfExperience}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Languages:</span>
                    <span className="text-[#000000] font-medium">{performanceLanguages}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Performance Duration:</span>
                    <span className="text-[#000000] font-medium">{performanceDuration}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Provides Equipment:</span>
                    <span className="text-[#000000] font-medium">{providesEquipment ? "Yes" : "No"}</span>
                  </div>
                  {providesEquipment && equipmentCategories.length > 0 && (
                    <div className="flex gap-2 text-[14px]">
                      <span className="text-[#000000] font-medium">• Equipment Categories:</span>
                      <span className="text-[#000000] font-medium">{equipmentCategories.join(", ")}</span>
                    </div>
                  )}
                </div>
              </div>
            ) : selectedType === 'technician' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Technician Role:</span>
                    <span className="text-[#000000] font-medium">{techRole}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Years of Experience:</span>
                    <span className="text-[#000000] font-medium">{techExperienceYears}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Handles Setup & Breakdown:</span>
                    <span className="text-[#000000] font-medium">{techHandlesSetup ? "Yes" : "No"}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Service Type:</span>
                    <span className="text-[#000000] font-medium">{techServiceType}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Provides Equipment:</span>
                    <span className="text-[#000000] font-medium">{techProvidesEquipment ? "Yes" : "No"}</span>
                  </div>
                  {techProvidesEquipment && techEquipmentCategories.length > 0 && (
                    <div className="flex gap-2 text-[14px]">
                      <span className="text-[#000000] font-medium">• Equipment Categories:</span>
                      <span className="text-[#000000] font-medium">{techEquipmentCategories.join(", ")}</span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Space Type:</span>
                    <span className="text-[#000000] font-medium">{spaceType}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Allowed Event Types:</span>
                    <span className="text-[#000000] font-medium">{allowedEventTypes.join(", ")}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Property Size:</span>
                    <span className="text-[#000000] font-medium">{propertySize}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-[#000000] font-medium">• Maximum Guest Capacity:</span>
                    <span className="text-[#000000] font-medium">{maximumCapacity}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Standing Limits:</span>
                    <span className="text-[#000000] font-medium">{standingLimits}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Sitting Limits:</span>
                    <span className="text-[#000000] font-medium">{sittingLimits}</span>
                  </div>
                  <div className="flex gap-2 text-[14px]">
                    <span className="text-gray-400 font-medium">• Noise Restrictions:</span>
                    <span className="text-[#000000] font-medium">{noiseRestrictions ? `Yes (${noiseRestrictionFrom} - ${noiseRestrictionTo})` : "No"}</span>
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
