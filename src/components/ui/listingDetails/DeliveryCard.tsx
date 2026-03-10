import React from "react";

interface DeliveryCardProps {
  pickupLocation: string;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({ pickupLocation }) => {
  return (
    <div className="border border-gray-200 rounded-md p-6 bg-white  max-w-3xl">
      <p className="text-gray-500 text-sm mb-2">Pickup Location:</p>
      <p className="text-[#111111] font-bold text-lg leading-relaxed">
        {pickupLocation}
      </p>
    </div>
  );
};

export default DeliveryCard;