/**
 * Single source of company data and product catalogue.
 * Pages and components only render what is defined here.
 */
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

import syringes from '../assets/products/syringes.jpg';
import tongueDepressors from '../assets/products/tongue-depressors.jpg';
import infusionSet from '../assets/products/infusion-set.png';
import cannula from '../assets/products/cannula.png';
import urineBag from '../assets/products/urine-bag.jpg';
import needles from '../assets/products/needles.jpg';
import urineCollectorGirls from '../assets/products/urine-collector-girls.jpg';
import urineCollectorBoys from '../assets/products/urine-collector-boys.webp';
import nasalAspirator from '../assets/products/nasal-aspirator.jpg';
import thermalBags from '../assets/products/thermal-bags.jpg';

export const site = {
  brand: 'Term-Med',
  legalName: 'Term-Med',
  founded: 2005,
  author: 'Tomasz Kozłowski',

  contact: {
    phone: '+48 692 440 377',
    phoneHref: '+48692440377',
    salesEmail: 'sales@term-med.pl',
    infoEmail: 'info@term-med.pl',
    street: 'ul. Dygasińskiego 5',
    postalCode: '41-400',
    city: 'Mysłowice',
    country: 'PL',
    mapQuery: 'Dygasińskiego 5, 41-400 Mysłowice',
  },

  /** Indexing is opt-in: only the production build (term-med.pl) sets INDEXABLE=true. */
  indexable: import.meta.env.INDEXABLE === 'true',
} as const;

type Localized = Record<Lang, string>;

export type Product = {
  id: string;
  image: ImageMetadata;
  name: Localized;
  description: Localized;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 'syringes',
    image: syringes,
    featured: true,
    name: { pl: 'Strzykawki jednorazowe', en: 'Disposable syringes' },
    description: {
      pl: 'Strzykawki Chirana w pojemnościach 2, 5, 10 i 20 ml.',
      en: 'Chirana syringes in 2, 5, 10 and 20 ml sizes.',
    },
  },
  {
    id: 'tongue-depressors',
    image: tongueDepressors,
    featured: true,
    name: { pl: 'Drewniane szpatułki laryngologiczne', en: 'Wooden tongue depressors' },
    description: {
      pl: 'Szpatułki marki Term-Med, pakowane po 100 sztuk.',
      en: 'Term-Med branded depressors, packed 100 per box.',
    },
  },
  {
    id: 'infusion-sets',
    image: infusionSet,
    featured: true,
    name: { pl: 'Przyrządy do przetaczania płynów infuzyjnych', en: 'Infusion sets' },
    description: {
      pl: 'Jednorazowe zestawy do podawania płynów infuzyjnych.',
      en: 'Single-use sets for administering infusion fluids.',
    },
  },
  {
    id: 'cannulas',
    image: cannula,
    featured: true,
    name: { pl: 'Kaniule dożylne (wenflony)', en: 'IV cannulas' },
    description: {
      pl: 'Kaniule do długotrwałego dostępu dożylnego.',
      en: 'Cannulas for peripheral intravenous access.',
    },
  },
  {
    id: 'urine-bags',
    image: urineBag,
    featured: true,
    name: { pl: 'Worki do dobowej zbiórki moczu', en: 'Urine drainage bags' },
    description: {
      pl: 'Worki z zaworem spustowym do dobowej zbiórki moczu.',
      en: 'Bags with a drain valve for 24-hour urine collection.',
    },
  },
  {
    id: 'needles',
    image: needles,
    featured: true,
    name: { pl: 'Igły iniekcyjne', en: 'Injection needles' },
    description: {
      pl: 'Pełna gama rozmiarów, oznaczonych kolorami.',
      en: 'A full range of colour-coded gauges.',
    },
  },
  {
    id: 'urine-collectors-girls',
    image: urineCollectorGirls,
    name: { pl: 'Woreczki do zbiórki moczu dla dziewczynek', en: 'Paediatric urine collectors for girls' },
    description: {
      pl: 'Sterylne woreczki do pobierania próbek moczu.',
      en: 'Sterile bags for urine sample collection.',
    },
  },
  {
    id: 'urine-collectors-boys',
    image: urineCollectorBoys,
    name: { pl: 'Woreczki do zbiórki moczu dla chłopców', en: 'Paediatric urine collectors for boys' },
    description: {
      pl: 'Sterylne woreczki do pobierania próbek moczu.',
      en: 'Sterile bags for urine sample collection.',
    },
  },
  {
    id: 'nasal-aspirators',
    image: nasalAspirator,
    name: { pl: 'Aspirator do nosa NaNosek', en: 'NaNosek nasal aspirator' },
    description: {
      pl: 'Aspirator do udrażniania nosa dla dzieci i niemowląt.',
      en: 'Nasal aspirator for babies and children.',
    },
  },
  {
    id: 'thermal-bags',
    image: thermalBags,
    name: { pl: 'Torby termoizolacyjne na leki', en: 'Insulated bags for medicines' },
    description: {
      pl: 'Torebki z zapięciem strunowym: 0,5 l, 1 l i 2 l.',
      en: 'Zip-lock bags in 0.5 l, 1 l and 2 l sizes.',
    },
  },
];
