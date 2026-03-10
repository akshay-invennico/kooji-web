"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

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
        },
    });

    return (
        <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-[96px] z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 lg:h-20 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-0">

                <div className="flex flex-col md:flex-row flex-1 border-b md:border-b-0 md:border-r border-gray-100 lg:border-gray-200">
                    <SearchLocationFilter formik={formik} />
                    <DateFilter formik={formik} />
                </div>

                <div className="flex flex-wrap items-center justify-between lg:flex-nowrap lg:flex-[1.5] gap-2 md:gap-0 mt-2 lg:mt-0">
                    <SortFilter formik={formik} />
                    <AdvancedFiltersModal
                        formik={formik}
                        isOpen={isFiltersOpen}
                        onClose={() => setIsFiltersOpen(false)}
                        onToggle={() => setIsFiltersOpen(o => !o)}
                    />

                    <div className="flex-1 lg:flex-[0.8] flex items-center justify-center gap-3 px-4 md:px-6 py-2 lg:py-0">
                        <span className="text-[13px] lg:text-[14px] font-semibold text-gray-900 whitespace-nowrap">Show Map</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={showMap}
                                onChange={(e) => onShowMapChange(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-10 h-5 md:w-11 md:h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-[green]"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingFilterBar;

