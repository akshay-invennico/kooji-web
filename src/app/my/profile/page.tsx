import React from "react";
import ProfileView from "@/components/profile/ProfileView";

export default function ProfilePage() {
  return (
    <div className="bg-[#FBFAFA] min-h-[300px] pt-2 md:pt-10 pb-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="  min-h-[800px]">
              <ProfileView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
