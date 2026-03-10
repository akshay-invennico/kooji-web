import React from "react";
import SpaceDetailCard from "@/components/ui/listingDetails/SpaceDetailCard";

interface SpaceDetailSectionProps {
    spaceDetails: Record<string, string | undefined>;
}

const SpaceDetailSection: React.FC<SpaceDetailSectionProps> = ({ spaceDetails }) => {
    return (
        <section className="px-4 py-12 mx-auto max-w-7xl">
            <SpaceDetailCard spaceDetails={spaceDetails} />
        </section>
    );
};

export default SpaceDetailSection;