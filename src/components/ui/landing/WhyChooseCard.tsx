import React from "react";

interface WhyChooseCardProps {
    title: string,
    description: string,
    icon: string
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ title, description, icon }) => {
    return (
        <div className="flex items-start gap-4 py-4 text-black">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <img src={icon} alt={title} className="w-12 h-12 object-contain" />
            </div>
            <div>
                <h3 className="text-lg font-bold mb-1 leading-snug">{title}</h3>
                <p className="text-sm text-black leading-relaxed max-w-sm">{description}</p>
            </div>
        </div>
    );
};


export default WhyChooseCard;