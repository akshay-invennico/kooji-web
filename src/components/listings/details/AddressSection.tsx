import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Address } from "@/types/address";
import AddressBookModal from "@/components/ui/listingDetails/AddressBookModal";

const initialAddresses: Address[] = [
    {
        id: "1",
        label: "Home",
        recipientName: "Ms. Jane Doe",
        phoneNumber: "+1 234 567 890",
        street1: "Flat 3, 15 Maple Avenue",
        city: "OXFORD",
        state: "OXFORDSHIRE",
        zipCode: "OX1 1AB",
        country: "United Kingdom",
        isDefault: true,
    },
];

const AddressSection = ({ onAddressSelected }: { onAddressSelected?: (id: string) => void }) => {
    const [savedAddresses, setSavedAddresses] = useState<Address[]>(initialAddresses);
    const [selectedAddressId, setSelectedAddressId] = useState<string>(initialAddresses[0].id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const selectedAddress = savedAddresses.find((a) => a.id === selectedAddressId) || savedAddresses[0];

    const handleSelectAddress = (id: string) => {
        setSelectedAddressId(id);
        onAddressSelected?.(id);
    };

    const handleSaveAddress = (newAddress: Address) => {
        setSavedAddresses((prev) => {
            const index = prev.findIndex((a) => a.id === newAddress.id);
            if (index > -1) {
                const updated = [...prev];
                updated[index] = newAddress;
                return updated;
            }
            return [...prev, newAddress];
        });
        handleSelectAddress(newAddress.id);
    };

    const handleDeleteAddress = (id: string) => {
        setSavedAddresses((prev) => prev.filter((a) => a.id !== id));
        if (selectedAddressId === id && savedAddresses.length > 1) {
            const next = savedAddresses.find(a => a.id !== id)?.id || "";
            handleSelectAddress(next);
        }
    };

    return (
        <section className="bg-white rounded-lg border border-gray-100 p-6 mt-2">
            <div className="flex items-start gap-4 mb-6">
                <div >
                    <img src="/icons/address/truck.svg" alt="delivery" className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-[20px] font-semibold text-gray-900 leading-tight">Delivery Address</h3>
                    <p className="text-[14px] text-gray-500 font-medium">Choose Where You Want To Receive This Booking</p>
                </div>
            </div>

            <div className="space-y-6 ml-12">
                <div>
                    <label className="block text-[14px] font-semibold text-gray-400 mb-3">Delivery Address</label>
                    <div className="flex items-center gap-3">
                        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                            <div className="w-5 h-5 rounded-full border-2 border-[#FF4D4D] bg-white">
                                <div className="w-3.5 h-3.5  rounded-full bg-[#FF4D4D]" />
                            </div>
                        </div>
                        <p className="text-[14px] font-bold text-gray-900 truncate">
                            {selectedAddress.recipientName}, {selectedAddress.street1}, {selectedAddress.city}, {selectedAddress.zipCode}..
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 text-[#32B4FF] text-[15px] font-semibold"
                >
                    <Plus size={18} /> Add New Address
                </button>
            </div>

            <AddressBookModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                savedAddresses={savedAddresses}
                onSave={handleSaveAddress}
                onDelete={handleDeleteAddress}
                selectedAddressId={selectedAddressId}
                onSelect={handleSelectAddress}
            />
        </section>
    );
};

export default AddressSection;