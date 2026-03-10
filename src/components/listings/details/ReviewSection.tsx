import React, { useState } from "react";
import ReviewCard from "@/components/ui/listingDetails/ReviewCard";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewSectionProps {
    overallRating: number;
    totalReviews: number;
    reviews: any[];
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
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-100">
            <h2 className="text-2xl font-bold text-[#111111] mb-8">Reviews & Ratings</h2>
            
            <div className="bg-white border border-gray-100 rounded-xl p-8 mb-12">
                <p className="text-gray-900 font-bold mb-6">Overall Rating</p>
                <div className="flex items-center gap-4">
                    <Star size={36} className="text-orange-400 fill-orange-400" />
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-[#111111]">{overallRating}</span>
                        <span className="text-gray-400 font-medium ml-2">Out of 5 (Based on {totalReviews} Reviews)</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-[#111111]">Reviews</h3>
                {!isShowAll && reviewList.length > 2 && (
                    <div className="flex gap-4">
                        <button 
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`p-2 border border-gray-200 rounded-full transition-colors ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-50"}`}
                        >
                            <ChevronLeft size={20} className="text-gray-400" />
                        </button>
                        <button 
                            onClick={handleNext}
                            disabled={currentIndex + 2 >= reviewList.length}
                            className={`p-2 border border-gray-200 rounded-full transition-colors ${currentIndex + 2 >= reviewList.length ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-50"}`}
                        >
                            <ChevronRight size={20} className="text-[#111111]" />
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
                    className="bg-[#FFF5F5] text-[#FF5A5F] px-8 py-3 rounded-md font-bold text-sm hover:bg-[#FFEAEA] transition-colors"
                >
                    {isShowAll ? "Show less" : "Show all Reviews"}
                </button>
            )}
        </section>
    );
};

export default ReviewSection;