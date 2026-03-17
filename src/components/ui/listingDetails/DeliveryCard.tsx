import React from "react";

interface DeliveryCardProps {
  pickupLocation: string;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({ pickupLocation }) => {
  return (
    <div className="border border-[#F0EFEF] rounded-lg p-3 bg-white  max-w-3xl">
      <p className="text-[#686262] font-medium text-[14px] mb-2">Pickup Location:</p>
      <p className="text-[#000000] font-semibold text-[16px] leading-relaxed">
        {pickupLocation}
      </p>
    </div>
  );
};

export default DeliveryCard;