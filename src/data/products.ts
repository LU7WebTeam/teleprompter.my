export interface Product {
  name: string;
  price: number;
  currency: string;
  unit: string;
  tag: string;
  img: string;
  alt: string;
  desc: string;
  specs: string[];
  transport: string;
  detailLink: string;
}

export const products: Product[] = [
  {
    name: "Presidential Teleprompter",
    price: 2500,
    currency: "RM",
    unit: "/day",
    tag: "On Stage",
    img: "/assets/product-presidential.jpg",
    alt: "Presidential Teleprompter setup",
    desc: "Step onto the stage with confidence. Seamless delivery that lets you maintain eye contact while following your script, commanding the room with precision and authenticity.",
    specs: [
      "2x TSP2-19 Teleprompters",
      "2x 19\" LCD Monitors · 2x 6' Stands",
      "2x 16\"×17\" Beamsplitter Mirrors",
      "1x 4-Port HDMI Splitter · 3x 25' HDMI Cables",
      "1x Laptop with Teleprompter Software",
      "2x Teleprompter Operators",
    ],
    transport: "Transport FOC · Klang Valley",
    detailLink: "https://teleprompter.my/presidential-teleprompter/",
  },
  {
    name: "Stage TV Teleprompter",
    price: 2100,
    currency: "RM",
    unit: "/day",
    tag: "On Stage",
    img: "/assets/product-stage-tv.jpg",
    alt: "Stage TV Teleprompter setup",
    desc: "Designed to enhance live presentations with seamless, real-time script delivery. Discreetly positioned on stage so speakers stay on point and engaged with the audience.",
    specs: [
      "2x 43\" Stage TV Teleprompter",
      "2x TV Stage Bracket Mount",
      "1x Laptop with Teleprompter Software",
      "1x 20m HDMI Cable · 1x HDMI Splitter",
      "1x Operator · 1x Crew",
    ],
    transport: "Transport FOC · Klang Valley",
    detailLink: "https://teleprompter.my/stage-tv-teleprompter/",
  },
  {
    name: "22\" Monitor Teleprompter",
    price: 2000,
    currency: "RM",
    unit: "/day",
    tag: "On Camera",
    img: "/assets/product-monitor.jpg",
    alt: "22 inch Monitor Teleprompter setup",
    desc: "Ideal for content creators, anchors, and speakers. A sleek device that attaches to your existing monitor, transforming it into a discreet teleprompter for effortless delivery on camera.",
    specs: [
      "1x 22\" Monitor Teleprompter",
      "1x Coated Beam Splitter · 1x Frame + Hood",
      "1x Monitor Adjustable Mounting Tray · 1x 22\" Monitor",
      "1x 20m HDMI Cable · 1x Heavy Duty Tripod",
      "1x Laptop with Teleprompter Software · 1x Operator",
    ],
    transport: "Transport FOC · Klang Valley",
    detailLink: "https://teleprompter.my/monitor-teleprompter/",
  },
  {
    name: "Ultralight iPad Teleprompter",
    price: 1200,
    currency: "RM",
    unit: "/day",
    tag: "On Camera",
    img: "/assets/product-ipad.jpg",
    alt: "Ultralight iPad Teleprompter setup",
    desc: "The compact solution for polished presentations. Lightweight and portable, ideal for on-the-go professionals, content creators, and educators who need clarity on the move.",
    specs: [
      "1x Teleprompter · 1x iPad with Teleprompter App",
      "1x Clear Beam Splitter · 1x Frame + Hood",
      "1x Monitor Adjustable Mounting Tray · 1x Tripod",
      "1x Operator",
    ],
    transport: "Transport FOC · Klang Valley",
    detailLink: "https://teleprompter.my/ultralight-ipad-teleprompter/",
  },
];
