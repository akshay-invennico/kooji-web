import React from "react";
const ratingImg = "/assets/rentalsImg/ratingIcon.svg";
const addressImg = "/assets/rentalsImg/addressIcon.svg";
const heart = "/assets/rentalsImg/heart.svg"

interface RentalsCardProps {
    rating: number,
    totalReviews: number,
    title: string,
    address: string,
    price: string,
    image: string
}

const RentalsCard: React.FC<RentalsCardProps> = ({ rating, totalReviews, title, address, price, image }) => {
    return (
        <div className="w-[351px] h-[400px] bg-white rounded-lg overflow-hidden  border border-gray-100 group cursor-pointer">

            <div className="relative w-[351px] h-[240px] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover "
                />


                <div className="absolute top-1 left-2 right-2 flex items-center justify-between">
                    <div className="flex mb-3 items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md">
                        <img src={ratingImg} alt="rating" className="w-4 h-4" />
                        <span className="text-[14px]  text-white">{rating}</span>
                        <span className="text-[10px] text-white font-medium">({totalReviews})</span>
                    </div>

                    <button className=" bg-black/20 backdrop-blur-md rounded-md  text-white">
                        <img src={heart} alt="heart" className="w-8 h-8" />
                    </button>
                </div>
            </div>


            <div className="p-5 space-y-3">
                <h3 className="text-[16px] font-bold text-[#000000]">
                    {title}
                </h3>

                <div className="flex items-center gap-2 text-[#686262]">
                    <img src={addressImg} alt="address" className="w-5 h-5" />
                    <p className="text-[14px] font-medium text-[#686262] truncate">{address}</p>
                </div>

                <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-[16px] font-semibold text-[#FF3A44] font-outfit">{price}</span>
                    <span className="text-[12px] font-medium text-[#686262]">/day</span>
                </div>
            </div>
        </div>
    )
}

export default RentalsCard;