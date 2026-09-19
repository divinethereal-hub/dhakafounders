import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
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
  title: "AfriHub Founders — Africa's Premier Startup Ecosystem Directory",
  description:
    "Connect, collaborate, and scale with Africa's top founders. Discover the visionaries shaping tomorrow's high-growth startups in Africa's premier founder ecosystem.",
  keywords: [
    "African startups",
    "AfriHub founders",
    "startup ecosystem Africa",
    "founder directory Africa",
    "Africa tech",
    "African startup funding",
  ],
  openGraph: {
    title: "AfriHub Founders — Africa's Premier Startup Ecosystem Directory",
    description: "The engine powering Africa's next generation of builders.",
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

        {/* Global toast renderer — outside ClerkProvider so it always renders */}
        <Toaster
          position="bottom-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              fontFamily: "var(--font-inter, 'Inter', sans-serif)",
              fontSize: "0.875rem",
            },
            duration: 4000,
          }}
        />
      </body>
    </html>
  );
}