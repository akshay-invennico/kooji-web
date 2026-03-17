import React from "react";
import Image from "next/image";

interface TrustCardProps {
    icon: string;
    title: string;
}

const TrustCard: React.FC<TrustCardProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-start justify-between p-5 border border-[#F0EFEF] rounded-lg bg-white min-h-[110px] w-[200px]">
            <div className="relative w-10 h-10  shrink-0">
                <Image
                    src={icon}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="text-[14px] font-semibold text-[#000000] leading-tight text-start">
                {title}
            </h3>
        </div>
    )
}

export default TrustCard;