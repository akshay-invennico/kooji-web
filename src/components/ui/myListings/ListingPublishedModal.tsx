"use client";

import Button from "@/components/ui/button/Button";

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
      <div className="relative w-full max-w-[800px] max-h-[550px] bg-white rounded-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="p-10 flex flex-col items-center">
          <h2 className="text-[20px] font-semibold text-[#000000] mb-8 self-start font-outfit">Listing Published Successfully</h2>

          {/* Success Icon */}
          <div className="relative mb-12">
            <div>
              <img
                src="/icons/publishedIcon.svg"
                alt="published"
                width={200}
                height={200}
              />
            </div>
          </div>

          <p className="text-[#000000] text-[14px] font-medium text-start leading-relaxed max-w-3xl mb-12">
            Your listing is now live and visible to customers. You can start receiving booking requests right away. Manage availability, pricing, and bookings anytime from your dashboard.
          </p>

          <div className="w-full flex items-center justify-end gap-6">
            <button
              onClick={onGoToDashboard}
              className="text-[#000000] text-[16px] font-semibold transition-colors"
            >
              Go to Dashboard
            </button>
            <Button
              variant="primary"
              onClick={onViewListing}
              className="bg-[#FF3A44] text-white rounded-md px-12 py-3.5 h-auto border-none font-bold text-[16px] min-w-[180px]"
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
