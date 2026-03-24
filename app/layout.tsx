import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gangapuja.org"),
  title: "Gangapuja — Online Ganga Puja Services from Gangotri",
  description:
    "Book authentic Ganga Puja ceremonies performed at the sacred origin of the Ganges in Gangotri. Online puja booking, donations, and spiritual services.",
  keywords: [
    "Ganga Puja",
    "Gangotri",
    "Online Puja",
    "Hindu Puja",
    "Ganga Aarti",
    "Gangotri Puja",
    "Donate",
    "Gangotri Dham",
    "Ganga Pooja Online",
  ],
  alternates: {
    canonical: "https://gangapuja.org/",
  },
  openGraph: {
    type: "website",
    url: "https://gangapuja.org",
    title: "Gangapuja — Online Ganga Puja Services from Gangotri",
    description:
      "Book authentic Ganga Puja ceremonies performed at the sacred origin of the Ganges in Gangotri.",
    images: [{ url: "/images/header-bg.jpg", width: 1200, height: 630, alt: "Gangotri Dham" }],
    siteName: "Gangapuja",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangapuja — Online Ganga Puja Services from Gangotri",
    description:
      "Book authentic Ganga Puja ceremonies performed at the sacred origin of the Ganges in Gangotri.",
    images: ["/images/header-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
