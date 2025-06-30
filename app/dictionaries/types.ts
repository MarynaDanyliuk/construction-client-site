export type Dictionary = {
  siteName: string;
  home: string;
  cases: string;
  services: {
    title: string;
    item1: string;
    item2: string;
    item3: string;
  };
  about: {
    title: string;
    text: string;
  };
  contact: {
    title: string;
    text: string;
  };
  homeTitle: string;
  homeDescription: string;
  homeCTA: string;
  feature1Title: string;
  feature1Description: string;
  feature2Title: string;
  feature2Description: string;
  feature3Title: string;
  feature3Description: string;
  feature4Title: string;
  feature4Description: string;

  // головні мета-теги для сторінки
  metaTitle: string;
  metaDescription: string;

  // мета-теги для кожної сторінки окремо
  meta: {
    homeTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
};
