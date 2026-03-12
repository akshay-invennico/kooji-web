/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Plus, Minus, Calendar, Check } from "lucide-react";
import Icon from "@/components/ui/icon/Icon";
import { CalendarDropdown } from "@/components/ui/listings/CalendarDropdown";

interface Step3AvailabilityProps {
  isDateRangeOpen: boolean;
  setIsDateRangeOpen: (open: boolean) => void;
  isCalendarOpen: boolean;
  setIsCalendarOpen: (open: boolean) => void;
  startDate: Date | null;
  endDate: Date | null;
  formatDate: (date: Date | null) => string;
  repeatMonthly: boolean;
  setRepeatMonthly: (repeat: boolean) => void;
  isWeeklyOpen: boolean;
  setIsWeeklyOpen: (open: boolean) => void;
  selectedDays: string[];
  toggleDay: (day: string) => void;
  repeatWeekly: boolean;
  setRepeatWeekly: (repeat: boolean) => void;
  fakeFormik: any;
}

const Step3Availability: React.FC<Step3AvailabilityProps> = ({
  isDateRangeOpen,
  setIsDateRangeOpen,
  isCalendarOpen,
  setIsCalendarOpen,
  startDate,
  endDate,
  formatDate,
  repeatMonthly,
  setRepeatMonthly,
  isWeeklyOpen,
  setIsWeeklyOpen,
  selectedDays,
  toggleDay,
  repeatWeekly,
  setRepeatWeekly,
  fakeFormik,
}) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[28px] font-bold text-gray-900 mb-8 font-sans">Set Availability</h2>

      <div className="flex flex-col">
        {/* Date Range Accordion */}
        <div className="border-b border-gray-100 pb-6 mb-6">
          <div
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => setIsDateRangeOpen(!isDateRangeOpen)}
          >
            <h3 className="text-[17px] font-bold text-gray-900">Date Range</h3>
            <Icon component={isDateRangeOpen ? Minus : Plus} size="sm" className="text-gray-900" />
          </div>

          {isDateRangeOpen && (
            <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
                {/* From Date */}
                <div className="flex-1">
                  <label className="block text-[14px] font-bold text-gray-900 mb-3">From</label>
                  <div
                    className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white cursor-pointer hover:border-gray-300 transition-all flex items-center gap-3"
                    onClick={() => setIsCalendarOpen(true)}
                  >
                    <Icon component={Calendar} size="sm" className="text-red-500" />
                    <span className="text-gray-900 text-[15px]">
                      {formatDate(startDate)}
                    </span>
                  </div>
                </div>

                {/* To Date */}
                <div className="flex-1">
                  <label className="block text-[14px] font-bold text-gray-900 mb-3">To</label>
                  <div
                    className="w-full rounded-xl border border-gray-200 px-4 py-3.5 bg-white cursor-pointer hover:border-gray-300 transition-all flex items-center gap-3"
                    onClick={() => setIsCalendarOpen(true)}
                  >
                    <Icon component={Calendar} size="sm" className="text-red-500" />
                    <span className="text-gray-900 text-[15px]">
                      {formatDate(endDate)}
                    </span>
                  </div>
                </div>

                {/* Calendar Dropdown Wrapper */}
                {isCalendarOpen && (
                  <div className="absolute top-[85px] left-0 z-50 shadow-2xl rounded-2xl overflow-hidden border border-gray-100 bg-white">
                    <CalendarDropdown formik={fakeFormik} onClose={() => setIsCalendarOpen(false)} />
                  </div>
                )}
              </div>

              <div
                className="mt-6 flex items-center cursor-pointer group w-max"
                onClick={() => setRepeatMonthly(!repeatMonthly)}
              >
                <div className={`relative flex items-center justify-center w-[18px] h-[18px] rounded border mr-3 transition-colors ${repeatMonthly ? 'bg-red-500 border-red-500' : 'bg-white border-gray-300 group-hover:border-red-500'}`}>
                  {repeatMonthly && <Icon component={Check} size="xs" className="text-white" strokeWidth={3} />}
                </div>
                <span className="text-[15px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors">Repeat this range for Every Month</span>
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
            <h3 className="text-[17px] font-bold text-gray-900">Weekly Availability</h3>
            <Icon component={isWeeklyOpen ? Minus : Plus} size="sm" className="text-gray-900" />
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
                      className={`flex-1 min-w-[70px] sm:min-w-[80px] h-12 flex items-center justify-center rounded-lg border text-[14px] font-bold transition-all ${isSelected
                          ? "border-red-500 bg-red-50/10 text-red-500"
                          : "border-gray-100 bg-white text-gray-900 hover:border-gray-200"
                        }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div
                className="mt-6 flex items-center cursor-pointer group w-max"
                onClick={() => setRepeatWeekly(!repeatWeekly)}
              >
                <div className={`relative flex items-center justify-center w-[18px] h-[18px] rounded border mr-3 transition-colors ${repeatWeekly ? 'bg-red-500 border-red-500' : 'bg-white border-gray-300 group-hover:border-red-500'}`}>
                  {repeatWeekly && <Icon component={Check} size="xs" className="text-white" strokeWidth={3} />}
                </div>
                <span className="text-[15px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors">Repeat this for Every Week</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step3Availability;
