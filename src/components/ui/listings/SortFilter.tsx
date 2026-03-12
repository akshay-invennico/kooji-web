/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import Image from "next/image";

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
            className="flex-1 flex flex-col border-r border-[#F0EFEF] px-4 md:px-8 cursor-pointer hover:bg-gray-50 transition-colors py-3 md:py-0 relative h-full justify-center"
            onClick={() => setIsSortOpen(!isSortOpen)}
            ref={sortRef}
        >
            <label className="text-[14px] font-medium text-[#000000] mb-2 truncate">
                Sort by
            </label>
            <div className="flex items-center justify-between gap-4">
                <span className="text-[14px] text-[#000000] font-semibold truncate">{formik.values.sortMode.label}</span>
                <div className={`transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`}>
                    <Image src="/icons/filters/filterIcon4.svg" alt="Sort" width={16} height={16} />
                </div>
            </div>

            {isSortOpen && (
                <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-white border border-gray-100 rounded-xl shadow-xl z-60 py-2 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top">
                    {SORT_OPTIONS.map((option) => (
                        <div
                            key={option.id}
                            className={`px-4 py-2.5 text-[14px] font-medium lg:text-[14px] flex items-center justify-between cursor-pointer hover:bg-gray-50 ${formik.values.sortMode.id === option.id ? "text-black font-semibold " : "text-gray-600"}`}
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
