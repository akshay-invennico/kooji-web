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
                    <p className="text-black-200 font-medium text-sm mb-6 p-2 bg-red-50 w-fit px-4 text-center rounded-md">Why Choose KOOJI</p>
                    <h2 className="text-3xl  font-bold text-gray-900 leading-tight max-w-3xl">Why Thousands Choose KOOJI for Music Rentals and Services</h2>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-end rounded-lg md:rounded-lg overflow-hidden shadow-xl"
                    style={{ backgroundImage: "url('/icons/why/bgImage.svg')" }}
                >
                    <div className="w-full flex justify-end">
                        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] bg-white/70 backdrop-blur-xl p-6 md:p-10 lg:p-12 m-4 sm:m-6 md:m-8 lg:m-12 rounded-xl border border-white/40 shadow-2xl">
                            <div className="space-y-4 md:space-y-6">
                                {WHY_CHOOSE_DATA.map((data, index) => (
                                    <React.Fragment key={index}>
                                        <WhyChooseCard
                                            title={data.title}
                                            description={data.description}
                                            icon={data.icon}
                                        />
                                        {index < WHY_CHOOSE_DATA.length - 1 && (
                                            <div className="h-px w-full bg-gray-300/50 my-4 md:my-6" />
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
