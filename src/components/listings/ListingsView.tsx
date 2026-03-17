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
        <div className="min-h-screen  bg-gray-50/50 pb-12">
            <ListingFilterBar showMap={showMap} onShowMapChange={setShowMap} />

            <main className={`pb-8 transition-all duration-300 ${showMap ? 'w-full' : 'max-w-7xl mx-auto px-4'}`}>
                <div className={`flex flex-col lg:flex-row ${showMap ? '' : 'gap-8'}`}>
                    <div className={`flex-1 transition-all duration-300 ${showMap ? 'lg:pl-[calc((100vw-1280px)/2+16px)] pr-8' : 'w-full'}`}>
                        <h1 className="text-[24px] font-bold text-[#000000] mt-5 mb-8">Listings</h1>

                        <div className={`grid gap-x-8 gap-y-5 justify-items-start ${showMap
                            ? "grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 "
                            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
                                    images={listings.images}
                                />
                            ))}
                        </div>


                        <div className="mt-12 flex items-center justify-center gap-6">
                            <button
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center text-black disabled:opacity-50 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" strokeWidth={3} />
                            </button>

                            <div className="flex items-center gap-2">
                                {(() => {
                                    const pages = [];
                                    if (totalPages <= 5) {
                                        for (let i = 1; i <= totalPages; i++) pages.push(i);
                                    } else {
                                        pages.push(1, 2, 3, '...', totalPages);
                                    }

                                    return pages.map((page, index) => {
                                        if (page === '...') {
                                            return <span key={`ellipsis-${index}`} className="text-black font-bold px-2">...</span>;
                                        }
                                        const isPageActive = currentPage === page;
                                        return (
                                            <button
                                                key={page}
                                                onClick={() => goToPage(page as number)}
                                                className={`w-12 h-12 rounded-full text-base font-semibold transition-all flex items-center justify-center ${isPageActive
                                                    ? "border-2 border-[#FF3A44] bg-[#FFF8F8] text-[#FF3A44]"
                                                    : "text-black "
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        );
                                    });
                                })()}
                            </div>

                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center text-black disabled:opacity-50 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" strokeWidth={3} />
                            </button>
                        </div>
                    </div>


                    {showMap && (
                        <div className="hidden lg:block lg:w-[20%] xl:w-[27%] h-[calc(100vh-195px)] sticky top-[195px] overflow-hidden">
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
