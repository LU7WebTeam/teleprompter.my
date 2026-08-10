// ============================================================
// Event / occasion landing pages — content schema + data
// Each entry renders a page at /events/{slug}/ via
// src/pages/events/[slug].astro. The content fields here map
// 1:1 to the columns in docs/events-content.csv so the CSV
// is the single planning source — copy a row's cells into the
// matching field here to publish a new event page.
// ============================================================

export interface EventFAQ {
  q: string;
  a: string;
}

export interface RecommendedProduct {
  /** Must match a product slug in src/data/products.ts */
  slug: string;
  /** Why this teleprompter fits this use case */
  why: string;
  /** Primary vs secondary recommendation */
  primary?: boolean;
}

export interface EventPage {
  /** URL slug — page renders at /events/{slug}/ */
  slug: string;
  /** Display name, e.g. "Corporate Conferences" */
  name: string;
  /** Short tagline for cards / hub page */
  shortDesc: string;

  // --- Hero ---
  heroH1: string;
  heroSub: string;
  heroBadge: string;

  // --- Local intro ---
  introEyebrow: string;
  introHeading: string;
  introBody: string;
  /** Typical scenarios within this use case */
  scenarios: string[];

  // --- Recommended teleprompters ---
  recommendedEyebrow: string;
  recommendedHeading: string;
  recommendedSub: string;
  recommended: RecommendedProduct[];

  // --- Why choose (for this event type) ---
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
  faqs: EventFAQ[];

  // --- Final CTA ---
  ctaHeading: string;
  ctaSub: string;

  // --- SEO ---
  metaTitle: string;
  metaDescription: string;
}

// --- Shared, nationwide sections ------------------------------------------

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
  'We recommend the right teleprompter setup for your format',
  'We confirm availability and send your quote',
  'Our crew delivers, sets up and tests the rig',
  'An operator runs the prompter throughout your event',
];

const sharedFaqsTail: EventFAQ[] = [
  {
    q: 'How much lead time do you need?',
    a: 'We recommend booking at least 7 days ahead to secure your preferred setup and operator. For urgent or same-week events, contact us directly — we will always try to accommodate where equipment is available.',
  },
  {
    q: 'Is an operator included in the rental?',
    a: 'Yes. Every rental includes an experienced teleprompter operator who runs the script during your event, plus a crew member for setup and dismantling. You are never left to operate it yourself.',
  },
];

// --- Event entries --------------------------------------------------------

export const events: EventPage[] = [
  {
    slug: 'corporate-conferences',
    name: 'Corporate Conferences',
    shortDesc: 'Keynotes, AGMs, panel sessions and town halls.',
    heroH1: 'Teleprompters for Corporate Conferences',
    heroSub:
      'Keep your keynote speakers, panellists and hosts on script with professional teleprompter rental for corporate conferences, AGMs, town halls and investor days — delivered, set up and operated.',
    heroBadge: 'Conferences · AGMs · Town Halls',
    introEyebrow: 'Corporate conferences',
    introHeading: 'Speakers stay on script, events stay on time',
    introBody:
      'Corporate conferences demand precision — your keynote speakers need to hold eye contact with the audience while delivering a tight, rehearsed script. Our teleprompter setups let executives, guest speakers and MCs read naturally without printed notes or glancing at confidence monitors. We handle delivery, installation, live operation and dismantling so your AV team can focus on the rest of the show.',
    scenarios: ['Keynote addresses', 'AGMs & shareholder meetings', 'Town halls', 'Panel discussions', 'Investor & analyst days', 'Industry summits'],
    recommendedEyebrow: 'Recommended setups',
    recommendedHeading: 'The right teleprompter for your conference format',
    recommendedSub: 'Most conferences use a combination — a stage prompter for the keynote and floor prompters for panellists and the MC.',
    recommended: [
      { slug: 'stage-tv-teleprompter', why: 'Discreet floor placements keep panellists and MCs on script without blocking sight lines.', primary: true },
      { slug: 'presidential-teleprompter', why: 'Glass-plate prompters at the podium for keynote speakers who need to hold eye contact with the audience.' },
      { slug: 'ipad-teleprompter', why: 'Lightweight units for breakout rooms, green-room rehearsal and secondary stages.' },
    ],
    whyEyebrow: 'Why choose us',
    whyHeading: 'Built for conference-grade delivery',
    whySub: 'From the keynote to the closing remarks, every prompter is operated by a crew that understands live event flow.',
    whyPoints: [
      { title: 'Dual prompter arrays', desc: 'We rig paired presidential or stage units so speakers can pan across the room without losing the script.' },
      { title: 'Live operator included', desc: "Our operator follows the speech in real time, adjusting scroll speed to each speaker's pace." },
      { title: 'Seamless AV integration', desc: 'We coordinate with your AV team on cabling, HDMI routing and stage placement — no friction.' },
      { title: 'Backup on standby', desc: 'Redundant laptops and cabling are prepped so a hardware fault never stalls your keynote.' },
    ],
    includedHeading: 'What is included in a conference teleprompter rental',
    includedItems: sharedIncludedItems,
    stepsHeading: 'How it works',
    steps: sharedSteps,
    faqs: [
      {
        q: 'Can you handle multi-day conferences?',
        a: 'Yes. We support multi-day conferences with the same operator throughout, and we can reconfigure the setup between days (e.g. keynote on day one, panel format on day two). Booking is per day, with multi-day rates available.',
      },
      {
        q: 'Do you integrate with our AV team and stage setup?',
        a: 'Absolutely. We work alongside your AV production team on stage placement, HDMI routing and cable management. Our operator coordinates with your show caller so script changes are pushed live without disruption.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning a corporate conference?',
    ctaSub: 'Tell us your event format and venue — we will recommend the right teleprompter combination and send a quote within one business day.',
    metaTitle: 'Teleprompter Rental for Corporate Conferences | TelePrompter.my',
    metaDescription:
      'Rent professional teleprompters for corporate conferences, AGMs, town halls and investor days. Stage TV, Presidential and iPad setups — delivered, set up and operated. Transport FOC within KL.',
  },
  {
    slug: 'product-launches',
    name: 'Product Launches',
    shortDesc: 'Brand unveilings, media events and dealer presentations.',
    heroH1: 'Teleprompters for Product Launches',
    heroSub:
      'Deliver a flawless launch presentation with professional teleprompter rental for product unveilings, media events and dealer shows — stage and on-camera setups delivered, set up and operated.',
    heroBadge: 'Unveilings · Media Events · Dealer Shows',
    introEyebrow: 'Product launches',
    introHeading: 'Every word matters on launch day',
    introBody:
      'A product launch is a one-shot moment — your executives need to hit every key message, every spec and every punchline without hesitation. Our teleprompter setups give your speakers confidence on stage, while camera-mounted units feed clean reads for the broadcast capture and media wall. We deliver, rig and operate so your team can focus on the reveal.',
    scenarios: ['Brand unveilings', 'Media & press launches', 'Dealer & distributor shows', 'Tech & gadget reveals', 'Automotive launches', 'Flagship store openings'],
    recommendedEyebrow: 'Recommended setups',
    recommendedHeading: 'Teleprompters that match your launch format',
    recommendedSub: 'Most launches pair a stage prompter for the live audience with a camera-mounted unit for the broadcast feed.',
    recommended: [
      { slug: 'presidential-teleprompter', why: 'Glass-plate prompters at the podium so your CEO holds eye contact with the audience during the headline address.', primary: true },
      { slug: 'monitor-teleprompter', why: 'Camera-mounted unit feeds a clean, invisible read straight down the lens for the broadcast capture and media wall.' },
      { slug: 'stage-tv-teleprompter', why: 'Floor placements keep co-presenters and MCs on script during demos and segment transitions.' },
    ],
    whyEyebrow: 'Why choose us',
    whyHeading: 'Built for launch-day pressure',
    whySub: 'One take, no retakes — our crew makes sure your speakers never miss a beat.',
    whyPoints: [
      { title: 'Stage + camera pairing', desc: 'We rig both stage prompters and camera-mounted units so the live read and the broadcast feed are perfectly synced.' },
      { title: 'Script changes on the fly', desc: 'Our operator pushes last-minute edits to the prompter in real time — no reprints, no panic.' },
      { title: 'Discreet on-camera setup', desc: 'Our camera-mounted prompters sit invisibly in front of the lens, so talent reads naturally without the audience noticing.' },
      { title: 'Full rehearsal support', desc: 'We run a full tech rehearsal before doors open so your speakers are comfortable with the scroll speed and placement.' },
    ],
    includedHeading: 'What is included in a product launch teleprompter rental',
    includedItems: sharedIncludedItems,
    stepsHeading: 'How it works',
    steps: sharedSteps,
    faqs: [
      {
        q: 'Can you handle simultaneous stage and camera prompters?',
        a: 'Yes — this is the most common launch setup. We rig presidential or stage units for the live audience and a camera-mounted monitor prompter for the broadcast feed, all operated from one control laptop with synced scripts.',
      },
      {
        q: 'Can the script be updated during the event?',
        a: 'Yes. Our operator can push edits to the prompter in real time. Share your updated script and we have it loaded within minutes — ideal for late spec changes or ad-libbed announcements.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning a product launch?',
    ctaSub: 'Tell us your launch format and venue — we will recommend the right teleprompter combination and send a quote within one business day.',
    metaTitle: 'Teleprompter Rental for Product Launches | TelePrompter.my',
    metaDescription:
      'Rent professional teleprompters for product launches, brand unveilings and media events. Presidential, Stage TV and camera-mounted setups — delivered, set up and operated.',
  },
  {
    slug: 'gala-dinners-awards',
    name: 'Gala Dinners & Awards',
    shortDesc: 'Award ceremonies, charity galas and annual dinners.',
    heroH1: 'Teleprompters for Gala Dinners & Awards Nights',
    heroSub:
      'Keep your hosts and award presenters on script with professional teleprompter rental for gala dinners, award ceremonies and annual corporate dinners — delivered, set up and operated.',
    heroBadge: 'Awards · Galas · Annual Dinners',
    introEyebrow: 'Gala dinners & awards',
    introHeading: 'Smooth hosts, confident winners, seamless segments',
    introBody:
      'Gala dinners and award nights live or die by pacing — your MC needs to move between speeches, winner announcements and sponsor reads without fumbling notes. Our stage and floor teleprompters keep the host on script while a discreet prompter helps award winners deliver their acceptance with confidence. We deliver, rig and operate throughout the evening.',
    scenarios: ['Award ceremonies', 'Charity & foundation galas', 'Annual corporate dinners', 'Appreciation & recognition nights', 'Beauty pageants', 'Industry awards'],
    recommendedEyebrow: 'Recommended setups',
    recommendedHeading: 'Teleprompters for every part of your gala',
    recommendedSub: 'A stage prompter for the MC, floor units for presenters, and a backup for winner reads.',
    recommended: [
      { slug: 'stage-tv-teleprompter', why: 'Floor-mounted units keep the MC and presenters on script without bulky equipment on a dressed stage.', primary: true },
      { slug: 'presidential-teleprompter', why: 'Glass-plate units at the podium for formal speeches, sponsor reads and the opening address.' },
      { slug: 'ipad-teleprompter', why: 'Handheld units backstage so award winners can rehearse quick thank-yous before going on.' },
    ],
    whyEyebrow: 'Why choose us',
    whyHeading: 'Built for live event flow',
    whySub: 'Our operator follows the run-of-show so script changes, ad-libs and winner reactions never derail the night.',
    whyPoints: [
      { title: 'Run-of-show synced', desc: 'Our operator works from your run sheet, queuing the right script for each segment as the evening flows.' },
      { title: 'Discreet floor placement', desc: 'Stage TVs sit low and angled, keeping the prompter invisible to guests and cameras.' },
      { title: 'Winner support', desc: 'We prep a simple "thank you" scroll backstage so unscripted winners have a safety net.' },
      { title: 'sponsor reads handled', desc: 'Sponsor logos and scripts are loaded as separate segments, cued at the right moment.' },
    ],
    includedHeading: 'What is included in a gala dinner teleprompter rental',
    includedItems: sharedIncludedItems,
    stepsHeading: 'How it works',
    steps: sharedSteps,
    faqs: [
      {
        q: 'Can the operator handle script changes between award categories?',
        a: 'Yes. Our operator works from your run-of-show and has each segment loaded as a separate script block. When a category changes or a winner is announced, we cue the next script instantly — no delays for the audience.',
      },
      {
        q: 'Is the prompter visible to the audience or cameras?',
        a: 'No. Our stage TV prompters sit low and angled toward the speaker, so they are invisible to seated guests and broadcast cameras. Presidential glass-plate units are also discreet, reflecting the script only toward the speaker.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning a gala dinner or awards night?',
    ctaSub: 'Tell us your event format and venue — we will recommend the right teleprompter combination and send a quote within one business day.',
    metaTitle: 'Teleprompter Rental for Gala Dinners & Awards | TelePrompter.my',
    metaDescription:
      'Rent professional teleprompters for gala dinners, award ceremonies and annual corporate dinners. Stage TV, Presidential and iPad setups — delivered, set up and operated.',
  },
  {
    slug: 'broadcast-video-production',
    name: 'Broadcast & Video Production',
    shortDesc: 'Studio recordings, corporate videos, interviews and live feeds.',
    heroH1: 'Teleprompters for Broadcast & Video Production',
    heroSub:
      'Rent camera-mounted teleprompters for studio recordings, corporate videos, interviews and live IMAG feeds — delivered, set up and operated for production teams across Malaysia.',
    heroBadge: 'Studio · Corporate Video · Interviews · IMAG',
    introEyebrow: 'Broadcast & video production',
    introHeading: 'Invisible reads, natural delivery, clean takes',
    introBody:
      'When the camera is rolling, your talent needs to look straight down the lens — not at notes or a off-camera monitor. Our camera-mounted teleprompters reflect the script invisibly through the beam-splitter glass so presenters read naturally while maintaining direct eye contact with the viewer. We deliver, rig and operate for studio sessions, location shoots and live IMAG feeds.',
    scenarios: ['Studio recordings', 'Corporate videos', 'Executive interviews', 'Training & e-learning content', 'Live IMAG feeds', 'Webinars & virtual events'],
    recommendedEyebrow: 'Recommended setups',
    recommendedHeading: 'Teleprompters matched to your production',
    recommendedSub: 'Camera-mounted units for on-lens reads, with compact options for field and remote shoots.',
    recommended: [
      { slug: 'monitor-teleprompter', why: '22" camera-mounted unit delivers a clean, invisible read straight down the lens for studio and corporate video.', primary: true },
      { slug: 'ipad-teleprompter', why: 'Lightweight and portable — ideal for location shoots, interviews on the move and tight spaces where a full rig will not fit.' },
    ],
    whyEyebrow: 'Why choose us',
    whyHeading: 'Built for production teams',
    whySub: 'We integrate with your camera op, DOP and director so the prompter never interrupts the shot.',
    whyPoints: [
      { title: 'Invisible on-camera', desc: 'Our beam-splitter glass reflects the script only toward the talent — the camera sees straight through with no visible text.' },
      { title: 'Works with your rig', desc: 'We mount to your tripod, jib or studio camera using adjustable trays — no proprietary hardware required.' },
      { title: 'Scroll speed control', desc: "Our operator follows the talent's pace in real time, or hands off remote control to your director." },
      { title: 'Take after take', desc: 'Built for long studio sessions — stable rigs, redundant laptops and quick script reloading between takes.' },
    ],
    includedHeading: 'What is included in a production teleprompter rental',
    includedItems: sharedIncludedItems,
    stepsHeading: 'How it works',
    steps: sharedSteps,
    faqs: [
      {
        q: 'Will the teleprompter work with our camera and tripod?',
        a: 'Yes. Our 22" Monitor Teleprompter uses an adjustable mounting tray that fits most professional tripods and camera rigs. For specialised setups (jibs, robotics, large broadcast cameras), share your rig details and we will confirm compatibility before the shoot.',
      },
      {
        q: 'Can your operator work with our director and DOP?',
        a: 'Absolutely. Our operator takes direction on scroll speed, scripts and cues from your director. For remote or multi-cam shoots, we can also hand off a wireless remote so your director controls the prompter directly.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning a shoot or broadcast?',
    ctaSub: 'Tell us your production format and location — we will recommend the right teleprompter and send a quote within one business day.',
    metaTitle: 'Teleprompter Rental for Broadcast & Video Production | TelePrompter.my',
    metaDescription:
      'Rent camera-mounted teleprompters for studio recordings, corporate videos, interviews and live IMAG feeds. Monitor and iPad setups — delivered, set up and operated.',
  },
  {
    slug: 'government-glc-events',
    name: 'Government & GLC Events',
    shortDesc: 'Ministry addresses, summits, official functions and press conferences.',
    heroH1: 'Teleprompters for Government & GLC Events',
    heroSub:
      'Professional teleprompter rental for ministry addresses, government summits, GLC functions and official press conferences — discreetly delivered, set up and operated by protocol-experienced crew.',
    heroBadge: 'Ministry · GLC · Summits · Press Conferences',
    introEyebrow: 'Government & GLC events',
    introHeading: 'Protocol-ready delivery for formal addresses',
    introBody:
      'Government and GLC events carry an expectation of composure and precision — your speakers need to deliver formal addresses, policy speeches and ministerial statements without hesitation or notes in hand. Our presidential teleprompters place the script invisibly on glass plates at the podium, so VIPs hold eye contact with the audience while reading naturally. Our crew is experienced in protocol settings and works discreetly around security and ceremonial requirements.',
    scenarios: ['Ministerial addresses', 'Government summits & forums', 'GLC annual general meetings', 'Official press conferences', 'Policy announcements', 'Diplomatic & state functions'],
    recommendedEyebrow: 'Recommended setups',
    recommendedHeading: 'Teleprompters for formal and protocol settings',
    recommendedSub: 'Presidential glass-plate units for podium addresses, with stage TVs for conference and panel formats.',
    recommended: [
      { slug: 'presidential-teleprompter', why: 'The standard for formal addresses — dual glass-plate prompters let speakers pan across the audience while reading the full script.', primary: true },
      { slug: 'stage-tv-teleprompter', why: 'Floor units for panel sessions, forums and multi-speaker segments within a government conference.' },
    ],
    whyEyebrow: 'Why choose us',
    whyHeading: 'Built for protocol-sensitive delivery',
    whySub: 'Our crew understands the tempo, security and ceremonial expectations of government and GLC events.',
    whyPoints: [
      { title: 'Protocol-experienced crew', desc: 'Our operators have worked ministry, GLC and state functions — we follow protocol cues and work around security without disruption.' },
      { title: 'Dual presidential arrays', desc: 'Paired glass-plate prompters let a speaker pan naturally across the room while staying on script throughout.' },
      { title: 'Discreet rigging', desc: 'We rig and test before the venue opens, and our equipment is dressed to match the stage — cables hidden, units positioned for clean sight lines.' },
      { title: 'Script confidentiality', desc: 'We handle sensitive speech text with care — scripts are loaded on a dedicated laptop and cleared after the event.' },
    ],
    includedHeading: 'What is included in a government event teleprompter rental',
    includedItems: sharedIncludedItems,
    stepsHeading: 'How it works',
    steps: sharedSteps,
    faqs: [
      {
        q: 'Can you handle protocol and security requirements?',
        a: 'Yes. Our crew has worked ministry, GLC and state functions and understands protocol cues, security sweeps and ceremonial timing. We rig and test before the venue opens, and our operator follows the run sheet and protocol officer throughout.',
      },
      {
        q: 'How do you handle confidential speech text?',
        a: 'Scripts are loaded onto a dedicated laptop that stays with our operator throughout the event. We do not email or store speech text unless instructed. After the event, script files are cleared from the device.',
      },
      ...sharedFaqsTail,
    ],
    ctaHeading: 'Planning a government or GLC event?',
    ctaSub: 'Tell us your event format and venue — we will recommend the right teleprompter setup and send a quote within one business day.',
    metaTitle: 'Teleprompter Rental for Government & GLC Events | TelePrompter.my',
    metaDescription:
      'Rent professional teleprompters for ministry addresses, government summits, GLC functions and press conferences. Presidential and Stage TV setups — delivered, set up and operated.',
  },
];

export function getEvent(slug: string): EventPage | undefined {
  return events.find((e) => e.slug === slug);
}
