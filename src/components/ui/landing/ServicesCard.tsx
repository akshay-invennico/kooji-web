import React from "react";
import { Plus } from "lucide-react";

interface ServicesCardProps {
    title: string,
    images: string[],
    bgColor: string,
    tags: string[],
    cardIndex: number
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, images, bgColor, tags, cardIndex }) => {
    return (
        <div
            className="rounded-xl p-2 md:p-12 mb-4 overflow-hidden relative group transition-all hover:shadow-md"
            style={{ backgroundColor: bgColor }}
        >
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative z-10">

                <div className="w-full lg:w-1/2 relative min-h-[350px] md:min-h-[450px] flex items-center justify-center">
                    <div className="relative w-full max-w-[400px] lg:max-w-[450px] aspect-square">
                        {images.map((img, index) => {
                            let imageClasses = "absolute object-cover transition-transform duration-300 hover:scale-[1.03] border-4 border-transparent  rounded-xl ";

                            if (cardIndex === 0) {
                                // 1. Instrumnet & Equipmet
                                if (index === 0) imageClasses += "w-[65%] left-[-5%] lg:left-[-15%] top-[10%] lg:top-[15%] -rotate-[2deg] z-20";
                                if (index === 1) imageClasses += "w-[60%] right-[0%] lg:right-[12%] bottom-[15%] rotate-[6deg] z-10";
                            } else if (cardIndex === 1) {
                                // 2. Musicians & Singers
                                if (index === 0) imageClasses += "w-[48%] left-[-5%] lg:left-[-10%] top-[5%] rotate-[1deg] z-10";
                                if (index === 1) imageClasses += "w-[45%] left-[20%] lg:left-[25%] bottom-[5%] lg:bottom-[0%] -rotate-[1deg] z-20";
                                if (index === 2) imageClasses += "w-[48%] right-[-5%] lg:right-[-5%] top-[2%] -rotate-[2deg] z-10";
                            } else if (cardIndex === 2) {
                                // 3. Technicians
                                if (index === 0) imageClasses += "w-[50%] left-[5%] lg:left-[10%] top-[28%] -rotate-[3deg] z-20";
                                if (index === 1) imageClasses += "w-[50%] left-[35%] lg:left-[35%] bottom-[45%] lg:bottom-[45%] -rotate-[2deg] z-30";
                                if (index === 2) imageClasses += "w-[55%] right-[-5%] lg:right-[-5%] top-[25%] lg:top-[30%] rotate-[4deg] z-10";
                            } else if (cardIndex === 3) {
                                // 4. Event Space
                                if (index === 0) imageClasses += "w-[75%] left-[0%] lg:left-[10%] top-[5%] lg:top-[10%] z-20";
                                if (index === 1) imageClasses += "w-[75%] right-[-5%] lg:right-[0%] bottom-[15%] lg:bottom-[10%] z-10";
                            }

                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${title} image ${index + 1}`}
                                    className={imageClasses}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6 lg:pl-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {title}
                    </h2>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {tags.slice(0, 18).map((tag, index) => (
                            <button
                                key={index}
                                className="bg-white/90 border border-white/40 px-4 py-2.5 rounded-lg text-sm md:text-sm font-semibold text-gray-800 shadow-sm hover:shadow hover:bg-white transition-all"
                            >
                                {tag}
                            </button>
                        ))}
                        <button className="bg-white px-4 py-2.5 rounded-lg text-sm md:text-sm font-semibold text-[#20B2FF] shadow-sm hover:shadow transition-all flex items-center gap-1">
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