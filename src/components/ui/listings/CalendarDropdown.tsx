/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { X } from "lucide-react";
import { getDaysInMonth, getFirstDay, CAL_MONTHS_FULL, WEEK_DAYS } from "@/utils/calendarUtils";

interface CalMonthProps {
    year: number;
    month: number;
    startDate: Date | null;
    endDate: Date | null;
    hoverDate: Date | null;
    onDayClick: (d: Date) => void;
    onDayHover: (d: Date) => void;
}

export const CalMonth: React.FC<CalMonthProps> = ({
    year, month, startDate, endDate, hoverDate, onDayClick, onDayHover,
}) => {
    const totalDays = getDaysInMonth(year, month);
    const firstDay = getFirstDay(year, month);
    const cells: (number | null)[] = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: totalDays }, (_, i) => i + 1),
    ];

    const isStart = (d: number) => !!(startDate && startDate.getFullYear() === year && startDate.getMonth() === month && startDate.getDate() === d);
    const isEnd = (d: number) => !!(endDate && endDate.getFullYear() === year && endDate.getMonth() === month && endDate.getDate() === d);

    const inRange = (d: number) => {
        const date = new Date(year, month, d);
        const end = endDate || hoverDate;
        if (!startDate || !end) return false;
        const [s, e] = startDate <= end ? [startDate, end] : [end, startDate];
        return date > s && date < e;
    };

    return (
        <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ textAlign: "center", fontWeight: 700, fontSize: 14, marginBottom: 12, color: "#111" }}>
                {CAL_MONTHS_FULL[month]}, {year}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "2px 0" }}>
                {WEEK_DAYS.map((d, i) => (
                    <div key={i} style={{ textAlign: "center", fontSize: 11, fontWeight: 600, color: "#aaa", paddingBottom: 8 }}>{d}</div>
                ))}
                {cells.map((d, i) => {
                    if (!d) return <div key={`e${i}`} />;
                    const start = isStart(d), end = isEnd(d), range = inRange(d);
                    return (
                        <div
                            key={d}
                            onClick={() => onDayClick(new Date(year, month, d))}
                            onMouseEnter={() => onDayHover(new Date(year, month, d))}
                            style={{
                                textAlign: "center", padding: "6px 2px", cursor: "pointer",
                                borderRadius: (start || end) ? "50%" : range ? "0" : "50%",
                                background: (start || end) ? "#e53935" : range ? "#fce4e4" : "transparent",
                                color: (start || end) ? "#fff" : "#222",
                                fontWeight: (start || end) ? 700 : 400,
                                fontSize: 13, userSelect: "none", transition: "background 0.1s",
                            }}
                        >
                            {d}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

interface CalendarDropdownProps {
    formik: any;
    onClose: () => void;
    variant?: 'dropdown' | 'modal';
}

export const CalendarDropdown: React.FC<CalendarDropdownProps> = ({ 
    formik, 
    onClose,
    variant = 'dropdown'
}) => {
    const [hoverDate, setHoverDate] = useState<Date | null>(null);
    const [selecting, setSelecting] = useState(false);

    const today = new Date();
    const [leftYear, setLeftYear] = useState(today.getFullYear());
    const [leftMonth, setLeftMonth] = useState(today.getMonth());

    const rightMonth = (leftMonth + 1) % 12;
    const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;

    const handleDayClick = (date: Date) => {
        if (!selecting || !formik.values.startDate) {
            formik.setFieldValue("startDate", date);
            formik.setFieldValue("endDate", null);
            setSelecting(true);
        } else {
            const [s, e] = date >= formik.values.startDate ? [formik.values.startDate, date] : [date, formik.values.startDate];
            formik.setFieldValue("startDate", s);
            formik.setFieldValue("endDate", e);
            setSelecting(false);
            setTimeout(() => onClose(), 300);

            formik.setFieldError("startDate", undefined);
            formik.setFieldError("endDate", undefined);
        }
    };

    const isModal = variant === 'modal';

    return (
        <>
            {/* Overlay / Backdrop */}
            <div
                className={`fixed inset-0 z-100 transition-opacity duration-200 ${isModal ? 'bg-black/40 backdrop-blur-sm md:block' : 'bg-black/50 md:hidden'}`}
                onClick={onClose}
            />

            <div
                className={`${isModal 
                    ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:z-101' 
                    : 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute md:top-full md:left-0 md:translate-x-0 md:translate-y-0 mt-0 md:mt-2'
                } bg-white border border-gray-100 rounded-2xl shadow-2xl z-101 md:z-70 animate-in fade-in zoom-in duration-200 origin-center md:origin-top p-6 flex flex-col md:flex-row items-center md:items-start gap-0 min-w-[320px] md:min-w-[510px] w-[90vw] md:w-auto overflow-hidden`}
                onMouseLeave={() => setHoverDate(null)}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Mobile Close Button */}
                <button
                    type="button"
                    className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 md:hidden"
                    onClick={onClose}
                >
                    <X size={20} />
                </button>

                <button
                    type="button"
                    className="absolute left-2 md:left-[10px] top-[22px] bg-none border-none cursor-pointer text-[#888] text-[24px] px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={(e) => { e.stopPropagation(); leftMonth === 0 ? (setLeftMonth(11), setLeftYear(y => y - 1)) : setLeftMonth(m => m - 1); }}
                >‹</button>

                <CalMonth
                    year={leftYear} month={leftMonth}
                    startDate={formik.values.startDate} endDate={formik.values.endDate} hoverDate={hoverDate}
                    onDayClick={handleDayClick} onDayHover={setHoverDate}
                />

                <div className="hidden md:block w-px bg-[#f0f0f0] self-stretch mx-5" />

                <div className="hidden md:block">
                    <CalMonth
                        year={rightYear} month={rightMonth}
                        startDate={formik.values.startDate} endDate={formik.values.endDate} hoverDate={hoverDate}
                        onDayClick={handleDayClick} onDayHover={setHoverDate}
                    />
                </div>

                <button
                    type="button"
                    className="absolute right-2 md:right-[10px] top-[22px] bg-none border-none cursor-pointer text-[#888] text-[24px] px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={(e) => { e.stopPropagation(); leftMonth === 11 ? (setLeftMonth(0), setLeftYear(y => y + 1)) : setLeftMonth(m => m + 1); }}
                >›</button>
            </div>
        </>
    );
};
