# Gangapuja.org

Online Ganga Pooja services from Gangotri Dham. Book authentic puja ceremonies performed at the sacred origin of the Ganges.

**Live:** [https://gangapuja.org](https://gangapuja.org)

## Tech Stack

- **Framework:** Next.js 16 (static export)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Icons:** React Icons
- **Fonts:** Playfair Display (headings) + Inter (body)
- **Design:** Sacred Modern — warm gold/maroon/cream palette

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage — swastik, diyas, hero, services, mission, video, donation CTA |
| `/about` | Gangotri story, festivals (Akshaya Tritiya, Ganga Dussehra, Diwali) |
| `/services` | Pooja rituals, kathas, dosh nivaran, daily schedule, seva initiatives |
| `/news` | News articles, event updates, videos |
| `/donate` | Donation causes, preset amounts, bank transfer details |
| `/contact` | Contact form, phone, email, address |

## Features

- Animated glowing diyas and 3D gold SVG swastik in hero section
- SVG diya favicon
- Full SEO meta tags on all pages (OG, Twitter, canonical, keywords)
- Mobile-first responsive design with hamburger menu
- Floating WhatsApp contact button
- Sacred Modern design system (gold #B8860B / maroon #8B1A1A / cream #FDF8F0)

## Setup

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Static export to out/
```

## Deployment

Hosted on Hostinger. Built static files are deployed via rsync:

```bash
rm -rf out/
npm run build
rsync -avz --delete -e "ssh -p 65002" out/ u889244618@46.28.45.163:/home/u889244618/domains/gangapuja.org/public_html/
```

## Organization

**Jagat Kalyan Seva Samiti**
Mukhwa-Gangotri Dham, 136A E C Road, Dehradun, UK - 248001

- Phone: +91 81262 98501, +91 94117 46771
- Email: magangapuja@gmail.com
- Key Contact: Rawal Manu Maharaj Semval Sastri

## Project Structure

```
app/
├── page.tsx              # Homepage
├── about/page.tsx        # About & festivals
├── services/page.tsx     # Pooja services & schedule
├── news/page.tsx         # News & videos
├── donate/page.tsx       # Donation page
├── contact/page.tsx      # Contact form
├── layout.tsx            # Root layout (fonts, meta, header/footer)
├── globals.css           # Tailwind + diya/swastik animations
├── icon.svg              # Diya favicon
components/
├── Header.tsx            # Sticky nav with mobile menu
├── Footer.tsx            # Contact, links, bank details, credits
├── WhatsAppWidget.tsx    # Floating WhatsApp button
├── Diya.tsx              # Animated oil lamp component
├── Swastik.tsx           # 3D gold SVG swastik component
public/images/            # Site images
laravel-backup/           # Old Laravel project (archived)
```
