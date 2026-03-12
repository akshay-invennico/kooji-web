/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";
import Image from "next/image";

const FILTER_CATEGORIES = [
    { id: "guitar", label: "Guitar", count: 208 },
    { id: "keyboard", label: "Keyboard", count: 40 },
    { id: "drums", label: "Drums", count: 108 },
    { id: "violin", label: "Violin", count: 500 },
    { id: "guitar2", label: "Guitar", count: 750 },
    { id: "piano", label: "Piano", count: 600 },
    { id: "drums2", label: "Drums", count: 400 },
    { id: "flute", label: "Flute", count: 300 },
    { id: "saxophone", label: "Saxophone", count: 450 },
];

const LISTING_TYPES = [
    { id: "rentals", label: "Rentals (Equipment)", count: 208 },
    { id: "services", label: "Services", count: 40 },
];

const RATINGS = [
    { id: "5stars", label: "5 Stars", count: 208 },
    { id: "4plus", label: "4 Stars & Above", count: 40 },
    { id: "3plus", label: "3 Stars & Above", count: 208 },
];

const EVENT_TYPES = [
    { id: "weddings", label: "Weddings", count: 208 },
    { id: "parties", label: "Parties", count: 40 },
    { id: "corporate", label: "Corporate Events", count: 208 },
    { id: "concerts", label: "Concerts", count: 40 },
    { id: "private", label: "Private Gatherings", count: 40 },
];

const CREW_SIZES = [
    { id: "solo", label: "Solo", count: 208 },
    { id: "small", label: "Small Team (2-4)", count: 40 },
    { id: "large", label: "Large Team (5+)", count: 208 },
];

interface AdvancedFiltersModalProps {
    formik: any;
    isOpen: boolean;
    onClose: () => void;
    onToggle: () => void;
}

export const AdvancedFiltersModal = ({ formik, isOpen, onClose, onToggle }: AdvancedFiltersModalProps) => {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const filtersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    const toggleFilter = (category: string, id: string) => {
        const current = formik.values.filters[category] as string[];
        const next = current.includes(id)
            ? current.filter(item => item !== id)
            : [...current, id];
        formik.setFieldValue(`filters.${category}`, next);
    };

    const clearAllFilters = () => {
        formik.setFieldValue("filters", {
            categories: [],
            listingTypes: [],
            ratings: [],
            eventTypes: [],
            crewSizes: [],
            priceRange: [110, 880],
        });
        setShowAllCategories(false);
    };

    return (
        <div
            className="flex-1 flex items-center justify-between px-4 md:px-8 border-r border-[#F0EFEF] cursor-pointer hover:bg-gray-50 transition-colors py-3 md:py-0 relative h-full"
            ref={filtersRef}
            onClick={onToggle}
        >
            <div className="flex flex-col justify-center">
                <label className="text-[14px] font-medium text-[#000000] mb-2 truncate">Filters</label>
                <span className="text-[14px] text-[#000000] font-medium hidden sm:inline">Select Filters</span>
            </div>

            <div className="flex items-center gap-2 ml-2">

                <Image src="/icons/filters/filterIcon5.svg" alt="Filters" width={20} height={20} className="shrink-0" />
            </div>

            {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 mt-2 w-[95vw] sm:w-[500px] md:w-[600px] max-w-[calc(100vw-2rem)] bg-white border border-gray-100 rounded-2xl shadow-2xl z-80 p-4 sm:p-6 overflow-y-auto max-h-[70vh] animate-in fade-in zoom-in duration-200 origin-top md:origin-top-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-col gap-6 pb-6">
                        <h2 className="text-[20px] font-semibold text-[#000000]">Filters</h2>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-[16px] font-semibold text-[#000000]">Categories</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 transition-all duration-300">
                                {(showAllCategories ? [...FILTER_CATEGORIES, ...FILTER_CATEGORIES] : FILTER_CATEGORIES).map((cat, idx) => (
                                    <div key={`${cat.id}-${idx}`} className="flex items-center justify-between group cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleFilter('categories', cat.id); }}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formik.values.filters.categories.includes(cat.id) ? "bg-red-500 border-red-500" : "border-gray-300 group-hover:border-red-500"}`}>
                                                {formik.values.filters.categories.includes(cat.id) && <Check size={14} className="text-white" />}
                                            </div>
                                            <span className="text-[14px] font-semibold text-[#000000]">{cat.label}</span>
                                        </div>
                                        <span className="text-[14px] text-gray-400">({cat.count})</span>
                                    </div>
                                ))}
                            </div>
                            {!showAllCategories && (
                                <div
                                    className="text-[#009FFD] text-[14px] font-semibold cursor-pointer py-1 hover:underline"
                                    onClick={(e) => { e.stopPropagation(); setShowAllCategories(true); }}
                                >
                                    +more
                                </div>
                            )}
                            {showAllCategories && (
                                <div
                                    className="text-[#009FFD] text-[14px] font-semibold cursor-pointer py-1 hover:underline"
                                    onClick={(e) => { e.stopPropagation(); setShowAllCategories(false); }}
                                >
                                    Show less
                                </div>
                            )}
                        </div>

                        <div className="h-px bg-gray-100" />

                        <div className="flex flex-col gap-4">
                            <h3 className="text-[16px] font-bold text-gray-900">Price Range</h3>
                            <div className="flex items-center justify-between text-[14px] mb-2">
                                <span className="text-gray-500">From <span className="font-bold text-gray-900">${formik.values.filters.priceRange[0]}</span></span>
                                <span className="text-gray-500">To <span className="font-bold text-gray-900">${formik.values.filters.priceRange[1]}</span></span>
                            </div>
                            <div className="relative h-6 flex items-center px-2">
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={formik.values.filters.priceRange[0]}
                                    onChange={(e) => {
                                        const val = Math.min(parseInt(e.target.value), formik.values.filters.priceRange[1] - 10);
                                        formik.setFieldValue("filters.priceRange", [val, formik.values.filters.priceRange[1]]);
                                    }}
                                    className="absolute w-full h-1 bg-transparent rounded-full appearance-none pointer-events-none z-20 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:rounded-full"
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={formik.values.filters.priceRange[1]}
                                    onChange={(e) => {
                                        const val = Math.max(parseInt(e.target.value), formik.values.filters.priceRange[0] + 10);
                                        formik.setFieldValue("filters.priceRange", [formik.values.filters.priceRange[0], val]);
                                    }}
                                    className="absolute w-full h-1 bg-transparent rounded-full appearance-none pointer-events-none z-30 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:rounded-full"
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <div
                                    className="absolute h-1 bg-red-500 rounded-full z-10"
                                    style={{
                                        left: `${(formik.values.filters.priceRange[0] / 1000) * 100}%`,
                                        right: `${100 - (formik.values.filters.priceRange[1] / 1000) * 100}%`
                                    }}
                                />
                                <div className="absolute w-full h-1 bg-gray-100 rounded-full z-0" />
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        <div className="flex flex-col gap-4">
                            <h3 className="text-[16px] font-bold text-gray-900">Listing Type</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                                {LISTING_TYPES.map((type) => (
                                    <div key={type.id} className="flex items-center justify-between group cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleFilter('listingTypes', type.id); }}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formik.values.filters.listingTypes.includes(type.id) ? "bg-red-500 border-red-500" : "border-gray-300 group-hover:border-red-500"}`}>
                                                {formik.values.filters.listingTypes.includes(type.id) && <Check size={14} className="text-white" />}
                                            </div>
                                            <span className="text-[14px] font-semibold text-gray-900">{type.label}</span>
                                        </div>
                                        <span className="text-[14px] text-gray-400">({type.count})</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        <div className="flex flex-col gap-4">
                            <h3 className="text-[16px] font-bold text-gray-900">Ratings</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                                {RATINGS.map((rate) => (
                                    <div key={rate.id} className="flex items-center justify-between group cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleFilter('ratings', rate.id); }}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formik.values.filters.ratings.includes(rate.id) ? "bg-red-500 border-red-500" : "border-gray-300 group-hover:border-red-500"}`}>
                                                {formik.values.filters.ratings.includes(rate.id) && <Check size={14} className="text-white" />}
                                            </div>
                                            <span className="text-[14px] font-semibold text-gray-900">{rate.label}</span>
                                        </div>
                                        <span className="text-[14px] text-gray-400">({rate.count})</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        <div className="flex flex-col gap-4">
                            <h3 className="text-[16px] font-bold text-gray-900">Event Type</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                                {EVENT_TYPES.map((type) => (
                                    <div key={type.id} className="flex items-center justify-between group cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleFilter('eventTypes', type.id); }}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formik.values.filters.eventTypes.includes(type.id) ? "bg-red-500 border-red-500" : "border-gray-300 group-hover:border-red-500"}`}>
                                                {formik.values.filters.eventTypes.includes(type.id) && <Check size={14} className="text-white" />}
                                            </div>
                                            <span className="text-[14px] font-semibold text-gray-900">{type.label}</span>
                                        </div>
                                        <span className="text-[14px] text-gray-400">({type.count})</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100" />

                        <div className="flex flex-col gap-4">
                            <h3 className="text-[16px] font-bold text-gray-900">Crew Size</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                                {CREW_SIZES.map((size) => (
                                    <div key={size.id} className="flex items-center justify-between group cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleFilter('crewSizes', size.id); }}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formik.values.filters.crewSizes.includes(size.id) ? "bg-red-500 border-red-500" : "border-gray-300 group-hover:border-red-500"}`}>
                                                {formik.values.filters.crewSizes.includes(size.id) && <Check size={14} className="text-white" />}
                                            </div>
                                            <span className="text-[14px] font-semibold text-gray-900">{size.label}</span>
                                        </div>
                                        <span className="text-[14px] text-gray-400">({size.count})</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 mt-2">
                            <button
                                className="text-[14px] font-semibold text-[#686262] hover:text-gray-900 underline underline-offset-4"
                                onClick={(e) => { e.stopPropagation(); clearAllFilters(); }}
                            >
                                Clear all filters
                            </button>
                            <button
                                type="button"
                                className="bg-[#FF3A44] text-white px-8 py-3 rounded font-semibold"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    formik.handleSubmit();
                                    // Make sure Formik touches all fields to show errors immediately if missing
                                    formik.setTouched({
                                        searchQuery: true,
                                        locationQuery: true,
                                        startDate: true,
                                        endDate: true
                                    });
                                    onClose();
                                }}
                            >
                                Show Listings
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
