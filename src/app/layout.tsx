import type { Metadata } from "next";
import { Sora, Inter, Poppins } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Roofing Co. | Premium Roofing Services",
  description: "High-quality residential and commercial roofing with warranty-backed craftsmanship.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${inter.variable} ${poppins.variable} font-inter antialiased bg-bg-soft text-primary-navy`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
