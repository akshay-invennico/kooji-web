/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import MyListingCard from "@/components/ui/myListings/MyListingCard";
import AddListingView from "@/components/MyListings/AddListingView";
import { LISTINGS_DATA } from "@/data/listingsData";

const MyListingsSection = () => {
  const [isAddingListing, setIsAddingListing] = useState(false);

  // Using some dummy data and adding a mock last update date for display
  const myData = LISTINGS_DATA.slice(0, 8).map(item => ({
    ...item,
    lastUpdate: "25 Jan, 2026"
  }));

  const handleEdit = (id: string) => {
    console.log("Edit listing:", id);
    // Add logic to navigate to edit page or open modal
  };

  const handleDelete = (id: string) => {
    console.log("Delete listing:", id);
    // Add logic to delete listing
  };

  const handleAddListing = () => {
    setIsAddingListing(true);
  };

  if (isAddingListing) {
    return <AddListingView onClose={() => setIsAddingListing(false)} />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Listings</h1>
        <Button
          variant="primary"
          onClick={handleAddListing}
          className="gap-2.5 shadow-sm rounded-lg sm:rounded-full bg-red-500 hover:bg-red-600 focus-visible:ring-red-500 border-none"
        >
          <Icon component={Plus} size="sm" />
          Add Listing
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {myData.map((listing) => (
          <MyListingCard
            key={listing.id}
            id={listing.id}
            image={listing.image}
            title={listing.title}
            location={listing.address}
            price={listing.price}
            lastUpdate={listing.lastUpdate}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Empty State (Optional depending on data) */}
      {myData.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">

          </div>
          <h3 className="text-lg font-semibold text-gray-900">No listings found</h3>
          <p className="text-gray-500 mt-1 mb-6 text-center max-w-sm">
            You haven&apos;t added any listings yet. Create your first listing to start earning.
          </p>
          <Button variant="primary" onClick={handleAddListing} className="gap-2 bg-red-500 hover:bg-red-600">

            Add Listing
          </Button>
        </div>
      )}
    </div>
  );
};

export default MyListingsSection;
