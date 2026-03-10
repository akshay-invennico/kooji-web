import React from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
const ratingImg = "/assets/rentalsImg/ratingIcon.svg";
const addressImg = "/assets/rentalsImg/addressIcon.svg";

interface ListingCardProps {
    id: string;
    rating: number,
    totalReviews: number,
    title: string,
    address: string,
    price: string,
    image: string
}


const ListingCard: React.FC<ListingCardProps> = ({ id, rating, totalReviews, title, address, price, image }) => {
    return (
        <Link href={`/listings/${id}`}>
            <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-100 group cursor-pointer h-full flex flex-col hover:shadow-md transition-shadow">

                <div className="relative w-full h-[200px] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />


                    <div className="absolute top-1 left-2 right-2 flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-sm shadow-sm">
                            <img src={ratingImg} alt="rating" className="w-4 h-4" />
                            <span className="text-sm  text-white">{rating}</span>
                            <span className="text-xs text-white font-medium">({totalReviews})</span>
                        </div>

                        <button
                            className="p-2 bg-black/60 backdrop-blur-md rounded-sm shadow-sm text-white hover:bg-black/80 transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                </div>


                <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900">
                        {title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-500">
                        <img src={addressImg} alt="address" className="w-5 h-5" />
                        <p className="text-xs font-medium truncate">{address}</p>
                    </div>

                    <div className="flex items-baseline gap-1 pt-2">
                        <span className="text-xl font-semibold text-red-600 font-outfit">{price}</span>
                        <span className="text-sm font-medium text-gray-400">/day</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ListingCard;
