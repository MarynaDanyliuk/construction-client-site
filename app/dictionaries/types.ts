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
  contacts: {
    title: string;
    text: string;
    description: string;
    addressTitle: string;
    phoneTitle: string;
    socialTitle: string;
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

  // Portfolio
  portfolio: {
    title: string;
    text: string;
  };

  // Order / Contact Form
  orderTitle: string;
  orderDescription: string;
  formName: string;
  formMessage: string;
  formSubmit: string;

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
    portfolioTitle: string;
    portfolioDescription: string;
    orderTitle: string;
    orderDescription: string;
  };
};
