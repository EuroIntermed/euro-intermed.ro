/**
 * Copy dictionary for both locales. RO is authoritative (migrated verbatim from
 * the original index.html); EN mirrors it. Every user-facing string on the home
 * and contact pages resolves through here so both locales stay in lockstep.
 */

export type Locale = 'ro' | 'en'

const ro = {
  meta: {
    homeTitle:
      'Euro Intermed Solutions | Ecosistem B2B pentru sourcing, clearance și extindere europeană',
    homeDescription:
      'Euro Intermed conectează furnizori și cumpărători B2B: clearance și overstock prin PalletClearance.eu, sourcing en-gros prin Angrosist.ro și fluxuri asistate de AI prin SkalYou.com.',
    contactTitle: 'Contact | Euro Intermed Solutions',
    contactDescription:
      'Trimite o cerere B2B către Euro Intermed sau continuă pe WhatsApp cu intenția deja completată. Clearance, sourcing sau intrare pe piața din România.',
    notFoundTitle: 'Pagină negăsită | Euro Intermed',
  },
  nav: {
    skip: 'Sari la conținut',
    home: 'Acasă',
    about: 'Despre',
    ecosystem: 'Ecosistem',
    howWeWork: 'Cum lucrăm',
    markets: 'Piețe',
    faq: 'Întrebări',
    contact: 'Contact',
    cta: 'Începe fluxul B2B',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
  },
  hero: {
    badge: 'Comerț B2B · Clearance · Sourcing · Scalare cu AI',
    title: 'Ecosistemul B2B pentru comerț, sourcing și extindere în Europa',
    lead: 'Ajutăm companiile europene să vândă, să cumpere și să intre pe piețe noi prin trei canale conectate: PalletClearance.eu pentru clearance și overstock, Angrosist.ro pentru sourcing en-gros și SkalYou.com pentru fluxuri B2B asistate de AI.',
    primary: 'Începe fluxul B2B',
    secondary: 'Explorează ecosistemul',
    whatsapp: 'Scrie-ne pe WhatsApp',
    whatsappText:
      'Buna ziua. Am o oportunitate B2B si vreau sa discut cu Euro Intermed. Detalii: ___',
    flowHub: 'Euro Intermed',
    flowHubLabel: 'Rută B2B',
    flowCaption:
      'Euro Intermed direcționează fiecare cerere către canalul potrivit.',
    nodes: {
      pallet: { tag: 'Clearance', name: 'PalletClearance' },
      angrosist: { tag: 'Sourcing', name: 'Angrosist' },
      skalyou: { tag: 'În dezvoltare', name: 'SkalYou' },
    },
  },
  positioning: {
    eyebrow: 'Poziționare',
    title: 'Nu suntem un marketplace public și niciun broker clasic.',
    copy: 'Suntem infrastructura B2B care leagă fiecare oportunitate comercială de canalul potrivit.',
    items: [
      {
        n: '01',
        title: 'Trei canale specializate',
        body: 'Clearance, sourcing și digitalizare B2B funcționează separat, dar sunt conectate prin aceeași logică de direcționare.',
      },
      {
        n: '02',
        title: 'Fără expunere publică',
        body: 'Stocurile sensibile nu ajung în liste deschise, oferte publice sau prețuri la vedere.',
      },
      {
        n: '03',
        title: 'Cerere structurată',
        body: 'Calificăm intenția înainte de a o direcționa către canalul potrivit.',
      },
      {
        n: '04',
        title: 'Acces pe piața din România',
        body: 'Sprijinim companiile care vor să testeze piața, să distribuie sau să ajungă la cumpărători în România.',
      },
      {
        n: '05',
        title: 'Model pregătit pentru AI',
        body: 'Fluxul este compatibil cu o calificare asistată de AI, dar site-ul funcționează și fără platforma AI.',
      },
    ],
  },
  about: {
    eyebrow: 'Despre Euro Intermed',
    title: 'De la oportunitate comercială la o rută B2B structurată',
    body: [
      'Euro Intermed Solutions este compania-umbrelă care creează rute comerciale pentru furnizori, cumpărători și parteneri B2B. Lucrăm cu oportunități reale: stocuri de vândut, cereri de achiziție, produse standard, intrarea pe piața din România și procese comerciale care pot fi digitalizate și scalate.',
      'Nu funcționăm ca un simplu catalog. Calificăm cererea, structurăm informația și direcționăm fiecare oportunitate către canalul potrivit.',
    ],
  },
  ecosystem: {
    eyebrow: 'Ce construim',
    title: 'Cei trei piloni Euro Intermed',
    copy: 'Fiecare canal rezolvă o problemă comercială diferită: stoc blocat, nevoie de sourcing sau scalare B2B. Împreună, formează o rută clară, de la oportunitate la tranzacție.',
    rule: {
      pallet: 'Cumperi sau vinzi stoc clearance / overstock?',
      angrosist: 'Ai nevoie de aprovizionare standard sau recurentă?',
    },
    pillars: [
      {
        key: 'clearance',
        badge: 'Clearance & Overstock',
        name: 'PalletClearance.eu',
        body: 'Vânzare și cumpărare de marfă overstock, clearance, surplus, near-expiry, slow-moving sau lichidări de stoc.',
        note: 'Nu publicăm liste deschise de produse și nu afișăm prețuri. Fiecare oportunitate este filtrată și transmisă doar către partenerii B2B relevanți.',
        cta: 'Vinde sau cumpără clearance',
        roadmap: false,
      },
      {
        key: 'angrosist',
        badge: 'Sourcing en-gros',
        name: 'Angrosist.ro',
        body: 'Cereri și oferte de materii prime, produse vrac, FMCG, food, non-food și marfă standard, în volume recurente.',
        note: 'Fluxul principal este cererea de ofertă, nu coșul de cumpărături.',
        cta: 'Explorează sourcing-ul B2B',
        roadmap: false,
      },
      {
        key: 'skalyou',
        badge: 'În dezvoltare',
        name: 'SkalYou.com',
        body: 'Viitorul strat digital al ecosistemului: calificarea lead-urilor, onboarding pentru furnizori și cumpărători, procese de intrare pe piață și fluxuri comerciale repetabile.',
        note: 'O direcție digitală, nu promisiunea unei platforme SaaS mature.',
        cta: 'Ce este SkalYou',
        roadmap: true,
      },
    ],
  },
  audience: {
    eyebrow: 'Pentru cine este',
    title: 'Rute pentru profiluri comerciale diferite',
    items: [
      {
        title: 'Furnizori',
        body: 'Companii care vor să vândă stocuri, produse standard sau aprovizionare permanentă, ori să testeze piața din România.',
      },
      {
        title: 'Cumpărători',
        body: 'Angrosiști, distribuitori, retaileri, cash & carry, HoReCa, procesatori, exportatori și traderi.',
      },
      {
        title: 'Companii în expansiune',
        body: 'Firme europene care vor să intre pe piața din România fără să își construiască imediat o structură locală completă.',
      },
      {
        title: 'Companii care vor să se digitalizeze',
        body: 'Afaceri care vor să transforme procese comerciale manuale în fluxuri B2B asistate de AI.',
      },
    ],
  },
  process: {
    eyebrow: 'Cum lucrăm',
    title: 'Un proces simplu, dar structurat',
    steps: [
      {
        title: 'Înțelegem nevoia',
        body: 'Vrei să vinzi, să cumperi, să intri pe piața din România sau să scalezi un proces B2B?',
      },
      {
        title: 'Alegem ruta potrivită',
        body: 'Direcționăm oportunitatea către PalletClearance.eu, Angrosist.ro, SkalYou.com sau Euro Intermed.',
      },
      {
        title: 'Calificăm informația',
        body: 'Strângem categoria, volumul, țara, urgența și profilul partenerului dorit.',
      },
      {
        title: 'Activăm rețeaua',
        body: 'Conectăm oportunitatea cu cumpărătorii, furnizorii sau partenerii potriviți.',
      },
      {
        title: 'Scalăm ce funcționează',
        body: 'Dacă prima oportunitate se confirmă, construim recurență, proces și canal comercial.',
      },
    ],
  },
  markets: {
    eyebrow: 'Piețe',
    title: 'România, un punct practic de intrare pentru creșterea B2B în Europa',
    body: 'România nu este doar o piață de destinație. Poate funcționa ca piață de testare, rută de distribuție și punct de acces la cumpărători pentru furnizorii europeni care vor să se extindă în Europa de Est.',
    points: [
      'Piață UE cu potențial pentru food, non-food, FMCG și materii prime.',
      'Rute către Europa de Est, Balcani și regiunea Mării Negre.',
      'Cerere B2B pentru produse standard, clearance și aprovizionare recurentă.',
      'Punct relevant pentru testare, validare și distribuție.',
    ],
  },
  trust: {
    eyebrow: 'Încredere prin claritate',
    title: 'Comunicăm public doar ceea ce putem susține',
    items: [
      {
        title: 'Date reale de companie',
        body: 'EURO INTERMED SOLUTIONS · Reg. Com. J8/735/2018 · CUI 39132147 · Brașov, România.',
      },
      {
        title: 'Flux B2B calificat',
        body: 'Rutele separă clearance, sourcing, intrarea pe piața din România și digitalizarea B2B, fără liste publice.',
      },
      {
        title: 'Contact clasic mereu disponibil',
        body: 'Formularul, emailul, telefonul, WhatsApp și programarea unei discuții rămân disponibile chiar și fără AI.',
      },
    ],
  },
  faq: {
    eyebrow: 'Întrebări frecvente',
    title: 'Clarificări înainte de primul contact',
    items: [
      {
        q: 'Sunteți un marketplace? Pot vedea oferte și prețuri?',
        a: 'Nu. Nu publicăm liste de produse și nici prețuri. Fiecare oportunitate este calificată și transmisă confidențial doar către partenerii relevanți.',
      },
      {
        q: 'Cum câștigați bani / care este modelul?',
        a: 'Conectăm cererea calificată cu furnizorii și cumpărătorii potriviți și sprijinim tranzacția. Detaliile comerciale se discută de la caz la caz.',
      },
      {
        q: 'Cât de repede primesc un răspuns?',
        a: 'După trimiterea cererii primești confirmarea de primire, iar echipa revine cu următorul pas. Nu promitem public un termen fix până la validarea operațională.',
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
        q: 'Trebuie să folosesc asistentul AI?',
        a: 'Nu. Poți folosi formularul clasic, emailul, WhatsApp sau poți programa o discuție.',
      },
      {
        q: 'Care este diferența dintre Angrosist și PalletClearance?',
        a: 'PalletClearance este pentru clearance, overstock, surplus, near-expiry și stocuri sensibile. Angrosist este pentru sourcing B2B, produse standard, materii prime, vrac și aprovizionare recurentă.',
      },
      {
        q: 'SkalYou este deja disponibil?',
        a: 'SkalYou este direcția digitală / AI a ecosistemului și este prezentat ca pilon în dezvoltare, nu ca produs SaaS matur.',
      },
    ],
  },
  contactCta: {
    eyebrow: 'Contact',
    title: 'Gata să începi o rută B2B?',
    copy: 'Trimite o cerere scurtă sau continuă direct pe WhatsApp. CUI-ul, documentele și prețurile se discută ulterior, nu la primul pas.',
    primary: 'Deschide formularul de contact',
    whatsapp: 'Scrie-ne pe WhatsApp',
  },
  contact: {
    eyebrow: 'Trimite o cerere',
    title: 'Trimite o cerere B2B',
    lead: 'Primul contact este scurt. Dacă e nevoie, îți cerem ulterior detalii despre documente, preț, poze, packing list sau condiții comerciale.',
    form: {
      name: 'Persoană de contact',
      company: 'Numele companiei',
      country: 'Țara',
      email: 'Email',
      phone: 'Telefon / WhatsApp',
      intent: 'Ce vrei să faci?',
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
          value: 'other-b2b-flow',
          label: 'Altă oportunitate B2B',
          wa: 'Buna ziua. Am o oportunitate B2B si vreau sa discut cu Euro Intermed. Detalii: ___',
        },
      ],
      message: 'Detalii (categorie, cantitate, locație, obiectiv)',
      consent:
        'Confirm că solicitarea este B2B și că Euro Intermed poate folosi datele pentru a-mi răspunde.',
      submit: 'Trimite cererea',
      submitting: 'Se trimite...',
      required: 'Câmp obligatoriu.',
      invalidEmail: 'Adaugă o adresă de email validă.',
      contactRequired: 'Adaugă un email sau un telefon/WhatsApp.',
      consentRequired: 'Bifează confirmarea pentru a putea trimite cererea.',
      success:
        'Am primit cererea ta. Echipa va analiza informațiile și va reveni cu următorul pas.',
      error:
        'Ceva nu a funcționat. Te rugăm să încerci din nou sau să folosești WhatsApp / email.',
      noEndpoint:
        'Trimiterea online nu este încă activată. Continuă pe WhatsApp sau prin email.',
    },
    aside: {
      whatsappEyebrow: 'Contact rapid',
      whatsappTitle: 'Continuă pe WhatsApp',
      whatsappHelper:
        'Alege o intenție și mesajul de WhatsApp se precompletează pentru tine.',
      whatsappCta: 'Scrie-ne pe WhatsApp',
      nextEyebrow: 'Ce urmează',
      next: [
        'Cererea este analizată în funcție de ruta aleasă.',
        'Echipa poate cere detalii suplimentare dacă există o potrivire.',
        'CUI-ul, documentele și prețurile se discută ulterior, nu la primul pas.',
      ],
      directEyebrow: 'Contact direct',
      email: 'Email',
      phone: 'Telefon',
      calendly: 'Programează o discuție',
      calendlyCta: 'Deschide Calendly',
    },
  },
  footer: {
    tagline:
      'Ecosistem B2B pentru clearance, sourcing, intrarea pe piața din România și fluxuri comerciale asistate de AI.',
    channels: 'Canale',
    legal: 'Legal',
    contact: 'Contact',
    privacy: 'Politică de confidențialitate',
    terms: 'Termeni și condiții',
    gdpr: 'GDPR & ștergerea datelor',
    legalNote:
      'Textele juridice sunt în curs de revizuire finală înainte de lansarea publică.',
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
      'Euro Intermed connects B2B suppliers and buyers: clearance and overstock via PalletClearance.eu, wholesale sourcing via Angrosist.ro and AI-assisted flows via SkalYou.com.',
    contactTitle: 'Contact | Euro Intermed Solutions',
    contactDescription:
      'Send a B2B request to Euro Intermed or continue on WhatsApp with your intent pre-filled. Clearance, sourcing or entering the Romanian market.',
    notFoundTitle: 'Page not found | Euro Intermed',
  },
  nav: {
    skip: 'Skip to content',
    home: 'Home',
    about: 'About',
    ecosystem: 'Ecosystem',
    howWeWork: 'How we work',
    markets: 'Markets',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Start the B2B flow',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    badge: 'B2B trade · Clearance · Sourcing · AI scaling',
    title: 'The B2B ecosystem for trade, sourcing and expansion across Europe',
    lead: 'We help European companies sell, buy and enter new markets through three connected channels: PalletClearance.eu for clearance and overstock, Angrosist.ro for wholesale sourcing and SkalYou.com for AI-assisted B2B flows.',
    primary: 'Start the B2B flow',
    secondary: 'Explore the ecosystem',
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
  positioning: {
    eyebrow: 'Positioning',
    title: 'We are neither a public marketplace nor a classic broker.',
    copy: 'We are the B2B infrastructure that connects every commercial opportunity to the right channel.',
    items: [
      {
        n: '01',
        title: 'Three specialised channels',
        body: 'Clearance, sourcing and B2B digitalisation run separately, yet are connected through the same routing logic.',
      },
      {
        n: '02',
        title: 'No public exposure',
        body: 'Sensitive stock never lands in open lists, public offers or visible prices.',
      },
      {
        n: '03',
        title: 'Structured demand',
        body: 'We qualify intent before routing it to the right channel.',
      },
      {
        n: '04',
        title: 'Access to the Romanian market',
        body: 'We support companies that want to test the market, distribute or reach buyers in Romania.',
      },
      {
        n: '05',
        title: 'AI-ready model',
        body: 'The flow is compatible with AI-assisted qualification, but the site works without the AI platform too.',
      },
    ],
  },
  about: {
    eyebrow: 'About Euro Intermed',
    title: 'From a commercial opportunity to a structured B2B route',
    body: [
      'Euro Intermed Solutions is the umbrella company that builds commercial routes for suppliers, buyers and B2B partners. We work with real opportunities: stock to sell, purchase requests, standard products, entering the Romanian market and commercial processes that can be digitalised and scaled.',
      'We are not a simple catalogue. We qualify demand, structure the information and route every opportunity to the right channel.',
    ],
  },
  ecosystem: {
    eyebrow: 'What we build',
    title: 'The three Euro Intermed pillars',
    copy: 'Each channel solves a different commercial problem: blocked stock, a sourcing need or B2B scaling. Together they form a clear route, from opportunity to transaction.',
    rule: {
      pallet: 'Buying or selling clearance / overstock?',
      angrosist: 'Need standard or recurring supply?',
    },
    pillars: [
      {
        key: 'clearance',
        badge: 'Clearance & Overstock',
        name: 'PalletClearance.eu',
        body: 'Buying and selling overstock, clearance, surplus, near-expiry, slow-moving goods or stock liquidations.',
        note: 'We do not publish open product lists or show prices. Every opportunity is filtered and sent only to relevant B2B partners.',
        cta: 'Sell or buy clearance',
        roadmap: false,
      },
      {
        key: 'angrosist',
        badge: 'Wholesale sourcing',
        name: 'Angrosist.ro',
        body: 'Requests and offers for raw materials, bulk goods, FMCG, food, non-food and standard merchandise in recurring volumes.',
        note: 'The main flow is the request for quote, not a shopping cart.',
        cta: 'Explore B2B sourcing',
        roadmap: false,
      },
      {
        key: 'skalyou',
        badge: 'In development',
        name: 'SkalYou.com',
        body: 'The future digital layer of the ecosystem: lead qualification, onboarding for suppliers and buyers, market-entry processes and repeatable commercial flows.',
        note: 'A digital direction, not the promise of a mature SaaS platform.',
        cta: 'What is SkalYou',
        roadmap: true,
      },
    ],
  },
  audience: {
    eyebrow: 'Who it is for',
    title: 'Routes for different commercial profiles',
    items: [
      {
        title: 'Suppliers',
        body: 'Companies that want to sell stock, standard products or permanent supply, or test the Romanian market.',
      },
      {
        title: 'Buyers',
        body: 'Wholesalers, distributors, retailers, cash & carry, HoReCa, processors, exporters and traders.',
      },
      {
        title: 'Companies expanding',
        body: 'European firms that want to enter the Romanian market without immediately building a full local structure.',
      },
      {
        title: 'Companies going digital',
        body: 'Businesses that want to turn manual commercial processes into AI-assisted B2B flows.',
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'A simple but structured process',
    steps: [
      {
        title: 'We understand the need',
        body: 'Do you want to sell, buy, enter the Romanian market or scale a B2B process?',
      },
      {
        title: 'We choose the right route',
        body: 'We route the opportunity to PalletClearance.eu, Angrosist.ro, SkalYou.com or Euro Intermed.',
      },
      {
        title: 'We qualify the information',
        body: 'We gather category, volume, country, urgency and the desired partner profile.',
      },
      {
        title: 'We activate the network',
        body: 'We connect the opportunity with the right buyers, suppliers or partners.',
      },
      {
        title: 'We scale what works',
        body: 'If the first opportunity is confirmed, we build recurrence, process and a commercial channel.',
      },
    ],
  },
  markets: {
    eyebrow: 'Markets',
    title: 'Romania — a practical entry point for B2B growth in Europe',
    body: 'Romania is not just a destination market. It can act as a test market, a distribution route and an access point to buyers for European suppliers looking to expand into Eastern Europe.',
    points: [
      'EU market with potential for food, non-food, FMCG and raw materials.',
      'Routes to Eastern Europe, the Balkans and the Black Sea region.',
      'B2B demand for standard products, clearance and recurring supply.',
      'A relevant point for testing, validation and distribution.',
    ],
  },
  trust: {
    eyebrow: 'Trust through clarity',
    title: 'We only communicate publicly what we can back up',
    items: [
      {
        title: 'Real company data',
        body: 'EURO INTERMED SOLUTIONS · Reg. No. J8/735/2018 · VAT 39132147 · Brașov, Romania.',
      },
      {
        title: 'Qualified B2B flow',
        body: 'Routes separate clearance, sourcing, Romanian market entry and B2B digitalisation, with no public lists.',
      },
      {
        title: 'Classic contact always available',
        body: 'The form, email, phone, WhatsApp and booking a call remain available even without AI.',
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
        q: 'How do you make money / what is the model?',
        a: 'We connect qualified demand with the right suppliers and buyers and support the transaction. Commercial details are discussed case by case.',
      },
      {
        q: 'How quickly do I get a reply?',
        a: 'After you submit, you receive an acknowledgement and the team follows up with the next step. We do not publicly promise a fixed deadline before operational validation.',
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
        q: 'Do I have to use the AI assistant?',
        a: 'No. You can use the classic form, email, WhatsApp or book a call.',
      },
      {
        q: 'What is the difference between Angrosist and PalletClearance?',
        a: 'PalletClearance is for clearance, overstock, surplus, near-expiry and sensitive stock. Angrosist is for B2B sourcing, standard products, raw materials, bulk and recurring supply.',
      },
      {
        q: 'Is SkalYou already available?',
        a: 'SkalYou is the digital / AI direction of the ecosystem and is presented as a pillar in development, not a mature SaaS product.',
      },
    ],
  },
  contactCta: {
    eyebrow: 'Contact',
    title: 'Ready to start a B2B route?',
    copy: 'Send a short request or continue directly on WhatsApp. VAT, documents and prices are discussed later, not at the first step.',
    primary: 'Open the contact form',
    whatsapp: 'Message us on WhatsApp',
  },
  contact: {
    eyebrow: 'Send a request',
    title: 'Send a B2B request',
    lead: 'The first contact is short. If needed, we later ask for details about documents, price, photos, packing list or commercial terms.',
    form: {
      name: 'Contact person',
      company: 'Company name',
      country: 'Country',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      intent: 'What do you want to do?',
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
          value: 'other-b2b-flow',
          label: 'Another B2B opportunity',
          wa: 'Hello. I have a B2B opportunity and want to talk to Euro Intermed. Details: ___',
        },
      ],
      message: 'Details (category, quantity, location, objective)',
      consent:
        'I confirm this is a B2B request and that Euro Intermed may use the data to reply to me.',
      submit: 'Send request',
      submitting: 'Sending...',
      required: 'Required field.',
      invalidEmail: 'Add a valid email address.',
      contactRequired: 'Add an email or a phone/WhatsApp number.',
      consentRequired: 'Tick the confirmation to send the request.',
      success:
        'We received your request. The team will review the information and follow up with the next step.',
      error:
        'Something went wrong. Please try again or use WhatsApp / email.',
      noEndpoint:
        'Online submission is not enabled yet. Please continue on WhatsApp or by email.',
    },
    aside: {
      whatsappEyebrow: 'Quick contact',
      whatsappTitle: 'Continue on WhatsApp',
      whatsappHelper:
        'Pick an intent and the WhatsApp message pre-fills for you.',
      whatsappCta: 'Message us on WhatsApp',
      nextEyebrow: 'What happens next',
      next: [
        'The request is reviewed based on the chosen route.',
        'The team may ask for more details if there is a match.',
        'VAT, documents and prices are discussed later, not at the first step.',
      ],
      directEyebrow: 'Direct contact',
      email: 'Email',
      phone: 'Phone',
      calendly: 'Book a call',
      calendlyCta: 'Open Calendly',
    },
  },
  footer: {
    tagline:
      'B2B ecosystem for clearance, sourcing, Romanian market entry and AI-assisted commercial flows.',
    channels: 'Channels',
    legal: 'Legal',
    contact: 'Contact',
    privacy: 'Privacy policy',
    terms: 'Terms & conditions',
    gdpr: 'GDPR & data deletion',
    legalNote:
      'The legal texts are under final review before public launch.',
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
