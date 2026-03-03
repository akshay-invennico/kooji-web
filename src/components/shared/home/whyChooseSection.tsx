import React from "react";
import WhyChooseCard from "@/components/ui/whyChoose/WhyChooseCard";

const WHY_CHOOSE_DATA = [
    {
        title: "Verified Vendors",
        description: "Every vendor is verified to ensure quality gear, reliable service, and professional standards you can trust.",
        icon: "/icons/why/why1.svg"
    },
    {
        title: "Quality-Checked Gear",
        description: "Listings meet quality expectations so you get well-maintained, performance-ready equipment for every booking.",
        icon: "/icons/why/why2.svg"
    },
    {
        title: "Transparent Pricing",
        description: "See full pricing upfront, including rental fees and services, so there are no surprises at checkout.",
        icon: "/icons/why/why3.svg"
    },
    {
        title: "Local & Supported",
        description: "Connect with local providers for quicker delivery and get help from our support team whenever you need it.",
        icon: "/icons/why/why4.svg"
    }
];

const WhyChooseSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-start mb-10">
                    <p className="text-black-200 font-medium text-sm mb-4 bg-red-50 w-40 text-center rounded-sm">Why Choose KOOJI</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Why Thousands Choose KOOJI for Music Rentals and Services</h2>
                </div>
            </div>

            <div
                className="relative w-full min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center md:rounded-3xl md:mx-auto md:max-w-[95%]"
                style={{ backgroundImage: "url('/icons/why/bgImage.svg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end py-12 md:py-0">
                    <div className="w-full md:w-3/4 lg:w-2/3 xl:w-[55%] bg-white/60 backdrop-blur-2xl p-6 md:p-12 rounded-2xl border border-white/30 shadow-2xl">
                        <div className="space-y-4">
                            {WHY_CHOOSE_DATA.map((data, index) => (
                                <React.Fragment key={index}>
                                    <WhyChooseCard
                                        title={data.title}
                                        description={data.description}
                                        icon={data.icon}
                                    />
                                    {index < WHY_CHOOSE_DATA.length - 1 && (
                                        <div className="h-px w-full bg-black/10 my-4" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
