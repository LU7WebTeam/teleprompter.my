// ============================================================
// Location landing pages — content schema + data
// Each entry renders a page at /locations/{slug}/ via
// src/pages/locations/[slug].astro. The content fields here map
// 1:1 to the columns in docs/locations-content.csv so the CSV
// is the single planning source — copy a row's cells into the
// matching field here to publish a new location page.
// ============================================================

export interface LocationFAQ {
  q: string;
  a: string;
}

export interface LocationPage {
  /** URL slug — page renders at /locations/{slug}/ */
  slug: string;
  /** Display name, e.g. "Kuala Lumpur" */
  name: string;
  /** Region bucket, e.g. "Klang Valley", "Southern", "East Malaysia" */
  region: string;

  // --- Hero ---
  heroH1: string;
  heroSub: string;
  heroBadge: string;

  // --- Local intro ---
  introEyebrow: string;
  introHeading: string;
  introBody: string;
  /** Suburbs / cities / zones served within this location */
  areasCovered: string[];

  // --- Why choose (local) ---
  whyEyebrow: string;
  whyHeading: string;
  whySub: string;
  whyPoints: { title: string; desc: string }[];

  // --- What's included ---
  includedHeading: string;
  includedItems: string[];

  // --- How it works ---
  stepsHeading: string;
  steps: string[];

  // --- FAQ ---
  faqs: LocationFAQ[];

  // --- Final CTA ---
  ctaHeading: string;
  ctaSub: string;

  // --- SEO ---
  metaTitle: string;
  metaDescription: string;
}

// --- Shared, nationwide sections ------------------------------------------
// These sections are genuinely identical across locations; each location only
// overrides the location-specific bits (hero, intro, areas, FAQ answers).

const sharedIncludedItems: string[] = [
  'Professional teleprompter unit',
  'Beam-splitter glass, frame & hood',
  'Laptop with teleprompter software',
  'Heavy-duty tripod & mounting hardware',
  'Transport FOC within the local zone',
  'Delivery, setup & on-site testing',
  'Experienced teleprompter operator',
  'Dismantling after your event',
  'Dedicated project manager',
];

const sharedSteps: string[] = [
  'Tell us about your event — date, venue and audience size',
  'Choose the right teleprompter for your setup',
  'We confirm availability and send your quote',
  'Our crew delivers, sets up and tests the rig',
  'An operator runs the prompter throughout your event',
];

const sharedWhyPoints: { title: string; desc: string }[] = [
  { title: 'Nationwide coverage', desc: 'We bring our teleprompters to your venue, anywhere in Malaysia.' },
  { title: 'Operated, not just rented', desc: 'An experienced operator runs the prompter live — setup to teardown.' },
  { title: 'Four setups, one team', desc: 'Presidential, Stage TV, Monitor and iPad — matched to your stage or camera.' },
  { title: 'Clear pricing', desc: 'Transparent per-day rates with delivery included within the local zone.' },
];

const sharedFaqsTail: LocationFAQ[] = [
  {
    q: 'How much lead time do you need?',
    a: 'We recommend booking at least 7 days ahead to secure your preferred setup and operator. For urgent or same-week events, contact us directly — we will always try to accommodate where equipment is available.',
  },
  {
    q: 'Is an operator included in the rental?',
    a: 'Yes. Every rental includes an experienced teleprompter operator who runs the script during your event, plus a crew member for setup and dismantling. You are never left to operate it yourself.',
  },
];

// --- Location entries ------------------------------------------------------

const sharedWhy = {
  whyEyebrow: 'Why choose us',
  whyPoints: sharedWhyPoints,
  includedItems: sharedIncludedItems,
  steps: sharedSteps,
  faqsTail: sharedFaqsTail,
};

export const locations: LocationPage[] = [
  {
    slug: 'kuala-lumpur',
    name: 'Kuala Lumpur',
    region: 'Klang Valley',
    heroH1: 'Teleprompter Rental in Kuala Lumpur',
    heroSub:
      'Rent professional teleprompters for conferences, launches and broadcasts in Kuala Lumpur — delivered, set up and operated by our crew, from KLCC to Bangsar and everywhere in between.',
    heroBadge: 'Serving Kuala Lumpur & Klang Valley',
    introEyebrow: 'Who we are',
    introHeading: 'Teleprompter rental built for KL events',
    introBody:
      'TelePrompter.my provides professional teleprompter rental across Kuala Lumpur for corporate conferences, product launches, gala dinners and video productions. Our crew handles delivery, installation, testing and live operation, so your speakers stay on script and on time — whether you are in a hotel ballroom, a convention centre or a studio.',
    areasCovered: ['KLCC', 'Bukit Bintang', 'Bangsar', 'Mid Valley', 'Mont Kiara', 'Sentul', 'Cheras', 'Setapak'],
    ...sharedWhy,
    whyHeading: 'Built for flawless delivery, end to end',
    whySub: 'From the equipment to the operator, every rental in Kuala Lumpur is handled start to finish.',
    includedHeading: 'What is included in a standard KL rental',
    stepsHeading: 'How it works',
    faqs: [
      {
        q: 'Do you deliver teleprompters to Kuala Lumpur?',
        a: 'Yes. We deliver, install and operate teleprompters across Kuala Lumpur and the wider Klang Valley. Delivery within the KL zone is free of charge.',
      },
      {
        q: 'What areas do you cover in Kuala Lumpur?',
        a: 'We cover the main event districts — KLCC, Bukit Bintang, Bangsar, Mid Valley, Mont Kiara and the surrounding KL areas. Venues outside this zone are charged by mileage.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning an event in Kuala Lumpur?',
    ctaSub: 'Tell us your date and venue — we will confirm availability and a quote within one business day.',
    metaTitle: 'Teleprompter Rental in Kuala Lumpur | TelePrompter.my',
    metaDescription:
      'Rent professional teleprompters in Kuala Lumpur for conferences, launches and broadcasts. Presidential, Stage TV, Monitor and iPad setups — delivered, set up and operated. Transport FOC within KL.',
  },
  {
    slug: 'klang-valley',
    name: 'Klang Valley',
    region: 'Klang Valley',
    heroH1: 'Teleprompter Rental in the Klang Valley',
    heroSub:
      'Professional teleprompter rental across the Klang Valley — Selangor, Petaling Jaya, Shah Alam, Subang and beyond. Delivered, set up and operated for conferences, launches and productions.',
    heroBadge: 'Serving the Klang Valley',
    introEyebrow: 'Who we are',
    introHeading: 'Teleprompter rental across Selangor & the Klang Valley',
    introBody:
      'From Petaling Jaya to Shah Alam and Subang to Cyberjaya, TelePrompter.my delivers and operates professional teleprompter setups throughout the Klang Valley. We serve hotel ballrooms, convention centres, corporate offices and studios with full installation and on-site operation included.',
    areasCovered: ['Petaling Jaya', 'Shah Alam', 'Subang Jaya', 'Cyberjaya', 'Putrajaya', 'Damansara', 'Ampang', 'Cheras'],
    ...sharedWhy,
    whyHeading: 'Built for flawless delivery, end to end',
    whySub: 'Every Klang Valley rental is handled by our crew from setup to teardown.',
    includedHeading: 'What is included in a standard Klang Valley rental',
    stepsHeading: 'How it works',
    faqs: [
      {
        q: 'Do you cover the whole Klang Valley?',
        a: 'Yes. We cover Petaling Jaya, Shah Alam, Subang Jaya, Cyberjaya, Damansara and the wider Klang Valley. Delivery within the main zone is free.',
      },
      {
        q: 'Is delivery included in the Klang Valley?',
        a: 'Transport is free of charge within our standard Klang Valley zone. Venues further out are quoted by mileage.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning an event in the Klang Valley?',
    ctaSub: 'Tell us your date and venue — we will confirm availability and a quote within one business day.',
    metaTitle: 'Teleprompter Rental in the Klang Valley | TelePrompter.my',
    metaDescription:
      'Rent professional teleprompters across the Klang Valley — PJ, Shah Alam, Subang, Cyberjaya and beyond. Full setup and operation included. Transport FOC within the local zone.',
  },
  {
    slug: 'putrajaya',
    name: 'Putrajaya',
    region: 'Klang Valley',
    heroH1: 'Teleprompter Rental in Putrajaya',
    heroSub:
      'Rent professional teleprompters for government, GLC and corporate events in Putrajaya. Delivered, set up and operated by our crew for conferences, summits and formal addresses.',
    heroBadge: 'Serving Putrajaya & Cyberjaya',
    introEyebrow: 'Who we are',
    introHeading: 'Teleprompter rental for Putrajaya events',
    introBody:
      'Putrajaya hosts some of the country\'s most formal addresses and government conferences. TelePrompter.my provides presidential and stage teleprompters for ministry events, GLC functions and summits in Putrajaya — with discreet installation and experienced operators who keep speakers composed and on script.',
    areasCovered: ['Presint 1–6', 'IOI City Putrajaya', 'Marriott Putrajaya', 'Cyberjaya', 'Pullman Putrajaya'],
    ...sharedWhy,
    whyHeading: 'Built for flawless delivery, end to end',
    whySub: 'From presidential setups to on-camera monitors — every Putrajaya rental is handled start to finish.',
    includedHeading: 'What is included in a standard Putrajaya rental',
    stepsHeading: 'How it works',
    faqs: [
      {
        q: 'Do you provide teleprompters for government events in Putrajaya?',
        a: 'Yes. We regularly supply presidential and stage teleprompters for ministry, GLC and government-linked events in Putrajaya, with operators experienced in formal protocol settings.',
      },
      {
        q: 'Do you deliver to Putrajaya venues?',
        a: 'Yes. We deliver to all major Putrajaya venues including convention centres and hotels. Delivery within Putrajaya and Cyberjaya is free of charge.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning an event in Putrajaya?',
    ctaSub: 'Tell us your date and venue — we will confirm availability and a quote within one business day.',
    metaTitle: 'Teleprompter Rental in Putrajaya | TelePrompter.my',
    metaDescription:
      'Rent professional teleprompters for government, GLC and corporate events in Putrajaya. Presidential and stage setups — delivered, set up and operated. Transport FOC within Putrajaya.',
  },
  {
    slug: 'penang',
    name: 'Penang',
    region: 'Northern',
    heroH1: 'Teleprompter Rental in Penang',
    heroSub:
      'Professional teleprompter rental in Penang for conferences at SPICE, gala dinners at beach resorts and studio productions. Delivered, set up and operated by our crew.',
    heroBadge: 'Serving Penang Island & Seberang Perai',
    introEyebrow: 'Who we are',
    introHeading: 'Teleprompter rental for Penang events',
    introBody:
      'From George Town to Batu Ferringhi and Seberang Perai, TelePrompter.my brings professional teleprompter rental to Penang. We serve conferences at SPICE Arena, gala dinners at beachfront resorts and corporate productions across the island — with full delivery, installation and on-site operation.',
    areasCovered: ['George Town', 'Bayan Lepas', 'Batu Ferringhi', 'SPICE Arena', 'Seberang Perai', 'Queensbay'],
    ...sharedWhy,
    whyHeading: 'Built for flawless delivery, end to end',
    whySub: 'Every Penang rental is handled by our crew from delivery on the island through to teardown.',
    includedHeading: 'What is included in a standard Penang rental',
    stepsHeading: 'How it works',
    faqs: [
      {
        q: 'Do you deliver teleprompters to Penang?',
        a: 'Yes. We deliver to Penang Island and Seberang Perai, including SPICE Arena and major beachfront resort venues. Transport to Penang is quoted by mileage from the Klang Valley.',
      },
      {
        q: 'Is accommodation required for Penang events?',
        a: 'For multi-day or early-morning Penang events, crew accommodation may be added to the quote. We will advise this when you share your event schedule.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning an event in Penang?',
    ctaSub: 'Tell us your date and venue — we will confirm availability, transport and a quote within one business day.',
    metaTitle: 'Teleprompter Rental in Penang | TelePrompter.my',
    metaDescription:
      'Rent professional teleprompters in Penang for conferences at SPICE, gala dinners and studio productions. Presidential, Stage TV, Monitor and iPad — delivered and operated.',
  },
  {
    slug: 'johor',
    name: 'Johor',
    region: 'Southern',
    heroH1: 'Teleprompter Rental in Johor Bahru',
    heroSub:
      'Professional teleprompter rental in Johor for corporate conferences, property launches and productions. Delivered, set up and operated by our crew across JB and Iskandar Puteri.',
    heroBadge: 'Serving Johor Bahru & Iskandar Malaysia',
    introEyebrow: 'Who we are',
    introHeading: 'Teleprompter rental for Johor events',
    introBody:
      'TelePrompter.my provides professional teleprompter rental across Johor — from Johor Bahru to Iskandar Puteri and Skudai. We serve hotel conferences, property launches and corporate productions with full delivery, installation and live operation included.',
    areasCovered: ['Johor Bahru', 'Iskandar Puteri', 'Skudai', 'Pasir Gudang', 'Medini', 'Puteri Harbour'],
    ...sharedWhy,
    whyHeading: 'Built for flawless delivery, end to end',
    whySub: 'Every Johor rental is handled by our crew — setup, operation and teardown all included.',
    includedHeading: 'What is included in a standard Johor rental',
    stepsHeading: 'How it works',
    faqs: [
      {
        q: 'Do you deliver teleprompters to Johor Bahru?',
        a: 'Yes. We deliver to Johor Bahru, Iskandar Puteri and the wider Johor region. Transport to Johor is quoted by mileage from the Klang Valley.',
      },
      {
        q: 'Do you cover events in Iskandar Malaysia?',
        a: 'Yes — we serve Medini, Puteri Harbour, EduCity and the wider Iskandar Malaysia corridor for conferences and launches.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning an event in Johor?',
    ctaSub: 'Tell us your date and venue — we will confirm availability, transport and a quote within one business day.',
    metaTitle: 'Teleprompter Rental in Johor Bahru | TelePrompter.my',
    metaDescription:
      'Rent professional teleprompters in Johor Bahru and Iskandar Malaysia for conferences, property launches and productions. Full delivery, setup and operation included.',
  },
];

export function getLocation(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug);
}
