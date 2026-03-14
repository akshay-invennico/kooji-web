/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Copy, ArrowRight } from 'lucide-react';

const EarningsPage = () => {
    const [activeFilter, setActiveFilter] = useState('This Year');

    const overviewCards = [
        {
            title: "Total Earnings",
            amount: "$84500.00",
            subtext: "Earned from completed bookings.",
            icon: "/icons/totalEarning.svg",

        },
        {
            title: "Pending Earnings",
            amount: "$850.00",
            subtext: "Will be released after booking completion.",
            icon: "/icons/pendingEarning.svg",

        }
    ];

    const transactions = [
        { id: "#MK-2048392012", title: "Guitar", renter: "John Smith", date: "15 Aug, 2026", time: "02:30PM", amount: "+ $1,200.00", image: "/assets/dashboard.jpg" },
        { id: "#PK-3048576123", title: "Piano", renter: "Alice Johnson", date: "20 Aug, 2026", time: "11:00AM", amount: "+ $3,500.00", image: "/assets/dashboard.jpg" },
        { id: "#VK-4059867234", title: "Violin", renter: "Michael Brown", date: "25 Aug, 2026", time: "01:45PM", amount: "+ $850.00", image: "/assets/dashboard.jpg" },
        { id: "#TK-5064789345", title: "Trumpet", renter: "Laura Wilson", date: "30 Aug, 2026", time: "04:00PM", amount: "+ $600.00", image: "/assets/dashboard.jpg" },
        { id: "#CK-6075890456", title: "Clarinet", renter: "David Lee", date: "05 Sep, 2026", time: "10:30AM", amount: "+ $450.00", image: "/assets/dashboard.jpg" },
        { id: "#SK-7086901567", title: "Saxophone", renter: "Michelle Green", date: "10 Sep, 2026", time: "03:15PM", amount: "+ $1,000.00", image: "/assets/dashboard.jpg" },
        { id: "#SK-7086901598", title: "Guitar", renter: "John Doe", date: "11 Sep, 2026", time: "10:20AM", amount: "+ $750.00", image: "/assets/dashboard.jpg" },
        { id: "#SK-7086901569", title: "Piano", renter: "Emily Carter", date: "12 Sep, 2026", time: "02:45PM", amount: "+ $1,500.00", image: "/assets/dashboard.jpg" },
    ];

    // Dynamic Data for the Graph based on filter
    const chartData = useMemo(() => {
        switch (activeFilter) {
            case 'This Month':
                return {
                    values: [40, 60, 45, 80, 70, 55, 90, 65, 50, 75, 60, 85],
                    labels: ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31']
                };
            case 'This Week':
                return {
                    values: [30, 80, 50, 90, 60, 100, 70],
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                };
            default: // This Year
                return {
                    values: [20, 45, 40, 42, 60, 50, 45, 35, 75, 65, 62, 50],
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                };
        }
    }, [activeFilter]);

    // Generate SVG path for the line and area
    const { linePath, areaPath } = useMemo(() => {
        const width = 1000;
        const height = 300;

        const data = chartData.values;
        const points = data.map((val, i) => ({
            x: (i / (data.length - 1)) * width,
            y: height - (val / 100) * height
        }));

        let d = `M ${points[0].x} ${points[0].y}`;
        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i];
            const p1 = points[i + 1];
            const cp1x = p0.x + (p1.x - p0.x) / 2;
            const cp2x = p0.x + (p1.x - p0.x) / 2;
            d += ` C ${cp1x} ${p0.y} ${cp2x} ${p1.y} ${p1.x} ${p1.y}`;
        }

        const aPath = `${d} L ${width} ${height} L 0 ${height} Z`;
        return { linePath: d, areaPath: aPath };
    }, [chartData]);

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* Header Section */}
                <div className="mb-10">
                    <h1 className="text-[20px] font-semibold text-[#000000] font-outfit mb-2">Earnings Overview</h1>
                    <p className="text-[#686262] text-[14px] font-medium font-outfit">Track your income, upcoming payouts, and transaction history.</p>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                    {overviewCards.map((card) => (
                        <div key={card.title} className={` rounded-lg p-6 border border-[#F0EFEF] relative overflow-hidden`}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-white">
                                    <Image src={card.icon} alt={card.title} width={20} height={20} />
                                </div>
                                <span className="text-[14px] font-semibold text-[#686262] font-outfit">{card.title}</span>
                            </div>
                            <h2 className="text-[24px] font-semibold text-[#000000] font-outfit mb-2">{card.amount}</h2>
                            <p className="text-[14px] text-[#686262] font-medium font-outfit">{card.subtext}</p>
                        </div>
                    ))}
                </div>

                {/* Analytics Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-[20px] font-bold text-[#000000] font-outfit mb-1">Earnings Analytics</h2>
                            <p className="text-[#686262] text-[14px] font-medium font-outfit">Track your income, upcoming payouts, and transaction history.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            {['This Year', 'This Month', 'This Week'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 text-[12px] font-semibold font-outfit rounded-md border transition-all ${activeFilter === filter
                                        ? "border-[#FF3A44] text-[#FF3A44] bg-[#FFF5F5]"
                                        : "border-[#F0EFEF] text-[#686262] bg-white hover:border-gray-300"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic SVG Graph */}
                    <div className="bg-white p-8 relative min-h-[400px]">
                        <div className="absolute left-8 top-8 bottom-16 flex flex-col justify-between text-[12px] text-[#A39E9E] font-medium font-outfit">
                            <span>$90K</span>
                            <span>$80K</span>
                            <span>$70K</span>
                            <span>$60K</span>
                            <span>$50K</span>
                            <span>$40K</span>
                            <span>$30K</span>
                            <span>$20K</span>
                            <span>$10K</span>
                        </div>

                        <div className="ml-12 h-[300px] relative">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-full h-px bg-[#F9F9F9]" />
                                ))}
                            </div>

                            {/* Area Chart */}
                            <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#FF3A44" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#FF3A44" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d={areaPath}
                                    fill="url(#chartGradient)"
                                    className="transition-all duration-700 ease-in-out"
                                />
                                <path
                                    d={linePath}
                                    fill="none"
                                    stroke="#FF3A44"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="transition-all duration-700 ease-in-out"
                                />

                                {/* Highlight Point (Dynamic positioning for demonstration) */}
                                <circle cx="750" cy="100" r="5" fill="#FF3A44" className="transition-all duration-700" />
                                <circle cx="750" cy="100" r="10" stroke="#FF3A44" strokeOpacity="0.2" fill="none" strokeWidth="4" className="transition-all duration-700" />
                            </svg>

                            {/* Tooltip Popup (Static for demo, but positioned correctly) */}
                            <div className="absolute left-[68%] top-[10%] -translate-x-1/2 bg-white rounded-xl shadow-xl border border-[#F0EFEF] p-4 min-w-[140px] z-10 text-center">
                                <div className="flex items-center gap-2 mb-1 justify-center">
                                    <div className="w-6 h-6 bg-[#FFF5F5] rounded-full flex items-center justify-center">
                                        <Image src="/icons/totalEarning.svg" alt="Earnings" width={14} height={14} />
                                    </div>
                                    <span className="text-[16px] font-bold text-[#000000] font-outfit">$55,000.00</span>
                                </div>
                                <p className="text-[12px] text-[#A39E9E] font-medium font-outfit">From 23 Bookings</p>
                            </div>
                        </div>

                        {/* X-Axis Labels */}
                        <div className="ml-12 mt-6 flex justify-between text-[12px] text-[#A39E9E] font-medium font-outfit px-2">
                            {chartData.labels.map((label) => (
                                <span key={label}>{label}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Transactions Section */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-[20px] font-semibold text-[#000000] font-outfit">Recent Transactions</h2>
                        <Link href="/my/transactions" className="flex items-center gap-1 text-[#009FFD] text-[14px] font-semibold font-outfit hover:underline">
                            View all <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        {transactions.map((tx) => (
                            <div key={tx.id} className="bg-white p-2 rounded-lg border border-[#F0EFEF] flex flex-col md:flex-row gap-4 items-center">
                                <div className="w-full md:w-60 h-50 relative rounded-lg overflow-hidden shrink-0">
                                    <Image src={tx.image} alt={tx.title} fill className="object-cover" />
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[16px] text-[#000000] font-medium font-outfit">Transaction ID</span>
                                            <span className="text-[16px] font-medium text-[#009FFD] font-outfit">{tx.id}</span>
                                            <Copy className="w-3.5 h-3.5 text-[#009FFD] cursor-pointer" />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[12px] text-[#000000] font-semibold uppercase font-outfit">Amount</span>
                                            <span className="text-[16px] font-semibold text-[#3EC300] font-outfit">{tx.amount}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-[16px] font-semibold text-[#000000] font-outfit mb-4">{tx.title}</h3>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-[12px] text-[#A39E9E] font-medium font-outfit mb-1">Renter</p>
                                            <p className="text-[14px] font-bold text-[#000000] font-outfit">{tx.renter}</p>
                                        </div>
                                        <div className="col-span-1 md:col-span-2">
                                            <p className="text-[12px] text-[#A39E9E] font-medium font-outfit mb-1">Date & Time</p>
                                            <p className="text-[14px] font-bold text-[#000000] font-outfit">{tx.date} <span className="text-[#686262] font-normal mx-1">•</span> {tx.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarningsPage;