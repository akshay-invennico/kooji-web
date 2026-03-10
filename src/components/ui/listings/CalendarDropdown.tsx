/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
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
}

export const CalendarDropdown: React.FC<CalendarDropdownProps> = ({ formik, onClose }) => {
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

    return (
        <div
            className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[70] animate-in fade-in zoom-in duration-200 origin-top"
            style={{ padding: "24px 28px", display: "flex", alignItems: "flex-start", gap: 0, minWidth: 510 }}
            onMouseLeave={() => setHoverDate(null)}
        >
            <button
                type="button"
                onClick={(e) => { e.stopPropagation(); leftMonth === 0 ? (setLeftMonth(11), setLeftYear(y => y - 1)) : setLeftMonth(m => m - 1); }}
                style={{ position: "absolute", left: 10, top: 22, background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: 20, padding: "2px 8px", borderRadius: 6 }}
            >‹</button>

            <CalMonth
                year={leftYear} month={leftMonth}
                startDate={formik.values.startDate} endDate={formik.values.endDate} hoverDate={hoverDate}
                onDayClick={handleDayClick} onDayHover={setHoverDate}
            />

            <div style={{ width: 1, background: "#f0f0f0", alignSelf: "stretch", margin: "0 20px" }} />

            <CalMonth
                year={rightYear} month={rightMonth}
                startDate={formik.values.startDate} endDate={formik.values.endDate} hoverDate={hoverDate}
                onDayClick={handleDayClick} onDayHover={setHoverDate}
            />

            <button
                type="button"
                onClick={(e) => { e.stopPropagation(); leftMonth === 11 ? (setLeftMonth(0), setLeftYear(y => y + 1)) : setLeftMonth(m => m + 1); }}
                style={{ position: "absolute", right: 10, top: 22, background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: 20, padding: "2px 8px", borderRadius: 6 }}
            >›</button>
        </div>
    );
};
