/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const SORT_OPTIONS = [
    { id: "relevance", label: "Most Relevance" },
    { id: "nearest", label: "Nearest First" },
    { id: "newest", label: "New Listings" },
    { id: "popular", label: "Popular/Trending" },
    { id: "topRated", label: "Top Rated" },
    { id: "price_asc", label: "Price: Low to High" },
    { id: "price_desc", label: "Price: Hight to Low" },
];

export const SortFilter = ({ formik }: { formik: any }) => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };

        if (isSortOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSortOpen]);

    return (
        <div
            className="flex-1 lg:flex-[0.8] flex flex-col md:border-r border-gray-100 px-4 md:px-6 cursor-pointer hover:bg-gray-50 transition-colors py-2 lg:py-0 rounded-lg lg:rounded-none relative"
            onClick={() => setIsSortOpen(!isSortOpen)}
            ref={sortRef}
        >
            <label className="text-[12px] lg:text-[14px] font-semibold text-gray-900 mb-1">
                Sort by
            </label>
            <div className="flex items-center justify-between">
                <span className="text-[13px] lg:text-[14px] text-gray-900 font-medium">{formik.values.sortMode.label}</span>
                <ChevronDown
                    size={22}
                    className={`text-gray-400 transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`}
                />
            </div>

            {isSortOpen && (
                <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-white border border-gray-100 rounded-xl shadow-xl z-[60] py-2 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top">
                    {SORT_OPTIONS.map((option) => (
                        <div
                            key={option.id}
                            className={`px-4 py-2.5 text-[13px] lg:text-[14px] flex items-center justify-between cursor-pointer hover:bg-gray-50 ${formik.values.sortMode.id === option.id ? "text-black-100 font-semibold " : "text-gray-600"}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                formik.setFieldValue("sortMode", option);
                                setIsSortOpen(false);
                            }}
                        >
                            {option.label}
                            {formik.values.sortMode.id === option.id && <Check size={14} />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
