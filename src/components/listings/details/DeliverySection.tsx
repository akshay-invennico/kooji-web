import React from "react";
import DeliveryCard from "@/components/ui/listingDetails/DeliveryCard";

interface DeliverySectionProps {
  pickupLocation: string;
}

const DeliverySection: React.FC<DeliverySectionProps> = ({ pickupLocation }) => {
  const conditions = [
    "Delivery availability depends on vendor location and schedule",
    "Delivery charges vary based on distance and load",
    "Timely pickup and return are required to avoid late fees",
    "Equipment must be returned in original condition",
    "On-site setup does not include operation unless specified",
  ];

  return (
    <section className=" pb-2 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-[20px] font-semibold text-[#000000] mb-4">Delivery & Fulfillment</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-[16px] font-semibold text-[#000000] mb-2">Delivery Available</h3>
          <p className="text-[#686262] font-medium text-[14px] leading-relaxed">
            Delivery supported within a 15–25 mile radius (distance-based fees may apply).
          </p>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold text-[#000000] mb-2">Pickup Available</h3>
          <p className="text-[#686262] font-medium text-[14px] mb-3 leading-relaxed">
            Pickup from vendor location after booking confirmation.
          </p>
          <DeliveryCard pickupLocation={pickupLocation} />
        </div>

        <div className="pt-4">
          <h3 className="text-[16px] font-semibold text-[#000000] mb-2">Delivery & Fulfillment Conditions</h3>
          <ul className="space-y-4">
            {conditions.map((condition, index) => (
              <li key={index} className="flex items-start gap-4 text-[#686262] font-medium text-[14px]">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                <span className="leading-relaxed">{condition}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;