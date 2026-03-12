import React from "react";
import { Star } from "lucide-react";

interface VendorInfoCardProps {
    vendorName: string;
    vendorImage: string;
    rating: number;
    totalOrders: number;
}

const VendorInfoCard: React.FC<VendorInfoCardProps> = ({ vendorName, vendorImage, rating, totalOrders }) => {
    // Derive a stable portrait index from vendorName so each vendor gets a consistent photo
    const nameHash = vendorName.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const portraitIndex = (nameHash % 70) + 1;
    const fallbackSrc = `https://randomuser.me/api/portraits/men/${portraitIndex}.jpg`;

    return (
        <div className="bg-[#F0EFEF] rounded-lg border border-[#F0EFEF] p-6 mt-2">
            <h3 className="text-[18px] font-semibold text-[#000000] mb-5">Vendor Info</h3>

            <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                    <img
                        src={fallbackSrc}
                        alt={vendorName}
                        className="w-16 h-16 rounded-full object-cover shrink-0"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(vendorName)}&size=64`;
                        }}
                    />
                    <div>
                        <p className="text-[18px] font-semibold text-[#000000] leading-tight mb-1">{vendorName}</p>
                        <div className="flex items-center gap-2 text-[14px] text-[#686262] font-medium mb-1">
                            <span>Total Orders: {totalOrders}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-400 inline-block" />
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <span className="font-medium text-[14px] text-[#686262]">{rating.toFixed(1)}</span>
                        </div>
                        <p className="text-[12px] text-[#686262] font-medium">Response time: Within an hour</p>
                    </div>
                </div>

                <img src="/icons/vendor/vendorVerify.svg" alt="verified" className="w-7 h-7 shrink-0" />
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-white border border-[#F0EFEF]">
                <img src="/icons/vendor/vendorMessage.svg" alt="message" className="w-5 h-5" />
                <span className="text-[14px] font-semibold text-[#FF3A44]">Message Vendor</span>
            </button>
        </div>
    );
};

export default VendorInfoCard;