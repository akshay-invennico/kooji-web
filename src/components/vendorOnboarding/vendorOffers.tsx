"use client";

import React, { useState } from "react";
import VendorCard from "../ui/vendor/vendorCard";

const VENDOR_OFFERS_DATA = [
    {
        id: "1",
        title: "Equipment Rental",
        icon: "/icons/vendor/vendorOnboard1.svg"
    },
    {
        id: "2",
        title: "Musician & Singers",
        icon: "/icons/vendor/vendorOnboard2.svg"
    },
    {
        id: "3",
        title: "Technicians",
        icon: "/icons/vendor/vendorOnboard3.svg"
    },
    {
        id: "4",
        title: "Event Space",
        icon: "/icons/vendor/vendorOnboard4.svg"
    },
];

const VendorOffers = () => {
    const [selectedOffers, setSelectedOffers] = useState<string[]>([]);

    const toggleOffer = (id: string) => {
        setSelectedOffers(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="w-full min-h-screen bg-white py-8">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="w-full h-[4px] bg-gray-100 mb-12">
                    <div className="h-full bg-red-500 transition-all duration-500" style={{ width: "25%" }}></div>
                </div>

                <div className="mb-10 text-left">
                    <h2 className="text-2xl font-semibold text-gray-900">What Do You Offer?</h2>
                </div>

                <div className="flex flex-wrap justify-start gap-4 mb-24">
                    {VENDOR_OFFERS_DATA.map((item) => (
                        <VendorCard
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                            selected={selectedOffers.includes(item.id)}
                            onClick={() => toggleOffer(item.id)}
                        />
                    ))}
                </div>

                <div className="fixed bottom-10 right-10 lg:right-70">
                    <button
                        className="bg-red-500 text-white px-10 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        disabled={selectedOffers.length === 0}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VendorOffers;
