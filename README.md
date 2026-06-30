# Euro Intermed Website V1

Static Romanian-first website for `euro-intermed.ro`, deployed as its own Vercel
project. The AI chat widget is the single intake channel.

## Files

- `index.html` - public page and semantic content.
- `css/styles.css` - scoped visual system using `ei-` classes.
- `js/main.js` - route selection, WhatsApp links, FAQ.
- `vercel.json` - static deploy config (clean URLs + security headers).

The old PHP `form-handler.php` email form has been removed (Vercel does not run
PHP). Lead capture now goes through the embedded AI widget mounted into
`#ai-widget-container`; WhatsApp / email / Calendly links remain as fallbacks.

## Local preview

```sh
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080`.

## Deploy & Widget

Deploy this folder directly as a static Vercel project (no build step). The
widget is embedded before `</body>`:

```html
<script src="https://staging.euro-intermed.com/widget.js" defer></script>
<script>
  window.AngrosistChat.init({ containerId: "ai-widget-container",
    vertical: "angrosist", lang: "ro", privacyUrl: "/privacy.html" });
</script>
```

`widget.js` is served by the deployed frontend project. The backend API URL is
**baked into `widget.js` at build time** from the frontend's `VITE_API_URL` — the
site does not pass `apiUrl`. To repoint the backend, change `VITE_API_URL` in the
frontend deploy and rebuild `widget.js`; all embeds follow. No URL is hardcoded
in the sites.

## Production notes

- Privacy and terms links are placeholders and must be replaced before production.
- The qualification flow intentionally does not ask for CUI/VAT, file uploads, target price, packing lists, photos, or full commercial terms at first contact.
- PalletClearance is presented as a confidential B2B clearance flow, not as a public listing or price marketplace.
