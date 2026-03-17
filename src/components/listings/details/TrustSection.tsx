import TrustCard from "@/components/ui/listingDetails/TrustCard";
import React from "react";

const TRUST_SECTION_DATA = [
    {
        icon: "/icons/trust/trustcard1.svg",
        title: "Verified Vendor"
    },
    {
        icon: "/icons/trust/trustcard2.svg",
        title: "Secure Payments"
    },
    {
        icon: "/icons/trust/trustcard3.svg",
        title: "Rated by users"
    },
    {
        icon: "/icons/trust/trustcard4.svg",
        title: "Transparent Pricing"
    }
]

const TrustSection: React.FC = () => {
    return (
        <section className="w-full bg-white">
            <div className="container mx-auto px-10">
                <div className="max-w-4xl py-6 border-b border-[#F0EFEF]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {TRUST_SECTION_DATA.map((item, index) => (
                            <TrustCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustSection;