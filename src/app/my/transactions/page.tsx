"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Copy, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TransactionsPage = () => {
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState('This Year');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const allTransactions = [
        { id: "#MK-2048392012", title: "Guitar", renter: "John Smith", date: "15 Aug, 2026", time: "02:30PM", amount: "+ $1,200.00", image: "/assets/dashboard.jpg" },
        { id: "#PK-3048576123", title: "Piano", renter: "Alice Johnson", date: "20 Aug, 2026", time: "11:00AM", amount: "+ $3,500.00", image: "/assets/dashboard.jpg" },
        { id: "#VK-4059867234", title: "Violin", renter: "Michael Brown", date: "25 Aug, 2026", time: "01:45PM", amount: "+ $850.00", image: "/assets/dashboard.jpg" },
        { id: "#TK-5064789345", title: "Trumpet", renter: "Laura Wilson", date: "30 Aug, 2026", time: "04:00PM", amount: "+ $600.00", image: "/assets/dashboard.jpg" },
        { id: "#CK-6075890456", title: "Clarinet", renter: "David Lee", date: "05 Sep, 2026", time: "10:30AM", amount: "+ $450.00", image: "/assets/dashboard.jpg" },
        { id: "#SK-7086901567", title: "Saxophone", renter: "Michelle Green", date: "10 Sep, 2026", time: "03:15PM", amount: "+ $1,000.00", image: "/assets/dashboard.jpg" },
        { id: "#SK-7086901598", title: "Guitar", renter: "John Doe", date: "11 Sep, 2026", time: "10:20AM", amount: "+ $750.00", image: "/assets/dashboard.jpg" },
        { id: "#SK-7086901569", title: "Piano", renter: "Emily Carter", date: "12 Sep, 2026", time: "02:45PM", amount: "+ $1,500.00", image: "/assets/dashboard.jpg" },
        { id: "#MK-2048392013", title: "Drums", renter: "Sam Wilson", date: "15 Sep, 2026", time: "05:00PM", amount: "+ $2,200.00", image: "/assets/dashboard.jpg" },
        { id: "#PK-3048576124", title: "Flute", renter: "Sarah Miller", date: "18 Sep, 2026", time: "09:00AM", amount: "+ $400.00", image: "/assets/dashboard.jpg" },
        { id: "#VK-4059867235", title: "Cello", renter: "Chris Evans", date: "20 Sep, 2026", time: "12:00PM", amount: "+ $1,800.00", image: "/assets/dashboard.jpg" },
        { id: "#TK-5064789346", title: "Harp", renter: "Anna Scott", date: "22 Sep, 2026", time: "02:30PM", amount: "+ $4,500.00", image: "/assets/dashboard.jpg" },
        { id: "#CK-6075890457", title: "Oboe", renter: "Kevin Hart", date: "25 Sep, 2026", time: "11:30AM", amount: "+ $950.00", image: "/assets/dashboard.jpg" },
        { id: "#SK-7086901568", title: "Trombone", renter: "Jessica Alba", date: "28 Sep, 2026", time: "04:15PM", amount: "+ $1,100.00", image: "/assets/dashboard.jpg" },
        { id: "#SK-7086901570", title: "Synthesizer", renter: "Ryan Reynolds", date: "30 Sep, 2026", time: "06:00PM", amount: "+ $3,000.00", image: "/assets/dashboard.jpg" },
    ];

    const currentTransactions = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return allTransactions.slice(startIndex, startIndex + itemsPerPage);
    }, [currentPage]);

    const totalPages = Math.ceil(allTransactions.length / itemsPerPage);

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-[20px] font-semibold text-[#000000] font-outfit mb-2">Transactions History</h1>
                        <p className="text-[#686262] text-[14px] font-medium font-outfit">Review all booking-related financial activity.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {['This Year', 'This Month', 'This Week'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 text-[12px] font-semibold font-outfit rounded-sm border transition-all ${activeFilter === filter
                                    ? "border-[#FF3A44] text-[#FF3A44] bg-[#FFF5F5]"
                                    : "border-[#F0EFEF] text-[#686262] bg-white hover:border-gray-300"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Transactions List */}
                <div className="flex flex-col gap-4 mb-10">
                    {currentTransactions.map((tx) => (
                        <div
                            key={tx.id}
                            onClick={() => router.push('/my/transactions/details')}
                            className="bg-white pr-4  rounded-lg border border-[#F0EFEF] flex flex-col md:flex-row gap-4 items-center cursor-pointer "
                        >
                            <div className="w-full md:w-60 h-50 relative rounded-l-lg overflow-hidden shrink-0">
                                <Image src={tx.image} alt={tx.title} fill className="object-cover" />
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[16px] text-[#000000] font-medium font-outfit">Transaction ID</span>
                                        <span className="text-[16px] font-medium text-[#009FFD] font-outfit">{tx.id}</span>
                                        <Copy
                                            className="w-3.5 h-3.5 text-[#009FFD] cursor-pointer hover:opacity-70 transition-opacity"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigator.clipboard.writeText(tx.id);
                                            }}
                                        />
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

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-[#F0EFEF] rounded-full disabled:opacity-50 hover:bg-gray-50 transition-all"
                    >
                        <ChevronLeft className="w-5 h-5 text-[#686262]" />
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-10 h-10 rounded-full text-[14px] font-semibold font-outfit transition-all ${currentPage === i + 1
                                ? "bg-[#FFF8F8] text-[#FF3A44] border border-[#FF3A44]"
                                : "text-[#686262] border border-[#F0EFEF] hover:bg-gray-50"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-[#F0EFEF] rounded-full disabled:opacity-50 hover:bg-gray-50 transition-all"
                    >
                        <ChevronRight className="w-5 h-5 text-[#686262]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionsPage;