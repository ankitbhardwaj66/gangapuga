import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaOm, FaFire, FaPrayingHands } from "react-icons/fa";
import { GiLotus, GiTempleDoor, GiBookCover } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Services — Pooja & Rituals at Gangotri | Gangapuja",
  description:
    "Book Ganga Aarti, Ganga Pooja, Ganga Abhishek, Hawan, Pitru Tarpan, Katha services, and Dosh Nivaran Pooja performed by pandits at Gangotri Dham.",
  keywords: ["Ganga Aarti", "Ganga Pooja", "Ganga Abhishek", "Hawan", "Pitru Tarpan", "Dosh Nivaran", "Gangotri services"],
  alternates: { canonical: "https://gangapuja.org/services/" },
  openGraph: {
    type: "website",
    url: "https://gangapuja.org/services/",
    title: "Services — Pooja & Rituals at Gangotri | Gangapuja",
    description: "Book Ganga Aarti, Ganga Pooja, Ganga Abhishek, Hawan, Pitru Tarpan, and Dosh Nivaran Pooja at Gangotri Dham.",
    images: [{ url: "/images/parallax4.jpg", width: 1200, height: 630, alt: "Pooja at Gangotri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Pooja & Rituals at Gangotri | Gangapuja",
    description: "Book Ganga Aarti, Ganga Pooja, Ganga Abhishek, Hawan, Pitru Tarpan, and Dosh Nivaran Pooja at Gangotri Dham.",
    images: ["/images/parallax4.jpg"],
  },
};

const POOJAS = [
  {
    icon: <FaOm className="text-2xl" />,
    title: "Ganga Aarti",
    description:
      "Performed on the riverbanks at Gangotri to provide peace of mind and bring happiness and prosperity to devotees.",
  },
  {
    icon: <GiLotus className="text-2xl" />,
    title: "Ganga Pooja",
    description:
      "Provides happiness, prosperity, peace and moksha through the Shodasa Upachar — the 16 sacred ritual steps of worship.",
  },
  {
    icon: <GiTempleDoor className="text-2xl" />,
    title: "Ganga Abhishek",
    description:
      "Special ritual using honey, milk, and fruits for fulfilling dreams and desires, bringing success in career and business.",
  },
  {
    icon: <FaFire className="text-2xl" />,
    title: "Hawan Pooja",
    description:
      "Sacred fire ritual available for births, weddings, birthdays, anniversaries, and other auspicious occasions.",
  },
  {
    icon: <FaPrayingHands className="text-2xl" />,
    title: "Pitru Tarpan / Pindaan",
    description:
      "Prayer for departed ancestors' peace and liberation. Performed at the sacred banks of Ganga at Gangotri.",
  },
];

const KATHAS = [
  {
    title: "Bhagwat Katha",
    description: "Devotion to Lord Krishna, featuring 1800 sacred mantras.",
  },
  {
    title: "Ganga Katha",
    description: "The divine story of the descent of Ganga from the heavens.",
  },
  {
    title: "Devi Bhagwat Katha",
    description: "Sacred teachings of Goddess Shakti and divine feminine power.",
  },
  {
    title: "Shiv Mahapuran",
    description: "The 10 incarnations of Lord Shiva narrated in full.",
  },
];

const DOSH_NIVARAN = [
  {
    title: "Manglik Dosh Nivaran",
    description:
      "Addresses marriage delays and couple conflicts caused by Mars planetary influence. Performed with specific mantras at Gangotri.",
  },
  {
    title: "Kaal Sarp Yog Dosh",
    description:
      "Resolves health, financial, and employment issues arising from Rahu-Ketu planetary positions.",
  },
  {
    title: "Pitra Dosh Nivaran",
    description:
      "Addresses ancestral curses requiring shraddha (devotion) for the liberation of departed souls.",
  },
];

const SCHEDULE = [
  { time: "06:30 AM", activity: "Mangla Aarti", instructor: "Rawal Manu Maharaj", phone: "+91 8126298501" },
  { time: "08:00 AM", activity: "Bal Bhog", instructor: "Rawal Manu Maharaj", phone: "+91 8126298501" },
  { time: "11:00 AM", activity: "Raj Bhog", instructor: "Rawal Manu Maharaj", phone: "+91 8126298501" },
  { time: "07:45 PM", activity: "Sandhya Aarti", instructor: "Rawal Manu Maharaj", phone: "+91 8126298501" },
];

const SEVA = [
  {
    icon: <FaPrayingHands className="text-3xl text-gold" />,
    title: "Anna Daan",
    description:
      "Community kitchen at Gangotri supporting sadhus and saints. Your donation helps maintain continuous kitchen operations serving the spiritual community.",
  },
  {
    icon: <GiBookCover className="text-3xl text-gold" />,
    title: "Vidya Daan",
    description:
      "Girl child education initiative in Uttarkashi. Education can lighten up their lives and bring smiles — your support makes this possible.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
        <Image src="/images/parallax4.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-gold-light uppercase tracking-[0.2em] text-sm mb-3">Our Services</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Pooja & Rituals at Gangotri
          </h1>
          <p className="text-cream-dark/80 max-w-xl mx-auto">
            Pandits based at Gangotri perform rituals on behalf of devotees unable to visit
            due to distance or weather, following Hindu traditions and community-specific customs.
          </p>
        </div>
      </section>

      {/* Pooja Services */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Pooja Rituals
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Sacred Ceremonies
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POOJAS.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-gold-light/30 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold-light/20 text-gold mb-4">
                  {icon}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-charcoal mb-2">
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-8 italic">
            Videos and Prasad of every pooja are sent to devotees via courier.
          </p>
        </div>
      </section>

      {/* Katha Services */}
      <section className="bg-cream-dark py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Katha Services
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Sacred Narrations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {KATHAS.map(({ title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5 border border-gold-light/30 flex gap-4 items-start"
              >
                <GiBookCover className="text-gold text-xl mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">{title}</h3>
                  <p className="text-muted text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dosh Nivaran */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Dosh Nivaran
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Problem Resolution Poojas
            </h2>
            <p className="text-muted mt-3 max-w-xl mx-auto text-sm">
              Required details: Name, birth date, birthplace, and birth time.
            </p>
          </div>
          <div className="space-y-4">
            {DOSH_NIVARAN.map(({ title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-gold-light/30"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-charcoal mb-2">
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="bg-cream-dark py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Daily Schedule
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Activities at Gangotri Temple
            </h2>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gold-light/30">
            <table className="w-full">
              <thead>
                <tr className="bg-gold-light/20 text-left">
                  <th className="px-6 py-4 text-sm font-semibold text-charcoal">Time</th>
                  <th className="px-6 py-4 text-sm font-semibold text-charcoal">Activity</th>
                  <th className="px-6 py-4 text-sm font-semibold text-charcoal hidden sm:table-cell">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map(({ time, activity, instructor, phone }, i) => (
                  <tr
                    key={activity}
                    className={i % 2 === 1 ? "bg-cream/50" : ""}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gold-dark">{time}</td>
                    <td className="px-6 py-4 text-sm text-charcoal">{activity}</td>
                    <td className="px-6 py-4 text-sm text-muted hidden sm:table-cell">
                      {instructor} ·{" "}
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-gold-dark hover:underline">
                        {phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Charitable Work */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Charitable Initiatives
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Seva at Gangotri
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SEVA.map(({ icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gold-light/30 text-center">
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-3">
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
                <Link
                  href="/donate"
                  className="text-sm font-semibold text-gold-dark hover:text-maroon transition-colors"
                >
                  Support This Cause →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maroon py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Book a Pooja?
          </h2>
          <p className="text-cream-dark/70 mb-6">
            Get in touch with us to book any service. We&apos;ll collect your details and our pandits
            at Gangotri will perform the ceremony on your behalf.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 text-base font-semibold text-maroon bg-gradient-to-r from-gold-light to-gold rounded-full hover:shadow-xl transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
