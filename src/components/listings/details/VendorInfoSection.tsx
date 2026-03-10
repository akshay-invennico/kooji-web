import React from "react";
import VendorInfoCard from "@/components/ui/listingDetails/VendorInfoCard";

interface VendorInfo {
    vendorName: string;
    vendorImage: string;
    rating: number;
    totalOrders: number;
}

interface VendorInfoSectionProps {
    vendorInfo: VendorInfo;
}

const VendorInfoSection: React.FC<VendorInfoSectionProps> = ({ vendorInfo }) => {
    return (
        <section>
            <VendorInfoCard
                vendorName={vendorInfo.vendorName}
                vendorImage={vendorInfo.vendorImage}
                rating={vendorInfo.rating}
                totalOrders={vendorInfo.totalOrders}
            />
        </section>
    );
};

export default VendorInfoSection;