"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { LISTINGS_DATA } from "@/data/listingsData"
import GallerySection from "@/components/listings/details/GallerySection"
import InfoSection from "@/components/listings/details/InfoSection"
import DescriptionSection from "@/components/listings/details/DescriptionSection"
import TrustSection from "@/components/listings/details/TrustSection"
import SpecificationSection from "@/components/listings/details/SpecificationSection"
import DeliverySection from "@/components/listings/details/DeliverySection"
import VenuServicesSection from "@/components/listings/details/VenuServicesSection"
import AddressSection from "@/components/listings/details/AddressSection"
import ReviewSection from "@/components/listings/details/ReviewSection"
import RelatedListingsSection from "@/components/listings/details/RelatedListingsSection"
import BookingSection from "@/components/listings/details/BookingSection"
import PriceBreakdownSection from "@/components/listings/details/PriceBreakdownSection"
import VendorInfoSection from "@/components/listings/details/VendorInfoSection"
import SpaceDetailSection from "@/components/listings/details/SpaceDetailSection"

const Page = () => {
    const params = useParams();
    const id = params.id as string;

    const listing = LISTINGS_DATA.find((item) => item.id === id);

    // Shared date state lifted from BookingSection
    const [selectedDates, setSelectedDates] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });
    // Track whether an address has been confirmed (it always starts selected since we have a default)
    const [addressSelected, setAddressSelected] = useState(true);
    // Attendees count for event spaces
    const [attendeesCount, setAttendeesCount] = useState<number>(0);

    if (!listing) {
        return <div className="py-20 text-center">Listing not found</div>;
    }

    const isEventSpace = listing.category?.toLowerCase() === "event space";

    // Compute booking days from selected date range
    const bookingDays = (selectedDates.start && selectedDates.end)
        ? Math.max(1, Math.ceil((selectedDates.end.getTime() - selectedDates.start.getTime()) / (1000 * 60 * 60 * 24)))
        : 0;

    const datesSelected = !!(selectedDates.start && selectedDates.end);
    const attendeesFilled = isEventSpace ? attendeesCount > 0 : true;
    const addressRequiredMet = isEventSpace ? true : addressSelected;

    const showPriceBreakdown = datesSelected && attendeesFilled && addressRequiredMet;

    // Extract numeric price
    const rawPrice = listing.price.startsWith("$") ? listing.price.slice(1) : listing.price;
    const numericPrice = parseFloat(rawPrice) || 0;

    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto sm:pb-6 lg:pb-8 pb-8">
                <GallerySection images={listing.images || [listing.image]} />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-2 mt-2 items-start">
                    {/* Left: Main Content */}
                    <div className="space-y-5 min-w-0">
                        <InfoSection listing={listing} />

                        {isEventSpace && (
                            <VenuServicesSection />
                        )}

                        <DescriptionSection
                            overview={listing.overview || ""}
                            whatsIncluded={listing.whatsIncluded || []}
                            whatsNotIncluded={listing.whatsNotIncluded || []}
                            rulesAndUsageGuidelines={listing.rulesAndUsageGuidelines || []}
                            venueHighlights={listing.venueHighlights || []}
                            category={listing.category}
                        />

                        <TrustSection />

                        {isEventSpace && listing.spaceDetails ? (
                            <SpaceDetailSection spaceDetails={listing.spaceDetails} />
                        ) : listing.specification ? (
                            <SpecificationSection specification={listing.specification} />
                        ) : null}


                        {!isEventSpace && (
                            <DeliverySection pickupLocation={listing.pickupLocation || "Pickup location not specified"} />
                        )}

                        <ReviewSection
                            overallRating={listing.rating}
                            totalReviews={listing.totalReviews}
                            reviews={listing.reviews || []}
                        />
                    </div>


                    {/* right section */}
                    <div className="space-y-6 px-8 sm:px-16 lg:px-0">
                        <BookingSection
                            price={listing.price}
                            category={listing.category}
                            onDatesChange={(start, end) => setSelectedDates({ start, end })}
                            onAttendeesChange={(count) => setAttendeesCount(count)}
                        />

                        {!isEventSpace && (
                            <AddressSection onAddressSelected={() => setAddressSelected(true)} />
                        )}

                        <PriceBreakdownSection
                            price={numericPrice}
                            bookingDays={bookingDays}
                            showBreakdown={showPriceBreakdown}
                        />
                        {listing.vendorInfo && (
                            <VendorInfoSection vendorInfo={listing.vendorInfo} />
                        )}
                    </div>
                </div>

                <div className="mt-14">
                    <RelatedListingsSection currentListingId={listing.id} />
                </div>
            </div>
        </main>
    )
}

export default Page;