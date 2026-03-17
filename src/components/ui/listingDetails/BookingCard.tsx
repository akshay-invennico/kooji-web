/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import { Users, ChevronUp, ChevronDown } from "lucide-react";
import { fmtSingleDate } from "@/utils/calendarUtils";
import { CalendarDropdown } from "../listings/CalendarDropdown";

interface BookingCardProps {
    price: string;
    formik: any;
    isEventSpace?: boolean;
}

const BookingCard: React.FC<BookingCardProps> = ({ price, formik, isEventSpace }) => {
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

    return (
        <div className="bg-[#F5F3F4] rounded-lg p-4 md:p-6 border border-[#F0EFEF] max-w-md relative" ref={dateRef}>
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-1">
                    <span className="text-[#000000] font-semibold text-[16px]">Price:</span>
                    <span className="text-[#C5161D] font-bold text-[24px]">${price}</span>
                    <span className="text-[#686262] font-semibold text-[16px] ml-1">/day</span>
                </div>
                <span className="text-[#686262] text-[14px] font-semibold">*1 day minimum</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div onClick={() => setIsDateOpen(!isDateOpen)}>
                    <label className="block text-[#000000] font-medium text-[14px] mb-2 ml-1 cursor-pointer">From</label>
                    <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-50  cursor-pointer">
                        <img src="/icons/hero/calenderIcon.svg" alt="calendar" className="w-5 h-5 shrink-0" />
                        <span className={`font-normal truncate ${formik.values.startDate ? "text-[#000000] font-medium  text-[14px]" : "text-[#B9BFC3] font-medium text-[14px]"}`}>
                            {fmtSingleDate(formik.values.startDate) || "Select Date"}
                        </span>
                    </div>
                </div>
                <div onClick={() => setIsDateOpen(!isDateOpen)}>
                    <label className="block text-[#000000] font-medium text-[14px] mb-2 ml-1 cursor-pointer">To</label>
                    <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-50  cursor-pointer ">
                        <img src="/icons/hero/calenderIcon.svg" alt="calendar" className="w-5 h-5 shrink-0" />
                        <span className={`font-normal truncate ${formik.values.endDate ? "text-[#000000] font-medium text-[14px]" : "text-[#B9BFC3] font-medium text-[14px]"}`}>
                            {fmtSingleDate(formik.values.endDate) || "Select Date"}
                        </span>
                    </div>
                </div>
            </div>

            {isEventSpace && (
                <div className="mb-6">
                    <label className=" text-[#000000] text-[14px] font-medium mb-2 ml-1">No. of Attendees</label>
                    <div className="relative flex items-center bg-white p-4 rounded-lg border border-gray-50">
                        <Users size={20} className="text-gray-400 shrink-0 mr-3" />
                        <input
                            type="number"
                            name="attendees"
                            placeholder="30"
                            className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-gray-900 font-normal p-0 placeholder:text-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            value={formik.values.attendees}
                            onChange={(e) => formik.setFieldValue("attendees", e.target.value)}
                        />
                        <div className="flex flex-col gap-0.5 ml-2 text-gray-400">
                            <ChevronUp size={14} className="cursor-pointer hover:text-gray-600" onClick={() => formik.setFieldValue("attendees", Number(formik.values.attendees || 0) + 1)} />
                            <ChevronDown size={14} className="cursor-pointer hover:text-gray-600" onClick={() => formik.setFieldValue("attendees", Math.max(0, Number(formik.values.attendees || 0) - 1))} />
                        </div>
                    </div>
                    {formik.errors.attendees && formik.touched.attendees && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{formik.errors.attendees}</p>
                    )}
                </div>
            )}

            {isDateOpen && (
                <div className="absolute right-0 mt-2 z-50">
                    <CalendarDropdown formik={formik} onClose={() => setIsDateOpen(false)} align="right" />
                </div>
            )}

            <div className="space-y-1">
                <p className="text-[#686262] text-[12px] font-medium">*Cancel for free within 12 hours of booking</p>
                <p className="text-[#686262] text-[12px] font-medium">*High acceptance rate</p>
            </div>
        </div>
    );
};

export default BookingCard;