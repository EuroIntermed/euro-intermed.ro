/**
 * Copy dictionary for both locales. RO is authoritative; EN is idiomatic parity
 * (not a literal translation). Copy is benefit-led, concise and scannable — the
 * content standard for all three ecosystem sites (see README). Every user-facing
 * string on the home and contact pages resolves through here.
 */

export type Locale = 'ro' | 'en'

const ro = {
  meta: {
    homeTitle:
      'Euro Intermed Solutions | Ecosistem B2B pentru sourcing, clearance și extindere europeană',
    homeDescription:
      'Spui ce ai nevoie — vânzare de stoc, sourcing sau intrare pe piața din România — și te conectăm cu partenerul B2B potrivit. Răspuns pe WhatsApp, în minute.',
    contactTitle: 'Contact | Euro Intermed Solutions',
    contactDescription:
      'Continuă pe WhatsApp cu intenția deja completată sau discută cu asistentul AI. Clearance, sourcing sau intrare pe piața din România.',
    notFoundTitle: 'Pagină negăsită | Euro Intermed',
  },
  nav: {
    skip: 'Sari la conținut',
    home: 'Acasă',
    ecosystem: 'Ecosistem',
    howWeWork: 'Cum funcționează',
    faq: 'Întrebări',
    contact: 'Contact',
    cta: 'Scrie-ne pe WhatsApp',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
  },
  hero: {
    badge: 'Comerț B2B · Clearance · Sourcing · Extindere',
    title: 'Fiecare cerere B2B, direct la partenerul potrivit',
    lead: 'Vinzi stoc, cauți furnizori sau intri pe piața din România? Îți calificăm nevoia și te conectăm — pe WhatsApp, în minute.',
    primary: 'Începe pe WhatsApp',
    secondary: 'Vezi ecosistemul',
    whatsapp: 'Scrie-ne pe WhatsApp',
    whatsappText:
      'Buna ziua. Am o oportunitate B2B si vreau sa discut cu Euro Intermed. Detalii: ___',
    flowHub: 'Euro Intermed',
    flowHubLabel: 'Rută B2B',
    flowCaption: 'Euro Intermed direcționează fiecare cerere către canalul potrivit.',
    nodes: {
      pallet: { tag: 'Clearance', name: 'PalletClearance' },
      angrosist: { tag: 'Sourcing', name: 'Angrosist' },
      skalyou: { tag: 'În dezvoltare', name: 'SkalYou' },
    },
  },
  value: {
    eyebrow: 'De ce Euro Intermed',
    title: 'O singură intrare, ruta B2B potrivită',
    copy: 'Nu suntem un marketplace public. Suntem stratul care duce fiecare cerere pe canalul corect.',
    items: [
      {
        title: 'Un singur punct de contact',
        body: 'Descrii nevoia o dată. Noi o trimitem pe canalul potrivit: clearance, sourcing sau intrare pe piață.',
      },
      {
        title: 'Companii verificate după CUI',
        body: 'Lucrăm doar B2B și verificăm firmele după CUI înainte de a merge mai departe.',
      },
      {
        title: 'Răspuns pe WhatsApp, în minute',
        body: 'Fără formulare lungi. Scrii pe WhatsApp sau asistentului AI și primești primul pas rapid.',
      },
      {
        title: 'Acoperire B2B în toată Europa',
        body: 'Cumpărători, furnizori și rute către Europa de Est, Balcani și regiunea Mării Negre.',
      },
    ],
  },
  ecosystem: {
    eyebrow: 'Ecosistemul',
    title: 'Trei rute, un singur ecosistem',
    copy: 'Fiecare canal rezolvă o problemă comercială diferită. Alege ruta și continuă direct pe site-ul dedicat.',
    pillars: [
      {
        key: 'clearance',
        badge: 'Clearance & Overstock',
        name: 'PalletClearance',
        line: 'Vinde-ți stocul sau cumpără loturi la clearance.',
        cta: 'Deschide PalletClearance',
        roadmap: false,
      },
      {
        key: 'angrosist',
        badge: 'Sourcing angro',
        name: 'Angrosist',
        line: 'Trimite necesarul, primești oferta B2B potrivită.',
        cta: 'Deschide Angrosist',
        roadmap: false,
      },
      {
        key: 'skalyou',
        badge: 'În dezvoltare',
        name: 'SkalYou',
        line: 'Scalare B2B asistată de AI — în construcție.',
        cta: 'Află despre SkalYou',
        roadmap: true,
      },
    ],
  },
  process: {
    eyebrow: 'Cum funcționează',
    title: 'Trei pași până la primul partener',
    steps: [
      {
        title: 'Spui ce ai nevoie',
        body: 'Pe WhatsApp sau cu asistentul AI. Fără cont, fără formulare.',
      },
      {
        title: 'Calificăm și verificăm',
        body: 'Categorie, volum, țară, CUI. Direcționăm cererea către ruta potrivită.',
      },
      {
        title: 'Te conectăm',
        body: 'Ajungi la cumpărătorii, furnizorii sau partenerii relevanți.',
      },
    ],
  },
  trust: {
    eyebrow: 'Încredere',
    title: 'B2B, verificat și conform',
    items: [
      {
        title: 'Doar B2B, verificat după CUI',
        body: 'Verificăm firmele după CUI. Fără persoane fizice și fără liste publice de prețuri.',
      },
      {
        title: 'Conform GDPR',
        body: 'Consimțământ, drepturi GDPR și ștergerea datelor la cerere.',
      },
      {
        title: 'Companie reală, din România',
        body: 'EURO INTERMED SOLUTIONS · J8/735/2018 · CUI 39132147 · Brașov.',
      },
    ],
  },
  faq: {
    eyebrow: 'Întrebări frecvente',
    title: 'Clarificări înainte de primul contact',
    items: [
      {
        q: 'Sunteți un marketplace? Pot vedea oferte și prețuri?',
        a: 'Nu. Nu publicăm liste de produse sau prețuri. Fiecare oportunitate este calificată și transmisă confidențial doar către partenerii relevanți.',
      },
      {
        q: 'Cât de repede primesc un răspuns?',
        a: 'Primești confirmarea imediat, iar echipa revine cu următorul pas. Pe WhatsApp, de obicei în minute.',
      },
      {
        q: 'Stocul meu rămâne confidențial?',
        a: 'Da. Nu publicăm oferta, numele companiei, prețurile sau detaliile stocului fără acordul tău.',
      },
      {
        q: 'Lucrați și cu persoane fizice?',
        a: 'Nu. Ecosistemul este dedicat exclusiv activităților B2B.',
      },
      {
        q: 'Care este diferența dintre Angrosist și PalletClearance?',
        a: 'PalletClearance este pentru clearance, overstock și stocuri sensibile. Angrosist este pentru sourcing B2B, produse standard și aprovizionare recurentă.',
      },
      {
        q: 'Trebuie să folosesc asistentul AI?',
        a: 'Nu. Poți folosi WhatsApp, emailul sau poți programa o discuție.',
      },
    ],
  },
  contactCta: {
    eyebrow: 'Începe acum',
    title: 'Spune-ne ce ai nevoie',
    copy: 'Un mesaj scurt e suficient. CUI-ul, documentele și prețurile se discută ulterior, nu la primul pas.',
    primary: 'Scrie-ne pe WhatsApp',
    secondary: 'Vezi opțiunile de contact',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Continuă pe WhatsApp',
    lead: 'Fără formulare. Alege ce descrie cererea ta, iar noi pregătim mesajul de WhatsApp pentru tine. Poți folosi și asistentul AI din colțul paginii — același flux, calificat în timp real.',
    chooseLabel: 'Alege ce descrie cererea ta',
    intentOptions: [
      {
        value: 'seller-flow',
        label: 'Vreau să vând stoc',
        wa: 'Buna ziua. Vreau sa vand stoc. Categorie: ___ · Tip stoc: ___ · Cantitate: ___ · Locatie: ___',
      },
      {
        value: 'buyer-flow',
        label: 'Vreau să cumpăr marfă',
        wa: 'Buna ziua. Vreau sa cumpar marfa. Categorie: ___ · Volum: ___ · Livrare: ___',
      },
      {
        value: 'sourcing-flow',
        label: 'Am nevoie de sourcing',
        wa: 'Buna ziua. Am nevoie de sourcing B2B. Produs/categorie: ___ · Cantitate: ___ · Livrare: ___',
      },
      {
        value: 'market-entry-flow',
        label: 'Vreau să intru pe piața din România',
        wa: 'Buna ziua. Sunt furnizor european si vreau sa intru pe piata din Romania. Produs: ___ · Piete actuale: ___',
      },
      {
        value: 'skalyou-flow',
        label: 'Vreau scalare B2B cu AI',
        wa: 'Buna ziua. Vreau sa discut despre scalare B2B / digitalizare. Provocare actuala: ___',
      },
      {
        value: 'other-b2b-flow',
        label: 'Altă oportunitate B2B',
        wa: 'Buna ziua. Am o oportunitate B2B si vreau sa discut cu Euro Intermed. Detalii: ___',
      },
    ],
    whatsapp: {
      helper: 'Mesajul de WhatsApp se precompletează în funcție de intenția aleasă.',
      cta: 'Scrie-ne pe WhatsApp',
    },
    widget: {
      eyebrow: 'Asistent B2B',
      title: 'Sau discută cu asistentul AI',
      body: 'Asistentul din colțul din dreapta-jos califică și direcționează cererea ta în timp real, pe același flux ca WhatsApp.',
    },
    next: {
      eyebrow: 'Ce urmează',
      items: [
        'Cererea este analizată în funcție de ruta aleasă.',
        'Echipa poate cere detalii suplimentare dacă există o potrivire.',
        'CUI-ul, documentele și prețurile se discută ulterior, nu la primul pas.',
      ],
    },
    direct: {
      eyebrow: 'Contact direct',
      email: 'Email',
      phone: 'Telefon',
      calendlyCta: 'Deschide Calendly',
    },
  },
  footer: {
    tagline:
      'Ecosistem B2B care duce fiecare cerere pe canalul potrivit: clearance, sourcing și intrare pe piața din România.',
    channels: 'Canale',
    legal: 'Legal',
    contact: 'Contact',
    privacy: 'Politică de confidențialitate',
    terms: 'Termeni și condiții',
    gdpr: 'GDPR & ștergerea datelor',
    legalNote: 'Textele juridice sunt în curs de revizuire finală înainte de lansarea publică.',
    rights: '© 2026 EURO INTERMED SOLUTIONS',
    reg: 'Reg. Com.: J8/735/2018 · CUI: 39132147',
  },
  cookie: {
    message:
      'Folosim cookie-uri de analiză pentru a înțelege traficul. Nu se activează fără acordul tău.',
    accept: 'Accept',
    reject: 'Refuz',
    label: 'Consimțământ cookie',
  },
  theme: { toggle: 'Schimbă tema', light: 'Temă deschisă', dark: 'Temă întunecată' },
  notFound: {
    title: 'Pagina nu a fost găsită',
    body: 'Pagina căutată nu există sau a fost mutată. Revino la pagina principală.',
    cta: 'Înapoi la pagina principală',
  },
  legal: {
    backToSite: 'Înapoi la site',
    updated: 'Ultima actualizare',
  },
}

const en: typeof ro = {
  meta: {
    homeTitle:
      'Euro Intermed Solutions | B2B ecosystem for sourcing, clearance & European expansion',
    homeDescription:
      'Tell us what you need — selling stock, sourcing or entering the Romanian market — and we connect you with the right B2B partner. Reply on WhatsApp, in minutes.',
    contactTitle: 'Contact | Euro Intermed Solutions',
    contactDescription:
      'Continue on WhatsApp with your intent pre-filled or talk to the AI assistant. Clearance, sourcing or entering the Romanian market.',
    notFoundTitle: 'Page not found | Euro Intermed',
  },
  nav: {
    skip: 'Skip to content',
    home: 'Home',
    ecosystem: 'Ecosystem',
    howWeWork: 'How it works',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Message us on WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    badge: 'B2B trade · Clearance · Sourcing · Expansion',
    title: 'Every B2B request, straight to the right partner',
    lead: 'Selling stock, sourcing suppliers, or entering the Romanian market? We qualify your need and connect you — on WhatsApp, in minutes.',
    primary: 'Start on WhatsApp',
    secondary: 'See the ecosystem',
    whatsapp: 'Message us on WhatsApp',
    whatsappText:
      'Hello. I have a B2B opportunity and would like to talk to Euro Intermed. Details: ___',
    flowHub: 'Euro Intermed',
    flowHubLabel: 'B2B route',
    flowCaption: 'Euro Intermed routes every request to the right channel.',
    nodes: {
      pallet: { tag: 'Clearance', name: 'PalletClearance' },
      angrosist: { tag: 'Sourcing', name: 'Angrosist' },
      skalyou: { tag: 'In development', name: 'SkalYou' },
    },
  },
  value: {
    eyebrow: 'Why Euro Intermed',
    title: 'One entry point, the right B2B path',
    copy: 'We are not a public marketplace. We are the layer that takes every request to the right channel.',
    items: [
      {
        title: 'One point of contact',
        body: 'Describe your need once. We route it to the right channel: clearance, sourcing or market entry.',
      },
      {
        title: 'CUI-verified companies',
        body: 'We work B2B only and verify companies by their tax ID before moving forward.',
      },
      {
        title: 'Reply on WhatsApp, in minutes',
        body: 'No long forms. Message us on WhatsApp or the AI assistant and get the first step fast.',
      },
      {
        title: 'B2B reach across Europe',
        body: 'Buyers, suppliers and routes to Eastern Europe, the Balkans and the Black Sea region.',
      },
    ],
  },
  ecosystem: {
    eyebrow: 'The ecosystem',
    title: 'Three routes, one ecosystem',
    copy: 'Each channel solves a different commercial problem. Pick a route and continue on its dedicated site.',
    pillars: [
      {
        key: 'clearance',
        badge: 'Clearance & Overstock',
        name: 'PalletClearance',
        line: 'Sell your stock or buy clearance lots.',
        cta: 'Open PalletClearance',
        roadmap: false,
      },
      {
        key: 'angrosist',
        badge: 'Wholesale sourcing',
        name: 'Angrosist',
        line: 'Send your needs, get the right B2B offer.',
        cta: 'Open Angrosist',
        roadmap: false,
      },
      {
        key: 'skalyou',
        badge: 'In development',
        name: 'SkalYou',
        line: 'AI-assisted B2B scaling — in the works.',
        cta: 'About SkalYou',
        roadmap: true,
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'Three steps to your first partner',
    steps: [
      {
        title: 'Tell us what you need',
        body: 'On WhatsApp or via the AI assistant. No account, no forms.',
      },
      {
        title: 'We qualify and verify',
        body: 'Category, volume, country, tax ID. We route the request to the right path.',
      },
      {
        title: 'We connect you',
        body: 'You reach the relevant buyers, suppliers or partners.',
      },
    ],
  },
  trust: {
    eyebrow: 'Trust',
    title: 'B2B, verified and compliant',
    items: [
      {
        title: 'B2B only, CUI-verified',
        body: 'We verify companies by tax ID. No individuals and no public price lists.',
      },
      {
        title: 'GDPR-compliant',
        body: 'Consent, GDPR rights and data deletion on request.',
      },
      {
        title: 'A real Romanian company',
        body: 'EURO INTERMED SOLUTIONS · J8/735/2018 · VAT 39132147 · Brașov.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'Clarifications before the first contact',
    items: [
      {
        q: 'Are you a marketplace? Can I see offers and prices?',
        a: 'No. We do not publish product lists or prices. Every opportunity is qualified and shared confidentially only with relevant partners.',
      },
      {
        q: 'How quickly do I get a reply?',
        a: 'You get an instant acknowledgement and the team follows up with the next step. On WhatsApp, usually within minutes.',
      },
      {
        q: 'Does my stock stay confidential?',
        a: 'Yes. We do not publish the offer, the company name, prices or stock details without your consent.',
      },
      {
        q: 'Do you work with individuals?',
        a: 'No. The ecosystem is dedicated exclusively to B2B activity.',
      },
      {
        q: 'What is the difference between Angrosist and PalletClearance?',
        a: 'PalletClearance is for clearance, overstock and sensitive stock. Angrosist is for B2B sourcing, standard products and recurring supply.',
      },
      {
        q: 'Do I have to use the AI assistant?',
        a: 'No. You can use WhatsApp, email or book a call.',
      },
    ],
  },
  contactCta: {
    eyebrow: 'Start now',
    title: 'Tell us what you need',
    copy: 'A short message is enough. VAT, documents and prices are discussed later, not at the first step.',
    primary: 'Message us on WhatsApp',
    secondary: 'See contact options',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Continue on WhatsApp',
    lead: 'No forms. Pick what describes your request and we prepare the WhatsApp message for you. You can also use the AI assistant in the corner of the page — the same flow, qualified in real time.',
    chooseLabel: 'Pick what describes your request',
    intentOptions: [
      {
        value: 'seller-flow',
        label: 'I want to sell stock',
        wa: 'Hello. I want to sell stock. Category: ___ · Stock type: ___ · Quantity: ___ · Location: ___',
      },
      {
        value: 'buyer-flow',
        label: 'I want to buy goods',
        wa: 'Hello. I want to buy goods. Category: ___ · Volume: ___ · Delivery: ___',
      },
      {
        value: 'sourcing-flow',
        label: 'I need sourcing',
        wa: 'Hello. I need B2B sourcing. Product/category: ___ · Quantity: ___ · Delivery: ___',
      },
      {
        value: 'market-entry-flow',
        label: 'I want to enter the Romanian market',
        wa: 'Hello. I am a European supplier and want to enter the Romanian market. Product: ___ · Current markets: ___',
      },
      {
        value: 'skalyou-flow',
        label: 'I want AI-assisted B2B scaling',
        wa: 'Hello. I want to discuss B2B scaling / digitalisation. Current challenge: ___',
      },
      {
        value: 'other-b2b-flow',
        label: 'Another B2B opportunity',
        wa: 'Hello. I have a B2B opportunity and want to talk to Euro Intermed. Details: ___',
      },
    ],
    whatsapp: {
      helper: 'The WhatsApp message pre-fills based on the intent you choose.',
      cta: 'Message us on WhatsApp',
    },
    widget: {
      eyebrow: 'B2B assistant',
      title: 'Or talk to the AI assistant',
      body: 'The assistant in the bottom-right corner qualifies and routes your request in real time, on the same flow as WhatsApp.',
    },
    next: {
      eyebrow: 'What happens next',
      items: [
        'The request is reviewed based on the chosen route.',
        'The team may ask for more details if there is a match.',
        'VAT, documents and prices are discussed later, not at the first step.',
      ],
    },
    direct: {
      eyebrow: 'Direct contact',
      email: 'Email',
      phone: 'Phone',
      calendlyCta: 'Open Calendly',
    },
  },
  footer: {
    tagline:
      'A B2B ecosystem that takes every request to the right channel: clearance, sourcing and Romanian market entry.',
    channels: 'Channels',
    legal: 'Legal',
    contact: 'Contact',
    privacy: 'Privacy policy',
    terms: 'Terms & conditions',
    gdpr: 'GDPR & data deletion',
    legalNote: 'The legal texts are under final review before public launch.',
    rights: '© 2026 EURO INTERMED SOLUTIONS',
    reg: 'Reg. No.: J8/735/2018 · VAT: 39132147',
  },
  cookie: {
    message:
      'We use analytics cookies to understand traffic. They stay off until you agree.',
    accept: 'Accept',
    reject: 'Decline',
    label: 'Cookie consent',
  },
  theme: { toggle: 'Switch theme', light: 'Light theme', dark: 'Dark theme' },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist or has moved. Return to the home page.',
    cta: 'Back to the home page',
  },
  legal: {
    backToSite: 'Back to site',
    updated: 'Last updated',
  },
}

export const ui: Record<Locale, typeof ro> = { ro, en }
