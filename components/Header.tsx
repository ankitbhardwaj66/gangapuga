"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "News & Events" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gold-light/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-gold-dark tracking-tight">
              गंगापूजा
            </span>
            <span className="text-xs text-muted uppercase tracking-[0.2em] border-l border-gold-light pl-3">
              Gangotri
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? "text-maroon bg-maroon/5"
                      : "text-charcoal hover:text-gold-dark hover:bg-gold-light/30"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-gold to-gold-dark rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <nav className="md:hidden pb-4 border-t border-gold-light/30 pt-3 animate-fade-in">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-base rounded-lg transition-colors ${
                    active
                      ? "text-maroon bg-maroon/5 font-medium"
                      : "text-charcoal hover:bg-gold-light/30"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
