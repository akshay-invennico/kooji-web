/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";

const validationSchema = Yup.object().shape({
  displayName: Yup.string()
    .required("Display name is required")
    .min(2, "Name is too short"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  description: Yup.string()
    .max(500, "Description cannot exceed 500 characters")
    .required("Description is required"),
});

const PersonalDetailsForm = () => {
  return (
    <div className="flex-1 max-w-[800px]">
      <div className="mb-8">
        <h2 className="text-[20px] font-semibold text-[#000000] font-outfit">Personal Details</h2>
      </div>

      <Formik
        initialValues={{
          displayName: "Jemmie's Sound",
          email: "example@email.com",
          phoneNumber: "+44 7700 900044",
          description: "Write here..",
          profilePhoto: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Saving changes:", values);
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form className="space-y-8">
            {/* Profile Photo */}
            <div className="space-y-4">
              <label className="text-[#000000] font-medium block text-[14px] font-outfit">Profile Photo</label>
              <div className="relative w-36 h-36">
                <div className="w-full h-full rounded-full border border-dashed border-[#FF3A44] flex items-center justify-center bg-[#FDFDFD] overflow-hidden">
                  {values.profilePhoto ? (
                    <img
                      src={URL.createObjectURL(values.profilePhoto as unknown as Blob)}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 text-gray-200">
                      <Image src="/assets/userProfileIcon.svg" alt="user" width={80} height={80} />
                    </div>
                  )}
                </div>
                <label className="absolute bottom-2 right-2 w-8 h-8 bg-[#FF3A44] rounded-full flex items-center justify-center border-2 border-white cursor-pointer hover:bg-[#E0343C] transition-colors shadow-sm">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setFieldValue("profilePhoto", e.target.files[0]);
                      }
                    }}
                  />
                  <Image src="/assets/profileCameraIcon.svg" alt="Upload" width={16} height={16} />
                </label>
              </div>
            </div>

            {/* Display Name */}
            <div className="space-y-2">
              <label className="text-[#000000] font-medium block text-[14px] font-outfit">Display Name / Business Name</label>
              <Field
                name="displayName"
                type="text"
                className={clsx(
                  "w-full px-4 py-3.5 rounded-md border focus:outline-none transition-all font-outfit text-[#000000]",
                  errors.displayName && touched.displayName ? "border-red-500" : "border-[#F0EFEF] focus:border-[#FF3A44]"
                )}
              />
              <ErrorMessage name="displayName" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Email & Phone Number Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[#000000] font-medium block text-[14px] font-outfit">Email</label>
                <Field
                  name="email"
                  type="email"
                  className={clsx(
                    "w-full px-4 py-3.5 rounded-md border transition-all font-outfit text-[#686262] bg-[#F5F5F5]",
                    errors.email && touched.email ? "border-red-500" : "border-[#F0EFEF]"
                  )}
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#000000] font-medium block text-[14px] font-outfit">Phone Number</label>
                <Field
                  name="phoneNumber"
                  type="text"
                  className={clsx(
                    "w-full px-4 py-3.5 rounded-md border focus:outline-none transition-all font-outfit text-[#000000]",
                    errors.phoneNumber && touched.phoneNumber ? "border-red-500" : "border-[#F0EFEF] focus:border-[#FF3A44]"
                  )}
                />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-center gap-2 text-[#686262]">
              <div className="w-4 h-4 rounded-full border border-[#686262] flex items-center justify-center text-[10px] font-bold">&#105;</div>
              <span className="text-[12px] font-medium font-outfit">We won&apos;t share your Contact Info with anyone</span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[#000000] font-medium text-[14px] font-outfit">Description</label>
                <span className="text-[#A39E9E] text-[12px] font-medium">(Max 500 characters)</span>
              </div>
              <Field
                as="textarea"
                name="description"
                rows={5}
                className={clsx(
                  "w-full px-4 py-3.5 rounded-md border focus:outline-none transition-all font-outfit text-[#000000] resize-none",
                  errors.description && touched.description ? "border-red-500" : "border-[#F0EFEF] focus:border-[#FF3A44]"
                )}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#FF3A44] text-white px-10 py-3.5 text-[16px] rounded-md font-semibold font-outfit hover:bg-[#E0343C] transition-all"
            >
              Save Changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Helper for conditional classes
function clsx(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default PersonalDetailsForm;
