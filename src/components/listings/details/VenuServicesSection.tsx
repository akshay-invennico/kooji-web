import React from "react";
import VenuServicesCard from "@/components/ui/listingDetails/VenuServicesCard";

const VENU_SERVICES_DATA = [
    { icon: "/icons/venuServices/venuServices1.svg", title: "Chairs & Tables" },
    { icon: "/icons/venuServices/venuServices2.svg", title: "Sound System" },
    { icon: "/icons/venuServices/venuServices3.svg", title: "Lighting Setup" },
    { icon: "/icons/venuServices/venuServices4.svg", title: "On-Site Staff Support" },
    { icon: "/icons/venuServices/venuServices5.svg", title: "Stage Access" },
    { icon: "/icons/venuServices/venuServices6.svg", title: "Power Supply" },
    { icon: "/icons/venuServices/venuServices7.svg", title: "Restroom Facilities" },
    { icon: "/icons/venuServices/venuServices8.svg", title: "Safety & Compliance" },
];

const VenuServicesSection = () => {
    return (
        <section className="max-w-3xl mb-7 px-8 sm:px-16 md:px-0 md:pl-5">
            <h2 className="text-[20px] font-semibold text-[#000000] mb-5">Venue Services & Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {VENU_SERVICES_DATA.map((item, index) => (
                    <VenuServicesCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </div>
        </section>
    );
};

export default VenuServicesSection;