import React from "react";

interface SpaceDetailCardProps {
    spaceDetails: Record<string, string | undefined>;
}

const SpaceDetailCard: React.FC<SpaceDetailCardProps> = ({ spaceDetails }) => {
    const specEntries = Object.entries(spaceDetails).filter(([_, value]) => value !== undefined);

    return (
        <div className="p-8 bg-white border border-gray-100  rounded-md md:p-6">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">Space Details</h2>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-12">
                {specEntries.map(([key, value], index) => (
                    <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <p className="text-base text-gray-600">
                            <span className="capitalize text-gray-700 font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{" "}
                            <span className="font-semibold text-gray-900 ml-1">{value}</span>
                        </p>
                    </div>
                ))}
            </div>

            {/* Availability & Booking Rules */}
            <div className="mt-10 pt-10 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Availability & Booking Rules</h3>
                <ul className="space-y-4">
                    {[
                        "Available for Full Days bookings",
                        "Noise timing restrictions apply as per local regulations",
                        "Refundable security deposit required before the event",
                        "Post-event cleanup is mandatory (vendor or organizer responsibility)",
                        "Advance booking recommended for peak dates",
                    ].map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                            <span className="text-base text-gray-600">{rule}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SpaceDetailCard;