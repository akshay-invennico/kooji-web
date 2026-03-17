"use client";

import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const EDIT_PROFILE_MENU = [
  "Personal Details",
  "Business Info",
  "What you Offers",
  "Service Area",
  "Account & Security"
];

interface EditProfileSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const EditProfileSidebar: React.FC<EditProfileSidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="w-full md:w-64 flex flex-col gap-8 border-r border-[#F0EFEF]">
      <h2 className="text-[24px] font-semibold text-[#000000] font-outfit px-4">Edit Profile</h2>

      <nav className="flex flex-col gap-1">
        {EDIT_PROFILE_MENU.map((item) => {
          const isActive = activeSection === item;
          return (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={clsx(
                "w-full text-left px-4 py-3 rounded-md text-[14px] font-medium font-outfit ",
                isActive
                  ? "bg-[#FFF5F5] text-[#FF3A44]"
                  : "text-[#686262] hover:bg-gray-50"
              )}
            >
              {item}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default EditProfileSidebar;
