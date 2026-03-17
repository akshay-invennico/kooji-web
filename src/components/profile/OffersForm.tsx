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

const OffersForm = () => {
    const [selectedOffers, setSelectedOffers] = useState<string[]>(["1"]); // Default selected as per image

    const toggleOffer = (id: string) => {
        setSelectedOffers(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="flex-1 max-w-[700px]">
            <div className="mb-8">
                <h2 className="text-[20px] font-semibold text-[#000000] font-outfit">What you Offers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mb-8">
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

            {/* Submit Button */}
            <button
                type="button"
                className="bg-[#FF3A44] text-white px-10 py-3.5 text-[16px] rounded-md font-semibold font-outfit hover:bg-[#E0343C] transition-all"
                onClick={() => console.log("Saving offers:", selectedOffers)}
            >
                Save Changes
            </button>
        </div>
    );
};

export default OffersForm;
