import React from "react";

const BecomeVendor = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-sm rounded-xl flex justify-between">
                <div className="text-start mb-10 mt-10">
                    <p className="text-black-200 font-medium text-sm mb-8 p-2 bg-red-50 w-40 text-center rounded-sm">Become a Vendor</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Turn Your Gear Into Income</h2>
                    <p className="mb-4 text-black">List your instruments, equipment, or services on KOOJI and earn from local bookings.</p>
                    <button className="w-45 p-3 bg-red-700 rounded-xl text-white font-bold">Become a Vendor</button>

                    <p className="mt-50">No listing fees. Get paid securely.</p>
                </div>

                <div>
                    <img src="/assets/becomeVendor.svg" alt="bacomeVendor" className="w-full" />
                </div>
            </div>
        </section>
    )
}

export default BecomeVendor;