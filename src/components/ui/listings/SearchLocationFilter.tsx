import React, { useState, useRef, useEffect } from "react";
import { Search, MapPin, X } from "lucide-react";
import Image from "next/image";

const SEARCH_OPTIONS = [
    { id: "instruments", label: "Instruments & Equipment", icon: "/icons/vendor/vendorOnboard1.svg" },
    { id: "musician", label: "Musician & Singers", icon: "/icons/vendor/vendorOnboard2.svg" },
    { id: "technicians", label: "Technicians", icon: "/icons/vendor/vendorOnboard3.svg" },
    { id: "event_space", label: "Event Space", icon: "/icons/vendor/vendorOnboard4.svg" },
];

export const SearchLocationFilter = ({ formik }: { formik: any }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };

        if (isSearchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSearchOpen]);

    return (
        <>
            <div className="w-120 flex-1 flex flex-col border-b md:border-b-0 md:border-r border-gray-100 px-4 py-2 md:py-0 relative" ref={searchRef}>
                <label className="text-[12px] lg:text-[14px] font-semibold text-gray-900 mb-1">
                    What are you looking for?
                </label>
                <div className="flex items-center gap-2">
                    <Search size={18} className="text-gray-500 shrink-0" />
                    <div className="flex flex-col w-full relative">
                        <div className="flex items-center w-full gap-2">
                            <input
                                type="text"
                                name="searchQuery"
                                placeholder="Instruments, Singer, Lightings.."
                                className="bg-transparent text-[14px] text-gray-900 font-semibold outline-none w-full placeholder:text-gray-400"
                                value={formik.values.searchQuery}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    formik.setFieldTouched("searchQuery", true, false);
                                }}
                                onBlur={formik.handleBlur}
                                onFocus={() => setIsSearchOpen(true)}
                            />
                            {formik.values.searchQuery && (
                                <X size={20} className="text-gray-900 cursor-pointer" onClick={() => formik.setFieldValue("searchQuery", "")} />
                            )}
                        </div>
                        {formik.touched.searchQuery && formik.errors.searchQuery && (
                            <span className="text-red-500 text-xs font-medium absolute -bottom-5 left-0">{formik.errors.searchQuery as string}</span>
                        )}
                    </div>
                </div>

                {isSearchOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full min-w-[280px] bg-white border border-gray-100 rounded-xl shadow-xl z-[60] py-2 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top">
                        {SEARCH_OPTIONS.map((option) => (
                            <div
                                key={option.id}
                                className="px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                                onClick={() => {
                                    formik.setFieldValue("searchQuery", option.label);
                                    setIsSearchOpen(false);
                                }}
                            >
                                <div className="w-8 h-8 flex items-center justify-center bg-red-50 rounded-sm shrink-0">
                                    <Image
                                        src={option.icon}
                                        alt={option.label}
                                        width={20}
                                        height={20}
                                        className="opacity-70"
                                    />
                                </div>
                                <span className="text-[14px] text-gray-900 font-semibold">
                                    {option.label}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex-1 flex flex-col px-4 md:px-6 py-2 md:py-0 md:border-r border-gray-100">
                <label className="text-[12px] lg:text-[14px] font-semibold text-gray-900 mb-1">
                    Where?
                </label>
                <div className="flex flex-col relative w-full">
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-gray-500 shrink-0" />
                        <input
                            type="text"
                            name="locationQuery"
                            placeholder="Los Angeles, CA.."
                            className="bg-transparent text-[14px] text-gray-900 font-semibold outline-none w-full placeholder:text-gray-400"
                            value={formik.values.locationQuery}
                            onChange={(e) => {
                                formik.handleChange(e);
                                formik.setFieldTouched("locationQuery", true, false);
                            }}
                            onBlur={formik.handleBlur}
                        />
                        {formik.values.locationQuery && (
                            <X size={24} className="text-gray-900 cursor-pointer" onClick={() => formik.setFieldValue("locationQuery", "")} />
                        )}
                    </div>
                    {formik.touched.locationQuery && formik.errors.locationQuery && (
                        <span className="text-red-500 text-xs font-medium absolute -bottom-5 left-0">{formik.errors.locationQuery as string}</span>
                    )}
                </div>
            </div>
        </>
    );
};
