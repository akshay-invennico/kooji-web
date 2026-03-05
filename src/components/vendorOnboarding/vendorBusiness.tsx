"use client";

import React, { useState } from "react";

interface VendorBusinessProps {
    onPrev?: () => void;
    onNext?: () => void;
}

const VendorBusiness = ({ onPrev, onNext }: VendorBusinessProps) => {
    const [country, setCountry] = useState("");
    const [street, setStreet] = useState("");

    const [city, setCity] = useState("");
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")

    const [mapUrl, setMapUrl] = useState("")

    return (
        <section className="w-full min-h-screen bg-white py-8">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="w-full h-[4px] bg-gray-100 mb-12">
                    <div className="h-full bg-red-500 transition-all duration-500" style={{ width: "75%" }}></div>
                </div>

                <div className="mb-10 text-left">
                    <h2 className="text-2xl font-semibold text-gray-900">Add Your Business Address</h2>
                </div>

                <div className="space-y-4">
                    <label className="text-gray-900 font-semibold block">Country</label>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="United Kingdom"
                        className="w-100 px-4 py-2 rounded-sm border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-300 text-lg"
                    />
                </div>

                <div className="space-y-4 mt-5">
                    <label className="text-gray-900 font-semibold block">Street Address</label>
                    <input
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        placeholder="Street/Apartment/Villa/Landmark..."
                        className="w-full px-4 py-2 rounded-sm border border-gray-200 bg-white focus:outline-none foucus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-300 text-lg" />
                </div>


                <div className="space-y-4 mt-5 grid sm:grid-cols-1  lg:grid-cols-3 gap-4">
                    <div className="mt-2">
                        <label className="text-gray-900 font-semibold block mb-2">City</label>
                        <input 
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Manchester"
                          className="w-full px-4 py-2 rounded-sm border border-gray-200 bg-white focus:outline-none foucus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-300 text-lg" 
                        />
                    </div>

                    <div className="mt-2">
                        <label className="text-gray-900 font-semibold block mb-2">State</label>
                        <input 
                          type="text"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="e.g. Greater London"
                          className="w-full px-4 py-2 rounded-sm border border-gray-200 bg-white focus:outline-none foucus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-300 text-lg" 
                        />

                    </div>

                    <div className="mt-2">
                        <label className="text-gray-900 font-semibold block mb-2">Zip/Postal Code</label>
                        <input 
                          type="text"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          placeholder="e.g. W1D 2EH"
                          className="w-full px-4 py-2 rounded-sm border border-gray-200 bg-white focus:outline-none foucus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-300 text-lg" 
                        />
                    </div>
                </div>


                 <div className="space-y-4 mt-5">
                    <label className="text-gray-900 font-semibold block">Google Map URL</label>
                    <input
                        type="text"
                        value={mapUrl}
                        onChange={(e) => setMapUrl(e.target.value)}
                        placeholder="Copy and Paste Map URL here"
                        className="w-full px-4 py-2 rounded-sm border border-gray-200 bg-white focus:outline-none foucus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-gray-300 text-lg" />
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

export default VendorBusiness;