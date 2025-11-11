// Message types for landing feature
// Only type declarations are allowed in .d.ts

export interface NotFoundMessages {
  headline: string;
  subtext: string;
  description: string;
  cta: {
    home: string;
  };
}

export interface ContactFormMessages {
  name: string;
  email: string;
  phone: string;
  message: string;
  submit: string;
  success: string;
}

export interface ContactMessages {
  heading: string;
  address: string;
  hours: string;
  phone: string;
  copyright: string;
  tagline: string;
  cta: {
    directions: string;
  };
  social: {
    instagram: string;
    threads: string;
  };
  // Optional form block for enterprise sites that include inbound contact capture
  form?: ContactFormMessages;
}

export interface GalleryMessages {
  heading: string;
  body: string[];
  social: {
    instagram: string;
    threads: string;
  };
}

export interface ServicesItemMessages {
  title: string;
  description: string;
  detail: string;
  smallLine: string;
  icon: string;
  image: string;
}

export interface ServicesMessages {
  heading: string;
  subtext: string;
  intro: string;
  items: ServicesItemMessages[];
  helpSection: {
    heading: string;
    body: string;
  };
  cta: {
    book: string;
  };
}

export interface AboutMessages {
  heading: string;
  body: string[];
  title: string;
  subtitle: string;
  story: {
    heading: string;
    content: string;
  };
  values: {
    heading: string;
    precision: { title: string; description: string };
    excellence: { title: string; description: string };
    tradition: { title: string; description: string };
  };
}

export interface HeroMessages {
  headline: string;
  subtext: string;
  description: string;
  cta: { book: string };
}

export interface Messages {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    gallery: string;
    about: string;
    contact: string;
  };
  hero: HeroMessages;
  about: AboutMessages;
  whyPeopleComeBack: {
    heading: string;
    items: { icon: string; text: string }[];
    smallLine: string;
  };
  services: ServicesMessages;
  gallery: GalleryMessages;
  testimonials: {
    heading: string;
    items: string[];
  };
  contact: ContactMessages;
  // Optional section; not required in all locales
  notFound?: NotFoundMessages;
}


