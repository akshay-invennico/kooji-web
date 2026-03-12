import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ExploreCardProps {
    title: string;
    description: string;
    image: string;
}


const ExploreCard: React.FC<ExploreCardProps> = ({ title, description, image }) => {
    return (
        <div className="relative group overflow-hidden rounded-xl h-[600px] cursor-pointer">
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[3px]" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">

                <h3 className="text-[20px] font-bold text-[#FFFFFF] mb-3">{title}</h3>

                <div className="transition-all duration-500 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-50 overflow-hidden">
                    <p className="text-[#FFFFFF] text-[16px] font-regular leading-relaxed mb-3">
                        {description}
                    </p>

                    <button className="flex items-center gap-2 px-6 py-2.5 bg-[#FF3A44] text-[#FFFFFF] text-[14px] font-semibold rounded">
                        Browse All
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExploreCard;