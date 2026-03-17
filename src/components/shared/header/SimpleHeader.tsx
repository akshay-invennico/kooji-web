"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import routes from "@/app/routes";

const SimpleHeader = () => {
  return (
    <header className="bg-white border-b border-[#F0EFEF] fixed top-0 left-0 w-full z-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 md:h-[95px]">
          <Link href={routes.home} className="shrink-0" aria-label="Kooji home">
            <Image
              src="/assets/logo.svg"
              alt="Kooji"
              width={168}
              height={55}
              priority
              className="w-[120px] md:w-[168px] h-auto"
            />
          </Link>

          <div className="flex items-center">
            <button
              aria-label="User profile"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                alt="User Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
