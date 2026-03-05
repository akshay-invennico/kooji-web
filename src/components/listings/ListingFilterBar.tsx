"use client";

import React from "react";
import { Search, MapPin, Calendar, ChevronDown, SlidersHorizontal } from "lucide-react";
import clsx from "clsx";

const ListingFilterBar = () => {
    return (
        <div className="w-full bg-white border-b border-gray-100 shadow-sm ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center">

                <div className="flex-1 flex flex-col border-r border-gray-200 px-4">
                    <label className="text-[14px] font-semibold text-gray-900 mb-1">
                        What are you looking for?
                    </label>
                    <div className="flex items-center gap-2">
                        <Search size={20} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Instruments, Singer, Lightings.."
                            className="bg-transparent text-[14px] text-gray-600 outline-none w-full placeholder:text-gray-400"
                        />
                    </div>
                </div>

                
                <div className="flex-1 flex flex-col border-r border-gray-100 px-6">
                    <label className="text-[14px] font-semibold text-gray-900 mb-1">
                        Where?
                    </label>
                    <div className="flex items-center gap-2">
                        <MapPin size={20} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Los Angeles, CA.."
                            className="bg-transparent text-[14px] text-gray-600 outline-none w-full placeholder:text-gray-400"
                        />
                    </div>
                </div>

                
                <div className="flex-1 flex flex-col border-r border-gray-100 px-6">
                    <label className="text-[14px] font-semibold text-gray-900 mb-1">
                        When?
                    </label>
                    <div className="flex items-center gap-2">
                        <Calendar size={20} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Select a date"
                            className="bg-transparent text-[14px] text-gray-600 outline-none w-full placeholder:text-gray-400"
                        />
                    </div>
                </div>

        
                <div className="flex-[0.8] flex flex-col border-r border-gray-100 px-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <label className="text-[14px] font-semibold text-gray-900 mb-1">
                        Sort by
                    </label>
                    <div className="flex items-center justify-between">
                        <span className="text-[14px] text-gray-900 font-medium">Most Relevance</span>
                        <ChevronDown size={16} className="text-gray-400" />
                    </div>
                </div>

            
                <div className="flex-[0.7] flex items-center justify-between px-6 border-r border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col">
                        <label className="text-[14px] font-semibold text-gray-900">Filters</label>
                        <span className="text-[14px] text-gray-700">Select Filters</span>
                    </div>
                    <div>
                        <SlidersHorizontal size={20} className="text-gray-900" />
                    </div>
                </div>

                <div className="flex-[0.8] flex items-center justify-center gap-3 px-6">
                    <span className="text-[14px] font-semibold text-gray-900">Show Map</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[green]"></div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ListingFilterBar;
