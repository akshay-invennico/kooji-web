import React from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
const ratingImg = "/assets/rentalsImg/ratingIcon.svg";
const addressImg = "/assets/rentalsImg/addressIcon.svg";
const heart = "/assets/rentalsImg/heart.svg"

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
        <Link href={`/listings/${id}`} className="w-full">
            <div className="w-full bg-[#FFFFFF] rounded-md overflow-hidden border border-[#F0EFEF] group cursor-pointer flex flex-col h-full">

                <div className="relative w-full h-[200px] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />


                    <div className="absolute top-1 left-2 right-2 flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md">
                            <img src={ratingImg} alt="rating" className="w-4 h-4" />
                            <span className="text-sm  text-white">{rating}</span>
                            <span className="text-xs text-white font-medium">({totalReviews})</span>
                        </div>

                        <button
                            className=" bg-black/20 backdrop-blur-md rounded-md  text-white"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <img src={heart} alt="heart" className="w-8 h-8" />
                        </button>
                    </div>
                </div>


                <div className="p-5 space-y-3">
                    <h3 className="text-[16px] font-bold text-[#000000]">
                        {title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-500">
                        <img src={addressImg} alt="address" className="w-5 h-5" />
                        <p className="text-[14px] text-[#686262] font-medium truncate">{address}</p>
                    </div>

                    <div className="flex items-baseline gap-1 pt-2">
                        <span className="text-[16px] font-semibold text-[#FF3A44] font-outfit">{price}</span>
                        <span className="text-[12px] font-medium text-[#686262]">/day</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ListingCard;
