import React from "react";

const VendorNavbar = () => {
    return (
        <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <img
                    src="/assets/logo.svg"
                    alt="logo"
                    className="h-10 w-auto cursor-pointer"
                />

                <button className="bg-white text-medium text-[14px]  text-black px-5 py-2 rounded-md font-semibold  border border-black">
                    Save & Next
                </button>
            </div>
        </nav>
    )
}

export default VendorNavbar;