import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaPrayingHands } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Donate — Support Ganga Seva at Gangotri | Gangapuja",
  description:
    "Donate to support Anna Daan (community kitchen), Vidya Daan (girl child education), and ongoing Ganga Pooja services at Gangotri Dham.",
  keywords: ["Donate Gangotri", "Anna Daan", "Vidya Daan", "Ganga Seva", "Charity Gangotri"],
  alternates: { canonical: "https://gangapuja.org/donate/" },
  openGraph: {
    type: "website",
    url: "https://gangapuja.org/donate/",
    title: "Donate — Support Ganga Seva at Gangotri | Gangapuja",
    description: "Donate to support Anna Daan, Vidya Daan, and Ganga Pooja services at Gangotri Dham.",
    images: [{ url: "/images/parallax3.jpg", width: 1200, height: 630, alt: "Support Ganga Seva" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate — Support Ganga Seva at Gangotri | Gangapuja",
    description: "Donate to support Anna Daan, Vidya Daan, and Ganga Pooja services at Gangotri Dham.",
    images: ["/images/parallax3.jpg"],
  },
};

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
        <Image src="/images/parallax3.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-gold-light uppercase tracking-[0.2em] text-sm mb-3">Support Ganga Seva</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Make a Donation
          </h1>
          <p className="text-cream-dark/80 max-w-xl mx-auto">
            Your generosity supports daily pujas, community kitchen, and education
            for girls in Uttarkashi.
          </p>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Where Your Money Goes
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Our Initiatives
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gold-light/30 text-center">
              <div className="flex justify-center mb-4">
                <FaPrayingHands className="text-3xl text-gold" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-3">
                Anna Daan
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Community kitchen at Gangotri supporting sadhus and saints. Your donation
                helps maintain continuous kitchen operations serving the spiritual community
                throughout the pilgrimage season.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gold-light/30 text-center">
              <div className="flex justify-center mb-4">
                <GiBookCover className="text-3xl text-gold" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-3">
                Vidya Daan
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Girl child education in Uttarkashi region. Education can lighten up their
                lives and bring smiles. Your support helps provide schooling and resources
                to girls who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Donate Amounts */}
      <section className="bg-maroon py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-3">
            Choose an Amount
          </h2>
          <p className="text-cream-dark/70 mb-8">
            Every contribution, big or small, makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[101, 251, 501, 1100, 2100, 5100, 11000, 21000].map((amt) => (
              <button
                key={amt}
                className="px-6 py-3 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white hover:text-maroon transition-all cursor-pointer"
              >
                ₹{amt.toLocaleString("en-IN")}
              </button>
            ))}
          </div>
          <p className="text-cream-dark/50 text-sm mb-6">
            Or donate any custom amount via bank transfer below.
          </p>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Bank Transfer
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Donate via Bank Transfer
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gold-light/30 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <p className="text-muted text-xs uppercase tracking-wider mb-1">Account Name</p>
                <p className="font-semibold text-charcoal">Jagat Kalyan Seva Samiti</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-wider mb-1">Account Number</p>
                <p className="font-semibold text-charcoal font-mono">50200062344622</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-wider mb-1">IFSC Code</p>
                <p className="font-semibold text-charcoal font-mono">HDFC0000001</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-wider mb-1">Account Type</p>
                <p className="font-semibold text-charcoal">Savings</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-muted text-xs uppercase tracking-wider mb-1">Branch</p>
                <p className="font-semibold text-charcoal">
                  HDFC Bank, Nariman Point, Tulsiani Chambers
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-muted text-sm mt-6">
            After making a bank transfer, please{" "}
            <Link href="/contact" className="text-gold-dark hover:underline">
              contact us
            </Link>{" "}
            with your transaction details so we can confirm your donation.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-cream-dark py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-4">
            Need Help Donating?
          </h2>
          <p className="text-muted mb-6">
            Call us or send a WhatsApp message and we&apos;ll guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918126298501"
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-gold to-gold-dark rounded-full hover:shadow-lg transition-all"
            >
              Call +91 81262 98501
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919920813556&text=Jai%20Ganga%20Maiya.%20I%20want%20to%20donate."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-semibold text-gold-dark border-2 border-gold rounded-full hover:bg-gold hover:text-white transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
