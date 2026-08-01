export const site = {
  name: "TelePrompter.my",
  title: "TelePrompter.my — Rent a Teleprompter Anywhere in Malaysia",
  description:
    'Rent professional teleprompters anywhere in Malaysia. Presidential, Stage TV, 22" Monitor and iPad teleprompter rental for corporate events, broadcasts and video shoots. Operated by Video Production KL Sdn Bhd.',
  url: "https://teleprompter.my",
  base: import.meta.env.BASE_URL,
  ogImage: "assets/hero-2.webp",
  keywords: "teleprompter rental Malaysia, presidential teleprompter, stage TV teleprompter, monitor teleprompter, iPad teleprompter, teleprompter Kuala Lumpur, event teleprompter rental, broadcast teleprompter",
  twitterHandle: "@telepromptermy",
  locale: "en_MY",
  base: import.meta.env.BASE_URL,
  contact: {
    address: {
      line1: "West Wing 1st Floor,",
      line2: "Bangunan ECM Libra,",
      line3: "8, Jalan Damansara Endah,",
      line4: "50490 Kuala Lumpur, Malaysia.",
    },
    email: "info@teleprompter.my",
    whatsapp: {
      number: "+6011-3307 8724",
      href: "https://wa.me/601133078724",
      prefill:
        "Hi, I'm interested in your teleprompter service. Can I book your services?",
    },
    mobile: "+6011-3307 8724",
    mobileHref: "tel:+601133078724",
  },
  nav: {
    products: {
      onCamera: [
        { label: "iPad Teleprompter", href: `${import.meta.env.BASE_URL}ipad-teleprompter/` },
        { label: "Monitor Teleprompter", href: `${import.meta.env.BASE_URL}monitor-teleprompter/` },
      ],
      onStage: [
        { label: "Presidential Teleprompter", href: `${import.meta.env.BASE_URL}presidential-teleprompter/` },
        { label: "Stage TV Teleprompter", href: `${import.meta.env.BASE_URL}stage-tv-teleprompter/` },
      ],
    },
    links: [
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact-us" },
    ],
  },
  footer: {
    tagline:
      "Professional teleprompter rental services designed to ensure seamless delivery for speeches, presentations, and productions — reliable and user-friendly solutions for events, broadcasts, and video shoots of any scale.",
    copyright: "© 2026 TelePrompter.my by Video Production KL Sdn Bhd | All Rights Reserved.",
    managedBy: "Video Production KL Sdn Bhd",
    managedByHref: "https://www.videoproductionkl.com",
    termsLink: "https://teleprompter.my/terms-services/",
    privacyLink: "https://teleprompter.my/privacy-policy/",
  },
};
