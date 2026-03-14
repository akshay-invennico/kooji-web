"use client";

import React from 'react';
import ReviewCard from '@/components/ui/listingDetails/ReviewCard';
import { Star } from 'lucide-react';

const ReviewsPage = () => {
    const reviews = [
        {
            id: 1,
            userName: "Sarah Jenkins",
            userLocation: "California, USA",
            userImage: "/assets/dashboard.jpg",
            rating: 5,
            comment: "Absolutely amazing service! The speakers were in perfect condition and the pickup process was so smooth. Highly recommended for any event."
        },
        {
            id: 2,
            userName: "Michael Chen",
            userLocation: "New York, USA",
            userImage: "/assets/dashboard.jpg",
            rating: 4,
            comment: "The equipment was great and the vendor was very professional. Had a slight delay in coordination but overall a very positive experience."
        },
        {
            id: 3,
            userName: "Emma Wilson",
            userLocation: "London, UK",
            userImage: "/assets/dashboard.jpg",
            rating: 5,
            comment: "Perfect for our weekend gig. The quality of the sound was professional-grade. Will definitely be renting again!"
        },
        {
            id: 4,
            userName: "James Rodriguez",
            userLocation: "Madrid, Spain",
            userImage: "/assets/dashboard.jpg",
            rating: 5,
            comment: "Excellent communication and very flexible with the timing. The gear worked flawlessly throughout the entire event."
        },
        {
            id: 5,
            userName: "Aria Taylor",
            userLocation: "Sydney, Australia",
            userImage: "/assets/dashboard.jpg",
            rating: 4,
            comment: "Very happy with the rental. The process was straightforward. The item had some minor wear but functioned perfectly."
        },
        {
            id: 6,
            userName: "Liam Brown",
            userLocation: "Toronto, Canada",
            userImage: "/assets/dashboard.jpg",
            rating: 5,
            comment: "Best platform for equipment rentals. The verification process gives peace of mind and the community is very helpful."
        }
    ];

    return (
        <div className="bg-[#FFFFFF] min-h-screen font-outfit pb-20">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="mb-10">
                    <h1 className="text-[28px] font-bold text-[#000000] mb-2 font-outfit">My Reviews</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
                            <span className="text-[18px] font-bold text-[#000000]">4.9</span>
                        </div>
                        <span className="text-[14px] text-[#A39E9E] font-medium">• Total 128 Reviews</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            rating={review.rating}
                            comment={review.comment}
                            userName={review.userName}
                            userLocation={review.userLocation}
                            userImage={review.userImage}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;