import React from "react";

interface SpaceDetailCardProps {
    spaceDetails: Record<string, string | undefined>;
}

const SpaceDetailCard: React.FC<SpaceDetailCardProps> = ({ spaceDetails }) => {
    const specEntries = Object.entries(spaceDetails).filter(([_, value]) => value !== undefined);

    return (
        <div className="flex flex-col gap-8">
            <div className="p-8 bg-white border border-[#F0EFEF] rounded-lg">
                <h2 className="mb-6 text-[18px] font-semibold text-[#000000]">Space Details</h2>
                <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-12">
                    {specEntries.map(([key, value], index) => (
                        <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                            <p className="text-[14px] text-[#686262] font-medium">
                                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{" "}
                                <span className="font-bold text-[#000000] ml-1">{value}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Availability & Booking Rules */}
            <div className="p-8 bg-white border border-[#F0EFEF] rounded-lg">
                <h3 className="text-[18px] font-semibold text-[#000000] mb-6">Availability & Booking Rules</h3>
                <ul className="space-y-4">
                    {[
                        "Available for Full Days bookings",
                        "Noise timing restrictions apply as per local regulations",
                        "Refundable security deposit required before the event",
                        "Post-event cleanup is mandatory (vendor or organizer responsibility)",
                        "Advance booking recommended for peak dates",
                    ].map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                            <span className="text-[14px] font-medium text-[#686262]">{rule}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SpaceDetailCard;