"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import GoogleMaps from "@/components/listings/GoogleMaps";

interface InfoCardProps {
    title: string;
    category: string;
    type: string;
    rating: number;
    totalReviews: number;
    address: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, category, type, rating, totalReviews, address }) => {
    const [isMapOpen, setIsMapOpen] = useState(false);

    return (
        <div className="w-full max-w-3xl pb-8 border-b border-[#F0EFEF]">
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col gap-4">
                    {/* Title and Action Buttons */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h1 className="text-2xl md:text-[28px] font-bold text-[#000000] tracking-tight">
                            {title}
                        </h1>
                        <div className="flex items-center  ">
                            <button className="p-2 rounded  bg-white" aria-label="Share">
                                <Image src="/icons/details/shareIcon.svg" alt="Share" width={40} height={40} className="w-10 h-10" />
                            </button>
                            <button className="p-2 rounded  bg-white" aria-label="Add to Favorites">
                                <Image src="/icons/details/heartIcon.svg" alt="Heart" width={40} height={40} className="w-10 h-10" />
                            </button>
                        </div>
                    </div>

                    {/* Metadata Line */}
                    <div className="flex flex-wrap items-center gap-3 text-sm md:text-[14px] font-medium text-[#686262]">
                        <span>{category}</span>
                        <img src="/assets/round.svg" alt="" className="w-1.5 h-1.5" />
                        <span>{type}</span>
                        <img src="/assets/round.svg" alt="" className="w-1.5 h-1.5" />
                        <div className="flex items-center gap-1.5">
                            <Image src="/icons/details/starIcon.svg" alt="Rating" width={16} height={16} className="w-4 h-4" />
                            <span className="text-[#686262] text-[16px] font-medium">{rating}</span>
                            <span className="text-[#717171] text-[12px] font-medium">({totalReviews} Reviews)</span>
                        </div>
                    </div>

                    {/* Address Line and Show on Map */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-2 text-[#717171]">
                            <Image src="/icons/details/locationIcon.svg" alt="Location" width={20} height={20} className="w-5 h-5 shrink-0 mt-0.5" />
                            <p className="text-sm md:text-[16px] font-medium leading-relaxed">
                                {address}
                            </p>
                        </div>
                        <button
                            className="flex items-center gap-2 text-[#FF3A44] font-bold text-sm md:text-[14px]"
                            onClick={() => setIsMapOpen(true)}
                        >
                            <Image src="/icons/details/mapIcon.svg" alt="Map" width={20} height={20} className="w-5 h-5" />
                            Show on Map
                        </button>
                    </div>
                </div>
            </div>

            {isMapOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 transition-opacity animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[70vh] flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <Image src="/icons/details/locationIcon.svg" alt="Location" width={20} height={20} className="w-5 h-5" />
                                Location Map
                            </h3>
                            <button
                                onClick={() => setIsMapOpen(false)}
                                className="text-gray-400 hover:text-gray-900 transition-colors p-1 rounded-full hover:bg-gray-100"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex-1 w-full h-full relative p-2">
                            <div className="w-full h-full rounded-xl overflow-hidden shadow-inner">
                                <GoogleMaps />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfoCard;