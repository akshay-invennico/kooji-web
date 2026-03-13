"use client";

import React, { useState } from "react";
import ListingFilterBar from "@/components/listings/ListingFilterBar";
import ListingCard from "@/components/listings/ListingCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WhyChooseSection from "@/components/shared/home/whyChooseSection";
import BecomeVendor from "@/components/shared/home/BecomeVendor";
import GoogleMaps from "@/components/listings/GoogleMaps";
import { LISTINGS_DATA, ITEMS_PER_PAGE } from "@/data/listingsData";

const ListingsView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showMap, setShowMap] = useState(false);

    const totalPages = Math.ceil(LISTINGS_DATA.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedListings = LISTINGS_DATA.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const goToPage = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-50/50 pb-12">
            <ListingFilterBar showMap={showMap} onShowMapChange={setShowMap} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:pb-8 py-8">
                <h1 className="text-[24px] font-bold text-[#000000] mb-8">Listings</h1>

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className={`flex-1 transition-all duration-300 ${showMap ? 'lg:w-3/5 xl:w-[65%]' : 'w-full'}`}>
                        <div className={`grid gap-3 justify-items-center ${showMap
                            ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
                            }`}>
                            {paginatedListings.map((listings, index) => (
                                <ListingCard
                                    key={startIndex + index}
                                    id={listings.id}
                                    title={listings.title}
                                    address={listings.address}
                                    price={listings.price}
                                    image={listings.image}
                                    rating={listings.rating}
                                    totalReviews={listings.totalReviews}
                                />
                            ))}
                        </div>


                        <div className="mt-12 flex items-center justify-center gap-2">
                            <button
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <div className="flex items-center gap-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => goToPage(page)}
                                        className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${currentPage === page
                                            ? "bg-[#FF3A44] text-white"
                                            : "bg-white border border-red-200 text-black shadow-sm hover:bg-gray-50"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>


                    {showMap && (
                        <div className="hidden lg:block lg:w-2/5 xl:w-[35%] h-[calc(100vh-160px)] sticky top-24 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                            <GoogleMaps />
                        </div>
                    )}
                </div>
            </main>

            <WhyChooseSection />
            <BecomeVendor />
        </div>
    );
};

export default ListingsView;
