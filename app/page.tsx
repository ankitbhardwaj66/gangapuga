import Link from "next/link";
import Image from "next/image";
import { FaOm, FaHandsHelping, FaPhoneAlt } from "react-icons/fa";
import { GiLotus, GiTempleDoor } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import Diya from "@/components/Diya";
import Swastik from "@/components/Swastik";

const SERVICES = [
  {
    icon: <FaOm className="text-3xl text-gold" />,
    title: "Ganga Pooja",
    description:
      "Ritual worship offered daily to Maa Ganga for attaining happiness, prosperity, salvation, peace and moksha. Purifies devotee souls, absolves sins, and facilitates ancestor liberation.",
    image: "/images/page-1_img01.jpg",
  },
  {
    icon: <GiLotus className="text-3xl text-gold" />,
    title: "Ganga Abhishek",
    description:
      "Special ritual performed using honey, milk, and fruits to fulfill desires. Believed to bring happiness, career and business success, and cure diseases and ailments.",
    image: "/images/page-1_img02.jpg",
  },
  {
    icon: <GiTempleDoor className="text-3xl text-gold" />,
    title: "Dosh Nivaran Pooja",
    description:
      "Performed at Gangotri to address astrological doshas including Manglik Dosh, Kaal Sarp Yog Dosh, and Pitru Dosh through Ganga's purifying power.",
    image: "/images/page-1_img03.jpg",
  },
];

const TRUST_ITEMS = [
  { icon: <MdVerified className="text-gold text-xl" />, text: "Verified Pandits" },
  { icon: <GiTempleDoor className="text-gold text-xl" />, text: "Live from Gangotri" },
  { icon: <FaHandsHelping className="text-gold text-xl" />, text: "500+ Pujas Performed" },
  { icon: <FaPhoneAlt className="text-gold text-xl" />, text: "Personal Assistance" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative flex items-center justify-center py-16 pb-20 sm:py-24 sm:pb-24 overflow-visible">
        <Image
          src="/images/header-bg.jpg"
          alt="Gangotri Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Diyas */}
        <div className="absolute bottom-4 left-8 sm:left-16 z-10 opacity-90" style={{ animationDelay: "0.5s" }}>
          <Diya />
        </div>
        <div className="absolute bottom-4 right-8 sm:right-16 z-10 opacity-90" style={{ animationDelay: "0.8s" }}>
          <Diya />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 opacity-70 hidden lg:block" style={{ animationDelay: "1.1s" }}>
          <div className="flex gap-40">
            <Diya />
            <Diya />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="mb-5 animate-fade-in-up flex justify-center">
            <Swastik className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_0_15px_rgba(255,200,50,0.4)]" />
          </div>
          <p className="text-gold-light text-sm sm:text-base tracking-[0.3em] uppercase mb-3 animate-fade-in-up">
            ॐ नमो गंगायै विश्वरूपिण्यै नारायण्यै नमो नमः
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Online Ganga Pooja <br className="hidden sm:block" />
            <span className="text-gold-light">from Gangotri Dham</span>
          </h1>
          <p
            className="text-cream-dark/80 text-base sm:text-lg mb-8 max-w-xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Ganga Pooja by pandits at Gangotri — available online now. We collect your
            name, gotra, and family details and our pandits perform the pooja on your behalf.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            <Link
              href="/services"
              className="px-8 py-3.5 text-base font-semibold text-charcoal bg-gradient-to-r from-gold-light to-gold rounded-full hover:shadow-xl hover:shadow-gold/30 transition-all"
            >
              Book a Pooja
            </Link>
            <Link
              href="/donate"
              className="px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ──────────────────────────────────── */}
      <section className="bg-cream-dark border-y border-gold-light/40 relative z-20">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-wrap justify-center gap-6 sm:gap-10">
          {TRUST_ITEMS.map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-muted">
              {icon}
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Our Services
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Sacred Ceremonies at Gangotri
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map(({ icon, title, description, image }) => (
              <div
                key={title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gold-light/30 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-saffron" />
                </div>
                <div className="p-6">
                  <div className="mb-3">{icon}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-2">
                    {title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-gold-dark hover:text-maroon transition-colors"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Mission ────────────────────────────── */}
      <section className="bg-cream-dark py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/page-1_img04.jpg"
              alt="Gangotri Dham"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold-light/20" />
          </div>
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Our Mission
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              To Bring Ganga Pooja Available to Everyone
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ganga is one of Hinduism&apos;s seven sacred rivers. Though Gangotri — the river&apos;s
              source in the Himalayan Range — remains inaccessible for most, our organization
              facilitates remote participation by collecting devotee names, gotra, and family
              details for pandit-performed poojas.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Ganga Pooja is the most important ritual in Hinduism. Daily temple services at
              Gangotri include Morning Mangal Aarti, Ganga Devi Pooja at the riverbanks, and
              the sacred Sandhya Aarti in the evenings.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 text-sm font-semibold text-gold-dark border-2 border-gold rounded-full hover:bg-gold hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quote / Shloka ─────────────────────────────── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <Image src="/images/parallax1.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="ornament-border w-24 mx-auto mb-6" />
          <blockquote className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold-light italic leading-relaxed mb-6">
            &ldquo;Goddess Ganga descended from heaven to remove human sins and provide
            salvation, peace, and moksha.&rdquo;
          </blockquote>
          <p className="text-cream-dark/60 text-sm uppercase tracking-wider">
            — Ganga Aarti at Gangotri
          </p>
          <div className="ornament-border w-24 mx-auto mt-6" />
        </div>
      </section>

      {/* ── Video Section ──────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gcC30ootNUI"
              title="Gangotri Puja"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Ganga Aarti
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Experience the Divine
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              The evening Ganga Aarti ritual involves lighting 51 to 101 wicks with ghee, oil,
              and camphor — bringing peace, prosperity, and happiness to all who witness it.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Videos and Prasad of every pooja are sent to devotees via courier, so you can
              receive the blessings no matter where you are in the world.
            </p>
            <Link
              href="/news"
              className="text-sm font-semibold text-gold-dark hover:text-maroon transition-colors"
            >
              See More Videos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Donation CTA ───────────────────────────────── */}
      <section className="bg-maroon py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-light/80 uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Support Ganga Seva
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Donation Makes a Difference
          </h2>
          <p className="text-cream-dark/70 mb-8 max-w-xl mx-auto">
            Help us continue Anna Daan (community kitchen for sadhus and saints at Gangotri)
            and Vidya Daan (girl child education in Uttarkashi).
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["₹101", "₹251", "₹501", "₹1,100", "₹5,100"].map((amount) => (
              <Link
                key={amount}
                href="/donate"
                className="px-6 py-2.5 text-sm font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white hover:text-maroon transition-all"
              >
                {amount}
              </Link>
            ))}
          </div>
          <Link
            href="/donate"
            className="inline-block px-8 py-3.5 text-base font-semibold text-maroon bg-gradient-to-r from-gold-light to-gold rounded-full hover:shadow-xl transition-all"
          >
            Donate Any Amount
          </Link>
        </div>
      </section>
    </>
  );
}
