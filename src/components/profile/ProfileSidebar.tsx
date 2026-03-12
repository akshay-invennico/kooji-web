"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import { 
  LayoutDashboard, 
  UserPen, 
  ListTodo, 
  CalendarCheck, 
  Wallet, 
  ArrowLeftRight, 
  MessageSquare, 
  Bell, 
  Star, 
  Headphones, 
  LogOut,
  ChevronRight
} from "lucide-react";

const SIDEBAR_ITEMS = [
  {
    group: "Profile",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/my/dashboard" },
      { label: "Edit Profile", icon: UserPen, href: "/my/profile" },
    ]
  },
  {
    group: "Listings & Bookings",
    items: [
      { label: "My Listings", icon: ListTodo, href: "/my/listings" },
      { label: "Bookings", icon: CalendarCheck, href: "/my/bookings" },
    ]
  },
  {
    group: "Earnings & Payouts",
    items: [
      { label: "Earnings", icon: Wallet, href: "/my/earnings" },
      { label: "Transactions", icon: ArrowLeftRight, href: "/my/transactions" },
    ]
  },
  {
    group: "Other",
    items: [
      { label: "Messages", icon: MessageSquare, href: "/my/messages" },
      { label: "Notifications", icon: Bell, href: "/my/notifications" },
      { label: "Reviews", icon: Star, href: "/my/reviews" },
      { label: "Contact Support", icon: Headphones, href: "/contact" },
      { label: "Log Out", icon: LogOut, href: "/logout", color: "text-red-500" },
    ]
  }
];

const ProfileSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col gap-6 h-fit sticky top-24">
      <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl border border-gray-100 mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold">
            MS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900">Mahavir Singh</span>
            <span className="text-xs text-gray-400 truncate w-32">mahavirsinghexample@email.com</span>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>

      <nav className="flex flex-col gap-6">
        {SIDEBAR_ITEMS.map((group) => (
          <div key={group.group} className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 px-3">
              {group.group}
            </span>
            <div className="flex flex-col gap-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive 
                        ? "bg-red-50 text-red-600" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      item.color
                    )}
                  >
                    <Icon className={clsx("w-4 h-4", isActive ? "text-red-600" : (item.color || "text-gray-400"))} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
