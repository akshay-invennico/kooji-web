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

interface VendorOffersProps {
    onNext?: () => void;
}

const VendorOffers = ({ onNext }: VendorOffersProps) => {
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
                    <div className="h-full bg-[#FF3A44] transition-all duration-500" style={{ width: "25%" }}></div>
                </div>

                <div className="mb-10 text-left">
                    <h2 className="text-[24px] font-semibold text-[#000000]">What Do You Offer?</h2>
                </div>

                <div className="flex flex-wrap justify-start gap-4 mb-32">
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

                {/* Navigation Buttons */}
                <div className="max-w-[1200px] mx-auto flex items-center justify-end">
                    <button
                        className="bg-[#FF3A44] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#E0343C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        disabled={selectedOffers.length === 0}
                        onClick={onNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VendorOffers;
