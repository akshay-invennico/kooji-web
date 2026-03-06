"use client";

import React, { useState } from "react";
import ListingFilterBar from "@/components/listings/ListingFilterBar";
import ListingCard from "@/components/listings/ListingCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WhyChooseSection from "@/components/shared/home/whyChooseSection";
import BecomeVendor from "@/components/shared/home/BecomeVendor";

const ITEMS_PER_PAGE = 40;

const LISTINGS_DATA = [
  {
    title: "Ultimate Ears Boom 2",
    address: "Cardiff Bay",
    price: "$45",
    image: "/assets/createWithKooji/create1.svg",
    rating: 4.5,
    totalReviews: 120
  },
  {
    title: "Bose SoundLink Revolve",
    address: "London Borough",
    price: "$30",
    image: "/assets/createWithKooji/create2.svg",
    rating: 4.8,
    totalReviews: 150
  },
  {
    title: "JBL Charge 4",
    address: "Birmingham City",
    price: "$35",
    image: "/assets/createWithKooji/create3.svg",
    rating: 4.9,
    totalReviews: 80
  },
  {
    title: "Sony Cube Speakers",
    address: "Liverpool Docklands",
    price: "$50",
    image: "/assets/createWithKooji/create4.svg",
    rating: 4.7,
    totalReviews: 200
  },
  {
    title: "Klipsch R-41M",
    address: "Glasgow City",
    price: "$28",
    image: "/assets/createWithKooji/create5.svg",
    rating: 4.6,
    totalReviews: 175
  },
  {
    title: "Audioengine A2+",
    address: "Edinburgh Old Town",
    price: "$40",
    image: "/assets/createWithKooji/create6.svg",
    rating: 4.8,
    totalReviews: 90
  },
  {
    title: "Harman Kardon Onyx",
    address: "Belfast Titanic Quarter",
    price: "$55",
    image: "/assets/createWithKooji/create7.svg",
    rating: 4.5,
    totalReviews: 60
  },
  {
    title: "Marshall Kilburn II",
    address: "Brighton Pier",
    price: "$48",
    image: "/assets/createWithKooji/create8.svg",
    rating: 4.7,
    totalReviews: 130
  },
  {
    title: "Sonos One Gen 2",
    address: "Manchester City Centre",
    price: "$42",
    image: "/assets/createWithKooji/create9.svg",
    rating: 4.9,
    totalReviews: 310
  },
  {
    title: "Bang & Olufsen Beosound",
    address: "Bristol Waterfront",
    price: "$75",
    image: "/assets/createWithKooji/create10.svg",
    rating: 4.8,
    totalReviews: 45
  },
  {
    title: "Logitech Z623",
    address: "Leeds Dock",
    price: "$38",
    image: "/assets/createWithKooji/create11.svg",
    rating: 4.4,
    totalReviews: 140
  },
  {
    title: "Edifier R1280T",
    address: "Sheffield City",
    price: "$29",
    image: "/assets/createWithKooji/create12.svg",
    rating: 4.6,
    totalReviews: 220
  },
  {
    title: "KRK Rokit 5 G4",
    address: "Newcastle Quayside",
    price: "$65",
    image: "/assets/createWithKooji/create13.svg",
    rating: 4.9,
    totalReviews: 110
  },
  {
    title: "Yamaha HS5",
    address: "Nottingham City",
    price: "$58",
    image: "/assets/createWithKooji/create14.svg",
    rating: 4.7,
    totalReviews: 85
  },
  {
    title: "Fender Mustang Micro",
    address: "Southampton Port",
    price: "$25",
    image: "/assets/createWithKooji/create1.svg",
    rating: 4.8,
    totalReviews: 95
  },
  {
    title: "Focusrite Scarlett 2i2",
    address: "Chelsea",
    price: "$40",
    image: "/assets/createWithKooji/create2.svg",
    rating: 4.9,
    totalReviews: 400
  },
  {
    title: "Shure SM7B",
    address: "Richmond Park",
    price: "$85",
    image: "/assets/createWithKooji/create3.svg",
    rating: 5.0,
    totalReviews: 180
  },
  {
    title: "Rode NT1-A",
    address: "Greenwich Market",
    price: "$45",
    image: "/assets/createWithKooji/create4.svg",
    rating: 4.7,
    totalReviews: 250
  },
  {
    title: "Blue Yeti Nano",
    address: "Wimbledon Village",
    price: "$35",
    image: "/assets/createWithKooji/create5.svg",
    rating: 4.6,
    totalReviews: 320
  },
  {
    title: "Pioneer DDJ-400",
    address: "Brixton Academy",
    price: "$60",
    image: "/assets/createWithKooji/create6.svg",
    rating: 4.8,
    totalReviews: 145
  },
  {
    title: "Arturia MiniLab MKII",
    address: "Oxford Street",
    price: "$32",
    image: "/assets/createWithKooji/create7.svg",
    rating: 4.7,
    totalReviews: 190
  },
  {
    title: "Akai MPK Mini Play",
    address: "Camden Town",
    price: "$38",
    image: "/assets/createWithKooji/create8.svg",
    rating: 4.5,
    totalReviews: 115
  },
  {
    title: "Novation Launchpad X",
    address: "Soho Square",
    price: "$42",
    image: "/assets/createWithKooji/create9.svg",
    rating: 4.8,
    totalReviews: 88
  },
  {
    title: "PreSonus Eris 3.5",
    address: "Silicon Roundabout",
    price: "$28",
    image: "/assets/createWithKooji/create10.svg",
    rating: 4.7,
    totalReviews: 210
  },
  {
    title: "Mackie CR-X Series",
    address: "Leicester City",
    price: "$33",
    image: "/assets/createWithKooji/create11.svg",
    rating: 4.6,
    totalReviews: 155
  },
  {
    title: "Behringer U-Phoria",
    address: "York Minster",
    price: "$20",
    image: "/assets/createWithKooji/create12.svg",
    rating: 4.4,
    totalReviews: 420
  },
  {
    title: "Sennheiser HD 600",
    address: "Bath Spa",
    price: "$55",
    image: "/assets/createWithKooji/create13.svg",
    rating: 4.9,
    totalReviews: 300
  },
  {
    title: "Beyerdynamic DT 990",
    address: "Cambridge Science Park",
    price: "$45",
    image: "/assets/createWithKooji/create14.svg",
    rating: 4.8,
    totalReviews: 280
  },
  {
    title: "Audio-Technica M50x",
    address: "Reading Station",
    price: "$38",
    image: "/assets/createWithKooji/create1.svg",
    rating: 4.7,
    totalReviews: 500
  },
  {
    title: "Roland JUNO-DS",
    address: "Kingston Upon Thames",
    price: "$95",
    image: "/assets/createWithKooji/create2.svg",
    rating: 4.9,
    totalReviews: 65
  },
  {
    title: "Korg Minilogue",
    address: "Windsor Castle",
    price: "$70",
    image: "/assets/createWithKooji/create3.svg",
    rating: 4.8,
    totalReviews: 125
  },
  {
    title: "Moog Grandmother",
    address: "Canterbury Cathedral",
    price: "$120",
    image: "/assets/createWithKooji/create4.svg",
    rating: 5.0,
    totalReviews: 35
  },
  {
    title: "Native Instruments S4",
    address: "Portobello Road",
    price: "$80",
    image: "/assets/createWithKooji/create5.svg",
    rating: 4.7,
    totalReviews: 90
  },
  {
    title: "Ableton Push 2",
    address: "Shoreditch High St",
    price: "$90",
    image: "/assets/createWithKooji/create6.svg",
    rating: 4.9,
    totalReviews: 110
  },
  {
    title: "Universal Audio Volt",
    address: "Coventry City",
    price: "$48",
    image: "/assets/createWithKooji/create7.svg",
    rating: 4.8,
    totalReviews: 75
  },
  {
    title: "Solid State Logic SSL2",
    address: "Plymouth Hoe",
    price: "$52",
    image: "/assets/createWithKooji/create8.svg",
    rating: 4.9,
    totalReviews: 55
  },
  {
    title: "Audient iD4 MKII",
    address: "Durham Riverside",
    price: "$36",
    image: "/assets/createWithKooji/create9.svg",
    rating: 4.7,
    totalReviews: 135
  },
  {
    title: "Genelec 8010A",
    address: "Salisbury Plain",
    price: "$110",
    image: "/assets/createWithKooji/create10.svg",
    rating: 4.9,
    totalReviews: 40
  },
  {
    title: "Adam Audio T7V",
    address: "Lincoln Cathedral",
    price: "$78",
    image: "/assets/createWithKooji/create11.svg",
    rating: 4.8,
    totalReviews: 95
  },
  {
    title: "Fluid Audio FX80",
    address: "Exeter Quay",
    price: "$68",
    image: "/assets/createWithKooji/create12.svg",
    rating: 4.7,
    totalReviews: 48
  },

   {
    title: "Korg Minilogue",
    address: "Windsor Castle",
    price: "$70",
    image: "/assets/createWithKooji/create3.svg",
    rating: 4.8,
    totalReviews: 125
  },
  {
    title: "Moog Grandmother",
    address: "Canterbury Cathedral",
    price: "$120",
    image: "/assets/createWithKooji/create4.svg",
    rating: 5.0,
    totalReviews: 35
  },
  {
    title: "Native Instruments S4",
    address: "Portobello Road",
    price: "$80",
    image: "/assets/createWithKooji/create5.svg",
    rating: 4.7,
    totalReviews: 90
  },
  {
    title: "Ableton Push 2",
    address: "Shoreditch High St",
    price: "$90",
    image: "/assets/createWithKooji/create6.svg",
    rating: 4.9,
    totalReviews: 110
  },

];



const ListingsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(LISTINGS_DATA.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedListings = LISTINGS_DATA.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-12">
      <ListingFilterBar />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Listings</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {paginatedListings.map((listings, index) => (
            <ListingCard
              key={startIndex + index}
              title={listings.title}
              address={listings.address}
              price={listings.price}
              image={listings.image}
              rating={listings.rating}
              totalReviews={listings.totalReviews}
            />
          ))}
        </div>


        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-gray-200 bg-white-600 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${currentPage === page
                    ? "bg-red-600 text-white"
                    : "bg-white border border-red-200 text-black-600 hover:bg-gray-50"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      <WhyChooseSection />

      <BecomeVendor />
    </div>
  );
};

export default ListingsPage;