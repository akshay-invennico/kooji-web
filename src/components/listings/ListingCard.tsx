import React, { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";
const ratingImg = "/assets/rentalsImg/ratingIcon.svg";
const addressImg = "/assets/rentalsImg/addressIcon.svg";
// const heart = "/assets/rentalsImg/heart.svg"

interface ListingCardProps {
    id: string;
    rating: number,
    totalReviews: number,
    title: string,
    address: string,
    price: string,
    image: string,
    images?: string[]
}


const ListingCard: React.FC<ListingCardProps> = ({ id, rating, totalReviews, title, address, price, image, images = [] }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const displayImages = images.length > 0 ? images : [image];

    const handleLikeClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    };


    return (
        <Link href={`/listings/${id}`} >
            <div className="w-[310px] h-[312px] bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#F0EFEF] group cursor-pointer flex flex-col ">

                <div className="relative h-[200px] w-full overflow-hidden">
                    <div
                        className="flex h-full transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {displayImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${title} - ${idx + 1}`}
                                className="w-full h-full object-cover shrink-0"
                            />
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    {displayImages.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/40 backdrop-blur-md rounded-lg p-1.5 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/40 backdrop-blur-md rounded-lg p-1.5 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>


                        </>
                    )}


                    <div className="absolute top-3 left-2 right-2 flex items-center justify-between z-10">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md">
                            <img src={ratingImg} alt="rating" className="w-4 h-4" />
                            <span className="text-sm font-semibold text-white">{rating}</span>
                            <span className="text-xs text-white/90">({totalReviews})</span>
                        </div>

                        <button
                            onClick={handleLikeClick}
                            className="bg-black/40 backdrop-blur-md rounded-md p-1.5 flex items-center justify-center transition-all duration-200 hover:scale-110"
                        >
                            <Heart
                                className={clsx(
                                    "w-5 h-5 transition-all duration-300",
                                    isLiked ? "fill-[#FF3A44] text-[#FF3A44]" : "text-white"
                                )}
                            />
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
