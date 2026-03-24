import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
  { href: "/news", label: "News & Events" },
];

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/onlinegangapooja/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/gangapujaonline/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.youtube.com/channel/UC61_Xalv8nGcTcGf_qTcxmw", icon: FaYoutube, label: "YouTube" },
  { href: "https://api.whatsapp.com/send?phone=919920813556&text=Jai%20Ganga%20Maiya", icon: FaWhatsapp, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-dark">
      {/* Top */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-gold-light font-bold mb-4">
              गंगापूजा
            </h3>
            <p className="text-sm text-cream-dark/70 leading-relaxed">
              Jagat Kalyan Seva Samiti — dedicated to performing authentic Ganga Pooja
              ceremonies at the sacred origin of the Ganges in Gangotri Dham.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream-dark/70 hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
              Get in Touch
            </h4>
            <address className="not-italic text-sm text-cream-dark/70 space-y-2">
              <p>Mukhwa-Gangotri Dham</p>
              <p>136A E C Road, Opp. Bharat Heart Institute</p>
              <p>Dehradun, UK - 248001, India</p>
              <p className="pt-2">
                <a href="tel:+918126298501" className="hover:text-gold transition-colors">
                  +91 81262 98501
                </a>
              </p>
              <p>
                <a href="tel:+919411746771" className="hover:text-gold transition-colors">
                  +91 94117 46771
                </a>
              </p>
              <p>
                <a href="mailto:magangapuja@gmail.com" className="hover:text-gold transition-colors">
                  magangapuja@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Bank Details */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
              Bank Details
            </h4>
            <div className="text-sm text-cream-dark/70 space-y-1">
              <p className="font-medium text-cream-dark/90">Jagat Kalyan Seva Samiti</p>
              <p>A/C: 50200062344622</p>
              <p>IFSC: HDFC0000001</p>
              <p>HDFC Bank, Nariman Point</p>
              <p>Savings Account</p>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-5">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gold-light hover:bg-gold hover:text-charcoal transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-xs text-cream-dark/40 text-center">
          <p>
            Concept: Ashish Desai · Photography: Dheeraj Kulkarni, Vijay Mudshingikar · Content: Jyothsna Niranjan
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-dark/50">
          <p>© {new Date().getFullYear()} Gangapuja.org — All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://ankitbhardwaj.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold transition-colors"
            >
              Ankit Bhardwaj
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
