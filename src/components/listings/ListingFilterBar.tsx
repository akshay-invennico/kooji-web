"use client";

import React from "react";
import { Search, MapPin, Calendar, ChevronDown, SlidersHorizontal } from "lucide-react";


const ListingFilterBar = () => {
    return (
        <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 lg:h-20 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-0">

                <div className="flex flex-col md:flex-row flex-1 border-b md:border-b-0 md:border-r border-gray-100 lg:border-gray-200">
                    <div className="w-120 flex-1 flex flex-col border-b md:border-b-0 md:border-r border-gray-100 px-4 py-2 md:py-0">
                        <label className="text-[12px] lg:text-[14px] font-semibold text-gray-900 mb-1">
                            What are you looking for?
                        </label>
                        <div className="flex items-center gap-2">
                            <Search size={18} className="text-gray-500 shrink-0" />
                            <input
                                type="text"
                                placeholder="Instruments, Singer, Lightings.."
                                className="bg-transparent text-[14px] text-gray-600 outline-none w-full placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-gray-100 px-4 md:px-6 py-2 md:py-0">
                        <label className="text-[12px] lg:text-[14px] font-semibold text-gray-900 mb-1">
                            Where?
                        </label>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-gray-500 shrink-0" />
                            <input
                                type="text"
                                placeholder="Los Angeles, CA.."
                                className="bg-transparent text-[14px] text-gray-600 outline-none w-full placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col md:border-r border-gray-100 px-4 md:px-6 py-2 md:py-0">
                        <label className="text-[12px] lg:text-[14px] font-semibold text-gray-900 mb-1">
                            When?
                        </label>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-gray-500 shrink-0" />
                            <input
                                type="text"
                                placeholder="Select a date"
                                className="bg-transparent text-[14px] text-gray-600 outline-none w-full placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between lg:flex-nowrap lg:flex-[1.5] gap-2 md:gap-0 mt-2 lg:mt-0">
                    <div className="flex-1 lg:flex-[0.8] flex flex-col md:border-r border-gray-100 px-4 md:px-6 cursor-pointer hover:bg-gray-50 transition-colors py-2 lg:py-0 rounded-lg lg:rounded-none">
                        <label className="text-[12px] lg:text-[14px] font-semibold text-gray-900 mb-1">
                            Sort by
                        </label>
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] lg:text-[14px] text-gray-900 font-medium">Most Relevance</span>
                            <ChevronDown size={14} className="text-gray-400" />
                        </div>
                    </div>

                    <div className="flex-1 lg:flex-[0.7] flex items-center justify-between px-4 md:px-6 md:border-r border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors py-2 lg:py-0 rounded-lg lg:rounded-none">
                        <div className="flex flex-col">
                            <label className="text-[12px] lg:text-[14px] font-semibold text-gray-900">Filters</label>
                            <span className="text-[13px] lg:text-[14px] text-gray-700 hidden sm:inline">Select Filters</span>
                        </div>
                        <SlidersHorizontal size={18} className="text-gray-900 ml-2" />
                    </div>

                    <div className="flex-1 lg:flex-[0.8] flex items-center justify-center gap-3 px-4 md:px-6 py-2 lg:py-0">
                        <span className="text-[13px] lg:text-[14px] font-semibold text-gray-900 whitespace-nowrap">Show Map</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-10 h-5 md:w-11 md:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-[green]"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingFilterBar;
