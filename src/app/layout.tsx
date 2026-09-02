import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Woodwork | Premium Handcrafted Furniture",
  description: "Exquisite, modern, and handcrafted furniture for the discerning home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ClientLayout>
        {children}
      </ClientLayout>
    </html>
  );
}
