# www.euro-intermed

Marketing site and B2B ecosystem hub for **Euro Intermed Solutions** — the parent
brand routing every commercial opportunity to the right channel (PalletClearance,
Angrosist, SkalYou). This is the **aesthetic anchor** of a three-site family; the
design system, animation language and i18n scaffolding defined here are reused by
the Angrosist and PalletClearance sites.

## Stack

- **[Astro](https://astro.build)** (static output) + **TypeScript**
- **@astrojs/mdx** — legal pages authored in MDX
- **@astrojs/sitemap** — `sitemap-index.xml`
- **@fontsource-variable/dm-sans** — self-hosted variable font (no Google Fonts CDN, GDPR)
- Deployed on **Vercel** (static; branch → env: `main` = prod, `staging` = staging)

## Commands

```bash
npm install       # install deps (commit package-lock.json — Vercel uses it)
npm run dev       # local dev server
npm run build     # astro build → ./dist
npm run preview   # preview the production build
npm run check     # astro check (type + template diagnostics)
```

## Project structure

```
src/
  components/     # BaseLayout, Nav, Hero, HeroFlow (animated diagram), Section,
                  # Card, Button, FAQ, Footer, CookieBanner, LangToggle,
                  # ThemeToggle, Analytics, Widget, Home, ContactPage
  layouts/        # LegalLayout (for the MDX legal pages)
  i18n/           # ui.ts (RO/EN dictionary), utils.ts (locale routing helpers)
  lib/            # config.ts — the ONLY place env is read (Hard Rule #1)
  scripts/        # site.ts — scroll-reveal IntersectionObserver + GA event delegation
  styles/         # global.css — design tokens (light/dark) + animation keyframes
  pages/          # ro at root, en mirrored under /en/
public/           # favicon.svg, robots.txt (copied verbatim into dist/)
astro.config.mjs  # site URL from env, i18n (ro default, en under /en/), sitemap, mdx
vercel.json       # framework/build/output + security headers + legacy redirects
```

## i18n

RO is the default locale (root paths); EN is mirrored under `/en/`. Copy lives in a
single typed dictionary (`src/i18n/ui.ts`); every page ships both locales with
`hreflang` alternates. The `LangToggle` links to the equivalent page in the other
locale.

## Configuration (env only — no hardcoded URLs/IDs)

All external URLs / IDs / flags are read from the environment at build time in
`src/lib/config.ts` (and `astro.config.mjs` for the site URL). This re-implements
the old `build.mjs` env templating. Set these per Vercel project:

| Var | Purpose | Default |
|---|---|---|
| `WIDGET_ENABLED` | `"false"` strips the chat widget | `true` |
| `WIDGET_BASE_URL` | origin serving `widget.js` | `https://dash.euro-intermed.com` |
| `GA_MEASUREMENT_ID` | GA4 id; empty → no GA snippet + no cookie banner | *(unset)* |
| `SITE_URL` / `PUBLIC_SITE_URL` | canonical origin (sitemap/canonical/hreflang) | `https://euro-intermed.ro` |
| `PUBLIC_WHATSAPP_NUMBER` | wa.me number (digits) | `40745799995` |
| `PUBLIC_CONTACT_EMAIL` / `PUBLIC_CONTACT_PHONE` / `PUBLIC_CALENDLY_URL` | contact details | *(company defaults)* |
| `PUBLIC_URL_ANGROSIST` | Angrosist deep-link | `https://angrosist.ro` |
| `PUBLIC_URL_PALLETCLEARANCE` | PalletClearance deep-link | `https://palletclearance.com` |
| `PUBLIC_URL_READYMEAL` | Ready-Meal deep-link | `https://ready-meal.com` |
| `PUBLIC_URL_SKALYOU` | SkalYou deep-link | `https://skalyou.com` |
| `GOOGLE_SITE_VERIFICATION` | Search Console token; empty → no verification meta tag | *(unset)* |
| `PUBLIC_SOCIAL_LINKEDIN` / `PUBLIC_SOCIAL_FACEBOOK` / `PUBLIC_SOCIAL_INSTAGRAM` | official profile URLs added to Organization `sameAs`; empties skipped | *(unset)* |

GA4 uses **Consent Mode v2** — analytics storage stays `denied` until the visitor
accepts in the cookie banner (choice persisted in `localStorage['ei-analytics-consent']`).

### SEO / structured data

`src/lib/schema.ts` builds the JSON-LD nodes; `BaseLayout` emits **Organization**
+ **WebSite** on every page, **FAQPage** on the home page (from `c.faq.items`),
and a **BreadcrumbList** on each non-home page. `robots.txt` is generated
(`src/pages/robots.txt.ts`) so its `Sitemap:` line is an absolute URL from
`SITE_URL`; the sitemap (`@astrojs/sitemap`, i18n-configured) emits `xhtml:link`
hreflang alternates.

**Owner: Search Console.** Add each property in
[Google Search Console](https://search.google.com/search-console), pick the
**HTML tag** method, copy the token into `GOOGLE_SITE_VERIFICATION` on the Vercel
project, redeploy, then verify and **submit `/sitemap-index.xml`** under Sitemaps.

## Contact: WhatsApp-only (no forms)

There is **no HTML contact form and no form-POST endpoint** anywhere on the site
(client decision). The two intake channels are the **AI chat widget** and
**WhatsApp** — `/contact` shows an intent chooser that pre-fills a `wa.me` message
per B2B route, with email + phone as secondary options. This WhatsApp-only pattern
is the **standard for all three ecosystem sites** (Euro-Intermed, Angrosist,
PalletClearance) — do not reintroduce a contact form on any of them.

## Per-vertical themes (swappable accent layer)

The **neutral / type / spacing / shadow / animation** system is shared by all three
ecosystem sites; only the **accent layer** changes. Selection is a single attribute
on `<html>`: `data-vertical="euro-intermed | angrosist | palletclearance"`
(BaseLayout sets `euro-intermed` here). All three accent layers ship in
`src/styles/global.css`, so the Angrosist & PalletClearance rebuilds **just set
their `data-vertical`** — no token surgery. Every pairing below is WCAG-AA verified
in **both** light and dark.

| Vertical | Primary accent | Secondary | Feel |
|---|---|---|---|
| **euro-intermed** | deep green `#1F6E4C` (dark `#45B07D`) | gold `#C9A84C` | premium hub / parent brand |
| **angrosist** | teal-blue `#0E7C86` (dark `#2BB0BD`) | azure `#2E7DB5` | trade / trust / wholesale |
| **palletclearance** | amber/terracotta `#C46A2A` (dark `#E08A4A`) | clay `#B5532F` | deals / logistics / clearance |

The three primaries sit far apart on the hue wheel (green / cyan-blue / orange) so
the sites read as clearly distinct, not "all green + gold" like the old ones.

### Ecosystem channels & the hero diagram (4 clickable, themed nodes)

Euro-Intermed is the hub for **four** vertical channels — three **live**, one
roadmap:

| Channel | Status | Node hue (light → dark) | Deep-link env |
|---|---|---|---|
| **Angrosist** (sourcing) | live | teal `#0E7C86` → `#2BB0BD` | `PUBLIC_URL_ANGROSIST` |
| **PalletClearance** (clearance) | live | amber `#C46A2A` → `#E08A4A` | `PUBLIC_URL_PALLETCLEARANCE` |
| **Ready-Meal** (shelf-stable ready meals) | live | coral `#C4442E` → `#E8674F` | `PUBLIC_URL_READYMEAL` |
| **SkalYou** (AI scaling) | roadmap | indigo `#5B57C7` → `#8F8CF0` | `PUBLIC_URL_SKALYOU` |

**Ready-Meal** = premium **shelf-stable, ready-to-eat meals** (thermo-sterilized,
EVOH packaging) for HoReCa / corporate / retail — "Open. Heat. Serve." /
"de la rețetă la produs finit". It appears as a first-class vertical everywhere the
others do (ecosystem card + hero node + footer).

`HeroFlow.astro` is the animated centrepiece: a green/gold **hub on the left** fans
to a **column of four nodes** on the right. Each node is an accessible SVG `<a>`
deep-link (keyboard-focusable, visible focus ring, `aria-label="Deschide/Open X"`,
opens in a new tab) tinted with its vertical hue on border / tag / connector /
travelling dot / halo — each hue AA-legible on the node surface in light **and**
dark (tag-text shades: `#0a616a·#98491a·#a5341f·#4a46b0` light; `#4cc6d1·#eaa06a·#f0a08d·#b3b0f4`
dark). SkalYou is the soft/dashed roadmap node. Connectors draw in, dots travel per
node, halos + glow pulse — all disabled under reduced motion. The figure scales via
its viewBox and stays legible on mobile.

**Text tokens** (never put a raw accent/gold on pale as small text): use
`--ei-accent-text` for accent links/eyebrows and `--ei-gold-text` for the secondary;
`--ei-accent` / `--ei-gold` are for **fills / decoration** only. `--ei-accent-ink`
is the text on an accent fill (white for green/teal, near-black `#2a1406` on PC
amber). `--ei-accent-hover` is the button-hover fill (PC *lightens* on hover to keep
its dark ink readable). `--ei-eyebrow-band` is the eyebrow colour on the dark
contrast band.

### Contrast audit — key ratios (before → after)

Fixes from the audit (all now pass; both themes verified):

| Pairing (LIGHT) | Before | After | Min |
|---|---|---|---|
| faint label / ground | 2.89 ✗ | **3.57** | 3.0 |
| gold as small text / ground | 2.17 ✗ | **6.33** (`--ei-gold-text`) | 4.5 |
| eyebrow (accent) / ground | 5.87 | **7.13** (`--ei-accent-text`) | 4.5 |
| focus ring / dark band | 2.66 ✗ | **4.87** (brighter `--ei-focus`) | 3.0 |
| angrosist eyebrow / teal band | 3.69 ✗ | **7.00** (`--ei-eyebrow-band`) | 4.5 |
| palletclearance button ink / hover bg | 2.3 ✗ | **5.09** (`--ei-accent-hover`) | 4.5 |

Representative passes (unchanged, both themes): ink/ground 15.9 (light) · 16.1
(dark); muted/ground 5.86 · 8.72; accent-ink on accent (button) 6.19 · 6.87;
whatsapp-ink on WhatsApp green 8.23; on-contrast on band 14.7+. Every per-vertical
`accent-text`, `gold-text`, button-ink, focus and eyebrow-on-band pairing was
recomputed to ≥4.5 (text) / ≥3.0 (labels, focus) in light **and** dark.

## Content standard (concise, benefit-led + cross-vertical deeplinks)

Marketing copy across all three sites follows one standard:

- **Sell the outcome, not the mechanism.** Punchy headline + one-line subhead.
- **Short & scannable:** 1–3-line paragraphs, strong subheads, tight bullets,
  concrete value ("verificate după CUI", "răspuns pe WhatsApp în minute",
  "acoperire B2B în Europa"). Cut filler and repetition.
- **Clear IA:** logical order, anchored nav, one obvious primary CTA per section
  (WhatsApp / AI widget). Lean home spine: hero → value strip → 3 vertical cards →
  3-step how-it-works → trust strip → FAQ → final WhatsApp CTA.
- **Full RO/EN parity**, EN idiomatic (not literal).
- **Cross-vertical deeplinks:** the hub prominently links out to each vertical with a
  sharp value line + CTA (Angrosist → "Trimite necesarul, primești oferta B2B
  potrivită"; PalletClearance → "Vinde-ți stocul sau cumpără loturi la clearance";
  SkalYou → soft "în dezvoltare"), tied to the three hero-diagram nodes. Destination
  URLs are env-configurable (`PUBLIC_URL_*`).

## Accessibility & motion

WCAG AA: labels, visible focus, keyboard nav, AA+ contrast in light and dark. All
animation is CSS-first and wrapped in a `prefers-reduced-motion: reduce` off-switch.
