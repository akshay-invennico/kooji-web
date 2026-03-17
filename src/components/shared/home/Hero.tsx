"use client";

import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { X } from "lucide-react";
import { CalendarDropdown } from "@/components/ui/listings/CalendarDropdown";
import { fmtRange } from "@/utils/calendarUtils";

const searchSchema = Yup.object({
  searchQuery: Yup.string()
    .min(2, "Enter at least 2 characters")
    .required("Please tell us what you are looking for"),
  location: Yup.string()
    .min(2, "Enter at least 2 characters")
    .required("Please enter a location"),
  startDate: Yup.date().nullable().required("Please select a date"),
  endDate: Yup.date().nullable(),
});

const FEATURES = [
  { iconSrc: "/icons/hero/verifiedIcon.svg", label: "Verified Vendors" },
  { iconSrc: "/icons/hero/secureIcon.svg", label: "Secure Payments" },
  { iconSrc: "/icons/hero/topRatedIcon.svg", label: "Top-Rated Gear & Services" },
  { iconSrc: "/icons/hero/transparentIcon.svg", label: "Transparent pricing" },
];

const SEARCH_OPTIONS = [
  { id: "instruments", label: "Instruments & Equipment", icon: "/icons/vendor/vendorOnboard1.svg" },
  { id: "musician", label: "Musician & Singers", icon: "/icons/vendor/vendorOnboard2.svg" },
  { id: "technicians", label: "Technicians", icon: "/icons/vendor/vendorOnboard3.svg" },
  { id: "event_space", label: "Event Space", icon: "/icons/vendor/vendorOnboard4.svg" },
];

const Hero = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setIsDateOpen(false);
      }
    };
    if (isSearchOpen || isDateOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen, isDateOpen]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleVideoEnded = () => {
    setActiveSegment((prev) => (prev + 1) % 4);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full min-h-[550px] md:min-h-[700px] flex items-center justify-center overflow-hidden -mt-16 md:-mt-[95px] pt-16 md:pt-[95px]">

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#022345BF] z-1"></div>

      <div className="relative z-20 h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 flex flex-col items-center justify-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-white text-center  mb-4">
          Your One-Stop Marketplace <br className="hidden md:block" />
          for Music Rentals
        </h1>

        <p className="text-sm sm:text-base md:text-[18px] text-[#FFFFFF] text-center max-w-4xl mx-auto mb-10 md:mb-12 font-normal tracking-wide leading-relaxed">
          Instruments, sound systems, lighting, and professional music services
          available near you, on demand.
        </p>

        <Formik
          initialValues={{
            searchQuery: "",
            location: "",
            startDate: null as Date | null,
            endDate: null as Date | null,
          }}
          validationSchema={searchSchema}
          onSubmit={(values) => {
            console.log("Search action triggered:", values);
          }}
        >
          {(formikProps) => {
            const { errors, touched, values, setFieldValue } = formikProps;
            return (
              <Form
                noValidate
                className="w-full max-w-[1200px] md:h-[106px] bg-[#FFFFFF] rounded-xl md:rounded-[12px] border border-[#E6E5E5] p-2 md:p-2.5 flex flex-col md:flex-row items-center gap-4"
              >

                <div className="w-full md:w-[302px] h-[58px] flex-none flex flex-col md:border-r border-gray-200 px-4 md:px-6 py-2 md:py-0 relative" ref={searchRef}>
                  <label className="text-[12px] lg:text-[14px] font-medium text-[#000000] mb-1">
                    What are you looking for?
                  </label>
                  <div className="relative flex items-center">
                    <Image src="/icons/hero/searchIcon.svg" alt="Search" width={26} height={26} className="absolute left-1" />
                    <Field
                      name="searchQuery"
                      type="text"
                      placeholder="Instruments, Singer, Lightings.."
                      onFocus={() => setIsSearchOpen(true)}
                      className="w-full pl-8 pr-3 py-1 bg-transparent text-[14px] font-semibold text-gray-900 focus:outline-none placeholder:font-normal placeholder:text-gray-400"
                    />
                    {values.searchQuery && (
                      <X size={18} className="absolute right-1 text-gray-900 cursor-pointer" onClick={() => setFieldValue("searchQuery", "")} />
                    )}
                  </div>
                  {isSearchOpen && (
                    <div className="absolute top-full left-0 mt-4 w-full md:w-[120%] bg-white border border-gray-100 rounded-xl z-60 py-2 overflow-hidden">
                      {SEARCH_OPTIONS.map((option) => (
                        <div
                          key={option.id}
                          className="px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                          onClick={() => {
                            setFieldValue("searchQuery", option.label);
                            setIsSearchOpen(false);
                          }}
                        >
                          <div className="w-8 h-8 flex items-center justify-center bg-red-50 rounded-sm shrink-0">
                            <Image src={option.icon} alt={option.label} width={20} height={20} className="opacity-70" />
                          </div>
                          <span className="text-[14px] text-gray-900 font-semibold">{option.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {errors.searchQuery && touched.searchQuery && (
                    <span className="text-red-500 text-xs font-medium absolute -bottom-4 md:-bottom-2 left-4 mt-4">{errors.searchQuery as string}</span>
                  )}
                </div>

                <div className="w-full md:w-[302px] h-[58px] flex-none flex flex-col px-4 md:px-6 py-2 md:py-0 border-t md:border-t-0 md:border-r border-gray-200 relative">
                  <label className="block text-[12px] lg:text-[14px] font-medium text-[#000000] mb-1">
                    Where?
                  </label>
                  <div className="relative flex items-center">
                    <Image src="/icons/hero/addressIcoon.svg" alt="Location" width={26} height={26} className="absolute left-1" />
                    <Field
                      name="location"
                      type="text"
                      placeholder="Los Angeles, CA.."
                      className="w-full pl-8 pr-3 py-1 bg-transparent text-[14px] font-semibold text-gray-900 focus:outline-none placeholder:font-normal placeholder:text-gray-400"
                    />
                    {values.location && (
                      <X size={18} className="absolute right-1 text-gray-900 cursor-pointer" onClick={() => setFieldValue("location", "")} />
                    )}
                  </div>
                  {errors.location && touched.location && (
                    <span className="text-red-500 text-xs font-medium absolute -bottom-4 md:-bottom-2 left-4 mt-4">{errors.location as string}</span>
                  )}
                </div>

                <div className="w-full md:w-[302px] h-[58px] flex-none flex flex-col px-4 md:px-6 py-2 md:py-0 border-t md:border-t-0 border-gray-100 relative" ref={dateRef}>
                  <label className="text-[12px] lg:text-[14px] font-semibold text-[#000000] mb-1">
                    When?
                  </label>
                  <div className="relative flex items-center cursor-pointer py-1" onClick={() => setIsDateOpen((o) => !o)}>
                    <Image src="/icons/hero/calenderIcon.svg" alt="Calendar" width={26} height={26} className="absolute left-1" />
                    <span className={`w-full pl-8 pr-8 text-[14px] flex-1 truncate ${fmtRange(values.startDate, values.endDate) ? "text-gray-900 font-semibold" : "text-gray-400 font-normal"}`}>
                      {fmtRange(values.startDate, values.endDate) || "Select dates.."}
                    </span>
                    {(values.startDate || values.endDate) && (
                      <X size={18} className="absolute right-1 text-gray-900 cursor-pointer" onClick={(e) => { e.stopPropagation(); setFieldValue("startDate", null); setFieldValue("endDate", null); }} />
                    )}
                  </div>
                  {isDateOpen && (
                    <CalendarDropdown formik={formikProps} onClose={() => setIsDateOpen(false)} />
                  )}
                  {((touched.startDate && errors.startDate) || (touched.endDate && errors.endDate)) && (
                    <span className="text-red-500 text-xs font-medium absolute -bottom-4 md:-bottom-2 left-4 mt-4">{(errors.startDate || errors.endDate) as string}</span>
                  )}
                </div>

                <div className="w-full md:w-auto px-2 md:px-0 py-2 md:py-0 md:mr-1 self-center shrink-0">
                  <button
                    type="submit"
                    className="w-full md:w-auto whitespace-nowrap bg-[#FF3A44]  text-[20px] text-[#FFFFFF] px-8 py-3 rounded-[400px] font-medium transition duration-200"
                  >
                    Search
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 md:mt-10 text-[12px] md:text-[14px] text-[#FFFFFF] font-medium tracking-wide">
          {FEATURES.map(({ iconSrc, label }) => (
            <div key={label} className="flex items-center gap-[10px] p-1">
              <Image src={iconSrc} alt={label} width={24} height={24} />
              <span>{label}</span>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2 w-full max-w-[280px]">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="h-1 bg-white/30 rounded-full overflow-hidden flex-1">
            <div
              className={`h-full bg-[#FF3A44] ${activeSegment === index ? "transition-all duration-100 ease-linear" : ""}`}
              style={{
                width:
                  activeSegment > index
                    ? "100%"
                    : activeSegment === index
                      ? `${progress}%`
                      : "0%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;