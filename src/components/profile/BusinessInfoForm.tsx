/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  streetAddress: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zip / Postal Code is required"),
  googleMapUrl: Yup.string().url("Invalid URL").required("Google Map URL is required"),
});

const BusinessInfoForm = () => {
  return (
    <div className="flex-1 max-w-[800px]">
      <div className="mb-8">
        <h2 className="text-[20px] font-semibold text-[#000000] font-outfit">Business Info</h2>
      </div>

      <Formik
        initialValues={{
          country: "United Kingdom",
          streetAddress: "",
          city: "",
          state: "",
          zipCode: "",
          googleMapUrl: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Saving business info:", values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-6">
            {/* Country */}
            <div className="space-y-2">
              <label className="text-[#000000] font-medium block text-[14px] font-outfit">Country</label>
              <Field
                name="country"
                type="text"
                className={clsx(
                  "w-full max-w-[300px] px-4 py-3.5 rounded-md border focus:outline-none transition-all font-outfit text-[#000000]",
                  errors.country && touched.country ? "border-red-500" : "border-[#F0EFEF] focus:border-[#FF3A44]"
                )}
              />
              <ErrorMessage name="country" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Street Address */}
            <div className="space-y-2">
              <label className="text-[#000000] font-medium block text-[14px] font-outfit">Street Address</label>
              <Field
                name="streetAddress"
                type="text"
                placeholder="Street/Apartment/Villa/Landmark.."
                className={clsx(
                  "w-full px-4 py-3.5 rounded-md border focus:outline-none transition-all font-outfit text-[#000000]",
                  errors.streetAddress && touched.streetAddress ? "border-red-500" : "border-[#F0EFEF] focus:border-[#FF3A44]"
                )}
              />
              <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            {/* City, State, Zip Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-[#000000] font-medium block text-[14px] font-outfit">City</label>
                <Field
                  name="city"
                  type="text"
                  placeholder="e.g. Manchester"
                  className={clsx(
                    "w-full px-4 py-3.5 rounded-md border focus:outline-none transition-all font-outfit text-[#000000]",
                    errors.city && touched.city ? "border-red-500" : "border-[#F0EFEF] focus:border-[#FF3A44]"
                  )}
                />
                <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="space-y-2">
                <label className="text-[#000000] font-medium block text-[14px] font-outfit">State</label>
                <Field
                  name="state"
                  type="text"
                  placeholder="e.g. Greater London"
                  className={clsx(
                    "w-full px-4 py-3.5 rounded-md border focus:outline-none transition-all font-outfit text-[#000000]",
                    errors.state && touched.state ? "border-red-500" : "border-[#F0EFEF] focus:border-[#FF3A44]"
                  )}
                />
                <ErrorMessage name="state" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div className="space-y-2">
                <label className="text-[#000000] font-medium block text-[14px] font-outfit">Zip / Postal Code</label>
                <Field
                  name="zipCode"
                  type="text"
                  placeholder="e.g. W1D 2EH"
                  className={clsx(
                    "w-full px-4 py-3.5 rounded-md border focus:outline-none transition-all font-outfit text-[#000000]",
                    errors.zipCode && touched.zipCode ? "border-red-500" : "border-[#F0EFEF] focus:border-[#FF3A44]"
                  )}
                />
                <ErrorMessage name="zipCode" component="div" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            {/* Google Map URL */}
            <div className="space-y-2">
              <label className="text-[#000000] font-medium block text-[14px] font-outfit">Google Map URL</label>
              <Field
                name="googleMapUrl"
                type="text"
                placeholder="Copy and Paste Map URL here"
                className={clsx(
                  "w-full px-4 py-3.5 rounded-md border focus:outline-none transition-all font-outfit text-[#000000]",
                  errors.googleMapUrl && touched.googleMapUrl ? "border-red-500" : "border-[#F0EFEF] focus:border-[#FF3A44]"
                )}
              />
              <ErrorMessage name="googleMapUrl" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#FF3A44] text-white px-10 py-3.5 text-[16px] rounded-mdS font-semibold font-outfit hover:bg-[#E0343C] transition-all"
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

export default BusinessInfoForm;
