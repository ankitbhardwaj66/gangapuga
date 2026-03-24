"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://api.whatsapp.com/send?phone=919920813556&text=Jai%20Ganga%20Maiya"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
