import React from "react";
import ExploreCard from "@/components/ui/landing/ExploreCard";


const EXPLORE_DATA = [
    {
        title: "Instruments & Equipment",
        description: "Discover a comprehensive suite of instruments and equipment meticulously curated for your research needs. Elevate your experiments with precision tools designed for accuracy and reliability",
        image: "/assets/exploreImg/explore1.svg"
    },

    {
        title: "Musicians & Singers",
        description: "Discover a comprehensive suite of instruments and equipment meticulously curated for your research needs. Elevate your experiments with precision tools designed for accuracy and reliability",
        image: "/assets/exploreImg/explore2.svg"
    },

    {
        title: "Event & Spaces",
        description: "Discover a comprehensive suite of instruments and equipment meticulously curated for your research needs. Elevate your experiments with precision tools designed for accuracy and reliability",
        image: "/assets/exploreImg/explore3.svg"
    },
]


const ExploreSection = () => {
    return (
        <section className="pb-16 md:pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-10">
                    <p className="text-black-200 font-medium text-sm mb-6 p-2 bg-red-50 w-fit px-4 text-center rounded-md">Explore Our Marketplace</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Explore Our Full Range of Music Rentals and Services</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {EXPLORE_DATA.map((explore, index) => (
                        <ExploreCard
                            key={index}
                            title={explore.title}
                            description={explore.description}
                            image={explore.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExploreSection;