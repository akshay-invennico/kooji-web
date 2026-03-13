"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoreVertical, MapPin } from "lucide-react";
import Icon from "../icon/Icon";

const DELETE_LISTING_REASONS = [
  "I'm no longer offering this service",
  "I've sold or disposed of this equipment",
  "I'm taking a break from bookings",
  "I'm not receiving enough inquiries",
  "Pricing isn't competitive",
  "Managing bookings is difficult",
  "I created this listing by mistake",
  "I'm moving to a different location",
  "Other",
];

interface DeleteListingModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteListingModal: React.FC<DeleteListingModalProps> = ({ onClose, onConfirm }) => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [otherReason, setOtherReason] = useState("");
  const [step, setStep] = useState<1 | 2>(1);

  const toggleReason = (reason: string) => {
    setSelectedReasons(prev =>
      prev.includes(reason) ? prev.filter(r => r !== reason) : [...prev, reason]
    );
  };

  const showTextarea = selectedReasons.includes("Other");

  // Step 2: Confirm deletion
  if (step === 2) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div className="relative z-10 bg-white rounded-2xl w-full max-w-[480px] shadow-2xl p-8">
          <h3 className="text-[20px] font-semibold text-[#000000] font-outfit mb-3">Confirm Delete Listing</h3>
          <p className="text-[#686262] text-[14px] font-medium font-outfit leading-relaxed mb-8">
            Deleting this listing will remove it from public search results. Existing confirmed bookings will not be affected.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onClose}
              className="py-4 text-[16px] font-medium font-outfit text-[#000000] bg-[#F5F3F4] hover:bg-gray-200 rounded-md transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="py-4 text-[16px] font-medium font-outfit text-white bg-[#C5161D] hover:bg-[#B01820] rounded-md transition-all"
            >
              Confirm Deletion
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Reason selection
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-2xl w-full max-w-[520px] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-6 py-5 border-b border-dashed border-gray-200">
          <h3 className="text-[20px] font-semibold text-[#000000] font-outfit">Delete Listing</h3>
        </div>

        {/* Body */}
        <div className="px-6 py-5 ">
          <p className="text-[16px] font-semibold text-[#000000] font-outfit mb-4">
            Please let us know why you&apos;re deleting this listing.
          </p>

          <div className="space-y-3">
            {DELETE_LISTING_REASONS.map((reason) => {
              const isChecked = selectedReasons.includes(reason);
              return (
                <label
                  key={reason}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleReason(reason)}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all shrink-0 ${isChecked ? "bg-[#FF3A44] border-[#FF3A44]" : "border-gray-300 bg-white"
                      }`}
                  >
                    {isChecked && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-[14px] font-outfit ${isChecked ? "text-[#000000] font-medium" : "text-[#686262]"}`}>
                    {reason}
                  </span>
                </label>
              );
            })}
          </div>

          {showTextarea && (
            <div className="mt-5">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[14px] font-medium text-[#000000] font-outfit">Reason</span>
                <span className="text-[12px] text-[#A39E9E] font-outfit">(Character Limit: 250)</span>
              </div>
              <textarea
                value={otherReason}
                onChange={e => setOtherReason(e.target.value.slice(0, 250))}
                rows={4}
                placeholder="Please share your reason."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[14px] font-outfit text-[#000000] placeholder:text-[#D4D0D0] focus:outline-none focus:border-[#FF3A44] resize-none transition-all"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="grid grid-cols-2 gap-3 px-4 pb-5">
          <button
            type="button"
            onClick={onClose}
            className="py-4 text-[16px] font-medium font-outfit text-[#000000] bg-[#F5F3F4] hover:bg-gray-200 rounded-md transition-all"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={selectedReasons.length === 0}
            onClick={() => setStep(2)}
            className="py-4 text-[16px] font-medium font-outfit text-white bg-[#FF3A44] hover:bg-[#E0343C] rounded-md transition-all disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export interface MyListingCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string | number;
  lastUpdate: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const MyListingCard: React.FC<MyListingCardProps> = ({
  id,
  image,
  title,
  location,
  price,
  lastUpdate,
  onEdit,
  onDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {showDeleteModal && (
        <DeleteListingModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => onDelete?.(id)}
        />
      )}

      <div className="flex flex-col rounded-xl overflow-hidden bg-white border border-[#F5F3F4]">
        {/* Image Container */}
        <div className="relative w-full h-48 sm:h-52">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />

          {/* 3 Dots Menu */}
          <div className="absolute top-3 right-3" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-black/40 text-white hover:bg-black/60 transition-colors focus:outline-none"
            >
              <Icon component={MoreVertical} size="md" />
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-20">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onEdit?.(id);
                  }}
                  className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Edit Listing
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDeleteModal(true);
                  }}
                  className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-50"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex flex-col gap-3">
          <div>
            <h3 className="text-base font-bold text-gray-900 line-clamp-1">{title}</h3>
            <div className="flex items-center text-gray-500 mt-1.5 text-xs sm:text-sm">
              <Icon component={MapPin} size="sm" className="mr-1.5 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          </div>

          <div className="flex items-end justify-between mt-1">
            <div className="flex items-baseline">
              <span className="text-primary font-bold text-lg">{typeof price === 'string' ? price : `$${price}`}</span>
              <span className="text-gray-500 text-xs sm:text-sm ml-1">/day</span>
            </div>
            <span className="text-gray-400 text-[10px] sm:text-xs font-medium">
              Last Update: {lastUpdate}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyListingCard;
