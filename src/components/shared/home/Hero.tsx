"use client";

import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Search, MapPin, Calendar, ShieldCheck, Tag, Star } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";

const searchSchema = Yup.object({
  searchQuery: Yup.string()
    .min(2, "Enter at least 2 characters")
    .required("Please tell us what you are looking for"),
  location: Yup.string()
    .min(2, "Enter at least 2 characters")
    .required("Please enter a location"),
  date: Yup.string().required("Please select a date"),
});

const FEATURES = [
  { icon: ShieldCheck, label: "Verified Vendors" },
  { icon: ShieldCheck, label: "Secure Payments" },
  { icon: Star, label: "Top-Rated Gear & Services" },
  { icon: Tag, label: "Transparent pricing" },
];

const Hero = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

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

      <div className="relative z-10 h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 flex flex-col items-center justify-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white text-center leading-[1.2] md:leading-[1.1] mb-4 tracking-tight">
          Your One-Stop Marketplace <br className="hidden md:block" />
          for Music Rentals
        </h1>

        <p className="text-sm sm:text-base md:text-[17px] text-gray-200 text-center max-w-2xl mx-auto mb-10 md:mb-12 font-medium tracking-wide leading-relaxed">
          Instruments, sound systems, lighting, and professional music services
          <br className="hidden md:block" /> available near you, on demand.
        </p>

        <Formik
          initialValues={{
            searchQuery: "",
            location: "",
            date: "",
          }}
          validationSchema={searchSchema}
          onSubmit={(values) => {
            console.log("Search action triggered:", values);
          }}
        >
          {({ errors, touched }) => (
            <Form
              noValidate
              className="w-full max-w-[1000px] bg-white rounded-2xl md:rounded-[20px] p-2 md:p-2.5 flex flex-col md:flex-row items-start gap-2 md:gap-0 shadow-2xl"
            >

              <div className="flex-1 w-full px-4 md:px-6 py-2 md:py-3">
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  What are you looking for?
                </label>
                <div className="relative">
                  <Icon
                    component={Search}
                    size="sm"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <Field
                    name="searchQuery"
                    type="text"
                    placeholder="Instruments, Singer, Lightings.."
                    className={`w-full pl-10 pr-3 py-2 rounded-lg text-sm focus:outline-none ${errors.searchQuery && touched.searchQuery
                      ? "border-none focus:border-none focus:ring-none"
                      : "border-none focus:border-none focus:ring-none"
                      }`}
                  />
                </div>
                <ErrorMessage
                  name="searchQuery"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-200 self-center shrink-0" />

              <div className="flex-1 w-full px-4 md:px-6 py-2 md:py-3 border-t md:border-t-0 border-gray-100">
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Where?
                </label>
                <div className="relative">
                  <Icon
                    component={MapPin}
                    size="sm"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <Field
                    name="location"
                    type="text"
                    placeholder="Los Angeles, CA.."
                    className={`w-full pl-10 pr-3 py-2 rounded-lg text-sm focus:outline-none ${errors.location && touched.location
                      ? "border-none focus:border-none focus:ring-none"
                      : "border-none focus:border-none focus:ring-none"
                      }`}
                  />
                </div>
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-200 self-center shrink-0" />

              <div className="flex-1 w-full px-4 md:px-6 py-2 md:py-3 border-t md:border-t-0 border-gray-100">
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  When?
                </label>
                <div className="relative">
                  <Icon
                    component={Calendar}
                    size="sm"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <Field
                    name="date"
                    type="date"
                    placeholder="Select dates.."
                    className={`w-full pl-10 pr-3 py-2 rounded-lg text-sm focus:outline-none ${errors.date && touched.date
                      ? "border-none focus:border-none focus:ring-none"
                      : "border-none focus:border-none focus:ring-none"
                      }`}
                  />
                </div>
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="w-full md:w-auto px-2 md:px-0 py-2 md:py-0 md:mr-1 self-center shrink-0">
                <button
                  type="submit"
                  className="w-full md:w-auto whitespace-nowrap bg-[#FF385C] hover:bg-[#E31C5F] text-white px-8 py-3 rounded-full font-medium transition duration-200"
                >
                  Search
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 md:mt-10 text-[11px] md:text-[13px] text-gray-200 font-medium">
          {FEATURES.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <Icon component={icon} size="sm" />
              <span>{label}</span>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2 w-full max-w-[280px]">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="h-1 bg-white/30 rounded-full overflow-hidden flex-1">
            <div
              className={`h-full bg-red-500 ${activeSegment === index ? "transition-all duration-100 ease-linear" : ""}`}
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