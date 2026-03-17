"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { Toaster } from "react-hot-toast";
import AuthModal from "@/components/shared/auth/AuthModal";

const NO_LAYOUT_ROUTES = [
  "/vendor",
  "/checkout",
];

const NO_FOOTER_ROUTES = [
  "/my/notifications",
  "/my/messages"
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showLayout = !NO_LAYOUT_ROUTES.includes(pathname);
  const showFooter = !NO_FOOTER_ROUTES.includes(pathname);

  if (!showLayout) {
    return (
      <>
        <main className="flex-1">
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#1D1D1B",
                color: "#fff",
                borderRadius: "8px",
                border: "1px solid #333",
              },
            }}
          />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-[95px]">
        {children}
        <AuthModal />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1D1D1B",
              color: "#fff",
              borderRadius: "8px",
              border: "1px solid #333",
            },
          }}
        />
      </main>
      {showFooter && <Footer />}
    </>
  );
}
