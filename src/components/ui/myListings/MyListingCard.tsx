"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoreVertical, MapPin, Edit, Trash2 } from "lucide-react";
import Icon from "../icon/Icon";

export interface MyListingCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string | number;
  lastUpdate: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const MyListingCard: React.FC<MyListingCardProps> = ({
  id,
  image,
  title,
  location,
  price,
  lastUpdate,
  onEdit,
  onDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* 3 Dots Menu */}
        <div className="absolute top-3 right-3" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-md bg-black/40 text-white hover:bg-black/60 transition-colors focus:outline-none"
          >
            <Icon component={MoreVertical} size="md" />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-20">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onEdit?.(id);
                }}
                className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >

                Edit Listing
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onDelete?.(id);
                }}
                className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-50"
              >

                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <div>
          <h3 className="text-base font-bold text-gray-900 line-clamp-1">{title}</h3>
          <div className="flex items-center text-gray-500 mt-1.5 text-xs sm:text-sm">
            <Icon component={MapPin} size="sm" className="mr-1.5 shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <div className="flex items-end justify-between mt-1">
          <div className="flex items-baseline">
            <span className="text-primary font-bold text-lg">{typeof price === 'string' ? price : `$${price}`}</span>
            <span className="text-gray-500 text-xs sm:text-sm ml-1">/day</span>
          </div>
          <span className="text-gray-400 text-[10px] sm:text-xs font-medium">
            Last Update: {lastUpdate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyListingCard;
