"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import ReviewSection from "@/components/listings/details/ReviewSection";
import ListingCard from "@/components/listings/ListingCard";
import { LISTINGS_DATA } from "@/data/listingsData";
import { usePathname } from "next/navigation";

const MOCK_REVIEWS = [
  {
    id: "1",
    rating: 5,
    comment: "Excellent service and high-quality equipment. Mahavir was very professional and helpful throughout the rental process. Highly recommended!",
    userName: "James Wilson",
    userLocation: "Central London",
    userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "2",
    rating: 4,
    comment: "The speakers were great for our garden party. Clean and clear sound. Easy pickup and drop-off. Will definitely rent again.",
    userName: "Sarah Jenkins",
    userLocation: "Manchester",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "3",
    rating: 5,
    comment: "Very reliable and the equipment was in pristine condition. Exactly what we needed for our event.",
    userName: "Robert Taylor",
    userLocation: "Birmingham",
    userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "4",
    rating: 5,
    comment: "Great communication and fair pricing. The setup was easy and worked perfectly.",
    userName: "Emily Davis",
    userLocation: "Leeds",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

const ProfileView = () => {
  const [activeTab, setActiveTab] = useState("Listings");
  const pathname = usePathname();

  // Take first 4 listings for display as per user request
  const listings = LISTINGS_DATA.slice(0, 4);

  return (
    <div className="flex flex-col gap-5 w-full mb-10 relative">
      {/* Header Info */}
      <div className="flex flex-col gap-5 px-10 py-8 pb-10">
        <div className="w-37 h-37 md:w-40 md:h-40 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-[24px] font-semibold text-[#000000] font-outfit">Mahavir Singh</h1>
            <div className="flex items-center gap-3">
              <Image src="/icons/myprofile/verify.svg" alt="verified" width={40} height={40} />
              <button className="p-2">
                <Image src="/icons/myprofile/share.svg" alt="share" width={40} height={40} />
              </button>
            </div>
          </div>
          <p className="max-w-[1000px] text-[14px] text-[#686262] font-medium leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2">
        <div className="bg-white border border-[#F0EFEF] rounded-lg p-6 flex flex-col items-start gap-4 h-[140px] justify-between">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image src="/icons/myprofile/profileCalender.svg" alt="calendar" width={36} height={36} />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#2F2F2F] font-medium opacity-60">Member Since</span>
            <span className="text-[16px] font-semibold text-[#000000] font-outfit">24 Jan, 2025</span>
          </div>
        </div>

        <div className="bg-white border border-[#EFEFEF] rounded-lg p-6 flex flex-col items-start gap-4 h-[140px] justify-between">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image src="/icons/myprofile/profileStar.svg" alt="star" width={36} height={36} />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#2F2F2F] font-medium opacity-60">Ratings</span>
            <div className="flex items-baseline gap-2">
              <span className="text-[16px] font-semibold text-[#000000] font-outfit">4.8</span>
              <span className="text-[12px] text-[#2F2F2F] font-medium opacity-60">135 Reviews</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#EFEFEF] rounded-lg p-6 flex flex-col items-start gap-4 h-[140px] justify-between">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image src="/icons/myprofile/profileAddress.svg" alt="location" width={36} height={36} />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#2F2F2F] font-medium opacity-60">Location</span>
            <span className="text-[16px] font-semibold text-[#000000] font-outfit">Greater London</span>
          </div>
        </div>
      </div>

      <div className="border-b border-[#F0EFEF] mt-3"></div>

      {/* Tabs and Content */}
      <div className="flex flex-col gap-8 px-4">
        <div className="flex items-center gap-4">
          {["Listings", "Reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "py-3 px-10 text-[14px] font-medium transition-all duration-200 border rounded-md font-outfit",
                activeTab === tab
                  ? "border-[#FF3A44] text-[#FF3A44] bg-white"
                  : "border-[#EFEFEF] text-[#626262] hover:bg-gray-50 bg-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Listings" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {listings.map((item) => (
              <ListingCard
                key={item.id}
                id={item.id}
                title={item.title}
                address={item.address}
                price={item.price}
                image={item.image}
                rating={item.rating}
                totalReviews={item.totalReviews}
              />
            ))}
          </div>
        ) : (
          <ReviewSection
            overallRating={4.8}
            totalReviews={135}
            reviews={MOCK_REVIEWS}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileView;