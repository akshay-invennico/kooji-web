/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mic, Activity, PartyPopper, Music, HelpCircle, ArrowLeft, X, Minus, Plus, Check, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import SelectTagsModal from "@/components/ui/myListings/SelectTagsModal";
import AddAddressModal from "@/components/ui/myListings/AddAddressModal";
import AddItemsModal from "@/components/ui/myListings/AddItemsModal";
import ListingPublishedModal from "@/components/ui/myListings/ListingPublishedModal";

// Import Step Components
import Step1BasicInfo from "./AddListingSteps/Step1BasicInfo";
import Step2Equipment from "./AddListingSteps/Step2Equipment";
import Step2Musician from "./AddListingSteps/Step2Musician";
import Step2Technician from "./AddListingSteps/Step2Technician";
import Step2EventSpace from "./AddListingSteps/Step2EventSpace";
import Step3Availability from "./AddListingSteps/Step3Availability";
import Step3EventSpace from "./AddListingSteps/Step3EventSpace";
import Step4Pricing from "./AddListingSteps/Step4Pricing";
import Step5Photos from "./AddListingSteps/Step5Photos";
import Step6Review from "./AddListingSteps/Step6Review";
import SelectAmenitiesModal from "@/components/ui/myListings/SelectAmenitiesModal";
import SelectHighlightsModal from "@/components/ui/myListings/SelectHighlightsModal";

interface AddListingViewProps {
  onClose: () => void;
}

const LISTING_TYPES = [
  { id: "equipment", label: "Equipment Rental", icon: Music },
  { id: "musician", label: "Musician & Singers", icon: Mic },
  { id: "technician", label: "Technicians", icon: Activity },
  { id: "event_space", label: "Event Space", icon: PartyPopper },
];

const AddListingView: React.FC<AddListingViewProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState("equipment");
  const [equipmentCategory, setEquipmentCategory] = useState("Synthesizer");
  const [yearOfPurchase, setYearOfPurchase] = useState("");
  const [condition, setCondition] = useState("");
  const [usageType, setUsageType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isTagsModalOpen, setIsTagsModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [address, setAddress] = useState("Building Number: 225, Bow Street, Royal Opera House, Greater, London, WC2E 7AW");
  const [isAddIncludesModalOpen, setIsAddIncludesModalOpen] = useState(false);
  const [isAddNotIncludesModalOpen, setIsAddNotIncludesModalOpen] = useState(false);
  const [isPublishedModalOpen, setIsPublishedModalOpen] = useState(false);
  const [locationType, setLocationType] = useState<"my_location" | "saved_address">("saved_address");

  // Step 2 Equipment States
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [powerOutput, setPowerOutput] = useState("");
  const [weight, setWeight] = useState("");
  const [accessories, setAccessories] = useState("");

  // Step 2 Musician States
  const [performerType, setPerformerType] = useState("");
  const [musicGenres, setMusicGenres] = useState<string[]>(["Pop", "Rock", "Classical", "Jazz"]);
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [performanceLanguages, setPerformanceLanguages] = useState("");
  const [performanceDuration, setPerformanceDuration] = useState("");
  const [providesEquipment, setProvidesEquipment] = useState(false);
  const [equipmentCategories, setEquipmentCategories] = useState<string[]>([]);
  const [technicalRequirements, setTechnicalRequirements] = useState("");
  const [isGenresModalOpen, setIsGenresModalOpen] = useState(false);

  // Step 2 Event Space States
  const [venueHighlights, setVenueHighlights] = useState<string[]>([]);
  const [spaceType, setSpaceType] = useState("");
  const [allowedEventTypes, setAllowedEventTypes] = useState<string[]>([]);
  const [propertySize, setPropertySize] = useState("");
  const [maximumCapacity, setMaximumCapacity] = useState("");
  const [standingLimits, setStandingLimits] = useState("");
  const [sittingLimits, setSittingLimits] = useState("");
  const [noiseRestrictions, setNoiseRestrictions] = useState(false);
  const [noiseRestrictionFrom, setNoiseRestrictionFrom] = useState("");
  const [noiseRestrictionTo, setNoiseRestrictionTo] = useState("");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [parkingType, setParkingType] = useState("On-Site Parking");
  const [parkingCapacity, setParkingCapacity] = useState("");
  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [isAllowedEventTypesModalOpen, setIsAllowedEventTypesModalOpen] = useState(false);

  // Step 2 Technician States
  const [techRole, setTechRole] = useState("");
  const [techExperienceYears, setTechExperienceYears] = useState("");
  const [techServiceType, setTechServiceType] = useState("");
  const [techProvidesEquipment, setTechProvidesEquipment] = useState(false);
  const [techEquipmentCategories, setTechEquipmentCategories] = useState<string[]>([]);
  const [techHandlesSetup, setTechHandlesSetup] = useState(false);

  // Step 3 State
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [repeatMonthly, setRepeatMonthly] = useState(true);
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(true);
  const [isWeeklyOpen, setIsWeeklyOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Step 3 Weekly Availability State
  const [selectedDays, setSelectedDays] = useState<string[]>(["Mon"]);
  const [repeatWeekly, setRepeatWeekly] = useState(true);

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  // Step 4 Pricing State
  const [pricing, setPricing] = useState({
    dailyRate: true,
    dailyPrice: "99",
    weeklyRate: false,
    weeklyPrice: "299",
    monthlyRate: false,
    monthlyPrice: "2099",
    selfDelivery: true,
    selfDeliveryPrice: "99",
    thirdPartyDelivery: false,
    thirdPartyPrice: "299",
    securityDeposit: true,
    securityDepositValue: "10",
    insurance: false
  });

  const updatePricing = (field: string, value: any) => {
    setPricing(prev => ({ ...prev, [field]: value }));
  };

  // Step 5 Photos & Media State
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
  const [galleryPhotos, setGalleryPhotos] = useState<(string | null)[]>([null, null, null, null]);

  const handleImageUpload = (index: number | 'cover', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (index === 'cover') {
          setCoverPhoto(reader.result as string);
        } else {
          setGalleryPhotos(prev => {
            const next = [...prev];
            next[index] = reader.result as string;
            return next;
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number | 'cover') => {
    if (index === 'cover') {
      setCoverPhoto(null);
    } else {
      setGalleryPhotos(prev => {
        const next = [...prev];
        next[index] = null;
        return next;
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fakeFormik: any = {
    values: { startDate, endDate },
    setFieldValue: (field: string, value: any) => {
      if (field === "startDate") setStartDate(value);
      if (field === "endDate") setEndDate(value);
    },
    setFieldError: () => { }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "Select date";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  const [includes, setIncludes] = useState<string[]>(["2x PA speakers", "Mixer", "Power cables", "Speaker stands"]);
  const [notIncludes, setNotIncludes] = useState<string[]>([]);

  const removeInclude = (item: string) => setIncludes(prev => prev.filter(i => i !== item));
  const removeNotInclude = (item: string) => setNotIncludes(prev => prev.filter(i => i !== item));

  const totalSteps = selectedType === "event_space" ? 7 : 6;

  const handleNext = () => {
    if (currentStep === totalSteps) {
      setIsPublishedModalOpen(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="fixed inset-0 z-200 bg-white flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="flex-none h-[72px] border-b border-gray-100 px-6 sm:px-8 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 -ml-2 text-gray-400 hover:text-gray-900 transition-colors sm:hidden"
            aria-label="Back"
          >
            <Icon component={ArrowLeft} size="lg" />
          </button>
          <Image
            src="/assets/logo.svg"
            alt="Kooji"
            width={110}
            height={36}
            className="h-8 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:flex border-gray-200 text-gray-600 bg-white hover:bg-gray-50 h-10 px-4 rounded-md font-medium text-sm">
            Need help?
          </Button>
          <Button
            variant="ghost"
            onClick={onClose}
            className="border-gray-200 text-gray-600 bg-white hover:bg-gray-50 h-10 px-4 rounded-md font-medium text-sm"
          >
            Save &amp; Exit
          </Button>
        </div>
      </header>

      {/* Main scrollable content */}
      <main className="flex-1 overflow-y-auto flex flex-col items-center">
        <div className="w-full max-w-3xl px-4 sm:px-6 pt-8 pb-32 flex flex-col items-center">

          {/* Stepper */}
          <div className="w-full max-w-xl mx-auto flex items-center gap-2 mb-12">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1 rounded-full ${index < currentStep ? "bg-red-500" : "bg-gray-100"}`}
              />
            ))}
          </div>

          {/* Form Content Steps */}
          <div className="w-full">
            {currentStep === 1 && (
              <Step1BasicInfo
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                selectedTags={selectedTags}
                setIsTagsModalOpen={setIsTagsModalOpen}
                address={address}
                setIsAddressModalOpen={setIsAddressModalOpen}
                setAddress={setAddress}
                locationType={locationType}
                setLocationType={setLocationType}
                LISTING_TYPES={LISTING_TYPES}
              />
            )}

            {currentStep === 2 && (
              <>
                {selectedType === 'equipment' && (
                  <Step2Equipment
                    equipmentCategory={equipmentCategory}
                    setEquipmentCategory={setEquipmentCategory}
                    brand={brand}
                    setBrand={setBrand}
                    model={model}
                    setModel={setModel}
                    powerOutput={powerOutput}
                    setPowerOutput={setPowerOutput}
                    weight={weight}
                    setWeight={setWeight}
                    yearOfPurchase={yearOfPurchase}
                    setYearOfPurchase={setYearOfPurchase}
                    condition={condition}
                    setCondition={setCondition}
                    usageType={usageType}
                    setUsageType={setUsageType}
                    accessories={accessories}
                    setAccessories={setAccessories}
                    includes={includes}
                    removeInclude={removeInclude}
                    setIsAddIncludesModalOpen={setIsAddIncludesModalOpen}
                    notIncludes={notIncludes}
                    removeNotInclude={removeNotInclude}
                    setIsAddNotIncludesModalOpen={setIsAddNotIncludesModalOpen}
                  />
                )}
                {selectedType === 'musician' && (
                  <Step2Musician
                    performerType={performerType}
                    setPerformerType={setPerformerType}
                    musicGenres={musicGenres}
                    setMusicGenres={setMusicGenres}
                    yearsOfExperience={yearsOfExperience}
                    setYearsOfExperience={setYearsOfExperience}
                    performanceLanguages={performanceLanguages}
                    setPerformanceLanguages={setPerformanceLanguages}
                    performanceDuration={performanceDuration}
                    setPerformanceDuration={setPerformanceDuration}
                    providesEquipment={providesEquipment}
                    setProvidesEquipment={setProvidesEquipment}
                    equipmentCategories={equipmentCategories}
                    setEquipmentCategories={setEquipmentCategories}
                    technicalRequirements={technicalRequirements}
                    setTechnicalRequirements={setTechnicalRequirements}
                    setIsGenresModalOpen={setIsGenresModalOpen}
                  />
                )}
                {selectedType === 'technician' && (
                  <Step2Technician
                    techRole={techRole}
                    setTechRole={setTechRole}
                    techExperienceYears={techExperienceYears}
                    setTechExperienceYears={setTechExperienceYears}
                    techServiceType={techServiceType}
                    setTechServiceType={setTechServiceType}
                    techProvidesEquipment={techProvidesEquipment}
                    setTechProvidesEquipment={setTechProvidesEquipment}
                    techEquipmentCategories={techEquipmentCategories}
                    setTechEquipmentCategories={setTechEquipmentCategories}
                    techHandlesSetup={techHandlesSetup}
                    setTechHandlesSetup={setTechHandlesSetup}
                  />
                )}
                {selectedType === 'event_space' && (
                  <Step2EventSpace
                    spaceType={spaceType}
                    setSpaceType={setSpaceType}
                    allowedEventTypes={allowedEventTypes}
                    setAllowedEventTypes={setAllowedEventTypes}
                    propertySize={propertySize}
                    setPropertySize={setPropertySize}
                    maximumCapacity={maximumCapacity}
                    setMaximumCapacity={setMaximumCapacity}
                    standingLimits={standingLimits}
                    setStandingLimits={setStandingLimits}
                    sittingLimits={sittingLimits}
                    setSittingLimits={setSittingLimits}
                    noiseRestrictions={noiseRestrictions}
                    setNoiseRestrictions={setNoiseRestrictions}
                    noiseRestrictionFrom={noiseRestrictionFrom}
                    setNoiseRestrictionFrom={setNoiseRestrictionFrom}
                    noiseRestrictionTo={noiseRestrictionTo}
                    setNoiseRestrictionTo={setNoiseRestrictionTo}
                  />
                )}
              </>
            )}

            {/* Step 3 & Beyond: Shift steps for Event Space */}
            {selectedType === 'event_space' ? (
              <>
                {currentStep === 3 && (
                  <Step3EventSpace
                    amenities={amenities}
                    setAmenities={setAmenities}
                    spaceHighlights={venueHighlights}
                    setSpaceHighlights={setVenueHighlights}
                    parkingType={parkingType}
                    setParkingType={setParkingType}
                    parkingCapacity={parkingCapacity}
                    setParkingCapacity={setParkingCapacity}
                    onOpenAmenities={() => setIsAmenitiesModalOpen(true)}
                    onOpenHighlights={() => setIsHighlightsModalOpen(true)}
                  />
                )}
                {currentStep === 4 && (
                  <Step3Availability
                    isDateRangeOpen={isDateRangeOpen}
                    setIsDateRangeOpen={setIsDateRangeOpen}
                    isCalendarOpen={isCalendarOpen}
                    setIsCalendarOpen={setIsCalendarOpen}
                    startDate={startDate}
                    endDate={endDate}
                    formatDate={formatDate}
                    repeatMonthly={repeatMonthly}
                    setRepeatMonthly={setRepeatMonthly}
                    isWeeklyOpen={isWeeklyOpen}
                    setIsWeeklyOpen={setIsWeeklyOpen}
                    selectedDays={selectedDays}
                    toggleDay={toggleDay}
                    repeatWeekly={repeatWeekly}
                    setRepeatWeekly={setRepeatWeekly}
                    fakeFormik={fakeFormik}
                  />
                )}
                {currentStep === 5 && (
                  <Step4Pricing
                    pricing={pricing}
                    updatePricing={updatePricing}
                  />
                )}
                {currentStep === 6 && (
                  <Step5Photos
                    coverPhoto={coverPhoto}
                    galleryPhotos={galleryPhotos}
                    handleImageUpload={handleImageUpload}
                    removeImage={removeImage}
                  />
                )}
                {currentStep === 7 && (
                  <Step6Review
                    title={title}
                    equipmentCategory={equipmentCategory}
                    usageType={usageType}
                    address={address}
                    pricing={pricing}
                    startDate={startDate}
                    endDate={endDate}
                    formatDate={formatDate}
                    description={description}
                    includes={includes}
                    notIncludes={notIncludes}
                    brand={brand}
                    model={model}
                    powerOutput={powerOutput}
                    weight={weight}
                    condition={condition}
                    accessories={accessories}
                    coverPhoto={coverPhoto}
                    galleryPhotos={galleryPhotos}
                    selectedType={selectedType}
                    performerType={performerType}
                    musicGenres={musicGenres}
                    yearsOfExperience={yearsOfExperience}
                    performanceLanguages={performanceLanguages}
                    performanceDuration={performanceDuration}
                    providesEquipment={providesEquipment}
                    equipmentCategories={equipmentCategories}
                    technicalRequirements={technicalRequirements}
                    techRole={techRole}
                    techExperienceYears={techExperienceYears}
                    techServiceType={techServiceType}
                    techProvidesEquipment={techProvidesEquipment}
                    techEquipmentCategories={techEquipmentCategories}
                    techHandlesSetup={techHandlesSetup}
                    venueHighlights={venueHighlights}
                    amenities={amenities}
                    parkingType={parkingType}
                    parkingCapacity={parkingCapacity}
                    spaceType={spaceType}
                    allowedEventTypes={allowedEventTypes}
                    propertySize={propertySize}
                    maximumCapacity={maximumCapacity}
                    standingLimits={standingLimits}
                    sittingLimits={sittingLimits}
                    noiseRestrictions={noiseRestrictions}
                    noiseRestrictionFrom={noiseRestrictionFrom}
                    noiseRestrictionTo={noiseRestrictionTo}
                  />
                )}
              </>
            ) : (
              <>
                {currentStep === 3 && (
                  <Step3Availability
                    isDateRangeOpen={isDateRangeOpen}
                    setIsDateRangeOpen={setIsDateRangeOpen}
                    isCalendarOpen={isCalendarOpen}
                    setIsCalendarOpen={setIsCalendarOpen}
                    startDate={startDate}
                    endDate={endDate}
                    formatDate={formatDate}
                    repeatMonthly={repeatMonthly}
                    setRepeatMonthly={setRepeatMonthly}
                    isWeeklyOpen={isWeeklyOpen}
                    setIsWeeklyOpen={setIsWeeklyOpen}
                    selectedDays={selectedDays}
                    toggleDay={toggleDay}
                    repeatWeekly={repeatWeekly}
                    setRepeatWeekly={setRepeatWeekly}
                    fakeFormik={fakeFormik}
                  />
                )}
                {currentStep === 4 && (
                  <Step4Pricing
                    pricing={pricing}
                    updatePricing={updatePricing}
                  />
                )}
                {currentStep === 5 && (
                  <Step5Photos
                    coverPhoto={coverPhoto}
                    galleryPhotos={galleryPhotos}
                    handleImageUpload={handleImageUpload}
                    removeImage={removeImage}
                  />
                )}
                {currentStep === 6 && (
                  <Step6Review
                    title={title}
                    equipmentCategory={equipmentCategory}
                    usageType={usageType}
                    address={address}
                    pricing={pricing}
                    startDate={startDate}
                    endDate={endDate}
                    formatDate={formatDate}
                    description={description}
                    includes={includes}
                    notIncludes={notIncludes}
                    brand={brand}
                    model={model}
                    powerOutput={powerOutput}
                    weight={weight}
                    condition={condition}
                    accessories={accessories}
                    coverPhoto={coverPhoto}
                    galleryPhotos={galleryPhotos}
                    selectedType={selectedType}
                    performerType={performerType}
                    musicGenres={musicGenres}
                    yearsOfExperience={yearsOfExperience}
                    performanceLanguages={performanceLanguages}
                    performanceDuration={performanceDuration}
                    providesEquipment={providesEquipment}
                    equipmentCategories={equipmentCategories}
                    technicalRequirements={technicalRequirements}
                    techRole={techRole}
                    techExperienceYears={techExperienceYears}
                    techServiceType={techServiceType}
                    techProvidesEquipment={techProvidesEquipment}
                    techEquipmentCategories={techEquipmentCategories}
                    techHandlesSetup={techHandlesSetup}
                    venueHighlights={venueHighlights}
                    spaceType={spaceType}
                    allowedEventTypes={allowedEventTypes}
                    propertySize={propertySize}
                    maximumCapacity={maximumCapacity}
                    standingLimits={standingLimits}
                    sittingLimits={sittingLimits}
                    noiseRestrictions={noiseRestrictions}
                    noiseRestrictionFrom={noiseRestrictionFrom}
                    noiseRestrictionTo={noiseRestrictionTo}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-none bg-white border-t border-gray-100 w-full relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-0 py-6 flex items-center justify-end gap-5">
          {currentStep > 1 && (
            <Button
              variant="outline"
              onClick={handlePrev}
              className="border border-gray-100 text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-900 rounded-[12px] px-12 py-3.5 font-bold shadow-sm transition-all ml-20"
            >
              Previous
            </Button>
          )}

          <Button
            variant="primary"
            onClick={handleNext}
            className="bg-[#FE3B4C] hover:bg-red-600 text-white rounded-[12px] px-14 py-3.5 shadow-md shadow-red-200/50 border-none font-bold min-w-[160px] transition-all"
          >
            {currentStep === totalSteps ? "Publish" : "Next"}
          </Button>
        </div>
      </footer>

      {/* Modals */}
      {isTagsModalOpen && (
        <SelectTagsModal
          onClose={() => setIsTagsModalOpen(false)}
          onSave={(tags) => setSelectedTags(tags)}
          initialSelectedTags={selectedTags}
        />
      )}

      {isAddressModalOpen && (
        <AddAddressModal
          onClose={() => setIsAddressModalOpen(false)}
          onSave={(addr) => {
            console.log("Saved Address:", addr);
            setAddress(`${addr.buildingNumber}, ${addr.street}, ${addr.area}, ${addr.city}, ${addr.pincode}`);
            setIsAddressModalOpen(false);
          }}
        />
      )}

      {isAddIncludesModalOpen && (
        <AddItemsModal
          title="What it Includes"
          initialItems={includes}
          onClose={() => setIsAddIncludesModalOpen(false)}
          onSave={(items) => setIncludes(items)}
        />
      )}

      {isAddNotIncludesModalOpen && (
        <AddItemsModal
          title="What not Included"
          initialItems={notIncludes}
          onClose={() => setIsAddNotIncludesModalOpen(false)}
          onSave={(items) => setNotIncludes(items)}
        />
      )}

      {isGenresModalOpen && (
        <SelectTagsModal
          onClose={() => setIsGenresModalOpen(false)}
          onSave={(tags) => setMusicGenres(tags)}
          initialSelectedTags={musicGenres}
          title="Select Music Genres"
        />
      )}

      {isHighlightsModalOpen && (
        <SelectHighlightsModal
          onClose={() => setIsHighlightsModalOpen(false)}
          onSave={(tags) => {
            setVenueHighlights(tags);
            setIsHighlightsModalOpen(false);
          }}
          initialSelected={venueHighlights}
        />
      )}

      {isAmenitiesModalOpen && (
        <SelectAmenitiesModal
          onClose={() => setIsAmenitiesModalOpen(false)}
          onSave={(items) => {
            setAmenities(items);
            setIsAmenitiesModalOpen(false);
          }}
          initialSelected={amenities}
        />
      )}

      {isAllowedEventTypesModalOpen && (
        <SelectTagsModal
          onClose={() => setIsAllowedEventTypesModalOpen(false)}
          onSave={(tags) => setAllowedEventTypes(tags)}
          initialSelectedTags={allowedEventTypes}
          title="Select Allowed Event Types"
        />
      )}

      {isPublishedModalOpen && (
        <ListingPublishedModal
          onClose={() => setIsPublishedModalOpen(false)}
          onViewListing={() => {
            setIsPublishedModalOpen(false);
            onClose(); // This should trigger the "back to my listings" behavior
          }}
          onGoToDashboard={() => {
            setIsPublishedModalOpen(false);
            onClose(); // Same for now, as user requested "view listing button ... redirect of mylistings"
          }}
        />
      )}
    </div>
  );
};

export default AddListingView;
