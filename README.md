# Gangapuja.org

Web platform for online Ganga Puja services — book poojas, make donations, and stay connected with daily activities and news.

**Live:** [https://gangapuja.org](https://gangapuja.org)

## Tech Stack

- **Framework:** Laravel 7.24 (PHP 7.2+)
- **Admin Panel:** Voyager 1.4 (CMS with BREAD interface)
- **Payments:** Razorpay (INR)
- **Database:** MySQL
- **Frontend:** jQuery, Bootstrap grid, FancyBox, WOW.js, Parallax
- **Build:** Laravel Mix + Webpack

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Homepage — banners, testimonials, featured content |
| `/about` | About & Pooja services listing with prices |
| `/services` | Daily scheduled activities with times & instructors |
| `/news` | News, events, and video content |
| `/donate` | Donation form with Razorpay payment |
| `/contact` | Contact form with reCAPTCHA v3 |
| `/pay` | Razorpay order creation & checkout |
| `/success` | Payment confirmation |
| `/admin` | Voyager admin panel |

## Models

| Model | Purpose |
|-------|---------|
| Content | Dynamic page content managed via admin |
| Donation | Donor info, amount, Razorpay order ID, payment status |
| Activity | Daily scheduled activities (time, name, instructor) |
| Pooja | Puja services with name and price |
| News | News/event articles |
| Video | Embedded video content |
| Gallery | Image gallery items |
| Meta | Per-page SEO metadata (title, keywords, description) |

## Key Features

- **Donations** — Two-step flow: form submission → Razorpay payment → confirmation email
- **Contact Form** — Google reCAPTCHA v3 verified, sends email to admin
- **Admin Panel** — Voyager CMS for managing all content, settings, users, and media
- **Dynamic Content** — Page content, settings, and SEO metadata editable from admin
- **WhatsApp Integration** — Floating contact button
- **Google Analytics** — Tracking enabled (UA-164275863-1)

## Project Structure

```
app/
├── Http/Controllers/GangaController.php   # All frontend logic
├── Mail/ContactForm.php                   # Contact form email
├── Mail/DonationThanks.php                # Donation confirmation email
├── Activity.php, Content.php, Donation.php, Gallery.php,
│   Meta.php, News.php, Pooja.php, Video.php   # Eloquent models
resources/views/
├── layouts/ganga.blade.php                # Main layout
├── index.blade.php                        # Homepage
├── services.blade.php                     # About/Pooja services
├── activities.blade.php                   # Daily activities
├── donate.blade.php                       # Donation form
├── contact.blade.php                      # Contact form
├── pay.blade.php                          # Razorpay checkout
├── success.blade.php                      # Payment confirmation
public/ganga/
├── css/                                   # Stylesheets
├── js/                                    # jQuery plugins & scripts
├── images/                                # Parallax backgrounds & content images
```

## Setup

```bash
# Install dependencies
composer install
npm install

# Configure environment
cp .env.example .env
php artisan key:generate

# Set up database
php artisan migrate
php artisan db:seed

# Link storage
php artisan storage:link

# Run locally
php artisan serve
```

### Environment Variables

Key variables to configure in `.env`:

```
APP_URL=https://gangapuja.org
DB_DATABASE=gangapuja
DB_USERNAME=
DB_PASSWORD=
MAIL_MAILER=smtp
MAIL_HOST=
MAIL_USERNAME=
MAIL_PASSWORD=
```

Razorpay and reCAPTCHA credentials are configured in the controller and `config/services.php`.

## Deployment

Hosted on Hostinger. The `public/` directory maps to the domain's `public_html/`.

## Admin Access

Navigate to `/admin` and log in with Voyager credentials. From the admin panel you can manage:
- Site settings (logo, contact info, page content)
- Donations and payment records
- News, activities, poojas, gallery, and videos
- Users and roles
