import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ReligiousOrganization"],
                  "@id": "https://gangapuja.org/#organization",
                  "name": "Jagat Kalyan Seva Samiti",
                  "alternateName": "Gangapuja",
                  "url": "https://gangapuja.org",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://gangapuja.org/images/header-bg.jpg",
                    "width": 1200,
                    "height": 630,
                  },
                  "description": "Jagat Kalyan Seva Samiti performs authentic Ganga Pooja ceremonies at the sacred origin of the Ganges in Gangotri Dham. Online puja booking, donations, Anna Daan, and Vidya Daan services.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "136A E C Road, Opp. Bharat Heart Institute",
                    "addressLocality": "Dehradun",
                    "addressRegion": "Uttarakhand",
                    "postalCode": "248001",
                    "addressCountry": "IN",
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 30.9956,
                    "longitude": 78.939,
                  },
                  "telephone": ["+918126298501", "+919411746771"],
                  "email": "magangapuja@gmail.com",
                  "sameAs": [
                    "https://www.facebook.com/onlinegangapooja/",
                    "https://www.instagram.com/gangapujaonline/",
                    "https://www.youtube.com/channel/UC61_Xalv8nGcTcGf_qTcxmw",
                  ],
                  "areaServed": { "@type": "Country", "name": "India" },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://gangapuja.org/#website",
                  "url": "https://gangapuja.org",
                  "name": "Gangapuja",
                  "description": "Online Ganga Puja Services from Gangotri Dham",
                  "publisher": { "@id": "https://gangapuja.org/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://gangapuja.org/?s={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2KR9KD9ETS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2KR9KD9ETS');
          `}
        </Script>
      </body>
    </html>
  );
}
