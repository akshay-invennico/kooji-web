import React from "react";
import InfoCard from "@/components/ui/listingDetails/InfoCard";

interface InfoSectionProps {
    listing: {
        title: string;
        category: string;
        type: string;
        rating: number;
        totalReviews: number;
        address: string;
    };
}

const InfoSection: React.FC<InfoSectionProps> = ({ listing }) => {
    return (
        <section className="bg-white">
            <InfoCard
                title={listing.title}
                category={listing.category}
                type={listing.type}
                rating={listing.rating}
                totalReviews={listing.totalReviews}
                address={listing.address}
            />
        </section>
    );
};

export default InfoSection;