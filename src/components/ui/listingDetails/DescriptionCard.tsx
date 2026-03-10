import React from "react";

interface DescriptionCardProps {
    overview: string;
    whatsIncluded?: string[];
    whatsNotIncluded?: string[];
    rulesAndUsageGuidelines?: string[];
    venueHighlights?: string[];
    category?: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
    overview,
    whatsIncluded,
    whatsNotIncluded,
    rulesAndUsageGuidelines,
    venueHighlights,
    category
}) => {
    const isEventSpace = category?.toLowerCase() === "event space";

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h4 className="text-[17px] font-bold text-gray-900 mb-3">Overview</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {overview}
                </p>
            </div>

            {isEventSpace && venueHighlights && venueHighlights.length > 0 && (
                <div>
                    <h4 className="text-[17px] font-bold text-gray-900 mb-3">Venue Highlights</h4>
                    <ul className="space-y-3">
                        {venueHighlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {!isEventSpace && (
                <>
                    {whatsIncluded && whatsIncluded.length > 0 && (
                        <div>
                            <h4 className="text-[17px] font-bold text-gray-900 mb-3">What's Included</h4>
                            <ul className="space-y-2">
                                {whatsIncluded.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {whatsNotIncluded && whatsNotIncluded.length > 0 && (
                        <div>
                            <h4 className="text-[17px] font-bold text-gray-900 mb-3">What's Not Included</h4>
                            <ul className="space-y-2">
                                {whatsNotIncluded.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {rulesAndUsageGuidelines && rulesAndUsageGuidelines.length > 0 && (
                        <div>
                            <h4 className="text-[17px] font-bold text-gray-900 mb-3">Rules and Usages Guidline</h4>
                            <ul className="space-y-2">
                                {rulesAndUsageGuidelines.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DescriptionCard;