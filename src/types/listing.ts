export interface ListingReview {
    id: string;
    rating: number;
    comment: string;
    userName: string;
    userLocation: string;
    userImage: string;
}

export interface VendorInfo {
    vendorName: string;
    vendorImage: string;
    rating: number;
    totalOrders: number;
}

export interface ListingSpecification {
    brand?: string;
    model?: string;
    powerOutput?: string;
    condition?: string;
    weight?: string;
    usageType?: string;
    connectivity?: string;
    batteryLife?: string;
    waterResistance?: string;
    dimensions?: string;
    [key: string]: string | undefined;
}

export interface SpaceDetails {
    spaceType: string;
    maximumCapacity: string;
    stageAvailable: string;
    powerSupply: string;
    parking: string;
    [key: string]: string | undefined;
}

export interface Listing {
    id: string;
    title: string;
    address: string;
    price: string;
    image: string;
    images: string[];
    rating: number;
    totalReviews: number;
    category: string;
    type: string;
    overview: string;
    whatsIncluded?: string[];
    whatsNotIncluded?: string[];
    rulesAndUsageGuidelines?: string[];
    venueHighlights?: string[];
    specification?: ListingSpecification;
    spaceDetails?: SpaceDetails;
    pickupLocation?: string;
    vendorInfo: VendorInfo;
    reviews: ListingReview[];
}
