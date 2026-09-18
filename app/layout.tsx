import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhaka Founders — Bangladesh's Premier Startup Ecosystem Directory",
  description:
    "Connect, collaborate, and scale with top founders. Discover the visionaries shaping tomorrow's high-growth startups in Bangladesh's premier founder ecosystem.",
  keywords: [
    "Bangladesh startups",
    "Dhaka founders",
    "startup ecosystem",
    "founder directory",
    "Bangladesh tech",
    "startup funding",
  ],
  openGraph: {
    title: "Dhaka Founders — Bangladesh's Premier Startup Ecosystem Directory",
    description:
      "The engine powering Bangladesh's next generation of builders.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ClerkProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}