import React from "react";
import { Plus } from "lucide-react";

interface ServicesCardProps {
    title: string,
    image: string,
    bgColor: string,
    tags: string[],
    cardIndex: number
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, image, bgColor, tags, cardIndex }) => {
    return (
        <div
            className="rounded-xl overflow-hidden mb-[60px] group sticky top-[120px]"
            style={{ backgroundColor: bgColor, zIndex: cardIndex + 10 }}
        >
            <div className="flex flex-col lg:flex-row items-center relative z-10 h-full">

                <div className="w-full lg:w-1/2 relative min-h-[350px] md:min-h-[480px]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-6 p-8 md:p-12 lg:p-16">
                    <h2 className="text-[24px] font-bold text-[#000000]">
                        {title}
                    </h2>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {tags.slice(0, 18).map((tag, index) => (
                            <button
                                key={index}
                                className="bg-[#EAFBFF] border border-[#B5E9F5] px-4 py-2.5 rounded-md text-[14px] md:text-[14px] font-semibold text-[#000000]"
                            >
                                {tag}
                            </button>
                        ))}
                        <button className="bg-[#EAFBFF] px-4 py-2.5 rounded-md text-[14px] md:text-[14px] font-semibold text-[#009FFD]  flex items-center gap-1">
                            <Plus className="w-4 h-4" />
                            More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;