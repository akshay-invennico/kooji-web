"use client";

import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, Star, ChevronDown } from 'lucide-react';
import { LISTINGS_DATA } from '@/data/listingsData';
import SimpleHeader from '@/components/shared/header/SimpleHeader';
import SimpleFooter from '@/components/shared/footer/SimpleFooter';

const CheckoutContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const listingId = searchParams.get('listingId');
    const startDate = searchParams.get('start');
    const endDate = searchParams.get('end');

    const listing = LISTINGS_DATA.find(l => l.id === listingId) || LISTINGS_DATA[0];

    // State to toggle between steps
    const [activeStep, setActiveStep] = useState<1 | 2>(1);

    const bookingDays = (startDate && endDate)
        ? Math.max(1, Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)))
        : 2;

    const pricePerDay = parseFloat(listing.price.replace('$', '')) || 45;
    const payableAmount = (pricePerDay * bookingDays) + 5 + 20 - 8; // Simplified calculation matching details

    return (
        <div className="bg-white min-h-screen font-outfit flex flex-col pt-[95px]">
            <SimpleHeader />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-6 md:py-10">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[#686262] text-[14px] font-semibold mb-8"
                >
                    <ChevronLeft className="w-5 h-5 cursor-pointer" />
                    Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                    {/* Left Section: Summary */}
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="w-full sm:w-48 h-32 relative rounded-lg overflow-hidden shrink-0 border border-[#F0EFEF]">
                                <Image src={listing.image} alt={listing.title} fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-[18px] font-semibold text-[#000000] mb-1 leading-tight">{listing.title}</h1>
                                <p className="text-[14px] text-[#A39E9E] font-medium mb-3">{listing.category}  •  <Star className="w-5 h-5 inline text-orange-400 fill-orange-400 mb-1" /> <span className="text-black font-bold">{listing.rating}</span> ({listing.totalReviews} Reviews)</p>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-[14px] text-[#686262] font-medium leading-tight">
                                        <Image src="/icons/bookingDetails/Location Icon.svg" alt="" width={20} height={20} className="mt-0.5 shrink-0" />
                                        <span>Building Number: 225, Bow Street, Royal Opera..</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full overflow-hidden relative border border-gray-100">
                                            <Image src="/assets/dashboard.jpg" alt="Host" fill className="object-cover" />
                                        </div>
                                        <span className="text-[14px] font-medium text-[#686262]">Jemmie Atkinson</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 pt-4">
                            <div>
                                <p className="text-[14px] text-[#A39E9E] font-medium mb-1">Booking Date</p>
                                <p className="text-[14px] font-semibold text-[#000000]">
                                    {startDate ? new Date(startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : "05 Mar"} -
                                    {endDate ? new Date(endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : "07 Mar, 2026"}
                                </p>
                            </div>
                            <div>
                                <p className="text-[14px] text-[#A39E9E] font-medium mb-1">Delivery Type</p>
                                <p className="text-[14px] font-semibold text-[#000000]">Delivery to Address</p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-[#F0EFEF]">
                            <div className="flex justify-between items-center text-[#686262]">
                                <span className="text-[14px] font-medium">Price</span>
                                <span className="text-[14px] font-semibold text-black">${pricePerDay}</span>
                            </div>
                            <div className="flex justify-between items-center text-[#686262]">
                                <span className="text-[14px] font-medium">Booking Days</span>
                                <span className="text-[14px] font-semibold text-black">{bookingDays} Days</span>
                            </div>
                            <div className="flex justify-between items-center pt-5 border-t border-dashed border-[#F0EFEF]">
                                <span className="text-[16px] font-semibold text-[#000000]">Payable Amount</span>
                                <span className="text-[16px] font-semibold text-black">${payableAmount}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Form */}
                    <div className="space-y-6">
                        {/* Step 1: Your Information */}
                        <div className={`bg-white rounded-lg border border-[#F0EFEF] transition-all duration-300 ${activeStep === 1 ? 'p-6 md:p-8' : 'p-4 md:p-6 pb-0 cursor-pointer'}`}
                            onClick={() => activeStep !== 1 && setActiveStep(1)}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[14px] ${activeStep === 1 ? 'bg-[#FF3A44]' : 'bg-[#FF3A44] text-[#000000]'}`}>
                                    1
                                </div>
                                <h2 className={`text-[20px] font-semibold ${activeStep === 1 ? 'text-[#000000]' : 'text-[#000000]'}`}>Your Information</h2>
                            </div>

                            {activeStep === 1 && (
                                <form className="space-y-6 mt-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[#000000]">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Emily"
                                                className="w-full px-4 py-3 rounded-md border border-[#F0EFEF] outline-none focus:border-[#FF474D] transition-colors placeholder:text-gray-300 text-[14px]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[#000000]">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Carter"
                                                className="w-full px-4 py-3 rounded-md border border-[#F0EFEF] outline-none focus:border-[#FF474D] transition-colors placeholder:text-gray-300 text-[14px]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[#000000]">Phone Number</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. XXX XXX XX"
                                                className="w-full px-4 py-3 rounded-md border border-[#F0EFEF] outline-none focus:border-[#FF474D] transition-colors placeholder:text-gray-300 text-[14px]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[#000000]">Email</label>
                                            <input
                                                type="email"
                                                placeholder="e.g. example@email.com"
                                                className="w-full px-4 py-3 rounded-md border border-[#F0EFEF] outline-none focus:border-[#FF474D] transition-colors placeholder:text-gray-300 text-[14px]"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-[12px] text-[#A39E9E] font-medium leading-relaxed">
                                        By pressing &quot;Continue&quot;&#44; you agree to Kooji&apos;s <span className="text-[#686262] underline cursor-pointer">Terms of Service</span> and <span className="text-[#686262] underline cursor-pointer">Privacy Policy</span>. Your contact info won&apos;t appear on your public profile, won&apos;t be disclosed to the host and we don&apos;t share it with third party services.
                                    </p>

                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveStep(2);
                                            }}
                                            className="bg-[#FF3A44] text-white font-semibold text-[14px] px-12 py-3.5 rounded-sm"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Step 2: Payment Details */}
                        <div className={`bg-white rounded-lg border border-[#F0EFEF] transition-all duration-300 ${activeStep === 2 ? 'p-6 md:p-8' : 'p-4 md:p-6 cursor-pointer'}`}
                            onClick={() => activeStep !== 2 && setActiveStep(2)}>
                            <div className="flex items-center gap-4 mb-0">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[14px] ${activeStep === 2 ? 'bg-[#FF3A44]' : 'bg-[#FF3A44] text-[#000000]'}`}>
                                    2
                                </div>
                                <h2 className={`text-[20px] font-semibold ${activeStep === 2 ? 'text-[#000000]' : 'text-[#000000]'}`}>Payment Details</h2>
                            </div>

                            {activeStep === 2 && (
                                <form className="space-y-6 mt-8">
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-medium text-[#000000]">Card Number</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="e.g. 1234 5678 9101"
                                                className="w-full px-4 py-3 pb-3 rounded-md border border-[#F0EFEF] outline-none focus:border-[#FF474D] transition-colors placeholder:text-gray-300 text-[14px]"
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                                <Image src="/assets/creaditCardIcon/visa.svg" alt="Visa" width={30} height={20} />
                                                <Image src="/assets/creaditCardIcon/mastercard.svg" alt="Mastercard" width={25} height={18} />
                                                <Image src="/assets/creaditCardIcon/american-express.svg" alt="Amex" width={25} height={18} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[14px] font-medium text-[#000000]">Name on Card</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Emily Carter"
                                            className="w-full px-4 py-3 rounded-md border border-[#F0EFEF] outline-none focus:border-[#FF474D] transition-colors placeholder:text-gray-300 text-[14px]"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[#000000]">Expiration date</label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                className="w-full px-4 py-3 rounded-md border border-[#F0EFEF] outline-none focus:border-[#FF474D] transition-colors placeholder:text-gray-300 text-[14px]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[14px] font-medium text-[#000000]">CVC</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. XXX"
                                                className="w-full px-4 py-3 rounded-md border border-[#F0EFEF] outline-none focus:border-[#FF474D] transition-colors placeholder:text-gray-300 text-[14px]"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[14px] font-medium text-[#000000]">Country</label>
                                        <div className="relative">
                                            <div className="w-full px-4 py-3 rounded-md border border-[#F0EFEF] flex items-center justify-between cursor-pointer hover:border-gray-300 transition-colors">
                                                <div className="flex items-center gap-2">
                                                    <Image src="/assets/uk.svg" alt="UK" width={20} height={14} />
                                                    <span className="text-[14px] font-medium text-black">United Kingdom</span>
                                                </div>
                                                <ChevronDown className="w-4 h-4 text-black" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[16px] text-[#686262] font-semibold">Pay</span>
                                            <span className="text-[20px] font-bold text-black">${payableAmount}</span>
                                        </div>
                                        <button
                                            type="button"
                                            className="bg-[#FF3A44] text-white font-semibold text-[16px] px-10 py-3.5 rounded-sm"
                                        >
                                            Pay Now
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <SimpleFooter />
        </div>
    );
}

const CheckoutPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <CheckoutContent />
        </Suspense>
    );
};

export default CheckoutPage;
