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

                <button className="bg-white-600 hover:bg-white-700 text-black-100 px-5 py-2 rounded-md font-semibold transition-all duration-300 shadow-sm border border-black-50 active:scale-95">
                    Save & Next
                </button>
            </div>
        </nav>
    )
}

export default VendorNavbar;