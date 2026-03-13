import React from "react";
import Image from "next/image";

interface TrustCardProps {
    icon: string;
    title: string;
}

const TrustCard: React.FC<TrustCardProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-6 border border-[#F0EFEF] rounded-lg bg-white min-h-[140px]">
            <div className="relative w-8 h-8 shrink-0">
                <Image
                    src={icon}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="text-[12px] font-semibold text-[#000000] leading-tight text-center">
                {title}
            </h3>
        </div>
    )
}

export default TrustCard;