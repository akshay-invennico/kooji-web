'use client';

import React from "react";
import Link from "next/link";
import routes from "@/app/routes";
import { useAuthModal } from "@/context/AuthContext";

const Footer = () => {
    const { openModal } = useAuthModal();

    return (
        <footer className="lg:h-[500px] bg-gray-100 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <Link href={routes.home}>
                        <img src="/assets/logo.svg" alt="logo" className="h-8 mb-4 cursor-pointer" />
                    </Link>
                    <h4 className="font-bold text-[16px] mb-2">Rent Play & Earn</h4>
                    <p className="text-[14px] font-medium text-[#686262] mb-8">
                        Kooji is your go-to platform for all your musical needs. We offer a wide selection of instruments, equipment, and professional services for rent.
                    </p>
                    <h3 className="font-bold text-[16px] mb-3">Social Links</h3>
                    <div className="flex gap-6">
                        <img src="/icons/social/social1.svg" alt="social" className="w-10 h-10 cursor-pointer" />
                        <img src="/icons/social/social2.svg" alt="social" className="w-10 h-10 cursor-pointer" />
                        <img src="/icons/social/social3.svg" alt="social" className="w-10 h-10 cursor-pointer" />
                        <img src="/icons/social/social4.svg" alt="social" className="w-10 h-10 cursor-pointer" />
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-[20px] mb-4">Listings</h3>
                    <ul className="text-[16px] font-medium  text-[#686262] space-y-2">
                        <li><Link href={routes.listings} className="hover:text-black transition-colors">Instruments & Equipment</Link></li>
                        <li><Link href={routes.listings} className="hover:text-black transition-colors">Musician & Singers</Link></li>
                        <li><Link href={routes.listings} className="hover:text-black transition-colors">Technicians</Link></li>
                        <li><Link href={routes.listings} className="hover:text-black transition-colors">Event Space</Link></li>
                    </ul>
                    <h3 className="font-bold text-[20px] mt-8 mb-4">Earn from Kooji</h3>
                    <ul className="text-[16px] font-medium text-[#686262]">
                        <li><Link href={routes.vendor} className="hover:text-black transition-colors">Become a Vendor</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-[20px] mb-4">Company</h3>
                    <ul className="text-[16px] font-meidum text-[#686262] space-y-2 mb-8">
                        <li><Link href={routes.about} className="hover:text-black transition-colors">About Us</Link></li>
                        <li><Link href={routes.blogs} className="hover:text-black transition-colors">Blog</Link></li>
                    </ul>
                    <h3 className="font-bold text-[20px] mb-4">Support</h3>
                    <ul className="text-[16px] font-meidum text-[#686262] space-y-2">
                        <li><Link href={routes.contact} className="hover:text-black transition-colors">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">FAQ&apos;s</Link></li>
                        <li>
                            <button 
                                onClick={() => openModal('login')} 
                                className="hover:text-black transition-colors text-left"
                            >
                                Log in
                            </button>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-[20px] mb-4 whitespace-nowrap">Book Faster With the KOOJI App</h3>
                    <p className="text-[16px] font-meidum text-gray-800 mb-6">Search, book, manage rentals, and track services, all from your phone</p>
                    <div className="flex gap-4 mt-30">
                        <img src="/icons/playstore/appstore.svg" alt="appstore" className="h-10 cursor-pointer" />
                        <img src="/icons/playstore/googleplay.svg" alt="playstore" className="h-10 cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between text-[14px] font-medium text-[#686262]">
                <p>Copyright © 2025 Kooji LLC</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span><Link href={routes.privacyPolicy} className="hover:text-black transition-colors">Privacy Policy</Link></span>
                    <span><Link href={routes.termsAndConditions} className="hover:text-black transition-colors">Terms of Service</Link></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
