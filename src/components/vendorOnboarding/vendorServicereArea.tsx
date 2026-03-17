"use client";

import React from "react";
import { Formik, Form } from "formik";

interface VendorServiceAreaProps {
    onPrev?: () => void;
    onNext?: () => void;
}

const VendorServiceArea = ({ onPrev, onNext }: VendorServiceAreaProps) => {
    const minRange = 1;
    const maxRange = 1000;

    return (
        <section className="w-full min-h-screen bg-white py-8">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Progress Bar */}
                <div className="w-full h-[4px] bg-gray-100 mb-12">
                    <div className="h-full bg-[#FF3A44] transition-all duration-500" style={{ width: "100%" }}></div>
                </div>

                <div className="mb-10 text-left">
                    <h2 className="text-[24px] font-semibold text-[#000000] mb-8">Define Your Service Area</h2>

                    <Formik
                        initialValues={{
                            minDist: 1,
                            maxDist: 880,
                        }}
                        onSubmit={(values) => {
                            console.log("Service Area values:", values);
                            onNext?.();
                        }}
                    >
                        {({ values, setFieldValue }) => {
                            const minPercent = ((values.minDist - minRange) / (maxRange - minRange)) * 100;
                            const maxPercent = ((values.maxDist - minRange) / (maxRange - minRange)) * 100;

                            const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                                const value = Math.min(Number(e.target.value), values.maxDist - 1);
                                setFieldValue("minDist", value);
                            };

                            const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                                const value = Math.max(Number(e.target.value), values.minDist + 1);
                                setFieldValue("maxDist", value);
                            };

                            return (
                                <Form className="space-y-6 max-w-[800px] mb-50 text-left">
                                    <div className="space-y-6">
                                        <h3 className="text-[#000000] font-semibold block text-[18px]">Distance Range</h3>

                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[#686262]">From <span className="text-[#000000] font-bold ml-1">{values.minDist} mi</span></span>
                                            <span className="text-[#686262]">To <span className="text-[#000000] font-bold ml-1">{values.maxDist} mi</span></span>
                                        </div>

                                        <div className="relative h-2 flex items-center mt-2">
                                            {/* Background Track */}
                                            <div className="absolute w-full h-1.5 bg-gray-100 rounded-full"></div>

                                            {/* Active Range */}
                                            <div
                                                className="absolute h-1.5 bg-[#FF3A44] rounded-full"
                                                style={{
                                                    left: `${minPercent}%`,
                                                    right: `${100 - maxPercent}%`
                                                }}
                                            ></div>

                                            {/* Range Inputs */}
                                            <input
                                                type="range"
                                                min={minRange}
                                                max={maxRange}
                                                value={values.minDist}
                                                onChange={handleMinChange}
                                                className="range-input z-20"
                                            />
                                            <input
                                                type="range"
                                                min={minRange}
                                                max={maxRange}
                                                value={values.maxDist}
                                                onChange={handleMaxChange}
                                                className="range-input z-20"
                                            />
                                        </div>

                                        <div className="border-b border-gray-100 pt-10 mb-50"></div>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                                        <button
                                            type="button"
                                            onClick={onPrev}
                                            className="bg-white text-[#686262] text-[16px] px-10 py-3 rounded-md font-semibold border border-gray-200 "
                                        >
                                            Previous
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-[#FF3A44] text-white text-[16px] px-10 py-3 rounded-md font-semibold"
                                        >
                                            Finish
                                        </button>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default VendorServiceArea;
