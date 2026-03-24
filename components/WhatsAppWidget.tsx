"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919920813556&text=Jai%20Ganga%20Maiya"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-10 h-12 rounded-l-lg bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:w-12 transition-all md:bottom-6 md:right-6 md:top-auto md:translate-y-0 md:w-14 md:h-14 md:rounded-full md:hover:w-14 md:hover:scale-110"
    >
      <FaWhatsapp className="text-xl md:text-3xl" />
    </a>
  );
}
