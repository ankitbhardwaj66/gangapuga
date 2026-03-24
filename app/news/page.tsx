import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "News & Events — Latest from Gangotri | Gangapuja",
  description:
    "Stay updated with the latest news, events, and videos from Gangotri Dham. Shravan Mass Puja, Gaushala, and more.",
  keywords: ["Gangotri news", "Gangotri events", "Shravan Mass Puja", "Gaushala Uttarkashi", "Ganga Aarti videos"],
  alternates: { canonical: "https://gangapuja.org/news/" },
  openGraph: {
    type: "website",
    url: "https://gangapuja.org/news/",
    title: "News & Events — Latest from Gangotri | Gangapuja",
    description: "Stay updated with the latest news, events, and videos from Gangotri Dham.",
    images: [{ url: "/images/parallax5.jpg", width: 1200, height: 630, alt: "Gangotri Events" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Events — Latest from Gangotri | Gangapuja",
    description: "Stay updated with the latest news, events, and videos from Gangotri Dham.",
    images: ["/images/parallax5.jpg"],
  },
};

const NEWS = [
  {
    title: "Shravan Mass Puja",
    date: "July – August 2020",
    description:
      "Group of Pandits performing Shravan Mass puja (from 21st July to 19th August 2020) at Uttarkashi / Gangotri. This sacred month-long observance brings devotees together in worship of Lord Shiva and Maa Ganga.",
    image: "/images/page-3_img01.jpg",
  },
  {
    title: "Gaushala at Uttarkashi",
    date: "September 2016",
    description:
      "Jagat Kalyan Seva Trust started a Gau Shala at Uttarkashi to care for and protect cows — considered sacred in Hindu tradition. The Gaushala serves as a center for cow welfare and spiritual practice.",
    image: "/images/page-3_img02.jpg",
  },
  {
    title: "Daily Ganga Aarti",
    date: "Ongoing",
    description:
      "The Sandhya Aarti at Gangotri continues to draw pilgrims from across the globe. The evening ritual of lighting 51 to 101 wicks with ghee and camphor brings peace, prosperity, and divine blessings.",
    image: "/images/page-3_img03.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
        <Image src="/images/parallax5.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-gold-light uppercase tracking-[0.2em] text-sm mb-3">Stay Updated</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white">
            News & Events
          </h1>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Latest Updates
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Latest News & Events
            </h2>
          </div>
          <div className="space-y-8">
            {NEWS.map(({ title, date, description, image }) => (
              <article
                key={title}
                className="bg-white rounded-2xl overflow-hidden border border-gold-light/30 hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="relative h-48 sm:h-auto">
                    <Image src={image} alt={title} fill className="object-cover" />
                  </div>
                  <div className="sm:col-span-2 p-6 sm:p-8">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      {date}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mt-1 mb-3">
                      {title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-cream-dark py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Watch
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal">
              Latest Videos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UnQXTiBKJyU"
                title="Gangotri Aarti"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gcC30ootNUI"
                title="Ganga Pooja at Gangotri"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xjxMv79femo"
                title="Gangotri Dham"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-20 px-4 overflow-hidden">
        <Image src="/images/parallax6.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="ornament-border w-24 mx-auto mb-6" />
          <blockquote className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold-light italic leading-relaxed">
            &ldquo;The evening ritual involves lighting 51 to 101 wicks with ghee, oil and
            camphor — bringing peace, prosperity, and happiness.&rdquo;
          </blockquote>
          <div className="ornament-border w-24 mx-auto mt-6" />
        </div>
      </section>
    </>
  );
}
