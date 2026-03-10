import React from "react";
import Image from "next/image";

interface TrustCardProps {
    icon: string;
    title: string;
}

const TrustCard: React.FC<TrustCardProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-start p-4 md:p-6 border border-gray-200 rounded-lg bg-white hover:shadow-sm transition-shadow duration-200 w-full min-h-[140px]">
            <div className="mb-4 relative w-8 h-8">
                <Image 
                    src={icon} 
                    alt={title} 
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="text-sm md:text-[15px] font-bold text-gray-900 leading-tight">
                {title}
            </h3>
        </div>
    )
}

export default TrustCard;