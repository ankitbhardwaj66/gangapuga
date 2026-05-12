"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New enquiry from gangapuja.org");
    data.append("_captcha", "false");
    data.append("_template", "table");

    try {
      const res = await fetch("https://formsubmit.co/ajax/magangapuja@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success === "true" || json.success === true) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gold-light/30 shadow-sm">
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-6">
        Send us a Message
      </h3>

      {status === "success" ? (
        <div className="py-10 text-center">
          <p className="text-2xl mb-3">🙏</p>
          <p className="font-semibold text-charcoal text-lg mb-2">Message Received!</p>
          <p className="text-muted text-sm">
            We will get back to you within 24 hours. Jai Ganga Maiya!
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm text-gold-dark hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
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

          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again or WhatsApp us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-gold to-gold-dark rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all disabled:opacity-60 cursor-pointer"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
