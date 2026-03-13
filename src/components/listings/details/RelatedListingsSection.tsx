import React, { useMemo } from "react";
import ListingCard from "../ListingCard";
import { LISTINGS_DATA } from "../../../data/listingsData";

interface RelatedListingsSectionProps {
    currentListingId: string;
}

const RelatedListingsSection: React.FC<RelatedListingsSectionProps> = ({ currentListingId }) => {

    const relatedListings = useMemo(() => {
        const filtered = LISTINGS_DATA.filter(item => item.id !== currentListingId);

        return [...filtered].sort(() => 0.5 - Math.random()).slice(0, 5);
    }, [currentListingId]);

    return (
        <section className="py-6 md:py-12 px-4 md:px-10 border-t border-gray-100">
            <h2 className="text-[24px] md:text-[36px] font-bold text-[#000000] mb-6 md:mb-8 font-outfit">
                You Might be also like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {relatedListings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        id={listing.id}
                        title={listing.title}
                        address={listing.address}
                        price={listing.price}
                        rating={listing.rating}
                        totalReviews={listing.totalReviews}
                        image={listing.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default RelatedListingsSection;
