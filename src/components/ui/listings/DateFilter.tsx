/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { fmtRange } from "@/utils/calendarUtils";
import { CalendarDropdown } from "./CalendarDropdown";

export const DateFilter = ({ formik }: { formik: any }) => {
    const [isDateOpen, setIsDateOpen] = useState(false);
    const dateRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
                setIsDateOpen(false);
            }
        };

        if (isDateOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDateOpen]);

    const clearDates = (e: React.MouseEvent) => {
        e.stopPropagation();
        formik.setFieldValue("startDate", null);
        formik.setFieldValue("endDate", null);
    };

    return (
        <div
            className="flex-1 flex flex-col border-r border-[#F0EFEF] px-4 md:px-8 py-3 md:py-0 relative h-full justify-center"
            ref={dateRef}
        >
            <label className="text-[14px] font-medium text-[#000000] mb-2 truncate">
                When?
            </label>
            <div className="flex flex-col relative w-full">
                <div
                    className="flex items-center gap-2 cursor-pointer w-full"
                    onClick={() => setIsDateOpen((o) => !o)}
                >
                    <Image src="/icons/filters/filterIcon3.svg" alt="Calendar" width={20} height={20} className="shrink-0" />
                    <span className={`text-[14px] font-medium flex-1 truncate ${fmtRange(formik.values.startDate, formik.values.endDate) ? "text-gray-900" : "text-[#9CA3AF]"}`}>
                        {fmtRange(formik.values.startDate, formik.values.endDate) || "Select a date"}
                    </span>
                    {(formik.values.startDate || formik.values.endDate) && (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="cursor-pointer shrink-0 ml-auto"
                            onClick={clearDates}
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    )}
                </div>
            </div>

            {isDateOpen && (
                <CalendarDropdown formik={formik} onClose={() => setIsDateOpen(false)} />
            )}
        </div>
    );
};
