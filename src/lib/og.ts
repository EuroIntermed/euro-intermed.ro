/**
 * Open Graph card configuration for the Euro-Intermed hub.
 *
 * Single source of truth shared by:
 *  - the build-time generator (`src/pages/og/[...route].ts`), which emits one
 *    1200x630 PNG per card into `dist/og/<slug>.png`, and
 *  - `BaseLayout.astro`, which resolves the current page to a card slug and
 *    builds the absolute `og:image` URL from the env-driven `siteUrl`
 *    (Hard Rule #1 — no hardcoded host in the meta tags).
 *
 * The card is a clean, on-brand template: the brand name (title) + a short
 * tagline (description) on a pale ground, signed with the vertical's accent as a
 * left stripe. Euro-Intermed's signature is green + gold, so the ground carries a
 * faint gold wash under the green accent. Type is self-hosted DM Sans (vendored
 * TTF — no network at build). All colours live here so the three ecosystem sites
 * stay one template, one accent swap.
 */
import type { Locale } from '../i18n/ui'

type RGB = [number, number, number]

/** Brand shown as the card title. */
const BRAND = 'Euro Intermed'

/** Vertical accent (green #1f6e4c) + gold secondary (#c9a84c). */
const ACCENT: RGB = [31, 110, 76]
const GROUND_TOP: RGB = [250, 249, 245] // #faf9f5 pale paper
const GROUND_BOTTOM: RGB = [243, 238, 224] // faint gold wash (green+gold signature)
const INK: RGB = [20, 58, 40] // deep green title ink
const MUTED: RGB = [92, 102, 96] // muted tagline

/** Font vendored into the repo (loaded from disk at build — no network). */
const FONT_PATH = './src/assets/fonts/DMSans.ttf'

/** Shared template constants consumed by the OG endpoint's getImageOptions. */
export const ogTemplate = { ACCENT, GROUND_TOP, GROUND_BOTTOM, INK, MUTED, FONT_PATH }

export interface OgCard {
  /** Big line — the brand. */
  title: string
  /** Supporting tagline. */
  description: string
}

/**
 * Cards keyed by slug. The slug becomes the emitted filename (`<slug>.png`).
 * `default` is the RO brand card and the ultimate fallback; `*-en` mirror it in
 * English. Keep this in lockstep with `ogSlug()` below.
 */
export const ogCards: Record<string, OgCard> = {
  default: {
    title: BRAND,
    description: 'Ecosistem B2B — sourcing, clearance și extindere europeană',
  },
  'home-en': {
    title: BRAND,
    description: 'B2B ecosystem — sourcing, clearance & European market entry',
  },
  contact: {
    title: BRAND,
    description: 'Contact — pe WhatsApp sau cu asistentul AI',
  },
  'contact-en': {
    title: BRAND,
    description: 'Contact — on WhatsApp or with the AI assistant',
  },
  despre: {
    title: BRAND,
    description: 'Despre noi — povestea Euro Intermed Solutions, din 2015 până azi',
  },
  'despre-en': {
    title: BRAND,
    description: 'About us — the Euro Intermed Solutions story, from 2015 to today',
  },
}

/**
 * Resolve a page path + locale to a card slug. Locale-prefixed paths (`/en/...`)
 * are normalised first. Unknown routes (e.g. legal pages) fall back to the brand
 * card. Used by BaseLayout to pick the `og:image`; the endpoint emits exactly the
 * slugs referenced here.
 */
export function ogSlug(path: string, locale: Locale): string {
  const p = path.replace(/^\/en(?=\/|$)/, '').replace(/\/$/, '') || '/'
  const en = locale === 'en'
  if (p === '/contact') return en ? 'contact-en' : 'contact'
  if (p === '/despre') return en ? 'despre-en' : 'despre'
  // Home + any other page (legal, 404, ...) → brand card.
  return en ? 'home-en' : 'default'
}
