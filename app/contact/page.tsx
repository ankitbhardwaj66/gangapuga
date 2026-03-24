import type { Metadata } from "next";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact — Get in Touch | Gangapuja",
  description:
    "Contact Jagat Kalyan Seva Samiti for Ganga Pooja bookings, donations, and enquiries. Located at Gangotri Dham, Dehradun.",
  keywords: ["Contact Gangapuja", "Gangotri Pooja booking", "Jagat Kalyan Seva Samiti", "Gangotri contact"],
  alternates: { canonical: "https://gangapuja.org/contact/" },
  openGraph: {
    type: "website",
    url: "https://gangapuja.org/contact/",
    title: "Contact — Get in Touch | Gangapuja",
    description: "Contact Jagat Kalyan Seva Samiti for Ganga Pooja bookings, donations, and enquiries.",
    images: [{ url: "/images/parallax7.jpg", width: 1200, height: 630, alt: "Contact Gangapuja" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Get in Touch | Gangapuja",
    description: "Contact Jagat Kalyan Seva Samiti for Ganga Pooja bookings, donations, and enquiries.",
    images: ["/images/parallax7.jpg"],
  },
};

const CONTACT_METHODS = [
  {
    icon: <FaPhoneAlt className="text-lg" />,
    label: "Phone",
    value: "+91 81262 98501",
    href: "tel:+918126298501",
    secondary: "+91 94117 46771",
    secondaryHref: "tel:+919411746771",
  },
  {
    icon: <FaEnvelope className="text-lg" />,
    label: "Email",
    value: "magangapuja@gmail.com",
    href: "mailto:magangapuja@gmail.com",
  },
  {
    icon: <FaWhatsapp className="text-lg" />,
    label: "WhatsApp",
    value: "+91 99208 13556",
    href: "https://api.whatsapp.com/send?phone=919920813556&text=Jai%20Ganga%20Maiya",
  },
  {
    icon: <FaMapMarkerAlt className="text-lg" />,
    label: "Address",
    value: "Mukhwa-Gangotri Dham, 136A E C Road, Opp. Bharat Heart Institute, Dehradun, UK - 248001",
    href: "https://maps.google.com/?q=Dehradun+Uttarakhand+India",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
        <Image src="/images/parallax7.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-gold-light uppercase tracking-[0.2em] text-sm mb-3">Get in Touch</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-cream-dark/80 max-w-xl mx-auto">
            Before coming to our office, please give us a call first. We will arrange an appointment for you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-2">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Contact Details
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-charcoal mb-8">
              Jagat Kalyan Seva Samiti
            </h2>

            <div className="space-y-6">
              {CONTACT_METHODS.map(({ icon, label, value, href, secondary, secondaryHref }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold-light/20 text-gold shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-charcoal hover:text-gold-dark transition-colors text-sm"
                    >
                      {value}
                    </a>
                    {secondary && (
                      <>
                        <br />
                        <a
                          href={secondaryHref}
                          className="text-charcoal hover:text-gold-dark transition-colors text-sm"
                        >
                          {secondary}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Person */}
            <div className="mt-8 p-5 bg-cream-dark rounded-xl border border-gold-light/30">
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                Key Contact
              </p>
              <p className="text-charcoal font-medium text-sm">
                Rawal Manu Maharaj Semval Sastri
              </p>
              <p className="text-muted text-sm">
                Mukhwa Village, Markandeyapuri, Harshil, Uttar Kaashi District
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gold-light/30 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-6">
                Send us a Message
              </h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 text-sm border border-gold-light/50 rounded-lg bg-cream/30 text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 text-sm border border-gold-light/50 rounded-lg bg-cream/30 text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 text-sm border border-gold-light/50 rounded-lg bg-cream/30 text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-sm border border-gold-light/50 rounded-lg bg-cream/30 text-charcoal placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about the pooja you'd like to book, or any questions..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-gold to-gold-dark rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
