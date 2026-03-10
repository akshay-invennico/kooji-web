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
        <div className="bg-white border border-gray-100 rounded-md p-6 h-full flex flex-col justify-between">
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
                <p className="text-[#111111] leading-relaxed mb-6 font-medium italic">
                    "{comment}"
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
                    <h4 className="text-[#111111] font-bold text-sm">{userName}</h4>
                    <p className="text-gray-400 text-xs">{userLocation}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;