export interface Product {
  name: string;
  slug: string;
  price: number;
  currency: string;
  unit: string;
  tag: string;
  img: string;
  alt: string;
  desc: string;
  longDesc: string;
  specs: string[];
  transport: string;
  detailLink: string;
  gallery: { img: string; alt: string; caption: string }[];
}

export const products: Product[] = [
  {
    name: "Presidential Teleprompter",
    slug: "presidential-teleprompter",
    price: 2500,
    currency: "RM",
    unit: "/day",
    tag: "On Stage",
    img: "assets/product-presidential.jpg",
    alt: "Presidential Teleprompter setup",
    desc: "Step onto the stage with confidence. Seamless delivery that lets you maintain eye contact while following your script, commanding the room with precision and authenticity.",
    longDesc: "Step onto the stage with confidence using our Presidential Teleprompter. Elevate your speeches, presentations, and addresses to a new level of professionalism. This cutting-edge technology ensures seamless delivery, allowing you to maintain eye contact while effortlessly following your script. Command the room with precision and authenticity using our Presidential Teleprompter solution.",
    specs: [
      "2x TSP2-19 Teleprompters",
      "2x 19\" LCD Monitors",
      "2x 6' Stands",
      "2x 16\" × 17\" Beamsplitter Mirrors",
      "1x 4-Port HDMI Splitter",
      "3x 25' HDMI Cables Included",
      "1x Laptop with Teleprompter Software",
      "2x Teleprompter Operators",
    ],
    transport: "Transport FOC · Klang Valley",
    detailLink: "https://teleprompter.my/presidential-teleprompter/",
    gallery: [
      { img: "assets/gallery-1.jpg", alt: "PMX at a podium using transparent teleprompter screens during a formal event.", caption: "Formal address with teleprompter screens" },
      { img: "assets/gallery-6.jpg", alt: "Podium with dual Presidential Teleprompters set up for a speech.", caption: "Dual Presidential teleprompters" },
      { img: "assets/gallery-7.jpg", alt: "Speaker in green batik delivering a speech using Presidential Teleprompter screens.", caption: "Conference — live address" },
      { img: "assets/hero-2.webp", alt: "Dual Presidential Teleprompter setup at a formal event.", caption: "Presidential setup at a formal event" },
    ],
  },
  {
    name: "Stage TV Teleprompter",
    slug: "stage-tv-teleprompter",
    price: 2100,
    currency: "RM",
    unit: "/day",
    tag: "On Stage",
    img: "assets/product-stage-tv.jpg",
    alt: "Stage TV Teleprompter setup",
    desc: "Designed to enhance live presentations with seamless, real-time script delivery. Discreetly positioned on stage so speakers stay on point and engaged with the audience.",
    longDesc: "Designed to enhance live presentations with seamless, real-time script delivery. Discreetly positioned on stage so speakers stay on point and engaged with the audience. Ideal for conferences, award ceremonies, and large-scale events where visibility matters.",
    specs: [
      "2x 43\" Stage TV Teleprompter",
      "2x TV Stage Bracket Mount",
      "1x Laptop with Teleprompter Software",
      "1x 20m HDMI Cable · 1x HDMI Splitter",
      "1x Operator · 1x Crew",
    ],
    transport: "Transport FOC · Klang Valley",
    detailLink: "https://teleprompter.my/stage-tv-teleprompter/",
    gallery: [
      { img: "assets/gallery-4.jpg", alt: "Large angled stage TV teleprompter displaying colorful text at an event.", caption: "Stage TV teleprompter at an event" },
      { img: "assets/gallery-5.jpg", alt: "Stage TV Teleprompter screen on the floor showing countdown numbers.", caption: "Floor prompter — countdown mode" },
    ],
  },
  {
    name: '22" Monitor Teleprompter',
    slug: "monitor-teleprompter",
    price: 2000,
    currency: "RM",
    unit: "/day",
    tag: "On Camera",
    img: "assets/product-monitor.jpg",
    alt: "22 inch Monitor Teleprompter setup",
    desc: "Ideal for content creators, anchors, and speakers. A sleek device that attaches to your existing monitor, transforming it into a discreet teleprompter for effortless delivery on camera.",
    longDesc: "Ideal for content creators, anchors, and speakers. A sleek device that attaches to your existing monitor, transforming it into a discreet teleprompter for effortless delivery on camera. Perfect for studio recordings, corporate videos, and broadcast environments.",
    specs: [
      "1x 22\" Monitor Teleprompter",
      "1x Coated Beam Splitter · 1x Frame + Hood",
      "1x Monitor Adjustable Mounting Tray · 1x 22\" Monitor",
      "1x 20m HDMI Cable · 1x Heavy Duty Tripod",
      "1x Laptop with Teleprompter Software · 1x Operator",
    ],
    transport: "Transport FOC · Klang Valley",
    detailLink: "https://teleprompter.my/monitor-teleprompter/",
    gallery: [
      { img: "assets/gallery-3.jpg", alt: "Monitor Teleprompter system in a modern office setting.", caption: '22" Monitor teleprompter in studio' },
      { img: "assets/hero-4.webp", alt: "22 inch Monitor Teleprompter close-up.", caption: "Monitor teleprompter close-up" },
    ],
  },
  {
    name: "Ultralight iPad Teleprompter",
    slug: "ipad-teleprompter",
    price: 1200,
    currency: "RM",
    unit: "/day",
    tag: "On Camera",
    img: "assets/product-ipad.jpg",
    alt: "Ultralight iPad Teleprompter setup",
    desc: "The compact solution for polished presentations. Lightweight and portable, ideal for on-the-go professionals, content creators, and educators who need clarity on the move.",
    longDesc: "The compact solution for polished presentations. Lightweight and portable, ideal for on-the-go professionals, content creators, and educators who need clarity on the move. Set up in minutes with an iPad and tripod — perfect for smaller productions and remote shoots.",
    specs: [
      "1x Teleprompter · 1x iPad with Teleprompter App",
      "1x Clear Beam Splitter · 1x Frame + Hood",
      "1x Monitor Adjustable Mounting Tray · 1x Tripod",
      "1x Operator",
    ],
    transport: "Transport FOC · Klang Valley",
    detailLink: "https://teleprompter.my/ultralight-ipad-teleprompter/",
    gallery: [
      { img: "assets/gallery-2.jpg", alt: "Close-up of a professional iPad teleprompter setup mounted on a tripod.", caption: "iPad teleprompter on tripod" },
      { img: "assets/gallery-8.jpg", alt: "iPad teleprompter setup at a show with a panel speaker seated nearby.", caption: "Panel session with iPad prompter" },
      { img: "assets/hero-1.webp", alt: "iPad teleprompter mounted on a tripod with a professional camera.", caption: "iPad teleprompter ready for production" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
