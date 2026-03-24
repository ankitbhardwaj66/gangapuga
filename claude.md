# Claude Code Instructions — gangapuja.org

## Push Procedure

When the user says **"push"**, always run this exact sequence without asking:

```bash
# 1. Clean & rebuild
rm -rf out/
npm run build

# 2. Commit and push to GitHub (source files only — out/ is gitignored)
git add -A
git commit -m "..."
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes" git push

# 3. Rsync built files directly to Hostinger
rsync -avz --delete -e "ssh -p 65002" out/ u889244618@46.28.45.163:/home/u889244618/domains/gangapuja.org/public_html/
```

> **NEVER commit `out/`** — it is gitignored and deployed via rsync only.
> **ALWAYS `rm -rf out/` before building** — stale files from previous builds must be cleared first.
> **ALWAYS use `id_ed25519` SSH key** for git push (the `id_rsa` key is for a different GitHub account).

---

## Git Config

- **user.name:** Ankit Bhardwaj
- **user.email:** ankitbhardwaj244487@gmail.com
- **SSH key for push:** `~/.ssh/id_ed25519`

---

## Project Overview

- **Site:** gangapuja.org — Online Ganga Pooja services from Gangotri Dham
- **Org:** Jagat Kalyan Seva Samiti
- **Framework:** Next.js 16 with static export (`output: 'export'`)
- **Styling:** Tailwind CSS 4
- **Icons:** React Icons
- **Fonts:** Playfair Display (headings) + Inter (body)
- **Design:** "Sacred Modern" warm minimalist — gold/maroon/cream palette

---

## Hostinger Server Details

| Item | Value |
|---|---|
| SSH user | `u889244618` |
| SSH host | `46.28.45.163` port `65002` |
| Deploy path | `/home/u889244618/domains/gangapuja.org/public_html/` |
| Live URL | https://gangapuja.org |

---

## Design System — Sacred Modern

| Token | Value |
|---|---|
| Gold | `#B8860B` |
| Gold Light | `#E8D5B0` |
| Gold Dark | `#8B6914` |
| Maroon | `#8B1A1A` |
| Cream (Background) | `#FDF8F0` |
| Cream Dark | `#F5EDE0` |
| Charcoal (Text) | `#2D2A26` |
| Muted | `#6B6560` |
| Saffron | `#FF9933` |
| Heading font | Playfair Display |
| Body font | Inter |

---

## Key Routes

| Route | Page |
|---|---|
| `/` | Homepage — hero, services, about, video, donation CTA |
| `/about` | Gangotri story, festivals (Akshaya Tritiya, Ganga Dussehra, Diwali) |
| `/services` | Pooja rituals, kathas, dosh nivaran, daily schedule, seva |
| `/news` | News articles, videos |
| `/donate` | Donation causes, amounts, bank details |
| `/contact` | Contact form, phone, email, address |

---

## Contact Info

- Phone: +91 81262 98501, +91 94117 46771
- Email: magangapuja@gmail.com
- WhatsApp: +91 99208 13556
- Key person: Rawal Manu Maharaj Semval Sastri
- Address: Mukhwa-Gangotri Dham, 136A E C Road, Dehradun, UK-248001

---

## Bank Details (for donations)

- Account: Jagat Kalyan Seva Samiti
- A/C No: 50200062344622
- IFSC: HDFC0000001
- Branch: HDFC Bank, Nariman Point

---

## Important Notes

- This is a **Gangotri** focused site, NOT Haridwar
- Old Laravel project is in `laravel-backup/` folder (gitignored)
- Images from old site are in `public/images/`
