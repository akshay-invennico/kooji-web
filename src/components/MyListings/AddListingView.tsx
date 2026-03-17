/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
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
  { id: "equipment", label: "Equipment Rental", icon: "/icons/vendor/vendorOnboard1.svg" },
  { id: "musician", label: "Musician & Singers", icon: "/icons/vendor/vendorOnboard2.svg" },
  { id: "technician", label: "Technicians", icon: "/icons/vendor/vendorOnboard3.svg" },
  { id: "event_space", label: "Event Space", icon: "/icons/vendor/vendorOnboard4.svg" },
];

const AddListingView: React.FC<AddListingViewProps> = ({ onClose }) => {
  const router = useRouter();
  // Formik Initialization
  const formik = useFormik({
    initialValues: {
      selectedType: "equipment",
      title: "",
      description: "",
      selectedTags: [] as string[],
      address: "Building Number: 225, Bow Street, Royal Opera House, Greater, London, WC2E 7AW",
      locationType: "saved_address" as "my_location" | "saved_address",

      // Equipment Fields
      equipmentCategory: "",
      yearOfPurchase: "",
      condition: "",
      usageType: "",
      brand: "",
      model: "",
      powerOutput: "",
      weight: "",
      accessories: "",
      includes: ["2x PA speakers", "Mixer", "Power cables", "Speaker stands"] as string[],
      notIncludes: [] as string[],

      // Musician Fields
      performerType: "",
      musicGenres: ["Pop", "Rock", "Classical", "Jazz"] as string[],
      yearsOfExperience: "",
      performanceLanguages: "",
      performanceDuration: "",
      providesEquipment: null,
      equipmentCategories: [] as string[],
      technicalRequirements: "",

      // Technician Fields
      techRole: "",
      techExperienceYears: "",
      techServiceType: "",
      techProvidesEquipment: null,
      techEquipmentCategories: [] as string[],
      techHandlesSetup: false,

      // Event Space Fields
      spaceHighlights: [] as string[],
      spaceType: "",
      allowedEventTypes: [] as string[],
      propertySize: "",
      maximumCapacity: "",
      standingLimits: "",
      sittingLimits: "",
      noiseRestrictions: false,
      noiseRestrictionFrom: "",
      noiseRestrictionTo: "",
      amenities: [] as string[],
      parkingType: "On-Site Parking",
      parkingCapacity: "",

      // Availability Fields
      startDate: null as Date | null,
      endDate: null as Date | null,
      repeatMonthly: true,
      selectedDays: ["Mon"] as string[],
      repeatWeekly: true,

      // Pricing Fields
      dailyRate: false,
      dailyPrice: "99",
      weeklyRate: false,
      weeklyPrice: "299",
      monthlyRate: false,
      monthlyPrice: "2099",
      selfDelivery: false,
      selfDeliveryPrice: "99",
      thirdPartyDelivery: false,
      thirdPartyPrice: "299",
      securityDeposit: false,
      securityDepositValue: "10",
      insurance: false,

      // Media
      coverPhoto: null as string | null,
      galleryPhotos: [null, null, null, null] as (string | null)[],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      address: Yup.string().required("Address is required"),

      // Step 2 Fields
      equipmentCategory: Yup.string().when('selectedType', { is: 'equipment', then: (s) => s.required("Category is required") }),
      brand: Yup.string().when('selectedType', { is: 'equipment', then: (s) => s.required("Brand is required") }),
      model: Yup.string().when('selectedType', { is: 'equipment', then: (s) => s.required("Model is required") }),
      condition: Yup.string().when('selectedType', { is: 'equipment', then: (s) => s.required("Condition is required") }),
      usageType: Yup.string().when('selectedType', { is: 'equipment', then: (s) => s.required("Usage type is required") }),

      performerType: Yup.string().when('selectedType', { is: 'musician', then: (s) => s.required("Performer type is required") }),
      yearsOfExperience: Yup.string().when('selectedType', { is: 'musician', then: (s) => s.required("Experience is required") }),
      performanceLanguages: Yup.string().when('selectedType', { is: 'musician', then: (s) => s.required("Languages are required") }),
      performanceDuration: Yup.string().when('selectedType', { is: 'musician', then: (s) => s.required("Duration is required") }),

      techRole: Yup.string().when('selectedType', { is: 'technician', then: (s) => s.required("Role is required") }),
      techExperienceYears: Yup.string().when('selectedType', { is: 'technician', then: (s) => s.required("Experience is required") }),
      techServiceType: Yup.string().when('selectedType', { is: 'technician', then: (s) => s.required("Service type is required") }),

      spaceType: Yup.string().when('selectedType', { is: 'event_space', then: (s) => s.required("Space type is required") }),
      propertySize: Yup.string().when('selectedType', { is: 'event_space', then: (s) => s.required("Property size is required") }),
      maximumCapacity: Yup.string().when('selectedType', { is: 'event_space', then: (s) => s.required("Capacity is required") }),


      // Availability (Step 3 or 4)
      startDate: Yup.date().required("Start date is required").nullable(),
      endDate: Yup.date().required("End date is required").nullable(),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      setIsPublishedModalOpen(true);
    },
  });

  const { values, setFieldValue, handleChange, errors, touched, setFieldTouched, validateForm } = formik;

  const [currentStep, setCurrentStep] = useState(1);
  const [isTagsModalOpen, setIsTagsModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isAddIncludesModalOpen, setIsAddIncludesModalOpen] = useState(false);
  const [isAddNotIncludesModalOpen, setIsAddNotIncludesModalOpen] = useState(false);
  const [isPublishedModalOpen, setIsPublishedModalOpen] = useState(false);
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(true);
  const [isWeeklyOpen, setIsWeeklyOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGenresModalOpen, setIsGenresModalOpen] = useState(false);
  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [isAllowedEventTypesModalOpen, setIsAllowedEventTypesModalOpen] = useState(false);

  const totalSteps = values.selectedType === "event_space" ? 7 : 6;

  const handleNext = async () => {
    const stepErrors = await validateForm();

    // Define fields for each step to mark as touched
    let fieldsToValidate: string[] = [];

    if (currentStep === 1) {
      fieldsToValidate = ['title', 'description', 'address'];
    } else if (currentStep === 2) {
      if (values.selectedType === 'equipment') {
        fieldsToValidate = ['equipmentCategory', 'brand', 'model', 'condition', 'usageType'];
      } else if (values.selectedType === 'musician') {
        fieldsToValidate = ['performerType', 'yearsOfExperience', 'performanceLanguages', 'performanceDuration'];
      } else if (values.selectedType === 'technician') {
        fieldsToValidate = ['techRole', 'techExperienceYears', 'techServiceType'];
      } else if (values.selectedType === 'event_space') {
        fieldsToValidate = ['spaceType', 'propertySize', 'maximumCapacity'];
      }
    } else if (currentStep === 3 && values.selectedType !== 'event_space') {
      fieldsToValidate = ['startDate', 'endDate'];
    } else if (currentStep === 4 && values.selectedType === 'event_space') {
      fieldsToValidate = ['startDate', 'endDate'];
    }

    // Check if any of the fields to validate for the current step have errors
    const hasErrors = fieldsToValidate.some(field => {
      setFieldTouched(field, true, true);
      return !!(stepErrors as any)[field];
    });

    if (hasErrors) {
      // Scroll to top of form to show errors if needed
      return;
    }

    if (currentStep === totalSteps) {
      formik.handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };


  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "Select date";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
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
          <div className="w-full max-w-2.5xl mx-auto flex items-center gap-2 mb-12">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1 rounded-full ${index < currentStep ? "bg-[#FF3A44]" : "bg-[#F5F3F4]"}`}
              />
            ))}
          </div>

          {/* Form Content Steps */}
          <div className="w-full">
            {currentStep === 1 && (
              <Step1BasicInfo
                formik={formik}
                LISTING_TYPES={LISTING_TYPES}
                setIsTagsModalOpen={setIsTagsModalOpen}
                setIsAddressModalOpen={setIsAddressModalOpen}
              />
            )}

            {currentStep === 2 && (
              <>
                {values.selectedType === 'equipment' && (
                  <Step2Equipment
                    formik={formik}
                    setIsAddIncludesModalOpen={setIsAddIncludesModalOpen}
                    setIsAddNotIncludesModalOpen={setIsAddNotIncludesModalOpen}
                  />
                )}
                {values.selectedType === 'musician' && (
                  <Step2Musician
                    formik={formik}
                    setIsGenresModalOpen={setIsGenresModalOpen}
                  />
                )}
                {values.selectedType === 'technician' && (
                  <Step2Technician
                    formik={formik}
                  />
                )}
                {values.selectedType === 'event_space' && (
                  <Step2EventSpace
                    formik={formik}
                  />
                )}
              </>
            )}

            {/* Step 3 & Beyond: Shift steps for Event Space */}
            {values.selectedType === 'event_space' ? (
              <>
                {currentStep === 3 && (
                  <Step3EventSpace
                    formik={formik}
                    onOpenAmenities={() => setIsAmenitiesModalOpen(true)}
                    onOpenHighlights={() => setIsHighlightsModalOpen(true)}
                  />
                )}
                {currentStep === 4 && (
                  <Step3Availability
                    formik={formik}
                    isDateRangeOpen={isDateRangeOpen}
                    setIsDateRangeOpen={setIsDateRangeOpen}
                    isCalendarOpen={isCalendarOpen}
                    setIsCalendarOpen={setIsCalendarOpen}
                    isWeeklyOpen={isWeeklyOpen}
                    setIsWeeklyOpen={setIsWeeklyOpen}
                    formatDate={formatDate}
                  />
                )}
                {currentStep === 5 && (
                  <Step4Pricing
                    formik={formik}
                    selectedType={values.selectedType}
                  />
                )}
                {currentStep === 6 && (
                  <Step5Photos
                    formik={formik}
                  />
                )}
                {currentStep === 7 && (
                  <Step6Review
                    formik={formik}
                    formatDate={formatDate}
                  />
                )}
              </>
            ) : (
              <>
                {currentStep === 3 && (
                  <Step3Availability
                    formik={formik}
                    isDateRangeOpen={isDateRangeOpen}
                    setIsDateRangeOpen={setIsDateRangeOpen}
                    isCalendarOpen={isCalendarOpen}
                    setIsCalendarOpen={setIsCalendarOpen}
                    isWeeklyOpen={isWeeklyOpen}
                    setIsWeeklyOpen={setIsWeeklyOpen}
                    formatDate={formatDate}
                  />
                )}
                {currentStep === 4 && (
                  <Step4Pricing
                    formik={formik}
                    selectedType={values.selectedType}
                  />
                )}
                {currentStep === 5 && (
                  <Step5Photos
                    formik={formik}
                  />
                )}
                {currentStep === 6 && (
                  <Step6Review
                    formik={formik}
                    formatDate={formatDate}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-none bg-white border-t border-gray-100 w-full relative z-10">
        <div className={`max-w-4xl mx-auto px-4 sm:px-0 py-6 flex items-center gap-5 ${currentStep > 1 ? "justify-between" : "justify-end"}`}>
          {currentStep > 1 && (
            <Button
              variant="outline"
              onClick={handlePrev}
              className="border border-gray-100 text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-900 rounded-md px-12 py-3.5 font-semibold text-[16px]"
            >
              Previous
            </Button>
          )}

          <Button
            variant="primary"
            onClick={handleNext}
            className="bg-[#FF3A44]  text-white rounded-md px-14 py-3.5  font-semibold text-[16px] min-w-[160px] "
          >
            {currentStep === totalSteps ? "Publish" : "Next"}
          </Button>
        </div>
      </footer>

      {/* Modals */}
      {isTagsModalOpen && (
        <SelectTagsModal
          onClose={() => setIsTagsModalOpen(false)}
          onSave={(tags) => setFieldValue("selectedTags", tags)}
          initialSelectedTags={values.selectedTags}
        />
      )}

      {isAddressModalOpen && (
        <AddAddressModal
          onClose={() => setIsAddressModalOpen(false)}
          onSave={(addr) => {
            setFieldValue("address", `${addr.buildingNumber}, ${addr.street}, ${addr.area}, ${addr.city}, ${addr.pincode}`);
            setIsAddressModalOpen(false);
          }}
        />
      )}

      {isAddIncludesModalOpen && (
        <AddItemsModal
          title="What it Includes"
          initialItems={values.includes}
          onClose={() => setIsAddIncludesModalOpen(false)}
          onSave={(items) => setFieldValue("includes", items)}
        />
      )}

      {isAddNotIncludesModalOpen && (
        <AddItemsModal
          title="What not Included"
          initialItems={values.notIncludes}
          onClose={() => setIsAddNotIncludesModalOpen(false)}
          onSave={(items) => setFieldValue("notIncludes", items)}
        />
      )}

      {isGenresModalOpen && (
        <SelectTagsModal
          onClose={() => setIsGenresModalOpen(false)}
          onSave={(tags) => setFieldValue("musicGenres", tags)}
          initialSelectedTags={values.musicGenres}
          title="Select Music Genres"
        />
      )}

      {isHighlightsModalOpen && (
        <SelectHighlightsModal
          onClose={() => setIsHighlightsModalOpen(false)}
          onSave={(tags) => {
            setFieldValue("spaceHighlights", tags);
            setIsHighlightsModalOpen(false);
          }}
          initialSelected={values.spaceHighlights}
        />
      )}

      {isAmenitiesModalOpen && (
        <SelectAmenitiesModal
          onClose={() => setIsAmenitiesModalOpen(false)}
          onSave={(items) => {
            setFieldValue("amenities", items);
            setIsAmenitiesModalOpen(false);
          }}
          initialSelected={values.amenities}
        />
      )}

      {isAllowedEventTypesModalOpen && (
        <SelectTagsModal
          onClose={() => setIsAllowedEventTypesModalOpen(false)}
          onSave={(tags) => setFieldValue("allowedEventTypes", tags)}
          initialSelectedTags={values.allowedEventTypes}
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
            router.push("/my/dashboard");
          }}
        />
      )}
    </div>
  );
};

export default AddListingView;
