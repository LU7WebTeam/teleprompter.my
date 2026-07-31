# Home Page Revamp Plan — Teleprompter.my

## Intent summary

Revamp the **home page only** of teleprompter.my to match the look & feel of the Frisk "AI Startup" (home-17) reference — a dark, premium, image-forward, scroll-rich layout with large typography and marquee motion — while **keeping the blue brand colour**. All existing home-page content (products, pricing, gallery, why-choose, contact, terms, enquiry form) is preserved and re-presented in the new design language.

## Source sites

- **Current site:** https://teleprompter.my/ — teleprompter rental across Malaysia, run by Video Production KL Sdn Bhd. Blue brand colour. Sections: hero slider, why-choose (5 features), gallery (8 images), our teleprompters (4 product cards w/ specs + RM pricing, FOC Klang Valley transport), contact (address/email/WhatsApp), service terms, enquiry form, footer, floating WhatsApp button.
- **Reference:** https://html.themegenix.com/frisk/home-17.html — dark, modern AI-startup theme. Hallmarks: large hero headline + image, scrolling partner/logo marquee, scrolling services marquee, **numbered feature cards (01–04)**, image+text about block, **portfolio image grid**, testimonial, client-logo marquee, blog/insights accordion, dark footer. Big kinetic typography, generous space, motion.

---

## Audience & offer

- **Audience:** Event organisers, corporate comms teams, broadcasters, content creators, and production crews in Malaysia who need reliable teleprompter rental.
- **Offer:** Rent professional teleprompters (Presidential, Stage TV, 22" Monitor, iPad Ultralight) anywhere in Malaysia, fully operated, FOC transport within Klang Valley.
- **Primary action:** Book / request a quote (WhatsApp + form).
- **Secondary action:** Browse the four teleprompter packages.

---

## CTA logic

- **Primary CTA:** "Book Now" → enquiry form (#book) — appears in header, hero, every product card, closing section.
- **Secondary CTA:** "View Teleprompters" → products section.
- **Persistent:** Floating WhatsApp button (kept — strong existing conversion path).
- **Tertiary:** "Read More" on each product → detail sub-pages (existing links preserved).

---

## Visual system (brand)

- **Brand colour:** Blue (kept). Existing logo `Blue-BG-Tele.png` is blue.
- **Reference mood:** Dark, premium, high-contrast, image-forward. The reference itself is near-black.
- **Locked direction (Q1 resolved):** Close to the reference — adopt its dark, premium canvas and use the brand **blue as the accent** (buttons, highlights, numbering, active states, glow). This honours "keep blue" while matching the reference mood.
- **Tokens (to lock in Design mode):**
  - `--bg`: deep near-black / dark charcoal
  - `--surface`: slightly lifted dark panel (for cards, form, footer)
  - `--fg`: near-white
  - `--muted`: low-opacity white / dim grey
  - `--border`: low-opacity white
  - `--accent`: brand blue (extract exact hex from logo in Design mode)
  - Secondary domain accent: a single status colour for rates & tags (decide in Design mode — lean cool, not a competing hue)
- **Typography:** Large display headline face (≠ body) for hero + section headers, mirroring the reference's confident type scale. Body in a clean sans. Pull final stacks from the chosen direction in Design mode.
- **Motion:** Marquees (logos), scroll-reveal on image grids, number counters on feature cards — all borrowed directly from the reference vocabulary.

---

## Page hierarchy — section by section

Each section lists: **goal · content source · reference treatment · notes**.

### 1. Header / Nav (sticky)
- **Goal:** Wayfinding + always-available Book Now.
- **Content:** Logo · Products dropdown (ON CAMERA: iPad Teleprompter, Monitor Teleprompter / ON STAGE: Presidential, Stage TV) · Gallery · Contact · **Book Now** button.
- **Reference treatment:** Clean sticky bar, logo left, minimal links, prominent pill/solid CTA right. Possibly an offcanvas/tray for the product menu on mobile.
- **Notes:** Keep exact product labels & links. Blue accent on CTA + active link.

### 2. Hero
- **Goal:** Instantly communicate "rent a professional teleprompter anywhere in Malaysia" with a strong visual.
- **Content:** Headline → **"Rent a Teleprompter Anywhere in Malaysia"**. Subcopy → current description ("Deliver your message with confidence… corporate events, live broadcasts, video shoots, and more."). CTAs → **View Teleprompters** + **Book Now**. Footnote → "Proudly managed by Video Production KL Sdn Bhd." Hero image → use one of the existing slider photos (Presidential / camera setup).
- **Reference treatment:** Oversized two/three-line display headline, image offset to one side or used as a layered element, two-button CTA row.
- **Notes (Q2 resolved — follow reference):** Replace the multi-slide carousel with a **single strong hero image**; the remaining slider photos flow into the gallery (§6) so no image is lost. Blue glow/accent on CTAs.

### 3. Logo marquee (NEW — inspired by reference)
- **Goal:** Trust band; kinetic motion that anchors the hero and echoes the reference's logo strip.
- **Q3 resolved — placeholder logo marquee.** Render a row of **clearly-labelled placeholder logos** in the marquee. Each slot shows a neutral monogram chip / generic "Client Logo" text element on a dark surface, visually identical in cadence to a real logo strip so the design reads as finished. These are placeholders, not real endorsements — swap-in slots remain obvious and easy for the user to replace with real client logos later.
- **Reference treatment:** Horizontal infinite marquee (two mirrored tracks for seamless loop), exactly like the reference's partner-logo strip.
- **Notes:** Mark each slot with a comment/attribute in the markup (e.g. `data-od-id="client-logo-slot-1"`) so they're trivially findable for replacement. Blue accent available for the marquee's focus/glow state, but otherwise neutral.

### 4. Why Choose — numbered feature cards
- **Goal:** Build trust with the 5 differentiators.
- **Content (5 features, kept verbatim):**
  1. Nationwide Coverage — "We bring our services to you, no matter where you are in Malaysia."
  2. Professional Equipment — "Crystal-clear displays and seamless functionality."
  3. Custom Solutions — "Tailored setups to fit your specific needs."
  4. Affordable Rates — "High-quality services that won't break the bank."
  5. Expert Support — "Our team ensures everything runs smoothly from setup to tear down."
- **Reference treatment:** Numbered cards (**01–05**) with icon, title, short copy — exactly like the reference's "Advanced Neural Features" grid (just adapted to 5 and teleprompter-themed).
- **Notes:** Keep the existing icon set if brand-correct, or replace with cleaner line icons consistent with the dark theme. Blue numbering + icon accents.

### 5. About / company block
- **Goal:** Establish credibility & the operator behind the service.
- **Content:** Lead image (teleprompter at a real event) + copy: "TelePrompter.my specializes in providing professional teleprompter rental services designed to ensure seamless delivery for speeches, presentations, and productions… reliable and user-friendly solutions tailored to meet the needs of events, broadcasts, and video shoots of any scale." + "Proudly managed by Video Production KL Sdn Bhd" link. CTA → **Learn More** (to videoproductionkl.com).
- **Reference treatment:** Image-left/text-right (or vice-versa) two-column band, large heading, restrained copy, single text link.
- **Notes:** Blue accent on the link + a subtle highlight.

### 6. Gallery / showcase grid ("portfolio")
- **Goal:** Prove the work with real event photography.
- **Content:** The 8 existing gallery images (Presidential setups, iPad setup, monitor in office, Stage TV, countdown screen, speaker in green batik, panel speaker, podium with dual teleprompters).
- **Reference treatment:** Responsive image grid (2-up on desktop, 1-up mobile) with hover reveal of a one-line caption + zoom, à la the reference's portfolio cards.
- **Notes:** Captions derived from existing alt text. Real photography is the strongest asset here — make these large and tactile.

### 7. Our Teleprompters — product cards (the conversion core)
- **Goal:** Present the 4 rental packages with specs + price + booking CTA.
- **Content (4 products, kept verbatim incl. pricing):**
  1. **Presidential Teleprompter** — RM 2,500/day. Specs: 2x TSP2-19, 2x 19" LCD, 2x stands, 2x beamsplitter mirrors, 1x 4-port HDMI splitter, 3x 25' HDMI cables, 1x laptop w/ software, 2x operators. Transport FOC Klang Valley.
  2. **Stage TV Teleprompter** — RM 2,100/day. Specs: 2x 43" stage TV, bracket mount, laptop, 20m HDMI, splitter, operator, crew. Transport FOC Klang Valley.
  3. **22" Monitor Teleprompter** — RM 2,000/day. Specs: 22" monitor, beamsplitter, frame+hood, mounting tray, monitor, 20m HDMI, heavy-duty tripod, laptop, operator. Transport FOC Klang Valley.
  4. **Ultralight iPad Teleprompter** — RM 1,200/day. Specs: teleprompter, iPad w/ app, beamsplitter, frame+hood, mounting tray, tripod, operator. Transport FOC Klang Valley.
- **Reference treatment:** Large image-led cards in a 2×2 (or 2×1 stacked) grid — image header, product name as display heading, spec list, prominent RM price, two buttons (**Book Now** primary / **Read More** secondary). Mirror the reference portfolio card weight.
- **Notes:** Price is the key info — give it real visual weight (large numeral, monospace or bold display). Blue on the primary "Book Now" button. Keep all existing detail-page links.

### 8. Service terms & conditions
- **Goal:** Surface booking/payment terms so users know the deal before enquiring.
- **Content (kept verbatim):** Payment terms (70% deposit 12h before / 30% before event), weekend/public-holiday 20% surcharge, out-of-Klang-Valley transport & accommodation costs, no refunds, damage costs, availability advice, rehearsal +50% charge. Plus: TelePrompter.my right to withhold service for non-payment.
- **Reference treatment:** A restrained, well-typed band — clean numbered list, possibly within a darker surface card. Not the visual focus, but scannable.
- **Notes:** Mark deposit % and surcharge % with the blue accent for scannability.

### 9. Contact + Enquiry form
- **Goal:** Capture booking enquiries.
- **Content:** Address (West Wing 1st Floor, Bangunan ECM Libra, 8, Jalan Damansara Endah, 50490 Kuala Lumpur, Malaysia) · Email · WhatsApp "+6011-3307 8724 (WhatsApp preferred)" · Enquiry form fields.
- **Reference treatment:** Two-column — contact details left (with WhatsApp as a highlighted chip/button), enquiry form right (name, contact, event details, message). Form on a dark surface card with blue submit button.
- **Notes:** Keep the WhatsApp-preferred emphasis; consider a dedicated WhatsApp pill button alongside the form submit. **Form fields locked (Q4):** Name · Email/Phone · Event Date · Product of interest · Message. "Product of interest" as a select with the 4 packages as options. Blue submit button.

### 10. Footer
- **Goal:** Brand summary, contact, legal, final quote CTA.
- **Content:** Logo + tagline ("professional teleprompter rental… reliable and user-friendly solutions…"). Address · Contact us (email, WhatsApp, mobile). Footer links: Terms and Services, Privacy Policy. **"Get a Quote"** call-out. Copyright "© 2026 TelePrompter.my by Video Production KL Sdn Bhd | All Rights Reserved."
- **Reference treatment:** Dark footer, logo, concise columns, a clear final CTA ("Get a Quote"), social/contact row.
- **Notes (Q5 resolved):** No social media for now — omit the social row entirely. Blue on "Get a Quote".

### 11. Floating WhatsApp button (persistent)
- **Goal:** One-tap WhatsApp enquiry — keep this strong conversion element.
- **Reference treatment:** Fixed bottom-corner pill/FAB with the WhatsApp icon, blue brand treatment.
- **Notes:** Preserve the existing prefilled WhatsApp message text.

---

## Proof / media needs

- **Real photography:** Reuse the existing gallery + product + slider photos (already on the CDN). These are the hero asset — pull into the project, reference by relative path, never hot-link.
- **Logo:** `Blue-BG-Tele.png` — extract the exact blue hex in Design mode to lock the accent token.
- **Icons:** A clean line/solid icon set consistent with the dark theme for the 5 why-choose cards.
- **Placeholder logos (Q3 resolved):** Use clearly-labelled placeholder logo slots in the marquee — neutral monogram/chip shapes the user will swap for real client logos later. Never invented brand names.

---

## Content model (data to carry into Design mode)

```
nav:
  logo: Blue-BG-Tele.png
  products:
    on_camera: [iPad Teleprompter, Monitor Teleprompter]
    on_stage: [Presidential Teleprompter, Stage TV Teleprompter]
  links: [Gallery(#gallery), Contact(#contact-us)]
  cta: Book Now -> #book

products:
  - name: Presidential Teleprompter
    price: 2500  unit: /day  currency: RM
    transport: FOC anywhere in Klang Valley
    specs: [2x TSP2-19, 2x 19" LCD, 2x 6' stands, 2x beamsplitter mirrors, 1x 4-port HDMI splitter, 3x 25' HDMI cables, 1x laptop, 2x operators]
    detail_link: /presidential-teleprompter/
  - name: Stage TV Teleprompter
    price: 2100  ...
  - name: 22" Monitor Teleprompter
    price: 2000  ...
  - name: Ultralight iPad Teleprompter
    price: 1200  ...

gallery: 8 images (reuse CDN assets, copy locally)
contact: address, email, whatsapp(+6011-3307 8724), mobile
terms: payment(70/30), surcharge(20% weekend/holiday), transport, no-refund, damage, availability, rehearsal(+50%)
```

---

## Responsive considerations

- **Desktop:** Full-width marquee, 4–5 across feature grid, 2×2 product grid, 2-up gallery.
- **Tablet:** 2-across features, stacked product cards, 2-up gallery.
- **Mobile:** Single-column everything, hamburger nav, hero image below headline, blue sticky "Book Now" possibly in a bottom bar. No horizontal scroll. Touch targets ≥ 44px.

---

## Acceptance checks (for Design mode)

- [ ] Blue brand colour present as the accent throughout; no competing palette.
- [ ] Reference's dark, premium, motion-forward feeling reproduced (marquee, numbered cards, image grid, large type).
- [ ] All 4 products have correct RM price + full spec list + FOC transport line + Book Now + Read More.
- [ ] All 8 gallery images render with captions.
- [ ] All 5 why-choose features present, numbered.
- [ ] Contact details exact; WhatsApp number prefilled message preserved.
- [ ] Terms section accurate & scannable; % values emphasised.
- [ ] Floating WhatsApp button works on mobile + desktop.
- [ ] No fabricated stats / testimonials / client logos (placeholders clearly labelled if user opts in).
- [ ] Responsive: no horizontal scroll on mobile; ≥44px touch targets.

---

## Resolved decisions (confirmed by user)

- **Q1 — Theme direction:** ✅ Close to reference — dark premium canvas, brand blue as accent.
- **Q2 — Hero:** ✅ Follow reference — single strong hero image; remaining slider photos move into gallery.
- **Q3 — Trust elements:** ✅ Add a **placeholder logo marquee** (clearly-labelled swap-in slots, not invented brands).
- **Q4 — Enquiry form fields:** ✅ Name · Email/Phone · Event Date · Product of interest (select) · Message.
- **Q5 — Social links:** ✅ Nothing for now — omit social row.
- **Q6 — Scope:** ✅ Home page only. Detail sub-pages keep existing design for now.

**Additional constraint (Q6):** The production site will be **built with Astro JS**; subsequent pages will be built in **opencode** (the code agent). See the Astro port section below for the component/file structure the Open Design build should anticipate.

---

## Astro JS — port structure (for the opencode build)

The user will build the production site in **Astro JS**; the detailed sub-pages will be built in **opencode**. The Open Design build still ships a **single self-contained HTML artifact** (so it renders in the preview), but it is structured to port cleanly to Astro. Concretely:

### Design-mode obligations (what the HTML must do)
- **One self-contained HTML file** — all CSS/JS inline or via CDN; no build step needed to preview.
- **Semantic component boundaries** — each section carries a `data-od-id` (e.g. `section-hero`, `product-card-presidential`, `client-logo-marquee`, `enquiry-form`) so an opencode agent can lift each block into an Astro component with no guessing.
- **Self-documenting data** — the 4 products and 5 why-choose features sit in clearly-marked JS data arrays / a `<!-- DATA -->` block, so they become Astro frontmatter / a shared `data/products.ts` trivially.
- **No runtime-only magic** the Astro build can't reproduce statically (no scrollIntoView; marquees via CSS animation + minimal vanilla JS).
- **Asset notes** — images referenced by relative path under `assets/`, ready to drop into Astro's `src/assets` / `public/`.

### Proposed Astro project layout (handoff target — not built here)
```
src/
  layouts/
    BaseLayout.astro        # <html>, <head>, global tokens, nav slot, footer slot, floating WhatsApp
  components/
    Header.astro            # sticky nav + Book Now CTA
    Hero.astro              # single hero image + headline + CTAs
    LogoMarquee.astro       # placeholder logo slots (Q3)
    WhyChoose.astro         # numbered 01–05 feature cards
    About.astro             # company / Video Production KL block
    Gallery.astro           # 8-image responsive grid
    ProductCard.astro       # reusable card: image, name, specs, RM price, Book Now / Read More
    Terms.astro             # service terms band
    Contact.astro           # contact details + enquiry form
    Footer.astro            # brand summary, contact, Get a Quote
    WhatsAppFab.astro       # floating button
  data/
    products.ts             # 4 teleprompter packages (name, price, specs, links)
    features.ts             # 5 why-choose items
    site.ts                 # contact info, address, WhatsApp number/message, nav links
  styles/
    tokens.css             # the 6 OKLch tokens + font stacks (single source of truth)
  pages/
    index.astro             # home — composes the components above
    # subsequent detail pages (Presidential, Stage TV, Monitor, iPad) built later in opencode
```

### What this means for Design mode
- I structure the single HTML so each of the 11 sections maps 1-to-1 to an Astro component above.
- The brand tokens (`--bg`, `--surface`, `--fg`, `--muted`, `--border`, `--accent`, font stacks) are emitted once at `:root` in the HTML — they become `tokens.css` verbatim.
- The product + feature data is kept in a single commented JS object at the top of the file so it documents the shape `products.ts` / `features.ts` should take.
- Astro-specific concerns I cannot validate inside Open Design (islands, content collections, `astro.config`) are **out of scope here** and the opencode agent's job — but the plan names them so nothing is missed.

### Open question for the Astro handoff (not blocking Design mode)
- **Q7 — Form handling:** The enquiry form needs a backend. For Astro, options are an Astro server endpoint (SSR), a form service (Netlify/Getform), or firing a WhatsApp prefilled link on submit. Decide before/in the opencode build; Design mode will render a standard form with a `data-od-id="enquiry-form"` and leave the action open.

---

## Next step

1. **Review & edit this file** (`home-revamp-plan.md`) — all six open questions are now resolved (see "Resolved decisions"). Q7 (Astro form handling) is flagged for the opencode build, not blocking the design.
2. When you're happy with the plan, reply **"approved — build it"**, and I'll move into **Design mode** to build the home page as a single self-contained HTML file — dark premium, brand blue accent, structured with `data-od-id` component boundaries and a documented data block so it ports cleanly to Astro.
