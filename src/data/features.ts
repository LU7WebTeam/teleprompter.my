export interface Feature {
  num: string;
  title: string;
  desc: string;
  icon: string;
}

export const features: Feature[] = [
  {
    num: "01",
    title: "Nationwide Coverage",
    desc: "We bring our services to you, no matter where you are in Malaysia.",
    icon: "location",
  },
  {
    num: "02",
    title: "Professional Equipment",
    desc: "Enjoy crystal-clear displays and seamless functionality.",
    icon: "monitor",
  },
  {
    num: "03",
    title: "Custom Solutions",
    desc: "Tailored setups to fit your specific needs.",
    icon: "sliders",
  },
  {
    num: "04",
    title: "Affordable Rates",
    desc: "High-quality services that won't break the bank.",
    icon: "currency",
  },
  {
    num: "05",
    title: "Expert Support",
    desc: "Our team ensures everything runs smoothly from setup to tear down.",
    icon: "check-circle",
  },
];
