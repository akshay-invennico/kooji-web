import React from "react";

interface VenuServicesCardProps {
    icon: string;
    title: string;
}

const VenuServicesCard: React.FC<VenuServicesCardProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-200 transition-colors">
            <img src={icon} alt={title} className="w-9 h-9" />
            <p className="text-[13px] font-medium text-gray-700 leading-tight">{title}</p>
        </div>
    );
};

export default VenuServicesCard;