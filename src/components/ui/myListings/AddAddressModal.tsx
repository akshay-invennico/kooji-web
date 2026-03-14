/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Button from "@/components/ui/button/Button";

interface AddAddressModalProps {
  onClose: () => void;
  onSave: (address: any) => void;
}

const AddAddressModal: React.FC<AddAddressModalProps> = ({ onClose, onSave }) => {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving and returning address data
    onSave({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
      <div
        className="w-full max-w-[640px] bg-white rounded-xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-6 sm:px-8 sm:py-8 flex-none">
          <h2 className="text-[20px] font-semibold text-[#000000] font-outfit">Add New Address</h2>
        </div>

        <div className="px-6 pb-6 sm:px-8 sm:pb-8 flex-1 overflow-y-auto">
          <form id="address-form" onSubmit={handleSave} className="flex flex-col gap-5 sm:gap-6">

            {/* Country */}
            <div>
              <label className="block text-[14px] font-medium text-[#000000] mb-2">Country</label>
              <div className="w-full rounded-md border border-[#F0EFEF] px-4 py-3 bg-white transition-all">
                <input
                  type="text"
                  placeholder="United Kingdom"


                  className="w-full bg-transparent border-none outline-none text-[14px] text-[#000000] placeholder:text-[#F0EFEF] font-medium cursor-default"
                />
              </div>
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-[14px] font-medium text-[#000000] mb-2">Street Address</label>
              <div className="w-full rounded-md border border-[#F0EFEF] px-4 py-3 bg-white transition-all">
                <input
                  type="text"
                  placeholder="Street/Apartment/Villa/Landmark.."
                  className="w-full bg-transparent border-none outline-none text-[14px] text-[#000000] placeholder:text-[#F0EFEF]"
                />
              </div>
            </div>

            {/* City, State, Zip Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-2">City</label>
                <div className="w-full rounded-md border border-[#F0EFEF] px-4 py-3 bg-white transition-all">
                  <input
                    type="text"
                    placeholder="e.g. Manchester"
                    className="w-full bg-transparent border-none outline-none text-[14px] text-[#000000] placeholder:text-[#F0EFEF]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-2">State</label>
                <div className="w-full rounded-md border border-[#F0EFEF] px-4 py-3 bg-white transition-all">
                  <input
                    type="text"
                    placeholder="e.g. Greater London"
                    className="w-full bg-transparent border-none outline-none text-[14px] text-[#000000] placeholder:text-[#F0EFEF]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-2">Zip / Postal Code</label>
                <div className="w-full rounded-md border border-[#F0EFEF] px-4 py-3 bg-white transition-all">
                  <input
                    type="text"
                    placeholder="e.g. W1D 2EH"
                    className="w-full bg-transparent border-none outline-none text-[14px] text-[#000000] placeholder:text-[#F0EFEF]"
                  />
                </div>
              </div>
            </div>

            {/* Google Map URL */}
            <div>
              <label className="block text-[14px] font-medium text-[#000000] mb-2">Google Map URL</label>
              <div className="w-full rounded-md border border-[#F0EFEF] px-4 py-3 bg-white transition-all">
                <input
                  type="text"
                  placeholder="Copy and Paste Map URL here"
                  className="w-full bg-transparent border-none outline-none text-[14px] text-[#000000] placeholder:text-[#F0EFEF]"
                />
              </div>
            </div>

          </form>
        </div>

        <div className="p-6 sm:px-8 sm:py-6 flex-none flex items-center justify-end gap-6 bg-white border-t border-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="text-[#000000] font-medium text-[14px] sm:text-[15px] transition-colors"
          >
            Cancel
          </button>
          <Button
            type="submit"
            form="address-form"
            variant="primary"
            className="bg-[#FF3A44] px-6 py-2.5 rounded-md border-none font-bold"
          >
            Add Address
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddAddressModal;
