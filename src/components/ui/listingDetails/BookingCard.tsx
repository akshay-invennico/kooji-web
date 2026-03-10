import React, { useState, useRef, useEffect } from "react";
import { Calendar, Users, ChevronUp, ChevronDown } from "lucide-react";
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
        <div className="bg-[#F5F3F4] rounded-lg p-6 border border-gray-100 max-w-md relative" ref={dateRef}>
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-1">
                    <span className="text-gray-900 font-semibold text-lg">Price:</span>
                    <span className="text-[#C5161D] font-bold text-2xl">${price}</span>
                    <span className="text-gray-500 font-medium ml-1">/day</span>
                </div>
                <span className="text-gray-500 text-sm font-medium">*1 day minimum</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div onClick={() => setIsDateOpen(!isDateOpen)}>
                    <label className="block text-gray-900 font-semibold mb-2 ml-1 cursor-pointer">From</label>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-50  cursor-pointer">
                        <Calendar size={20} className="text-gray-900 shrink-0" />
                        <span className={`font-normal truncate ${formik.values.startDate ? "text-gray-900" : "text-gray-400"}`}>
                            {fmtSingleDate(formik.values.startDate) || "Select Date"}
                        </span>
                    </div>
                </div>
                <div onClick={() => setIsDateOpen(!isDateOpen)}>
                    <label className="block text-gray-900 font-semibold mb-2 ml-1 cursor-pointer">To</label>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-50  cursor-pointer ">
                        <Calendar size={20} className="text-gray-900 shrink-0" />
                        <span className={`font-normal truncate ${formik.values.endDate ? "text-gray-900" : "text-gray-400"}`}>
                            {fmtSingleDate(formik.values.endDate) || "Select Date"}
                        </span>
                    </div>
                </div>
            </div>

            {isEventSpace && (
                <div className="mb-6">
                    <label className=" text-gray-900 font-semibold mb-2 ml-1">No. of Attendees</label>
                    <div className="relative flex items-center bg-white p-4 rounded-lg border border-gray-50">
                        <Users size={20} className="text-gray-400 shrink-0 mr-3" />
                        <input
                            type="number"
                            name="attendees"
                            placeholder="30"
                            className="w-full bg-transparent border-none  text-gray-900 font-normal p-0 placeholder:text-gray-300"
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
                <div className="absolute top-full left-0 right-0  mt-2">
                    <CalendarDropdown formik={formik} onClose={() => setIsDateOpen(false)} />
                </div>
            )}

            <div className="space-y-1">
                <p className="text-gray-500 text-xs font-medium">*Cancel for free within 12 hours of booking</p>
                <p className="text-gray-500 text-xs font-medium">*High acceptance rate</p>
            </div>
        </div>
    );
};

export default BookingCard;