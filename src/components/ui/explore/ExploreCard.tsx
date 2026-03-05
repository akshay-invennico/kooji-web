import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ExploreCardProps {
    title: string;
    description: string;
    image: string;
}


const ExploreCard: React.FC<ExploreCardProps> = ({ title, description, image }) => {
    return (
        <div className="relative group overflow-hidden rounded-xl h-[600px] cursor-pointer shadow-sm">
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[3px]" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">

                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

                <div className="transition-all duration-500 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden">
                    <p className="text-white text-sm leading-relaxed mb-1">
                        {description}
                    </p>

                    <button className="flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-sm hover:bg-red-700 transition-colors w-fit group/btn">
                        Browse All
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExploreCard;