// Campaign figures checked on the live campaign pages on 2026-10-21.
// Art: set art.cover to a file in public/art/ (photo: true for product shots on black); without one a placeholder is drawn.

export type Project = {
  slug: string;
  title: string;
  platform: 'Kickstarter' | 'BackerKit';
  url: string;
  pledged?: number;
  goal?: number;
  backers?: number;
  ended?: string;
  status?: string;
  blurb: string;
  role: string;
  art: { from: string; to: string; credit?: string; cover?: string; photo?: boolean };
};

export type Studio = {
  name: string;
  role: string;
  years: string;
  note: string;
  projects: Project[];
};

export const studios: Studio[] = [
  {
    name: 'Vernal Voyage',
    role: 'Co-founder & producer',
    years: '2025 – present',
    note: 'Istanbul & New York. US entity, contracts with international partners.',
    projects: [
      {
        slug: 'odsire',
        title: 'Odsire: Pyres of Cappadocia',
        platform: 'Kickstarter',
        url: 'https://www.kickstarter.com/projects/vernalvoyage/odsire-pyres-of-cappadocia-5e',
        pledged: 78119,
        goal: 15000,
        backers: 709,
        ended: 'Apr 2026',
        blurb: 'A 500+ page 5E setting and adventure in a hidden Cappadocia where fire is cursed.',
        role: 'Co-founder and producer. Set up the US company and negotiated vendor and licensing contracts.',
        art: { from: '#5A2A18', to: '#F2A35C' },
      },
      {
        slug: 'yatagan',
        title: 'YATAGAN: A Roleplaying Game',
        platform: 'BackerKit',
        url: 'https://www.backerkit.com/c/projects/grimcraft-games-llc/yatagan-a-roleplaying-game/pre-launch',
        status: 'Launching 27 Oct 2026',
        blurb: 'A Color D12 tabletop RPG set in the Nomad Worlds, made with Grimcraft Games.',
        role: 'Co-producer for Vernal Voyage.',
        art: { from: '#2E1A2B', to: '#B5463A' },
      },
    ],
  },
  {
    name: 'Metis Creative',
    role: 'Co-founder & producer',
    years: '2021 – 2024',
    note: 'Istanbul & Sheridan, Wyoming. US entity, logistics and supply chain.',
    projects: [
      {
        slug: 'crusades',
        title: 'Historica Arcanum: Era of the Crusades',
        platform: 'Kickstarter',
        url: 'https://www.kickstarter.com/projects/metiscreative/historica-arcanum-era-of-the-crusades-5e',
        pledged: 387718,
        goal: 30000,
        backers: 3446,
        ended: 'Sep 2023',
        blurb: 'Two 5E sourcebooks set in Jerusalem and Cairo during the Crusades.',
        role: 'Producer. Supply chain, fulfilment and contracts.',
        art: { from: '#3A2414', to: '#D9A441', cover: '/art/books/crusades.webp', photo: true },
      },
      {
        slug: 'wayfarer',
        title: 'Wayfarer: Nomadic Realms',
        platform: 'Kickstarter',
        url: 'https://www.kickstarter.com/projects/grimgolem/wayfarer-nomadic-realms-5e',
        pledged: 70473,
        goal: 8000,
        backers: 1320,
        ended: 'May 2023',
        blurb: 'A 5E sourcebook, setting guide and adventure drawn from Asian myths and legends.',
        role: 'Producer. Cross-border supply chain.',
        art: { from: '#1F2C3A', to: '#C9A15A', cover: '/art/books/wayfarer.webp', photo: true },
      },
      {
        slug: 'silk-road',
        title: 'Historica Arcanum: Empires of the Silk Road',
        platform: 'Kickstarter',
        url: 'https://www.kickstarter.com/projects/metiscreative/historica-arcanum-empires-of-the-silk-road-5e',
        pledged: 218726,
        goal: 15000,
        backers: 2670,
        ended: 'Oct 2022',
        blurb: 'Two 5E sourcebooks with professions, overland travel and plague rules.',
        role: 'Producer. Supply chain, fulfilment and contracts.',
        art: { from: '#123A3A', to: '#E0B25A', cover: '/art/books/silk-road.webp', photo: true },
      },
      {
        slug: 'seekers',
        title: 'Historica Arcanum: Seeker’s Handbook to the Orient',
        platform: 'Kickstarter',
        url: 'https://www.kickstarter.com/projects/metiscreative/historica-arcanum-seekers-handbook-to-orient',
        pledged: 86676,
        goal: 8000,
        backers: 1716,
        ended: 'Sep 2021',
        blurb: 'A 5E sourcebook drawing on Near Eastern cultures, with professions and alternate-history tools.',
        role: 'Co-founder and producer. First campaign of the studio.',
        art: { from: '#2A1838', to: '#C77B4A', cover: '/art/books/city-of-crescent.webp', photo: true },
      },
    ],
  },
];

const all = studios.flatMap((s) => s.projects);
const funded = all.filter((p) => p.pledged);
export const totals = {
  campaigns: funded.length,
  pledged: funded.reduce((n, p) => n + (p.pledged ?? 0), 0),
  backers: funded.reduce((n, p) => n + (p.backers ?? 0), 0),
};

// Key art from Historica Arcanum: The City of Crescent (Metis Creative), shown in the gallery.
export const crescentArt = [
  ['lunar-eclipse', 'Lunar Eclipse'],
  ['murder-at-pera-palace', 'Murder at Pera Palace'],
  ['lilac-sultan', 'Lilac Sultan'],
  ['thieves-guild', 'Thieves Guild'],
  ['harem', 'Harem'],
  ['the-ghost', 'The Ghost'],
  ['the-eye-witness', 'The Eye Witness'],
  ['the-cut', 'The Cut'],
  ['hano-the-widow', 'Hano the Widow'],
  ['death-of-a-mentor', 'Death of a Mentor'],
] as const;
