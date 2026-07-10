# Euro Intermed Website V1

Static Romanian-first website for `euro-intermed.ro`, deployed as its own Vercel
project. The AI chat widget is the single intake channel.

## Files

- `index.html` - public page and semantic content.
- `tos.html` - Terms and conditions, served at `/tos` (clean URL).
- `privacy.html` - Privacy policy, served at `/privacy` (clean URL).
- `data-deletion.html` - Data deletion request page, served at `/data-deletion`. Required by Facebook/Meta app integration; currently a manual (email-based) request flow.
- `css/styles.css` - scoped visual system using `ei-` classes.
- `js/main.js` - route selection, WhatsApp links, FAQ.
- `vercel.json` - static deploy config (clean URLs + redirects + security headers).

The old PHP `form-handler.php` email form has been removed (Vercel does not run
PHP). Lead capture now goes through the embedded AI widget mounted into
`#ai-widget-container`; WhatsApp / email / Calendly links remain as fallbacks.

## Local preview

```sh
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080`.

## Deploy & Widget

Deploy this folder as a Vercel project. `build.mjs` runs as the build command and
templates the widget embed into `dist/` (which Vercel serves). The widget is
embedded before `</body>`, inside `<!-- WIDGET:START -->` / `<!-- WIDGET:END -->`
markers, with a `__WIDGET_BASE_URL__` placeholder:

```html
<script src="__WIDGET_BASE_URL__/widget.js" defer></script>
<script>
  window.AngrosistChat.init({ containerId: "ai-widget-container",
    vertical: "angrosist", lang: "ro", privacyUrl: "/privacy" });
</script>
```

**The widget origin and visibility are NOT hardcoded — set these per Vercel project:**

| Env var | Default | Purpose |
|---|---|---|
| `WIDGET_BASE_URL` | `https://dash.euro-intermed.com` | Origin serving `widget.js`. Set `https://staging-dash.euro-intermed.com` on the staging project. |
| `WIDGET_ENABLED` | `true` | `false` removes the widget entirely from the page. |
| `GA_MEASUREMENT_ID` | *(empty)* | GA4 Measurement ID, e.g. `G-XXXXXXX`; set per Vercel project. Leave empty to disable analytics (no GA snippet, no cookie banner). Injected into the `<!-- GA:START -->` / `<!-- GA:END -->` block at build time — never hardcoded. |

Analytics uses Google Consent Mode v2 (analytics storage denied by default) with a
lightweight cookie banner that grants consent on Accept and persists it in
`localStorage`. The router also fires a `vertical_redirect` GA event (param
`vertical` = `angrosist` \| `clearance` \| `skalyou`) when a vertical card/link is
clicked, and a best-effort `chat_opened` event when the chat widget launcher is
opened (KPI §A.2).

`widget.js` is served by the deployed frontend project. The backend API URL is
**baked into `widget.js` at build time** from the frontend's `VITE_API_URL` — the
site does not pass `apiUrl`. To repoint the backend, change `VITE_API_URL` in the
frontend deploy and rebuild `widget.js`; all embeds follow.

## Production notes

- Privacy, terms, and data-deletion copy are practical drafts and need a final legal review before production.
- `/data-deletion` currently instructs users to email their deletion request. For the Facebook/Meta integration you can keep these instructions or wire a real data-deletion-request callback endpoint; either satisfies Meta's requirement.
- The qualification flow intentionally does not ask for CUI/VAT, file uploads, target price, packing lists, photos, or full commercial terms at first contact.
- PalletClearance is presented as a confidential B2B clearance flow, not as a public listing or price marketplace.
