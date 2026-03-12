"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Share2, MapPin, Star, Calendar } from "lucide-react";
import clsx from "clsx";

const LISTINGS = [
  {
    id: "1",
    title: "Google Nest Audio",
    location: "Swansea Marina",
    price: "$25",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Yamaha PA Speaker System",
    location: "Manchester City Centre",
    price: "$45",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Harman Kardon Onyx Studio",
    location: "Leeds City Centre",
    price: "$60",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Bose SoundLink Revolve",
    location: "London Borough",
    price: "$30",
    image: "https://images.unsplash.com/photo-1620803126742-995a12235940?q=80&w=400&auto=format&fit=crop",
  },
];

const ProfileView = () => {
  const [activeTab, setActiveTab] = useState("Listings");

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* Header Info */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                <img 
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                   alt="Profile" 
                   className="w-full h-full object-cover"
               />
            </div>
        </div>
        
        <div className="flex flex-col gap-1 items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900">Mahavir Singh</h1>
            <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-500 text-white p-0.5" />
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <p className="max-w-2xl text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Member Since</span>
            <span className="text-sm font-bold text-gray-900">24 Jan, 2025</span>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-400">
            <Star className="w-5 h-5 fill-orange-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Ratings</span>
            <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-gray-900">4.8</span>
                <span className="text-xs text-gray-400">138 Reviews</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Location</span>
            <span className="text-sm font-bold text-gray-900">Greater London</span>
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 border-b border-gray-100">
          {["Listings", "Reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "pb-4 px-2 text-sm font-bold transition-all duration-200 border-b-2",
                activeTab === tab 
                  ? "border-red-500 text-red-500" 
                  : "border-transparent text-gray-400 hover:text-gray-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTab === "Listings" && LISTINGS.map((item) => (
            <div key={item.id} className="group flex flex-col gap-3 cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col px-1">
                <h3 className="text-sm font-bold text-gray-900 truncate">{item.title}</h3>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <div className="mt-1">
                  <span className="text-red-500 font-bold text-sm">{item.price}</span>
                  <span className="text-gray-400 text-[10px] ml-1">/day</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
