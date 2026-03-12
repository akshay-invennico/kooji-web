"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface VendorProfileProps {
    onPrev?: () => void;
    onNext?: () => void;
}

const validationSchema = Yup.object().shape({
    displayName: Yup.string()
        .required("Display name is required")
        .min(2, "Name is too short"),
    description: Yup.string()
        .max(500, "Description cannot exceed 500 characters")
        .required("Description is required"),
});

const VendorProfile = ({ onPrev, onNext }: VendorProfileProps) => {
    return (
        <section className="w-full min-h-screen bg-white py-8">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Progress Bar */}
                <div className="w-full h-[4px] bg-gray-100 mb-12">
                    <div className="h-full bg-[#FF3A44] transition-all duration-500" style={{ width: "50%" }}></div>
                </div>

                <div className="mb-10 text-left">
                    <h2 className="text-[24px] font-semibold text-[#000000]">Set Up Your Public Profile</h2>
                </div>

                <Formik
                    initialValues={{
                        displayName: "",
                        description: "",
                        profilePhoto: null,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log("Profile values:", values);
                        onNext?.();
                    }}
                >
                    {({ errors, touched, setFieldValue, values }) => (
                        <Form className="space-y-10 max-w-[800px] mb-32 text-left">
                            {/* Profile Photo */}
                            <div className="space-y-4">
                                <label className="text-[#686262] font-medium block text-[14px]">Profile Photo</label>
                                <div className="relative w-44 h-44">
                                    <div className="w-full h-full rounded-full border-2 border-dashed border-[#FF3A44] flex items-center justify-center bg-gray-50 overflow-hidden">
                                        {values.profilePhoto ? (
                                            <img 
                                                src={URL.createObjectURL(values.profilePhoto as unknown as Blob)} 
                                                alt="Profile" 
                                                className="w-full h-full object-cover" 
                                            />
                                        ) : (
                                            <div className="w-24 h-24 text-gray-300">
                                                <img src="/assets/userProfileIcon.svg" alt="userprofileicon" />
                                            </div>
                                        )}
                                    </div>
                                    <label className="absolute bottom-3 right-3 w-10 h-10 bg-[#FF3A44] rounded-full flex items-center justify-center border-2 border-white shadow-sm cursor-pointer hover:bg-[#E0343C] transition-colors">
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
                                        <img src="/assets/profileCameraIcon.svg" alt="Upload" />
                                    </label>
                                </div>
                            </div>

                            {/* Display Name */}
                            <div className="space-y-2">
                                <label className="text-[#000000] font-semibold block text-[16px]">Display Name / Business Name</label>
                                <Field
                                    name="displayName"
                                    type="text"
                                    placeholder="e.g. Jemmie's Sound"
                                    className={`w-full max-w-[500px] px-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${
                                        errors.displayName && touched.displayName
                                            ? "border-[#FF3A44] focus:ring-red-100"
                                            : "border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]"
                                    }`}
                                />
                                <ErrorMessage name="displayName" component="div" className="text-[#FF3A44] text-xs font-medium" />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center max-w-[500px]">
                                    <label className="text-[#000000] font-semibold text-[16px]">Description</label>
                                    <span className="text-[#686262] text-sm">({values.description.length}/500)</span>
                                </div>
                                <Field
                                    as="textarea"
                                    name="description"
                                    placeholder="Write here.."
                                    rows={6}
                                    className={`w-full max-w-[500px] px-6 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base resize-none ${
                                        errors.description && touched.description
                                            ? "border-[#FF3A44] focus:ring-red-100"
                                            : "border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]"
                                    }`}
                                />
                                <ErrorMessage name="description" component="div" className="text-[#FF3A44] text-xs font-medium" />
                            </div>

                            {/* Navigation Buttons */}
                            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 z-50">
                                <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                                    <button
                                        type="button"
                                        onClick={onPrev}
                                        className="bg-white text-[#686262] px-10 py-3 rounded-md font-semibold border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-[#FF3A44] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#E0343C] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default VendorProfile;