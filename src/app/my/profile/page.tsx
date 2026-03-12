import React from "react";
import ProfileView from "@/components/profile/ProfileView";

export default function ProfilePage() {
  return (
    <div className="bg-[#FBFAFA] min-h-screen pt-14 md:pt-20 pb-20">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-12 shadow-sm min-h-[800px]">
                <ProfileView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
