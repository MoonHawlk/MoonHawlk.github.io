# Design System — Filipe Moreno Portfolio

A complete reference for reproducing the visual language of this project across any platform: web, mobile, presentation, print, or social media.

---

## 1. Design Philosophy

The visual language is built around three guiding ideas:

**Quiet presence.** The design should feel calm and unobtrusive. Nothing competes for attention — hierarchy is created through space and weight, not colour or noise.

**Organic minimalism.** Inspired by Camille Pissarro's Impressionist landscapes (*Haystacks, Morning, Éragny*, 1899) — soft morning light, layered greens, pale cloudy sky. The palette is pulled directly from those paintings. The goal is a page that feels grounded and human, not tech-corporate.

**Legibility over decoration.** Every element earns its place. Decoration is botanical and subtle — present in opacity, not in presence.

---

## 2. Inspiration

| Source | What it contributes |
|--------|---------------------|
| Pissarro — *Haystacks, Morning, Éragny* | Full colour palette: greens, sky blues, wheat/straw, warm off-white |
| Pissarro — *Haystacks, Éragny* (Met collection) | Reinforces the muted, morning-light quality |
| toukoum.fr | Minimalist portfolio structure, AI-forward personality |
| sawad.framer.website | Split-screen layout, generous whitespace, typographic hierarchy |

---

## 3. Color Palette

All colours are drawn from the Pissarro morning palette. Each token has a semantic role — do not swap them arbitrarily.

### Core Tokens

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--bg` | `#F7F5F0` | 247, 245, 240 | Page background — warm off-white canvas |
| `--bg-alt` | `#EEEAE2` | 238, 234, 226 | Alternate section background (every even section) |
| `--text` | `#1E2D1F` | 30, 45, 31 | Primary text — deep forest |
| `--text-muted` | `#6B7868` | 107, 120, 104 | Secondary text, captions, descriptions |
| `--green` | `#6B8F5E` | 107, 143, 94 | Primary accent — sage green, foliage mid-tones |
| `--green-light` | `#A8C49A` | 168, 196, 154 | Hover states, soft highlights, decorative fills |
| `--blue` | `#7BAFC4` | 123, 175, 196 | Secondary accent — pale cloudy sky |
| `--blue-light` | `#B8D8E8` | 184, 216, 232 | Misty horizon, very subtle backgrounds |
| `--wheat` | `#D4B896` | 212, 184, 150 | Warm straw/earth — haystack tones, decorative warmth |
| `--border` | `#D8D3C8` | 216, 211, 200 | Soft parchment — all dividers and card borders |
| `--shadow` | `rgba(30,45,31,0.07)` | — | Card hover shadow — green-tinted, very subtle |

### Usage Rules

- **Never use pure black (`#000`) or pure white (`#fff`) for text or backgrounds.** Always use the warm tokens above.
- **Green (`#6B8F5E`) is the only true accent.** It appears on labels, links, CTAs, tags, and hover states.
- **Blue (`#7BAFC4`) is a supporting accent.** It appears on contact link hovers and secondary tag variants.
- **Wheat (`#D4B896`) is decorative only.** Use for gradient blobs, banner warmth, and subtle backgrounds — never for text.
- **Background alternation** is done by switching between `--bg` and `--bg-alt` on consecutive sections. The difference is subtle (~9 units of lightness), creating visual rhythm without hard contrast.

### Tint Variants (for backgrounds and tags)

These are not standalone colours — they are the accent colours at low opacity over `--bg`:

| Usage | Formula |
|-------|---------|
| Green tag background | `rgba(107, 143, 94, 0.10)` |
| Blue tag background | `rgba(123, 175, 196, 0.15)` |
| Green decorative blob | `rgba(168, 196, 154, 0.25–0.38)` |
| Blue decorative blob | `rgba(123, 175, 196, 0.15–0.32)` |
| Warm blob | `rgba(212, 184, 150, 0.18)` |
| Contact link hover glow | `rgba(123, 175, 196, 0.20)` |

---

## 4. Typography

Two fonts only. No exceptions.

### Font Stack

| Role | Font | Fallback | Source |
|------|------|----------|--------|
| Display / Headings | **Cormorant Garamond** | Georgia, Times New Roman, serif | Google Fonts |
| Body / UI | **Inter** | system-ui, -apple-system, sans-serif | Google Fonts |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap
```

### Why this pairing

- **Cormorant Garamond** is an elegant, light-weight serif with a painterly, humanist quality. At weight 300 it feels like calligraphy. Used for anything that needs presence: names, section titles, card titles, timeline roles.
- **Inter** is a precision-engineered sans-serif optimised for screens. Used for everything functional: labels, body copy, tags, dates, navigation.

### Type Scale

| Name | Size | Font | Weight | Line Height | Letter Spacing | Usage |
|------|------|------|--------|-------------|----------------|-------|
| Hero Name | `clamp(3rem, 8vw, 5.5rem)` | Cormorant | 300 | 1.05 | −0.01em | Main name, hero |
| Hero Role | `clamp(1.2rem, 3vw, 1.6rem)` | Cormorant | 300 | — | — | Role line in hero |
| Section Title | `clamp(1.8rem, 4vw, 2.6rem)` | Cormorant | 300 | — | −0.01em | Each section heading |
| Timeline Role | `1.2rem` (19.2px) | Cormorant | 500 | — | — | Job title in experience |
| Project Name | `1.25rem` (20px) | Cormorant | 500 | — | — | Project card title |
| Post Title | `1.2rem` (19.2px) | Cormorant | 400 | — | — | Writing card title |
| Skills Title | `1.1rem` (17.6px) | Cormorant | 400 | — | — | "Tools & Technologies" |
| Nav Logo | `1.4rem` (22.4px) | Cormorant | 500 | — | 0.05em | FM monogram |
| Section Label | `0.75rem` (12px) | Inter | 500 | — | 0.14em | "About", "Experience" etc. — ALL CAPS |
| Body Text | `1rem` (16px) | Inter | 400 | 1.7–1.8 | — | Paragraphs |
| Body Small | `0.93rem` (14.9px) | Inter | 400 | 1.7–1.75 | — | Descriptions, excerpts |
| Nav Links | `0.875rem` (14px) | Inter | 400 | — | 0.02em | Navigation |
| Eyebrow | `0.875rem` (14px) | Inter | 400 | — | 0.12em | Hero eyebrow — ALL CAPS |
| Tags | `0.75rem` (12px) | Inter | 500 | — | 0.04em | Tech skill tags |
| Date | `0.78rem` (12.5px) | Inter | 400 | — | 0.06em | Post dates |
| Timeline Date | `0.8rem` (12.8px) | Inter | 400 | — | 0.04em | Experience dates |
| Company | `0.85rem` (13.6px) | Inter | 500 | — | 0.02em | Company name in timeline |
| Caption / Footer | `0.8rem` (12.8px) | Inter | 400 | — | — | Footer, small UI text |
| Button | `0.9rem` (14.4px) | Inter | 500 | — | 0.02em | CTA buttons |

### Typography Rules

- **Never use Cormorant Garamond above weight 500.** Its beauty is in its lightness.
- **Section labels are always uppercase Inter 500 at 0.14em letter-spacing** in `--green`. This is the visual "tab" that precedes every section.
- **Italics in Cormorant** (weight 300 italic) are used for emphasis in running text — especially for skill/technology names in the hero role line.
- **Base font size** is 16px on `<html>`. All rem values are relative to this.
- **Anti-aliasing:** always set `-webkit-font-smoothing: antialiased` for Inter on macOS.

---

## 5. Spacing System

Based on a **8px base unit** (`0.5rem`). All spacing values are multiples of this.

| Token | Value | Usage |
|-------|-------|-------|
| `4px` / `0.25rem` | XS | Internal tag padding (vertical) |
| `8px` / `0.5rem` | S | Tag gap, small internal spacing |
| `12px` / `0.75rem` | M | Hero eyebrow margin, section label margin |
| `16px` / `1rem` | Base | Standard gap, nav gap on mobile |
| `20px` / `1.25rem` | L | Hero name margin, card padding tweak |
| `24px` / `1.5rem` | XL | Hero role margin |
| `32px` / `2rem` | 2XL | Nav padding, section horizontal padding, timeline item padding |
| `40px` / `2.5rem` | 3XL | Hero bio margin, section title margin, contact sub margin |
| `48px` / `3rem` | 4XL | About grid gap |
| `112px` / `7rem` | Section | `--section-gap` — vertical padding top/bottom of each section |

**Mobile adjustment:** `--section-gap` drops to `4.5rem` (72px) at ≤700px.

---

## 6. Layout System

### Content Width
- **Max content width:** `780px`
- All sections use `.section-inner { max-width: 780px; margin: 0 auto; }`
- Horizontal section padding: `2rem` (32px), dropping to `1.25rem` (20px) at ≤480px

### Grid Patterns

| Component | Grid |
|-----------|------|
| About section | `1fr 1fr` — 2 equal columns, `3rem` gap |
| Projects | `repeat(2, 1fr)` — 2 columns, `1rem` gap → 1 column at ≤600px |
| Timeline item | `140px 1fr` — fixed date column, fluid body → stacked at ≤700px |
| Nav | `space-between` flex |
| Hero actions | `flex-wrap`, `1rem` gap |
| Contact links | `column` flex, centered, `1rem` gap |

### Sections

Sections alternate background: odd sections use `--bg`, even use `--bg-alt`. This is set with `section:nth-of-type(even)`.

### Navigation

- **Fixed** to top, full-width
- **Glassmorphism:** `background: rgba(247,245,240,0.85)` + `backdrop-filter: blur(10px)`
- `z-index: 100`
- Bottom border: `1px solid var(--border)`

---

## 7. Components

### Buttons

Two variants, both pill-shaped (`border-radius: 100px`):

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | `#6B8F5E` | `#fff` | none | Background → `#1E2D1F` |
| Secondary | transparent | `#6B7868` | `1.5px solid #D8D3C8` | Border + text → `#6B8F5E` |

Padding: `0.7rem 1.6rem`. Transition: `all 0.2s`.

### Tags / Pills

Used for technology labels on project cards and LinkedIn banner.

```
background: rgba(107, 143, 94, 0.10)   ← green variant
background: rgba(123, 175, 196, 0.15)  ← blue variant
color: #6B8F5E  or  #7BAFC4
font: Inter 500, 0.75rem, 0.04em letter-spacing
padding: 0.25rem 0.7rem
border-radius: 100px
```

### Project Cards

```
background: --bg (#F7F5F0)
border: 1.5px solid --border (#D8D3C8)
border-radius: 12px
padding: 1.75rem 2rem

Hover:
  border-color: --green-light (#A8C49A)
  box-shadow: 0 4px 24px rgba(30,45,31,0.07)
  transform: translateY(-2px)
  transition: 0.2s
```

Arrow indicator (`→`) translates `(3px, -3px)` and turns green on hover.

### Timeline Items

```
grid: 140px 1fr
gap: 2rem
padding: 2rem 0
border-bottom: 1px solid --border

Date:     Inter 400, 0.8rem, --text-muted, letter-spacing 0.04em
Role:     Cormorant 500, 1.2rem, --text
Company:  Inter 500, 0.85rem, --green, letter-spacing 0.02em
Desc:     Inter 400, 0.93rem, --text-muted, line-height 1.75
```

### Post Cards

```
padding: 1.75rem 0
border-bottom: 1px solid --border

Hover: padding-left shifts to 0.5rem (slide right effect)
Title hover: color → --green

Date:    Inter 400, 0.78rem, --text-muted, letter-spacing 0.06em
Title:   Cormorant 400, 1.2rem, --text
Excerpt: Inter 400, 0.9rem, --text-muted, line-height 1.65
```

### Contact Links

```
display: flex, align-items: center, gap: 0.75rem
padding: 0.85rem 1.75rem
border: 1.5px solid --border
border-radius: 100px
font: Inter 400, 0.95rem, --text-muted
transition: all 0.2s

Hover:
  border-color: --blue (#7BAFC4)
  color: --blue
  box-shadow: 0 2px 16px rgba(123,175,196,0.20)
```

---

## 8. Decorative Elements

### Hero Gradient Blob

A large, soft radial gradient circle positioned top-right, behind all content:

```css
width: 55vw (max 700px)
aspect-ratio: 1:1
top: -10%, right: -5%
background: radial-gradient(ellipse at 60% 40%,
  rgba(168, 196, 154, 0.25) 0%,   ← green-light
  rgba(123, 175, 196, 0.15) 45%,  ← blue
  transparent 70%);
border-radius: 50%;
pointer-events: none;
```

### Botanical Leaf Illustration

Used in the LinkedIn banner and optionally in decorative contexts:
- Leaf shapes are SVG `<path>` elements
- Fill colours: `#6B8F5E` (green) and `#7BAFC4` (blue)
- **Opacity: 0.10–0.18** — never opaque
- Stem and vein lines: stroke of the fill colour at 0.15–0.22 opacity, `stroke-width` 1–2px, `stroke-linecap: round`
- Floating seed dots: `r` 1.5–2.5px, opacity 0.10–0.15
- The shapes are organic, asymmetric, and imperfect — avoid geometric precision

### Favicon

SVG leaf on a warm off-white background:
- Background: `#F7F5F0`, `border-radius` 7px (on 32×32 viewBox)
- Leaf fill: `#6B8F5E`
- Stem: `stroke #F7F5F0`, `stroke-width 1.4`, `stroke-linecap round`
- Veins: same stroke, 0.75–0.8 opacity

---

## 9. Interactions & Motion

All transitions use `0.2s` with default easing (`ease` or CSS default). No bounces, springs, or dramatic easing.

| Element | Interaction | Effect |
|---------|-------------|--------|
| Nav logo | Hover | Color: green → dark |
| Nav links | Hover | Color: muted → dark |
| Nav CTA button | Hover | Background: green → dark |
| Primary button | Hover | Background: green → dark |
| Secondary button | Hover | Border + text: muted → green |
| Project card | Hover | Border → green-light, shadow appears, lift 2px |
| Project arrow | Hover | Translate (+3px, -3px), color → green |
| Post card | Hover | Padding-left slides to 0.5rem |
| Post title | Hover | Color → green |
| Skills list item | Hover | Padding-left 0.4rem, color → green |
| Contact link | Hover | Border + text → blue, blue glow shadow |
| Footer back-to-top | Hover | Color → green |

**Scroll:** `scroll-behavior: smooth` on `html`.

**No JavaScript animations.** All motion is CSS-only.

---

## 10. Responsive Breakpoints

| Breakpoint | Value | Changes |
|------------|-------|---------|
| Tablet / Mobile | `≤ 700px` | `--section-gap` → 4.5rem; nav links collapse (only CTA visible); hero padding adjusted; about grid → 1 column; timeline → stacked; footer → column |
| Small Mobile | `≤ 600px` | Projects grid → 1 column |
| Tiny Mobile | `≤ 480px` | Nav padding reduced; section horizontal padding → 1.25rem; project card padding reduced |

---

## 11. Adapting to Other Platforms

### Mobile App (iOS / Android)

| Web token | Mobile equivalent |
|-----------|------------------|
| `--bg` `#F7F5F0` | Background color |
| `--bg-alt` `#EEEAE2` | Card / surface background |
| `--text` `#1E2D1F` | Primary label |
| `--text-muted` `#6B7868` | Secondary label, placeholder |
| `--green` `#6B8F5E` | Tint color / accent |
| `--blue` `#7BAFC4` | Links, secondary accent |
| `--border` `#D8D3C8` | Separator, outline |
| Cormorant Garamond | Use a system serif or embed via custom font |
| Inter | SF Pro (iOS) / Roboto (Android) — natural fallback |
| `border-radius: 100px` (pill) | Use for buttons and chips |
| `border-radius: 12px` (card) | Use for list cells / cards |

### Presentation (Keynote / PowerPoint / Canva)

- **Slide background:** `#F7F5F0`
- **Title:** Cormorant Garamond Light (300), `#1E2D1F`, large (60–80pt)
- **Subtitle / body:** Inter Regular (400), `#6B7868`
- **Accent text / labels:** Inter Medium (500), `#6B8F5E`, all-caps, wide letter-spacing
- **Dividers:** `#D8D3C8`, 1pt
- **Accent colour for charts / highlights:** `#6B8F5E` and `#7BAFC4`
- **Avoid:** bright colours, hard drop shadows, gradients other than the soft radial blobs
- **Decoration:** paste the botanical SVG leaves at 10–15% opacity in corner areas

### Social Media (LinkedIn, Twitter/X, etc.)

- **Banner size (LinkedIn):** 1584 × 396px — see `linkedin-banner.html`
- **Profile picture background** (if needed): `#F7F5F0` or `#6B8F5E`
- **Post card aesthetic:** white/off-white background, name in Cormorant, descriptor in Inter, green pill tags
- **Consistent colour palette:** same green/blue from the design tokens above

### Print / PDF

- **Background:** White (`#FFFFFF`) is acceptable for print; `#F7F5F0` can yellow slightly on paper
- **Text:** `#1E2D1F` prints cleanly — avoid using `--text-muted` for anything critical
- **Green accent** `#6B8F5E` prints well in CMYK: approx `C:54 M:21 Y:64 K:15`
- **Blue accent** `#7BAFC4` prints well: approx `C:50 M:11 Y:7 K:0`
- **Remove all `backdrop-filter`, shadows, and transforms** — they don't translate to print

---

## 12. What to Avoid

- Dark backgrounds or dark mode variants — this design is fundamentally a light, organic palette
- Saturated or neon colours — every colour here is muted and natural
- Bold (`700+`) weights in Cormorant Garamond — it breaks the delicate quality
- Hard box shadows — always use the soft green-tinted shadow `rgba(30,45,31,0.07)`
- Multiple accent colours — green is primary, blue is secondary; never use both at the same visual weight simultaneously
- Decorative elements at full opacity — the botanical SVGs should always feel like a whisper, not a statement
- Tight letter-spacing on body text — only apply letter-spacing to uppercase labels and small UI elements

---

## 13. Quick Reference Card

```
BACKGROUNDS    #F7F5F0  #EEEAE2
TEXT           #1E2D1F  #6B7868
GREEN          #6B8F5E  #A8C49A
BLUE           #7BAFC4  #B8D8E8
WARM           #D4B896
BORDER         #D8D3C8

DISPLAY FONT   Cormorant Garamond  weights: 300 / 400 / 500
BODY FONT      Inter               weights: 300 / 400 / 500

BASE SIZE      16px
MAX WIDTH      780px
SECTION GAP    7rem (112px) desktop / 4.5rem (72px) mobile
BORDER RADIUS  100px (pills) / 12px (cards) / 7px (favicon)
TRANSITION     all 0.2s
```
