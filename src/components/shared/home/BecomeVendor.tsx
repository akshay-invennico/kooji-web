import React from "react";

const BecomeVendor = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto shadow-sm rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <p className="text-black-200 font-medium text-sm mb-6 p-2 bg-red-50 w-fit px-4 text-center rounded-md">
                        Become a Vendor
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                        Turn Your Gear Into Income
                    </h2>
                    <p className="mb-8 text-gray-600 text-md">
                        List your instruments, equipment, or services on KOOJI and earn from local bookings.
                    </p>
                    <button className="w-fit px-8 py-3 bg-red-700 rounded-xl text-white font-bold hover:bg-red-800 transition-colors">
                        Become a Vendor
                    </button>

                    <p className="mt-12 text-gray-500">No listing fees. Get paid securely.</p>
                </div>

                <div className="relative h-64 md:h-auto">
                    <img
                        src="/assets/becomeVendor.svg"
                        alt="Become a Vendor"
                        className="absolute inset-0 w-full h-full object-cover md:rounded-tr-sm md:rounded-br-sm"
                    />
                </div>
            </div>
        </section>
    )
}

export default BecomeVendor;