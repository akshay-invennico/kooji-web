"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import routes from "@/app/routes";
import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";
import ProfileMenuSection from "@/components/profile/ProfileMenuSection";
import { useAuthModal } from "@/context/AuthContext";

const NAV_LINKS = [
  { label: "Listings", href: routes.listings },
  { label: "About Kooji", href: routes.about },
  { label: "Contact Us", href: routes.contact },
] as const;

const PROFILE_MENU = [
  { label: "Login / Sign up", iconSrc: "/icons/header/logIn.svg", href: routes.login },
  { label: "Become a Vendor", iconSrc: "/icons/header/bacomeAVendor.svg", href: routes.vendor },
  { label: "Contact Support", iconSrc: "/icons/header/contactSupport.svg", href: routes.contact },
] as const;

const Header = () => {
  const pathname = usePathname();
  const { openModal } = useAuthModal();
  const isHome = pathname === routes.home;

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // run once immediately
    handleScroll();

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleProfileClick = () => {
    if (pathname.startsWith("/my/")) {
      setIsProfileModalOpen(true);
    } else {
      setProfileOpen((prev) => !prev);
    }
  };

  const closeAll = () => {
    setMenuOpen(false);
    setProfileOpen(false);
    setIsProfileModalOpen(false);
  };

  const transparentHeader = isHome && !scrolled;

  const isProfileRoute = pathname.startsWith("/my/");

  return (
    <>
      <ProfileMenuSection isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-100 transition-all duration-300",
          transparentHeader
            ? "bg-transparent"
            : "bg-white border-b border-[#F0EFEF]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-14 md:h-[95px]">

            <Link href={routes.home} className="shrink-0" aria-label="Kooji home">
              <Image
                src="/assets/logo.svg"
                alt="Kooji"
                width={168}
                height={55}
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8 lg:gap-10">

              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "text-[16px] font-bold whitespace-nowrap transition-colors duration-200 hover:text-[#C5161D]",
                    pathname === href
                      ? "text-[#000000]"
                      : transparentHeader
                        ? "text-white"
                        : "text-black"
                  )}
                >
                  {label}
                </Link>
              ))}

              <div ref={profileRef} className="relative">
                <button
                  aria-label="User profile"
                  aria-expanded={profileOpen || isProfileModalOpen}
                  aria-haspopup="menu"
                  onClick={handleProfileClick}
                  className="w-10 h-10 rounded-full overflow-hidden"
                >
                  <Image
                    src={isProfileRoute
                      ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                      : "/icons/header/userNavbar.svg"
                    }
                    alt="User Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </button>

                <div
                  role="menu"
                  className={clsx(
                    "absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl overflow-hidden z-50",
                    "transition-all duration-200 origin-top-right",
                    (profileOpen && pathname !== "/my/profile")
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  {PROFILE_MENU.map(({ label, iconSrc, href }, i) => {
                    const isLoginLink = label === "Login / Sign up";

                    const content = (
                      <>
                        <Image src={iconSrc} alt={label} width={24} height={24} className="w-6 h-6" />
                        {label}
                      </>
                    );

                    const commonClasses = clsx(
                      "flex items-center gap-3 px-4 py-3 text-[16px] font-medium text-[#000000]  w-full text-left",
                      i < PROFILE_MENU.length - 1 && "border-b border-gray-100"
                    );

                    if (isLoginLink) {
                      return (
                        <button
                          key={label}
                          onClick={() => {
                            openModal('login');
                            closeAll();
                          }}
                          className={commonClasses}
                        >
                          {content}
                        </button>
                      );
                    }

                    return (
                      <Link
                        key={label}
                        href={href}
                        role="menuitem"
                        onClick={closeAll}
                        className={commonClasses}
                      >
                        {content}
                      </Link>
                    );
                  })}
                </div>
              </div>

            </nav>

            <Button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              variant="ghost"
              size="sm"
              className={clsx(
                "md:hidden p-0! w-9 h-9 rounded-full border-none",
                transparentHeader
                  ? "text-white hover:text-gray-200"
                  : "text-black hover:text-black/70"
              )}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Icon component={menuOpen ? X : Menu} size="lg" />
            </Button>

          </div>
        </div>

        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300",
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
                  "block text-[16px] font-bold py-2.5 px-3 rounded-lg transition-colors duration-200 hover:text-[#C5161D] hover:bg-white/5",
                  pathname === href ? "text-[#C5161D]" : "text-gray-300"
                )}
              >
                {label}
              </Link>
            ))}

            <div className="h-px bg-white/10 my-2" />

            {PROFILE_MENU.map(({ label, iconSrc, href }) => {
              const isLoginLink = label === "Login / Sign up";
              const commonClasses = "flex items-center gap-3 py-2.5 px-3 rounded-lg text-[14px] font-medium text-gray-300 transition-colors duration-200 hover:text-[#C5161D] hover:bg-white/5 w-full text-left";
              const content = (
                <>
                  <Image src={iconSrc} alt={label} width={24} height={24} className="w-6 h-6" />
                  {label}
                </>
              );

              if (isLoginLink) {
                return (
                  <button
                    key={label}
                    onClick={() => {
                      openModal('login');
                      closeAll();
                    }}
                    className={commonClasses}
                  >
                    {content}
                  </button>
                );
              }

              return (
                <Link
                  key={label}
                  href={href}
                  onClick={closeAll}
                  className={commonClasses}
                >
                  {content}
                </Link>
              );
            })}

          </div>
        </div>
        <div className="w-full h-px bg-white/20" />
      </header>
    </>
  );
};

export default Header;