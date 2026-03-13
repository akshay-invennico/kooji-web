import React from 'react';
import Image from 'next/image';
import { MoreVertical } from 'lucide-react';

interface RecentBookingCardProps {
  image: string;
  title: string;
  renterName: string;
  date: string;
  payment: string;
  location: string;
  status: 'Upcoming' | 'In Transit' | 'Completed' | 'Cancelled';
}

const RecentBookingCard: React.FC<RecentBookingCardProps> = ({
  image,
  title,
  renterName,
  date,
  payment,
  location,
  status
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Upcoming': return 'text-[#FF3A44]';
      case 'In Transit': return 'text-[#007AFF]';
      case 'Completed': return 'text-[#00B037]';
      case 'Cancelled': return 'text-[#686262]';
      default: return 'text-gray-500';
    }
  };

  const getStatusBg = () => {
    switch (status) {
      case 'Upcoming': return 'bg-[#FF3A44]';
      case 'In Transit': return 'bg-[#009FFD]';
      case 'Completed': return 'bg-[#3EC300]';
      case 'Cancelled': return 'bg-[#686262]';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-[#F0EFEF] flex flex-col md:flex-row gap-0 overflow-hidden">
      <div className="w-full md:w-60 h-50 shrink-0 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Details Area */}
      <div className="flex-1 flex flex-col p-5">
        {/* Header: Title and Status */}
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-[18px] font-bold text-[#000000] font-outfit">{title}</h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${getStatusBg()}`} />
              <span className={`text-[14px] font-semibold font-outfit ${getStatusColor()}`}>{status}</span>
            </div>
            <button className="p-1 hover:bg-gray-50 rounded-full transition-colors">
              <MoreVertical className="w-5 h-5 text-[#686262]" />
            </button>
          </div>
        </div>

        {/* Info Grid: Renter, Date, Payment */}
        <div className="flex flex-row justify-between items-start mb-4 max-w-2xl">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-[#A39E9E] font-medium font-outfit">Renter</span>
            <span className="text-[14px] font-semibold text-[#000000] font-outfit">{renterName}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-[#A39E9E] font-medium font-outfit">Date</span>
            <span className="text-[14px] font-semibold text-[#000000] font-outfit">{date}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-[#A39E9E] font-medium font-outfit">Payment</span>
            <span className="text-[14px] font-bold text-[#000000] font-outfit">${payment}</span>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex flex-col gap-1">
          <span className="text-[12px] text-[#A39E9E] font-medium font-outfit">Renters Location details</span>
          <div className="flex items-center gap-1.5">
            <Image src="/icons/details/locationIcon.svg" alt="Location" width={20} height={20} className="w-3.5 h-3.5" />
            <span className="text-[14px] font-medium text-[#000000] font-outfit">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBookingCard;
