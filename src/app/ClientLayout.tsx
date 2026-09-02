"use client";

import { Inter, Playfair_Display } from "next/font/google";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={cn(
        "min-h-screen bg-surface font-sans text-primary antialiased",
        inter.variable,
        playfair.variable
      )}
    >
      {children}
      <WhatsAppButton />
    </body>
  );
}
