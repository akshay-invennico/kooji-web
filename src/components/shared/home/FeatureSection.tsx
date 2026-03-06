import React from 'react'
import FeatureCard from '@/components/ui/feature/FeatureCard'

const FEATURES_DATA = [
    {
        title: "Search What You Need",
        description: "Choose equipment or services and enter your location.",
        icon: "/icons/features/search.svg"
    },
    {
        title: "Compare & Select",
        description: "View prices, ratings, availability, and vendor profiles.",
        icon: "/icons/features/compare.svg"
    },
    {
        title: "Book Securely",
        description: "Confirm your booking with transparent pricing and safe payments.",
        icon: "/icons/features/book.svg"
    },
    {
        title: "Get it Done",
        description: "Pickup, delivery, or on-site service hassle free.",
        icon: "/icons/features/done.svg"
    }
]

const FeatureSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-10">
                    <p className="text-black-200 font-medium tracking-wide text-sm mb-4 bg-red-50 w-35 text-center rounded-sm">How KOOJI Works</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Simple Steps to Get What You Need</h2>
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
