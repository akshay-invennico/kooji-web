"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface VendorBusinessProps {
    onPrev?: () => void;
    onNext?: () => void;
}

const validationSchema = Yup.object().shape({
    country: Yup.string().required("Country is required"),
    street: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("Zip code is required"),
    mapUrl: Yup.string().url("Must be a valid URL").required("Map URL is required"),
});

const VendorBusiness = ({ onPrev, onNext }: VendorBusinessProps) => {
    return (
        <section className="w-full min-h-screen bg-white py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Progress Bar */}
                <div className="w-full h-[4px] bg-gray-100 mb-12">
                    <div className="h-full bg-[#FF3A44] transition-all duration-500" style={{ width: "75%" }}></div>
                </div>

                <div className="mb-10 text-left">
                    <h2 className="text-[24px] font-semibold text-[#000000]">Add Your Business Address</h2>
                </div>

                <Formik
                    initialValues={{
                        country: "",
                        street: "",
                        city: "",
                        state: "",
                        zipCode: "",
                        mapUrl: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log("Business Address values:", values);
                        onNext?.();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="space-y-6 max-w-[800px] mb-32 text-left">
                            {/* Country */}
                            <div className="space-y-2">
                                <label className="text-[#000000] font-semibold block text-[16px]">Country</label>
                                <Field
                                    name="country"
                                    type="text"
                                    placeholder="United Kingdom"
                                    className={`w-full max-w-[500px] px-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.country && touched.country
                                        ? "border-[#FF3A44] focus:ring-red-100"
                                        : "border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]"
                                        }`}
                                />
                                <ErrorMessage name="country" component="div" className="text-[#FF3A44] text-xs font-medium" />
                            </div>

                            {/* Street Address */}
                            <div className="space-y-2">
                                <label className="text-[#000000] font-semibold block text-[16px]">Street Address</label>
                                <Field
                                    name="street"
                                    type="text"
                                    placeholder="Street/Apartment/Villa/Landmark..."
                                    className={`w-full px-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.street && touched.street
                                        ? "border-[#FF3A44] focus:ring-red-100"
                                        : "border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]"
                                        }`}
                                />
                                <ErrorMessage name="street" component="div" className="text-[#FF3A44] text-xs font-medium" />
                            </div>

                            {/* City, State, Zip */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[#000000] font-semibold block text-[16px]">City</label>
                                    <Field
                                        name="city"
                                        type="text"
                                        placeholder="e.g. Manchester"
                                        className={`w-full px-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.city && touched.city
                                            ? "border-[#FF3A44] focus:ring-red-100"
                                            : "border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]"
                                            }`}
                                    />
                                    <ErrorMessage name="city" component="div" className="text-[#FF3A44] text-xs font-medium" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[#000000] font-semibold block text-[16px]">State</label>
                                    <Field
                                        name="state"
                                        type="text"
                                        placeholder="e.g. Greater London"
                                        className={`w-full px-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.state && touched.state
                                            ? "border-[#FF3A44] focus:ring-red-100"
                                            : "border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]"
                                            }`}
                                    />
                                    <ErrorMessage name="state" component="div" className="text-[#FF3A44] text-xs font-medium" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[#000000] font-semibold block text-[16px]">Zip/Postal Code</label>
                                    <Field
                                        name="zipCode"
                                        type="text"
                                        placeholder="e.g. W1D 2EH"
                                        className={`w-full px-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.zipCode && touched.zipCode
                                            ? "border-[#FF3A44] focus:ring-red-100"
                                            : "border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]"
                                            }`}
                                    />
                                    <ErrorMessage name="zipCode" component="div" className="text-[#FF3A44] text-xs font-medium" />
                                </div>
                            </div>

                            {/* Google Map URL */}
                            <div className="space-y-2">
                                <label className="text-[#000000] font-semibold block text-[16px]">Google Map URL</label>
                                <Field
                                    name="mapUrl"
                                    type="text"
                                    placeholder="Copy and Paste Map URL here"
                                    className={`w-full px-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.mapUrl && touched.mapUrl
                                        ? "border-[#FF3A44] focus:ring-red-100"
                                        : "border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]"
                                        }`}
                                />
                                <ErrorMessage name="mapUrl" component="div" className="text-[#FF3A44] text-xs font-medium" />
                            </div>

                            {/* Navigation Buttons */}
                            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                                <button
                                    type="button"
                                    onClick={onPrev}
                                    className="bg-white text-[#686262] text-[16px] px-10 py-3 rounded-md font-semibold border border-gray-200"
                                >
                                    Previous
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#FF3A44] text-white px-10 py-3 rounded-md text-[16px] font-semibold"
                                >
                                    Next
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default VendorBusiness;
