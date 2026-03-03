import React from "react";
import { Plus } from "lucide-react";

interface ServicesCardProps {
    title: string,
    images: string[],
    bgColor: string,
    tags: string[]
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, images, bgColor, tags }) => {
    return (
        <div
            className="rounded-xl p-8 md:p-12 mb-8 overflow-hidden relative group"
            style={{ backgroundColor: bgColor }}
        >
           
           

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">

                <div>
                    {images.map((img, index) => (
                        <img 
                            key={index}
                            src={img}
                            alt={title}
                            className=""
                        />
                    ))}
                </div>
               
               

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-black">
                        {title}
                    </h2>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {tags.slice(0, 18).map((tag, index) => (
                            <button
                                key={index}
                                className="bg-white border border-gray-100 px-4 py-2 rounded-md text-sm md:text-base font-semibold text-black shadow-sm"
                            >
                                {tag}
                            </button>
                        ))}
                        <button className="bg-[#EBF9FF] px-4 py-2 rounded-lg text-sm md:text-base font-semibold text-[#20B2FF] hover:bg-blue-100 transition-all flex items-center gap-1">
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