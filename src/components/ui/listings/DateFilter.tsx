import React, { useState, useRef, useEffect } from "react";
import { Calendar, X } from "lucide-react";
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
            className="flex-1 flex flex-col md:border-r border-gray-100 px-4 md:px-6 py-2 md:py-0 relative"
            ref={dateRef}
        >
            <label className="text-[12px] lg:text-[14px] font-semibold text-gray-900 mb-1">
                When?
            </label>
            <div className="flex flex-col relative w-full">
                <div
                    className="flex items-center gap-2 cursor-pointer w-full"
                    onClick={() => setIsDateOpen((o) => !o)}
                >
                    <Calendar size={18} className="text-gray-500 shrink-0" />
                    <span className={`text-[14px] font-semibold flex-1 truncate ${fmtRange(formik.values.startDate, formik.values.endDate) ? "text-gray-900" : "text-gray-400"}`}>
                        {fmtRange(formik.values.startDate, formik.values.endDate) || "Select a date"}
                    </span>
                    {(formik.values.startDate || formik.values.endDate) && (
                        <X
                            size={18}
                            className="text-gray-900 hover:text-gray-700 shrink-0 transition-colors"
                            onClick={clearDates}
                        />
                    )}
                </div>
                {((formik.touched.startDate && formik.errors.startDate) || (formik.touched.endDate && formik.errors.endDate)) && (
                    <span className="text-red-500 text-xs font-medium absolute -bottom-5 left-0">{(formik.errors.startDate || formik.errors.endDate) as string}</span>
                )}
            </div>

            {isDateOpen && (
                <CalendarDropdown formik={formik} onClose={() => setIsDateOpen(false)} />
            )}
        </div>
    );
};
