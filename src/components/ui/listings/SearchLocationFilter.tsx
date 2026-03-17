/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
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

            <div className="flex-1 flex flex-col border-r border-[#F0EFEF] px-2 md:px-8 py-1 md:py-0 relative h-full justify-center w-[250px]" ref={searchRef}>
                <label className="text-[14px] font-medium text-[#000000] mb-2 truncate">
                    What are you looking for?
                </label>
                <div className="flex items-center gap-2">
                    <Image src="/icons/filters/filterIcon1.svg" alt="Search" width={20} height={20} className="shrink-0" />
                    <div className="flex flex-col w-full relative">
                        <div className="flex items-center w-full gap-2">
                            <input
                                type="text"
                                name="searchQuery"
                                placeholder="Instruments, Singer, Lightings.."
                                className="bg-transparent text-[14px] text-[#000000] font-medium outline-none w-full placeholder:text-[#B9BFC3]"
                                value={formik.values.searchQuery}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    formik.setFieldTouched("searchQuery", true, false);
                                }}
                                onBlur={formik.handleBlur}
                                onFocus={() => setIsSearchOpen(true)}
                            />
                            {formik.values.searchQuery && (
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000000"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="cursor-pointer shrink-0"
                                    onClick={() => formik.setFieldValue("searchQuery", "")}
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                {isSearchOpen && (
                    <div className="absolute top-full left-0 mt-1 w-full min-w-[280px] bg-white border border-gray-100 rounded-xl shadow-xl z-60 py-2 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top">
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
                                <span className="text-[14px] text-[#000000] font-semibold">
                                    {option.label}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>


            <div className="flex-1 flex flex-col px-4 md:px-8 py-3 md:py-0 border-r border-[#F0EFEF] h-full justify-center w-[250px]">
                <label className="text-[14px] font-medium text-[#000000] mb-2 truncate">
                    Where?
                </label>
                <div className="flex flex-col relative w-full">
                    <div className="flex items-center gap-2">
                        <Image src="/icons/filters/filterIcon2.svg" alt="Location" width={20} height={20} className="shrink-0" />
                        <input
                            type="text"
                            name="locationQuery"
                            placeholder="Los Angeles, CA.."
                            className="bg-transparent text-[14px] text-[#000000] font-medium outline-none w-full placeholder:text-[#B9BFC3]"
                            value={formik.values.locationQuery}
                            onChange={(e) => {
                                formik.handleChange(e);
                                formik.setFieldTouched("locationQuery", true, false);
                            }}
                            onBlur={formik.handleBlur}
                        />
                        {formik.values.locationQuery && (
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="cursor-pointer shrink-0"
                                onClick={() => formik.setFieldValue("locationQuery", "")}
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
