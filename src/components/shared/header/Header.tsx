"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserCircle, Menu, X, LogIn, Store, Headset } from "lucide-react";
import clsx from "clsx";
import routes from "@/app/routes";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";

const NAV_LINKS = [
  { label: "Listings", href: routes.listings },
  { label: "About Kooji", href: routes.about },
  { label: "Contact Us", href: routes.contact },
] as const;

const PROFILE_MENU = [
  { label: "Login", icon: LogIn, href: routes.login },
  { label: "Become a Vendor", icon: Store, href: routes.vendor },
  { label: "Contact Support", icon: Headset, href: routes.contact },
] as const;

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-[95px]">

          <Link href={routes.home} className="shrink-0" aria-label="Kooji home">
            <Image src="/assets/logo.svg" alt="Kooji" width={168} height={55} priority />
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "text-[15px] font-medium whitespace-nowrap transition-colors duration-200",
                  pathname === href
                    ? "text-white border-b-2 border-primary pb-0.5"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {label}
              </Link>
            ))}

            <div ref={profileRef} className="relative">
              <Button
                aria-label="User profile"
                aria-expanded={profileOpen}
                aria-haspopup="menu"
                variant="primary"
                size="md"
                className="p-0! w-9 h-9 rounded-full"
                onClick={() => setProfileOpen((prev) => !prev)}
              >
                <Icon component={UserCircle} size="lg" />
              </Button>

              <div
                role="menu"
                aria-label="Profile menu"
                className={clsx(
                  "absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl overflow-hidden",
                  "transition-all duration-200 origin-top-right",
                  profileOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                )}
              >
                {PROFILE_MENU.map(({ label, icon, href }, i) => (
                  <Link
                    key={label}
                    href={href}
                    role="menuitem"
                    onClick={closeAll}
                    className={clsx(
                      "flex items-center gap-3 px-4 py-3.5 text-[14px] font-medium text-gray-800",
                      "hover:bg-gray-50 transition-colors duration-150",
                      i < PROFILE_MENU.length - 1 && "border-b border-gray-100"
                    )}
                  >
                    <Icon component={icon} size="sm" className="text-primary shrink-0" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <Button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            variant="ghost"
            size="sm"
            className="md:hidden p-0! w-9 h-9 rounded-full border-none text-gray-300 hover:text-white hover:bg-transparent"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Icon component={menuOpen ? X : Menu} size="lg" />
          </Button>

        </div>
      </div>

      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-[#0D1B2E] border-t border-white/10 px-4 pt-3 pb-5 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={closeAll}
              className={clsx(
                "block text-[15px] font-medium py-2.5 px-3 rounded-lg transition-colors duration-150",
                pathname === href
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              )}
            >
              {label}
            </Link>
          ))}

          <div className="h-px bg-white/10 my-2" />
          {PROFILE_MENU.map(({ label, icon, href }) => (
            <Link
              key={label}
              href={href}
              onClick={closeAll}
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-[14px] font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-150"
            >
              <Icon component={icon} size="sm" className="text-primary shrink-0" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;