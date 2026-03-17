import React from "react";
import Link from "next/link";

const BecomeVendor = () => {
    return (
        <section className="pb-15 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-xl border border-[#F0EFEF] overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white">
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <p className="text-[#686262] font-semibold text-[14px]  mb-6 p-2 bg-[#FFF8F8] w-fit px-4 text-center rounded">
                            Become a Vendor
                        </p>
                        <h2 className="text-[36px] md:text-4xl font-bold mb-6 text-[#000000] leading-tight">
                            Turn Your Gear Into Income
                        </h2>
                        <p className="mb-8 text-[#000000] text-[14px] font-regular">
                            List your instruments, equipment, or services on KOOJI and earn from local bookings.
                        </p>
                        <Link href="/vendor">
                            <button className="w-fit text-[16px] px-8 py-3 bg-[#C5161D] rounded-lg text-white font-medium">
                                Become a Vendor
                            </button>
                        </Link>

                        <p className="mt-12 text-[#FFFFFF] font-medium text-[16px]">No listing fees. Get paid securely.</p>
                    </div>

                    <div className="relative h-64 md:h-auto">
                        <img
                            src="/assets/becomeVendor.png"
                            alt="Become a Vendor"
                            className="absolute inset-0 w-full h-full object-cover md:rounded-tr-xl md:rounded-br-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BecomeVendor;