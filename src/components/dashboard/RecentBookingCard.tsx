"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MoreVertical } from 'lucide-react';
import CancelBookingModal from '../ui/modal/CancelBookingModal';

interface RecentBookingCardProps {
  bookingId?: string | number;
  image: string;
  title: string;
  renterName: string;
  date: string;
  payment: string;
  location: string;
  status: 'Upcoming' | 'In Transit' | 'Completed' | 'Cancelled';
  onViewBooking?: (id?: string | number) => void;
  onCancelBooking?: (id?: string | number) => void;
}

const RecentBookingCard: React.FC<RecentBookingCardProps> = ({
  bookingId,
  image,
  title,
  renterName,
  date,
  payment,
  location,
  status,
  onViewBooking,
  onCancelBooking,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

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
    <>
      {showCancelModal && (
        <CancelBookingModal
          bookingId={String(bookingId || "BK-10452")}
          renterName={renterName}
          eventDate={date}
          service={title}
          onClose={() => setShowCancelModal(false)}
          onConfirm={(reason, details) => {
            console.log("Cancelling booking:", { bookingId, reason, details });
            onCancelBooking?.(bookingId);
            setShowCancelModal(false);
          }}
        />
      )}

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
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-1 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <MoreVertical className="w-5 h-5 text-[#686262]" />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-[#F0EFEF] overflow-hidden z-20">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        onViewBooking?.(bookingId);
                      }}
                      className="w-full flex items-center px-4 py-3 text-[14px] font-medium text-[#000000] hover:bg-gray-50 transition-colors font-outfit text-left"
                    >
                      View Booking
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setShowCancelModal(true);
                      }}
                      className="w-full flex items-center px-4 py-3 text-[14px] font-medium text-[#000000] hover:bg-red-50 transition-colors border-t border-[#F0EFEF] font-outfit text-left"
                    >
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
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
    </>
  );
};

export default RecentBookingCard;
