import React from "react";
import { User, MapPin, Edit2, Trash2, Home, Briefcase, Calendar, Scissors } from "lucide-react";
import { Address } from "@/types/address";

interface AddressCardProps {
    address: Address;
    isSelected: boolean;
    onSelect: (id: string) => void;
    onEdit: (address: Address) => void;
    onDelete: (id: string) => void;
}

const labelIcons = {
    Home: <Home size={14} />,
    Office: <Briefcase size={14} />,
    "Event Venue": <Calendar size={14} />,
    Studio: <Scissors size={14} />,
};

const labelImages = {
    Home: "/icons/address/home.svg",
    Office: "/icons/address/office.svg",
    "Event Venue": "/icons/address/event.svg",
    Studio: "/icons/address/studio.svg",
};

const AddressCard: React.FC<AddressCardProps> = ({
    address,
    isSelected,
    onSelect,
    onEdit,
    onDelete,
}) => {
    return (
        <div
            onClick={() => onSelect(address.id)}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative ${isSelected ? "border-[#FF4D4D] bg-[#FFF5F5]" : "border-gray-100 bg-white"
                }`}
        >
            <div className="flex items-center gap-2 mb-1">
                <img src={labelImages[address.label]} alt={address.label} className="w-4 h-4" />
                <span className="text-[14px] font-semibold text-gray-900">{address.label}</span>
            </div>

            <div className="mb-1">
                <p className="text-[14px] font-bold text-gray-900 leading-tight">{address.recipientName}</p>
                <p className="text-[12px] text-gray-500 leading-snug">
                    {address.street1}, {address.street2 ? `${address.street2}, ` : ""}
                    {address.city}, {address.state}, {address.zipCode}
                </p>
            </div>

            <div className="flex items-center gap-4 mt-3">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit(address);
                    }}
                    className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <Edit2 size={13} /> Edit
                </button>
                <div className="w-[1px] h-3 bg-gray-200" />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(address.id);
                    }}
                    className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-[#FF4D4D] transition-colors"
                >
                    <Trash2 size={13} /> Delete
                </button>
            </div>
        </div>
    );
};

export default AddressCard;