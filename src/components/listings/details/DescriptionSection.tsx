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
            <div className="container mx-auto px-10">
                <div className="max-w-4xl py-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>

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