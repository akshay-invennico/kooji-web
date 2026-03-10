"use client";

import React, { useState } from "react";
import { Share, Heart, Star, MapPin, Map, X } from "lucide-react";
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
        <div className="w-full py-8 border-b border-gray-100">
            <div className="container mx-auto px-10">
                <div className="flex flex-col md:flex-row gap-2">
                   
                    <div className="w-full md:w-3/6">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                            {title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-600 mb-6">
                            <span className="font-medium text-gray-700">{category}</span>
                            <span className="w-2 h-2 rounded-full bg-gray-400 mx-1" />
                            <span className="font-medium text-gray-700">{type}</span>
                            <span className="w-2 h-2 rounded-full bg-gray-400 mx-1" />
                            <div className="flex items-center gap-1.5">
                                <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                                <span className="font-bold text-gray-900">{rating}</span>
                                <span className="text-gray-500">({totalReviews} Reviews)</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-5 h-5 flex-shrink-0 text-gray-400" />
                            <p className="text-sm md:text-base font-medium">
                                {address}
                            </p>
                        </div>
                    </div>

                   
                    <div className="w-full md:w-2/5 flex flex-col justify-between items-start gap-3 mt-4 md:mt-0">
                        <div className="flex items-start gap-3">
                            <button className="p-2 rounded-sm border border-gray-200 hover:bg-gray-50 transition-all text-gray-700 shadow-sm hover:shadow-md bg-white group" aria-label="Share">
                                <Share className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-sm border border-gray-200 hover:bg-gray-50 transition-all text-gray-700 shadow-sm hover:shadow-md bg-white group" aria-label="Add to Favorites">
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>

                        <button 
                            className="flex items-center gap-2 text-red-500 font-semibold text-sm md:text-base transition-colors hover:text-red-700"
                            onClick={() => setIsMapOpen(true)}
                        >
                            <Map className="w-5 h-5" />
                            Show on Map
                        </button>
                    </div>
                </div>
            </div>

            {isMapOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 transition-opacity animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[70vh] flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-red-500" />
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