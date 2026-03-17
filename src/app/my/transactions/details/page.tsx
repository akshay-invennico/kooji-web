"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, Copy, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TransactionDetailsPage = () => {
    const router = useRouter();

    const transactionData = {
        id: "#TRN-1064561452",
        type: "Booking Payment",
        date: "24 March 2026",
        time: "03:12 PM",
        status: "Released",
        payment: {
            grossAmount: 1000.00,
            platformCommission: 100.00,
            commissionRate: 10,
            stripeFee: 30.00,
            netEarning: 870.00
        },
        booking: {
            itemTitle: "Music System",
            itemImage: "/assets/dashboard.jpg", // Using existing placeholder from transactions page
            itemPrice: 500.00,
            bookingDates: "24 Mar - 25 Mar, 2026",
            renterName: "John Smith",
            renterLocation: "12 Harmony Street, Manchester",
            totalPrice: 1000.00,
            status: "Completed"
        }
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        // Could add a toast notification here
    };

    return (
        <div className="bg-[#FFFFFF] min-h-screen font-outfit">
            <div className="max-w-5xl mx-auto px-6 py-8">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[#686262] hover:text-black transition-colors mb-4 group"
                >
                    <div className="w-8 h-8 rounded-full border border-[#F0EFEF] flex items-center justify-center group-hover:bg-gray-50">
                        <ChevronLeft className="w-5 h-5" />
                    </div>
                    <span className="text-[14px] font-medium">Back</span>
                </button>

                <h1 className="text-[20px] font-semibold text-[#000000] mb-8">Transaction Details</h1>

                {/* Transaction Header */}
                <div className="border-t border-[#F0EFEF] pt-4 mb-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[16px] font-semibold text-[#000000]">Transaction ID</span>
                                <span className="text-[16px] font-medium text-[#009FFD]">{transactionData.id}</span>
                                <button onClick={() => handleCopy(transactionData.id)} className="text-[#009FFD] hover:opacity-70 transition-opacity">
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center gap-6 text-[#000000]">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 flex items-center text-[#FF3A44] justify-center relative">
                                        <Image src="/icons/date.svg" alt="date" fill />
                                    </div>
                                    <span className="text-[14px] font-medium">{transactionData.date}</span>
                                </div>

                                <div className='border-r-2 border-[#F0EFEF] h-8'></div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[14px] font-medium text-[#000000]">{transactionData.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[14px] text-[#A39E9E] font-medium mb-1">Transaction Type</p>
                            <p className="text-[16px] font-bold text-[#000000]">{transactionData.type}</p>
                        </div>
                    </div>
                </div>

                {/* Payment Details Card */}
                <div className="mb-10">
                    <div className="bg-[#F9F9F9] rounded-lg overflow-hidden border border-[#F0EFEF]">
                        <div className="px-6 py-4 flex justify-between items-center border-b border-[#F0EFEF]">
                            <span className="text-[16px] font-semibold text-[#686262]">Payment Details</span>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-[#3EC300]"></div>
                                <span className="text-[14px] font-bold text-[#3EC300]">{transactionData.status}</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-0 bg-white rounded-lg border border-[#F0EFEF] mb-0 overflow-hidden">
                                <div className="p-4 md:border-r flex flex-row justify-between gap-2 border-[#F0EFEF]">
                                    <p className="text-[14px] text-[#888] font-medium mb-1">Gross Amount</p>
                                    <p className="text-[16px] font-semibold text-black">${transactionData.payment.grossAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                </div>
                                <div className="p-4 md:border-r flex flex-row justify-between gap-2 border-[#F0EFEF]">
                                    <p className="text-[14px] text-[#888] font-medium mb-1">Platform Commission ({transactionData.payment.commissionRate}%)</p>
                                    <p className="text-[16px] font-semibold text-black">${transactionData.payment.platformCommission.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                </div>
                                <div className="p-4 flex flex-row justify-between gap-2">
                                    <p className="text-[14px] text-[#888] font-medium mb-1">Stripe Processing Fee</p>
                                    <p className="text-[16px] font-semibold text-black">${transactionData.payment.stripeFee.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                </div>
                            </div>
                            <div className="bg-white px-6 py-4 flex justify-between items-center rounded-b-lg border-x border-b border-[#F0EFEF]">
                                <span className="text-[14px] font-semibold text-[#3EC300]">Your Net Earning</span>
                                <span className="text-[14px] font-semibold text-[#3EC300]">${transactionData.payment.netEarning.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Details Card */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-[20px] font-semibold text-[#000000]">Booking Details</h2>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#3EC300]"></div>
                            <span className="text-[14px] font-semibold text-[#3EC300]">{transactionData.booking.status}</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-[#F0EFEF]  flex flex-col md:flex-row gap-6 relative">
                        <div className="w-full md:w-[240px] h-[180px] relative rounded-l-lg overflow-hidden shrink-0">
                            <Image
                                src={transactionData.booking.itemImage}
                                alt={transactionData.booking.itemTitle}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                                <h3 className="text-[18px] font-bold text-[#000000]">{transactionData.booking.itemTitle}</h3>
                                <span className="text-[16px] font-semibold text-[#FF3A44] md:absolute md:top-5 md:right-5">
                                    ${transactionData.booking.totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <p className="text-[12px] text-[#A39E9E] font-medium mb-1">Price</p>
                                    <p className="text-[16px] font-semibold text-[#000000]">
                                        ${transactionData.booking.itemPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })} <span className="text-[#686262] font-medium">/Day</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[12px] text-[#A39E9E] font-medium mb-1">Booking Dates</p>
                                    <p className="text-[16px] font-semibold text-[#000000]">{transactionData.booking.bookingDates}</p>
                                </div>
                                <div className="md:col-span-2 lg:col-span-1">
                                    <p className="text-[12px] text-[#A39E9E] font-medium mb-1">Renter</p>
                                    <p className="text-[16px] font-semibold text-[#000000]">{transactionData.booking.renterName}</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-[#F0EFEF] mb-3">
                                <p className="text-[12px] text-[#A39E9E] font-medium mb-1">Renters Location</p>
                                <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 mt-0.5 shrink-0 relative">
                                        <Image src="/icons/bookingDetails/Location Icon.svg" alt="Location" fill />
                                    </div>
                                    <p className="text-[14px] font-semibold text-[#000000]">{transactionData.booking.renterLocation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div>
                    <h4 className="text-[14px] font-semibold text-[#000000] mb-2">Need Assistance?</h4>
                    <p className="text-[14px] text-[#686262] font-medium mb-4">If you&apos;re facing an issue with this Transaction, contact support.</p>
                    <button className="flex items-center gap-2 text-[#FF3A44] font-bold text-[14px] hover:underline underline-offset-4">
                        <div className="w-6 h-6 relative">
                            <Image src="/icons/header/contactSupport.svg" alt="Support" fill />
                        </div>
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionDetailsPage;
