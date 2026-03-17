import DescriptionCard from "@/components/ui/listingDetails/DescriptionCard";
import React from "react";

interface DescriptionSectionProps {
    overview: string;
    whatsIncluded?: string[];
    whatsNotIncluded?: string[];
    rulesAndUsageGuidelines?: string[];
    venueHighlights?: string[];
    category?: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
    overview,
    whatsIncluded,
    whatsNotIncluded,
    rulesAndUsageGuidelines,
    venueHighlights,
    category
}) => {
    return (
        <section className="w-full bg-white mb-2">
            <div className="container mx-auto px-4 md:px-10">
                <div className="max-w-3xl py-6 border-b border-[#F0EFEF]">
                    <h2 className="text-[20px] font-semibold text-[000000] mb-3">Description</h2>

                    <div className="mb-0">
                        <DescriptionCard
                            overview={overview}
                            whatsIncluded={whatsIncluded}
                            whatsNotIncluded={whatsNotIncluded}
                            rulesAndUsageGuidelines={rulesAndUsageGuidelines}
                            venueHighlights={venueHighlights}
                            category={category}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DescriptionSection;