"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/button/Button";

interface CancelBookingModalProps {
  bookingId: string;
  renterName: string;
  eventDate: string;
  service: string;
  onClose: () => void;
  onConfirm: (reason: string, details?: string) => void;
}

const CANCEL_REASONS = [
  "Changed my mind about the date",
  "Unexpected personal circumstances",
  "Scheduling conflict with another event",
  "Equipment malfunction during setup",
  "Cancellation requested by the client",
  "Issues with payment processing",
  "Other",
];

const CancelBookingModal: React.FC<CancelBookingModalProps> = ({
  bookingId,
  renterName,
  eventDate,
  service,
  onClose,
  onConfirm,
}) => {
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [otherDetails, setOtherDetails] = useState<string>("");

  const handleConfirm = () => {
    if (selectedReason) {
      onConfirm(selectedReason, selectedReason === "Other" ? otherDetails : undefined);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div
        className="w-full max-w-[600px] bg-white rounded-[20px] p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-semibold text-[#000000] font-outfit">Cancel Booking?</h2>
            <p className="text-[14px] font-medium text-[#686262] font-outfit leading-relaxed">
              You are about to cancel this confirmed booking. Please let us know the reason for cancellation.
            </p>
          </div>
          <button onClick={onClose} className="text-[#686262] hover:text-[#000000] transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-y-4 py-4 border-b border-[#F0EFEF]">
          <div className="flex flex-row gap-3">
            <span className="text-[14px] text-[#A39E9E] font-medium font-outfit">Booking ID</span>
            <span className="text-[14px] font-bold text-[#000000] font-outfit">#{bookingId}</span>
          </div>
          <div className="flex flex-row gap-3">
            <span className="text-[14px] text-[#A39E9E] font-medium font-outfit">Renter</span>
            <span className="text-[14px] font-bold text-[#000000] font-outfit">{renterName}</span>
          </div>
          <div className="flex flex-row gap-3">
            <span className="text-[14px] text-[#A39E9E] font-medium font-outfit">Event Date</span>
            <span className="text-[14px] font-bold text-[#000000] font-outfit">{eventDate}</span>
          </div>
          <div className="flex flex-row gap-3">
            <span className="text-[14px] text-[#A39E9E] font-medium font-outfit">Service</span>
            <span className="text-[14px] font-bold text-[#000000] font-outfit">{service}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-semibold text-[#000000] font-outfit">Select a reason for cancellation</h3>
          <div className="flex flex-col gap-3">
            {CANCEL_REASONS.map((reason) => (
              <label key={reason} className="flex items-center gap-3 cursor-pointer group">
                <div className={`relative w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${selectedReason === reason ? "bg-[#FF3A44] border-[#FF3A44]" : "border-[#A39E9E] group-hover:border-[#FF3A44]"
                  }`}>
                  <input
                    type="radio"
                    name="cancelReason"
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                    checked={selectedReason === reason}
                    onChange={() => setSelectedReason(reason)}
                  />
                  {selectedReason === reason && (
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.5L4.5 8L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={`text-[14px] font-medium font-outfit ${selectedReason === reason ? "text-[#000000]" : "text-[#686262]"
                  }`}>
                  {reason}
                </span>
              </label>
            ))}
          </div>
        </div>

        {selectedReason === "Other" && (
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-[14px] font-medium text-[#686262] font-outfit">Reason</label>
              <span className="text-[12px] text-[#A39E9E] font-medium font-outfit">(Character Limit: 250)</span>
            </div>
            <textarea
              placeholder="Please share your reason."
              className="w-full h-32 p-4 rounded-lg border border-[#F0EFEF] focus:outline-none focus:border-[#FF3A44] text-[14px] font-outfit text-[#000000] resize-none"
              maxLength={250}
              value={otherDetails}
              onChange={(e) => setOtherDetails(e.target.value)}
            />
          </div>
        )}

        <div className="flex gap-4 mt-2">
          <button
            onClick={onClose}
            className="flex-1 py-4 bg-[#F5f5f5] text-[#000000] font-bold text-[16px] rounded-xl hover:bg-gray-200 transition-colors font-outfit"
          >
            Close
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedReason || (selectedReason === "Other" && !otherDetails)}
            className={`flex-1 py-4 text-white font-semibold text-[16px] rounded-sm transition-all font-outfit ${!selectedReason || (selectedReason === "Other" && !otherDetails)
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#D12028] hover:bg-[#b01b22]"
              }`}
          >
            Confirm Cancelation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelBookingModal;
