"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import { SearchLocationFilter } from "../ui/listings/SearchLocationFilter";
import { DateFilter } from "../ui/listings/DateFilter";
import { SortFilter } from "../ui/listings/SortFilter";
import { AdvancedFiltersModal } from "../ui/listings/AdvancedFiltersModal";

interface ListingFilterBarProps {
    showMap: boolean;
    onShowMapChange: (value: boolean) => void;
}

const SORT_OPTIONS = [
    { id: "relevance", label: "Most Relevance" },
    { id: "nearest", label: "Nearest First" },
    { id: "newest", label: "New Listings" },
    { id: "popular", label: "Popular/Trending" },
    { id: "topRated", label: "Top Rated" },
    { id: "price_asc", label: "Price: Low to High" },
    { id: "price_desc", label: "Price: Hight to Low" },
];

const filterSchema = Yup.object().shape({
    searchQuery: Yup.string().required("Search term is required"),
    locationQuery: Yup.string().required("Location is required"),
    startDate: Yup.date().nullable().required("Start date is required"),
    endDate: Yup.date().nullable().required("End date is required"),
});

const ListingFilterBar: React.FC<ListingFilterBarProps> = ({ showMap, onShowMapChange }) => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
            searchQuery: "",
            locationQuery: "",
            startDate: null as Date | null,
            endDate: null as Date | null,
            sortMode: SORT_OPTIONS[0],
            filters: {
                categories: [] as string[],
                listingTypes: [] as string[],
                ratings: [] as string[],
                eventTypes: [] as string[],
                crewSizes: [] as string[],
                priceRange: [110, 880] as [number, number],
            }
        },
        validationSchema: filterSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            console.log("Filter values submitted:", values);
            setIsFiltersOpen(false);
            setIsMobileModalOpen(false);
        },
    });

    const filterContent = (
        <>
            <SearchLocationFilter formik={formik} />
            <DateFilter formik={formik} />
            <SortFilter formik={formik} />
            <AdvancedFiltersModal
                formik={formik}
                isOpen={isFiltersOpen}
                onClose={() => setIsFiltersOpen(false)}
                onToggle={() => setIsFiltersOpen(o => !o)}
            />
            {/* Map Toggle (Included in both desktop and mobile modal) */}
            <div className="flex items-center gap-3 px-4 md:px-8 py-3 md:py-0 min-w-[50px] h-full border-t md:border-t-0 md:border-l border-[#F0EFEF]">
                <span className="text-[16px] font-semibold text-black whitespace-nowrap">Show Map</span>
                <div
                    className="w-[46px] h-[26px] bg-[#F3F4F6] rounded-full relative cursor-pointer flex items-center overflow-hidden"
                    onClick={() => onShowMapChange(!showMap)}
                >
                    <div
                        className={`absolute top-px transition-transform duration-300 ease-in-out ${showMap ? 'translate-x-[21px]' : 'translate-x-px'}`}
                    >
                        <Image
                            src={showMap ? "/icons/filters/toggleOff.svg" : "/icons/filters/toogleOn.svg"}
                            alt="Toggle Map"
                            width={24}
                            height={24}
                            className="shrink-0"
                        />
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className="w-full bg-white border-b border-[#F0EFEF] lg:sticky lg:top-[95px] z-50">
            <div className="max-w-7xl mx-auto px-4 h-auto md:h-[100px] flex items-center py-4 md:py-0">
                <div className="flex items-center justify-end lg:justify-between w-full h-full">
                    {/* Desktop Filters */}
                    <div className="hidden lg:flex flex-1 h-full items-center">
                        {filterContent}
                    </div>

                    {/* Mobile Filter Button (Standalone at the right) */}
                    <div className="flex lg:hidden items-center ml-auto">
                        <button
                            onClick={() => setIsMobileModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 border border-[#F0EFEF] rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <Image src="/icons/filters/filterIcon5.svg" alt="Filters" width={20} height={20} />
                            <span className="text-[14px] font-semibold text-black">Filters</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Modal */}
            {isMobileModalOpen && (
                <div className="fixed inset-0 z-100 bg-white flex flex-col animate-in slide-in-from-bottom duration-300">
                    <div className="flex items-center justify-between p-4 border-b border-[#F0EFEF]">
                        <h2 className="text-[18px] font-bold text-black">All Filters</h2>
                        <button onClick={() => setIsMobileModalOpen(false)} className="p-2 text-black">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                        <div className="flex flex-col gap-6">
                            {filterContent}
                        </div>
                    </div>
                    <div className="p-4 border-t border-[#F0EFEF] bg-white">
                        <button
                            onClick={() => formik.handleSubmit()}
                            className="w-full bg-[#FF3A44] text-white py-4 rounded font-bold text-[16px]"
                        >
                            Show Results
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListingFilterBar;

