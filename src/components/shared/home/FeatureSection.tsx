import React from 'react'
import FeatureCard from '@/components/ui/landing/FeatureCard'

const FEATURES_DATA = [
    {
        title: "Search What You Need",
        description: "Choose equipment or services and enter your location.",
        icon: "/icons/features/feature1.svg"
    },
    {
        title: "Compare & Select",
        description: "View prices, ratings, availability, and vendor profiles.",
        icon: "/icons/features/feature2.svg"
    },
    {
        title: "Book Securely",
        description: "Confirm your booking with transparent pricing and safe payments.",
        icon: "/icons/features/feature3.svg"
    },
    {
        title: "Get it Done",
        description: "Pickup, delivery, or on-site service hassle free.",
        icon: "/icons/features/feature4.svg"
    }
]

const FeatureSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-10">
                    <p className="text-[#686262] font-semibold text-[14px]  mb-6 p-2 bg-[#FFF8F8] w-fit px-4 text-center rounded">How KOOJI Works</p>
                    <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold">Simple Steps to Get What You Need</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {FEATURES_DATA.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeatureSection;
