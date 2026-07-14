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
| `PUBLIC_PALLETCLEARANCE_URL` / `PUBLIC_ANGROSIST_URL` / `PUBLIC_SKALYOU_URL` | sibling vertical links | *(prod URLs)* |

GA4 uses **Consent Mode v2** — analytics storage stays `denied` until the visitor
accepts in the cookie banner (choice persisted in `localStorage['ei-analytics-consent']`).

## Contact: WhatsApp-only (no forms)

There is **no HTML contact form and no form-POST endpoint** anywhere on the site
(client decision). The two intake channels are the **AI chat widget** and
**WhatsApp** — `/contact` shows an intent chooser that pre-fills a `wa.me` message
per B2B route, with email + phone as secondary options. This WhatsApp-only pattern
is the **standard for all three ecosystem sites** (Euro-Intermed, Angrosist,
PalletClearance) — do not reintroduce a contact form on any of them.

## Accessibility & motion

WCAG AA: labels, visible focus, keyboard nav, AA+ contrast in light and dark. All
animation is CSS-first and wrapped in a `prefers-reduced-motion: reduce` off-switch.
