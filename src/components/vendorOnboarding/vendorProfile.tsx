"use client";

import React, { useState } from "react";

interface VendorProfileProps {
    onPrev?: () => void;
    onNext?: () => void;
}

const VendorProfile = ({ onPrev, onNext }: VendorProfileProps) => {
    const [displayName, setDisplayName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <section className="w-full min-h-screen bg-white py-8">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="w-full h-[4px] bg-gray-100 mb-12">
                    <div className="h-full bg-red-500 transition-all duration-500" style={{ width: "50%" }}></div>
                </div>

                <div className="mb-10 text-left">
                    <h2 className="text-2xl font-semibold text-gray-900">Set Up Your Public Profile</h2>
                </div>

                <div className="space-y-10 max-w-[800px] mb-32 text-left">

                    <div className="space-y-4">
                        <label className="text-gray-600 font-medium block">Profile Photo</label>
                        <div className="relative w-44 h-44">
                            <div className="w-full h-full rounded-full border-2 border-dashed border-red-400 flex items-center justify-center bg-gray-50">
                           
                                <div className="w-24 h-24 text-gray-300">
                                   <img src="/assets/userProfileIcon.svg" alt="userprofileicon" />
                                </div>
                            </div>
                            <div className="absolute bottom-3 right-3 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm cursor-pointer hover:bg-red-600 transition-colors">
                               <img src="/assets/profileCameraIcon.svg" alt="" />
                            </div>
                        </div>
                    </div>

                   
                    <div className="space-y-4">
                        <label className="text-gray-900 font-semibold block">Display Name / Business Name</label>
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            placeholder="e.g. Jemmie's Sound"
                            className="w-100 px-4 py-2 rounded-sm border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-300 text-lg"
                        />
                    </div>

                    
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-gray-900 font-semibold">Description</label>
                            <span className="text-gray-400 text-sm">(Max 500 characters)</span>
                        </div>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value.slice(0, 500))}
                            placeholder="Write here.."
                            rows={6}
                            className="w-full px-6 py-4 rounded-sm border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-300 text-lg resize-none"
                        />
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
    )
}


export default VendorProfile;