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
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <h2 className="text-2xl font-bold text-[#111111] mb-8">Delivery & Fulfillment</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold text-[#111111] mb-2">Delivery Available</h3>
          <p className="text-gray-500 leading-relaxed">
            Delivery supported within a 15–25 mile radius (distance-based fees may apply).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#111111] mb-2">Pickup Available</h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Pickup from vendor location after booking confirmation.
          </p>
          <DeliveryCard pickupLocation={pickupLocation} />
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-bold text-[#111111] mb-4">Delivery & Fulfillment Conditions</h3>
          <ul className="space-y-4">
            {conditions.map((condition, index) => (
              <li key={index} className="flex items-start gap-4 text-gray-500">
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