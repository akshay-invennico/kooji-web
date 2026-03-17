import React from "react";
import WhyChooseCard from "@/components/ui/landing/WhyChooseCard";

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
        <section className="pb-16 md:pb-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-start mb-10">
                    <p className="text-[#686262] font-semibold text-[14px]  mb-6 p-2 bg-[#FFF8F8] w-fit px-4 text-center rounded">Why Choose KOOJI</p>
                    <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold">Why Thousands Choose KOOJI for Music Rentals <br /> and Services</h2>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="w-full min-h-[400px] md:min-h-[450px] lg:h-[480px] bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-end rounded-xl overflow-hidden"
                    style={{ backgroundImage: "url('/icons/why/bgImage.png')" }}
                >
                    <div className="w-full h-full flex items-center justify-center lg:justify-end p-4 sm:p-6 md:p-8 lg:p-4">
                        <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[500px] bg-[#FFFFFFB2] backdrop-blur-xl p-6 md:p-8 lg:p-6 rounded-xl border border-[#F0EFEF] shadow-xl">
                            <div className="space-y-4 lg:space-y-2">
                                {WHY_CHOOSE_DATA.map((data, index) => (
                                    <React.Fragment key={index}>
                                        <WhyChooseCard
                                            title={data.title}
                                            description={data.description}
                                            icon={data.icon}
                                        />
                                        {index < WHY_CHOOSE_DATA.length - 1 && (
                                            <div className="h-px w-full bg-[#686262]/10" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
