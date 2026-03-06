"use client";

import React, { useState } from "react";

interface VendorServiceAreaProps {
    onPrev?: () => void;
    onNext?: () => void;
}

const VendorServiceArea = ({ onPrev, onNext }: VendorServiceAreaProps) => {
    const [minDist, setMinDist] = useState(1);
    const [maxDist, setMaxDist] = useState(880);
    const minRange = 1;
    const maxRange = 1000;

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxDist - 1);
        setMinDist(value);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minDist + 1);
        setMaxDist(value);
    };


    const minPercent = ((minDist - minRange) / (maxRange - minRange)) * 100;
    const maxPercent = ((maxDist - minRange) / (maxRange - minRange)) * 100;

    return (
        <section className="w-full min-h-screen bg-white py-8">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="w-full h-[4px] bg-gray-100 mb-12">
                    <div className="h-full bg-red-500 transition-all duration-500" style={{ width: "100%" }}></div>
                </div>

                <div className="mb-10 text-left">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8">Define Your Service Area</h2>

                    <div className="space-y-6 max-w-[800px]">
                        <div className="space-y-6">
                            <h3 className="text-gray-900 font-semibold block">Distance Range</h3>

                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">From <span className="text-gray-900 font-bold ml-1">{minDist} mi</span></span>
                                <span className="text-gray-400">To <span className="text-gray-900 font-bold ml-1">{maxDist} mi</span></span>
                            </div>

                            <div className="relative h-2 flex items-center mt-2">
                               
                                <div className="absolute w-full h-1 bg-gray-100 rounded-full"></div>

                            
                                <div
                                    className="absolute h-1 bg-red-500 rounded-full"
                                    style={{
                                        left: `${minPercent}%`,
                                        right: `${100 - maxPercent}%`
                                    }}
                                ></div>

                           
                                <input
                                    type="range"
                                    min={minRange}
                                    max={maxRange}
                                    value={minDist}
                                    onChange={handleMinChange}
                                    className="range-input z-20"
                                />
                                <input
                                    type="range"
                                    min={minRange}
                                    max={maxRange}
                                    value={maxDist}
                                    onChange={handleMaxChange}
                                    className="range-input z-20"
                                />
                            </div>


                            <div className="border-b border-gray-100 pt-10"></div>
                        </div>
                    </div>
                </div>


                <div className="fixed bottom-10 left-10 right-10 lg:left-70 lg:right-70 flex items-center justify-between">
                    <button
                        onClick={onPrev}
                        className="bg-white text-gray-600 px-10 py-3 rounded-md font-semibold border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
                        Previous
                    </button>
                    <button
                        onClick={onNext}
                        className="bg-red-500 text-white px-10 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm">
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VendorServiceArea;