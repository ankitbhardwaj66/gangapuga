import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Events & Festivals in Gangotri | Gangapuja",
  description:
    "Learn about Ganga Pooja ceremonies, festivals like Akshaya Tritiya and Ganga Dussehra, and the spiritual significance of Gangotri Dham.",
  keywords: ["Gangotri festivals", "Akshaya Tritiya", "Ganga Dussehra", "Gangotri Dham", "Ganga Pooja"],
  alternates: { canonical: "https://gangapuja.org/about/" },
  openGraph: {
    type: "website",
    url: "https://gangapuja.org/about/",
    title: "About — Events & Festivals in Gangotri | Gangapuja",
    description: "Learn about Ganga Pooja ceremonies, festivals, and the spiritual significance of Gangotri Dham.",
    images: [{ url: "/images/parallax2.jpg", width: 1200, height: 630, alt: "Gangotri Dham" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Events & Festivals in Gangotri | Gangapuja",
    description: "Learn about Ganga Pooja ceremonies, festivals, and the spiritual significance of Gangotri Dham.",
    images: ["/images/parallax2.jpg"],
  },
};

const FESTIVALS = [
  {
    title: "Akshaya Tritiya",
    timing: "April – May",
    description:
      "Celebrates the goddess's idol return from its winter residence at Mukhwa village with grand prayers, celebrations, and the ceremonial opening of Gangotri temple.",
    image: "/images/page-2_img01.jpg",
  },
  {
    title: "Ganga Dussehra",
    timing: "May – June",
    description:
      "A 10-day observance marking the victory over 10 sins — the day Goddess Ganga descended on earth. Devotees from around the world gather at Gangotri for this sacred occasion.",
    image: "/images/page-2_img02.jpg",
  },
  {
    title: "Diwali at Gangotri",
    timing: "October – November",
    description:
      "The temple closing ceremony where the deity's idol is transferred to Mukhwa's winter temple. A deeply moving ritual marking the end of the pilgrimage season.",
    image: "/images/page-2_img03.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
        <Image src="/images/parallax2.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-gold-light uppercase tracking-[0.2em] text-sm mb-3">About Us</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Events & Festivals in Gangotri
          </h1>
        </div>
      </section>

      {/* Story of Ganga */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            The Sacred River
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal mb-8">
            The River Ganga & Gangotri
          </h2>
          <div className="text-muted leading-relaxed space-y-4 text-base">
            <p>
              The River Ganga holds deep spiritual significance in Indian culture. According to
              mythology, Devi Ganga — the sister of Maa Parvati — is the earthly manifestation
              of the Ganga River. The deity descended through Lord Shiva&apos;s locks after King
              Bhagirath&apos;s prayers.
            </p>
            <p>
              Pooja ceremonies occur at Gangotri from May to October. During November to April,
              observances move to Uttarkashi due to the harsh Himalayan climate. The Ganga River
              cleanses the souls and removes sins when people dip in its waters, and offerings
              to Ganga Maa help in purifying the soul and attaining Moksha.
            </p>
            <p>
              The Sandhya Aarti at Gangotri draws pilgrims from around the globe — people of
              various faiths come to witness this powerful evening ceremony on the banks of the
              sacred river.
            </p>
          </div>
        </div>
      </section>

      {/* Festivals */}
      <section className="bg-cream-dark py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Sacred Occasions
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Festivals at Gangotri
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FESTIVALS.map(({ title, timing, description, image }) => (
              <div
                key={title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gold-light/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={image} alt={title} fill className="object-cover" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-saffron" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {timing}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mt-1 mb-3">
                    {title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-20 px-4 overflow-hidden">
        <Image src="/images/parallax3.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="ornament-border w-24 mx-auto mb-6" />
          <blockquote className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold-light italic leading-relaxed mb-6">
            &ldquo;Ganga River cleanses the souls &amp; removes sins when people dip in its
            waters. Offerings to Ganga Maa help in purifying the soul &amp; attaining Moksha.&rdquo;
          </blockquote>
          <div className="ornament-border w-24 mx-auto mt-6" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
            Book Your Pooja at Gangotri
          </h2>
          <p className="text-muted mb-8">
            Our pandits perform all ceremonies following authentic Vedic traditions.
            Videos and Prasad are sent to you via courier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-gold to-gold-dark rounded-full hover:shadow-lg transition-all"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 text-sm font-semibold text-gold-dark border-2 border-gold rounded-full hover:bg-gold hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
