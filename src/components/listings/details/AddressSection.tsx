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
        <section className="bg-white rounded-lg border border-[#F0EFEF] p-4 md:p-6 mt-2">
            <div className="flex items-start gap-4 mb-6">
                <div >
                    <img src="/icons/address/truck.svg" alt="delivery" className="w-10 h-10" />
                </div>
                <div>
                    <h3 className="text-[12px] font-medium text-[#000000] leading-tight">Delivery Address</h3>
                    <p className="text-[12px] text-[#686262] font-medium">Choose Where You Want To Receive This Booking</p>
                </div>
            </div>

            <div className="space-y-6 ml-0 md:ml-12">
                <div>
                    <label className="block text-[14px] font-semibold text-[#686262] mb-3">Delivery Address</label>
                    <div className="flex items-center gap-3">
                        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                            <img src="/icons/details/deliveryAddressIcon.svg" alt="" />
                        </div>
                        <p className="text-[14px] font-bold text-gray-900 truncate">
                            {selectedAddress.recipientName}, {selectedAddress.street1}, {selectedAddress.city}, {selectedAddress.zipCode}..
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 text-[#009FFD] text-[14px] font-medium"
                >
                    <Plus size={20} className="text-[#009FFD]" /> Add New Address
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