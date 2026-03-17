import React from "react";
import Image from "next/image";

const SimpleFooter = () => {
  return (
    <footer className="bg-white py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto border-t border-[#F0EFEF] pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[14px] font-medium text-[#686262]">
            <p>Copyright © 2025 Kooji LLC</p>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-black transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-black transition-colors">Terms of Service</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Image 
              src="/icons/playstore/appstore.svg" 
              alt="Download on the App Store" 
              width={120} 
              height={40} 
              className="h-9 w-auto"
            />
            <Image 
              src="/icons/playstore/googleplay.svg" 
              alt="Get it on Google Play" 
              width={120} 
              height={40} 
              className="h-9 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
