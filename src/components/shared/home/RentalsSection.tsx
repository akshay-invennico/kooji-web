"use client";

import React, { useRef, useState, useEffect } from "react";
import RentalsCard from "@/components/ui/landing/RentalsCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const RENTALS_DATA = [
    {
        rating: 4.8,
        totalReviews: 120,
        title: "Yamaha PA Speaker System",
        address: "Manchester City Center....",
        price: "$45",
        image: "/assets/rentalsImg/rentalCard.png"
    },
    {
        rating: 4.5,
        totalReviews: 100,
        title: "Bose Portable PA System",
        address: "Manchester City Center....",
        price: "$45",
        image: "/assets/rentalsImg/rentalCard.png"
    },
    {
        rating: 4.7,
        totalReviews: 156,
        title: "JBLEON ONE Compact",
        address: "Machester City Center",
        price: "$45",
        image: "/assets/rentalsImg/rentalCard.png"
    },
    {
        rating: 4.5,
        totalReviews: 110,
        title: "Yamaha STAGEPAS 1k",
        address: "Manchester City Center",
        price: "$45",
        image: "/assets/rentalsImg/rentalCard.png"
    },
    {
        rating: 4.9,
        totalReviews: 210,
        title: "Pioneer DJ XDJ-RX3",
        address: "Manchester City Center....",
        price: "$75",
        image: "/assets/rentalsImg/rentalCard.png"
    },
    {
        rating: 4.6,
        totalReviews: 85,
        title: "Shure SM58 Microphones",
        address: "Manchester City Center....",
        price: "$15",
        image: "/assets/rentalsImg/rentalCard.png"
    },
    {
        rating: 4.8,
        totalReviews: 142,
        title: "QSC K12.2 Active",
        address: "Manchester City Center",
        price: "$55",
        image: "/assets/rentalsImg/rentalCard.png"
    },
    {
        rating: 4.4,
        totalReviews: 67,
        title: "Fender Stratocaster Classic",
        address: "Manchester City Center",
        price: "$35",
        image: "/assets/rentalsImg/rentalCard.png"
    }
];

const RentalsSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            updateScrollButtons();
            container.addEventListener("scroll", updateScrollButtons);
            window.addEventListener("resize", updateScrollButtons);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", updateScrollButtons);
            }
            window.removeEventListener("resize", updateScrollButtons);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -360 : 360;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="pb-16 md:pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="text-start">
                        <p className="text-[#686262] font-semibold text-[14px]  mb-6 p-2 bg-[#FFF8F8] w-fit px-4 text-center rounded">Trending Rentals Near You</p>
                        <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold">Hot Rentals You Don&apos;t Want to Miss</h2>
                    </div>


                    <div className="flex items-center gap-3 self-start md:self-end">
                        <button
                            onClick={() => scroll("left")}
                            className={`flex items-center justify-center w-15 h-12 rounded-[500px] ${canScrollLeft ? "border border-[#000000]" : "border-none"} text-[#FFFFFF]`}
                        >
                            <ArrowLeft className={`w-5 h-5 ${canScrollLeft ? "text-black" : "text-gray-400"}`} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className={`flex items-center justify-center w-15 h-12 rounded-[500px] ${canScrollRight ? "border border-[#000000]" : "border-none"} text-[#FFFFFF]`}
                        >
                            <ArrowRight className={`w-5 h-5 ${canScrollRight ? "text-black" : "text-gray-400"}`} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto pb-8 gap-x-3 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    <style>
                        {`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}
                    </style>
                    {RENTALS_DATA.map((rental, index) => (
                        <div key={index} className="w-fit snap-start shrink-0">
                            <RentalsCard
                                rating={rental.rating}
                                totalReviews={rental.totalReviews}
                                title={rental.title}
                                address={rental.address}
                                price={rental.price}
                                image={rental.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RentalsSection;
