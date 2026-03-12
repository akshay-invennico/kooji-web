import React, { useState } from "react";
import ReviewCard from "@/components/ui/listingDetails/ReviewCard";
import { Star, MoveRight, MoveLeft } from "lucide-react";
import { ListingReview } from "@/types/listing";

interface ReviewSectionProps {
    overallRating: number;
    totalReviews: number;
    reviews: ListingReview[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ overallRating, totalReviews, reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShowAll, setIsShowAll] = useState(false);

    if (!overallRating && (!reviews || reviews.length === 0)) return null;

    const reviewList = reviews || [];

    const handleNext = () => {
        if (currentIndex + 2 < reviewList.length) {
            setCurrentIndex(currentIndex + 2);
        }
    };

    const handlePrev = () => {
        if (currentIndex - 2 >= 0) {
            setCurrentIndex(currentIndex - 2);
        }
    };

    return (
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto border-t border-[#F0EFEF]">
            <h2 className="text-[20px] font-semibold text-[#000000] mb-6">Reviews & Ratings</h2>

            <div className="bg-white border border-[#F0EFEF] rounded-lg p-8 mb-6">
                <p className="text-[#000000] text-[16px] font-semibold mb-6">Overall Rating</p>
                <div className="flex items-center gap-4">
                    <Star size={30} className="text-orange-400 fill-orange-400" />
                    <div className="flex items-baseline gap-2">
                        <span className="text-[40px] font-bold text-[#000000]">{overallRating}</span>
                        <span className="text-[#686262] text-[14px] font-medium ml-2">Out of 5 (Based on {totalReviews} Reviews)</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <h3 className="text-[16px] font-semibold text-[#000000]">Reviews</h3>
                {!isShowAll && reviewList.length > 2 && (
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`p-2 ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-50"}`}
                        >
                            <MoveLeft size={24} className="text-gray-400" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex + 2 >= reviewList.length}
                            className={`p-2 ${currentIndex + 2 >= reviewList.length ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-50"}`}
                        >
                            <MoveRight size={24} className="text-[#111111]" />
                        </button>
                    </div>
                )}
            </div>


            <div className={`grid grid-cols-1 ${isShowAll ? "md:grid-cols-2" : "md:grid-cols-2"} lg:grid-cols-2 gap-6 mb-8`}>
                {reviewList.length > 0 ? (
                    (isShowAll ? reviewList : reviewList.slice(currentIndex, currentIndex + 2)).map((review) => (
                        <ReviewCard
                            key={review.id}
                            rating={review.rating}
                            comment={review.comment}
                            userName={review.userName}
                            userLocation={review.userLocation}
                            userImage={review.userImage}
                        />
                    ))
                ) : (
                    <p className="text-gray-400 italic">No detailed reviews available for this listing yet.</p>
                )}
            </div>

            {reviewList.length > 2 && (
                <button
                    onClick={() => setIsShowAll(!isShowAll)}
                    className="bg-[#FFF8F8] text-[#FF3A44] px-8 py-3 rounded font-semibold text-[14px]"
                >
                    {isShowAll ? "Show less" : "Show all Reviews"}
                </button>
            )}
        </section>
    );
};

export default ReviewSection;