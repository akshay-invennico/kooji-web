import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import DashboardStatCard from '../ui/dashboard/DashboardStatCard';
import RecentBookingCard from './RecentBookingCard';
import routes from '@/app/routes';

const STATS_DATA = [
    {
        icon: "/icons/myprofile/profileModel/Earnings.svg",
        label: "Total Earnings",
        value: "$84500.00",
        monthlyChange: "$240",
        changeType: 'increase' as const,
        viewDetailsHref: routes.earnings
    },
    {
        icon: "/icons/myprofile/profileModel/MyListings.svg",
        label: "Total Listings",
        value: "127",
        monthlyChange: "03",
        changeType: 'increase' as const,
        viewDetailsHref: routes.myListings
    },
    {
        icon: "/icons/myprofile/profileModel/Bookings.svg",
        label: "Total Bookings",
        value: "78",
        monthlyChange: "08",
        changeType: 'increase' as const,
        viewDetailsHref: routes.bookings
    },
    {
        icon: "/icons/myprofile/profileModel/Bookings.svg",
        label: "Upcoming Bookings",
        value: "08",
        monthlyChange: "02",
        changeType: 'increase' as const,
        viewDetailsHref: routes.bookings
    }
];

const RECENT_BOOKINGS = [
    {
        image: "/assets/dashboard.jpg",
        title: "Google Nest Audio",
        renterName: "Jeffree Martin",
        date: "26 Jul - 29 Jul, 2026",
        payment: "87.00",
        location: "Manchester City Centre..",
        status: 'Upcoming' as const
    },
    {
        image: "/assets/dashboard.jpg",
        title: "Apple HomePod Mini",
        renterName: "Sarah Johnson",
        date: "15 Aug - 20 Aug, 2026",
        payment: "75.00",
        location: "East London",
        status: 'In Transit' as const
    },
    {
        image: "/assets/dashboard.jpg",
        title: "Amazon Echo Dot",
        renterName: "Michael Lee",
        date: "05 Sep - 10 Sep, 2026",
        payment: "65.00",
        location: "Birmingham",
        status: 'Completed' as const
    },
    {
        image: "/assets/dashboard.jpg",
        title: "Sonos One",
        renterName: "Emily Davis",
        date: "12 Oct - 17 Oct, 2026",
        payment: "95.00",
        location: "Liverpool",
        status: 'Upcoming' as const
    }
];

const DashboardSection = () => {
    return (
        <div className="bg-white min-h-screen pt-10 pb-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
                <h1 className="text-[24px] font-semibold text-[#000000] font-outfit mb-5">Dashboard</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {STATS_DATA.map((stat, index) => (
                        <DashboardStatCard key={index} {...stat} />
                    ))}
                </div>

                {/* Recent Bookings Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[20px] font-medium text-[#000000] font-outfit">Recent Bookings</h2>
                    <Link href={routes.bookings} className="flex items-center text-[#009FFD] text-[14px] font-medium font-outfit hover:underline group">
                        View all
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Bookings List */}
                <div className="flex flex-col gap-6">
                    {RECENT_BOOKINGS.map((booking, index) => (
                        <RecentBookingCard key={index} {...booking} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardSection;
