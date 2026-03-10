export interface Address {
    id: string;
    label: "Home" | "Office" | "Event Venue" | "Studio";
    recipientName: string;
    phoneNumber: string;
    street1: string;
    street2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    isDefault: boolean;
}
