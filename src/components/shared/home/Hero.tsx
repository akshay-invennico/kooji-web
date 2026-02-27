"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Search, MapPin, Calendar, ShieldCheck, Tag, Star } from "lucide-react";
import Button from "@/components/ui/button/Button";
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
  return (
    <div className="relative w-full min-h-[550px] md:min-h-[700px] flex items-center justify-center overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 flex flex-col items-center justify-center">

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
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto whitespace-nowrap"
                >
                  Search
                </Button>
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
    </div>
  );
};

export default Hero;