import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img src="/assets/logo.svg" alt="logo" className="h-8 mb-4" />
                    <h4 className="font-bold mb-2">Rent Play & Earn</h4>
                    <p className="text-md text-gray-800 mb-6">
                        Kooji is your go-to platform for all your musical needs. We offer a wide selection of instruments, equipment, and professional services for rent.
                    </p>
                    <h3 className="font-semibold mb-3">Social Links</h3>
                    <div className="flex gap-6">
                        <img src="/icons/social/social1.svg" alt="social" className="w-5 h-5" />
                        <img src="/icons/social/social2.svg" alt="social" className="w-5 h-5" />
                        <img src="/icons/social/social3.svg" alt="social" className="w-5 h-5" />
                        <img src="/icons/social/social4.svg" alt="social" className="w-5 h-5" />
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Listings</h3>
                    <ul className="text-md text-gray-800 space-y-2">
                        <li>Instruments & Equipment</li>
                        <li>Musician & Singers</li>
                        <li>Technicians</li>
                        <li>Event Space</li>
                    </ul>
                    <h3 className="font-bold mt-8 mb-4">Earn from Kooji</h3>
                    <ul className="text-md text-gray-600">
                        <li>Become a Vendor</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Company</h3>
                    <ul className="text-md text-gray-600 space-y-2 mb-8">
                        <li>About Us</li>
                        <li>Blog</li>
                    </ul>
                    <h3 className="font-bold mb-4">Support</h3>
                    <ul className="text-md text-gray-800 space-y-2">
                        <li>Contact Us</li>
                        <li>FAQ's</li>
                        <li>Log in</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4 whitespace-nowrap">Book Faster With the KOOJI App</h3>
                    <p className="text-md text-gray-800 mb-6">Search, book, manage rentals, and track services, all from your phone</p>
                    <div className="flex gap-4 mt-30">
                        <img src="/icons/playstore/appstore.svg" alt="appstore" className="h-10" />
                        <img src="/icons/playstore/googleplay.svg" alt="playstore" className="h-10" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                <p>Copyright © 2025 Kooji LLC</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer