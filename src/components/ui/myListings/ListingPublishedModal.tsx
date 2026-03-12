"use client";

import React from "react";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import { Check } from "lucide-react";

interface ListingPublishedModalProps {
  onClose: () => void;
  onViewListing: () => void;
  onGoToDashboard: () => void;
}

const ListingPublishedModal: React.FC<ListingPublishedModalProps> = ({ 
  onClose, 
  onViewListing, 
  onGoToDashboard 
}) => {
  return (
    <div className="fixed inset-0 z-300 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <div className="p-10 flex flex-col items-center">
          <h2 className="text-[28px] font-bold text-gray-900 mb-12 self-start">Listing Published Successfully</h2>
          
          {/* Animated Success Icon */}
          <div className="relative mb-12">
            <div className="w-32 h-32 bg-[#4ADE80] rounded-[40px] rotate-45 flex items-center justify-center animate-bounce">
              <Icon 
                component={Check} 
                className="text-white -rotate-45" 
                size="lg" 
                strokeWidth={4}
              />
            </div>
            {/* Subtle decorative elements for premium feel */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#4ADE80]/20 rounded-full animate-ping" />
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-[#4ADE80]/30 rounded-full animate-pulse" />
          </div>

          <p className="text-gray-900 text-[17px] font-bold text-center leading-relaxed max-w-lg mb-16">
            Your listing is now live and visible to customers. You can start receiving booking requests right away. Manage availability, pricing, and bookings anytime from your dashboard.
          </p>

          <div className="w-full flex items-center justify-end gap-6">
            <button 
              onClick={onGoToDashboard}
              className="text-gray-500 hover:text-gray-900 text-[17px] font-bold transition-colors"
            >
              Go to Dashboard
            </button>
            <Button 
              variant="primary"
              onClick={onViewListing}
              className="bg-[#FE3B4C] hover:bg-red-600 text-white rounded-xl px-12 py-4 h-auto shadow-md shadow-red-200 font-bold text-[17px] min-w-[180px]"
            >
              View Listing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPublishedModal;
