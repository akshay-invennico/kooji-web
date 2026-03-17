/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Plus, Minus, Check } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import { CalendarDropdown } from "@/components/ui/listings/CalendarDropdown";

interface Step3AvailabilityProps {
  formik: any;
  isDateRangeOpen: boolean;
  setIsDateRangeOpen: (open: boolean) => void;
  isWeeklyOpen: boolean;
  setIsWeeklyOpen: (open: boolean) => void;
  isCalendarOpen: boolean;
  setIsCalendarOpen: (open: boolean) => void;
  formatDate: (date: Date | null) => string;
}

const Step3Availability: React.FC<Step3AvailabilityProps> = ({
  formik,
  isDateRangeOpen,
  setIsDateRangeOpen,
  isWeeklyOpen,
  setIsWeeklyOpen,
  isCalendarOpen,
  setIsCalendarOpen,
  formatDate,
}) => {
  const { values, setFieldValue, errors, touched } = formik;
  const { startDate, endDate, repeatMonthly, selectedDays, repeatWeekly } = values;

  const toggleDay = (day: string) => {
    const newDays = selectedDays.includes(day)
      ? selectedDays.filter((d: string) => d !== day)
      : [...selectedDays, day];
    setFieldValue("selectedDays", newDays);
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[24px] font-semibold text-[#000000] mb-5 font-outfit">Set Availability</h2>

      <div className="flex flex-col">
        {/* Date Range Accordion */}
        <div className="border-b border-gray-100 pb-6 mb-6">
          <div
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => setIsDateRangeOpen(!isDateRangeOpen)}
          >
            <h3 className="text-[17px] font-semibold text-[#000000]">Date Range</h3>
            <Icon component={isDateRangeOpen ? Minus : Plus} size="md" className="text-[#000000]" />
          </div>

          {isDateRangeOpen && (
            <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
                {/* From Date */}
                <div className="flex-1">
                  <label className="block text-[14px] font-medium text-[#000000] mb-3">From</label>
                  <div
                    className={`w-full rounded-md border px-4 py-3.5 bg-white cursor-pointer flex items-center gap-3 transition-colors ${touched.startDate && errors.startDate ? "border-red-500 bg-red-50" : "border-[#F0EFEF]"}`}
                    onClick={() => setIsCalendarOpen(true)}
                  >
                    <img
                      src="/icons/redCalender.svg"
                      alt="calendar"
                      className={`w-5 h-5 shrink-0 ${touched.startDate && errors.startDate ? "" : ""}`}
                    />
                    <span className={`${touched.startDate && errors.startDate ? "text-red-500" : "text-[#000000]"} text-[15px]`}>
                      {formatDate(startDate)}
                    </span>
                  </div>
                  {touched.startDate && errors.startDate && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.startDate}</p>
                  )}
                </div>

                {/* To Date */}
                <div className="flex-1">
                  <label className="block text-[14px] font-medium text-[#000000] mb-3">To</label>
                  <div
                    className={`w-full rounded-md border px-4 py-3.5 bg-white cursor-pointer flex items-center gap-3 transition-colors ${touched.endDate && errors.endDate ? "border-red-500 bg-red-50" : "border-[#F0EFEF]"}`}
                    onClick={() => setIsCalendarOpen(true)}
                  >
                    <img
                      src="/icons/redCalender.svg"
                      alt="calendar"
                      className={`w-5 h-5 shrink-0 ${touched.endDate && errors.endDate ? "" : ""}`}
                    />
                    <span className={`${touched.endDate && errors.endDate ? "text-red-500" : "text-[#000000]"} text-[15px]`}>
                      {formatDate(endDate)}
                    </span>
                  </div>
                  {touched.endDate && errors.endDate && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.endDate}</p>
                  )}
                </div>

                {isCalendarOpen && (
                  <CalendarDropdown
                    formik={formik}
                    onClose={() => setIsCalendarOpen(false)}
                    variant="modal"
                  />
                )}
              </div>

              <div
                className="mt-6 flex items-center cursor-pointer group w-max"
                onClick={() => setFieldValue("repeatMonthly", !repeatMonthly)}
              >
                <div className={`relative flex items-center justify-center w-[18px] h-[18px] rounded border mr-3 transition-colors ${repeatMonthly ? 'bg-[#FF3A44] border-[#FF3A44]' : 'bg-white border-[#F0EFEF]'}`}>
                  {repeatMonthly && <Icon component={Check} size="xs" className="text-white" strokeWidth={3} />}
                </div>
                <span className="text-[14px] font-medium text-[#000000]">Repeat this range for Every Month</span>
              </div>
            </div>
          )}
        </div>

        {/* Weekly Availability Accordion */}
        <div className="py-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsWeeklyOpen(!isWeeklyOpen)}
          >
            <h3 className="text-[17px] font-semibold text-[#000000]">Weekly Availability</h3>
            <Icon component={isWeeklyOpen ? Minus : Plus} size="md" className="text-[#000000]" />
          </div>

          {isWeeklyOpen && (
            <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => {
                  const isSelected = selectedDays.includes(day);
                  return (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className={`flex-1 min-w-[70px] sm:min-w-[80px] h-12 flex items-center justify-center rounded-md border text-[14px] font-bold transition-all ${isSelected
                        ? "border-[#FF3A44] bg-[#FF3A44]/10 text-[#FF3A44]"
                        : "border-[#F0EFEF] bg-white text-[#000000]"
                        }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div
                className="mt-6 flex items-center cursor-pointer group w-max"
                onClick={() => setFieldValue("repeatWeekly", !repeatWeekly)}
              >
                <div className={`relative flex items-center justify-center w-[18px] h-[18px] rounded border mr-3 transition-colors ${repeatWeekly ? 'bg-[#FF3A44] border-[#FF3A44]' : 'bg-white border-[#F0EFEF]'}`}>
                  {repeatWeekly && <Icon component={Check} size="xs" className="text-white" strokeWidth={3} />}
                </div>
                <span className="text-[14px] font-medium text-[#000000]">Repeat this for Every Week</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step3Availability;
