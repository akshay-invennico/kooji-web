import React from "react";
import RentalsCard from "@/components/ui/rentals/RentalsCard";

const RENTALS_DATA = [
    {
        rating: 4.8,
        totalReviews: 120,
        title: "Yamaha PA Speaker System",
        address: "Manchester City Center....",
        price: "$45",
        image: "/assets/rentalsImg/rentalSound.svg"
    },

    {
        rating: 4.5,
        totalReviews: 100,
        title: "Bose Portable PA System",
        address: "Manchester City Center....",
        price: "$45",
        image: "/assets/rentalsImg/rentalSound.svg"
    },

    {
        rating: 4.7,
        totalReviews: 156,
        title: "JBLEON ONE Compact",
        address: "Machester City Center",
        price: "$45",
        image: "/assets/rentalsImg/rentalSound.svg"
    },

    {
        rating: 4.5,
        totalReviews: 110,
        title: "Yamaha STAGEPAS 1k",
        address: "Manchester City Center",
        price: "$45",
        image: "/assets/rentalsImg/rentalSound.svg"
    },


]

const RentalsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-start mb-10">
                    <p className="text-black-200 font-medium text-sm mb-4 bg-red-50 w-50 text-center rounded-sm">Trending Rentals Near You</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Hot Rentals You Don't Want to Miss</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {RENTALS_DATA.map((rental, index) => (
                        <RentalsCard
                            key={index}
                            rating={rental.rating}
                            totalReviews={rental.totalReviews}
                            title={rental.title}
                            address={rental.address}
                            price={rental.price}
                            image={rental.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RentalsSection;