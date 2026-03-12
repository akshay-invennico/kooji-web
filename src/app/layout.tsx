import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

export const metadata: Metadata = {
  title: "Kooji Marketplace",
  description: "Kooji Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
