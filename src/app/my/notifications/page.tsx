/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';

const NotificationsPage = () => {
    const [activeTab, setActiveTab] = useState<'All' | 'Unread'>('All');

    const allNotifications = [
        {
            id: 1,
            title: "Booking Cancelled by Client",
            description: "A booking for <span class='text-[#FF3A44] font-semibold'>DJ Night</span> on <span class='text-[#FF3A44] font-semibold'>20 March 2026</span> has been cancelled. Please check your schedule.",
            time: "5min",
            isUnread: true,
            image: "/assets/dashboard.jpg",
            type: 'booking'
        },
        {
            id: 2,
            title: "Payment Received",
            description: "You have received payment for the event <span class='text-[#FF3A44] font-semibold'>Singing Service</span> on 22 March 2026.",
            time: "10min",
            isUnread: true,
            image: "/assets/dashboard.jpg",
            type: 'payment'
        },
        {
            id: 3,
            title: "Event Reminder",
            description: "Reminder: Your event space booking starts in 24 hours. Please confirm arrival time with the client.",
            time: "1hr",
            isUnread: true,
            image: "/assets/dashboard.jpg",
            type: 'reminder'
        },
        {
            id: 4,
            title: "John Smith sent you a new message",
            description: "\"Hi Cherry! I want to request 2days extensation for the booking of Speakers..",
            time: "30min",
            isUnread: true,
            image: "/assets/dashboard.jpg",
            type: 'message'
        },
        {
            id: 5,
            title: "Delivery Code Verified",
            description: "Delivery for booking <span class='text-[#FF3A44] font-semibold'>#BK-10452</span> has been successfully verified. Rental period has started.",
            time: "2hr",
            isUnread: false,
            image: "/assets/dashboard.jpg",
            type: 'delivery'
        },
        {
            id: 6,
            title: "Pickup Ready",
            description: "The renter marked the item as Ready for Pickup for booking <span class='text-[#FF3A44] font-semibold'>#BK-10452</span>.",
            time: "1hr",
            isUnread: false,
            image: "/assets/dashboard.jpg",
            type: 'pickup'
        },
        {
            id: 7,
            title: "Booking Marked as Completed",
            description: "Booking <span class='text-[#FF3A44] font-semibold'>#BK-10452</span> has been marked as completed.",
            time: "45min",
            isUnread: false,
            image: "/assets/dashboard.jpg",
            type: 'completed'
        },
        {
            id: 8,
            title: "Booking Cancelled by Client",
            description: "Booking <span class='text-[#FF3A44] font-semibold'>#BK-10460</span> has been cancelled by the client. Refund processed as per policy.",
            time: "1day",
            isUnread: false,
            image: "/assets/dashboard.jpg",
            type: 'cancelled'
        },
        {
            id: 9,
            title: "New Review Received",
            description: "You received a 5-star review.",
            time: "3days",
            isUnread: false,
            icon: <Star className="w-6 h-6 text-white fill-white" />,
            iconBg: "bg-orange-500",
            type: 'review'
        }
    ];

    const filteredNotifications = activeTab === 'All'
        ? allNotifications
        : allNotifications.filter(n => n.isUnread);

    return (
        <div className="bg-[#FFFFFF] min-h-screen font-outfit">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-[24px] font-semibold text-[#000000] mb-2 font-outfit">Notifications</h1>
                <p className="text-[#686262] text-[14px] font-medium mb-8 font-outfit">Stay updated on bookings, payments, and account activity.</p>

                <div className="flex gap-4 mb-8">
                    {['All', 'Unread'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-8 py-2 rounded-full text-[14px] font-semibold transition-all border ${activeTab === tab
                                ? "bg-white border-[#FF3A44] text-[#FF3A44]"
                                : "bg-white border-[#F0EFEF] text-[#686262] hover:border-gray-300"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {filteredNotifications.length > 0 ? (
                    <div className="bg-[#F9F9F9] rounded-xl overflow-hidden border border-[#F0EFEF]">
                        {filteredNotifications.map((notif, index) => (
                            <div
                                key={notif.id}
                                className={`p-6 flex gap-4 relative bg-white transition-colors hover:bg-gray-50 border-b border-[#F0EFEF] last:border-b-0`}
                            >
                                <div className="w-12 h-12 relative shrink-0">
                                    {notif.image ? (
                                        <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                            <Image src={notif.image} alt="" fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${notif.iconBg}`}>
                                            {notif.icon}
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-[16px] font-bold text-[#000000] font-outfit">{notif.title}</h3>
                                        <div className="flex items-center gap-2">
                                            {notif.isUnread && <div className="w-2 h-2 rounded-full bg-[#FF3A44]" />}
                                            <span className="text-[12px] text-[#A39E9E] font-medium"> {notif.time}</span>
                                        </div>
                                    </div>
                                    <p
                                        className="text-[14px] text-[#686262] font-medium mb-3 font-outfit max-w-2xl leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: notif.description }}
                                    />
                                    <Link
                                        href="/my/transactions"
                                        className="text-[#009FFD] text-[12px] font-bold flex items-center gap-1 hover:underline"
                                    >
                                        View Details <ChevronRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="min-h-[400px] flex items-center justify-center">
                        <p className="text-[#686262] text-[16px] font-medium font-outfit">No notification yet</p>
                        <p className='text-[#686262] text-[14px] font-medium max-w-2xl'>You’ve got a blank slate. We’ll let you know when updates arrive.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotificationsPage;
