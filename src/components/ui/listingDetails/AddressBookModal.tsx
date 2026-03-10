import React, { useState } from "react";
import { X, Plus, Home, Briefcase, Calendar, Scissors, Phone, MapPin, Check } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Address } from "@/types/address";
import AddressCard from "./AddressCard";

interface AddressBookModalProps {
    isOpen: boolean;
    onClose: () => void;
    savedAddresses: Address[];
    onSave: (address: Address) => void;
    onDelete: (id: string) => void;
    selectedAddressId?: string;
    onSelect: (id: string) => void;
}

const labelOptions = [
    { id: "Home", label: "Home", icon: "/icons/address/home.svg" },
    { id: "Office", label: "Office", icon: "/icons/address/office.svg" },
    { id: "Event Venue", label: "Event Venue", icon: "/icons/address/event.svg" },
    { id: "Studio", label: "Studio", icon: "/icons/address/studio.svg" },
];

const AddressSchema = Yup.object().shape({
    label: Yup.string().required("Label is required"),
    recipientName: Yup.string().required("Full name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    street1: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("ZIP/Postal code is required"),
    country: Yup.string().required("Country is required"),
});

const AddressBookModal: React.FC<AddressBookModalProps> = ({
    isOpen,
    onClose,
    savedAddresses,
    onSave,
    onDelete,
    selectedAddressId,
    onSelect,
}) => {
    const [editingAddress, setEditingAddress] = useState<Address | null>(null);

    const formik = useFormik({
        initialValues: editingAddress || {
            id: "",
            label: "Home" as Address["label"],
            recipientName: "",
            phoneNumber: "",
            street1: "",
            street2: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
            isDefault: false,
        },
        enableReinitialize: true,
        validationSchema: AddressSchema,
        onSubmit: (values) => {
            const newAddress = {
                ...values,
                id: values.id || Math.random().toString(36).substr(2, 9),
            };
            onSave(newAddress);
            formik.resetForm();
            setEditingAddress(null);
        },
    });

    if (!isOpen) return null;

    const handleEdit = (address: Address) => {
        setEditingAddress(address);
    };

    const handleCancelEdit = () => {
        setEditingAddress(null);
        formik.resetForm();
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            
            <div className="relative bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100 shrink-0">
                    <h2 className="text-[18px] md:text-[20px] font-semibold text-gray-900">Address Book</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row flex-1 overflow-auto h-full">
                    <div className="w-full md:w-[350px] p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-100 md:overflow-y-auto bg-gray-50/30 shrink-0">
                        <h3 className="text-[16px] font-semibold text-gray-900 mb-4">Saved Address</h3>
                        <div className="space-y-4 max-h-[250px] md:max-h-full overflow-y-auto pr-2 md:pr-0">
                            {savedAddresses.map((addr) => (
                                <AddressCard
                                    key={addr.id}
                                    address={addr}
                                    isSelected={selectedAddressId === addr.id}
                                    onSelect={onSelect}
                                    onEdit={handleEdit}
                                    onDelete={onDelete}
                                />
                            ))}
                            {savedAddresses.length === 0 && (
                                <div className="text-center py-10">
                                    <p className="text-gray-400 text-[14px]">No saved addresses yet.</p>
                                </div>
                            )}
                        </div>
                    </div>

                   
                    <div className="flex-1 p-4 md:p-8 md:overflow-y-auto">
                        <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-900 mb-4 md:mb-6">
                            {editingAddress ? "Edit Address" : "Add new Address"}
                        </h3>

                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            
                            <div>
                                <label className="block text-[14px] font-semibold text-gray-900 mb-3">Address Label</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {labelOptions.map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => formik.setFieldValue("label", opt.id)}
                                            className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${
                                                formik.values.label === opt.id
                                                    ? "border-[#FF4D4D] bg-[#FFF5F5]"
                                                    : "border-gray-100 bg-white hover:border-gray-200"
                                            }`}
                                        >
                                            <img src={opt.icon} alt={opt.label} className="w-6 h-6" />
                                            <span className={`text-[12px] font-semibold ${
                                                formik.values.label === opt.id ? "text-[#FF4D4D]" : "text-gray-500"
                                            }`}>
                                                {opt.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                           
                            <div>
                                <h4 className="text-[14px] font-semibold text-gray-900 mb-4">Recipient Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-semibold text-gray-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="recipientName"
                                            placeholder="e.g. Emily Carter"
                                            onChange={formik.handleChange}
                                            value={formik.values.recipientName}
                                            className="w-full h-12 px-4 rounded-lg border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#FF4D4D] outline-none transition-all text-[14px]"
                                        />
                                        {formik.errors.recipientName && formik.touched.recipientName && (
                                            <span className="text-[10px] text-red-500 ml-1">{formik.errors.recipientName as string}</span>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-semibold text-gray-700 ml-1">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="e.g. XXX XXX XX"
                                            onChange={formik.handleChange}
                                            value={formik.values.phoneNumber}
                                            className="w-full h-12 px-4 rounded-lg border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#FF4D4D] outline-none transition-all text-[14px]"
                                        />
                                        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                            <span className="text-[10px] text-red-500 ml-1">{formik.errors.phoneNumber as string}</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            
                            <div className="space-y-4">
                                <h4 className="text-[14px] font-semibold text-gray-900">Address Location</h4>
                                <div className="space-y-2">
                                    <label className="text-[12px] font-semibold text-gray-700 ml-1">Street Address (Line 1)</label>
                                    <input
                                        type="text"
                                        name="street1"
                                        placeholder="House/Building number, street name"
                                        onChange={formik.handleChange}
                                        value={formik.values.street1}
                                        className="w-full h-12 px-4 rounded-lg border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#FF4D4D] outline-none transition-all text-[14px]"
                                    />
                                    {formik.errors.street1 && formik.touched.street1 && (
                                        <span className="text-[10px] text-red-500 ml-1">{formik.errors.street1 as string}</span>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[12px] font-semibold text-gray-700 ml-1">Street Address (Line 2)</label>
                                    <input
                                        type="text"
                                        name="street2"
                                        placeholder="Apartment, suite, floor, unit"
                                        onChange={formik.handleChange}
                                        value={formik.values.street2}
                                        className="w-full h-12 px-4 rounded-lg border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#FF4D4D] outline-none transition-all text-[14px]"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-semibold text-gray-700 ml-1">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="e.g. Denver"
                                            onChange={formik.handleChange}
                                            value={formik.values.city}
                                            className="w-full h-12 px-4 rounded-lg border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#FF4D4D] outline-none transition-all text-[14px]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-semibold text-gray-700 ml-1">State</label>
                                        <input
                                            type="text"
                                            name="state"
                                            placeholder="e.g. Denver"
                                            onChange={formik.handleChange}
                                            value={formik.values.state}
                                            className="w-full h-12 px-4 rounded-lg border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#FF4D4D] outline-none transition-all text-[14px]"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-semibold text-gray-700 ml-1">ZIP / Postal Code</label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            placeholder="e.g. XXXXXX"
                                            onChange={formik.handleChange}
                                            value={formik.values.zipCode}
                                            className="w-full h-12 px-4 rounded-lg border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#FF4D4D] outline-none transition-all text-[14px]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-semibold text-gray-700 ml-1">Country</label>
                                        <input
                                            type="text"
                                            name="country"
                                            placeholder="e.g. United Kingdom"
                                            onChange={formik.handleChange}
                                            value={formik.values.country}
                                            className="w-full h-12 px-4 rounded-lg border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#FF4D4D] outline-none transition-all text-[14px]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="isDefault"
                                        checked={formik.values.isDefault}
                                        onChange={formik.handleChange}
                                        className="sr-only peer"
                                    />
                                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#FF4D4D]"></div>
                                </label>
                                <span className="text-[13px] font-semibold text-gray-700">Set as default delivery address</span>
                            </div>

                            <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100">
                                <button
                                    type="button"
                                    onClick={editingAddress ? handleCancelEdit : onClose}
                                    className="px-6 py-3 rounded-lg text-[14px] font-bold text-gray-500 hover:text-gray-900 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-10 py-3 rounded-lg text-[14px] font-bold text-white bg-[#FF4D4D] hover:bg-[#E64444] transition-all"
                                >
                                    {editingAddress ? "Update Address" : "Save Address"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressBookModal;
