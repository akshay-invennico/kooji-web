import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PriceBreakdownCard from "@/components/ui/listingDetails/PriceBreakdownCard";

interface PriceBreakdownSectionProps {
    price: number;
    bookingDays: number;
    showBreakdown: boolean;
}

const PriceBreakdownSection: React.FC<PriceBreakdownSectionProps> = ({ price, bookingDays, showBreakdown }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleBookNow = () => {
        const params = new URLSearchParams();
        const listingId = window.location.pathname.split('/').pop();
        if (listingId) params.append('listingId', listingId);
        
        const start = searchParams.get('start');
        const end = searchParams.get('end');
        if (start) params.append('start', start);
        if (end) params.append('end', end);

        router.push(`/checkout?${params.toString()}`);
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