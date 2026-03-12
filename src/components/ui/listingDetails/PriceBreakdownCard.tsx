import React from "react";

interface PriceBreakdownCardProps {
    price: number;
    bookingDays: number;
    showBreakdown?: boolean;
    onBookNow: () => void;
}

const PLATFORM_CHARGES = 5;
const DELIVERY_CHARGES = 20;
const DISCOUNT = 8;

const PriceBreakdownCard: React.FC<PriceBreakdownCardProps> = ({ price, bookingDays, showBreakdown = false, onBookNow }) => {
    const subTotal = price * bookingDays + PLATFORM_CHARGES + DELIVERY_CHARGES;
    const payableAmount = subTotal - DISCOUNT;

    const Row = ({
        label,
        value,
        bold,
        green,
        labelGreen,
    }: {
        label: string;
        value: string;
        bold?: boolean;
        green?: boolean;
        labelGreen?: boolean;
    }) => (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <span className={`text-[14px] ${bold ? "font-bold text-gray-900" : labelGreen ? "font-semibold text-green-500" : "font-medium text-gray-500"}`}>
                {label}
            </span>
            <span className={`text-[14px] ${bold ? "font-bold text-gray-900" : green ? "font-semibold text-green-500" : "font-semibold text-gray-900"}`}>
                {value}
            </span>
        </div>
    );

    return (
        <div className="bg-white rounded-lg border border-[#F0EFEF] p-6 mb-2">
            {showBreakdown && (
                <>
                    <h3 className="text-[18px] font-semibold text-[#000000] mb-2">Price Breakdown</h3>
                    <div className="mt-2 mb-4 text-[#686262]">
                        <Row label="Price" value={`$${price}`} />
                        <Row label="Booking Days" value={`${bookingDays} ${bookingDays === 1 ? "Day" : "Days"}`} />
                        <Row label="Platform Charges" value={`$${PLATFORM_CHARGES}`} />
                        <Row label="Delivery Charges" value={`$${DELIVERY_CHARGES}`} />
                        <Row label="Sub Total" value={`$${subTotal}`} />
                        <Row label="Discount" value={`-$${DISCOUNT}`} green labelGreen />
                        <Row label="Payable Amount" value={`$${payableAmount}`} bold />
                    </div>
                </>
            )}

            <button
                onClick={onBookNow}
                className="w-full py-4 rounded-lg bg-[#C5161D]  text-white text-[14px] font-semibold tracking-wide"
            >
                Book Now
            </button>
        </div>
    );
};

export default PriceBreakdownCard;