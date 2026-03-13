import React from 'react';
import Link from 'next/link';
import ProfileMenuCard from './ProfileMenuCard';
import {
  ChevronRight
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import routes from '@/app/routes';

interface ProfileMenuSectionProps {
  onClose: () => void;
  isOpen: boolean;
}

const MENU_DATA = [
  {
    label: "Profile",
    items: [
      { title: "Dashboard", icon: "/icons/myprofile/profileModel/Dashboard.svg", href: routes.dashboard },
      { title: "Edit Profile", icon: "/icons/myprofile/profileModel/EditProfile.svg", href: routes.editProfile },
    ]
  },
  {
    label: "Listings & Bookings",
    items: [
      { title: "My Listings", icon: "/icons/myprofile/profileModel/MyListings.svg", href: routes.myListings },
      { title: "Bookings", icon: "/icons/myprofile/profileModel/Bookings.svg", href: routes.bookings },
    ]
  },
  {
    label: "Earnings & Payouts",
    items: [
      { title: "Earnings", icon: "/icons/myprofile/profileModel/Earnings.svg", href: routes.earnings },
      { title: "Transactions", icon: "/icons/myprofile/profileModel/Transaction.svg", href: routes.transactions },
    ]
  },
  {
    label: "Other",
    items: [
      { title: "Messages", icon: "/icons/myprofile/profileModel/Messages.svg", href: routes.messages },
      { title: "Notifications", icon: "/icons/myprofile/profileModel/Notifications.svg", href: routes.notifications },
      { title: "Reviews", icon: "/icons/myprofile/profileModel/Reviews.svg", href: routes.reviews },
      { title: "Contact Support", icon: "/icons/myprofile/profileModel/Contact.svg", href: routes.support },
      { title: "Log Out", icon: "/icons/myprofile/profileModel/Logout.svg", href: routes.login },
    ]
  }
];

const ProfileMenuSection: React.FC<ProfileMenuSectionProps> = ({ onClose, isOpen }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center md:items-start md:justify-end md:pr-10 md:pt-24 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white w-[90%] h-[97%] max-w-[350px] rounded-xl   overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* User Info Header */}
        <Link href={routes.profile} onClick={onClose}>
          <div className="p-6 pb-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-medium text-[#000000] font-outfit">Mahavir Singh</span>
                <span className="text-[12px] text-[#FF3A44] font-medium font-outfit">mahavirsexample@email.com</span>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-[#000000]" />
          </div>
        </Link>

        {/* Menu Sections Container */}
        <div className="p-4 flex flex-col gap-4 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {MENU_DATA.map((section, index) => (
            <React.Fragment key={section.label}>
              <div className="flex flex-col gap-1">
                <span className="text-[14px] text-[#686262] font-medium px-2 mb-1">{section.label}</span>
                {section.items.map((item) => (
                  <ProfileMenuCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    href={item.href}
                    onClick={onClose}
                  />
                ))}
              </div>
              {index < MENU_DATA.length - 1 && <div className="h-px bg-[#F0EFEF] mx-2 my-2" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuSection;
