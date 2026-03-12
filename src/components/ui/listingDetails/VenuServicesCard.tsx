import React from "react";

interface VenuServicesCardProps {
    icon: string;
    title: string;
}

const VenuServicesCard: React.FC<VenuServicesCardProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-start gap-4 p-4 rounded-lg border border-[#F0EFEF] bg-white">
            <img src={icon} alt={title} className="w-9 h-9" />
            <p className="text-[12px] font-medium text-[#000000] leading-tight">{title}</p>
        </div>
    );
};

export default VenuServicesCard;