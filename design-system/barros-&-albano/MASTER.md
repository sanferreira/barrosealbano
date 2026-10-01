# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Barros & Albano  
**Generated:** 2026-09-23 (ui-ux-pro-max skill · `--design-system --persist`)  
**Category:** Digital certificates · Trust & Authority · Premium service landing  

---

## Source

Persisted from:

```bash
python .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "digital certificate professional service premium SaaS trust security navy gold" \
  --design-system --persist -p "Barros & Albano"
```

Supplemented with: `--domain ux`, `--domain typography`, `--domain landing`, `--stack nextjs`.

---

## Pattern

- **Name:** Hero + Testimonials + CTA
- **Conversion Focus:** Social proof before final CTA. Metrics + verified quote. CTA in hero + after social proof.
- **CTA Placement:** Hero (primary) + Post-testimonials (specialist) + Sticky WhatsApp FAB
- **Sections (adapted to product):**
  1. Hero (brand + interactive PF/PJ)
  2. Solution / certificates (bento, no prices)
  3. Benefits (trust pillars)
  4. How it works (steps)
  5. Social proof (metrics + testimonial)
  6. FAQ + contact CTA
  7. Footer

---

## Style

- **Name:** Trust & Authority
- **Keywords:** Certificates/badges, credentials, metrics, industry recognition, security badges
- **Best For:** Financial services, enterprise, premium/legal services
- **Avoid:** Generic content, no credentials, AI purple/pink gradients, excessive continuous animation

---

## Color Palette (skill + brand)

| Role | Hex | CSS / Tailwind |
|------|-----|----------------|
| Primary (Navy) | `#0F172A` | `--color-navy` / `navy` |
| Secondary (Deep blue) | `#1E3A8A` | `--color-navy-mid` accent |
| CTA / Gold | `#CA8A04` | `--color-gold` / `gold` |
| Gold Light | `#EAB308` | `--color-gold-light` |
| Gold Dark | `#A16207` | `--color-gold-dark` |
| Background | `#F8FAFC` | `--color-surface` |
| Surface 2 | `#F1F5F9` | `--color-surface-2` |
| Text | `#020617` | `--color-text` |
| Muted | `#64748B` | `--color-slate` |

**Notes:** Trust navy + premium gold (skill). Brand logo remains the visual identity anchor.

---

## Typography

Skill default pairing points to **Satoshi + General Sans** (premium SaaS). Google Fonts fallback from skill: **DM Sans**.

Brand-aligned pairing (from skill typography domain · Luxury Serif):

- **Heading:** Cormorant Garamond (serif — matches logo / authority)
- **Body:** DM Sans (skill Google Fonts recommendation)

**Mood:** premium, modern, trustworthy, clean  
**Rule:** Headings use `.font-heading`; body uses root sans. Fonts applied only in root `layout.tsx` (Next.js stack guideline).

---

## Effects (skill)

- Badge / chip hover effects
- Metric count-up / smooth stat reveal
- Certificate product interaction (filter + featured card)
- Scroll reveal: **1–2 key motions per viewport** (not everything)
- Transitions: **150–300ms**, ease-out enter / ease-in exit
- No infinite decorative bounce; loaders only for continuous spin
- Respect `prefers-reduced-motion`

---

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight gaps |
| `--space-sm` | 8px | Icon gaps |
| `--space-md` | 16px | Standard padding |
| `--space-lg` | 24px | Section padding |
| `--space-xl` | 32px | Large gaps |
| `--space-2xl` | 48px | Section margins |
| `--space-3xl` | 64px | Hero padding |

---

## Interaction rules (skill UX)

| Rule | Do | Don't |
|------|----|-------|
| Hover | Visual change + `cursor-pointer` | Static clickable elements |
| Tap | Primary actions work on click (not hover-only) | Rely only on `onMouseEnter` |
| Focus | Visible gold focus ring | `outline-none` without replacement |
| Motion | Animate key elements; reduced-motion fallback | Animate every block |
| Icons | Lucide / SVG | Emoji as icons |

---

## Next.js stack notes

- Apply fonts in root layout only
- Reserve space / aspect ratios to avoid CLS
- Prefer `next/image` with sized containers

---

## Pre-Delivery Checklist (skill)

- [ ] No emojis as icons (SVG / Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states 150–300ms
- [ ] Light mode text contrast ≥ 4.5:1
- [ ] Focus states visible
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375 / 768 / 1024 / 1440
- [ ] No purple/pink AI gradients
- [ ] Credentials / trust signals present
