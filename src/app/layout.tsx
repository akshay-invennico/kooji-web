import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";

export const metadata: Metadata = {
  title: "Kooji Marketplace",
  description:
    "Kooji Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16 md:pt-[95px]">
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
        <Footer />
      </body>
    </html>
  );
}
