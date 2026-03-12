import React from "react";
import { Star } from "lucide-react";

interface ReviewCardProps {
    rating: number;
    comment: string;
    userName: string;
    userLocation: string;
    userImage: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ rating, comment, userName, userLocation, userImage }) => {
    return (
        <div className="bg-white border border-[#F0EFEF] rounded-lg p-6 h-full flex flex-col justify-between">
            <div>
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={18}
                            className={`${i < rating ? "text-orange-400 fill-orange-400" : "text-gray-200"}`}
                        />
                    ))}
                </div>
                <p className="text-[#000000] text-[14px] leading-relaxed mb-6 font-medium">
                    &quot;{comment}&quot;
                </p>
            </div>

            <div className="flex items-center gap-3">
                {userImage ? (
                    <img
                        src={userImage}
                        alt={userName}
                        className="w-12 h-12 rounded-full object-cover border border-gray-100"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(userName);
                        }}
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <Star size={16} />
                    </div>
                )}
                <div>
                    <h4 className="text-[#000000] font-medium text-[14px]">{userName}</h4>
                    <p className="text-[#686262]  font-medium text-[14px]">{userLocation}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;