/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { X } from "lucide-react";
import { getDaysInMonth, getFirstDay, CAL_MONTHS, WEEK_DAYS } from "@/utils/calendarUtils";

interface CalMonthProps {
    year: number;
    month: number;
    startDate: Date | null;
    endDate: Date | null;
    hoverDate: Date | null;
    selecting: boolean;
    onDayClick: (d: Date) => void;
    onDayHover: (d: Date) => void;
}

export const CalMonth: React.FC<CalMonthProps> = ({
    year, month, startDate, endDate, hoverDate, selecting, onDayClick, onDayHover,
}) => {
    const totalDays = getDaysInMonth(year, month);
    const firstDay = getFirstDay(year, month);
    const cells: (number | null)[] = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: totalDays }, (_, i) => i + 1),
    ];

    const endSelection = selecting ? (hoverDate ?? endDate) : endDate;

    const isStart = (d: number) =>
        !!(startDate &&
            startDate.getFullYear() === year &&
            startDate.getMonth() === month &&
            startDate.getDate() === d);

    const isEnd = (d: number) =>
        !!(endSelection &&
            endSelection.getFullYear() === year &&
            endSelection.getMonth() === month &&
            endSelection.getDate() === d);

    const inRange = (d: number) => {
        const date = new Date(year, month, d);
        if (!startDate || !endSelection) return false;
        const [s, e] = startDate <= endSelection ? [startDate, endSelection] : [endSelection, startDate];
        return date > s && date < e;
    };

    return (
        <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ textAlign: "center", fontWeight: 600, fontSize: 16, marginBottom: 16, color: "#000000" }}>
                {CAL_MONTHS[month]}, {year}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "4px 0" }}>
                {WEEK_DAYS.map((d, i) => (
                    <div key={i} style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "#686262", paddingBottom: 12 }}>{d}</div>
                ))}
                {cells.map((d, i) => {
                    if (!d) return <div key={`e${i}`} />;

                    const start = isStart(d);
                    const end = isEnd(d);
                    const range = inRange(d);
                    const isSingleSelection = start && end;

                    let bgStyle: React.CSSProperties = {};
                    let borderRadius = "0";
                    let leftPink = false;
                    let rightPink = false;

                    if (range) {
                        leftPink = true;
                        rightPink = true;
                    } else if (start && !isSingleSelection && startDate && endSelection) {
                        if (endSelection > startDate) rightPink = true;
                        if (endSelection < startDate) leftPink = true;
                    } else if (end && !isSingleSelection && startDate && endSelection) {
                        if (startDate > endSelection) rightPink = true;
                        if (startDate < endSelection) leftPink = true;
                    }

                    if (leftPink && rightPink) {
                        bgStyle = { backgroundColor: "#FFF0F0" };
                    } else if (leftPink) {
                        bgStyle = { background: "linear-gradient(to right, #FFF0F0 50%, transparent 50%)" };
                    } else if (rightPink) {
                        bgStyle = { background: "linear-gradient(to right, transparent 50%, #FFF0F0 50%)" };
                    }

                    const isFirstCol = i % 7 === 0;
                    const isLastCol = i % 7 === 6;

                    if (leftPink && rightPink) {
                        if (isFirstCol) borderRadius = "18px 0 0 18px";
                        else if (isLastCol) borderRadius = "0 18px 18px 0";
                        else borderRadius = "0";
                    } else if (leftPink) {
                        borderRadius = isFirstCol ? "18px 0 0 18px" : "0";
                    } else if (rightPink) {
                        borderRadius = isLastCol ? "0 18px 18px 0" : "0";
                    }

                    return (
                        <div
                            key={d}
                            onClick={() => onDayClick(new Date(year, month, d))}
                            onMouseEnter={() => onDayHover(new Date(year, month, d))}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 36,
                                cursor: "pointer",
                                borderRadius: borderRadius,
                                ...bgStyle,
                            }}
                        >
                            <div style={{
                                width: 32,
                                height: 32,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                background: (start || end) ? "#FF3A44" : "transparent",
                                color: (start || end) ? "#fff" : "#000",
                                fontWeight: (start || end) ? 600 : 500,
                                fontSize: 14,
                                userSelect: "none",
                                transition: "all 0.2s",

                            }}>
                                {d}
                            </div>
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
    variant?: "dropdown" | "modal";
    align?: "left" | "right" | "center";
}

export const CalendarDropdown: React.FC<CalendarDropdownProps> = ({
    formik,
    onClose,
    variant = "dropdown",
    align = "left"
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
            // First click: set only startDate, clear endDate
            formik.setFieldValue("startDate", date);
            formik.setFieldValue("endDate", null);
            setSelecting(true);
        } else {
            // Second click: set endDate, sort so startDate is always earlier
            const start = formik.values.startDate as Date;
            const [s, e] = date >= start ? [start, date] : [date, start];
            formik.setFieldValue("startDate", s);
            formik.setFieldValue("endDate", e);
            setSelecting(false);
            formik.setFieldError("startDate", undefined);
            formik.setFieldError("endDate", undefined);
            setTimeout(() => onClose(), 300);
        }
    };

    const isModal = variant === "modal";

    return (
        <>
            {/* Overlay / Backdrop */}
            <div
                className={`fixed inset-0 z-10000 transition-opacity duration-200 ${isModal
                    ? "bg-black/40 backdrop-blur-sm md:block"
                    : "bg-black/50 md:hidden"
                    }`}
                onClick={onClose}
            />

            <div
                className={`${isModal
                    ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:z-101"
                    : `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute md:top-full md:translate-y-0 mt-0 md:mt-2 ${align === "left"
                        ? "md:left-0 md:translate-x-0"
                        : align === "right"
                            ? "md:right-0 md:left-auto md:translate-x-0"
                            : "md:left-1/2 md:-translate-x-1/2"
                    }`
                    } bg-white border border-gray-100 rounded-2xl shadow-2xl z-101 md:z-70 animate-in fade-in zoom-in duration-200 origin-center md:origin-top p-6 flex flex-col md:flex-row items-center md:items-start gap-10 min-w-[320px] md:min-w-[550px] w-[90vw] md:w-auto overflow-hidden`}
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

                {/* Left Arrow */}
                <button
                    type="button"
                    className="absolute left-2 md:left-[10px] top-[15px] bg-none border-none cursor-pointer text-[#888] text-[24px] px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (leftMonth === 0) {
                            setLeftMonth(11);
                            setLeftYear((y) => y - 1);
                        } else {
                            setLeftMonth((m) => m - 1);
                        }
                    }}
                >
                    ‹
                </button>

                <CalMonth
                    year={leftYear}
                    month={leftMonth}
                    startDate={formik.values.startDate}
                    endDate={formik.values.endDate}
                    hoverDate={hoverDate}
                    selecting={selecting}
                    onDayClick={handleDayClick}
                    onDayHover={setHoverDate}
                />



                <div className="hidden md:block">
                    <CalMonth
                        year={rightYear}
                        month={rightMonth}
                        startDate={formik.values.startDate}
                        endDate={formik.values.endDate}
                        hoverDate={hoverDate}
                        selecting={selecting}
                        onDayClick={handleDayClick}
                        onDayHover={setHoverDate}
                    />
                </div>

                {/* Right Arrow */}
                <button
                    type="button"
                    className="absolute right-2 md:right-[10px] top-[15px] bg-none border-none cursor-pointer text-[#888] text-[24px] px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (leftMonth === 11) {
                            setLeftMonth(0);
                            setLeftYear((y) => y + 1);
                        } else {
                            setLeftMonth((m) => m + 1);
                        }
                    }}
                >
                    ›
                </button>
            </div>
        </>
    );
};
