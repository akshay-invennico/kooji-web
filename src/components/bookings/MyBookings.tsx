"use client";

import React, { useState } from "react";
import RecentBookingCard from "@/components/dashboard/RecentBookingCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BookingStatus = "Upcoming" | "In Transit" | "Completed" | "Cancelled";

interface Booking {
    id: number;
    image: string;
    title: string;
    renterName: string;
    date: string;
    payment: string;
    location: string;
    status: BookingStatus;
}

const ALL_BOOKINGS: Booking[] = [
    { id: 1, image: "/assets/dashboard.jpg", title: "Music System", renterName: "Jeffree Martin", date: "26 Jul - 29 Jul, 2026", payment: "87.00", location: "12 Harmony Street, Manchester", status: "Upcoming" },
    { id: 2, image: "/assets/dashboard.jpg", title: "Speakers", renterName: "Sarah Johnson", date: "15 Aug - 20 Aug, 2026", payment: "75.00", location: "45 Willow Avenue, Shoreditch", status: "In Transit" },
    { id: 3, image: "/assets/dashboard.jpg", title: "Bar Party Space", renterName: "Michael Lee", date: "05 Sep - 10 Sep, 2026", payment: "65.00", location: "78 Oak Crescent, Edgbaston", status: "Completed" },
    { id: 4, image: "/assets/dashboard.jpg", title: "Corporate Singers", renterName: "Emily Davis", date: "12 Oct - 17 Oct, 2026", payment: "95.00", location: "22 Baltic Road, City Centre", status: "Cancelled" },
    { id: 5, image: "/assets/dashboard.jpg", title: "Google Nest Audio", renterName: "Chris Brown", date: "01 Nov - 05 Nov, 2026", payment: "55.00", location: "10 Primrose Hill, London", status: "Upcoming" },
    { id: 6, image: "/assets/dashboard.jpg", title: "Apple HomePod Mini", renterName: "Lisa Ray", date: "10 Nov - 15 Nov, 2026", payment: "80.00", location: "33 Baker Street, Birmingham", status: "Completed" },
    { id: 7, image: "/assets/dashboard.jpg", title: "Amazon Echo Dot", renterName: "John Smith", date: "20 Nov - 25 Nov, 2026", payment: "45.00", location: "5 Green Lane, Bristol", status: "In Transit" },
    { id: 8, image: "/assets/dashboard.jpg", title: "Sonos One", renterName: "Nina Patel", date: "01 Dec - 07 Dec, 2026", payment: "110.00", location: "14 Kensington Road, London", status: "Cancelled" },
];

const TABS: { label: string; value: BookingStatus | "All Bookings" }[] = [
    { label: "All Bookings", value: "All Bookings" },
    { label: "Upcoming", value: "Upcoming" },
    { label: "In Transit", value: "In Transit" },
    { label: "Completed", value: "Completed" },
    { label: "Cancelled", value: "Cancelled" },
];

const DATE_FILTERS = ["This Year", "This Month", "This Week"];
const ITEMS_PER_PAGE = 4;

const MyBookings = () => {
    const [activeTab, setActiveTab] = useState<BookingStatus | "All Bookings">("All Bookings");
    const [activeDateFilter, setActiveDateFilter] = useState("This Year");
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = activeTab === "All Bookings"
        ? ALL_BOOKINGS
        : ALL_BOOKINGS.filter(b => b.status === activeTab);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleTabChange = (tab: BookingStatus | "All Bookings") => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16">

                {/* Tab Filters */}
                <div className="flex items-center gap-6 mb-8">
                    {TABS.map(tab => (
                        <button
                            key={tab.value}
                            onClick={() => handleTabChange(tab.value)}
                            className={`pb-3 text-[14px] font-medium font-outfit  ${activeTab === tab.value
                                ? "text-[#FF3A44] border-b-2 border-[#FF3A44] -mb-px"
                                : "text-[#686262] hover:text-[#000000]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Title + Date Filter Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h1 className="text-[22px] font-semibold text-[#000000] font-outfit">{activeTab}</h1>
                    <div className="flex items-center gap-2">
                        {DATE_FILTERS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveDateFilter(filter)}
                                className={`px-4 py-1.5 text-[13px] font-medium font-outfit rounded-sm border transition-all ${activeDateFilter === filter
                                    ? "border-[#FF3A44] text-[#FF3A44]"
                                    : "border-[#F0EFEF] text-[#686262] hover:border-gray-300"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Booking Cards */}
                <div className="flex flex-col gap-4">
                    {paginated.length > 0 ? (
                        paginated.map(booking => (
                            <RecentBookingCard
                                key={booking.id}
                                bookingId={booking.id}
                                image={booking.image}
                                title={booking.title}
                                renterName={booking.renterName}
                                date={booking.date}
                                payment={booking.payment}
                                location={booking.location}
                                status={booking.status}
                                onViewBooking={(id) => {
                                    window.location.href = `/my/bookings/details?id=${id}`;
                                }}
                            />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <p className="text-[#686262] text-[16px] font-medium font-outfit">No bookings found for this category.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-10">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-full border text-[#686262] hover:bg-gray-50 disabled:opacity-40 transition-all"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-9 h-9 rounded-full text-[14px] font-medium font-outfit transition-all ${currentPage === i + 1
                                    ? "bg-[#FF3A44] text-white"
                                    : "border border-[#F0EFEF] text-[#FF3A44] hover:bg-gray-50"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-full border text-[#686262] hover:bg-gray-50 disabled:opacity-40 transition-all"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBookings;