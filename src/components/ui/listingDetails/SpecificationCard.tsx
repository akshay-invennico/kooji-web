import React from "react";

interface SpecificationCardProps {
    specification: Record<string, string | undefined>;
}

const SpecificationCard: React.FC<SpecificationCardProps> = ({ specification }) => {
    const specEntries = Object.entries(specification).filter(([_, value]) => value !== undefined);

    return (
        <div className="p-8 bg-white border border-[#F0EFEF]  rounded-lg md:p-8">
            <h2 className="mb-4 text-[20px] font-semibold text-[#000000]">Specifications</h2>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-12">
                {specEntries.map(([key, value], index) => (
                    <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <p className="text-base text-gray-600">
                            <span className="text-[14px] text-[#686262] font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{" "}
                            <span className="font-medium text-[14px] text-[#000000] ml-1">{value}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecificationCard;