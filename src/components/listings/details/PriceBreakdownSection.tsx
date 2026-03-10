import React from "react";
import PriceBreakdownCard from "@/components/ui/listingDetails/PriceBreakdownCard";

interface PriceBreakdownSectionProps {
    price: number;
    bookingDays: number;
    showBreakdown: boolean;
}

const PriceBreakdownSection: React.FC<PriceBreakdownSectionProps> = ({ price, bookingDays, showBreakdown }) => {
    const handleBookNow = () => {
        console.log("Book Now clicked!");
    };

    return (
        <section>
            <PriceBreakdownCard
                price={price}
                bookingDays={bookingDays}
                showBreakdown={showBreakdown}
                onBookNow={handleBookNow}
            />
        </section>
    );
};

export default PriceBreakdownSection;