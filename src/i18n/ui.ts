/**
 * Translations and localized routes. Polish is the default language (served at "/"),
 * English lives under "/en/". Every page key must exist in both languages.
 */

export const languages = { pl: 'Polski', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pl';

export const routes = {
  home: { pl: '/', en: '/en/' },
  offer: { pl: '/oferta/', en: '/en/offer/' },
  contact: { pl: '/kontakt/', en: '/en/contact/' },
} as const satisfies Record<string, Record<Lang, string>>;
export type PageKey = keyof typeof routes;

export const ui = {
  pl: {
    locale: 'pl_PL',
    tagline: 'Wyroby medyczne jednorazowego użytku',
    description:
      'Term-Med — polski dostawca wyrobów medycznych jednorazowego użytku od 2005 roku. Strzykawki, igły, kaniule, przyrządy do infuzji i więcej dla hurtowni, aptek i szpitali.',
    nav: { home: 'Strona główna', about: 'O nas', offer: 'Produkty', contact: 'Kontakt' },
    aboutId: 'o-nas',
    themeToggle: 'Przełącz tryb jasny / ciemny',
    menu: 'Menu',
    skip: 'Przejdź do treści',
    switchLang: 'Wersja angielska',
    call: 'Zadzwoń',
    write: 'Napisz',
    askOffer: 'Zapytaj o ofertę',
    seeOffer: 'Poznaj naszą ofertę',
    seeAll: 'Zobacz wszystkie produkty',
    back: 'Powrót do strony głównej',
    mailSubject: 'Zapytanie ofertowe',

    hero: {
      eyebrow: 'Od 2005 roku',
      title: 'Witamy w Term-Med',
      lead: 'Polska firma specjalizująca się w dostarczaniu wyrobów medycznych jednorazowego użytku i środków pomocniczych. Współpracujemy z największymi hurtowniami i aptekami w Polsce.',
      trust: 'Zaufany partner hurtowni i aptek',
    },
    facts: [
      { value: '2005', label: 'na rynku medycznym od' },
      { value: 'PL + UE', label: 'import i wprowadzanie do obrotu' },
      { value: 'B2B', label: 'hurtownie, apteki i szpitale' },
    ],
    band: {
      title: 'Wszystko, czego potrzebuje gabinet i szpital',
      text: 'Od strzykawek i igieł, przez kaniule i przyrządy do infuzji, po akcesoria pediatryczne.',
    },
    marquee: [
      { icon: 'syringe', label: 'Strzykawki' },
      { icon: 'needle', label: 'Igły iniekcyjne' },
      { icon: 'cannula', label: 'Kaniule dożylne' },
      { icon: 'infusion', label: 'Przyrządy do infuzji' },
      { icon: 'bag', label: 'Zbiórka moczu' },
      { icon: 'spatula', label: 'Szpatułki' },
      { icon: 'baby', label: 'Pediatria' },
      { icon: 'snowflake', label: 'Torby termoizolacyjne' },
      { icon: 'shield', label: 'Jakość w dobrej cenie' },
      { icon: 'truck', label: 'Dla hurtowni i aptek' },
      { icon: 'cross', label: 'Import z UE' },
    ],
    about: {
      eyebrow: 'O nas',
      title: 'Kim jesteśmy',
      text: 'Od 2005 roku zdobywamy wiedzę o branży medycznej, która pozwoliła nam osiągnąć stabilną pozycję na rynku.',
      values: [
        {
          title: 'Jakość w dobrej cenie',
          text: 'Dostarczamy produkty dobrej jakości w korzystnej cenie, dzięki czemu konkurujemy z międzynarodowymi producentami.',
        },
        {
          title: 'Import i dystrybucja',
          text: 'Importujemy wyroby medyczne i wprowadzamy je do obrotu na rynku polskim i europejskim.',
        },
        {
          title: 'Sprawdzony partner',
          text: 'Dostarczamy produkty do największych hurtowni i aptek w Polsce.',
        },
        {
          title: 'Nasza misja',
          text: 'Pomagamy polskim szpitalom, codziennie dystrybuując niezbędne wyroby medyczne.',
        },
      ],
    },
    featured: {
      eyebrow: 'Produkty',
      title: 'Nasza oferta',
      text: 'Wybrane wyroby z naszego katalogu. Pełna oferta dostępna jest na stronie produktów.',
    },
    offer: {
      title: 'Nasza oferta',
      metaTitle: 'Oferta — wyroby medyczne jednorazowego użytku',
      metaDescription:
        'Strzykawki, igły iniekcyjne, kaniule, przyrządy do infuzji, worki do zbiórki moczu, szpatułki i torby termoizolacyjne. Zapytaj o ofertę hurtową Term-Med.',
      text: 'Dostarczamy wyroby medyczne jednorazowego użytku dla hurtowni, aptek i placówek medycznych. Zapytaj o dostępność i ceny hurtowe.',
    },
    cta: {
      title: 'Szukasz sprawdzonego dostawcy?',
      text: 'Napisz lub zadzwoń — przygotujemy ofertę dopasowaną do potrzeb Twojej hurtowni, apteki lub placówki.',
    },
    contactPage: {
      title: 'Kontakt',
      metaDescription: 'Kontakt z Term-Med: ul. Dygasińskiego 5, 41-400 Mysłowice. Tel. +48 692 440 377, sales@term-med.pl.',
      lead: 'Masz pytanie o produkty lub chcesz otrzymać ofertę? Skontaktuj się z nami.',
      phone: 'Telefon',
      sales: 'Dział sprzedaży',
      info: 'Informacje ogólne',
      address: 'Adres',
      country: 'Polska',
      mapTitle: 'Mapa dojazdu do Term-Med',
      mapLoad: 'Pokaż mapę',
      mapNote: 'Mapa Google ładuje się dopiero po kliknięciu.',
      openMap: 'Otwórz w Mapach Google',
    },
    footer: { contact: 'Kontakt', links: 'Na skróty', rights: 'Wszelkie prawa zastrzeżone.' },
    notFound: { title: 'Nie znaleziono strony', text: 'Strona, której szukasz, nie istnieje lub została przeniesiona.' },
  },

  en: {
    locale: 'en_GB',
    tagline: 'Single-use medical devices',
    description:
      'Term-Med is a Polish supplier of single-use medical devices since 2005: syringes, needles, cannulas, infusion sets and more for wholesalers, pharmacies and hospitals.',
    nav: { home: 'Home', about: 'About us', offer: 'Products', contact: 'Contact' },
    aboutId: 'about',
    themeToggle: 'Toggle light / dark mode',
    menu: 'Menu',
    skip: 'Skip to content',
    switchLang: 'Polish version',
    call: 'Call',
    write: 'Email',
    askOffer: 'Request a quote',
    seeOffer: 'View our offer',
    seeAll: 'See all products',
    back: 'Back to home page',
    mailSubject: 'Quote request',

    hero: {
      eyebrow: 'Since 2005',
      title: 'Welcome to Term-Med',
      lead: 'A Polish company delivering single-use medical devices and auxiliary supplies. We work with the largest wholesalers and pharmacies in Poland.',
      trust: 'A trusted partner of wholesalers and pharmacies',
    },
    facts: [
      { value: '2005', label: 'in the medical market since' },
      { value: 'PL + EU', label: 'import and market placement' },
      { value: 'B2B', label: 'wholesalers, pharmacies, hospitals' },
    ],
    band: {
      title: 'Everything clinics and hospitals need',
      text: 'From syringes and needles to cannulas, infusion sets and paediatric supplies.',
    },
    marquee: [
      { icon: 'syringe', label: 'Syringes' },
      { icon: 'needle', label: 'Injection needles' },
      { icon: 'cannula', label: 'IV cannulas' },
      { icon: 'infusion', label: 'Infusion sets' },
      { icon: 'bag', label: 'Urine collection' },
      { icon: 'spatula', label: 'Tongue depressors' },
      { icon: 'baby', label: 'Paediatrics' },
      { icon: 'snowflake', label: 'Insulated bags' },
      { icon: 'shield', label: 'Quality at a fair price' },
      { icon: 'truck', label: 'For wholesalers & pharmacies' },
      { icon: 'cross', label: 'EU imports' },
    ],
    about: {
      eyebrow: 'About us',
      title: 'Who we are',
      text: 'Since 2005 we have been building the medical-industry expertise that gave us a stable position in the market.',
      values: [
        {
          title: 'Quality at a fair price',
          text: 'We deliver quality products at favourable prices, which lets us compete with international manufacturers.',
        },
        {
          title: 'Import and distribution',
          text: 'We import medical devices and place them on the Polish and European markets.',
        },
        {
          title: 'A proven partner',
          text: 'We supply the largest wholesalers and pharmacies in Poland.',
        },
        {
          title: 'Our mission',
          text: 'We help Polish hospitals by distributing essential medical devices every day.',
        },
      ],
    },
    featured: {
      eyebrow: 'Products',
      title: 'Our offer',
      text: 'A selection from our catalogue. See the products page for the full range.',
    },
    offer: {
      title: 'Our offer',
      metaTitle: 'Products — single-use medical devices',
      metaDescription:
        'Syringes, injection needles, IV cannulas, infusion sets, urine bags, tongue depressors and insulated bags. Request a wholesale quote from Term-Med.',
      text: 'We supply single-use medical devices to wholesalers, pharmacies and healthcare facilities. Ask us about availability and wholesale pricing.',
    },
    cta: {
      title: 'Looking for a reliable supplier?',
      text: 'Email or call us and we will prepare an offer tailored to your wholesale business, pharmacy or facility.',
    },
    contactPage: {
      title: 'Contact',
      metaDescription: 'Contact Term-Med: Dygasińskiego 5, 41-400 Mysłowice, Poland. Phone +48 692 440 377, sales@term-med.pl.',
      lead: 'Have a question about our products or want a quote? Get in touch.',
      phone: 'Phone',
      sales: 'Sales',
      info: 'General enquiries',
      address: 'Address',
      country: 'Poland',
      mapTitle: 'Map showing the Term-Med office',
      mapLoad: 'Show map',
      mapNote: 'Google Maps loads only after you click.',
      openMap: 'Open in Google Maps',
    },
    footer: { contact: 'Contact', links: 'Quick links', rights: 'All rights reserved.' },
    notFound: { title: 'Page not found', text: 'The page you are looking for does not exist or has been moved.' },
  },
} as const;

export type UI = (typeof ui)[Lang];

export function t(lang: Lang): UI {
  return ui[lang];
}
