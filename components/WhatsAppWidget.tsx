"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919920813556&text=Jai%20Ganga%20Maiya"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
