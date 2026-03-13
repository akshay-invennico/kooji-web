import React from "react";

interface WhyChooseCardProps {
    title: string,
    description: string,
    icon: string
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ title, description, icon }) => {
    return (
        <div className="flex items-start gap-4 lg:gap-3 py-2 lg:py-1 text-[#000000]">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <img src={icon} alt={title} className="w-10 h-10 object-contain" />
            </div>
            <div>
                <h3 className="text-[20px] lg:text-[18px] font-bold mb-1 leading-snug text-[#000000]">{title}</h3>
                <p className="text-[14px] lg:text-[13px] text-[#000000] font-medium leading-relaxed max-w-sm">{description}</p>
            </div>
        </div>
    );
};


export default WhyChooseCard;