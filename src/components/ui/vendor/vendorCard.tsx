import React from "react";

interface VendorCardProps {
    title: string;
    icon: string;
    selected?: boolean;
    onClick?: () => void;
}

const VendorCard: React.FC<VendorCardProps> = ({ title, icon, selected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`w-[250px] h-[120px] p-4 rounded-lg border transition-all cursor-pointer flex flex-col items-start justify-between bg-white ${selected ? "border-[#FF3A44] " : "border-gray-200 hover:border-gray-300"
                }`}
        >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selected ? "" : "bg-gray-50"}`}>
                <img
                    src={icon}
                    alt={title}
                    className={`w-6 h-6 object-contain ${selected ? "filter-red" : ""}`}
                    style={selected ? { filter: "invert(21%) sepia(100%) saturate(7414%) hue-rotate(354deg) brightness(97%) contrast(100%)" } : {}}
                />
            </div>

            <div>
                <h3 className={`text-[16px] font-semibold ${selected ? "text-[#FF3A44]" : "text-[#000000]"}`}>{title}</h3>
            </div>
        </div>
    );
};

export default VendorCard;