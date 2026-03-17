"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, Copy, MoreHorizontal } from 'lucide-react';
import CancelBookingModal from '@/components/ui/modal/CancelBookingModal';

const BookingDetailsPage = () => {
    // Mock data based on the image
    const booking = {
        id: "#BK-1064561452",
        status: "Upcoming",
        startDate: "24 March 2026",
        endDate: "25 March 2026",
        client: {
            name: "John Smith",
            memberSince: "Jan 2025",
            location: "12 Harmony Street, Manchester",
            avatar: "/assets/nouser.jfif"
        },
        service: {
            title: "Music System",
            price: 50.00,
            image: "/assets/dashboard.jpg",
            dates: "24 Mar - 25 Mar, 2026"
        },
        payment: {
            basePrice: 50.00,
            bookingDays: 2,
            deliveryCharge: 20.00,
            platformFee: 10.00,
            subTotal: 130.00,
            discount: 10.00,
            netEarning: 120.00,
            status: "Pending"
        }
    };

    const steps = [
        { label: "Upcoming", completed: true, active: true },
        { label: "In Transit", completed: false, active: false },
        { label: "Delivered", completed: false, active: false },
        { label: "Pickup Scheduled", completed: false, active: false },
        { label: "Completed", completed: false, active: false },
    ];

    const [showCancelModal, setShowCancelModal] = useState(false);

    const handleCancelBooking = (reason: string, details?: string) => {
        console.log("Cancelling booking:", { id: booking.id, reason, details });
        setShowCancelModal(false);
        // Add actual cancellation logic here if needed
    };

    return (
        <div className="bg-white min-h-screen relative">
            {showCancelModal && (
                <CancelBookingModal
                    bookingId={booking.id.replace('#', '')}
                    renterName={booking.client.name}
                    eventDate={`${booking.startDate} - ${booking.endDate}`}
                    service={booking.service.title}
                    onClose={() => setShowCancelModal(false)}
                    onConfirm={handleCancelBooking}
                />
            )}
            <div className="max-w-4xl mx-auto px-6 py-8">
                {/* Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-[#686262] text-[14px] font-medium font-outfit mb-6 hover:text-black transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 bg-[#F0EFEF] rounded-full p-1" />
                    Back
                </button>

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-[20px] font-semibold text-[#000000] font-outfit mb-2">Booking Details</h1>
                    <p className="text-[#686262] text-[14px] font-medium font-outfit">Review booking details and prepare for your upcoming event.</p>
                </div>

                {/* Progress Stepper */}
                <div className="flex justify-between items-start mb-12 relative ">
                    {/* Line Background */}
                    <div className="absolute top-6 left-0 right-0 h-px bg-[#F0EFEF] mx-10 z-0" />

                    {steps.map((step, index) => (
                        <div key={step.label} className="flex flex-col items-center gap-3 z-10 w-24">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${step.active ? 'bg-[#FF3A44]' : 'bg-[#F9F9F9]'}`}>
                                {index === 0 && <Image src="/icons/bookingDetails/Upcoming.svg" alt="Upcoming" width={20} height={20} className={step.active ? "invert brightness-0" : ""} />}
                                {index === 1 && <Image src="/icons/bookingDetails/In Transit.svg" alt="In Transit" width={22} height={22} className={step.active ? "invert brightness-0" : "opacity-30"} />}
                                {index === 2 && <Image src="/icons/bookingDetails/Delivered.svg" alt="Delivered" width={20} height={20} className={step.active ? "invert brightness-0" : "opacity-30"} />}
                                {index === 3 && <Image src="/icons/bookingDetails/Pickup Scheduled.svg" alt="Pickup Scheduled" width={20} height={20} className={step.active ? "invert brightness-0" : "opacity-30"} />}
                                {index === 4 && <Image src="/icons/bookingDetails/Completed.svg" alt="Completed" width={20} height={20} className={step.active ? "invert brightness-0" : "opacity-30"} />}
                            </div>
                            <span className={`text-[12px] text-center font-medium font-outfit ${step.active ? 'text-black font-bold' : 'text-[#A39E9E]'}`}>
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Booking ID & Status */}
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-[#F0EFEF]">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[18px] font-semibold text-[#000000] font-outfit">Booking ID</span>
                            <span className="text-[16px] font-medium text-[#009FFD] font-outfit">{booking.id}</span>
                            <Copy className="w-4 h-4 text-[#009FFD] cursor-pointer" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/icons/bookingDetails/Upcoming.svg" alt="Date" width={16} height={16} className="text-[#FF3A44]" />
                            <p className="text-[14px] font-medium text-[#000000] font-outfit">{booking.startDate} - {booking.endDate}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF3A44]" />
                        <span className="text-[14px] font-medium text-[#FF3A44] font-outfit">{booking.status}</span>
                    </div>
                </div>

                {/* Client Details */}
                <div className="mb-10">
                    <h3 className="text-[14px] font-medium text-[#686262] font-outfit mb-1">Client Details & Location</h3>
                    <div className="bg-white rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex items-center gap-4">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-[#FF3A44] text-white text-[18px] font-bold">
                                {booking.client.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h4 className="text-[14px] font-semibold text-[#000000] font-outfit">{booking.client.name}</h4>
                                <p className="text-[12px] text-[#A39E9E] font-medium font-outfit">Member Since, {booking.client.memberSince}</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#FFF8F8] text-[#000000] rounded-md mt-4 md:mt-0 font-medium font-outfit text-[14px]">
                            <Image src="/icons/bookingDetails/Chat Icon Container.svg" alt="Chat" width={20} height={20} />
                            Chat with Renter
                        </button>
                    </div>
                    <div className="mt-6">
                        <p className="text-[12px] text-[#A39E9E] font-medium font-outfit mb-2">Renters Location details</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Image src="/icons/bookingDetails/Location Icon.svg" alt="Location" width={18} height={18} />
                                <span className="text-[14px] font-semibold text-[#000000] font-outfit">{booking.client.location}</span>
                            </div>
                            <button className="flex items-center gap-1.5 text-[#FF3A44] text-[14px] font-medium font-outfit">
                                <Image src="/icons/details/mapIcon.svg" alt="Map" width={16} height={16} />
                                Show on Map
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full border-b border-[#F0EFEF] mb-4'></div>

                {/* Service Details */}
                <div className="mb-13">
                    <h3 className="text-[14px] font-semibold text-[#686262] font-outfit mb-4">Service Details</h3>
                    <div className="border border-[#F0EFEF] rounded-xl overflow-hidden  flex flex-col sm:flex-row">
                        <div className="w-full sm:w-48 h- relative shrink-0">
                            <Image src={booking.service.image} alt={booking.service.title} fill className="object-cover" />
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <h4 className="text-[18px] font-bold text-[#000000] font-outfit">{booking.service.title}</h4>
                                <span className="text-[18px] font-bold text-[#FF3A44] font-outfit">${booking.payment.subTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[12px] text-[#A39E9E] font-medium font-outfit uppercase">Price</p>
                                <p className="text-[14px] font-bold text-[#000000] font-outfit">${booking.service.price.toFixed(2)} <span className="text-[#686262] font-normal">/Day</span></p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[12px] text-[#A39E9E] font-medium font-outfit uppercase">Booking Dates</p>
                                <p className="text-[14px] font-bold text-[#000000] font-outfit">{booking.service.dates}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Details */}
                <div className="max-w-[1200px] mb-12">
                    <div className="bg-[#F9F9F9] rounded-xl p-6 border border-[#F0EFEF]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-[14px] font-medium text-[#686262] font-outfit">Payment Details</h3>
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FFA400]" />
                                <span className="text-[14px] font-semibold text-[#FFA400] font-outfit">{booking.payment.status}</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-[#F0EFEF] overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-[#F0EFEF]">
                                <div className="p-4 border-r flex flex-row justify-between gap-1 border-[#F0EFEF]">
                                    <p className="text-[14px] text-[#686262] font-medium font-outfit mb-1">Base Price</p>
                                    <p className="text-[14px] font-bold text-[#000000] font-outfit">${booking.payment.basePrice.toFixed(2)} <span className="text-[#686262] font-normal">/Day</span></p>
                                </div>
                                <div className="p-4 border-r flex flex-row justify-between gap-1 border-[#F0EFEF]">
                                    <p className="text-[14px] text-[#686262] font-medium font-outfit mb-1">Booking Days</p>
                                    <p className="text-[14px] font-semibold text-[#000000] font-outfit">0{booking.payment.bookingDays} <span className="text-[#686262] font-normal">Days</span></p>
                                </div>
                                <div className="p-4 border-r flex flex-row justify-between gap-1 border-[#F0EFEF]">
                                    <p className="text-[14px] text-[rgb(104,98,98)] font-medium font-outfit mb-1">Delivery Charge</p>
                                    <p className="text-[14px] font-semibold text-[#000000] font-outfit">${booking.payment.deliveryCharge.toFixed(2)}</p>
                                </div>
                                <div className="p-4 flex flex-row justify-between gap-1">
                                    <p className="text-[14px] text-[#686262] font-medium font-outfit mb-1">Platform Fee</p>
                                    <p className="text-[14px] font-semibold text-[#000000] font-outfit">${booking.payment.platformFee.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4">
                                <div className="p-4 border-r flex flex-row gap-4 border-[#F0EFEF]">
                                    <p className="text-[14px] text-[#686262] font-medium font-outfit mb-1">Sub Total</p>
                                    <p className="text-[14px] font-semibold text-[#000000] font-outfit">${booking.payment.subTotal.toFixed(2)}</p>
                                </div>
                                <div className="p-4 border-r flex flex-row gap-4 border-[#F0EFEF]">
                                    <p className="text-[14px] text-[#686262] font-medium font-outfit mb-1">Discount</p>
                                    <p className="text-[14px] font-semibold text-[#000000] font-outfit">${booking.payment.discount.toFixed(2)}</p>
                                </div>
                                <div className="p-4 col-span-2 flex items-center justify-between px-6">
                                    <span className="text-[14px] font-semibold text-[#3EC300] font-outfit">Your Net Earning</span>
                                    <span className="text-[14px] font-semibold text-[#3EC300] font-outfit">${booking.payment.netEarning.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Policy & Help */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <div>
                        <h4 className="text-[14px] font-medium text-[#686262] font-outfit mb-3">Cancellation Policy</h4>
                        <ul className="list-disc ml-5 text-[14px] text-[#686262] font-medium font-outfit flex flex-col gap-2">
                            <li>Free cancellation up to 72 hours before event.</li>
                            <li>Late cancellation may incur penalty.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-semibold text-[#000000] font-outfit mb-3">Need Assistance?</h4>
                        <p className="text-[14px] text-[#686262] font-medium font-outfit mb-4">If you&apos;re facing an issue with this booking, contact support.</p>
                        <button className="flex items-center gap-2 text-[#FF3A44] text-[14px] font-semibold font-outfit">
                            <Image src="/icons/bookingDetails/Customer-Support-1--Streamline-Core 1.svg" alt="Help" width={20} height={20} />
                            Contact Support
                        </button>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => setShowCancelModal(true)}
                        className="px-8 py-3 bg-[#F0EFEF] text-[#000000] rounded-md font-semibold font-outfit text-[14px] min-w-[160px]"
                    >
                        Cancel Booking
                    </button>
                    <button className="px-8 py-3 bg-[#F0EFEF] text-[#000000] rounded-md font-semibold font-outfit text-[14px] min-w-[160px]">
                        Mark as In Transit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingDetailsPage;